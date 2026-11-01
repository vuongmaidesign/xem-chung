import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { RoomManager, getYouTubeMetadata } from './rooms.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.join(__dirname, '../../client/dist');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

const roomManager = new RoomManager();

// REST API Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// REST API lấy thông tin video YouTube
app.get('/api/video-info', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'URL không được để trống' });
  }
  try {
    const meta = await getYouTubeMetadata(String(url));
    res.json(meta);
  } catch (err) {
    res.status(400).json({ error: err.message || 'Không thể lấy thông tin video' });
  }
});

// Socket.io Realtime Logic
io.on('connection', (socket) => {
  let currentRoomId = null;

  // Tham gia phòng
  socket.on('join-room', ({ roomId, nickname, avatar, color }) => {
    const cleanRoomId = (roomId || 'phong-01').toLowerCase().trim();
    currentRoomId = cleanRoomId;
    socket.join(cleanRoomId);

    const { room, user } = roomManager.addUser(cleanRoomId, socket.id, { nickname, avatar, color });

    // Gửi state đầy đủ cho người mới vào
    socket.emit('room-state', roomManager.getRoomState(cleanRoomId));

    socket.to(cleanRoomId).emit('user-joined', {
      user,
      totalUsers: room.users.size,
    });
    // Đồng bộ sơ đồ ghế mới ngay cho toàn phòng
    io.to(cleanRoomId).emit('seats-updated', {
      seats: room.seats,
      users: Array.from(room.users.values()),
    });

    console.log(`[${cleanRoomId}] Khán giả "${user.nickname}" (${socket.id}) vào rạp`);
  });

  // Chọn ghế ngồi
  socket.on('select-seat', ({ seatId }) => {
    if (!currentRoomId) return;
    const success = roomManager.assignSeat(currentRoomId, socket.id, seatId);
    if (success) {
      const room = roomManager.getOrCreateRoom(currentRoomId);
      io.to(currentRoomId).emit('seats-updated', {
        seats: room.seats,
        users: Array.from(room.users.values()),
      });
    }
  });

  // Rời ghế ngồi
  socket.on('leave-seat', () => {
    if (!currentRoomId) return;
    const success = roomManager.leaveSeat(currentRoomId, socket.id);
    if (success) {
      const room = roomManager.getOrCreateRoom(currentRoomId);
      io.to(currentRoomId).emit('seats-updated', {
        seats: room.seats,
        users: Array.from(room.users.values()),
      });
    }
  });

  // Lên / Xuống sân khấu
  socket.on('toggle-stage', ({ isStage }) => {
    if (!currentRoomId) return;
    roomManager.toggleStage(currentRoomId, socket.id, isStage);
    const room = roomManager.getOrCreateRoom(currentRoomId);
    io.to(currentRoomId).emit('seats-updated', {
      seats: room.seats,
      users: Array.from(room.users.values()),
    });
  });

  // Đổi trang phục / Tên hiển thị (Tủ đồ)
  socket.on('update-profile', (profile) => {
    if (!currentRoomId) return;
    roomManager.updateProfile(currentRoomId, socket.id, profile);
    const room = roomManager.getOrCreateRoom(currentRoomId);
    io.to(currentRoomId).emit('seats-updated', {
      seats: room.seats,
      users: Array.from(room.users.values()),
    });
  });

  // Đồng bộ Play / Pause / Seek (CHỈ DÀNH CHO HOST/ADMIN PHÒNG)
  socket.on('sync-action', ({ action, time }) => {
    if (!currentRoomId) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    if (room.hostId && room.hostId !== socket.id) {
      // Khán giả thông thường không có quyền pause/seek làm gián đoạn rạp chiếu
      return;
    }
    const updatedPlayback = roomManager.updatePlayback(currentRoomId, { action, time });
    if (updatedPlayback) {
      socket.to(currentRoomId).emit('sync-playback', {
        action,
        time: updatedPlayback.currentTime,
        isPlaying: updatedPlayback.isPlaying,
        by: socket.id,
      });
    }
  });

  // Khi hết video (Client báo về): Tự động chuyển bài hoặc LẶP LẠI FULL BÀI TỪ ĐẦU
  socket.on('video-ended', () => {
    if (!currentRoomId) return;
    const result = roomManager.playNext(currentRoomId);
    const room = roomManager.getOrCreateRoom(currentRoomId);

    if (result) {
      io.to(currentRoomId).emit('video-changed', {
        video: result.video,
        playback: room.playback,
        isLoop: result.isLoop,
      });
      io.to(currentRoomId).emit('queue-updated', room.queue);
    }
  });

  // Bấm chuyển / Skip bài trực tiếp (CHỈ DÀNH CHO HOST/ADMIN, KHÁN GIẢ PHẢI BẤM VOTE BỎ QUA)
  socket.on('skip-video', () => {
    if (!currentRoomId) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    if (room.hostId && room.hostId !== socket.id) {
      return;
    }
    const result = roomManager.playNext(currentRoomId);
    const room = roomManager.getOrCreateRoom(currentRoomId);

    if (result) {
      io.to(currentRoomId).emit('video-changed', {
        video: result.video,
        playback: room.playback,
        isLoop: result.isLoop,
      });
      io.to(currentRoomId).emit('queue-updated', room.queue);
    }
  });

  // Thêm video vào Queue hoặc Phát ngay
  socket.on('add-video', async ({ url, playNow }) => {
    if (!currentRoomId) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    const user = room.users.get(socket.id);
    const addedByName = user ? user.nickname : 'Khách';

    try {
      const videoMeta = await getYouTubeMetadata(url);
      videoMeta.addedBy = addedByName;
      videoMeta.addedAt = Date.now();

      if (playNow || !room.currentVideo) {
        room.currentVideo = videoMeta;
        room.playback = {
          isPlaying: true,
          currentTime: 0,
          lastUpdatedAt: Date.now(),
        };
        room.skipVotes.clear();
        io.to(currentRoomId).emit('video-changed', {
          video: room.currentVideo,
          playback: room.playback,
          isLoop: false,
        });
      } else {
        room.queue.push(videoMeta);
        io.to(currentRoomId).emit('queue-updated', room.queue);
      }
    } catch (err) {
      socket.emit('error-message', err.message || 'Không thể thêm video này');
    }
  });

  // Xóa video khỏi Queue
  socket.on('remove-from-queue', ({ index }) => {
    if (!currentRoomId) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    if (index >= 0 && index < room.queue.length) {
      room.queue.splice(index, 1);
      io.to(currentRoomId).emit('queue-updated', room.queue);
    }
  });

  // Bỏ phiếu Skip (Vote Skip) - Chuẩn 35% như choigivui.com
  socket.on('vote-skip', () => {
    if (!currentRoomId) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    const hasVoted = room.skipVotes.has(socket.id);

    // Toggle vote
    if (hasVoted) {
      room.skipVotes.delete(socket.id);
    } else {
      room.skipVotes.add(socket.id);
    }

    const totalUsers = room.users.size || 1;
    const requiredVotes = Math.max(1, Math.ceil(totalUsers * 0.35));

    if (room.skipVotes.size >= requiredVotes) {
      const result = roomManager.playNext(currentRoomId);
      io.to(currentRoomId).emit('video-changed', {
        video: result?.video || null,
        playback: room.playback,
        isLoop: result?.isLoop || false,
      });
      io.to(currentRoomId).emit('queue-updated', room.queue);
    } else {
      io.to(currentRoomId).emit('vote-skip-updated', {
        current: room.skipVotes.size,
        required: requiredVotes,
        totalUsers,
        percent: Math.round((room.skipVotes.size / totalUsers) * 100),
      });
    }
  });

  // Gửi tin nhắn Chat
  socket.on('send-message', ({ text }) => {
    if (!currentRoomId || !text || !text.trim()) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    const user = room.users.get(socket.id);
    if (!user) return;

    const message = {
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      userId: socket.id,
      nickname: user.nickname,
      avatar: user.avatar,
      color: user.color,
      seatId: user.seatId,
      text: text.trim().slice(0, 300),
      timestamp: Date.now(),
    };

    room.chat.push(message);
    if (room.chat.length > 100) room.chat.shift();

    io.to(currentRoomId).emit('new-message', message);
  });

  // Gửi Reaction emoji
  socket.on('send-reaction', ({ emoji }) => {
    if (!currentRoomId) return;
    const room = roomManager.getOrCreateRoom(currentRoomId);
    const user = room.users.get(socket.id);

    io.to(currentRoomId).emit('new-reaction', {
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      emoji: emoji || '❤️',
      seatId: user ? user.seatId : null,
      nickname: user ? user.nickname : 'Khán giả',
      color: user ? user.color : '#d8ef82',
    });
  });

  // Khi ngắt kết nối
  socket.on('disconnect', () => {
    if (currentRoomId) {
      const result = roomManager.removeUser(socket.id);
      if (result) {
        const room = roomManager.rooms.get(result.roomId);
        if (room) {
          io.to(result.roomId).emit('user-left', {
            userId: socket.id,
            nickname: result.user.nickname,
            hostId: room.hostId,
            totalUsers: room.users.size,
            seats: room.seats,
            users: Array.from(room.users.values()),
          });
        }
      }
    }
  });
});

// Periodic Sync: Mỗi 3.5 giây phát tín hiệu chuẩn hoá thời gian cho mọi phòng
setInterval(() => {
  for (const [roomId, room] of roomManager.rooms.entries()) {
    if (room.users.size > 0 && room.currentVideo && room.playback.isPlaying) {
      const calculatedTime = roomManager.calculateCurrentTime(room.playback);
      io.to(roomId).emit('heartbeat-sync', {
        time: calculatedTime,
        isPlaying: room.playback.isPlaying,
      });
    }
  }
}, 3500);

// Phục vụ frontend tĩnh nếu đã build
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/socket.io')) {
      return next();
    }
    res.sendFile(path.join(clientDist, 'index.html'));
  });
}

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🎬 86 Cinema Server running on http://localhost:${PORT}`);
});

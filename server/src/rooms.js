import axios from 'axios';

// Khởi tạo sơ đồ rạp 10 hàng ghế (A đến J), mỗi hàng 10 ghế (tổng cộng chuẩn 100 ghế như choigivui.com)
export function createDefaultSeats() {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const seatsPerRow = 10;
  const seats = [];

  rows.forEach((row, rowIndex) => {
    for (let num = 1; num <= seatsPerRow; num++) {
      seats.push({
        id: `${row}${num}`,
        row,
        number: num,
        rowIndex,
        occupiedBy: null, // socketId
      });
    }
  });

  return seats;
}

// Lấy thông tin video YouTube từ URL hoặc ID (sử dụng oEmbed công khai không cần API key)
export async function getYouTubeMetadata(input) {
  let videoId = '';

  const urlRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
  const match = input.match(urlRegex);

  if (match && match[1]) {
    videoId = match[1];
  } else if (/^[a-zA-Z0-9_-]{11}$/.test(input.trim())) {
    videoId = input.trim();
  }

  if (!videoId) {
    throw new Error('Link hoặc Video ID YouTube không hợp lệ!');
  }

  let title = 'YouTube Video';
  let author = 'Unknown';
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const res = await axios.get(oembedUrl, { timeout: 4000 });
    if (res.data) {
      title = res.data.title || title;
      author = res.data.author_name || author;
    }
  } catch (err) {
    console.warn(`Could not fetch oEmbed for ${videoId}, using fallback.`);
  }

  return {
    id: videoId,
    title,
    author,
    thumbnail,
    url: `https://www.youtube.com/watch?v=${videoId}`,
  };
}

export class RoomManager {
  constructor() {
    this.rooms = new Map();
  }

  getOrCreateRoom(roomId) {
    const cleanId = (roomId || 'phong-01').toLowerCase().trim();
    if (!this.rooms.has(cleanId)) {
      this.rooms.set(cleanId, {
        id: cleanId,
        name: `PHÒNG ${cleanId.replace(/[^0-9a-zA-Z]/g, ' ').toUpperCase() || '01'}`,
        hostId: null,
        users: new Map(), // socketId -> user
        seats: createDefaultSeats(),
        currentVideo: {
          id: 'JGwWNGJdvx8',
          title: 'Ed Sheeran - Shape of You (Official Music Video)',
          author: 'Ed Sheeran',
          thumbnail: 'https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
          addedBy: '86 Cinema',
        },
        playback: {
          isPlaying: true,
          currentTime: 0,
          lastUpdatedAt: Date.now(),
        },
        queue: [],
        chat: [],
        skipVotes: new Set(),
      });
    }
    return this.rooms.get(cleanId);
  }

  calculateCurrentTime(playback) {
    if (!playback.isPlaying) {
      return playback.currentTime;
    }
    const elapsedSeconds = (Date.now() - playback.lastUpdatedAt) / 1000;
    return playback.currentTime + elapsedSeconds;
  }

  getRoomState(roomId) {
    const room = this.rooms.get(roomId);
    if (!room) return null;

    const usersList = Array.from(room.users.values());
    const actualCurrentTime = this.calculateCurrentTime(room.playback);
    const requiredVotes = Math.max(1, Math.ceil(usersList.length * 0.35)); // Chuẩn 35% như choigivui.com

    return {
      id: room.id,
      name: room.name,
      hostId: room.hostId,
      users: usersList,
      seats: room.seats,
      currentVideo: room.currentVideo,
      playback: {
        ...room.playback,
        currentTime: actualCurrentTime,
      },
      queue: room.queue,
      chat: room.chat.slice(-60),
      skipVotesCount: room.skipVotes.size,
      requiredVotes,
      totalUsers: usersList.length,
    };
  }

  addUser(roomId, socketId, profile) {
    const room = this.getOrCreateRoom(roomId);

    // Tự động tìm ghế trống để xếp cho khán giả mới vào
    // Ưu tiên các hàng ghế đầu đẹp nhất: A5, A6, A4, A7, B5, B6...
    let assignedSeatId = null;
    const preferredSeatIds = ['A5', 'A6', 'A4', 'A7', 'A3', 'A8', 'B5', 'B6', 'B4', 'B7', 'C5', 'C6'];
    const preferredEmpty = preferredSeatIds.find(id => {
      const s = room.seats.find(seat => seat.id === id);
      return s && !s.occupiedBy;
    });

    if (preferredEmpty) {
      const target = room.seats.find(s => s.id === preferredEmpty);
      if (target) {
        target.occupiedBy = socketId;
        assignedSeatId = preferredEmpty;
      }
    } else {
      const firstEmpty = room.seats.find(s => !s.occupiedBy);
      if (firstEmpty) {
        firstEmpty.occupiedBy = socketId;
        assignedSeatId = firstEmpty.id;
      }
    }

    const user = {
      id: socketId,
      nickname: profile.nickname || `Khán giả_${socketId.slice(0, 4)}`,
      avatar: profile.avatar || '🍿',
      color: profile.color || '#93c5fd',
      seatId: assignedSeatId,
      isStage: false,
      joinedAt: Date.now(),
    };

    room.users.set(socketId, user);

    if (!room.hostId) {
      room.hostId = socketId;
    }

    return { room, user };
  }

  toggleStage(roomId, socketId, isStage) {
    const room = this.rooms.get(roomId);
    if (!room) return false;
    const user = room.users.get(socketId);
    if (!user) return false;

    user.isStage = typeof isStage === 'boolean' ? isStage : !user.isStage;
    return user.isStage;
  }

  updateProfile(roomId, socketId, profile) {
    const room = this.rooms.get(roomId);
    if (!room) return null;
    const user = room.users.get(socketId);
    if (!user) return null;

    if (profile.nickname) user.nickname = profile.nickname;
    if (profile.avatar) user.avatar = profile.avatar;
    if (profile.color) user.color = profile.color;
    return user;
  }

  removeUser(socketId) {
    for (const [roomId, room] of this.rooms.entries()) {
      if (room.users.has(socketId)) {
        const user = room.users.get(socketId);

        if (user.seatId) {
          const seat = room.seats.find((s) => s.id === user.seatId);
          if (seat) seat.occupiedBy = null;
        }

        room.skipVotes.delete(socketId);
        room.users.delete(socketId);

        if (room.hostId === socketId) {
          const nextUser = room.users.keys().next().value;
          room.hostId = nextUser || null;
        }

        return { roomId, user };
      }
    }
    return null;
  }

  assignSeat(roomId, socketId, seatId) {
    const room = this.rooms.get(roomId);
    if (!room) return false;

    const user = room.users.get(socketId);
    if (!user) return false;

    const targetSeat = room.seats.find((s) => s.id === seatId);
    if (!targetSeat || (targetSeat.occupiedBy && targetSeat.occupiedBy !== socketId)) {
      return false; // Ghế đã có người
    }

    if (user.seatId) {
      const oldSeat = room.seats.find((s) => s.id === user.seatId);
      if (oldSeat) oldSeat.occupiedBy = null;
    }

    targetSeat.occupiedBy = socketId;
    user.seatId = seatId;
    return true;
  }

  leaveSeat(roomId, socketId) {
    const room = this.rooms.get(roomId);
    if (!room) return false;

    const user = room.users.get(socketId);
    if (!user || !user.seatId) return false;

    const seat = room.seats.find((s) => s.id === user.seatId);
    if (seat) seat.occupiedBy = null;
    user.seatId = null;
    return true;
  }

  updatePlayback(roomId, { action, time }) {
    const room = this.rooms.get(roomId);
    if (!room) return null;

    if (action === 'play') {
      room.playback.isPlaying = true;
      room.playback.currentTime = typeof time === 'number' ? time : room.playback.currentTime;
      room.playback.lastUpdatedAt = Date.now();
    } else if (action === 'pause') {
      room.playback.isPlaying = false;
      room.playback.currentTime = typeof time === 'number' ? time : this.calculateCurrentTime(room.playback);
      room.playback.lastUpdatedAt = Date.now();
    } else if (action === 'seek') {
      room.playback.currentTime = time;
      room.playback.lastUpdatedAt = Date.now();
    }

    return room.playback;
  }

  // Chuyển bài hoặc Lặp lại FULL bài nếu hết link
  playNext(roomId) {
    const room = this.rooms.get(roomId);
    if (!room) return null;

    room.skipVotes.clear();

    // Trường hợp 1: Có bài trong hàng đợi (Queue) -> Chuyển sang bài tiếp theo
    if (room.queue.length > 0) {
      room.currentVideo = room.queue.shift();
      room.playback = {
        isPlaying: true,
        currentTime: 0,
        lastUpdatedAt: Date.now(),
      };
      return { video: room.currentVideo, isLoop: false };
    }

    // Trường hợp 2: Hàng đợi rỗng -> LẶP LẠI FULL BÀI HIỆN TẠI (Full Replay từ giây 0)
    if (room.currentVideo) {
      room.playback = {
        isPlaying: true,
        currentTime: 0,
        lastUpdatedAt: Date.now(),
      };
      return { video: room.currentVideo, isLoop: true };
    }

    return null;
  }
}

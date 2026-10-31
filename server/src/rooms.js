import axios from 'axios';

// Khởi tạo sơ đồ rạp 4 hàng ghế (A, B, C, D), mỗi hàng 8 ghế (tổng 32 ghế)
export function createDefaultSeats() {
  const rows = ['A', 'B', 'C', 'D'];
  const seatsPerRow = 8;
  const seats = [];

  rows.forEach((row, rowIndex) => {
    for (let num = 1; num <= seatsPerRow; num++) {
      seats.push({
        id: `${row}${num}`,
        row,
        number: num,
        rowIndex,
        occupiedBy: null, // userId
      });
    }
  });

  return seats;
}

// Lấy thông tin video YouTube từ URL hoặc ID (sử dụng oEmbed công khai không cần API key)
export async function getYouTubeMetadata(input) {
  let videoId = '';

  // Extract video ID từ các dạng link YouTube:
  // https://www.youtube.com/watch?v=XXXX
  // https://youtu.be/XXXX
  // https://www.youtube.com/shorts/XXXX
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
    // Không sao, vẫn có videoId và thumbnail để phát
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
    const cleanId = (roomId || 'cinema-main').toLowerCase().trim();
    if (!this.rooms.has(cleanId)) {
      this.rooms.set(cleanId, {
        id: cleanId,
        name: `Phòng ${cleanId}`,
        hostId: null,
        users: new Map(), // socketId -> user
        seats: createDefaultSeats(),
        currentVideo: {
          id: '5qap5aO4i9A', // Lofi hip hop chill beats mặc định
          title: 'lofi hip hop radio - beats to relax/study to',
          author: 'Lofi Girl',
          thumbnail: 'https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
          addedBy: 'Hệ thống',
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
      chat: room.chat.slice(-50),
      skipVotesCount: room.skipVotes.size,
      totalUsers: usersList.length,
    };
  }

  addUser(roomId, socketId, profile) {
    const room = this.getOrCreateRoom(roomId);
    const user = {
      id: socketId,
      nickname: profile.nickname || `Khách_${socketId.slice(0, 4)}`,
      avatar: profile.avatar || '🍿',
      color: profile.color || '#e11d48',
      seatId: null,
      joinedAt: Date.now(),
    };

    room.users.set(socketId, user);

    // Người đầu tiên vào phòng sẽ là Host
    if (!room.hostId) {
      room.hostId = socketId;
    }

    return { room, user };
  }

  removeUser(socketId) {
    for (const [roomId, room] of this.rooms.entries()) {
      if (room.users.has(socketId)) {
        const user = room.users.get(socketId);

        // Giải phóng ghế nếu đang ngồi
        if (user.seatId) {
          const seat = room.seats.find((s) => s.id === user.seatId);
          if (seat) seat.occupiedBy = null;
        }

        // Bỏ vote skip
        room.skipVotes.delete(socketId);

        // Xoá user
        room.users.delete(socketId);

        // Nếu là Host, chuyển quyền cho người tiếp theo
        if (room.hostId === socketId) {
          const nextUser = room.users.keys().next().value;
          room.hostId = nextUser || null;
        }

        // Nếu phòng trống rỗng và không phải phòng chính thì dọn dẹp sau 5 phút
        if (room.users.size === 0 && roomId !== 'cinema-main') {
          setTimeout(() => {
            const current = this.rooms.get(roomId);
            if (current && current.users.size === 0) {
              this.rooms.delete(roomId);
            }
          }, 300000);
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
      return false; // Ghế đã có người ngồi
    }

    // Nếu user đang ngồi ghế khác, giải phóng ghế cũ
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

  playNext(roomId) {
    const room = this.rooms.get(roomId);
    if (!room) return null;

    if (room.queue.length > 0) {
      room.currentVideo = room.queue.shift();
      room.playback = {
        isPlaying: true,
        currentTime: 0,
        lastUpdatedAt: Date.now(),
      };
      room.skipVotes.clear();
      return room.currentVideo;
    }
    return null;
  }
}

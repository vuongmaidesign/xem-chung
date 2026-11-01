import mqtt from 'mqtt';

// Cloud Realtime Engine cho 86 Cinema (Chạy mượt 100% trên GitHub Pages & Mọi trình duyệt)
// Sử dụng MQTT qua Secure WebSocket (wss://broker.emqx.io:8084/mqtt)
export class CloudRoomSync {
  constructor({
    roomId,
    myUser,
    onStateUpdate,
    onUserJoined,
    onUserLeft,
    onSeatsUpdated,
    onVideoChanged,
    onSyncPlayback,
    onQueueUpdated,
    onVoteSkipUpdated,
    onMessage,
    onReaction,
  }) {
    this.roomId = (roomId || '01').toLowerCase().replace(/[^a-z0-9]/g, '');
    this.topic = `cine86/rooms/v3/${this.roomId}`;
    this.myUser = { ...myUser };
    this.clientId = `c86_${myUser.id}_${Math.random().toString(36).substring(2, 7)}`;

    this.onStateUpdate = onStateUpdate;
    this.onUserJoined = onUserJoined;
    this.onUserLeft = onUserLeft;
    this.onSeatsUpdated = onSeatsUpdated;
    this.onVideoChanged = onVideoChanged;
    this.onSyncPlayback = onSyncPlayback;
    this.onQueueUpdated = onQueueUpdated;
    this.onVoteSkipUpdated = onVoteSkipUpdated;
    this.onMessage = onMessage;
    this.onReaction = onReaction;

    this.isHost = false;
    this.hostId = null;
    this.knownPeers = new Map(); // userId -> { user, lastSeen, isHost }
    this.heartbeatTimer = null;
    this.peerCheckTimer = null;
    this.client = null;
    this.isDestroyed = false;
    this.joinedAt = Date.now();

    this.getCurrentPlayback = null;
    this.getCurrentRoomState = null;

    this.init();
  }

  init() {
    console.log(`[CloudSync] Đang kết nối tới mạng rạp chiếu phim toàn cầu (Phòng ${this.roomId})...`);

    // Kết nối tới public MQTT WebSocket broker bảo mật (WSS)
    this.client = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
      clientId: this.clientId,
      clean: true,
      connectTimeout: 6000,
      reconnectPeriod: 3000,
    });

    this.client.on('connect', () => {
      console.log(`[CloudSync] Đã kết nối thành công tới phòng ${this.roomId}!`);
      this.client.subscribe(this.topic, { qos: 0 }, (err) => {
        if (!err) {
          // Gửi thông điệp tham gia phòng cho tất cả khán giả khác
          this.publish({
            type: 'join',
            user: this.myUser,
            joinedAt: this.joinedAt,
          });

          // Yêu cầu lấy thông tin phòng hiện tại từ Host
          this.publish({
            type: 'request-state',
            userId: this.myUser.id,
          });
        }
      });
    });

    this.client.on('message', (topic, payload) => {
      if (this.isDestroyed) return;
      try {
        const msg = JSON.parse(payload.toString());
        // Bỏ qua tin nhắn do chính mình gửi đi (trừ trường hợp đặc biệt)
        if (msg.senderClientId === this.clientId) return;
        this.handleMessage(msg);
      } catch (e) {
        console.warn('[CloudSync] Lỗi giải mã gói tin:', e);
      }
    });

    this.client.on('error', (err) => {
      console.warn('[CloudSync] Lỗi kết nối MQTT:', err);
    });

    // Định kỳ gửi nhịp đập tim (Heartbeat) và kiểm tra khán giả online
    this.peerCheckTimer = setInterval(() => {
      if (this.isDestroyed) return;

      // Host định kỳ gửi thời gian video để tất cả khán giả khớp nhịp
      if (this.isHost && this.getCurrentPlayback) {
        const pb = this.getCurrentPlayback();
        this.publish({
          type: 'heartbeat-sync',
          playback: pb,
          hostId: this.myUser.id,
        });
      }

      // Gửi tín hiệu sống (Ping)
      this.publish({
        type: 'ping',
        user: this.myUser,
        joinedAt: this.joinedAt,
        isHost: this.isHost,
      });

      // Kiểm tra người nào quá 12 giây không ping thì coi như đã rời rạp
      const now = Date.now();
      for (const [uid, p] of this.knownPeers.entries()) {
        if (now - p.lastSeen > 12000) {
          console.log(`[CloudSync] Khán giả ${p.user.nickname} đã rời phòng`);
          this.knownPeers.delete(uid);
          if (this.onUserLeft) {
            this.onUserLeft(uid);
          }

          // Nếu người vừa rời là Host, người tham gia sớm nhất sẽ trở thành Host mới
          if (this.hostId === uid) {
            this.electNewHost();
          }
        }
      }

      // Nếu chỉ có một mình trong phòng, tự động làm Host
      if (this.knownPeers.size === 0 && !this.isHost) {
        this.isHost = true;
        this.hostId = this.myUser.id;
      }
    }, 3000);
  }

  electNewHost() {
    let earliest = this.joinedAt;
    let newHostId = this.myUser.id;

    for (const [uid, p] of this.knownPeers.entries()) {
      if (p.joinedAt && p.joinedAt < earliest) {
        earliest = p.joinedAt;
        newHostId = uid;
      }
    }

    this.hostId = newHostId;
    this.isHost = newHostId === this.myUser.id;
    console.log(`[CloudSync] Host mới của phòng là: ${this.hostId} (Tôi là Host: ${this.isHost})`);
  }

  publish(data) {
    if (!this.client || !this.client.connected) return;
    const packet = {
      ...data,
      senderClientId: this.clientId,
      senderUserId: this.myUser.id,
      timestamp: Date.now(),
    };
    this.client.publish(this.topic, JSON.stringify(packet), { qos: 0 });
  }

  handleMessage(msg) {
    switch (msg.type) {
      case 'join': {
        const incomingUser = msg.user;
        if (!incomingUser || incomingUser.id === this.myUser.id) return;

        this.knownPeers.set(incomingUser.id, {
          user: incomingUser,
          lastSeen: Date.now(),
          joinedAt: msg.joinedAt || Date.now(),
          isHost: false,
        });

        if (this.onUserJoined) {
          this.onUserJoined(incomingUser);
        }

        // Nếu mình là Host, phản hồi lại toàn bộ dữ liệu phòng cho người mới
        if (this.isHost && this.getCurrentRoomState) {
          const currentState = this.getCurrentRoomState();
          this.publish({
            type: 'room-state',
            targetUserId: incomingUser.id,
            state: currentState,
            hostId: this.myUser.id,
          });
        }
        break;
      }

      case 'ping': {
        const pUser = msg.user;
        if (!pUser || pUser.id === this.myUser.id) return;

        const isKnown = this.knownPeers.has(pUser.id);
        this.knownPeers.set(pUser.id, {
          user: pUser,
          lastSeen: Date.now(),
          joinedAt: msg.joinedAt || Date.now(),
          isHost: Boolean(msg.isHost),
        });

        if (!isKnown && this.onUserJoined) {
          this.onUserJoined(pUser);
        }

        if (msg.isHost) {
          this.hostId = pUser.id;
          if (this.myUser.id !== pUser.id && msg.joinedAt < this.joinedAt) {
            this.isHost = false;
          }
        }
        break;
      }

      case 'request-state': {
        if (this.isHost && this.getCurrentRoomState) {
          const currentState = this.getCurrentRoomState();
          this.publish({
            type: 'room-state',
            targetUserId: msg.userId,
            state: currentState,
            hostId: this.myUser.id,
          });
        }
        break;
      }

      case 'room-state': {
        // Chỉ nhận nếu đây là tin nhắn cho tất cả hoặc gửi riêng cho mình
        if (!msg.targetUserId || msg.targetUserId === this.myUser.id) {
          if (msg.hostId) {
            this.hostId = msg.hostId;
            this.isHost = msg.hostId === this.myUser.id;
          }
          if (msg.state && this.onStateUpdate) {
            this.onStateUpdate(msg.state);
          }
        }
        break;
      }

      case 'heartbeat-sync': {
        if (msg.hostId) {
          this.hostId = msg.hostId;
          this.isHost = msg.hostId === this.myUser.id;
        }
        if (this.onSyncPlayback && msg.playback) {
          this.onSyncPlayback(msg.playback);
        }
        break;
      }

      case 'seats-updated': {
        if (this.onSeatsUpdated) {
          this.onSeatsUpdated(msg.seats, msg.users);
        }
        break;
      }

      case 'video-changed': {
        if (this.onVideoChanged) {
          this.onVideoChanged(msg.video, msg.playback);
        }
        break;
      }

      case 'queue-updated': {
        if (this.onQueueUpdated) {
          this.onQueueUpdated(msg.queue);
        }
        break;
      }

      case 'vote-skip-updated': {
        if (this.onVoteSkipUpdated) {
          this.onVoteSkipUpdated({
            current: msg.current,
            required: msg.required,
            totalUsers: msg.totalUsers,
          });
        }
        break;
      }

      case 'chat-message': {
        if (this.onMessage) {
          this.onMessage(msg.message);
        }
        break;
      }

      case 'reaction': {
        if (this.onReaction) {
          this.onReaction(msg.reaction);
        }
        break;
      }

      case 'leave': {
        if (msg.userId && this.onUserLeft) {
          this.knownPeers.delete(msg.userId);
          this.onUserLeft(msg.userId);
          if (this.hostId === msg.userId) {
            this.electNewHost();
          }
        }
        break;
      }

      default:
        break;
    }
  }

  // CÁC HÀM TƯƠNG TÁC GỬI ĐI TỪ CLIENT
  sendChatMessage(text, isStage = false) {
    const msg = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      user: this.myUser.nickname,
      color: this.myUser.color,
      text,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      isStage,
      userId: this.myUser.id,
    };
    this.publish({ type: 'chat-message', message: msg });
    if (this.onMessage) this.onMessage(msg);
  }

  sendReaction(emoji) {
    const rx = {
      id: `rx_${Date.now()}`,
      emoji,
      user: this.myUser.nickname,
      userId: this.myUser.id,
    };
    this.publish({ type: 'reaction', reaction: rx });
    if (this.onReaction) this.onReaction(rx);
  }

  selectSeat(seatId, allSeats, allUsers) {
    const updatedSeats = allSeats.map((st) => {
      if (st.id === seatId) return { ...st, occupiedBy: this.myUser.id };
      if (st.occupiedBy === this.myUser.id) return { ...st, occupiedBy: null };
      return st;
    });

    const updatedUsers = allUsers.map((u) => {
      if (u.id === this.myUser.id) {
        return { ...u, seatId, isStage: false };
      }
      return u;
    });

    this.myUser.seatId = seatId;
    this.myUser.isStage = false;

    this.publish({
      type: 'seats-updated',
      seats: updatedSeats,
      users: updatedUsers,
    });
    if (this.onSeatsUpdated) this.onSeatsUpdated(updatedSeats, updatedUsers);
  }

  toggleStage(isStage, allSeats, allUsers) {
    const updatedUsers = allUsers.map((u) => {
      if (u.id === this.myUser.id) {
        return { ...u, isStage };
      }
      return u;
    });

    this.myUser.isStage = isStage;

    this.publish({
      type: 'seats-updated',
      seats: allSeats,
      users: updatedUsers,
    });
    if (this.onSeatsUpdated) this.onSeatsUpdated(allSeats, updatedUsers);
  }

  updateProfile(profileData, allUsers) {
    this.myUser = { ...this.myUser, ...profileData };
    const updatedUsers = allUsers.map((u) => (u.id === this.myUser.id ? { ...u, ...profileData } : u));
    this.publish({
      type: 'seats-updated',
      seats: null,
      users: updatedUsers,
    });
  }

  addVideo(video, queue, currentVideo) {
    const updatedQueue = [...queue, video];
    this.publish({
      type: 'queue-updated',
      queue: updatedQueue,
    });
    if (this.onQueueUpdated) this.onQueueUpdated(updatedQueue);
  }

  changeVideo(video, playback = { currentTime: 0, isPlaying: true }) {
    this.publish({
      type: 'video-changed',
      video,
      playback,
    });
    if (this.onVideoChanged) this.onVideoChanged(video, playback);
  }

  voteSkip(votesCount, requiredVotes, totalUsers) {
    this.publish({
      type: 'vote-skip-updated',
      current: votesCount,
      required: requiredVotes,
      totalUsers,
    });
    if (this.onVoteSkipUpdated) {
      this.onVoteSkipUpdated({ current: votesCount, required: requiredVotes, totalUsers });
    }
  }

  destroy() {
    this.isDestroyed = true;
    if (this.peerCheckTimer) clearInterval(this.peerCheckTimer);
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    if (this.client) {
      try {
        this.publish({ type: 'leave', userId: this.myUser.id });
        this.client.end(true);
      } catch (e) {}
    }
  }
}

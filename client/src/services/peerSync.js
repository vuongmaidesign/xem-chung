import { Peer } from 'peerjs';

// Quản lý đồng bộ phòng Realtime qua WebRTC (PeerJS) khi chạy trên GitHub Pages
export class PeerRoomSync {
  constructor({ roomId, myUser, onStateUpdate, onMessage, onReaction, onVideoChanged }) {
    this.cleanRoomId = (roomId || '01').toLowerCase().replace(/[^a-z0-9]/g, '');
    this.hostRoomId = `cine86_room_${this.cleanRoomId}`;
    this.myUser = myUser;
    this.onStateUpdate = onStateUpdate;
    this.onMessage = onMessage;
    this.onReaction = onReaction;
    this.onVideoChanged = onVideoChanged;

    this.peer = null;
    this.isHost = false;
    this.hostConn = null;
    this.guestConns = new Map(); // peerId -> DataConnection
    this.isDestroyed = false;
    this.heartbeatTimer = null;

    this.init();
  }

  init() {
    // 1. Thử đăng ký làm Host của phòng
    this.peer = new Peer(this.hostRoomId, {
      debug: 1,
    });

    this.peer.on('open', (id) => {
      // Đăng ký thành công -> BẠN LÀ HOST / ADMIN CỦA PHÒNG
      console.log(`[P2P] Bạn là HOST của phòng "${this.cleanRoomId}" (ID: ${id})`);
      this.isHost = true;
      this.myUser.isHost = true;

      this.setupHostListeners();
    });

    this.peer.on('error', (err) => {
      if (err.type === 'unavailable-id') {
        // ID phòng đã có người làm Host -> BẠN LÀ KHÁN GIẢ (GUEST)
        console.log(`[P2P] Phòng đã có Host. Đang kết nối với tư cách Khán Giả...`);
        this.peer.destroy();
        this.initAsGuest();
      } else {
        console.warn('[P2P] Lỗi PeerJS:', err);
      }
    });
  }

  // Khởi tạo với tư cách Khán Giả (Guest)
  initAsGuest() {
    const guestId = `cine86_guest_${Math.random().toString(36).substring(2, 9)}`;
    this.peer = new Peer(guestId, { debug: 1 });

    this.peer.on('open', () => {
      this.isHost = false;
      this.myUser.isHost = false;

      // Kết nối tới Host của phòng
      const conn = this.peer.connect(this.hostRoomId, { reliable: true });
      this.hostConn = conn;

      conn.on('open', () => {
        console.log(`[P2P] Đã kết nối thành công tới Host của phòng!`);
        // Gửi thông tin của mình cho Host
        conn.send({
          type: 'join',
          user: this.myUser,
        });
      });

      conn.on('data', (data) => {
        this.handleGuestMessage(data);
      });

      conn.on('close', () => {
        console.warn('[P2P] Mất kết nối với Host. Đang thử nhận làm Host mới...');
        this.hostConn = null;
        setTimeout(() => {
          if (!this.isDestroyed) this.init();
        }, 1500);
      });
    });
  }

  // Thiết lập sự kiện cho Host
  setupHostListeners() {
    this.peer.on('connection', (conn) => {
      const guestPeerId = conn.peer;
      console.log(`[P2P Host] Khán giả mới kết nối: ${guestPeerId}`);

      conn.on('open', () => {
        this.guestConns.set(guestPeerId, conn);
      });

      conn.on('data', (data) => {
        this.handleHostMessage(guestPeerId, data);
      });

      conn.on('close', () => {
        console.log(`[P2P Host] Khán giả ngắt kết nối: ${guestPeerId}`);
        this.guestConns.delete(guestPeerId);
        if (this.onUserLeft) this.onUserLeft(guestPeerId);
      });
    });

    // Định kỳ gửi nhịp đập đồng bộ thời gian video cho tất cả khán giả
    this.heartbeatTimer = setInterval(() => {
      if (this.isHost && this.guestConns.size > 0 && this.getCurrentPlayback) {
        const pb = this.getCurrentPlayback();
        this.broadcast({
          type: 'sync-playback',
          playback: pb,
        });
      }
    }, 3000);
  }

  // Host phát tin cho tất cả khách
  broadcast(data, excludePeerId = null) {
    for (const [peerId, conn] of this.guestConns.entries()) {
      if (peerId !== excludePeerId && conn.open) {
        try {
          conn.send(data);
        } catch (e) {}
      }
    }
  }

  // Host xử lý tin nhắn gửi từ Khách
  handleHostMessage(guestPeerId, data) {
    if (!data || !data.type) return;

    if (data.type === 'join') {
      if (this.onGuestJoined) {
        this.onGuestJoined(guestPeerId, data.user, (roomState) => {
          const conn = this.guestConns.get(guestPeerId);
          if (conn && conn.open) {
            conn.send({
              type: 'room-state',
              state: roomState,
            });
          }
        });
      }
    } else if (data.type === 'select-seat') {
      if (this.onSelectSeat) this.onSelectSeat(guestPeerId, data.seatId);
    } else if (data.type === 'toggle-stage') {
      if (this.onToggleStage) this.onToggleStage(guestPeerId, data.isStage);
    } else if (data.type === 'send-message') {
      if (this.onMessage) this.onMessage(data.message);
      this.broadcast(data);
    } else if (data.type === 'send-reaction') {
      if (this.onReaction) this.onReaction(data.reaction);
      this.broadcast(data);
    } else if (data.type === 'vote-skip') {
      if (this.onVoteSkip) this.onVoteSkip(guestPeerId);
    } else if (data.type === 'add-video') {
      if (this.onAddVideo) this.onAddVideo(data.video, data.playNow);
    }
  }

  // Khách xử lý tin nhắn nhận từ Host
  handleGuestMessage(data) {
    if (!data || !data.type) return;

    if (data.type === 'room-state') {
      if (this.onStateUpdate) this.onStateUpdate(data.state);
    } else if (data.type === 'sync-playback') {
      if (this.onSyncPlayback) this.onSyncPlayback(data.playback);
    } else if (data.type === 'video-changed') {
      if (this.onVideoChanged) this.onVideoChanged(data.video, data.playback);
    } else if (data.type === 'seats-updated') {
      if (this.onSeatsUpdated) this.onSeatsUpdated(data.seats, data.users);
    } else if (data.type === 'send-message') {
      if (this.onMessage) this.onMessage(data.message);
    } else if (data.type === 'send-reaction') {
      if (this.onReaction) this.onReaction(data.reaction);
    }
  }

  // Gửi hành động (tự động route: nếu là Host thì broadcast, nếu là Khách thì gửi lên Host)
  sendAction(type, payload = {}) {
    const data = { type, ...payload };
    if (this.isHost) {
      this.broadcast(data);
    } else if (this.hostConn && this.hostConn.open) {
      try {
        this.hostConn.send(data);
      } catch (e) {}
    }
  }

  destroy() {
    this.isDestroyed = true;
    if (this.heartbeatTimer) clearInterval(this.heartbeatTimer);
    if (this.hostConn) {
      try { this.hostConn.close(); } catch (e) {}
    }
    for (const conn of this.guestConns.values()) {
      try { conn.close(); } catch (e) {}
    }
    this.guestConns.clear();
    if (this.peer) {
      try { this.peer.destroy(); } catch (e) {}
    }
  }
}

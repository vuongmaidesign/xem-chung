import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import confetti from 'canvas-confetti';
import {
  Film,
  Users,
  Share2,
  ListMusic,
  User,
  Volume2,
  Sparkles,
  Check,
  Radio,
  Tv,
} from 'lucide-react';

import YouTubePlayer from './components/YouTubePlayer';
import CinemaSeats from './components/CinemaSeats';
import ChatBox from './components/ChatBox';
import QueueModal from './components/QueueModal';
import ProfileModal from './components/ProfileModal';

// Tự động nhận diện backend URL (nếu dev thì localhost:4000, nếu prod thì theo domain hoặc biến môi trường)
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : window.location.origin);

export default function App() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  // Lấy Room ID từ URL query (?room=abc) hoặc mặc định
  const getInitialRoomId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('room') || 'cinema-main';
  };

  const [roomId, setRoomId] = useState(getInitialRoomId);
  const [copiedLink, setCopiedLink] = useState(false);

  // Profile User
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('cineparty_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return null;
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(!profile);

  // Room State
  const [roomState, setRoomState] = useState({
    users: [],
    seats: [],
    currentVideo: null,
    playback: { isPlaying: false, currentTime: 0 },
    queue: [],
    chat: [],
    skipVotesCount: 0,
  });

  const [isQueueModalOpen, setIsQueueModalOpen] = useState(false);

  // Bong bóng chat & Reaction
  const [recentBubbles, setRecentBubbles] = useState({});
  const [activeReactions, setActiveReactions] = useState([]);

  // Socket connection
  useEffect(() => {
    const s = io(BACKEND_URL, {
      transports: ['websocket', 'polling'],
    });

    s.on('connect', () => {
      setIsConnected(true);
      if (profile) {
        s.emit('join-room', {
          roomId,
          nickname: profile.nickname,
          avatar: profile.avatar,
          color: profile.color,
        });
      }
    });

    s.on('disconnect', () => {
      setIsConnected(false);
    });

    // Nhận toàn bộ state phòng khi mới vào
    s.on('room-state', (state) => {
      if (state) {
        setRoomState({
          users: state.users || [],
          seats: state.seats || [],
          currentVideo: state.currentVideo || null,
          playback: state.playback || { isPlaying: false, currentTime: 0 },
          queue: state.queue || [],
          chat: state.chat || [],
          skipVotesCount: state.skipVotesCount || 0,
        });
      }
    });

    // Cập nhật sơ đồ ghế
    s.on('seats-updated', ({ seats, users }) => {
      setRoomState((prev) => ({ ...prev, seats, users }));
    });

    // Đồng bộ video thay đổi
    s.on('video-changed', ({ video, playback }) => {
      setRoomState((prev) => ({
        ...prev,
        currentVideo: video,
        playback: playback || { isPlaying: true, currentTime: 0 },
        skipVotesCount: 0,
      }));

      // Bắn pháo hoa nhẹ khi bài mới được phát
      try {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch (e) {}
    });

    // Đồng bộ play/pause/seek
    s.on('sync-playback', ({ action, time, isPlaying }) => {
      setRoomState((prev) => ({
        ...prev,
        playback: {
          isPlaying,
          currentTime: time,
        },
      }));
    });

    // Heartbeat định kỳ chuẩn hoá thời gian
    s.on('heartbeat-sync', ({ time, isPlaying }) => {
      setRoomState((prev) => ({
        ...prev,
        playback: {
          isPlaying,
          currentTime: time,
        },
      }));
    });

    // Cập nhật hàng đợi
    s.on('queue-updated', (queue) => {
      setRoomState((prev) => ({ ...prev, queue }));
    });

    // Nhận tin nhắn chat mới
    s.on('new-message', (message) => {
      setRoomState((prev) => ({
        ...prev,
        chat: [...prev.chat, message],
      }));

      // Nếu user đang ngồi một chiếc ghế, hiển thị bubble trên đầu ghế đó
      if (message.seatId) {
        setRecentBubbles((prev) => ({
          ...prev,
          [message.seatId]: { text: message.text, timestamp: Date.now() },
        }));

        setTimeout(() => {
          setRecentBubbles((prev) => {
            const next = { ...prev };
            delete next[message.seatId];
            return next;
          });
        }, 4500);
      }
    });

    // Nhận Reaction mới
    s.on('new-reaction', (reaction) => {
      const rx = Math.floor(Math.random() * 60) + 20; // 20% to 80%
      const ry = Math.floor(Math.random() * 20) + 10;

      const newReaction = {
        ...reaction,
        x: rx,
        y: ry,
      };

      setActiveReactions((prev) => [...prev, newReaction]);

      setTimeout(() => {
        setActiveReactions((prev) => prev.filter((r) => r.id !== reaction.id));
      }, 3000);
    });

    // Cập nhật vote skip
    s.on('vote-skip-updated', ({ current }) => {
      setRoomState((prev) => ({ ...prev, skipVotesCount: current }));
    });

    // Người khác rời phòng
    s.on('user-left', ({ nickname, totalUsers, seats, users }) => {
      setRoomState((prev) => ({ ...prev, seats, users }));
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [roomId]);

  // Lưu thông tin người dùng
  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem('cineparty_profile', JSON.stringify(newProfile));
    setIsProfileModalOpen(false);

    if (socket && socket.connected) {
      socket.emit('join-room', {
        roomId,
        nickname: newProfile.nickname,
        avatar: newProfile.avatar,
        color: newProfile.color,
      });
    }
  };

  // Chọn ghế
  const handleSelectSeat = (seatId) => {
    if (!profile) {
      setIsProfileModalOpen(true);
      return;
    }
    if (socket) {
      socket.emit('select-seat', { seatId });
    }
  };

  // Rời ghế
  const handleLeaveSeat = () => {
    if (socket) {
      socket.emit('leave-seat');
    }
  };

  // Điều khiển Sync
  const handleSyncAction = (action, time) => {
    if (socket) {
      socket.emit('sync-action', { action, time });
    }
  };

  // Hết bài
  const handleVideoEnded = () => {
    if (socket) {
      socket.emit('skip-video');
    }
  };

  // Thêm Video
  const handleAddVideo = (url, playNow = false) => {
    if (socket) {
      socket.emit('add-video', { url, playNow });
    }
  };

  // Xóa khỏi hàng đợi
  const handleRemoveFromQueue = (index) => {
    if (socket) {
      socket.emit('remove-from-queue', { index });
    }
  };

  // Chuyển bài (Skip)
  const handleSkip = () => {
    if (socket) {
      socket.emit('skip-video');
    }
  };

  // Bỏ phiếu Skip
  const handleVoteSkip = () => {
    if (socket) {
      socket.emit('vote-skip');
    }
  };

  // Gửi Chat
  const handleSendMessage = (text) => {
    if (socket) {
      socket.emit('send-message', { text });
    }
  };

  // Gửi Reaction
  const handleSendReaction = (emoji) => {
    if (socket) {
      socket.emit('send-reaction', { emoji });
    }
  };

  // Copy link mời bạn bè
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0e1017]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-600/30">
            <Film size={22} className="text-white" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-rose-100 to-rose-400 bg-clip-text text-transparent">
              CinéParty
            </h1>
            <p className="text-[11px] text-gray-400 flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
              Phòng: <span className="text-rose-400 font-mono font-bold">{roomId}</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Copy Link Share */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-gray-200 transition-all active:scale-95"
            title="Mời bạn bè vào phòng"
          >
            {copiedLink ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Đã copy link!</span>
              </>
            ) : (
              <>
                <Share2 size={14} />
                <span className="hidden sm:inline">Mời bạn</span>
              </>
            )}
          </button>

          {/* Queue Button */}
          <button
            onClick={() => setIsQueueModalOpen(true)}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-xs font-semibold text-rose-300 transition-all active:scale-95"
          >
            <ListMusic size={15} />
            <span className="hidden sm:inline">Hàng đợi</span>
            {roomState.queue.length > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-rose-500 text-white text-[10px] font-mono">
                {roomState.queue.length}
              </span>
            )}
          </button>

          {/* Profile Button */}
          <button
            onClick={() => setIsProfileModalOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-200 transition-all"
          >
            <span className="text-sm">{profile?.avatar || '🍿'}</span>
            <span className="font-semibold hidden sm:inline max-w-[80px] truncate">
              {profile?.nickname || 'Khách'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Rạp Chiếu & Sơ đồ Ghế Ngồi (2 Columns on Desktop) */}
        <div className="lg:col-span-2 flex flex-col space-y-4">
          {/* Màn hình chiếu YouTube */}
          <YouTubePlayer
            video={roomState.currentVideo}
            playback={roomState.playback}
            onSyncAction={handleSyncAction}
            onVideoEnded={handleVideoEnded}
            onSkip={handleSkip}
            canControl={true}
          />

          {/* Sơ đồ Ghế ngồi rạp phim */}
          <CinemaSeats
            seats={roomState.seats}
            users={roomState.users}
            currentUserId={socket?.id}
            onSelectSeat={handleSelectSeat}
            onLeaveSeat={handleLeaveSeat}
            recentBubbles={recentBubbles}
            activeReactions={activeReactions}
          />
        </div>

        {/* Right Column: Chat Box & Live Reactions */}
        <div className="lg:col-span-1 flex flex-col">
          <ChatBox
            messages={roomState.chat}
            onSendMessage={handleSendMessage}
            onSendReaction={handleSendReaction}
            currentUserId={socket?.id}
          />
        </div>
      </main>

      {/* Modals */}
      <QueueModal
        isOpen={isQueueModalOpen}
        onClose={() => setIsQueueModalOpen(false)}
        queue={roomState.queue}
        currentVideo={roomState.currentVideo}
        onAddVideo={handleAddVideo}
        onRemoveFromQueue={handleRemoveFromQueue}
        onVoteSkip={handleVoteSkip}
        skipVotesCount={roomState.skipVotesCount}
        totalUsers={roomState.users.length}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        initialProfile={profile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}

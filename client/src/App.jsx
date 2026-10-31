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
  Maximize2,
  MessageSquare,
  Armchair,
  RotateCcw,
} from 'lucide-react';

import YouTubePlayer from './components/YouTubePlayer';
import CinemaSeats from './components/CinemaSeats';
import ChatBox from './components/ChatBox';
import QueueModal from './components/QueueModal';
import ProfileModal from './components/ProfileModal';

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  (window.location.hostname === 'localhost' ? 'http://localhost:4000' : window.location.origin);

export default function App() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const getInitialRoomId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('room') || 'phong-01';
  };

  const [roomId, setRoomId] = useState(getInitialRoomId);
  const [copiedLink, setCopiedLink] = useState(false);

  // Profile User
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('wetube_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return null;
  });
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(!profile);

  // Active Drawer Tab: null | 'chat' | 'queue' | 'seats' | 'profile'
  const [activeDrawer, setActiveDrawer] = useState(null);

  // Room State
  const [roomState, setRoomState] = useState({
    users: [],
    seats: [],
    currentVideo: null,
    playback: { isPlaying: false, currentTime: 0 },
    queue: [],
    chat: [],
    skipVotesCount: 0,
    requiredVotes: 1,
    totalUsers: 1,
  });

  const [recentBubbles, setRecentBubbles] = useState({});
  const [activeReactions, setActiveReactions] = useState([]);
  const [unreadChatCount, setUnreadChatCount] = useState(0);

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
          requiredVotes: state.requiredVotes || 1,
          totalUsers: state.totalUsers || 1,
        });
      }
    });

    s.on('seats-updated', ({ seats, users }) => {
      setRoomState((prev) => ({ ...prev, seats, users }));
    });

    // Khi đổi bài hoặc lặp lại bài cũ
    s.on('video-changed', ({ video, playback, isLoop }) => {
      setRoomState((prev) => ({
        ...prev,
        currentVideo: video,
        playback: playback || { isPlaying: true, currentTime: 0 },
        skipVotesCount: 0,
      }));

      // Bắn pháo hoa nhẹ khi bài mới được chọn
      if (!isLoop) {
        try {
          confetti({
            particleCount: 35,
            spread: 55,
            origin: { y: 0.7 },
            colors: ['#d8ef82', '#e1f8b1', '#f8d484'],
          });
        } catch (e) {}
      }
    });

    s.on('sync-playback', ({ action, time, isPlaying }) => {
      setRoomState((prev) => ({
        ...prev,
        playback: {
          isPlaying,
          currentTime: time,
        },
      }));
    });

    s.on('heartbeat-sync', ({ time, isPlaying }) => {
      setRoomState((prev) => ({
        ...prev,
        playback: {
          isPlaying,
          currentTime: time,
        },
      }));
    });

    s.on('queue-updated', (queue) => {
      setRoomState((prev) => ({ ...prev, queue }));
    });

    s.on('vote-skip-updated', ({ current, required, totalUsers }) => {
      setRoomState((prev) => ({
        ...prev,
        skipVotesCount: current,
        requiredVotes: required,
        totalUsers,
      }));
    });

    s.on('new-message', (message) => {
      setRoomState((prev) => ({
        ...prev,
        chat: [...prev.chat, message],
      }));

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

    s.on('new-reaction', (reaction) => {
      const rx = Math.floor(Math.random() * 60) + 20;
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

    s.on('user-left', ({ seats, users }) => {
      setRoomState((prev) => ({ ...prev, seats, users }));
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [roomId]);

  const handleSaveProfile = (newProfile) => {
    setProfile(newProfile);
    localStorage.setItem('wetube_profile', JSON.stringify(newProfile));
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

  const handleSelectSeat = (seatId) => {
    if (!profile) {
      setIsProfileModalOpen(true);
      return;
    }
    if (socket) {
      socket.emit('select-seat', { seatId });
    }
  };

  const handleLeaveSeat = () => {
    if (socket) {
      socket.emit('leave-seat');
    }
  };

  const handleSyncAction = (action, time) => {
    if (socket) {
      socket.emit('sync-action', { action, time });
    }
  };

  // KHI VIDEO KẾT THÚC: Báo cho server để chuyển bài hoặc lặp lại FULL bài từ đầu
  const handleVideoEnded = () => {
    if (socket) {
      socket.emit('video-ended');
    }
  };

  const handleAddVideo = (url, playNow = false) => {
    if (socket) {
      socket.emit('add-video', { url, playNow });
    }
  };

  const handleRemoveFromQueue = (index) => {
    if (socket) {
      socket.emit('remove-from-queue', { index });
    }
  };

  const handleSkip = () => {
    if (socket) {
      socket.emit('skip-video');
    }
  };

  const handleVoteSkip = () => {
    if (socket) {
      socket.emit('vote-skip');
    }
  };

  const handleSendMessage = (text) => {
    if (socket) {
      socket.emit('send-message', { text });
    }
  };

  const handleSendReaction = (emoji) => {
    if (socket) {
      socket.emit('send-reaction', { emoji });
    }
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const mySeat = roomState.seats.find((s) => s.occupiedBy === socket?.id);

  return (
    <div className="min-h-screen bg-[#090e0b] text-[#cad6bb] flex flex-col justify-between selection:bg-[#d8ef82] selection:text-[#090e0b]">
      {/* Top HUD Header chuẩn wetube ciné */}
      <header className="sticky top-0 z-40 bg-[#090e0b]/90 backdrop-blur-md border-b border-[#d6e5c6]/10 px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo & Room Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#d8ef82]/15 border border-[#d8ef82]/30 flex items-center justify-center text-[#d8ef82]">
            <Film size={18} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold tracking-tight text-white lowercase">
                wetube <span className="text-[#d8ef82]">ciné</span>
              </span>
              <span className="text-[10px] uppercase font-mono font-bold bg-[#d8ef82]/15 text-[#d8ef82] px-1.5 py-0.2 rounded border border-[#d8ef82]/20">
                {roomId}
              </span>
            </div>
            <span className="text-[10px] text-[#9da98d] font-mono tracking-wider">
              100 CHỖ · CÙNG MỘT MÀN HÌNH · EST. 2026
            </span>
          </div>
        </div>

        {/* Right HUD: Online Count, Share, Fullscreen */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-[#d6e5c6]/10 text-xs text-[#cad6bb]">
            <span className="w-2 h-2 rounded-full bg-[#d8ef82] animate-pulse" />
            <Users size={13} className="text-[#d8ef82]" />
            <span className="font-mono">{roomState.users.length || 1} khán giả</span>
          </div>

          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-[#d6e5c6]/15 text-xs text-[#cad6bb] transition-all"
            title="Mời bạn bè vào rạp"
          >
            {copiedLink ? <Check size={13} className="text-[#d8ef82]" /> : <Share2 size={13} />}
            <span className="hidden sm:inline">{copiedLink ? 'Đã copy link' : 'Mời bạn'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-[#d6e5c6]/15 text-[#cad6bb] transition-all"
            title="Toàn màn hình"
          >
            <Maximize2 size={14} />
          </button>
        </div>
      </header>

      {/* Main Cinema Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-3 sm:p-6 flex flex-col gap-6">
        {/* Màn hình rạp chiếu */}
        <YouTubePlayer
          video={roomState.currentVideo}
          playback={roomState.playback}
          onSyncAction={handleSyncAction}
          onVideoEnded={handleVideoEnded}
          onSkip={handleSkip}
          canControl={true}
        />

        {/* Sơ đồ 100 ghế ngồi */}
        <CinemaSeats
          seats={roomState.seats}
          users={roomState.users}
          currentUserId={socket?.id}
          onSelectSeat={handleSelectSeat}
          onLeaveSeat={handleLeaveSeat}
          recentBubbles={recentBubbles}
          activeReactions={activeReactions}
        />
      </main>

      {/* Bottom Floating Room Dock chuẩn choigivui.com */}
      <div className="sticky bottom-4 z-40 max-w-md mx-auto w-[92%] sm:w-auto px-4 pb-2">
        <div className="room-dock flex items-center justify-between sm:justify-center gap-2 sm:gap-4 px-4 py-2">
          {/* Nút Hàng chờ */}
          <button
            onClick={() => setActiveDrawer(activeDrawer === 'queue' ? null : 'queue')}
            className={`room-dock-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${
              activeDrawer === 'queue' ? 'active text-[#d8ef82]' : ''
            }`}
          >
            <ListMusic size={16} />
            <span>Hàng chờ</span>
            {roomState.queue.length > 0 && (
              <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-[#d8ef82] text-[#090e0b] text-[10px] font-mono font-bold">
                {roomState.queue.length}
              </span>
            )}
          </button>

          {/* Nút Trò chuyện */}
          <button
            onClick={() => setActiveDrawer(activeDrawer === 'chat' ? null : 'chat')}
            className={`room-dock-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold ${
              activeDrawer === 'chat' ? 'active text-[#d8ef82]' : ''
            }`}
          >
            <MessageSquare size={16} />
            <span>Trò chuyện</span>
          </button>

          {/* Nút Cá tính (Profile) */}
          <button
            onClick={() => setIsProfileModalOpen(true)}
            className="room-dock-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold"
          >
            <span className="text-sm">{profile?.avatar || '🍿'}</span>
            <span className="max-w-[70px] truncate">{profile?.nickname || 'Cá tính'}</span>
          </button>

          {/* Nút Vote Skip nhanh */}
          <button
            onClick={handleVoteSkip}
            className="room-dock-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#d8ef82]"
            title="Bình chọn bỏ qua video"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Vote Skip</span>
            <b className="font-mono text-[11px] bg-[#d8ef82]/15 px-1.5 py-0.2 rounded">
              {roomState.skipVotesCount}/{roomState.requiredVotes}
            </b>
          </button>
        </div>
      </div>

      {/* Side Drawer cho Chat & Queue */}
      {activeDrawer === 'chat' && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 p-3 animate-pop-in">
          <ChatBox
            messages={roomState.chat}
            onSendMessage={handleSendMessage}
            onSendReaction={handleSendReaction}
            currentUserId={socket?.id}
            onClose={() => setActiveDrawer(null)}
          />
        </div>
      )}

      {/* Queue Modal */}
      <QueueModal
        isOpen={activeDrawer === 'queue'}
        onClose={() => setActiveDrawer(null)}
        queue={roomState.queue}
        currentVideo={roomState.currentVideo}
        onAddVideo={handleAddVideo}
        onRemoveFromQueue={handleRemoveFromQueue}
        onVoteSkip={handleVoteSkip}
        skipVotesCount={roomState.skipVotesCount}
        requiredVotes={roomState.requiredVotes}
        totalUsers={roomState.users.length}
        hasVoted={false}
      />

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        initialProfile={profile}
        onSave={handleSaveProfile}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}

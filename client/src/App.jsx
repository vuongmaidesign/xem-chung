import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import confetti from 'canvas-confetti';
import {
  Film,
  Users,
  Copy,
  Maximize,
  Sliders,
  Volume2,
  VolumeX,
  Mail,
  Plus,
  Image as ImageIcon,
  ListOrdered,
  MessageSquare,
  Sparkles,
  Shirt,
  Heart,
  ChevronUp,
  Smile,
  Send,
  DoorOpen,
  Headphones,
  Check,
  RotateCcw,
} from 'lucide-react';

import Cinema3DScene from './components/Cinema3DScene';
import ChatBox from './components/ChatBox';
import QueueModal from './components/QueueModal';
import {
  SendVideoModal,
  WardrobeModal,
  PrivateRoomsModal,
  PostPhotoModal,
  SupportModal,
} from './components/ChoiGiVuiModals';

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  (window.location.hostname === 'localhost' ? 'http://localhost:4000' : window.location.origin);

function generate100Seats(occupiedSeatId = 'A5', userId = 'me') {
  const seats = [];
  for (let r = 0; r < 10; r++) {
    const row = String.fromCharCode(65 + r);
    for (let c = 1; c <= 10; c++) {
      const id = `${row}${c}`;
      seats.push({
        id,
        row,
        number: c,
        occupiedBy: id === occupiedSeatId ? userId : null,
      });
    }
  }
  return seats;
}

export default function App() {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const getInitialRoomId = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('room') || '01';
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
    return {
      nickname: 'Khán giả',
      avatar: '🍿',
      color: '#93c5fd',
      gender: 'male',
    };
  });

  // Modals & Panels State
  const [isSendVideoOpen, setIsSendVideoOpen] = useState(false);
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);
  const [isPrivateRoomsOpen, setIsPrivateRoomsOpen] = useState(false);
  const [isPostPhotoOpen, setIsPostPhotoOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Sân khấu
  const [isStandingOnStage, setIsStandingOnStage] = useState(false);

  // Audio state
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);

  // Input chat đáy màn hình
  const [chatInput, setChatInput] = useState('');

  // Room State: Khởi tạo với chỉ người dùng hiện tại (ai vào mới có người đó)
  const [roomState, setRoomState] = useState(() => ({
    users: [
      {
        id: 'me',
        nickname: profile.nickname || 'Bạn',
        avatar: profile.avatar || '🍿',
        color: profile.color || '#93c5fd',
        seatId: 'A5',
        isStage: false,
      },
    ],
    seats: generate100Seats('A5', 'me'),
    currentVideo: {
      id: '5qap5aO4i9A',
      title: '(Lồng Tiếng) Doremon movie36:Nobita và Nước Nhật thời nguyên thủy',
      author: 'Đề xuất',
      url: 'https://www.youtube.com/watch?v=5qap5aO4i9A',
      duration: 6235,
    },
    playback: { isPlaying: true, currentTime: 212 },
    queue: [],
    chat: [],
    skipVotesCount: 0,
    requiredVotes: 1,
    totalUsers: 1,
  }));

  // Bong bóng chat hiển thị trên đầu khán giả trong rạp 3D
  const [floatingBubbles, setFloatingBubbles] = useState([
    {
      id: 'demo-1',
      text: 'skip đi cái này để ăn cơm hãy xem',
      x: 68, // % từ trái
      y: 73, // % từ trên
    },
  ]);

  // Socket Connection
  useEffect(() => {
    const s = io(BACKEND_URL, {
      transports: ['websocket', 'polling'],
    });

    s.on('connect', () => {
      setIsConnected(true);
      s.emit('join-room', {
        roomId,
        nickname: profile.nickname,
        avatar: profile.avatar,
        color: profile.color,
      });
    });

    s.on('disconnect', () => {
      setIsConnected(false);
    });

    s.on('room-state', (state) => {
      if (state) {
        setRoomState((prev) => ({
          ...prev,
          users: state.users || prev.users,
          seats: state.seats || prev.seats,
          currentVideo: state.currentVideo || prev.currentVideo,
          playback: state.playback || prev.playback,
          queue: state.queue || [],
          chat: state.chat || [],
          skipVotesCount: state.skipVotesCount || 0,
          requiredVotes: state.requiredVotes || 1,
          totalUsers: state.totalUsers || (state.users ? state.users.length : 1),
        }));
      }
    });

    // Khi có người mới vào phòng
    s.on('user-joined', ({ user, totalUsers }) => {
      setRoomState((prev) => {
        const nextUsers = [...prev.users.filter((u) => u.id !== user.id), user];
        return {
          ...prev,
          users: nextUsers,
          totalUsers: totalUsers || nextUsers.length,
        };
      });
    });

    // Khi sơ đồ ghế cập nhật (chọn ghế, đổi ghế, lên sân khấu)
    s.on('seats-updated', ({ seats, users }) => {
      setRoomState((prev) => ({
        ...prev,
        seats: seats || prev.seats,
        users: users || prev.users,
        totalUsers: users ? users.length : prev.totalUsers,
      }));
    });

    // Khi có người rời phòng
    s.on('user-left', ({ userId, seats, users, totalUsers }) => {
      setRoomState((prev) => ({
        ...prev,
        users: users || prev.users.filter((u) => u.id !== userId),
        seats: seats || prev.seats.map((s) => (s.occupiedBy === userId ? { ...s, occupiedBy: null } : s)),
        totalUsers: totalUsers || Math.max(1, prev.users.length - 1),
      }));
    });

    s.on('video-changed', ({ video, playback, isLoop }) => {
      setRoomState((prev) => ({
        ...prev,
        currentVideo: video,
        playback: playback || { isPlaying: true, currentTime: 0 },
        skipVotesCount: 0,
      }));

      if (!isLoop) {
        try {
          confetti({
            particleCount: 30,
            spread: 60,
            origin: { y: 0.7 },
            colors: ['#d8ef82', '#f8d484', '#ffffff'],
          });
        } catch (e) {}
      }
    });

    s.on('sync-playback', ({ action, time, isPlaying }) => {
      setRoomState((prev) => ({
        ...prev,
        playback: { isPlaying, currentTime: time },
      }));
    });

    s.on('heartbeat-sync', ({ time, isPlaying }) => {
      setRoomState((prev) => ({
        ...prev,
        playback: { isPlaying, currentTime: time },
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
        totalUsers: Math.max(totalUsers, 98),
      }));
    });

    s.on('new-message', (message) => {
      setRoomState((prev) => ({
        ...prev,
        chat: [...prev.chat, message],
      }));

      // Vị trí nổi bong bóng thoại trên đầu nhân vật
      const posX = isStandingOnStage ? 50 : Math.floor(Math.random() * 36) + 32;
      const posY = isStandingOnStage ? 55 : Math.floor(Math.random() * 18) + 68;

      const newBubble = {
        id: message.id || Date.now(),
        text: message.text,
        x: posX,
        y: posY,
      };

      setFloatingBubbles((prev) => [...prev, newBubble]);
      setTimeout(() => {
        setFloatingBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 5500);
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, [roomId, isStandingOnStage]);

  const handleSyncAction = (action, time) => {
    if (socket && socket.connected) {
      socket.emit('sync-action', { action, time });
    }
  };

  const handleVideoEnded = () => {
    if (socket && socket.connected) {
      socket.emit('video-ended');
    } else {
      // Tự động chuyển bài hoặc lặp lại full trên web tĩnh GitHub Pages
      if (roomState.queue.length > 0) {
        const next = roomState.queue[0];
        setRoomState((prev) => ({
          ...prev,
          currentVideo: next,
          queue: prev.queue.slice(1),
          playback: { isPlaying: true, currentTime: 0 },
        }));
      } else {
        setRoomState((prev) => ({
          ...prev,
          playback: { isPlaying: true, currentTime: 0 },
        }));
      }
    }
  };

  const handleVoteSkip = () => {
    if (socket && socket.connected) {
      socket.emit('vote-skip');
    } else {
      if (roomState.queue.length > 0) {
        const next = roomState.queue[0];
        setRoomState((prev) => ({
          ...prev,
          currentVideo: next,
          queue: prev.queue.slice(1),
          playback: { isPlaying: true, currentTime: 0 },
        }));
      } else {
        setRoomState((prev) => ({
          ...prev,
          playback: { isPlaying: true, currentTime: 0 },
        }));
      }
    }
  };

  const handleSendChat = (e) => {
    e?.preventDefault();
    if (!chatInput.trim()) return;
    const text = chatInput.trim();

    if (socket && socket.connected) {
      socket.emit('send-message', { text });
    } else {
      // Fallback local chat khi truy cập từ GitHub Pages
      const msg = {
        id: Date.now(),
        text,
        nickname: profile.nickname || 'Bạn',
        avatar: profile.avatar || '🍿',
      };
      setRoomState((prev) => ({ ...prev, chat: [...prev.chat, msg] }));

      const posX = isStandingOnStage ? 50 : Math.floor(Math.random() * 36) + 32;
      const posY = isStandingOnStage ? 55 : Math.floor(Math.random() * 18) + 68;
      const newBubble = { id: Date.now(), text, x: posX, y: posY };
      setFloatingBubbles((prev) => [...prev, newBubble]);
      setTimeout(() => {
        setFloatingBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 5500);
    }
    setChatInput('');
  };

  // Chọn ghế ngồi trong rạp 3D
  const handleSelectSeat = (seatId) => {
    if (socket && socket.connected) {
      socket.emit('select-seat', { seatId });
    }
    const myId = socket?.id || 'me';
    setRoomState((prev) => {
      const updatedSeats = prev.seats.map((s) => {
        if (s.id === seatId) return { ...s, occupiedBy: myId };
        if (s.occupiedBy === myId) return { ...s, occupiedBy: null };
        return s;
      });
      const updatedUsers = prev.users.map((u) => {
        if (u.id === myId || (!socket?.id && u.id === 'me')) {
          return { ...u, seatId, isStage: false };
        }
        return u;
      });
      return {
        ...prev,
        seats: updatedSeats,
        users: updatedUsers,
      };
    });
    setIsStandingOnStage(false);
  };

  const handleAddVideo = (url, playNow) => {
    if (socket && socket.connected) {
      socket.emit('add-video', { url, playNow });
    } else {
      // Fallback local khi truy cập từ GitHub Pages
      let videoId = '';
      const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/);
      if (match && match[1]) videoId = match[1];
      else if (/^[a-zA-Z0-9_-]{11}$/.test(url.trim())) videoId = url.trim();

      if (videoId) {
        const newVid = {
          id: videoId,
          title: `Video YouTube (${videoId})`,
          author: 'Bạn gửi',
          url: `https://www.youtube.com/watch?v=${videoId}`,
          thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          duration: 3600,
        };
        if (playNow || !roomState.currentVideo) {
          setRoomState((prev) => ({
            ...prev,
            currentVideo: newVid,
            playback: { isPlaying: true, currentTime: 0 },
          }));
        } else {
          setRoomState((prev) => ({
            ...prev,
            queue: [...prev.queue, newVid],
          }));
        }
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentTime = roomState.playback?.currentTime || 212;
  const duration = roomState.currentVideo?.duration || 6235;
  const skipPercent = Math.round((roomState.skipVotesCount / roomState.totalUsers) * 100);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0a0c0e] text-[#cad6bb] select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. KHUNG CẢNH RẠP CHIẾU 3D THREE.JS (TÍCH HỢP MÀN HÌNH YOUTUBE PHÍA SAU KHÁN GIẢ) */}
      <div className="absolute inset-0 z-0">
        <Cinema3DScene
          video={roomState.currentVideo}
          playback={roomState.playback}
          volume={volume}
          isMuted={isMuted}
          onSyncAction={handleSyncAction}
          onVideoEnded={handleVideoEnded}
          seats={roomState.seats}
          users={roomState.users}
          currentUserId={socket?.id || 'me'}
          onSelectSeat={handleSelectSeat}
          isStandingOnStage={isStandingOnStage}
          myProfile={profile}
        />
      </div>

      {/* 2. BONG BÓNG CHAT NỔI TRÊN ĐẦU KHÁN GIẢ (SPEECH BUBBLES) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {floatingBubbles.map((bubble) => (
          <div
            key={bubble.id}
            style={{ left: `${bubble.x}%`, top: `${bubble.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-full animate-seat-bubble bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-xl border border-white/80 max-w-xs after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-transparent after:border-t-[#e8ede4]"
          >
            {bubble.text}
          </div>
        ))}
      </div>

      {/* 4. GIAO DIỆN HUD TOP (HEADER TRÊN CÙNG) */}
      <header className="absolute top-4 inset-x-5 z-30 flex items-start justify-between pointer-events-none">
        {/* Góc trên bên trái: Logo + Tên bài hát + Box Vote skip */}
        <div className="flex flex-col gap-4 pointer-events-auto max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#e11d48] flex items-center justify-center text-white font-extrabold text-base shadow-lg shadow-rose-600/30">
              w
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight lowercase">
                wetube <span className="font-extrabold">ciné</span>
              </span>
              <span className="text-[9px] font-mono text-[#8e9c80] uppercase tracking-wider">
                PHIM / NGHE NHẠC / {roomId}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 mt-2">
            <span className="text-[10px] font-mono tracking-[1.5px] uppercase text-[#8e9c80]">
              TRÊN MÀN ẢNH
            </span>
            <h2 className="text-sm font-bold text-white line-clamp-2 leading-snug">
              {roomState.currentVideo?.title}
            </h2>
            <span className="text-[11px] text-[#8e9c80]">
              của đề xuất · {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Box Vote Bỏ Qua */}
            <div className="mt-2 flex flex-col gap-1">
              <button
                onClick={handleVoteSkip}
                className="flex items-center gap-2 bg-[#171c18]/90 hover:bg-[#1d241e] border border-[#d8ef82]/30 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#d8ef82] transition-all w-fit shadow-md group"
              >
                <RotateCcw size={13} className="text-[#d8ef82]" />
                <span>Vote bỏ qua</span>
                <span className="font-mono text-white bg-[#d8ef82]/20 px-1.5 py-0.2 rounded border border-[#d8ef82]/30">
                  {roomState.skipVotesCount}/{roomState.requiredVotes}
                </span>
              </button>

              <div className="text-[10px] text-[#8e9c80] pl-0.5">
                <span>{roomState.skipVotesCount}/{roomState.totalUsers} người thật đồng ý · {skipPercent}%</span>
                <br />
                <span>Đủ 35% thì chuyển bài</span>
              </div>

              <div className="w-36 h-1 bg-[#232b25] rounded-full overflow-hidden mt-0.5">
                <div
                  className="h-full bg-[#d8ef82] transition-all duration-300"
                  style={{ width: `${Math.min(100, (roomState.skipVotesCount / roomState.requiredVotes) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Góc trên ở giữa: Pill trạng thái phòng */}
        <div className="pointer-events-auto bg-[#131715]/85 backdrop-blur-md border border-[#d6e5c6]/15 rounded-full px-4 py-1.5 flex items-center gap-3 text-xs text-[#cad6bb] shadow-lg">
          <div className="flex items-center gap-1.5 text-[#d8ef82] font-semibold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#d8ef82] animate-pulse" />
            <span>Đang chiếu</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <Users size={13} className="text-[#8e9c80]" />
            <span>{roomState.users?.length || roomState.totalUsers || 1} đang online</span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-[11px] font-mono text-[#8e9c80]">
            {(roomState.seats ? roomState.seats.filter((s) => s.occupiedBy).length : (roomState.users?.length || 1))} / 100 ghế
          </span>
        </div>

        {/* Góc trên bên phải: Tiền & Icon controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="bg-[#131715]/90 border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5 flex items-center gap-1.5 text-xs text-[#d8ef82] font-mono font-bold shadow-md">
            <span>💼</span>
            <span>168.000đ</span>
          </div>

          <button
            onClick={handleCopyLink}
            className="w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all"
            title="Sao chép liên kết"
          >
            {copiedLink ? <Check size={14} className="text-[#d8ef82]" /> : <Copy size={14} />}
          </button>

          <button
            onClick={toggleFullscreen}
            className="w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all"
            title="Toàn màn hình"
          >
            <Maximize size={14} />
          </button>

          <button
            onClick={() => setIsWardrobeOpen(true)}
            className="w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all"
            title="Cài đặt"
          >
            <Sliders size={14} />
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-8 h-8 rounded-xl bg-[#131715]/90 hover:bg-[#1c221e] border border-[#d6e5c6]/15 flex items-center justify-center text-[#cad6bb] hover:text-white transition-all"
            title="Bật/Tắt âm thanh"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>

          <button
            onClick={() => setIsWardrobeOpen(true)}
            className="w-8 h-8 rounded-full bg-[#d8ef82]/25 border border-[#d8ef82] flex items-center justify-center text-[#d8ef82] font-bold text-xs shadow-md"
          >
            A
          </button>
        </div>
      </header>

      {/* 5. CỘT MENU DỌC BÊN PHẢI (VERTICAL SIDEBAR DOCK KẾT NỐI TOÀN BỘ TÍNH NĂNG) */}
      <aside className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center bg-[#101412]/92 backdrop-blur-xl border border-[#d6e5c6]/15 rounded-2xl py-2 px-1.5 shadow-2xl gap-1">
        <button className="p-1 text-[#8e9c80] hover:text-white transition-colors">
          <ChevronUp size={16} />
        </button>

        {/* Hộp thư */}
        <button
          onClick={() => alert('Hộp thư: Bạn nhận được 1 thông báo chào mừng vào rạp!')}
          className="relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <Mail size={16} />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Hộp thư</span>
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center">
            1
          </span>
        </button>

        {/* Gửi video */}
        <button
          onClick={() => setIsSendVideoOpen(true)}
          className="flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <Plus size={16} />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Gửi video</span>
        </button>

        {/* Chiếu ảnh */}
        <button
          onClick={() => setIsPostPhotoOpen(true)}
          className="flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <ImageIcon size={16} />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Chiếu ảnh</span>
        </button>

        {/* Hàng chờ */}
        <button
          onClick={() => setIsQueueOpen(true)}
          className="relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <ListOrdered size={16} />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Hàng chờ</span>
          <span className="absolute top-1 right-0.5 px-1 rounded-full bg-[#d8ef82] text-[#090e0b] text-[8px] font-bold">
            100
          </span>
        </button>

        {/* Trò chuyện */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="relative flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <MessageSquare size={16} />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Trò chuyện</span>
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white text-[8px] font-bold flex items-center justify-center">
            23
          </span>
        </button>

        {/* Tương tác (Lên sân khấu / Thả pháo hoa) */}
        <button
          onClick={() => {
            const nextStage = !isStandingOnStage;
            setIsStandingOnStage(nextStage);
            if (socket && socket.connected) {
              socket.emit('toggle-stage', { isStage: nextStage });
            }
            confetti({ particleCount: 40, spread: 70, origin: { y: 0.8 } });
          }}
          className={`flex flex-col items-center p-2 rounded-xl transition-all group ${
            isStandingOnStage ? 'bg-[#d8ef82]/20 text-[#d8ef82]' : 'hover:bg-white/5 text-[#cad6bb]'
          }`}
          title={isStandingOnStage ? 'Xuống chỗ ngồi' : 'Bước lên sân khấu'}
        >
          <Sparkles size={16} className="text-[#d8ef82]" />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">
            {isStandingOnStage ? 'Về chỗ' : 'Lên bục'}
          </span>
        </button>

        {/* Tủ đồ */}
        <button
          onClick={() => setIsWardrobeOpen(true)}
          className="flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <Shirt size={16} />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Tủ đồ</span>
        </button>

        {/* Ủng hộ */}
        <button
          onClick={() => setIsSupportOpen(true)}
          className="flex flex-col items-center p-2 rounded-xl hover:bg-white/5 text-[#cad6bb] transition-all group"
        >
          <Heart size={16} className="text-rose-400" />
          <span className="text-[9px] mt-1 text-[#8e9c80] group-hover:text-[#cad6bb]">Ủng hộ</span>
        </button>
      </aside>

      {/* 6. THANH BOTTOM BAR (ĐÁY MÀN HÌNH) */}
      <footer className="absolute bottom-4 inset-x-5 z-30 flex items-center justify-between pointer-events-none">
        {/* Góc trái đáy */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="flex items-center gap-1 bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl p-1">
            <button
              onClick={toggleFullscreen}
              className="p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5"
              title="Toàn màn hình"
            >
              <Maximize size={15} />
            </button>
            <button
              onClick={() => setIsStandingOnStage(!isStandingOnStage)}
              className={`p-1.5 rounded-lg hover:bg-white/5 transition-colors ${
                isStandingOnStage ? 'text-[#d8ef82]' : 'text-[#8e9c80]'
              }`}
              title={isStandingOnStage ? 'Về ghế ngồi' : 'Lên sân khấu'}
            >
              <span>💺</span>
            </button>
            <button className="p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5" title="Màn hình">
              <span>🖥️</span>
            </button>
            <button
              onClick={() => setIsWardrobeOpen(true)}
              className="p-1.5 text-[#8e9c80] hover:text-white rounded-lg hover:bg-white/5"
              title="Khán giả"
            >
              <Users size={15} />
            </button>
          </div>

          <button
            onClick={() => setIsPrivateRoomsOpen(true)}
            className="flex items-center gap-2 bg-[#121813]/90 hover:bg-[#18221a] border border-[#d8ef82]/30 px-3.5 py-2 rounded-xl text-xs font-bold text-[#d8ef82] transition-all shadow-md"
          >
            <DoorOpen size={16} />
            <span>Phòng riêng</span>
          </button>
        </div>

        {/* Ở giữa: Khung Chat Con Nhộng */}
        <form
          onSubmit={handleSendChat}
          className="pointer-events-auto flex items-center gap-2 bg-[#101412]/90 backdrop-blur-xl border border-[#d6e5c6]/20 rounded-full px-4 py-2 w-full max-w-lg shadow-2xl focus-within:border-[#d8ef82] transition-colors"
        >
          <button type="button" className="text-[#8e9c80] hover:text-white">
            <Smile size={18} />
          </button>
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value.slice(0, 150))}
            placeholder="Nói gì với cả rạp đi..."
            className="flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80] focus:outline-none"
          />
          <span className="text-[10px] font-mono text-[#8e9c80]">
            {chatInput.length}/150
          </span>
          <button
            type="submit"
            disabled={!chatInput.trim()}
            className="text-[#d8ef82] disabled:opacity-30 hover:scale-110 transition-transform"
          >
            <Send size={15} />
          </button>
        </form>

        {/* Góc phải đáy */}
        <div className="flex items-center gap-2.5 pointer-events-auto bg-[#101412]/80 backdrop-blur-md border border-[#d6e5c6]/15 rounded-xl px-3 py-1.5">
          <button className="text-[#8e9c80] hover:text-white" title="Nghe âm thanh">
            <Headphones size={15} />
          </button>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-[#8e9c80] hover:text-white"
          >
            {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseInt(e.target.value, 10));
              if (isMuted) setIsMuted(false);
            }}
            className="w-16 h-1 bg-[#232b25] rounded-lg appearance-none cursor-pointer accent-[#d8ef82]"
          />
          <span className="text-[11px] font-mono text-[#cad6bb]">
            {isMuted ? '0%' : `${volume}%`}
          </span>
        </div>
      </footer>

      {/* 7. POPUP MODALS & DRAWERS HOÀN THIỆN ĐẦY ĐỦ */}
      <SendVideoModal
        isOpen={isSendVideoOpen}
        onClose={() => setIsSendVideoOpen(false)}
        onAddVideo={handleAddVideo}
      />

      <QueueModal
        isOpen={isQueueOpen}
        onClose={() => setIsQueueOpen(false)}
        queue={roomState.queue}
        currentVideo={roomState.currentVideo}
        onAddVideo={handleAddVideo}
        onRemoveFromQueue={(index) => socket?.emit('remove-from-queue', { index })}
        onVoteSkip={handleVoteSkip}
        skipVotesCount={roomState.skipVotesCount}
        requiredVotes={roomState.requiredVotes}
        totalUsers={roomState.totalUsers}
      />

      {/* Drawer Trò chuyện */}
      {isChatOpen && (
        <div className="fixed inset-y-0 right-16 z-50 w-80 p-3 animate-pop-in">
          <ChatBox
            messages={roomState.chat}
            onSendMessage={(text) => socket?.emit('send-message', { text })}
            onSendReaction={(emoji) => socket?.emit('send-reaction', { emoji })}
            currentUserId={socket?.id}
            onClose={() => setIsChatOpen(false)}
          />
        </div>
      )}

      <WardrobeModal
        isOpen={isWardrobeOpen}
        onClose={() => setIsWardrobeOpen(false)}
        currentProfile={profile}
        onSaveProfile={(newProf) => {
          setProfile(newProf);
          localStorage.setItem('wetube_profile', JSON.stringify(newProf));
          if (socket && socket.connected) {
            socket.emit('update-profile', newProf);
          }
          setRoomState((prev) => ({
            ...prev,
            users: prev.users.map((u) => (u.id === socket?.id || u.id === 'me') ? { ...u, ...newProf } : u),
          }));
        }}
      />

      <PrivateRoomsModal
        isOpen={isPrivateRoomsOpen}
        onClose={() => setIsPrivateRoomsOpen(false)}
        onJoinRoom={(newRoom) => {
          window.location.search = `?room=${newRoom}`;
        }}
      />

      <PostPhotoModal
        isOpen={isPostPhotoOpen}
        onClose={() => setIsPostPhotoOpen(false)}
      />

      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </div>
  );
}

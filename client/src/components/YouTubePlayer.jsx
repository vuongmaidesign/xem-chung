import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward, Film, Tv } from 'lucide-react';

export default function YouTubePlayer({
  video,
  playback,
  onSyncAction,
  onVideoEnded,
  onSkip,
  canControl = true,
}) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const isSyncingRef = useRef(false);
  const isDraggingRef = useRef(false);
  const suppressSyncUntilRef = useRef(0);
  const currentVideoIdRef = useRef(video?.id);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekPreviewTime, setSeekPreviewTime] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Khởi tạo YouTube Player 1 instance an toàn
  useEffect(() => {
    let checkInterval = null;
    let isMounted = true;

    const initPlayer = () => {
      if (!isMounted || !window.YT || !window.YT.Player || !containerRef.current) return;

      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
      containerRef.current.innerHTML = '<div id="yt-screen-frame"></div>';

      playerRef.current = new window.YT.Player('yt-screen-frame', {
        height: '100%',
        width: '100%',
        videoId: video ? video.id : '5qap5aO4i9A',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          modestbranding: 1,
          rel: 0,
          fs: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            if (!isMounted) return;
            setIsReady(true);
            event.target.setVolume(volume);

            if (playback?.currentTime && playback.currentTime > 0) {
              event.target.seekTo(playback.currentTime, true);
            }
            if (playback?.isPlaying) {
              event.target.playVideo();
              setIsPlaying(true);
            }
          },
          onStateChange: (event) => {
            if (!isMounted) return;

            // KHI HẾT BÀI: Báo cho server để chuyển bài hoặc lặp lại FULL bài từ đầu
            if (event.data === window.YT.PlayerState.ENDED) {
              suppressSyncUntilRef.current = Date.now() + 3000;
              if (onVideoEnded) {
                onVideoEnded();
              }
              return;
            }

            if (isSyncingRef.current || isDraggingRef.current) return;

            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              if (canControl && onSyncAction) {
                onSyncAction('play', event.target.getCurrentTime());
              }
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              if (canControl && onSyncAction) {
                onSyncAction('pause', event.target.getCurrentTime());
              }
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      checkInterval = setInterval(() => {
        if (window.YT && window.YT.Player) {
          clearInterval(checkInterval);
          initPlayer();
        }
      }, 300);
    }

    return () => {
      isMounted = false;
      if (checkInterval) clearInterval(checkInterval);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  // Xử lý đổi bài hoặc LẶP LẠI BÀI CŨ
  useEffect(() => {
    if (!playerRef.current || !video?.id) return;

    // Nếu cùng videoId (Lặp lại full bài cũ khi hết link)
    if (currentVideoIdRef.current === video.id) {
      if (playback?.currentTime === 0) {
        isSyncingRef.current = true;
        suppressSyncUntilRef.current = Date.now() + 2500;
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
        setIsPlaying(true);
        setTimeout(() => {
          isSyncingRef.current = false;
        }, 500);
      }
      return;
    }

    // Nếu là video mới hoàn toàn
    currentVideoIdRef.current = video.id;
    if (playerRef.current.loadVideoById) {
      isSyncingRef.current = true;
      suppressSyncUntilRef.current = Date.now() + 2500;

      playerRef.current.loadVideoById({
        videoId: video.id,
        startSeconds: playback?.currentTime || 0,
      });

      setTimeout(() => {
        if (playback?.isPlaying) {
          playerRef.current?.playVideo();
          setIsPlaying(true);
        }
        isSyncingRef.current = false;
      }, 600);
    }
  }, [video?.id, playback?.currentTime]);

  // Đồng bộ Playback từ Server (Play/Pause/Tua)
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.getPlayerState) return;
    if (isDraggingRef.current || Date.now() < suppressSyncUntilRef.current) return;

    const currentLocalTime = playerRef.current.getCurrentTime ? playerRef.current.getCurrentTime() : 0;
    const timeDiff = Math.abs(currentLocalTime - (playback?.currentTime || 0));

    // Chỉ tua khi chênh lệch > 2.5s để tránh giật lag tiếng và không bao giờ lặp lại 3s đầu
    if (timeDiff > 2.5 && playback?.currentTime !== undefined) {
      isSyncingRef.current = true;
      playerRef.current.seekTo(playback.currentTime, true);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
    }

    if (playback?.isPlaying && !isPlaying) {
      isSyncingRef.current = true;
      playerRef.current.playVideo();
      setIsPlaying(true);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
    } else if (!playback?.isPlaying && isPlaying) {
      isSyncingRef.current = true;
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
    }
  }, [playback?.isPlaying, playback?.currentTime]);

  // Cập nhật thanh tiến trình chạy theo bài
  useEffect(() => {
    const timer = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime && !isDraggingRef.current) {
        const cur = playerRef.current.getCurrentTime() || 0;
        const dur = playerRef.current.getDuration() || 0;
        setCurrentTime(cur);
        setSeekPreviewTime(cur);
        setDuration(dur);
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const handleTogglePlay = () => {
    if (!playerRef.current) return;
    suppressSyncUntilRef.current = Date.now() + 1000;

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      if (onSyncAction) onSyncAction('pause', playerRef.current.getCurrentTime());
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
      if (onSyncAction) onSyncAction('play', playerRef.current.getCurrentTime());
    }
  };

  // Kéo thanh tua (Chỉ đổi preview, không gọi seekTo)
  const handleSeekChange = (e) => {
    isDraggingRef.current = true;
    setSeekPreviewTime(parseFloat(e.target.value));
  };

  // Thả tay/chuột: Seek 1 lần duy nhất
  const handleSeekCommit = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const newTime = seekPreviewTime;
    setCurrentTime(newTime);

    if (playerRef.current && playerRef.current.seekTo) {
      isSyncingRef.current = true;
      suppressSyncUntilRef.current = Date.now() + 2000;

      playerRef.current.seekTo(newTime, true);
      if (onSyncAction) {
        onSyncAction('seek', newTime);
      }

      setTimeout(() => {
        isSyncingRef.current = false;
      }, 500);
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseInt(e.target.value, 10);
    setVolume(newVol);
    if (playerRef.current) {
      playerRef.current.setVolume(newVol);
      if (newVol > 0 && isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  const handleToggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="theater-viewport w-full max-w-5xl mx-auto flex flex-col group">
      {/* Vòm Màn Hình Chiếu chuẩn wetube ciné */}
      <div className="seatmap-screen select-none">
        <Film size={14} className="text-[#d8ef82]" />
        <span>MÀN HÌNH CHIẾU</span>
      </div>

      {/* Frame Video YouTube */}
      <div className="w-full aspect-video bg-[#090e0b] relative flex items-center justify-center overflow-hidden">
        <div ref={containerRef} className="w-full h-full pointer-events-none" />

        {/* Màn hình chờ khi chưa có video */}
        {!video && (
          <div className="absolute inset-0 bg-[#090e0b] flex flex-col items-center justify-center p-6 text-center select-none">
            <div className="w-16 h-16 rounded-full bg-[#d8ef82]/10 border border-[#d8ef82]/20 flex items-center justify-center mb-4 text-[#d8ef82]">
              <Film size={32} />
            </div>
            <span className="text-[10px] tracking-[2px] font-bold text-[#d8ef82] uppercase mb-1">
              MỘT CHIẾC RẠP. CẢ HỘI CÙNG XEM.
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Chỗ này còn trống.<br />
              <i className="text-sm sm:text-base font-normal text-[#cad6bb]">Chờ bạn và một bộ phim hay.</i>
            </h2>
            <p className="text-xs text-[#9da98d] max-w-md">
              Chọn một chỗ ngồi · Gửi video bạn thích · Bình chọn cùng nhau
            </p>
          </div>
        )}

        {/* Lớp overlay click để Play/Pause */}
        <div
          onClick={handleTogglePlay}
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          title="Click để phát/dừng"
        />
      </div>

      {/* Thanh điều khiển tối giản chuẩn phong cách rạp phim wetube ciné */}
      <div className="bg-[#131c16]/95 border-t border-[#d6e5c6]/15 px-4 py-2.5 flex flex-col gap-2">
        {/* Progress Bar (Thanh Tua) */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[#9da98d]">
            {formatTime(isDraggingRef.current ? seekPreviewTime : currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={isDraggingRef.current ? seekPreviewTime : currentTime}
            onChange={handleSeekChange}
            onMouseUp={handleSeekCommit}
            onTouchEnd={handleSeekCommit}
            onKeyUp={handleSeekCommit}
            className="w-full h-1 bg-[#232b25] rounded-lg appearance-none cursor-pointer accent-[#d8ef82] hover:h-1.5 transition-all"
          />
          <span className="text-[11px] font-mono text-[#9da98d]">{formatTime(duration)}</span>
        </div>

        {/* Buttons Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleTogglePlay}
              className="p-1.5 rounded-lg bg-[#d8ef82]/15 text-[#d8ef82] hover:bg-[#d8ef82] hover:text-[#090e0b] transition-all"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
            </button>

            <button
              onClick={onSkip}
              title="Chuyển bài tiếp theo"
              className="p-1.5 rounded-lg bg-white/5 text-[#cad6bb] hover:bg-white/10 hover:text-white transition-all"
            >
              <SkipForward size={16} />
            </button>

            {/* Volume */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleToggleMute}
                className="p-1 text-[#9da98d] hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-14 sm:w-20 h-1 bg-[#232b25] rounded-lg appearance-none cursor-pointer accent-[#d8ef82]"
              />
            </div>
          </div>

          {/* Video Title Display */}
          <div className="hidden sm:flex items-center gap-2 max-w-xs md:max-w-md truncate text-xs text-[#cad6bb]">
            <span className="px-2 py-0.5 rounded-md bg-[#d8ef82]/15 text-[#d8ef82] font-semibold text-[10px] uppercase tracking-wider">
              Đang chiếu
            </span>
            <span className="truncate font-medium">{video?.title || 'Chưa chọn bài'}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#9da98d] bg-white/[0.03] px-2 py-1 rounded-md border border-[#d6e5c6]/10 flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d8ef82] animate-pulse" />
              ĐỒNG BỘ TRỰC TIẾP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

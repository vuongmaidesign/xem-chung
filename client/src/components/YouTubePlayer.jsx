import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipForward } from 'lucide-react';

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

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekPreviewTime, setSeekPreviewTime] = useState(0);

  // Khởi tạo YouTube Player an toàn (chỉ tạo 1 instance duy nhất)
  useEffect(() => {
    let checkInterval = null;
    let isMounted = true;

    const initPlayer = () => {
      if (!isMounted || !window.YT || !window.YT.Player || !containerRef.current) return;

      // Hủy player cũ và dọn sạch DOM bên trong để không bao giờ bị nhân đôi iframe
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
        playerRef.current = null;
      }
      containerRef.current.innerHTML = '<div id="yt-internal-player"></div>';

      playerRef.current = new window.YT.Player('yt-internal-player', {
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
            event.target.setVolume(volume);
            if (playback?.currentTime) {
              event.target.seekTo(playback.currentTime, true);
            }
            if (playback?.isPlaying) {
              event.target.playVideo();
              setIsPlaying(true);
            }
          },
          onStateChange: (event) => {
            if (!isMounted) return;

            if (event.data === window.YT.PlayerState.ENDED) {
              if (onVideoEnded) onVideoEnded();
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

  // Đổi bài khi video thay đổi
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById && video?.id) {
      isSyncingRef.current = true;
      suppressSyncUntilRef.current = Date.now() + 1200;

      playerRef.current.loadVideoById({
        videoId: video.id,
        startSeconds: playback?.currentTime || 0,
      });

      setTimeout(() => {
        if (playback?.isPlaying) {
          playerRef.current?.playVideo();
          setIsPlaying(true);
        } else {
          playerRef.current?.pauseVideo();
          setIsPlaying(false);
        }
        isSyncingRef.current = false;
      }, 500);
    }
  }, [video?.id]);

  // Đồng bộ Playback từ Server (Play/Pause/Tua)
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.getPlayerState) return;
    if (isDraggingRef.current || Date.now() < suppressSyncUntilRef.current) return;

    const currentLocalTime = playerRef.current.getCurrentTime ? playerRef.current.getCurrentTime() : 0;
    const timeDiff = Math.abs(currentLocalTime - (playback?.currentTime || 0));

    // Chỉ tua nếu chênh lệch đáng kể (> 2.0s) để tránh giật lag tiếng
    if (timeDiff > 2.0 && playback?.currentTime !== undefined) {
      isSyncingRef.current = true;
      playerRef.current.seekTo(playback.currentTime, true);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 300);
    }

    if (playback?.isPlaying && !isPlaying) {
      isSyncingRef.current = true;
      playerRef.current.playVideo();
      setIsPlaying(true);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 300);
    } else if (!playback?.isPlaying && isPlaying) {
      isSyncingRef.current = true;
      playerRef.current.pauseVideo();
      setIsPlaying(false);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 300);
    }
  }, [playback?.isPlaying, playback?.currentTime]);

  // Thanh tiến trình chạy theo video
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

  // KHI KÉO THANH TUA: Chỉ cập nhật số giây xem trước (KHÔNG gọi seekTo để tránh spam lệnh & chồng tiếng)
  const handleSeekChange = (e) => {
    isDraggingRef.current = true;
    setSeekPreviewTime(parseFloat(e.target.value));
  };

  // KHI THẢ TAY / THẢ CHUỘT: Mới thực hiện seek 1 lần duy nhất và gửi lên server
  const handleSeekCommit = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const newTime = seekPreviewTime;
    setCurrentTime(newTime);

    if (playerRef.current && playerRef.current.seekTo) {
      isSyncingRef.current = true;
      suppressSyncUntilRef.current = Date.now() + 1500; // Khóa nhận sync từ server trong 1.5s để chống dội tín hiệu

      playerRef.current.seekTo(newTime, true);
      if (onSyncAction) {
        onSyncAction('seek', newTime);
      }

      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
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
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden cinema-screen-glow bg-black border border-rose-500/20 group">
      {/* Vòm màn hình cong mô phỏng rạp chiếu */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-rose-500/30 to-transparent pointer-events-none z-10 cinema-curved-bar" />

      {/* Frame video YouTube */}
      <div className="w-full aspect-video bg-black relative flex items-center justify-center">
        <div ref={containerRef} className="w-full h-full pointer-events-none" />

        {/* Lớp overlay click để Play/Pause */}
        <div
          onClick={handleTogglePlay}
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          title="Click để phát/dừng"
        />
      </div>

      {/* Thanh điều khiển rạp chiếu */}
      <div className="bg-gradient-to-t from-[#10121a] via-[#10121a]/95 to-transparent px-4 py-3 border-t border-white/5 flex flex-col gap-2">
        {/* Progress Bar (Thanh Tua) */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gray-400">
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
            className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:h-2 transition-all"
          />
          <span className="text-xs font-mono text-gray-400">{formatTime(duration)}</span>
        </div>

        {/* Buttons Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleTogglePlay}
              className="p-2 rounded-xl bg-rose-500/20 text-rose-400 hover:bg-rose-500 hover:text-white transition-all transform hover:scale-105"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
            </button>

            <button
              onClick={onSkip}
              title="Chuyển bài tiếp theo"
              className="p-2 rounded-xl bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
            >
              <SkipForward size={18} />
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2 group/vol">
              <button
                onClick={handleToggleMute}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min={0}
                max={100}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>
          </div>

          {/* Video Title Display */}
          <div className="hidden sm:flex items-center gap-2 max-w-sm truncate text-xs text-gray-300">
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-semibold text-[10px] uppercase tracking-wider">
              Đang chiếu
            </span>
            <span className="truncate font-medium">{video?.title || 'Chưa chọn bài'}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg flex items-center gap-1.5 border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Đồng bộ Realtime
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

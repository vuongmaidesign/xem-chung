import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, Sparkles } from 'lucide-react';

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isApiReady, setIsApiReady] = useState(false);

  // Khởi tạo YouTube Player khi API sẵn sàng
  useEffect(() => {
    let checkInterval = null;

    const initPlayer = () => {
      if (window.YT && window.YT.Player && containerRef.current) {
        if (playerRef.current) {
          try {
            playerRef.current.destroy();
          } catch (e) {}
        }

        playerRef.current = new window.YT.Player('yt-player-frame', {
          height: '100%',
          width: '100%',
          videoId: video ? video.id : '5qap5aO4i9A',
          playerVars: {
            autoplay: 1,
            controls: 0, // Ẩn control mặc định của YouTube để đồng bộ bằng custom Cinema Controller
            disablekb: 1,
            modestbranding: 1,
            rel: 0,
            fs: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              setIsApiReady(true);
              event.target.setVolume(volume);
              if (playback && playback.currentTime) {
                event.target.seekTo(playback.currentTime, true);
              }
              if (playback && playback.isPlaying) {
                event.target.playVideo();
                setIsPlaying(true);
              }
            },
            onStateChange: (event) => {
              // event.data: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering
              if (event.data === window.YT.PlayerState.ENDED) {
                if (onVideoEnded) onVideoEnded();
                return;
              }

              if (isSyncingRef.current) return;

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
      }
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
      if (checkInterval) clearInterval(checkInterval);
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, []);

  // Đổi video khi prop video thay đổi
  useEffect(() => {
    if (playerRef.current && playerRef.current.loadVideoById && video?.id) {
      isSyncingRef.current = true;
      playerRef.current.loadVideoById({
        videoId: video.id,
        startSeconds: playback?.currentTime || 0,
      });
      setTimeout(() => {
        if (playback?.isPlaying) {
          playerRef.current.playVideo();
          setIsPlaying(true);
        } else {
          playerRef.current.pauseVideo();
          setIsPlaying(false);
        }
        isSyncingRef.current = false;
      }, 500);
    }
  }, [video?.id]);

  // Đồng bộ playback từ server (Play/Pause/Seek)
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.getPlayerState) return;

    const currentLocalTime = playerRef.current.getCurrentTime ? playerRef.current.getCurrentTime() : 0;
    const timeDiff = Math.abs(currentLocalTime - (playback?.currentTime || 0));

    // Nếu lệch quá 1.8 giây, tự động seek để bắt kịp phòng
    if (timeDiff > 1.8 && playback?.currentTime !== undefined) {
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

  // Cập nhật thanh tiến trình mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const cur = playerRef.current.getCurrentTime() || 0;
        const dur = playerRef.current.getDuration() || 0;
        setCurrentTime(cur);
        setDuration(dur);
      }
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const handleTogglePlay = () => {
    if (!playerRef.current) return;
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

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (playerRef.current && playerRef.current.seekTo) {
      isSyncingRef.current = true;
      playerRef.current.seekTo(newTime, true);
      if (onSyncAction) onSyncAction('seek', newTime);
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
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden cinema-screen-glow bg-black border border-rose-500/20 group">
      {/* Vòm màn hình cong mô phỏng rạp chiếu */}
      <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-rose-500/30 to-transparent pointer-events-none z-10 cinema-curved-bar" />

      {/* Frame video YouTube */}
      <div className="w-full aspect-video bg-black relative flex items-center justify-center">
        <div id="yt-player-frame" ref={containerRef} className="w-full h-full pointer-events-none" />

        {/* Lớp overlay click để Play/Pause */}
        <div
          onClick={handleTogglePlay}
          className="absolute inset-0 z-10 cursor-pointer bg-transparent"
          title="Click để phát/dừng"
        />
      </div>

      {/* Thanh điều khiển rạp chiếu hiện đại */}
      <div className="bg-gradient-to-t from-[#10121a] via-[#10121a]/95 to-transparent px-4 py-3 border-t border-white/5 flex flex-col gap-2 transition-opacity duration-300">
        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gray-400">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
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

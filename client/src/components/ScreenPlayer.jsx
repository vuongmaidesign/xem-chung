import React, { useEffect, useRef, useState } from 'react';

export default function ScreenPlayer({
  video,
  playback,
  onSyncAction,
  onVideoEnded,
  volume = 80,
  isMuted = false,
}) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const isSyncingRef = useRef(false);
  const suppressSyncUntilRef = useRef(0);
  const currentVideoIdRef = useRef(video?.id);

  // Khởi tạo YouTube Player an toàn 1 instance duy nhất
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
      containerRef.current.innerHTML = '<div id="wetube-3d-screen-frame"></div>';

      playerRef.current = new window.YT.Player('wetube-3d-screen-frame', {
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
            if (isMuted) event.target.mute();
            if (playback?.currentTime && playback.currentTime > 0) {
              event.target.seekTo(playback.currentTime, true);
            }
            if (playback?.isPlaying) {
              event.target.playVideo();
            }
          },
          onStateChange: (event) => {
            if (!isMounted) return;

            // KHI HẾT BÀI: Replay full hoặc chuyển bài mới
            if (event.data === window.YT.PlayerState.ENDED) {
              suppressSyncUntilRef.current = Date.now() + 3000;
              if (onVideoEnded) {
                onVideoEnded();
              }
              return;
            }

            if (isSyncingRef.current) return;

            if (event.data === window.YT.PlayerState.PLAYING) {
              if (onSyncAction) onSyncAction('play', event.target.getCurrentTime());
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              if (onSyncAction) onSyncAction('pause', event.target.getCurrentTime());
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

  // Xử lý đổi bài hoặc LẶP LẠI FULL BÀI TỪ ĐẦU
  useEffect(() => {
    if (!playerRef.current || !video?.id) return;

    if (currentVideoIdRef.current === video.id) {
      if (playback?.currentTime === 0) {
        isSyncingRef.current = true;
        suppressSyncUntilRef.current = Date.now() + 2500;
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
        setTimeout(() => {
          isSyncingRef.current = false;
        }, 500);
      }
      return;
    }

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
        }
        isSyncingRef.current = false;
      }, 600);
    }
  }, [video?.id, playback?.currentTime]);

  // Cập nhật âm lượng
  useEffect(() => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.mute();
    } else {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume);
    }
  }, [volume, isMuted]);

  // Đồng bộ Playback từ Server
  useEffect(() => {
    if (!playerRef.current || !playerRef.current.getPlayerState) return;
    if (Date.now() < suppressSyncUntilRef.current) return;

    const currentLocalTime = playerRef.current.getCurrentTime ? playerRef.current.getCurrentTime() : 0;
    const timeDiff = Math.abs(currentLocalTime - (playback?.currentTime || 0));

    if (timeDiff > 2.5 && playback?.currentTime !== undefined) {
      isSyncingRef.current = true;
      playerRef.current.seekTo(playback.currentTime, true);
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
    }

    if (playback?.isPlaying && playerRef.current.getPlayerState() !== 1) {
      isSyncingRef.current = true;
      playerRef.current.playVideo();
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
    } else if (!playback?.isPlaying && playerRef.current.getPlayerState() === 1) {
      isSyncingRef.current = true;
      playerRef.current.pauseVideo();
      setTimeout(() => {
        isSyncingRef.current = false;
      }, 400);
    }
  }, [playback?.isPlaying, playback?.currentTime]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-black shadow-2xl">
      <div ref={containerRef} className="w-full h-full pointer-events-auto" />
    </div>
  );
}

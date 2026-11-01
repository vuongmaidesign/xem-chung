import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

// Danh sách tên khán giả xuất hiện trên lưng ghế
const DEFAULT_NAMES = [
  'Truong son', 'MCK', 'Quang', 'Phu', 'habesocki',
  '12345', 'thich xac cuc', 'Hồng Sơn', 'Minh Vũ', 'Thu Thảo',
  'Đức Huy', 'Tuấn Anh', 'Bảo Ngọc', 'Hoàng Nam', 'Khánh Linh',
  'Phương Anh', 'Văn Hùng', 'Thanh Tùng', 'Kim Ngân', 'Thành Long',
  'Anh Dũng', 'Hải Yến', 'Quỳnh Chi', 'Việt Hoàng', 'Thùy Dương'
];

export default function Cinema3DScene({
  video,
  playback,
  volume = 100,
  isMuted = false,
  onSyncAction,
  onVideoEnded,
}) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const isSyncingRef = useRef(false);
  const suppressSyncUntilRef = useRef(0);
  const currentVideoIdRef = useRef(video?.id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENES: Scene WebGL & Scene CSS3D
    const sceneGL = new THREE.Scene();
    sceneGL.background = new THREE.Color(0x121313);
    sceneGL.fog = new THREE.FogExp2(0x111212, 0.0045);

    const sceneCSS = new THREE.Scene();

    // CAMERA CHÍNH XÁC 100% CỦA CHOIGIVUI.COM:
    // fov: 48, aspect, near: 0.1, far: 150
    // position: (8, 14.4, 29) nhìn về (0, 5, -3)
    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      150
    );
    camera.position.set(8, 14.4, 29);
    camera.lookAt(0, 5, -3);

    // 1. RENDERER CSS3D (Layer dưới)
    const rendererCSS = new CSS3DRenderer();
    rendererCSS.setSize(container.clientWidth, container.clientHeight);
    rendererCSS.domElement.style.position = 'absolute';
    rendererCSS.domElement.style.top = '0';
    rendererCSS.domElement.style.left = '0';
    rendererCSS.domElement.style.width = '100%';
    rendererCSS.domElement.style.height = '100%';
    rendererCSS.domElement.style.zIndex = '1';
    container.appendChild(rendererCSS.domElement);

    // 2. RENDERER WebGL (Layer trên, alpha: true)
    const rendererGL = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    rendererGL.setSize(container.clientWidth, container.clientHeight);
    rendererGL.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    rendererGL.toneMapping = THREE.ACESFilmicToneMapping;
    rendererGL.toneMappingExposure = 1.18;
    rendererGL.domElement.style.position = 'absolute';
    rendererGL.domElement.style.top = '0';
    rendererGL.domElement.style.left = '0';
    rendererGL.domElement.style.width = '100%';
    rendererGL.domElement.style.height = '100%';
    rendererGL.domElement.style.zIndex = '2';
    rendererGL.domElement.style.pointerEvents = 'none';
    container.appendChild(rendererGL.domElement);

    // HỆ THỐNG ÁNH SÁNG CHÍNH XÁC CỦA CHOIGIVUI.COM
    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xd6dfcc, 2.65);
    sceneGL.add(ambientLight);

    // PointLight rọi màn hình: (0, 8, -7)
    const screenLight = new THREE.PointLight(0xb9d368, 150, 55, 1.5);
    screenLight.position.set(0, 8, -7);
    sceneGL.add(screenLight);

    // PointLight trần: (0, 15, 9)
    const ceilingLight = new THREE.PointLight(0xf3b3bc, 80, 40, 1.7);
    ceilingLight.position.set(0, 15, 9);
    sceneGL.add(ceilingLight);

    // Đèn rọi 2 bên tường: (-10, 9, 1), (10, 9, 3), (0, 14, 9)
    const wallLight1 = new THREE.PointLight(0xaa00aa, 45, 1.25);
    wallLight1.position.set(-10, 9, 1);
    sceneGL.add(wallLight1);

    const wallLight2 = new THREE.PointLight(0xc5a7ff, 45, 1.25);
    wallLight2.position.set(10, 9, 3);
    sceneGL.add(wallLight2);

    const wallLight3 = new THREE.PointLight(0xffaa5d, 40, 1.25);
    wallLight3.position.set(0, 14, 9);
    sceneGL.add(wallLight3);

    // Helper tạo vật liệu & hình khối nhanh
    const materialCache = new Map();
    const getMat = (color, roughness = 0.8, metalness = 0) => {
      const key = `${color}_${roughness}_${metalness}`;
      if (!materialCache.has(key)) {
        materialCache.set(key, new THREE.MeshStandardMaterial({ color, roughness, metalness }));
      }
      return materialCache.get(key);
    };
    const getBasicMat = (color) => new THREE.MeshBasicMaterial({ color });

    const boxGeo = new THREE.BoxGeometry(1, 1, 1);
    const createBox = (parent, x, y, z, sx, sy, sz, mat) => {
      const mesh = new THREE.Mesh(boxGeo, mat);
      mesh.position.set(x, y, z);
      mesh.scale.set(sx, sy, sz);
      parent.add(mesh);
      return mesh;
    };

    // 1. SÀN RẠP PHIM
    createBox(sceneGL, 0, -0.35, 7.5, 30, 0.6, 34, getMat('#252321'));

    // 2. 10 HÀNG BẬC THANG DỐC CỦA RẠP CHIẾU
    for (let e = 0; e < 10; e++) {
      createBox(sceneGL, 0, e * 0.34 - 0.12, -1 + e * 2, 27, 0.24, 2, getMat(e % 2 ? '#31282a' : '#2c2527'));
      // Các dải đèn LED nhỏ dọc bậc thang
      for (const t of [-8.8, -4.7, 1.15, 6.75]) {
        createBox(sceneGL, t, e * 0.34 + 0.025, -1 + e * 2, 0.045, 0.035, 1.65, getBasicMat('#c28c58'));
      }
    }
    createBox(sceneGL, 0, 2.94, 19.45, 27, 0.24, 2.9, getMat('#2c2527'));

    // 3. BỤC SÂN KHẤU (STAGE)
    createBox(sceneGL, 0, 0.1, -7, 29, 0.4, 6, getMat('#282727'));
    createBox(sceneGL, 0, 0.34, -6, 25, 0.05, 0.06, getBasicMat('#b0804f'));

    // 4. TƯỜNG SAU (FRONT WALL)
    createBox(sceneGL, 0, 8.5, -12, 30, 18, 0.5, getMat('#191b1b'));

    // 5. HAI BỨC TƯỜNG BÊN TRÁI VÀ PHẢI VỚI ĐÈN RỌI VÀ SỌC LED
    for (const e of [-15, 15]) {
      createBox(sceneGL, e, 8, 5, 0.35, 18, 35, getMat('#212324'));
      // Các cột đèn sọc LED màu vàng ấm
      for (let t = -8; t < 24; t += 3.5) {
        createBox(sceneGL, e < 0 ? e + 0.21 : e - 0.21, 7.5, t, 0.12, 10, 2.5, getMat('#2b2d2c'));
        createBox(sceneGL, e < 0 ? e + 0.3 : e - 0.3, 8, t + 1.6, 0.06, 9, 0.04, getBasicMat('#a97a51'));

        // Đèn rọi Spot (Cone đèn rọi hắt xuống sàn)
        const spotLight = new THREE.SpotLight(0xffdf88, 1.2, 16, Math.PI / 6, 0.5);
        spotLight.position.set(e < 0 ? e + 0.8 : e - 0.8, 12, t + 1.6);
        spotLight.target.position.set(e < 0 ? e + 4 : e - 4, 0, t + 1.6);
        sceneGL.add(spotLight);
        sceneGL.add(spotLight.target);
      }
    }

    // 6. HAI DÀN LOA CÂY THÙNG ĐỨNG 2 BÊN MÀN HÌNH (SOUND TOWERS)
    const speakerCylinderGeo = new THREE.CylinderGeometry(0.61, 0.61, 0.09, 32);
    for (const e of [-1, 1]) {
      const t = e * 12.7;
      createBox(sceneGL, t, 4.3, -9, 2, 7.8, 1.5, getMat('#101212', 0.8, 0.2));
      for (const y of [1.65, 3.75, 5.85]) {
        const cone = new THREE.Mesh(speakerCylinderGeo, getMat('#434644', 0.6, 0.5));
        cone.rotation.x = Math.PI / 2;
        cone.position.set(t, y, -8.21);
        sceneGL.add(cone);
      }
    }

    // 7. KHUNG MÀN HÌNH CHIẾU CHUẨN KÍCH THƯỚC CỦA CHOIGIVUI.COM
    // Kích thước: Rộng 21.2, Cao 11.95, Tọa độ: (0, 7.9, -10.44)
    createBox(sceneGL, 0, 7.9, -10.8, 22.2, 12.7, 0.4, getMat('#080909'));
    createBox(sceneGL, 0, 7.9, -10.55, 21.7, 12.2, 0.06, getBasicMat('#6b725d'));
    createBox(sceneGL, 0, 7.9, -10.49, 21.25, 11.95, 0.03, getBasicMat('#171d1c'));

    // Bảng chữ nổi W E T U B E   C I N É
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 512;
    labelCanvas.height = 128;
    const lctx = labelCanvas.getContext('2d');
    lctx.fillStyle = '#252726';
    lctx.fillRect(0, 0, 512, 128);
    lctx.fillStyle = '#d6e4c2';
    lctx.font = '700 48px Arial';
    lctx.textAlign = 'center';
    lctx.textBaseline = 'middle';
    lctx.fillText('W E T U B E   C I N É', 256, 64);
    const labelTex = new THREE.CanvasTexture(labelCanvas);
    const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(3.2, 0.65), new THREE.MeshBasicMaterial({ map: labelTex }));
    labelMesh.position.set(0, 1.05, -9.9);
    sceneGL.add(labelMesh);

    // =================================================================
    // 8. MÀN HÌNH YOUTUBE 3D (CSS3DOBJECT) VÀ DEPTH MASK
    // =================================================================
    const screenWidth = 1280;
    const screenHeight = 720;
    const screenScale = 21.2 / 1280; // Chính xác tỷ lệ của choigivui.com!

    const iframeDiv = document.createElement('div');
    iframeDiv.style.width = `${screenWidth}px`;
    iframeDiv.style.height = `${screenHeight}px`;
    iframeDiv.style.background = '#000';
    iframeDiv.innerHTML = '<div id="yt-exact-screen" style="width: 100%; height: 100%;"></div>';

    const cssScreen = new CSS3DObject(iframeDiv);
    cssScreen.position.set(0, 7.9, -10.44);
    cssScreen.scale.set(screenScale, screenScale, screenScale);
    sceneCSS.add(cssScreen);

    // WebGL Depth Mask: Đặt tại (0, 7.9, -10.44), colorWrite = false
    // Mọi người, bục sân khấu, ghế có z > -10.44 sẽ TỰ ĐỘNG CHE MÀN HÌNH YOUTUBE!
    const maskMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(21.2, 11.95),
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    maskMesh.material.colorWrite = false;
    maskMesh.position.set(0, 7.9, -10.44);
    sceneGL.add(maskMesh);

    // 9. QUẢ CẦU DISCO TRÊN TRẦN
    const discoMesh = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), getMat('#ffffff', 0.1, 0.9));
    discoMesh.position.set(0, 15.6, -0.5);
    sceneGL.add(discoMesh);
    createBox(sceneGL, 0, 17, -0.5, 0.045, 2.1, 0.045, getMat('#6e736f', 0.2, 0.9));

    // =================================================================
    // 10. BA NHÂN VẬT ĐỨNG TRÊN SÂN KHẤU (STAGE PERFORMERS CHUẨN ẢNH 1)
    // =================================================================
    const createStageGuy = (x, z, shirtColor, ringColor) => {
      const g = new THREE.Group();
      g.position.set(x, 0.35, z);

      // Vòng tròn neon dưới chân
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.45, 0.52, 32),
        new THREE.MeshBasicMaterial({ color: ringColor, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.02;
      g.add(ring);

      // Thân
      const body = new THREE.Mesh(boxGeo, getMat(shirtColor, 0.7));
      body.position.set(0, 1.23, 0);
      body.scale.set(0.68, 0.83, 0.48);
      g.add(body);

      // Đầu tròn & Tóc
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.33, 20, 16), getMat('#cba07d', 0.6));
      head.position.set(0, 1.99, 0);
      g.add(head);

      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.342, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.46), getMat('#392d25', 0.9));
      hair.rotation.x = -Math.PI / 2;
      hair.position.set(0, 2.02, 0);
      g.add(hair);

      return g;
    };

    // 3 người trên sân khấu như ảnh 1:
    const stageP1 = createStageGuy(-3.0, -6.5, '#93c5fd', '#f43f5e'); // Áo xanh da trời (vòng hồng)
    const stageP2 = createStageGuy(0.0, -6.5, '#86efac', '#ec4899');  // Áo xanh cốm ở giữa (vòng tím hồng)
    const stageP3 = createStageGuy(3.0, -6.5, '#fbcfe8', '#f43f5e');  // Áo hồng kem bên phải (vòng hồng)
    sceneGL.add(stageP1);
    sceneGL.add(stageP2);
    sceneGL.add(stageP3);

    // =================================================================
    // 11. HÀNG GHẾ SOFA RẠP CHIẾU & KHÁN GIẢ (10 HÀNG CHUẨN CHOIGIVUI.COM)
    // =================================================================
    const sofaColors = ['#93c5fd', '#fbcfe8', '#fef08a', '#a7f3d0', '#c4b5fd', '#fde047', '#d8ef82', '#fca5a5'];

    // Helper tạo Name Tag nhỏ gắn lưng ghế
    const createNameTagTexture = (name) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 64;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#d2dacb';
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 56, 12);
      ctx.fill();
      ctx.strokeStyle = '#a6b89e';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = '#1e241c';
      ctx.font = 'bold 26px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(name.slice(0, 12), 128, 34);
      return new THREE.CanvasTexture(c);
    };

    // Tạo 10 hàng ghế
    for (let r = 0; r < 10; r++) {
      const z = -1 + r * 2.0;
      const y = r * 0.34;

      for (let c = 0; c < 12; c++) {
        // Chia thành 2 dãy: Dãy trái 8 ghế, Dãy phải 4 ghế, ở giữa là lối đi
        let x = (c - 5.5) * 1.45;
        if (c >= 8) x += 1.2; // Lối đi có đèn

        const isVip = (r === 0 && (c === 5 || c === 6));

        // Ghế sofa rạp chiếu bo góc
        const chairBack = createBox(sceneGL, x, y + 0.65, z, 1.1, 0.9, 0.35, getMat(isVip ? '#881337' : '#222629', 0.8));
        const chairSeat = createBox(sceneGL, x, y + 0.25, z + 0.35, 1.1, 0.3, 0.8, getMat(isVip ? '#881337' : '#1c2022', 0.8));

        // Nếu là ghế VIP hoàng gia: Ngai vàng & Vương miện
        if (isVip) {
          const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.3, 6), getMat('#facc15', 0.2, 0.8));
          crown.position.set(x, y + 2.1, z);
          sceneGL.add(crown);
        }

        // Khán giả ngồi trên ghế
        const seatIndex = r * 12 + c;
        if (seatIndex % 2 === 0 || r < 3) {
          const color = sofaColors[seatIndex % sofaColors.length];

          // Thân người ngồi
          createBox(sceneGL, x, y + 0.8, z + 0.25, 0.68, 0.75, 0.5, getMat(color, 0.7));

          // Đầu & Tóc
          const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), getMat('#cba07d', 0.6));
          head.position.set(x, y + 1.4, z + 0.25);
          sceneGL.add(head);

          const hair = new THREE.Mesh(new THREE.SphereGeometry(0.33, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.46), getMat('#2b221c', 0.9));
          hair.rotation.x = -Math.PI / 2;
          hair.position.set(x, y + 1.44, z + 0.25);
          sceneGL.add(hair);

          // Thẻ tên gắn sau lưng ghế
          const name = DEFAULT_NAMES[seatIndex % DEFAULT_NAMES.length];
          const tagMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(0.7, 0.18),
            new THREE.MeshBasicMaterial({ map: createNameTagTexture(name), transparent: true })
          );
          tagMesh.position.set(x, y + 0.65, z + 0.19);
          sceneGL.add(tagMesh);
        }
      }
    }

    // =================================================================
    // KHỞI TẠO YOUTUBE PLAYER TRONG CSS3D SCREEN
    // =================================================================
    let checkInterval = setInterval(() => {
      if (window.YT && window.YT.Player && document.getElementById('yt-exact-screen')) {
        clearInterval(checkInterval);
        checkInterval = null;

        playerRef.current = new window.YT.Player('yt-exact-screen', {
          height: '100%',
          width: '100%',
          videoId: video ? video.id : '5qap5aO4i9A',
          playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event) => {
              event.target.setVolume(volume);
              if (isMuted) event.target.mute();
              if (playback?.currentTime) event.target.seekTo(playback.currentTime, true);
              if (playback?.isPlaying) event.target.playVideo();
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                suppressSyncUntilRef.current = Date.now() + 3000;
                if (onVideoEnded) onVideoEnded();
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
      }
    }, 300);

    // ANIMATION RENDER LOOP (Đồng bộ CSS3D & WebGL)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      discoMesh.rotation.y += 0.005;

      stageP1.position.y = 0.35 + Math.sin(elapsed * 2) * 0.02;
      stageP2.position.y = 0.35 + Math.cos(elapsed * 2.2) * 0.02;
      stageP3.position.y = 0.35 + Math.sin(elapsed * 1.8) * 0.02;

      rendererCSS.render(sceneCSS, camera);
      rendererGL.render(sceneGL, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      rendererCSS.setSize(container.clientWidth, container.clientHeight);
      rendererGL.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (checkInterval) clearInterval(checkInterval);
      cancelAnimationFrame(animationFrameId);
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch (e) {}
        playerRef.current = null;
      }
      if (rendererCSS.domElement && container.contains(rendererCSS.domElement)) {
        container.removeChild(rendererCSS.domElement);
      }
      if (rendererGL.domElement && container.contains(rendererGL.domElement)) {
        container.removeChild(rendererGL.domElement);
      }
      rendererGL.dispose();
    };
  }, []);

  // Xử lý đổi video hoặc Replay
  useEffect(() => {
    if (!playerRef.current || !video?.id) return;

    if (currentVideoIdRef.current === video.id) {
      if (playback?.currentTime === 0) {
        isSyncingRef.current = true;
        suppressSyncUntilRef.current = Date.now() + 2500;
        playerRef.current.seekTo(0, true);
        playerRef.current.playVideo();
        setTimeout(() => { isSyncingRef.current = false; }, 500);
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
        if (playback?.isPlaying) playerRef.current?.playVideo();
        isSyncingRef.current = false;
      }, 600);
    }
  }, [video?.id, playback?.currentTime]);

  // Âm lượng
  useEffect(() => {
    if (!playerRef.current) return;
    if (isMuted) playerRef.current.mute();
    else {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume);
    }
  }, [volume, isMuted]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#121313]">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

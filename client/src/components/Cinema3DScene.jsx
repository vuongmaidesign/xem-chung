import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default function Cinema3DScene({
  video,
  playback,
  volume = 100,
  isMuted = false,
  onSyncAction,
  onVideoEnded,
  seats = [],
  users = [],
  currentUserId,
  onSelectSeat,
  isStandingOnStage = false,
  myProfile,
}) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const isSyncingRef = useRef(false);
  const suppressSyncUntilRef = useRef(0);
  const currentVideoIdRef = useRef(video?.id);

  // Refs để cập nhật động khi users hoặc seats thay đổi mà không re-render Three.js canvas
  const updateAudienceRef = useRef(null);
  const onSelectSeatRef = useRef(onSelectSeat);
  onSelectSeatRef.current = onSelectSeat;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENES: Scene WebGL & Scene CSS3D
    const sceneGL = new THREE.Scene();
    sceneGL.background = null; // Trong suốt để thấy YouTube bên dưới
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

    // 1. RENDERER CSS3D (Layer dưới chứa YouTube iframe 3D)
    const rendererCSS = new CSS3DRenderer();
    rendererCSS.setSize(container.clientWidth, container.clientHeight);
    rendererCSS.domElement.style.position = 'absolute';
    rendererCSS.domElement.style.top = '0';
    rendererCSS.domElement.style.left = '0';
    rendererCSS.domElement.style.width = '100%';
    rendererCSS.domElement.style.height = '100%';
    rendererCSS.domElement.style.zIndex = '1';
    rendererCSS.domElement.style.pointerEvents = 'auto';
    container.appendChild(rendererCSS.domElement);

    // 2. RENDERER WebGL (Layer trên, alpha: true, clearColor 0 alpha)
    const rendererGL = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    rendererGL.setSize(container.clientWidth, container.clientHeight);
    rendererGL.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    rendererGL.setClearColor(0x000000, 0); // Độ trong suốt 100%
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
    const ambientLight = new THREE.AmbientLight(0xd6dfcc, 2.65);
    sceneGL.add(ambientLight);

    const screenLight = new THREE.PointLight(0xb9d368, 150, 55, 1.5);
    screenLight.position.set(0, 8, -7);
    sceneGL.add(screenLight);

    const ceilingLight = new THREE.PointLight(0xf3b3bc, 80, 40, 1.7);
    ceilingLight.position.set(0, 15, 9);
    sceneGL.add(ceilingLight);

    const wallLight1 = new THREE.PointLight(0xaa00aa, 45, 1.25);
    wallLight1.position.set(-10, 9, 1);
    sceneGL.add(wallLight1);

    const wallLight2 = new THREE.PointLight(0xc5a7ff, 45, 1.25);
    wallLight2.position.set(10, 9, 3);
    sceneGL.add(wallLight2);

    const wallLight3 = new THREE.PointLight(0xffaa5d, 40, 1.25);
    wallLight3.position.set(0, 14, 9);
    sceneGL.add(wallLight3);

    // Helper tạo vật liệu & hình khối
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
      for (const t of [-8.8, -4.7, 1.15, 6.75]) {
        createBox(sceneGL, t, e * 0.34 + 0.025, -1 + e * 2, 0.045, 0.035, 1.65, getBasicMat('#c28c58'));
      }
    }
    createBox(sceneGL, 0, 2.94, 19.45, 27, 0.24, 2.9, getMat('#2c2527'));

    // 3. BỤC SÂN KHẤU (STAGE)
    createBox(sceneGL, 0, 0.1, -7, 29, 0.4, 6, getMat('#282727'));
    createBox(sceneGL, 0, 0.34, -6, 25, 0.05, 0.06, getBasicMat('#b0804f'));

    // 4. TƯỜNG SAU (Cắt rỗng khu vực màn chiếu để YouTube xuyên qua)
    createBox(sceneGL, 0, 15.9, -12, 30, 4.2, 0.5, getMat('#191b1b'));
    createBox(sceneGL, 0, 0.95, -12, 30, 2.1, 0.5, getMat('#191b1b'));
    createBox(sceneGL, -12.8, 7.9, -12, 4.4, 12.0, 0.5, getMat('#191b1b'));
    createBox(sceneGL, 12.8, 7.9, -12, 4.4, 12.0, 0.5, getMat('#191b1b'));

    // 5. HAI BỨC TƯỜNG BÊN TRÁI VÀ PHẢI VỚI ĐÈN RỌI VÀ SỌC LED
    for (const e of [-15, 15]) {
      createBox(sceneGL, e, 8, 5, 0.35, 18, 35, getMat('#212324'));
      for (let t = -8; t < 24; t += 3.5) {
        createBox(sceneGL, e < 0 ? e + 0.21 : e - 0.21, 7.5, t, 0.12, 10, 2.5, getMat('#2b2d2c'));
        createBox(sceneGL, e < 0 ? e + 0.3 : e - 0.3, 8, t + 1.6, 0.06, 9, 0.04, getBasicMat('#a97a51'));

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

    // 7. KHUNG VIỀN MÀN HÌNH CHIẾU CHUẨN KÍCH THƯỚC (Rỗng tâm)
    createBox(sceneGL, 0, 13.92, -10.45, 21.5, 0.15, 0.1, getBasicMat('#6b725d'));
    createBox(sceneGL, 0, 1.88, -10.45, 21.5, 0.15, 0.1, getBasicMat('#6b725d'));
    createBox(sceneGL, -10.7, 7.9, -10.45, 0.15, 12.2, 0.1, getBasicMat('#6b725d'));
    createBox(sceneGL, 10.7, 7.9, -10.45, 0.15, 12.2, 0.1, getBasicMat('#6b725d'));

    createBox(sceneGL, 0, 14.17, -10.48, 22.2, 0.35, 0.16, getMat('#0c0d0d'));
    createBox(sceneGL, 0, 1.63, -10.48, 22.2, 0.35, 0.16, getMat('#0c0d0d'));
    createBox(sceneGL, -10.95, 7.9, -10.48, 0.35, 12.7, 0.16, getMat('#0c0d0d'));
    createBox(sceneGL, 10.95, 7.9, -10.48, 0.35, 12.7, 0.16, getMat('#0c0d0d'));

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
    // 8. MÀN HÌNH YOUTUBE 3D (CSS3DOBJECT)
    // =================================================================
    const screenWidth = 1280;
    const screenHeight = 720;
    const screenScale = 21.25 / 1280;

    const iframeDiv = document.createElement('div');
    iframeDiv.style.width = `${screenWidth}px`;
    iframeDiv.style.height = `${screenHeight}px`;
    iframeDiv.style.background = '#000000';
    iframeDiv.style.overflow = 'hidden';
    iframeDiv.style.pointerEvents = 'auto';
    iframeDiv.innerHTML = '<div id="yt-exact-screen" style="width: 100%; height: 100%;"></div>';

    const cssScreen = new CSS3DObject(iframeDiv);
    cssScreen.position.set(0, 7.9, -10.45);
    cssScreen.scale.set(screenScale, screenScale, screenScale);
    sceneCSS.add(cssScreen);

    // 9. QUẢ CẦU DISCO TRÊN TRẦN
    const discoMesh = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), getMat('#ffffff', 0.1, 0.9));
    discoMesh.position.set(0, 15.6, -0.5);
    sceneGL.add(discoMesh);
    createBox(sceneGL, 0, 17, -0.5, 0.045, 2.1, 0.045, getMat('#6e736f', 0.2, 0.9));

    // =================================================================
    // 10. KHỞI TẠO 100 GHẾ SOFA TRỐNG (10 HÀNG x 10 CỘT CHUẨN CHOIGIVUI)
    // =================================================================
    const seatMap = new Map();
    const seatHitBoxes = [];

    for (let r = 0; r < 10; r++) {
      const rowLetter = String.fromCharCode(65 + r); // A đến J
      const z = -1 + r * 2.0;
      const y = r * 0.34;

      for (let c = 0; c < 10; c++) {
        const seatNum = c + 1;
        const seatId = `${rowLetter}${seatNum}`;

        // Chia làm 2 dãy, chừa lối đi có đèn LED ở giữa
        let x = (c - 4.5) * 1.5;
        if (c >= 5) x += 0.8;
        else x -= 0.8;

        const isVip = (r === 0 && (c === 4 || c === 5));

        // Ghế sofa
        createBox(sceneGL, x, y + 0.65, z, 1.15, 0.9, 0.35, getMat(isVip ? '#881337' : '#222629', 0.8));
        createBox(sceneGL, x, y + 0.25, z + 0.35, 1.15, 0.3, 0.8, getMat(isVip ? '#881337' : '#1c2022', 0.8));

        // Ghế VIP có vương miện
        if (isVip) {
          const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.25, 0.3, 6), getMat('#facc15', 0.2, 0.8));
          crown.position.set(x, y + 2.1, z);
          sceneGL.add(crown);
        }

        // Hit box để raycast bấm chọn ghế ngồi
        const hitBox = new THREE.Mesh(
          new THREE.BoxGeometry(1.3, 1.4, 1.3),
          new THREE.MeshBasicMaterial({ visible: false })
        );
        hitBox.position.set(x, y + 0.7, z + 0.3);
        hitBox.userData = { seatId, x, y, z, isVip };
        sceneGL.add(hitBox);
        seatHitBoxes.push(hitBox);

        seatMap.set(seatId, { id: seatId, x, y, z, isVip, row: rowLetter, number: seatNum });
      }
    }

    // =================================================================
    // 11. NHÓM KHÁN GIẢ & SÂN KHẤU DYNAMIC (AI VÀO THÌ MỚI CÓ NGƯỜI ĐÓ!)
    // =================================================================
    const audienceGroup = new THREE.Group();
    sceneGL.add(audienceGroup);

    let activeStageGuys = [];

    // Helper tạo Name Tag nhỏ gắn lưng ghế hoặc trên đầu
    const createNameTagTexture = (name, isMe = false) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 64;
      const ctx = c.getContext('2d');

      ctx.fillStyle = isMe ? '#d8ef82' : '#d2dacb';
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 56, 12);
      ctx.fill();

      ctx.strokeStyle = isMe ? '#ffffff' : '#a6b89e';
      ctx.lineWidth = isMe ? 5 : 4;
      ctx.stroke();

      ctx.fillStyle = '#1e241c';
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(name.slice(0, 14), 128, 34);

      return new THREE.CanvasTexture(c);
    };

    // Hàm render động: CHỈ vẽ người thực sự có mặt trong phòng!
    const updateAudience = (userList, seatList, stageStatus) => {
      // Dọn sạch khán giả cũ
      while (audienceGroup.children.length > 0) {
        const obj = audienceGroup.children[0];
        audienceGroup.remove(obj);
        if (obj.geometry) obj.geometry.dispose();
      }
      activeStageGuys = [];

      let currentAudience = Array.isArray(userList) && userList.length > 0 ? [...userList] : [];
      if (currentAudience.length === 0) {
        currentAudience = [
          {
            id: currentUserId || 'me',
            nickname: myProfile?.nickname || 'Bạn',
            color: myProfile?.color || '#93c5fd',
            avatar: myProfile?.avatar || '🍿',
            seatId: 'A5',
            isStage: stageStatus,
          },
        ];
      }

      const stageGuys = [];
      const seatedGuys = [];

      currentAudience.forEach((u) => {
        const onStage = (u.id === currentUserId && stageStatus) || Boolean(u.isStage);
        if (onStage) stageGuys.push(u);
        else seatedGuys.push(u);
      });

      // 1. VẼ NHỮNG NGƯỜI ĐANG ĐỨNG TRÊN SÂN KHẤU
      const nStage = stageGuys.length;
      stageGuys.forEach((u, i) => {
        let sx = 0;
        if (nStage === 2) sx = i === 0 ? -1.8 : 1.8;
        else if (nStage === 3) sx = (i - 1) * 2.8;
        else if (nStage > 3) sx = (i - (nStage - 1) / 2) * 2.4;

        const sy = 0.35;
        const sz = -6.5;

        // Vòng tròn neon dưới chân
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.48, 0.56, 32),
          new THREE.MeshBasicMaterial({ color: u.color || '#ec4899', side: THREE.DoubleSide })
        );
        ring.rotation.x = -Math.PI / 2;
        ring.position.set(sx, sy + 0.02, sz);
        audienceGroup.add(ring);

        // Nhân vật
        const g = new THREE.Group();
        g.position.set(sx, sy, sz);

        const body = new THREE.Mesh(boxGeo, getMat(u.color || '#93c5fd', 0.7));
        body.position.set(0, 1.23, 0);
        body.scale.set(0.68, 0.83, 0.48);
        g.add(body);

        const head = new THREE.Mesh(new THREE.SphereGeometry(0.33, 20, 16), getMat('#cba07d', 0.6));
        head.position.set(0, 1.99, 0);
        g.add(head);

        const hair = new THREE.Mesh(new THREE.SphereGeometry(0.342, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.46), getMat('#392d25', 0.9));
        hair.rotation.x = -Math.PI / 2;
        hair.position.set(0, 2.02, 0);
        g.add(hair);

        // Name tag trên đầu
        const isMe = (u.id === currentUserId || u.id === 'me');
        const displayName = isMe ? `${u.nickname || 'Bạn'} (Bạn)` : (u.nickname || 'Khán giả');
        const tag = new THREE.Mesh(
          new THREE.PlaneGeometry(0.9, 0.23),
          new THREE.MeshBasicMaterial({ map: createNameTagTexture(displayName, isMe), transparent: true })
        );
        tag.position.set(0, 2.5, 0);
        g.add(tag);

        audienceGroup.add(g);
        activeStageGuys.push(g);
      });

      // 2. VẼ NHỮNG NGƯỜI ĐANG NGỒI TRÊN GHẾ (CÒN LẠI ĐỂ TRỐNG HOÀN TOÀN!)
      const usedSeatIds = new Set();
      seatedGuys.forEach((u) => {
        let seatPos = u.seatId ? seatMap.get(u.seatId) : null;
        if (!seatPos || usedSeatIds.has(seatPos.id)) {
          // Gán ghế trống gần nhất
          for (const [id, pos] of seatMap.entries()) {
            if (!usedSeatIds.has(id)) {
              seatPos = pos;
              break;
            }
          }
        }
        if (!seatPos) return;
        usedSeatIds.add(seatPos.id);

        const { x, y, z } = seatPos;
        const isMe = (u.id === currentUserId || u.id === 'me');

        // Thân người ngồi
        const body = new THREE.Mesh(boxGeo, getMat(u.color || '#93c5fd', 0.7));
        body.position.set(x, y + 0.8, z + 0.25);
        body.scale.set(0.68, 0.75, 0.5);
        audienceGroup.add(body);

        // Đầu & Tóc
        const head = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), getMat('#cba07d', 0.6));
        head.position.set(x, y + 1.4, z + 0.25);
        audienceGroup.add(head);

        const hair = new THREE.Mesh(new THREE.SphereGeometry(0.33, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.46), getMat('#2b221c', 0.9));
        hair.rotation.x = -Math.PI / 2;
        hair.position.set(x, y + 1.44, z + 0.25);
        audienceGroup.add(hair);

        // Thẻ tên gắn sau lưng ghế
        const displayName = isMe ? `${u.nickname || 'Bạn'} (Bạn)` : (u.nickname || 'Khán giả');
        const tag = new THREE.Mesh(
          new THREE.PlaneGeometry(0.75, 0.2),
          new THREE.MeshBasicMaterial({ map: createNameTagTexture(displayName, isMe), transparent: true })
        );
        tag.position.set(x, y + 0.65, z + 0.19);
        audienceGroup.add(tag);
      });
    };

    updateAudienceRef.current = updateAudience;
    updateAudience(users, seats, isStandingOnStage);

    // =================================================================
    // 12. RAYCASTING: CLICK VÀO GHẾ ĐỂ ĐỔI CHỖ NGỒI
    // =================================================================
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event) => {
      if (event.button !== 0) return; // Chỉ chuột trái
      const rect = rendererGL.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const hits = raycaster.intersectObjects(seatHitBoxes);
      if (hits.length > 0) {
        const hitSeatId = hits[0].object.userData?.seatId;
        if (hitSeatId && onSelectSeatRef.current) {
          onSelectSeatRef.current(hitSeatId);
        }
      }
    };
    container.addEventListener('pointerdown', onPointerDown);

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
              if (video?.id && video.id !== '5qap5aO4i9A') {
                event.target.loadVideoById({
                  videoId: video.id,
                  startSeconds: playback?.currentTime || 0,
                });
              }
              event.target.setVolume(volume);
              if (isMuted) event.target.mute();
              if (playback?.currentTime) event.target.seekTo(playback.currentTime, true);
              if (playback?.isPlaying !== false) event.target.playVideo();
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

      activeStageGuys.forEach((guy, idx) => {
        guy.position.y = 0.35 + Math.sin(elapsed * 2 + idx) * 0.02;
      });

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
      container.removeEventListener('pointerdown', onPointerDown);
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

  // Cập nhật động danh sách người ngồi khi users / seats / stage thay đổi
  useEffect(() => {
    if (updateAudienceRef.current) {
      updateAudienceRef.current(users, seats, isStandingOnStage);
    }
  }, [users, seats, isStandingOnStage, currentUserId, myProfile]);

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

  // Đồng bộ Play/Pause và Seek thời gian với phòng
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

    try {
      const state = playerRef.current.getPlayerState();
      if (playback?.isPlaying && state !== 1 && state !== 3) {
        isSyncingRef.current = true;
        playerRef.current.playVideo();
        setTimeout(() => {
          isSyncingRef.current = false;
        }, 400);
      } else if (!playback?.isPlaying && state === 1) {
        isSyncingRef.current = true;
        playerRef.current.pauseVideo();
        setTimeout(() => {
          isSyncingRef.current = false;
        }, 400);
      }
    } catch (e) {}
  }, [playback?.isPlaying, playback?.currentTime]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#121313]">
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-pointer" />
    </div>
  );
}

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const DEFAULT_NAMES = [
  'Truong son', 'MCK', 'Quang', 'Phu', 'habesocki',
  '12345', 'thich xac cuc', 'Hồng Sơn', 'Minh Vũ', 'Thu Thảo',
  'Đức Huy', 'Tuấn Anh', 'Bảo Ngọc', 'Hoàng Nam', 'Khánh Linh',
  'Phương Anh', 'Văn Hùng', 'Thanh Tùng', 'Kim Ngân', 'Thành Long',
];

export default function Cinema3DScene({
  video,
  playback,
  volume = 100,
  isMuted = false,
  onSyncAction,
  onVideoEnded,
  isStandingOnStage = false,
}) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const isSyncingRef = useRef(false);
  const suppressSyncUntilRef = useRef(0);
  const currentVideoIdRef = useRef(video?.id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // SCENES: Scene WebGL (chứa người, ghế, tường) & Scene CSS3D (chứa YouTube iframe)
    const sceneGL = new THREE.Scene();
    sceneGL.background = new THREE.Color(0x0a0c0e);
    sceneGL.fog = new THREE.FogExp2(0x0a0c0e, 0.02);

    const sceneCSS = new THREE.Scene();

    // CAMERA chung
    const camera = new THREE.PerspectiveCamera(
      46,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 5.7, 8.6);
    camera.lookAt(0, 1.4, -1.6);

    // 1. RENDERER CSS3D (Nằm ở layer dưới, hiển thị iframe YouTube 3D)
    const rendererCSS = new CSS3DRenderer();
    rendererCSS.setSize(container.clientWidth, container.clientHeight);
    rendererCSS.domElement.style.position = 'absolute';
    rendererCSS.domElement.style.top = '0';
    rendererCSS.domElement.style.left = '0';
    rendererCSS.domElement.style.width = '100%';
    rendererCSS.domElement.style.height = '100%';
    rendererCSS.domElement.style.zIndex = '1';
    container.appendChild(rendererCSS.domElement);

    // 2. RENDERER WebGL (Nằm ở layer trên, nền trong suốt alpha: true, vẽ người & ghế đè lên màn hình)
    const rendererGL = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    rendererGL.setSize(container.clientWidth, container.clientHeight);
    rendererGL.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererGL.domElement.style.position = 'absolute';
    rendererGL.domElement.style.top = '0';
    rendererGL.domElement.style.left = '0';
    rendererGL.domElement.style.width = '100%';
    rendererGL.domElement.style.height = '100%';
    rendererGL.domElement.style.zIndex = '2';
    rendererGL.domElement.style.pointerEvents = 'none'; // Sự kiện chuột click xuyên qua để bấm player nếu cần
    container.appendChild(rendererGL.domElement);

    // Ánh sáng (Lights)
    const ambientLight = new THREE.AmbientLight(0x38423c, 1.4);
    sceneGL.add(ambientLight);

    const screenLight = new THREE.PointLight(0xe2f8b5, 2.5, 18);
    screenLight.position.set(0, 2.8, -2.5);
    sceneGL.add(screenLight);

    const warmLightL = new THREE.PointLight(0xffdfa0, 1.8, 15);
    warmLightL.position.set(-5.5, 4, 1.5);
    sceneGL.add(warmLightL);

    const warmLightR = new THREE.PointLight(0xffdfa0, 1.8, 15);
    warmLightR.position.set(5.5, 4, 1.5);
    sceneGL.add(warmLightR);

    // Sàn rạp (Floor)
    const floorGeo = new THREE.PlaneGeometry(32, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x121415,
      roughness: 0.85,
      metalness: 0.15,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    sceneGL.add(floor);

    // Tường trước (Front Wall) nằm phía sau màn hình
    const wallFrontGeo = new THREE.PlaneGeometry(32, 16);
    const wallFrontMat = new THREE.MeshStandardMaterial({ color: 0x131517, roughness: 0.9 });
    const wallFront = new THREE.Mesh(wallFrontGeo, wallFrontMat);
    wallFront.position.set(0, 6, -5.6);
    sceneGL.add(wallFront);

    // Tường trái & Tường phải
    const wallSideGeo = new THREE.PlaneGeometry(32, 16);
    const wallSideMat = new THREE.MeshStandardMaterial({ color: 0x101213, roughness: 0.9 });

    const wallLeft = new THREE.Mesh(wallSideGeo, wallSideMat);
    wallLeft.rotation.y = Math.PI / 2;
    wallLeft.position.set(-7.5, 6, 2);
    sceneGL.add(wallLeft);

    const wallRight = new THREE.Mesh(wallSideGeo, wallSideMat);
    wallRight.rotation.y = -Math.PI / 2;
    wallRight.position.set(7.5, 6, 2);
    sceneGL.add(wallRight);

    // Đèn sọc LED 2 bên tường
    const stripGeo = new THREE.BoxGeometry(0.08, 3.2, 0.08);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xffdf88 });
    const lampGeo = new THREE.CylinderGeometry(0.12, 0.16, 0.25, 16);
    const lampMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });

    [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5].forEach((z) => {
      const stripL = new THREE.Mesh(stripGeo, stripMat);
      stripL.position.set(-7.4, 2.8, z);
      stripL.rotation.z = 0.08;
      sceneGL.add(stripL);

      const lampL = new THREE.Mesh(lampGeo, lampMat);
      lampL.position.set(-7.35, 4.4, z);
      sceneGL.add(lampL);

      const stripR = new THREE.Mesh(stripGeo, stripMat);
      stripR.position.set(7.4, 2.8, z);
      stripR.rotation.z = -0.08;
      sceneGL.add(stripR);

      const lampR = new THREE.Mesh(lampGeo, lampMat);
      lampR.position.set(7.35, 4.4, z);
      sceneGL.add(lampR);
    });

    // Quả cầu disco trên trần
    const discoGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const discoMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.95,
      roughness: 0.1,
    });
    const discoBall = new THREE.Mesh(discoGeo, discoMat);
    discoBall.position.set(0, 5.2, -1.8);
    sceneGL.add(discoBall);

    // Loa cây đứng 2 bên màn hình
    const speakerGeo = new THREE.BoxGeometry(0.85, 3.4, 0.85);
    const speakerMat = new THREE.MeshStandardMaterial({ color: 0x181a1c, roughness: 0.7 });
    const coneGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.05, 16);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });

    [-4.7, 4.7].forEach((x) => {
      const spk = new THREE.Mesh(speakerGeo, speakerMat);
      spk.position.set(x, 1.7, -4.8);
      sceneGL.add(spk);

      [0.85, 1.7, 2.55].forEach((y) => {
        const cone = new THREE.Mesh(coneGeo, coneMat);
        cone.rotation.x = Math.PI / 2;
        cone.position.set(x, y, -4.37);
        sceneGL.add(cone);
      });
    });

    // =================================================================
    // MÀN HÌNH YOUTUBE 3D (CSS3DOBJECT) NẰM TRÊN TƯỜNG SAU (z = -5.0)
    // =================================================================
    const screenWidth = 1280;
    const screenHeight = 720;
    const screenScale = 0.0062; // 1280 * 0.0062 = ~7.9 đơn vị Three.js

    const iframeDiv = document.createElement('div');
    iframeDiv.style.width = `${screenWidth}px`;
    iframeDiv.style.height = `${screenHeight}px`;
    iframeDiv.style.background = '#000';
    iframeDiv.style.border = '14px solid #080808';
    iframeDiv.style.boxSizing = 'border-box';
    iframeDiv.innerHTML = '<div id="yt-3d-screen" style="width: 100%; height: 100%;"></div>';

    const cssScreenObject = new CSS3DObject(iframeDiv);
    cssScreenObject.position.set(0, 2.55, -5.0);
    cssScreenObject.scale.set(screenScale, screenScale, screenScale);
    sceneCSS.add(cssScreenObject);

    // KỸ THUẬT MASKING TRONG WEBL:
    // Tạo 1 Mesh có kích thước bằng màn hình, colorWrite = false để ghi Depth Buffer.
    // Nhờ đó, bất kỳ vật thể WebGL nào (người, ghế, bục) ở z > -5.0 SẼ ĐƯỢC VẼ ĐÈ LÊN MÀN HÌNH YOUTUBE!
    const maskGeo = new THREE.PlaneGeometry(screenWidth * screenScale, screenHeight * screenScale);
    const maskMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    maskMat.colorWrite = false; // Không vẽ màu (để lộ iframe CSS3D bên dưới)
    const maskMesh = new THREE.Mesh(maskGeo, maskMat);
    maskMesh.position.set(0, 2.55, -5.0);
    sceneGL.add(maskMesh);

    // Bảng chữ nổi WETUBE CINÉ ở chân màn hình
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 512;
    labelCanvas.height = 64;
    const lctx = labelCanvas.getContext('2d');
    lctx.fillStyle = '#080808';
    lctx.fillRect(0, 0, 512, 64);
    lctx.fillStyle = '#8e9c80';
    lctx.font = 'bold 24px monospace';
    lctx.textAlign = 'center';
    lctx.textBaseline = 'middle';
    lctx.fillText('W E T U B E   C I N É', 256, 32);

    const labelGeo = new THREE.PlaneGeometry(1.6, 0.2);
    const labelMat = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(labelCanvas) });
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.set(0, 0.2, -4.8);
    sceneGL.add(labelMesh);

    // Bục sân khấu (Stage) NẰM PHÍA TRƯỚC MÀN HÌNH (z = -4.2)
    const stageGeo = new THREE.BoxGeometry(11.2, 0.38, 2.2);
    const stageMat = new THREE.MeshStandardMaterial({ color: 0x1a1c1e, roughness: 0.8 });
    const stage = new THREE.Mesh(stageGeo, stageMat);
    stage.position.set(0, -0.31, -4.2);
    sceneGL.add(stage);

    // Đèn rọi chân bục sân khấu (Footlights)
    const footlightGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 12);
    const footlightMat = new THREE.MeshBasicMaterial({ color: 0xffdf88 });
    [-3.2, -2.0, -0.8, 0.8, 2.0, 3.2].forEach((x) => {
      const fl = new THREE.Mesh(footlightGeo, footlightMat);
      fl.position.set(x, -0.1, -3.1);
      sceneGL.add(fl);
    });

    // =================================================================
    // 2 NHÂN VẬT ĐỨNG TRÊN SÂN KHẤU (z = -3.7) -> CHE TRƯỚC MÀN HÌNH YOUTUBE!
    // =================================================================
    const stageGroup = new THREE.Group();
    sceneGL.add(stageGroup);

    const createStagePerformer = (x, z, shirtColor, ringColor) => {
      const group = new THREE.Group();
      group.position.set(x, -0.12, z);

      // Vòng tròn neon dưới chân
      const ringGeo = new THREE.RingGeometry(0.24, 0.28, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: ringColor, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.01;
      group.add(ring);

      // Thân người (Đứng)
      const bodyGeo = new THREE.BoxGeometry(0.32, 0.46, 0.22);
      const bodyMat = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.7 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      body.position.y = 0.58;
      group.add(body);

      // Quần
      const legsGeo = new THREE.BoxGeometry(0.28, 0.38, 0.2);
      const legsMat = new THREE.MeshStandardMaterial({ color: 0x222a28, roughness: 0.8 });
      const legs = new THREE.Mesh(legsGeo, legsMat);
      legs.position.y = 0.2;
      group.add(legs);

      // Đầu tròn
      const headGeo = new THREE.SphereGeometry(0.19, 16, 16);
      const headMat = new THREE.MeshStandardMaterial({ color: 0xffdfc4, roughness: 0.6 });
      const head = new THREE.Mesh(headGeo, headMat);
      head.position.y = 0.95;
      group.add(head);

      // Tóc đen
      const hairGeo = new THREE.SphereGeometry(0.2, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
      const hairMat = new THREE.MeshStandardMaterial({ color: 0x1f1916, roughness: 0.9 });
      const hair = new THREE.Mesh(hairGeo, hairMat);
      hair.rotation.x = -Math.PI / 2;
      hair.position.y = 0.97;
      group.add(hair);

      return group;
    };

    const performer1 = createStagePerformer(-0.65, -3.7, 0x93c5fd, 0xf43f5e);
    stageGroup.add(performer1);

    const performer2 = createStagePerformer(0.65, -3.7, 0x86efac, 0xec4899);
    stageGroup.add(performer2);

    // =================================================================
    // CÁC HÀNG GHẾ RẠP CHIẾU 3D & KHÁN GIẢ (z = -2.6 đến +3.5)
    // TẤT CẢ NẰM PHÍA TRƯỚC CHE NỬA DƯỚI MÀN HÌNH YOUTUBE!
    // =================================================================
    const chairBackGeo = new THREE.BoxGeometry(0.38, 0.45, 0.08);
    const chairSeatGeo = new THREE.BoxGeometry(0.38, 0.08, 0.35);
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x24282c, roughness: 0.8 });
    const vipChairMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5 });

    const seatedBodyGeo = new THREE.BoxGeometry(0.3, 0.35, 0.24);
    const seatedHeadGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffdfc4, roughness: 0.6 });
    const hairGeo = new THREE.SphereGeometry(0.19, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1f1916, roughness: 0.9 });

    const shirtColors = [
      0x93c5fd, 0xfbcfe8, 0xfef08a, 0xa7f3d0,
      0xc4b5fd, 0xfde047, 0xd8ef82, 0xfca5a5,
    ];

    const rows = 7;
    const cols = 10;

    const createNameTagTexture = (name) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#e2e8dc';
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
      return new THREE.CanvasTexture(canvas);
    };

    const tagGeo = new THREE.PlaneGeometry(0.32, 0.08);

    for (let r = 0; r < rows; r++) {
      const z = -2.6 + r * 0.95;
      const y = -0.3 + r * 0.38;

      for (let c = 0; c < cols; c++) {
        let x = (c - (cols - 1) / 2) * 0.52;
        if (c >= 5) x += 0.35;

        const seatIndex = r * cols + c;
        const isVip = (r === 0 && (c === 4 || c === 5));

        const back = new THREE.Mesh(chairBackGeo, isVip ? vipChairMat : chairMat);
        back.position.set(x, y + 0.3, z);
        sceneGL.add(back);

        const seat = new THREE.Mesh(chairSeatGeo, isVip ? vipChairMat : chairMat);
        seat.position.set(x, y + 0.1, z + 0.14);
        sceneGL.add(seat);

        if (isVip) {
          const crownGeo = new THREE.CylinderGeometry(0.16, 0.12, 0.14, 6);
          const crownMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.85, roughness: 0.2 });
          const crown = new THREE.Mesh(crownGeo, crownMat);
          crown.position.set(x, y + 0.92, z);
          sceneGL.add(crown);
        }

        const isOccupied = seatIndex % 2 === 0 || r === 0 || r === 1 || r === 2;
        if (isOccupied) {
          const color = shirtColors[seatIndex % shirtColors.length];
          const shirtMat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });

          const body = new THREE.Mesh(seatedBodyGeo, shirtMat);
          body.position.set(x, y + 0.32, z + 0.12);
          sceneGL.add(body);

          const head = new THREE.Mesh(seatedHeadGeo, headMat);
          head.position.set(x, y + 0.62, z + 0.12);
          sceneGL.add(head);

          const hair = new THREE.Mesh(hairGeo, hairMat);
          hair.rotation.x = -Math.PI / 2;
          hair.position.set(x, y + 0.64, z + 0.12);
          sceneGL.add(hair);

          const personName = DEFAULT_NAMES[seatIndex % DEFAULT_NAMES.length];
          const tagMat = new THREE.MeshBasicMaterial({
            map: createNameTagTexture(personName),
            transparent: true,
          });
          const tag = new THREE.Mesh(tagGeo, tagMat);
          tag.position.set(x, y + 0.28, z + 0.05);
          sceneGL.add(tag);
        }
      }
    }

    // =================================================================
    // KHỞI TẠO YOUTUBE PLAYER TRONG CSS3D
    // =================================================================
    let checkInterval = setInterval(() => {
      if (window.YT && window.YT.Player && document.getElementById('yt-3d-screen')) {
        clearInterval(checkInterval);
        checkInterval = null;

        playerRef.current = new window.YT.Player('yt-3d-screen', {
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

    // ANIMATION RENDER LOOP (Đồng bộ cả CSS3D & WebGL)
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      discoBall.rotation.y += 0.005;

      performer1.position.y = -0.12 + Math.sin(elapsed * 2) * 0.015;
      performer2.position.y = -0.12 + Math.cos(elapsed * 2.2) * 0.015;

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
    <div className="relative w-full h-full overflow-hidden select-none">
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

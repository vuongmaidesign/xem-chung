import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Cinema3DScene({
  seats = [],
  users = [],
  currentUserId,
  recentBubbles = {},
  onSelectSeat,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1012);
    scene.fog = new THREE.FogExp2(0x0e1012, 0.025);

    // Camera - Góc nhìn từ trên cao xuống bao quát toàn rạp y hệt screenshot
    const camera = new THREE.PerspectiveCamera(
      48,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 5.8, 8.8);
    camera.lookAt(0, 1.2, -1.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Ánh sáng (Lights)
    const ambientLight = new THREE.AmbientLight(0x28302c, 1.2);
    scene.add(ambientLight);

    // Ánh sáng từ màn hình hắt xuống
    const screenLight = new THREE.PointLight(0xe2f8b5, 2.0, 15);
    screenLight.position.set(0, 2.5, -2.5);
    scene.add(screenLight);

    // Ánh sáng vàng ấm từ 2 bên tường
    const warmLightL = new THREE.PointLight(0xffdfa0, 1.5, 12);
    warmLightL.position.set(-5, 4, 2);
    scene.add(warmLightL);

    const warmLightR = new THREE.PointLight(0xffdfa0, 1.5, 12);
    warmLightR.position.set(5, 4, 2);
    scene.add(warmLightR);

    // Sàn rạp chiếu phim (Floor)
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x121415,
      roughness: 0.8,
      metalness: 0.2,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.5;
    floor.receiveShadow = true;
    scene.add(floor);

    // Tường sau màn hình (Front Wall)
    const wallGeo = new THREE.PlaneGeometry(30, 15);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x141618,
      roughness: 0.9,
    });
    const wallFront = new THREE.Mesh(wallGeo, wallMat);
    wallFront.position.set(0, 6, -5.5);
    scene.add(wallFront);

    // Tường trái & Tường phải với các dải đèn LED sọc đứng (Light Strips)
    const wallSideGeo = new THREE.PlaneGeometry(30, 15);
    const wallSideMat = new THREE.MeshStandardMaterial({
      color: 0x101213,
      roughness: 0.9,
    });

    const wallLeft = new THREE.Mesh(wallSideGeo, wallSideMat);
    wallLeft.rotation.y = Math.PI / 2;
    wallLeft.position.set(-7.5, 6, 2);
    scene.add(wallLeft);

    const wallRight = new THREE.Mesh(wallSideGeo, wallSideMat);
    wallRight.rotation.y = -Math.PI / 2;
    wallRight.position.set(7.5, 6, 2);
    scene.add(wallRight);

    // Tạo các dải đèn LED thanh sọc đứng màu vàng ấm ở 2 bên tường
    const stripGeo = new THREE.BoxGeometry(0.08, 3.2, 0.08);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xffdf88 });
    const lampGeo = new THREE.CylinderGeometry(0.12, 0.16, 0.25, 16);
    const lampMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });

    [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5].forEach((z, idx) => {
      // Bên trái
      const stripL = new THREE.Mesh(stripGeo, stripMat);
      stripL.position.set(-7.4, 2.8, z);
      stripL.rotation.z = 0.08;
      scene.add(stripL);

      const lampL = new THREE.Mesh(lampGeo, lampMat);
      lampL.position.set(-7.35, 4.4, z);
      scene.add(lampL);

      // Bên phải
      const stripR = new THREE.Mesh(stripGeo, stripMat);
      stripR.position.set(7.4, 2.8, z);
      stripR.rotation.z = -0.08;
      scene.add(stripR);

      const lampR = new THREE.Mesh(lampGeo, lampMat);
      lampR.position.set(7.35, 4.4, z);
      scene.add(lampR);
    });

    // Quả cầu disco (Disco Ball) trên trần
    const discoGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const discoMat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.95,
      roughness: 0.1,
    });
    const discoBall = new THREE.Mesh(discoGeo, discoMat);
    discoBall.position.set(0, 5.2, -1.8);
    scene.add(discoBall);

    // 2 Thùng loa cây đứng 2 bên màn hình (Sound Towers)
    const speakerGeo = new THREE.BoxGeometry(0.8, 3.2, 0.8);
    const speakerMat = new THREE.MeshStandardMaterial({ color: 0x181a1c, roughness: 0.7 });
    const coneGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.05, 16);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });

    [-4.6, 4.6].forEach((x) => {
      const spk = new THREE.Mesh(speakerGeo, speakerMat);
      spk.position.set(x, 1.6, -4.8);
      scene.add(spk);

      [0.8, 1.6, 2.4].forEach((y) => {
        const cone = new THREE.Mesh(coneGeo, coneMat);
        cone.rotation.x = Math.PI / 2;
        cone.position.set(x, y, -4.38);
        scene.add(cone);
      });
    });

    // Bục đỡ màn hình rạp chiếu
    const stageGeo = new THREE.BoxGeometry(10.5, 0.35, 1.6);
    const stageMat = new THREE.MeshStandardMaterial({ color: 0x1c1e20, roughness: 0.8 });
    const stage = new THREE.Mesh(stageGeo, stageMat);
    stage.position.set(0, -0.32, -4.6);
    scene.add(stage);

    // Khung màn hình 3D (Viền ngoài đen)
    const screenFrameGeo = new THREE.BoxGeometry(7.8, 4.4, 0.1);
    const screenFrameMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.5 });
    const screenFrame = new THREE.Mesh(screenFrameGeo, screenFrameMat);
    screenFrame.position.set(0, 2.4, -5.2);
    scene.add(screenFrame);

    // Mặt trong màn hình chiếu (Khi chưa có video thì phản xạ nhẹ)
    const innerScreenGeo = new THREE.PlaneGeometry(7.5, 4.1);
    const innerScreenMat = new THREE.MeshBasicMaterial({ color: 0x0b0d0e });
    const innerScreen = new THREE.Mesh(innerScreenGeo, innerScreenMat);
    innerScreen.position.set(0, 2.4, -5.14);
    scene.add(innerScreen);

    // Chữ nổi WETUBE CINÉ ở mép dưới màn hình
    // (Được render qua HTML overlay chính xác từng pixel)

    // Đèn rọi chân màn hình (Footlights)
    const footlightGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 12);
    const footlightMat = new THREE.MeshBasicMaterial({ color: 0xffdf88 });
    [-2.8, -1.8, -0.8, 0.8, 1.8, 2.8].forEach((x) => {
      const fl = new THREE.Mesh(footlightGeo, footlightMat);
      fl.position.set(x, -0.12, -3.8);
      scene.add(fl);
    });

    // Khởi tạo các hàng ghế rạp chiếu và nhân vật Chibi 3D
    const chairBackGeo = new THREE.BoxGeometry(0.38, 0.45, 0.08);
    const chairSeatGeo = new THREE.BoxGeometry(0.38, 0.08, 0.35);
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x222629, roughness: 0.8 });
    const vipChairMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5 }); // Đỏ nhung VIP

    const bodyGeo = new THREE.BoxGeometry(0.3, 0.35, 0.24);
    const headGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffdfc4, roughness: 0.6 });
    const hairGeo = new THREE.SphereGeometry(0.19, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1f1916, roughness: 0.9 });

    // Màu áo pastel ngẫu nhiên của các nhân vật khán giả trong rạp như screenshot
    const shirtColors = [
      0x93c5fd, // Xanh da trời
      0xfbcfe8, // Hồng phấn
      0xfef08a, // Vàng nhạt
      0xa7f3d0, // Xanh ngọc
      0xc4b5fd, // Tím oải hương
      0xfde047, // Vàng kem
      0xd8ef82, // Xanh olive
      0xfca5a5, // Cam đào
    ];

    // Tạo các bậc ghế rạp (7 hàng ghế dốc dần lên từ màn hình về phía camera)
    const rows = 7;
    const cols = 10;
    const seatObjects = [];

    for (let r = 0; r < rows; r++) {
      const z = -2.6 + r * 0.95;
      const y = -0.3 + r * 0.38;

      for (let c = 0; c < cols; c++) {
        // Tạo lối đi giữa (Chia 5 ghế bên trái - 5 ghế bên phải)
        let x = (c - (cols - 1) / 2) * 0.52;
        if (c >= 5) x += 0.35; // Lối đi ở giữa rạp

        const seatId = `${String.fromCharCode(65 + r)}${c + 1}`;
        const isVip = (r === 0 && (c === 4 || c === 5)); // 2 ghế VIP ở hàng đầu trung tâm

        // Ghế
        const back = new THREE.Mesh(chairBackGeo, isVip ? vipChairMat : chairMat);
        back.position.set(x, y + 0.3, z);
        scene.add(back);

        const seat = new THREE.Mesh(chairSeatGeo, isVip ? vipChairMat : chairMat);
        seat.position.set(x, y + 0.1, z + 0.14);
        scene.add(seat);

        // Vương miện hoàng gia trên đầu ghế VIP
        if (isVip) {
          const crownGeo = new THREE.CylinderGeometry(0.16, 0.12, 0.14, 6);
          const crownMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.8, roughness: 0.2 });
          const crown = new THREE.Mesh(crownGeo, crownMat);
          crown.position.set(x, y + 0.92, z);
          scene.add(crown);
        }

        // Tạo khán giả 3D ngồi trên ghế (Mô phỏng rạp đông vui như screenshot)
        // Ghế có người thật hoặc bot ngồi xem
        const isOccupied = (r * 10 + c) % 2 === 0 || r === 0 || r === 1 || r === 2;
        if (isOccupied) {
          const color = shirtColors[(r * cols + c) % shirtColors.length];
          const shirtMat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });

          const body = new THREE.Mesh(bodyGeo, shirtMat);
          body.position.set(x, y + 0.32, z + 0.12);
          scene.add(body);

          const head = new THREE.Mesh(headGeo, headMat);
          head.position.set(x, y + 0.62, z + 0.12);
          scene.add(head);

          const hair = new THREE.Mesh(hairGeo, hairMat);
          hair.rotation.x = -Math.PI / 2;
          hair.position.set(x, y + 0.64, z + 0.12);
          scene.add(hair);
        }
      }
    }

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Quả cầu disco xoay nhẹ
      discoBall.rotation.y += 0.005;

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

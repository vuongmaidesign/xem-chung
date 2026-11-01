import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Danh sách tên ngẫu nhiên cho các khán giả bot ngồi rạp như screenshot
const DEFAULT_NAMES = [
  'Truong son', 'MCK', 'Quang', 'Phu', 'habesocki',
  '12345', 'thich xac cuc', 'Hồng Sơn', 'Minh Vũ', 'Thu Thảo',
  'Đức Huy', 'Tuấn Anh', 'Bảo Ngọc', 'Hoàng Nam', 'Khánh Linh',
  'Phương Anh', 'Văn Hùng', 'Thanh Tùng', 'Kim Ngân', 'Thành Long',
];

export default function Cinema3DScene({
  seats = [],
  users = [],
  currentUserId,
  onSelectSeat,
  isStandingOnStage = false,
  myProfile,
}) {
  const mountRef = useRef(null);
  const stageCharactersRef = useRef([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e1012);
    scene.fog = new THREE.FogExp2(0x0e1012, 0.022);

    // Camera - Góc nhìn từ trên cao xuống bao quát toàn rạp y hệt screenshot
    const camera = new THREE.PerspectiveCamera(
      46,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 5.7, 8.6);
    camera.lookAt(0, 1.3, -1.6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Ánh sáng (Lights)
    const ambientLight = new THREE.AmbientLight(0x28302c, 1.3);
    scene.add(ambientLight);

    const screenLight = new THREE.PointLight(0xe2f8b5, 2.2, 16);
    screenLight.position.set(0, 2.8, -2.5);
    scene.add(screenLight);

    const warmLightL = new THREE.PointLight(0xffdfa0, 1.6, 14);
    warmLightL.position.set(-5.5, 4, 1.5);
    scene.add(warmLightL);

    const warmLightR = new THREE.PointLight(0xffdfa0, 1.6, 14);
    warmLightR.position.set(5.5, 4, 1.5);
    scene.add(warmLightR);

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
    floor.receiveShadow = true;
    scene.add(floor);

    // Tường trước (Front Wall)
    const wallFrontGeo = new THREE.PlaneGeometry(32, 16);
    const wallFrontMat = new THREE.MeshStandardMaterial({ color: 0x131517, roughness: 0.9 });
    const wallFront = new THREE.Mesh(wallFrontGeo, wallFrontMat);
    wallFront.position.set(0, 6, -5.5);
    scene.add(wallFront);

    // Tường trái & Tường phải
    const wallSideGeo = new THREE.PlaneGeometry(32, 16);
    const wallSideMat = new THREE.MeshStandardMaterial({ color: 0x101213, roughness: 0.9 });

    const wallLeft = new THREE.Mesh(wallSideGeo, wallSideMat);
    wallLeft.rotation.y = Math.PI / 2;
    wallLeft.position.set(-7.5, 6, 2);
    scene.add(wallLeft);

    const wallRight = new THREE.Mesh(wallSideGeo, wallSideMat);
    wallRight.rotation.y = -Math.PI / 2;
    wallRight.position.set(7.5, 6, 2);
    scene.add(wallRight);

    // Dải đèn LED sọc đứng 2 bên tường
    const stripGeo = new THREE.BoxGeometry(0.08, 3.2, 0.08);
    const stripMat = new THREE.MeshBasicMaterial({ color: 0xffdf88 });
    const lampGeo = new THREE.CylinderGeometry(0.12, 0.16, 0.25, 16);
    const lampMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 });

    [-6.5, -4.5, -2.5, -0.5, 1.5, 3.5].forEach((z) => {
      const stripL = new THREE.Mesh(stripGeo, stripMat);
      stripL.position.set(-7.4, 2.8, z);
      stripL.rotation.z = 0.08;
      scene.add(stripL);

      const lampL = new THREE.Mesh(lampGeo, lampMat);
      lampL.position.set(-7.35, 4.4, z);
      scene.add(lampL);

      const stripR = new THREE.Mesh(stripGeo, stripMat);
      stripR.position.set(7.4, 2.8, z);
      stripR.rotation.z = -0.08;
      scene.add(stripR);

      const lampR = new THREE.Mesh(lampGeo, lampMat);
      lampR.position.set(7.35, 4.4, z);
      scene.add(lampR);
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
    scene.add(discoBall);

    // 2 Thùng loa cây đứng 2 bên màn hình (Sound Towers)
    const speakerGeo = new THREE.BoxGeometry(0.85, 3.4, 0.85);
    const speakerMat = new THREE.MeshStandardMaterial({ color: 0x181a1c, roughness: 0.7 });
    const coneGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.05, 16);
    const coneMat = new THREE.MeshBasicMaterial({ color: 0x0a0a0a });

    [-4.7, 4.7].forEach((x) => {
      const spk = new THREE.Mesh(speakerGeo, speakerMat);
      spk.position.set(x, 1.7, -4.8);
      scene.add(spk);

      [0.85, 1.7, 2.55].forEach((y) => {
        const cone = new THREE.Mesh(coneGeo, coneMat);
        cone.rotation.x = Math.PI / 2;
        cone.position.set(x, y, -4.37);
        scene.add(cone);
      });
    });

    // Bục sân khấu (Stage) phía trước màn hình
    const stageGeo = new THREE.BoxGeometry(11.2, 0.38, 2.2);
    const stageMat = new THREE.MeshStandardMaterial({ color: 0x1a1c1e, roughness: 0.8 });
    const stage = new THREE.Mesh(stageGeo, stageMat);
    stage.position.set(0, -0.31, -4.3);
    scene.add(stage);

    // Dải đèn rọi chân bục sân khấu (Footlights)
    const footlightGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 12);
    const footlightMat = new THREE.MeshBasicMaterial({ color: 0xffdf88 });
    [-3.2, -2.0, -0.8, 0.8, 2.0, 3.2].forEach((x) => {
      const fl = new THREE.Mesh(footlightGeo, footlightMat);
      fl.position.set(x, -0.1, -3.2);
      scene.add(fl);
    });

    // Khung màn hình 3D (Bezel)
    const screenFrameGeo = new THREE.BoxGeometry(7.9, 4.45, 0.1);
    const screenFrameMat = new THREE.MeshStandardMaterial({ color: 0x060606, roughness: 0.5 });
    const screenFrame = new THREE.Mesh(screenFrameGeo, screenFrameMat);
    screenFrame.position.set(0, 2.45, -5.2);
    scene.add(screenFrame);

    // =================================================================
    // 2 NHÂN VẬT ĐỨNG TRÊN SÂN KHẤU (STAGE PERFORMERS Y HỆT SCREENSHOT)
    // =================================================================
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Tạo nhân vật đứng trên sân khấu với vòng tròn dưới chân
    const createStagePerformer = (x, z, shirtColor, ringColor) => {
      const group = new THREE.Group();
      group.position.set(x, -0.12, z);

      // Vòng tròn neon dưới chân (Ring Indicator)
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

    // Người 1 (bên trái bục - áo xám xanh, vòng tròn hồng)
    const performer1 = createStagePerformer(-0.65, -3.8, 0x93c5fd, 0xf43f5e);
    stageGroup.add(performer1);

    // Người 2 (bên phải bục - áo xanh rêu, vòng tròn hồng neon)
    const performer2 = createStagePerformer(0.65, -3.8, 0x86efac, 0xec4899);
    stageGroup.add(performer2);

    // =================================================================
    // CÁC HÀNG GHẾ RẠP CHIẾU 3D & THẺ TÊN (NAME TAGS) TRÊN LƯNG GHẾ
    // =================================================================
    const chairBackGeo = new THREE.BoxGeometry(0.38, 0.45, 0.08);
    const chairSeatGeo = new THREE.BoxGeometry(0.38, 0.08, 0.35);
    const chairMat = new THREE.MeshStandardMaterial({ color: 0x24282c, roughness: 0.8 });
    const vipChairMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.5 }); // Ghế VIP đỏ nhung

    const seatedBodyGeo = new THREE.BoxGeometry(0.3, 0.35, 0.24);
    const seatedHeadGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffdfc4, roughness: 0.6 });
    const hairGeo = new THREE.SphereGeometry(0.19, 16, 16, 0, Math.PI * 2, 0, Math.PI / 1.7);
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x1f1916, roughness: 0.9 });

    // Màu áo khán giả
    const shirtColors = [
      0x93c5fd, 0xfbcfe8, 0xfef08a, 0xa7f3d0,
      0xc4b5fd, 0xfde047, 0xd8ef82, 0xfca5a5,
    ];

    const rows = 7;
    const cols = 10;

    // Helper tạo texture Canvas chứa tên cho Thẻ Tên (Name Tag)
    const createNameTagTexture = (name) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');

      // Nền thẻ màu kem nhạt
      ctx.fillStyle = '#e2e8dc';
      ctx.beginPath();
      ctx.roundRect(4, 4, 248, 56, 12);
      ctx.fill();

      // Viền thẻ
      ctx.strokeStyle = '#a6b89e';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Chữ tên
      ctx.fillStyle = '#1e241c';
      ctx.font = 'bold 26px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(name.slice(0, 12), 128, 34);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const tagGeo = new THREE.PlaneGeometry(0.32, 0.08);

    for (let r = 0; r < rows; r++) {
      const z = -2.6 + r * 0.95;
      const y = -0.3 + r * 0.38;

      for (let c = 0; c < cols; c++) {
        let x = (c - (cols - 1) / 2) * 0.52;
        if (c >= 5) x += 0.35; // Lối đi rạp ở giữa

        const seatIndex = r * cols + c;
        const isVip = (r === 0 && (c === 4 || c === 5));

        // Ghế
        const back = new THREE.Mesh(chairBackGeo, isVip ? vipChairMat : chairMat);
        back.position.set(x, y + 0.3, z);
        scene.add(back);

        const seat = new THREE.Mesh(chairSeatGeo, isVip ? vipChairMat : chairMat);
        seat.position.set(x, y + 0.1, z + 0.14);
        scene.add(seat);

        // Vương miện hoàng gia trên ghế VIP
        if (isVip) {
          const crownGeo = new THREE.CylinderGeometry(0.16, 0.12, 0.14, 6);
          const crownMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.85, roughness: 0.2 });
          const crown = new THREE.Mesh(crownGeo, crownMat);
          crown.position.set(x, y + 0.92, z);
          scene.add(crown);
        }

        // Khán giả ngồi trên ghế
        const isOccupied = seatIndex % 2 === 0 || r === 0 || r === 1 || r === 2;
        if (isOccupied) {
          const color = shirtColors[seatIndex % shirtColors.length];
          const shirtMat = new THREE.MeshStandardMaterial({ color, roughness: 0.7 });

          const body = new THREE.Mesh(seatedBodyGeo, shirtMat);
          body.position.set(x, y + 0.32, z + 0.12);
          scene.add(body);

          const head = new THREE.Mesh(seatedHeadGeo, headMat);
          head.position.set(x, y + 0.62, z + 0.12);
          scene.add(head);

          const hair = new THREE.Mesh(hairGeo, hairMat);
          hair.rotation.x = -Math.PI / 2;
          hair.position.set(x, y + 0.64, z + 0.12);
          scene.add(hair);

          // THẺ TÊN (NAME TAG) GẮN TRÊN LƯNG GHẾ Y CHANG SCREENSHOT
          const personName = DEFAULT_NAMES[seatIndex % DEFAULT_NAMES.length];
          const tagMat = new THREE.MeshBasicMaterial({
            map: createNameTagTexture(personName),
            transparent: true,
          });
          const tag = new THREE.Mesh(tagGeo, tagMat);
          tag.position.set(x, y + 0.28, z + 0.05); // Gắn sau lưng ghế
          scene.add(tag);
        }
      }
    }

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Quả cầu disco xoay
      discoBall.rotation.y += 0.005;

      // 2 Người đứng trên sân khấu đung đưa nhẹ như đang chill theo nhạc
      performer1.position.y = -0.12 + Math.sin(elapsed * 2) * 0.015;
      performer2.position.y = -0.12 + Math.cos(elapsed * 2.2) * 0.015;

      renderer.render(scene, camera);
    };
    animate();

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
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

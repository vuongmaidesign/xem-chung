# 🍿 CinéParty - Rạp Chiếu Phim & Nghe Nhạc Ảo (Watch Together)

Ứng dụng xem video YouTube và nghe nhạc cùng nhau thời gian thực với trải nghiệm **Rạp chiếu phim ảo (Virtual Cinema)** lấy cảm hứng từ Wetube Ciné (`choigivui.com`).

![CinéParty Banner](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop)

---

## ✨ Tính Năng Nổi Bật

- 🎬 **Màn hình rạp chiếu cong 2.5D**: Mô phỏng hiệu ứng ánh sáng đèn chiếu rạp phim với YouTube Player chính thức.
- 💺 **Sơ đồ ghế ngồi tương tác**: 
  - Mọi người vào phòng được tự do click chọn ghế ngồi bất kỳ (Hàng A, B, C, D).
  - Ghế phát sáng màu riêng biệt, hiển thị Avatar và Biệt danh của từng người.
  - Hỗ trợ đổi ghế hoặc đứng dậy bất cứ lúc nào.
- ⚡ **Đồng bộ thời gian thực (Realtime Sync & Time Drift Correction)**:
  - Play, Pause, Seek (tua) đồng bộ tức thì cho tất cả khán giả trong rạp qua Socket.io.
  - Cơ chế tự động sửa lệch thời gian (Drift check mỗi 4 giây) giúp không ai bị trễ nhịp so với phòng.
- 💬 **Bong bóng Chat trên đầu ghế & Live Reactions**:
  - Khi ai đó nhắn tin, bong bóng trò chuyện (*Speech Bubble*) sẽ nổi trực tiếp trên đầu chiếc ghế người đó đang ngồi.
  - Nút thả reaction nhanh (❤️, 😂, 🍿, 🔥, 👏, 🚀, 🎵) bay vọt lên màn hình rạp chiếu.
- 📋 **Hàng đợi phát nhạc (Queue) & Bỏ phiếu qua bài (Vote Skip)**:
  - Dán bất kỳ link YouTube, Video ngắn hoặc Shorts nào vào để xếp hàng hoặc bấm phát ngay.
  - Bỏ phiếu qua bài khi có trên 50% khán giả tán thành.
- 🚪 **Tạo phòng riêng cho hội bạn**:
  - Chỉ cần đổi đường dẫn `http://localhost:4000/?room=chill-dem-muon` hoặc bấm nút **"Mời bạn"** để copy link gửi cho nhóm bạn bè.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 18, Vite, TailwindCSS, Lucide Icons, Canvas-Confetti, YouTube IFrame API.
- **Backend**: Node.js, Express, Socket.io, Axios (oEmbed YouTube Metadata).

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Trên Máy (Local)

### 1. Yêu cầu môi trường
- Đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 18+ trở lên).

### 2. Cách chạy nhanh nhất (1 Click)
- Nhấp đúp chuột vào file **`start.bat`** trong thư mục dự án.
- Mở trình duyệt và truy cập: **`http://localhost:4000`**

### 3. Cách chạy bằng dòng lệnh (Terminal)

```bash
# Chạy toàn bộ ứng dụng (chế độ Production có sẵn giao diện):
npm start

# Hoặc nếu muốn vừa code vừa Live Reload (Chế độ Development):
# Terminal 1: Chạy backend
npm run dev:server

# Terminal 2: Chạy frontend
npm run dev:client
```

---

## 📤 Hướng Dẫn Đẩy Lên GitHub

Mở Command Prompt hoặc PowerShell tại thư mục dự án:

```bash
git init
git add .
git commit -m "feat: initial CinéParty virtual cinema"
git branch -M main
git remote add origin https://github.com/<tai-khoan-cua-ban>/cineparty.git
git push -u origin main
```

---

## ☁️ Hướng Dẫn Deploy Lên Internet Miễn Phí (Để Bạn Bè Vào Cùng)

### Cách đơn giản nhất: Deploy lên **Render.com** (Miễn phí)
1. Đăng ký tài khoản tại [Render.com](https://render.com).
2. Chọn **New Web Service** -> Kết nối với Repo GitHub bạn vừa tạo.
3. Cấu hình:
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
4. Bấm **Deploy**. Sau 2 phút, bạn sẽ có một đường link public (ví dụ: `https://cineparty.onrender.com`) để gửi cho anh em vào quẩy chung!

---

## 📄 Bản Quyền
Dự án được phân phối dưới giấy phép [MIT License](LICENSE).
Tự do sử dụng, chỉnh sửa và chia sẻ!

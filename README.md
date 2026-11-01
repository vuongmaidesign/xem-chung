# 🍿 CinéParty - Rạp Chiếu Phim & Nghe Nhạc Ảo (Watch Together)

Ứng dụng xem video YouTube và nghe nhạc cùng nhau thời gian thực với trải nghiệm **Rạp chiếu phim ảo 3D (Virtual Cinema 3D)** lấy cảm hứng từ Wetube Ciné (`choigivui.com`).

🌐 **Link truy cập trực tiếp trên Web (GitHub Pages)**:  
👉 **[https://vuongmaidesign.github.io/xem-chung/](https://vuongmaidesign.github.io/xem-chung/)**

---

## ✨ Tính Năng Nổi Bật

- 🎬 **Rạp chiếu phim 3D hoàn chỉnh (Three.js WebGL)**: Màn hình chiếu trung tâm, đèn sọc LED tường, loa cây sound tower, quả cầu disco xoay trên trần.
- 🧍 **Khán giả 3D & Thẻ tên (Name Tags)**: Các hàng ghế bậc thang dốc xuống với khán giả 3D nhiều màu áo, gắn thẻ tên biệt danh sau lưng từng ghế.
- 🎤 **Lên bục sân khấu (Stage Performers)**: Bước lên bục biểu diễn trước màn hình với vòng tròn neon phát sáng dưới chân.
- 💬 **Bong bóng thoại 3D (Speech Bubbles)**: Chat trực tiếp nổi bong bóng thoại trên đầu nhân vật trong rạp.
- 📋 **Hàng chờ & Gửi video**: Gửi video YouTube không giới hạn, bình chọn thứ tự chiếu.
- ⚡ **Vote Skip 35%**: Cơ chế bình chọn bỏ qua video khi đủ 35% khán giả tán thành.
- 🔄 **Lặp full bài (Full Replay)**: Khi hết bài và hàng chờ trống, tự động phát lại từ đầu trọn vẹn.

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

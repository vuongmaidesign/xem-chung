import React, { useState } from 'react';
import {
  X,
  Plus,
  Play,
  RotateCcw,
  Sparkles,
  DoorOpen,
  Heart,
  Image as ImageIcon,
  Check,
  Search,
  ListOrdered,
  Users,
} from 'lucide-react';

// ==========================================
// 1. MODAL GỬI VIDEO (SEND VIDEO MODAL)
// ==========================================
export function SendVideoModal({ isOpen, onClose, onAddVideo }) {
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:4000/api/video-info?url=${encodeURIComponent(url.trim())}`);
      const data = await res.json();
      if (data && !data.error) {
        setPreview(data);
      } else {
        alert(data.error || 'Link YouTube không hợp lệ!');
      }
    } catch (err) {
      alert('Không thể kết nối máy chủ!');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = (playNow = false) => {
    if (!url.trim()) return;
    onAddVideo(url.trim(), playNow);
    setUrl('');
    setPreview(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-md p-6 flex flex-col gap-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">
              Mang gu của bạn lên màn ảnh.
            </h3>
            <p className="text-xs text-[#8e9c80] mt-1">
              Gửi video YouTube không giới hạn thời lượng, rồi để cả rạp bình chọn thứ tự chiếu.
            </p>
          </div>
          <button onClick={onClose} className="p-1 text-[#8e9c80] hover:text-white rounded">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleCheck} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono tracking-wider uppercase text-[#a2b18c]">
              Đường dẫn YouTube
            </label>
            <div className="flex items-center gap-2 bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 focus-within:border-[#d8ef82]">
              <input
                type="url"
                required
                autoFocus
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setPreview(null);
                }}
                placeholder="https://www.youtube.com/watch?v=…"
                className="flex-1 bg-transparent text-xs text-white placeholder-[#8e9c80]/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading || !url.trim()}
                className="px-2.5 py-1 rounded-lg bg-[#d8ef82]/20 hover:bg-[#d8ef82] text-[#d8ef82] hover:text-[#090e0b] text-[11px] font-bold transition-all disabled:opacity-40"
              >
                {loading ? 'Đang đọc...' : 'Kiểm tra'}
              </button>
            </div>
          </div>

          {/* Video Preview nếu kiểm tra thành công */}
          {preview && (
            <div className="p-3 rounded-xl bg-[#141815] border border-[#d8ef82]/30 flex items-center gap-3">
              <img
                src={preview.thumbnail}
                alt=""
                className="w-16 h-10 object-cover rounded bg-black shrink-0"
              />
              <div className="truncate">
                <p className="text-xs font-bold text-white truncate">{preview.title}</p>
                <p className="text-[10px] text-[#8e9c80]">Tác giả: {preview.author}</p>
              </div>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={() => handleConfirm(false)}
              disabled={!url.trim()}
              className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#d6e5c6]/20 text-xs font-bold text-[#cad6bb] transition-all disabled:opacity-40"
            >
              + Gửi vào hàng chờ
            </button>
            <button
              type="button"
              onClick={() => handleConfirm(true)}
              disabled={!url.trim()}
              className="flex-1 py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40"
            >
              Phát ngay bây giờ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// 2. MODAL TỦ ĐỒ (WARDROBE MODAL)
// ==========================================
export function WardrobeModal({ isOpen, onClose, currentProfile, onSaveProfile }) {
  const [shirtColor, setShirtColor] = useState(currentProfile?.shirtColor || '#93c5fd');
  const [gender, setGender] = useState(currentProfile?.gender || 'male');
  const [nickname, setNickname] = useState(currentProfile?.nickname || 'Khán giả');

  if (!isOpen) return null;

  const SHIRTS = [
    { name: 'Xanh nhạt', color: '#93c5fd' },
    { name: 'Hồng phấn', color: '#fbcfe8' },
    { name: 'Vàng kem', color: '#fef08a' },
    { name: 'Xanh ngọc', color: '#a7f3d0' },
    { name: 'Tím lavender', color: '#c4b5fd' },
    { name: 'Olive neon', color: '#d8ef82' },
    { name: 'Cam đào', color: '#fca5a5' },
    { name: 'VIP Hoàng Gia', color: '#991b1b' },
  ];

  const handleSave = () => {
    onSaveProfile({
      nickname: nickname.trim().slice(0, 15) || 'Khán giả',
      color: shirtColor,
      gender,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-sm p-6 flex flex-col gap-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">
              Một chút cá tính cho hàng ghế.
            </h3>
            <p className="text-xs text-[#8e9c80] mt-1">
              Chọn áo và khung chat riêng. Mỗi bậc mở cả bộ, và giữ luôn các bậc thấp hơn.
            </p>
          </div>
          <button onClick={onClose} className="p-1 text-[#8e9c80] hover:text-white rounded">
            <X size={18} />
          </button>
        </div>

        {/* Khung chat mẫu xem trước */}
        <div className="p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3">
          <div className="bg-[#e8ede4] text-[#1c221a] px-3.5 py-1.5 rounded-2xl text-xs font-semibold shadow-md flex items-center gap-1.5">
            <span>Phim này hay quá, cả rạp ơi!</span>
            <Sparkles size={12} className="text-amber-500" />
          </div>

          {/* Nhân vật chibi xem trước */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#ffdfc4] border-2 border-[#1f1916] relative">
              <div className="absolute inset-x-0 top-0 h-4 bg-[#1f1916] rounded-t-full" />
            </div>
            <div
              style={{ backgroundColor: shirtColor }}
              className="w-10 h-7 rounded-md mt-0.5 border border-black/30 shadow-sm flex items-center justify-center text-[9px] font-bold text-black"
            >
              {nickname.slice(0, 4)}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-mono uppercase text-[#8e9c80] block mb-1">
              Tên / Biệt danh hiển thị:
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={15}
              className="w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"
            />
          </div>

          <div>
            <label className="text-[10px] font-mono uppercase text-[#8e9c80] block mb-1.5">
              Chọn màu áo của bạn:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {SHIRTS.map((item) => (
                <button
                  key={item.color}
                  onClick={() => setShirtColor(item.color)}
                  style={{ backgroundColor: item.color }}
                  className={`py-2 rounded-xl text-[10px] font-bold text-gray-900 border transition-all ${
                    shirtColor === item.color
                      ? 'border-white scale-105 shadow-md ring-2 ring-white/50'
                      : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all"
        >
          Lưu cá tính & Ra rạp xem phim
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 3. MODAL PHÒNG RIÊNG (PRIVATE ROOMS MODAL)
// ==========================================
export function PrivateRoomsModal({ isOpen, onClose, onJoinRoom }) {
  const [tab, setTab] = useState('create');
  const [roomName, setRoomName] = useState('');

  if (!isOpen) return null;

  const handleCreate = (e) => {
    e.preventDefault();
    if (!roomName.trim()) return;
    const cleanId = roomName.trim().toLowerCase().replace(/\s+/g, '-');
    window.location.search = `?room=${cleanId}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Phòng riêng</h3>
            <p className="text-xs text-[#8e9c80] mt-1">
              Một góc rạp dành cho hội bạn. Tạo phòng riêng và chia sẻ liên kết cùng xem.
            </p>
          </div>
          <button onClick={onClose} className="p-1 text-[#8e9c80] hover:text-white rounded">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleCreate} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono uppercase text-[#8e9c80]">
              Đặt tên mã phòng của bạn:
            </label>
            <input
              type="text"
              required
              autoFocus
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="VD: chill-dem-muon, nhom-ban-than..."
              className="w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d8ef82]"
            />
          </div>

          <button
            type="submit"
            disabled={!roomName.trim()}
            className="w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40"
          >
            Vào phòng riêng ngay 🚪
          </button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// 4. MODAL CHIẾU ẢNH (POST PHOTO MODAL)
// ==========================================
export function PostPhotoModal({ isOpen, onClose }) {
  const [photoUrl, setPhotoUrl] = useState('');
  const [caption, setCaption] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Đã gửi yêu cầu chiếu ảnh lên màn hình rạp!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">Chiếu ảnh lên rạp</h3>
            <p className="text-xs text-[#8e9c80] mt-1">
              Gửi một bức ảnh đáng yêu kèm lời nhắn gửi tới cả phòng xem chung.
            </p>
          </div>
          <button onClick={onClose} className="p-1 text-[#8e9c80] hover:text-white rounded">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-[10px] font-mono uppercase text-[#8e9c80] block mb-1">
              Link hình ảnh:
            </label>
            <input
              type="url"
              required
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://... ảnh định dạng .jpg, .png"
              className="w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"
            />
          </div>

          <div>
            <label className="text-[10px] font-mono uppercase text-[#8e9c80] block mb-1">
              Lời nhắn gửi cả rạp:
            </label>
            <textarea
              rows={2}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="VD: Chúc cả rạp xem phim vui vẻ nhé!"
              className="w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-[#d8ef82]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all"
          >
            Chiếu ảnh ngay 🖼️
          </button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// 5. MODAL ỦNG HỘ (SUPPORT MODAL)
// ==========================================
export function SupportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-sm p-6 flex flex-col gap-4 shadow-2xl text-center">
        <div className="flex items-center justify-between text-left">
          <div>
            <h3 className="text-base font-bold text-white tracking-wide">
              Ủng hộ, thêm niềm vui cho cả rạp.
            </h3>
            <p className="text-xs text-[#8e9c80] mt-1">
              Sự ủng hộ của bạn giúp duy trì máy chủ rạp phim hoạt động 24/7 mượt mà.
            </p>
          </div>
          <button onClick={onClose} className="p-1 text-[#8e9c80] hover:text-white rounded">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 rounded-xl bg-[#141815] border border-[#d6e5c6]/15 flex flex-col items-center gap-3">
          <div className="w-36 h-36 bg-white p-2 rounded-xl flex items-center justify-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CinePartySupport"
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-xs font-bold text-[#d8ef82]">Quét mã QR để ủng hộ rạp phim</p>
          <span className="text-[10px] text-[#8e9c80]">Mỗi đóng góp dù nhỏ cũng là động lực lớn cho dự án!</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#cad6bb] text-xs font-bold uppercase transition-all"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

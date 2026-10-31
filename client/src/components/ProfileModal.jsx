import React, { useState } from 'react';
import { Sparkles, Check, X } from 'lucide-react';

const AVATARS = ['🍿', '🐱', '🦊', '🎧', '⚡', '🚀', '🐼', '🎮', '🕶️', '🍦', '🎸', '☕', '🐸', '🦄'];
const COLORS = [
  '#d8ef82', // Olive neon chuẩn choigivui
  '#f8d484', // Vàng ấm
  '#f49ac2', // Hồng pastel
  '#a99dff', // Tím mộng mơ
  '#85d6e0', // Cyan ngọc
  '#ff6b6b', // Đỏ cam
  '#51cf66', // Xanh lá
];

export default function ProfileModal({
  isOpen,
  initialProfile,
  onSave,
  onClose,
}) {
  const [nickname, setNickname] = useState(initialProfile?.nickname || '');
  const [avatar, setAvatar] = useState(initialProfile?.avatar || '🍿');
  const [color, setColor] = useState(initialProfile?.color || '#d8ef82');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    onSave({
      nickname: nickname.trim().slice(0, 16),
      avatar,
      color,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-sm p-6 flex flex-col gap-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#d8ef82]/15 text-[#d8ef82]">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Cá tính hàng ghế
              </h3>
              <p className="text-[10px] text-[#9da98d]">Chọn áo và biểu tượng của bạn</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-[#9da98d] hover:text-white rounded hover:bg-white/10"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nhập nickname */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]">
              Biệt danh hiển thị:
            </label>
            <input
              type="text"
              required
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="VD: Tuấn Chill, Minh Popcorn..."
              maxLength={16}
              className="w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d8ef82]"
            />
          </div>

          {/* Chọn Avatar */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]">
              Chọn Biểu tượng:
            </label>
            <div className="grid grid-cols-7 gap-1 p-2 bg-[#141815] rounded-xl border border-[#d6e5c6]/10">
              {AVATARS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAvatar(item)}
                  className={`text-lg p-1.5 rounded-lg transition-all ${
                    avatar === item
                      ? 'bg-[#d8ef82]/25 scale-110 border border-[#d8ef82]'
                      : 'hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Chọn Màu ghế */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]">
              Màu phát sáng của ghế:
            </label>
            <div className="flex items-center justify-between p-2 bg-[#141815] rounded-xl border border-[#d6e5c6]/10">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  style={{ backgroundColor: c }}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                    color === c ? 'scale-125 ring-2 ring-white shadow-lg' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {color === c && <Check size={12} className="text-[#090e0b] stroke-[3]" />}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!nickname.trim()}
            className="w-full py-2.5 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-[#090e0b] font-bold text-xs uppercase tracking-wider shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40"
          >
            Lưu & Vào Rạp Chiếu 🍿
          </button>
        </form>
      </div>
    </div>
  );
}

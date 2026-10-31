import React, { useState } from 'react';
import { User, Sparkles, Check } from 'lucide-react';

const AVATARS = ['🍿', '🐱', '🦊', '🎧', '⚡', '🚀', '🐼', '🎮', '🕶️', '🍦', '🎸', '☕', '🐸', '🦄'];
const COLORS = [
  '#f43f5e', // rose
  '#ec4899', // pink
  '#a855f7', // purple
  '#6366f1', // indigo
  '#3b82f6', // blue
  '#06b6d4', // cyan
  '#10b981', // emerald
  '#f59e0b', // amber
];

export default function ProfileModal({
  isOpen,
  initialProfile,
  onSave,
}) {
  const [nickname, setNickname] = useState(initialProfile?.nickname || '');
  const [avatar, setAvatar] = useState(initialProfile?.avatar || '🍿');
  const [color, setColor] = useState(initialProfile?.color || '#f43f5e');

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-pop-in">
      <div className="relative w-full max-w-sm bg-[#13151f] border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col gap-5">
        <div className="text-center space-y-1">
          <div className="inline-flex p-3 rounded-2xl bg-rose-500/10 text-rose-400 mb-1 border border-rose-500/20">
            <Sparkles size={24} />
          </div>
          <h3 className="text-lg font-bold text-white">Tham gia rạp chiếu phim</h3>
          <p className="text-xs text-gray-400">Tạo tên & biểu tượng để anh em cùng nhận ra nhé!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nhập nickname */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Biệt danh của bạn:</label>
            <input
              type="text"
              required
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="VD: Tuấn Chill, Minh Popcorn..."
              maxLength={16}
              className="w-full bg-[#1b1e2c] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-rose-500"
            />
          </div>

          {/* Chọn Avatar */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300">Chọn Avatar:</label>
            <div className="grid grid-cols-7 gap-1.5 p-2 bg-[#171926] rounded-2xl border border-white/5">
              {AVATARS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAvatar(item)}
                  className={`text-xl p-1.5 rounded-xl transition-all ${
                    avatar === item
                      ? 'bg-rose-500/30 scale-110 shadow-sm border border-rose-500/50'
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
            <label className="text-xs font-semibold text-gray-300">Màu phát sáng của ghế:</label>
            <div className="flex items-center justify-between p-2 bg-[#171926] rounded-2xl border border-white/5">
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
                  {color === c && <Check size={12} className="text-white drop-shadow" />}
                </button>
              ))}
            </div>
          </div>

          {/* Nút lưu */}
          <button
            type="submit"
            disabled={!nickname.trim()}
            className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-lg shadow-rose-600/30 transition-all disabled:opacity-50 transform active:scale-95"
          >
            Vào rạp thưởng thức ngay 🍿
          </button>
        </form>
      </div>
    </div>
  );
}

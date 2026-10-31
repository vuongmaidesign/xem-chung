import React, { useState } from 'react';
import { ListMusic, Plus, Play, Trash2, X, Flame, Check, RotateCcw } from 'lucide-react';

const SUGGESTED_VIDEOS = [
  {
    title: 'lofi hip hop radio - beats to relax/study to',
    url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
    tag: 'Chill Lofi',
  },
  {
    title: 'Cà Phê Quán Quen - Indie Việt Nhẹ Nhàng',
    url: 'https://www.youtube.com/watch?v=34Na4j8AVgA',
    tag: 'Acoustic',
  },
  {
    title: 'Synthwave Radio - Chill synth / Retro beats',
    url: 'https://www.youtube.com/watch?v=4xDzrJKXOOY',
    tag: 'Synthwave',
  },
];

export default function QueueModal({
  isOpen,
  onClose,
  queue = [],
  currentVideo,
  onAddVideo,
  onRemoveFromQueue,
  onVoteSkip,
  skipVotesCount = 0,
  requiredVotes = 1,
  totalUsers = 1,
  hasVoted = false,
}) {
  const [inputUrl, setInputUrl] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleAdd = (playNow = false) => {
    if (!inputUrl.trim()) return;
    setLoading(true);
    onAddVideo(inputUrl.trim(), playNow);
    setInputUrl('');
    setLoading(false);
  };

  const handleQuickAdd = (url, playNow = false) => {
    onAddVideo(url, playNow);
  };

  const percent = totalUsers > 0 ? Math.round((skipVotesCount / totalUsers) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop-in select-none">
      <div className="room-drawer relative w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <ListMusic className="text-[#d8ef82]" size={18} />
            <h3 className="font-bold text-sm tracking-wider uppercase text-[#cad6bb]">
              Hàng chờ video & Danh sách phát
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#9da98d] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-5">
          {/* Form Thêm Link YouTube */}
          <div className="space-y-2">
            <label className="text-[11px] font-bold tracking-wider uppercase text-[#a2b18c]">
              Thêm link YouTube (Video / Nhạc / Shorts):
            </label>
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full bg-[#151a17] border border-[#d6e5c6]/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-[#9da98d]/60 focus:outline-none focus:border-[#d8ef82]"
            />

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => handleAdd(false)}
                disabled={!inputUrl.trim() || loading}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-[#cad6bb] border border-[#d6e5c6]/15 transition-all disabled:opacity-40"
              >
                <Plus size={14} /> Thêm vào hàng chờ
              </button>
              <button
                onClick={() => handleAdd(true)}
                disabled={!inputUrl.trim() || loading}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#d8ef82] hover:bg-[#e1f8b1] text-xs font-bold text-[#090e0b] shadow-md shadow-[#d8ef82]/20 transition-all disabled:opacity-40"
              >
                <Play size={14} fill="currentColor" /> Phát ngay lập tức
              </button>
            </div>
          </div>

          {/* Bình chọn bỏ qua video (Vote Skip) chuẩn phong cách choigivui.com */}
          {currentVideo && (
            <div className="p-3.5 rounded-xl bg-[#151c17] border border-[#d6e5c6]/15 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono tracking-wider text-[#d8ef82] uppercase font-bold block">
                    ĐANG CHIẾU TRÊN MÀN HÌNH
                  </span>
                  <p className="text-xs font-semibold text-white truncate max-w-xs">{currentVideo.title}</p>
                </div>
                <button
                  onClick={onVoteSkip}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                    hasVoted
                      ? 'bg-[#d8ef82] text-[#090e0b] border-[#d8ef82]'
                      : 'bg-white/5 hover:bg-[#d8ef82]/20 text-[#cad6bb] hover:text-[#d8ef82] border-[#d6e5c6]/20'
                  }`}
                >
                  {hasVoted ? <Check size={13} /> : <RotateCcw size={13} />}
                  <span>{hasVoted ? 'Rút phiếu skip' : 'Vote bỏ qua'}</span>
                  <b className="font-mono">{skipVotesCount}/{requiredVotes}</b>
                </button>
              </div>

              {/* Progress bar vote skip chuẩn 35% */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[#9da98d]">
                  <span>{skipVotesCount}/{totalUsers} khán giả đồng ý ({percent}%)</span>
                  <span>Đủ 35% thì chuyển bài</span>
                </div>
                <div className="w-full h-1.5 bg-[#232b25] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#d8ef82] transition-all duration-300"
                    style={{ width: `${Math.min(100, (skipVotesCount / requiredVotes) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Gợi ý bài hát nhanh */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#a2b18c] flex items-center gap-1">
              <Flame size={12} className="text-[#d8ef82]" /> Gợi ý bài hát chill:
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {SUGGESTED_VIDEOS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-xl bg-[#141815] hover:bg-[#18201a] border border-[#d6e5c6]/10 text-xs"
                >
                  <div className="truncate pr-2">
                    <span className="font-medium text-[#cad6bb] block truncate">{item.title}</span>
                    <span className="text-[9px] text-[#d8ef82] font-semibold">{item.tag}</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleQuickAdd(item.url, false)}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] text-[#cad6bb]"
                    >
                      + Hàng chờ
                    </button>
                    <button
                      onClick={() => handleQuickAdd(item.url, true)}
                      className="px-2 py-0.5 rounded bg-[#d8ef82]/15 hover:bg-[#d8ef82] hover:text-[#090e0b] text-[#d8ef82] text-[10px] font-semibold"
                    >
                      Phát ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danh sách Hàng chờ */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-wider uppercase text-[#a2b18c]">
              Bài hát tiếp theo ({queue.length})
            </span>

            {queue.length === 0 ? (
              <div className="p-5 text-center text-xs text-[#9da98d] bg-[#141815] rounded-xl border border-dashed border-[#d6e5c6]/15">
                Hàng chờ đang trống. Khi hết bài, rạp sẽ tự động lặp lại video hiện tại từ đầu!
              </div>
            ) : (
              <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
                {queue.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl bg-[#141815] border border-[#d6e5c6]/10 text-xs group"
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[#9da98d] text-[10px] w-3">#{idx + 1}</span>
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-9 h-6 object-cover rounded bg-black shrink-0"
                      />
                      <div className="truncate">
                        <p className="font-medium text-[#cad6bb] truncate">{item.title}</p>
                        <p className="text-[9px] text-[#9da98d]">Bởi: {item.addedBy}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromQueue(idx)}
                      className="p-1 text-[#9da98d] hover:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

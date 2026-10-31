import React, { useState } from 'react';
import { ListMusic, Plus, Play, Trash2, X, Music, Check, Flame } from 'lucide-react';

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
  totalUsers = 1,
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

  const neededVotes = Math.ceil(totalUsers / 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-pop-in">
      <div className="relative w-full max-w-lg bg-[#141620] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header Modal */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <ListMusic className="text-rose-400" size={20} />
            <h3 className="font-bold text-base text-white">Danh sách phát & Thêm bài</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {/* Input Thêm Link YouTube */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-300">
              Dán link YouTube (Video, Nhạc, Shorts):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                className="flex-1 bg-[#1a1d2b] border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => handleAdd(false)}
                disabled={!inputUrl.trim() || loading}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all disabled:opacity-40"
              >
                <Plus size={15} /> Thêm vào hàng đợi
              </button>
              <button
                onClick={() => handleAdd(true)}
                disabled={!inputUrl.trim() || loading}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white shadow-lg shadow-rose-600/30 transition-all disabled:opacity-40"
              >
                <Play size={15} fill="currentColor" /> Phát ngay lập tức
              </button>
            </div>
          </div>

          {/* Gợi ý bài hát nhanh */}
          <div className="space-y-2">
            <span className="text-[11px] font-semibold text-gray-400 flex items-center gap-1">
              <Flame size={12} className="text-amber-400" /> Gợi ý nhanh cho bạn:
            </span>
            <div className="grid grid-cols-1 gap-1.5">
              {SUGGESTED_VIDEOS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-[#191c28] hover:bg-[#202434] border border-white/5 transition-all text-xs"
                >
                  <div className="truncate pr-2">
                    <span className="font-medium text-gray-200 block truncate">{item.title}</span>
                    <span className="text-[10px] text-rose-400 font-semibold">{item.tag}</span>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => handleQuickAdd(item.url, false)}
                      className="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-[11px] text-gray-300"
                    >
                      + Hàng đợi
                    </button>
                    <button
                      onClick={() => handleQuickAdd(item.url, true)}
                      className="px-2 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500 hover:text-white text-rose-300 text-[11px] font-medium"
                    >
                      Phát ngay
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Đang phát hiện tại & Vote Skip */}
          {currentVideo && (
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-950/30 to-purple-950/20 border border-rose-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-rose-400 font-bold">
                  Đang phát hiện tại
                </span>
                <button
                  onClick={onVoteSkip}
                  className="flex items-center gap-1 text-[11px] bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white px-2.5 py-1 rounded-lg transition-all"
                >
                  Bỏ phiếu qua bài ({skipVotesCount}/{neededVotes})
                </button>
              </div>
              <p className="text-xs font-semibold text-white truncate">{currentVideo.title}</p>
              <p className="text-[10px] text-gray-400">Thêm bởi: {currentVideo.addedBy || 'Hệ thống'}</p>
            </div>
          )}

          {/* Hàng đợi (Queue) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-300">
                Bài hát đang chờ ({queue.length})
              </span>
            </div>

            {queue.length === 0 ? (
              <div className="p-6 text-center text-xs text-gray-500 bg-[#161822] rounded-2xl border border-dashed border-white/10">
                Hàng đợi đang trống. Hãy thêm một vài bài hát hoặc video YouTube vào nhé!
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {queue.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#191c28] border border-white/5 text-xs group"
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="font-mono text-gray-500 text-[11px] w-4">{idx + 1}</span>
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="w-10 h-7 object-cover rounded-md shrink-0 bg-black"
                      />
                      <div className="truncate">
                        <p className="font-medium text-gray-200 truncate">{item.title}</p>
                        <p className="text-[10px] text-gray-400">Bởi: {item.addedBy}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveFromQueue(idx)}
                      className="p-1.5 text-gray-500 hover:text-rose-400 opacity-60 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={14} />
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

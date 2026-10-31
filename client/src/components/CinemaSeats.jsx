import React from 'react';
import { Armchair, LogOut, UserCheck, Sparkles } from 'lucide-react';

export default function CinemaSeats({
  seats = [],
  users = [],
  currentUserId,
  onSelectSeat,
  onLeaveSeat,
  recentBubbles = {},
  activeReactions = [],
}) {
  const getUserById = (userId) => users.find((u) => u.id === userId);

  // 10 hàng ghế từ A đến J (chuẩn 100 ghế như choigivui.com)
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const currentUserSeat = seats.find((s) => s.occupiedBy === currentUserId);
  const occupiedCount = seats.filter((s) => s.occupiedBy).length;

  return (
    <div className="relative w-full max-w-5xl mx-auto py-6 px-2 sm:px-4 flex flex-col items-center select-none">
      {/* Vệt ánh sáng Projector hắt xuống sàn rạp */}
      <div className="absolute top-0 inset-x-1/4 h-24 bg-gradient-to-b from-[#d8ef82]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Card Ghế của tôi chuẩn wetube ciné */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 px-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#a2b18c]">
            Sơ đồ rạp chiếu
          </span>
          <span className="text-[11px] bg-[#d8ef82]/10 text-[#d8ef82] font-mono px-2 py-0.5 rounded-md border border-[#d8ef82]/20">
            {occupiedCount}/100 ghế có người
          </span>
        </div>

        {currentUserSeat ? (
          <div className="my-seat-card flex items-center gap-3 px-3.5 py-1.5 shadow-sm">
            <span className="text-base">{getUserById(currentUserId)?.avatar || '🍿'}</span>
            <div className="flex flex-col text-left">
              <span className="text-[8px] font-mono tracking-[1.5px] text-[#9da98d] uppercase">
                GHẾ CỦA BẠN
              </span>
              <span className="text-xs font-bold text-[#e1f8b1]">
                Hàng {currentUserSeat.row} · Ghế số {currentUserSeat.number}
              </span>
            </div>
            <button
              onClick={onLeaveSeat}
              className="ml-2 flex items-center gap-1 text-[10px] bg-white/5 hover:bg-rose-500/20 hover:text-rose-300 text-[#cad6bb] px-2 py-1 rounded transition-colors"
            >
              <LogOut size={12} /> Rời ghế
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-[#d8ef82] bg-[#d8ef82]/10 border border-[#d8ef82]/20 px-3 py-1.5 rounded-xl animate-pulse">
            <Sparkles size={14} />
            <span>Chọn 1 trong 100 ghế dưới đây để ngồi xem cùng mọi người</span>
          </div>
        )}
      </div>

      {/* Bố cục 100 ghế rạp chiếu phim */}
      <div className="w-full bg-[#111412]/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-[#d6e5c6]/15 shadow-2xl flex flex-col gap-2.5 relative overflow-hidden">
        {/* Layer Reaction Emoji bay lên từ ghế */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {activeReactions.map((reaction) => (
            <div
              key={reaction.id}
              style={{
                left: `${reaction.x || 50}%`,
                bottom: `${reaction.y || 15}%`,
              }}
              className="absolute text-3xl animate-float-emoji pointer-events-none"
            >
              {reaction.emoji}
            </div>
          ))}
        </div>

        {rows.map((rowName) => {
          const rowSeats = seats.filter((s) => s.row === rowName);
          // Chia thành 3 cụm (3 ghế bên trái - 4 ghế ở giữa - 3 ghế bên phải) như rạp chiếu thực thụ
          const leftCluster = rowSeats.slice(0, 3);
          const centerCluster = rowSeats.slice(3, 7);
          const rightCluster = rowSeats.slice(7, 10);

          const renderSeat = (seat) => {
            const occupant = seat.occupiedBy ? getUserById(seat.occupiedBy) : null;
            const isMine = seat.occupiedBy === currentUserId;
            const bubble = recentBubbles[seat.id];

            return (
              <div key={seat.id} className="relative group flex flex-col items-center">
                {/* Bong bóng chat trên ghế */}
                {bubble && (
                  <div className="absolute -top-11 z-30 pointer-events-none animate-seat-bubble whitespace-nowrap bg-[#1a231d] text-[#e1f8b1] text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-[#d8ef82]/40 shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-[#1a231d]">
                    {bubble.text}
                  </div>
                )}

                {/* Nút Ghế */}
                <button
                  onClick={() => {
                    if (!seat.occupiedBy) {
                      onSelectSeat(seat.id);
                    }
                  }}
                  disabled={!!seat.occupiedBy && !isMine}
                  style={{
                    borderColor: isMine ? '#d8ef82' : occupant ? occupant.color || '#a2b18c' : undefined,
                  }}
                  className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-150 transform ${
                    isMine
                      ? 'bg-[#d8ef82]/25 border-2 shadow-md shadow-[#d8ef82]/20 scale-105'
                      : occupant
                      ? 'bg-[#18201a] border cursor-default'
                      : 'bg-[#151916] border border-[#d6e5c6]/10 hover:border-[#d8ef82] hover:bg-[#d8ef82]/15 hover:scale-105 cursor-pointer text-[#68756c] hover:text-[#d8ef82]'
                  }`}
                  title={`${rowName}${seat.number}: ${occupant ? occupant.nickname : 'Ghế trống'}`}
                >
                  {occupant ? (
                    <span className="text-xs sm:text-sm">{occupant.avatar || '🍿'}</span>
                  ) : (
                    <span className="text-[9px] font-mono opacity-60 group-hover:opacity-100">
                      {seat.number}
                    </span>
                  )}

                  {/* Chấm tròn phát sáng ghế của mình */}
                  {isMine && (
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d8ef82] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d8ef82]"></span>
                    </span>
                  )}
                </button>
              </div>
            );
          };

          return (
            <div key={rowName} className="flex items-center justify-center gap-2 sm:gap-4">
              {/* Nhãn hàng bên trái */}
              <span className="w-4 text-center text-[10px] font-mono font-bold text-[#68756c]">
                {rowName}
              </span>

              {/* Cụm trái (3 ghế) */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {leftCluster.map(renderSeat)}
              </div>

              {/* Lối đi rạp */}
              <div className="w-2 sm:w-4" />

              {/* Cụm giữa (4 ghế) */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {centerCluster.map(renderSeat)}
              </div>

              {/* Lối đi rạp */}
              <div className="w-2 sm:w-4" />

              {/* Cụm phải (3 ghế) */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {rightCluster.map(renderSeat)}
              </div>

              {/* Nhãn hàng bên phải */}
              <span className="w-4 text-center text-[10px] font-mono font-bold text-[#68756c]">
                {rowName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

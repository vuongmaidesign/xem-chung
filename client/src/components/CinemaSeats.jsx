import React from 'react';
import { Armchair, LogOut, UserCheck } from 'lucide-react';

export default function CinemaSeats({
  seats = [],
  users = [],
  currentUserId,
  onSelectSeat,
  onLeaveSeat,
  recentBubbles = {}, // { [seatId]: { text, timestamp } }
  activeReactions = [], // [ { id, emoji, seatId, x, y } ]
}) {
  // Tìm thông tin user theo socketId
  const getUserById = (userId) => users.find((u) => u.id === userId);

  // Nhóm ghế theo từng hàng (A, B, C, D)
  const rows = ['A', 'B', 'C', 'D'];

  const currentUserSeat = seats.find((s) => s.occupiedBy === currentUserId);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8 px-4 flex flex-col items-center">
      {/* Vệt ánh sáng Projector phản chiếu xuống sàn rạp */}
      <div className="absolute -top-6 inset-x-1/4 h-24 bg-gradient-to-b from-rose-500/15 via-rose-500/5 to-transparent blur-2xl pointer-events-none" />

      {/* Tiêu đề & Trạng thái ngồi */}
      <div className="w-full flex items-center justify-between mb-6 px-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold tracking-wide text-gray-300 uppercase">
            Sơ đồ rạp chiếu (Chọn ghế)
          </span>
          <span className="text-xs bg-rose-500/20 text-rose-300 font-mono px-2 py-0.5 rounded-full border border-rose-500/30">
            {seats.filter((s) => s.occupiedBy).length}/{seats.length} ghế có người
          </span>
        </div>

        {currentUserSeat ? (
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-xl">
            <UserCheck size={14} className="text-emerald-400" />
            <span className="text-xs text-emerald-300 font-medium">
              Bạn đang ngồi ghế <b className="text-white">{currentUserSeat.id}</b>
            </span>
            <button
              onClick={onLeaveSeat}
              className="ml-2 flex items-center gap-1 text-[11px] bg-white/10 hover:bg-rose-500/30 hover:text-rose-300 text-gray-300 px-2 py-0.5 rounded transition-all"
            >
              <LogOut size={12} /> Đứng dậy
            </button>
          </div>
        ) : (
          <span className="text-xs text-amber-400/90 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-xl animate-pulse">
            👉 Hãy click vào một chiếc ghế trống để ngồi xem chung nhé!
          </span>
        )}
      </div>

      {/* Khung rạp chiếu các hàng ghế */}
      <div className="w-full bg-[#11131a]/80 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col gap-5 relative overflow-hidden">
        {/* Layer hiệu ứng Floating Reactions bay lên từ ghế */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {activeReactions.map((reaction) => (
            <div
              key={reaction.id}
              style={{
                left: `${reaction.x || 50}%`,
                bottom: `${reaction.y || 20}%`,
              }}
              className="absolute text-3xl animate-float-up pointer-events-none"
            >
              {reaction.emoji}
            </div>
          ))}
        </div>

        {rows.map((rowName) => {
          const rowSeats = seats.filter((s) => s.row === rowName);
          return (
            <div key={rowName} className="flex items-center justify-center gap-2 sm:gap-3">
              {/* Tên hàng bên trái */}
              <div className="w-5 text-center text-xs font-mono font-bold text-gray-500">
                {rowName}
              </div>

              {/* Các ghế trong hàng */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                {rowSeats.map((seat) => {
                  const occupant = seat.occupiedBy ? getUserById(seat.occupiedBy) : null;
                  const isCurrentUsersSeat = seat.occupiedBy === currentUserId;
                  const seatBubble = recentBubbles[seat.id];

                  return (
                    <div key={seat.id} className="relative group flex flex-col items-center">
                      {/* Bong bóng chat nổi trên đầu ghế */}
                      {seatBubble && (
                        <div className="absolute -top-12 z-20 pointer-events-none animate-seat-bubble whitespace-nowrap bg-white text-gray-900 text-[11px] font-semibold px-2.5 py-1 rounded-xl shadow-lg border border-gray-200 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-white">
                          {seatBubble.text}
                        </div>
                      )}

                      {/* Ghế Button */}
                      <button
                        onClick={() => {
                          if (!seat.occupiedBy) {
                            onSelectSeat(seat.id);
                          }
                        }}
                        disabled={!!seat.occupiedBy && !isCurrentUsersSeat}
                        style={{
                          borderColor: occupant?.color || (isCurrentUsersSeat ? '#10b981' : undefined),
                        }}
                        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 transform ${
                          isCurrentUsersSeat
                            ? 'bg-rose-500/30 border-2 shadow-lg shadow-rose-500/30 scale-105'
                            : occupant
                            ? 'bg-[#1c202d] border shadow-md cursor-default'
                            : 'bg-[#181a24] border border-white/10 hover:border-rose-500 hover:bg-rose-500/20 hover:scale-105 cursor-pointer text-gray-400 hover:text-white'
                        }`}
                      >
                        {occupant ? (
                          // Người đang ngồi: hiện avatar
                          <div className="text-lg sm:text-xl transform group-hover:scale-110 transition-transform">
                            {occupant.avatar || '🍿'}
                          </div>
                        ) : (
                          // Ghế trống: hiện icon ghế & số ghế
                          <>
                            <Armchair size={16} className="opacity-40 group-hover:opacity-100" />
                            <span className="text-[10px] font-mono opacity-60 group-hover:opacity-100">
                              {seat.number}
                            </span>
                          </>
                        )}

                        {/* Điểm phát sáng ghế của mình */}
                        {isCurrentUsersSeat && (
                          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                          </span>
                        )}
                      </button>

                      {/* Nickname dưới chân ghế */}
                      {occupant && (
                        <div
                          style={{ color: occupant.color }}
                          className="mt-1 text-[10px] font-semibold truncate max-w-[50px] text-center"
                          title={occupant.nickname}
                        >
                          {isCurrentUsersSeat ? 'Bạn' : occupant.nickname}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Tên hàng bên phải */}
              <div className="w-5 text-center text-xs font-mono font-bold text-gray-500">
                {rowName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

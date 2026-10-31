import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Smile, Flame, Heart, Sparkles } from 'lucide-react';

const QUICK_REACTIONS = ['❤️', '😂', '🍿', '🔥', '👏', '🚀', '🎵'];

export default function ChatBox({
  messages = [],
  onSendMessage,
  onSendReaction,
  currentUserId,
}) {
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText('');
  };

  return (
    <div className="w-full flex flex-col h-[480px] bg-[#12141c]/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Header Chat */}
      <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <MessageSquare size={16} className="text-rose-400" />
          <span className="font-semibold text-sm text-gray-200">Trò chuyện rạp phim</span>
        </div>
        <span className="text-[11px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
          {messages.length} tin
        </span>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500 text-xs">
            <Smile size={28} className="mb-2 opacity-40 text-rose-400" />
            <p>Chưa có tin nhắn nào.</p>
            <p className="text-[11px] opacity-70">Gửi lời chào tới mọi người trong rạp nhé!</p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMe = msg.userId === currentUserId;
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} animate-pop-in`}
              >
                <div className="flex items-center gap-1.5 mb-1 px-1">
                  <span className="text-xs">{msg.avatar || '🍿'}</span>
                  <span
                    style={{ color: msg.color || '#f43f5e' }}
                    className="text-xs font-semibold"
                  >
                    {isMe ? 'Bạn' : msg.nickname}
                  </span>
                  {msg.seatId && (
                    <span className="text-[10px] bg-white/10 text-gray-300 px-1.5 py-0.2 rounded font-mono">
                      {msg.seatId}
                    </span>
                  )}
                </div>
                <div
                  className={`max-w-[85%] px-3.5 py-2 rounded-2xl text-xs sm:text-sm leading-relaxed break-words shadow-sm ${
                    isMe
                      ? 'bg-rose-600 text-white rounded-tr-none'
                      : 'bg-[#1e2230] text-gray-200 rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Reactions Bar */}
      <div className="px-3 py-2 border-t border-white/5 bg-white/[0.02] flex items-center justify-between gap-1 overflow-x-auto">
        <span className="text-[11px] text-gray-400 pl-1 shrink-0 flex items-center gap-1">
          <Sparkles size={12} className="text-amber-400" /> Reaction:
        </span>
        <div className="flex items-center gap-1">
          {QUICK_REACTIONS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onSendReaction(emoji)}
              className="text-lg p-1.5 hover:bg-white/10 rounded-xl transition-transform active:scale-125 transform hover:scale-110"
              title={`Thả ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Input Message Form */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-white/10 bg-[#0d0e14]">
        <div className="flex items-center gap-2 bg-[#181a24] rounded-2xl px-3 py-1.5 border border-white/10 focus-within:border-rose-500 transition-colors">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhắn gì đó vào rạp..."
            maxLength={250}
            className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2 rounded-xl bg-rose-500 text-white disabled:opacity-30 disabled:hover:bg-rose-500 hover:bg-rose-600 transition-all transform active:scale-95"
          >
            <Send size={14} />
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, Smile, Sparkles, X } from 'lucide-react';

const QUICK_REACTIONS = ['❤️', '😂', '🍿', '🔥', '👏', '🚀', '🎵'];

export default function ChatBox({
  messages = [],
  onSendMessage,
  onSendReaction,
  currentUserId,
  onClose,
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
    <div className="room-drawer flex flex-col h-full w-full overflow-hidden select-none">
      {/* Header Chat */}
      <div className="px-5 py-3.5 border-b border-[#d6e5c6]/15 flex items-center justify-between bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <MessageSquare size={16} className="text-[#d8ef82]" />
          <span className="font-bold text-xs uppercase tracking-wider text-[#cad6bb]">
            Trò chuyện rạp phim
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-[#9da98d] bg-white/[0.04] px-2 py-0.5 rounded">
            {messages.length} tin
          </span>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-[#9da98d] hover:text-white rounded hover:bg-white/10 transition-colors"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-[#9da98d] text-xs">
            <Smile size={24} className="mb-2 opacity-50 text-[#d8ef82]" />
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
                    style={{ color: msg.color || '#d8ef82' }}
                    className="text-[11px] font-semibold"
                  >
                    {isMe ? 'Bạn' : msg.nickname}
                  </span>
                  {msg.seatId && (
                    <span className="text-[9px] bg-white/10 text-[#cad6bb] px-1 py-0.2 rounded font-mono">
                      {msg.seatId}
                    </span>
                  )}
                </div>
                <div
                  className={`max-w-[85%] px-3 py-1.5 rounded-xl text-xs leading-relaxed break-words shadow-sm ${
                    isMe
                      ? 'bg-[#d8ef82] text-[#090e0b] font-medium rounded-tr-none'
                      : 'bg-[#18201a] text-[#cad6bb] rounded-tl-none border border-[#d6e5c6]/10'
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
      <div className="px-3 py-2 border-t border-[#d6e5c6]/10 bg-white/[0.01] flex items-center justify-between gap-1 overflow-x-auto">
        <span className="text-[10px] text-[#9da98d] pl-1 shrink-0 flex items-center gap-1 uppercase tracking-wider font-semibold">
          <Sparkles size={11} className="text-[#d8ef82]" /> Thả cảm xúc:
        </span>
        <div className="flex items-center gap-1">
          {QUICK_REACTIONS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onSendReaction(emoji)}
              className="text-base p-1 hover:bg-white/10 rounded-lg transition-transform active:scale-125 transform hover:scale-110"
              title={`Thả ${emoji}`}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Input Message Form */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-[#d6e5c6]/15 bg-[#0e1410]">
        <div className="flex items-center gap-2 bg-[#151c17] rounded-xl px-3 py-1 border border-[#d6e5c6]/20 focus-within:border-[#d8ef82] transition-colors">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Nhắn gì đó vào rạp..."
            maxLength={250}
            className="flex-1 bg-transparent text-xs text-white placeholder-[#9da98d]/60 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-1.5 rounded-lg bg-[#d8ef82] text-[#090e0b] disabled:opacity-30 hover:bg-[#e1f8b1] transition-all transform active:scale-95"
          >
            <Send size={13} />
          </button>
        </div>
      </form>
    </div>
  );
}

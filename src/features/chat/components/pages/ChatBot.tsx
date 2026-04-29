import React, { useEffect, useRef, useState } from 'react';
import { useChat } from 'ai/react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { useAuthStore } from '@/features/auth/auth.store';
import { CONFIG } from '@/config/env';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { user } = useAuthStore();
  const threadId = user ? `user-${user._id}` : 'guest';

  // Vercel AI SDK Hook
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: `${CONFIG.apiUrl}/chatbot/chat/${threadId}`,
      streamProtocol: 'text',
      onResponse: () => {
        // Auto-scroll to bottom when new response arrives
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      },
    });

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  console.log('INPUT', input, isLoading, messages, 'chekc korbo');

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-9999 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-95 h-100 sm:h-112 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-blue-600 p-3 sm:p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-1.5 rounded-full shadow-inner">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">Neo AI</h3>
                  <p className="text-[10px] opacity-80">Techghar Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin"
            >
              {console.log('Current Messages in UI:', messages)}
              {messages?.map((m: any) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div
                      className={`p-2 rounded-full h-7 w-7 flex items-center justify-center shrink-0 text-white shadow-sm ${m.role === 'user' ? 'bg-blue-600' : 'bg-gray-400'}`}
                    >
                      {m.role === 'user' ? (
                        <User size={14} />
                      ) : (
                        <Bot size={14} />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl text-sm shadow-sm whitespace-pre-wrap ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none'}`}
                    >
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-blue-600" />
                    <span className="text-xs text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white border-t border-gray-100 flex gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type here..."
                disabled={isLoading}
                className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition active:scale-90 disabled:bg-gray-300 shadow-lg"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors border-2 border-white/20 cursor-pointer"
      >
        {isOpen ? (
          <X size={24} className="sm:w-5 sm:h-5" />
        ) : (
          <MessageCircle size={24} className="sm:w-5 sm:h-5" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;

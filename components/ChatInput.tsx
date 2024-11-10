
"use client";

import { useState } from 'react';
import { FiSend, FiSmile, FiPaperclip } from 'react-icons/fi';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex items-center rounded-lg  bg-gray-200 p-2 border-t">

      <button
        aria-label="Open Emoji Picker"
        className="text-gray-600 bg-slate-300 rounded-lg p-2 cursor-pointer mr-3"
      >
        <FiSmile size={24} />
      </button>

      <input
        type="text"
        className="flex-1 border rounded-lg p-2 focus:outline-none"
        placeholder=" message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />

      <button
        aria-label="Attach Media"
        className="text-gray-600 bg-slate-300 rounded-lg p-2 cursor-pointer mx-3"
      >
        <FiPaperclip size={24} />
      </button>

      <button
        onClick={handleSend}
        aria-label="Send Message"
        className="text-white bg-green-500 rounded-lg p-2"
      >
        <FiSend size={24} />
      </button>
    </div>
  );
};

export default ChatInput;

"use client";

import { useState } from 'react';
import ChatInput from './ChatInput';
import { FiUser, FiArrowLeft, FiShare2, FiPlus } from 'react-icons/fi';
import Image from 'next/image';

interface Message {
  id: number;
  user: string;
  type: 'text' | 'image';
  content: string;
  time: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, user: '(Recruiter)', type: 'text', content: 'Hello, Introduce yourself?', time: '10:15 AM' },
    {
      id: 2,
      user: 'You',
      type: 'image',
      content: '/Resume.png',
      time: '10:17 AM',
    },
    {
      id: 3,
      user: 'You',
      type: 'text',
      content: 'Hello, I’m Vikas, a passionate frontend developer with hands-on experience in Next.js, React.js, Bootstrap, Tailwind CSS, and other frontend technologies. My internship helped me hone my skills in creating responsive, user-centric web applications. Beyond frontend, I have a keen interest in full-stack development and am expanding my knowledge in backend technologies like Node.js, Express, and databases. I’m eager to leverage my technical expertise and grow as a full-stack developer in a dynamic team environment.',
      time: '10:18 AM',
    },
  ]);

  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        user: 'You',
        type: 'text',
        content: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
    }
  };

  return (
    <div className="w-full sm:w-3/4 flex flex-col justify-between bg-[#e5ddd5]">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b bg-gray-200 text-gray-700">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 mr-3">
          <FiUser className="text-gray-400" size={24} />
        </div>
        <h3 className="text-lg font-bold">Recruiter (+91-1234567890)</h3>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-6 bg-[#e5ddd5]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'}`}>
            <div className="relative max-w-[85%] p-3 rounded-lg bg-white shadow-lg">

              {msg.type === 'image' && (
                <a
                  href="https://my-portfolio-vikas.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resume"
                  title="Go to Resume"
                >
                  <Image
                    src={msg.content}
                    alt="Resume"
                    className="rounded-lg border mb-3"
                    width={200}
                    height={200}
                  />
                </a>
              )}

              {msg.type === 'text' && (
                <div
                  className={`p-4 rounded-lg ${msg.user === 'You' ? 'bg-[#b8f789]' : 'bg-gray-200'} text-slate-600`}
                >
                  {msg.content}
                </div>
              )}

              <button
                className={`absolute ${msg.user === 'You' ? 'right-2 bottom-[-30px]' : 'left-2 bottom-[-30px]'} text-gray-600 group`}
                aria-label="Reply"
              >
                <div className="relative p-1 border border-gray-500 rounded-lg mb-1">
                  <FiArrowLeft size={16} />
                  <span className="max-w-2 absolute inset-0 flex items-center justify-center text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-1 rounded-md shadow-md">
                    Reply
                  </span>
                </div>
              </button>

              <div className={`text-xs text-gray-500 mt-1 ${msg.user === 'You' ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {messages.some((msg) => msg.user === 'You') && (
          <div className="flex flex-col items-end mt-3 space-y-2">
            <button className="bg-gray-300 w-full sm:w-1/2 px-4 py-2 rounded-md hover:bg-gray-400 text-base text-blue-600">
              <FiArrowLeft className="inline-block mr-1" /> Good
            </button>
            <button className="bg-gray-300 w-full sm:w-1/2 px-4 py-2 rounded-md hover:bg-gray-400 text-base text-blue-600">
              <FiArrowLeft className="inline-block mr-1" /> Average
            </button>
            <button className="bg-gray-300 w-full sm:w-1/2 px-4 py-2 rounded-md hover:bg-gray-400 text-base text-blue-600">
              <FiArrowLeft className="inline-block mr-1" /> Excellent
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col items-end space-y-2 mt-4 bg-[#e5ddd5]">
        <button className="bg-slate-100 px-4 py-2 rounded-full text-gray-600 flex items-center space-x-2 hover:bg-slate-300 border border-blue-500">
          <FiShare2 size={16} />
          <span>Send Property Location</span>
        </button>
        <button className="bg-slate-100 px-4 py-2 rounded-full text-gray-600 flex items-center space-x-2 hover:bg-slate-300 border border-blue-500">
          <FiPlus size={16} />
          <span>Send Template</span>
        </button>
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;

import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar?: string;
  isGroup?: boolean;
}

interface ChatWindowProps {
  chat: Chat;
}

export default function ChatWindow({ chat }: ChatWindowProps) {
  const { setSelectedChat } = useChat();
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Add message sending logic here
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-100 dark:border-dark-100 flex items-center space-x-4">
        <button
          onClick={() => setSelectedChat(null)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full"
        >
          <ArrowLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{chat.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {chat.isGroup ? 'Group Chat' : 'Direct Message'}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Start of conversation
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100 dark:border-dark-100">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 text-gray-700 dark:text-gray-200"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
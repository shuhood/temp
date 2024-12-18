import React from 'react';
import { User, Users } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';
import { formatDistanceToNow } from '../../utils/dateUtils';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar?: string;
  isGroup?: boolean;
}

interface ChatListProps {
  chats: Chat[];
}

export default function ChatList({ chats }: ChatListProps) {
  const { setSelectedChat } = useChat();

  return (
    <div className="h-full overflow-y-auto">
      {chats.length === 0 ? (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          No chats available
        </div>
      ) : (
        <div className="divide-y divide-gray-100 dark:divide-dark-100">
          {chats.map((chat) => (
            <button
              key={chat.id}
              className="w-full p-4 hover:bg-gray-50 dark:hover:bg-dark-100 flex items-start space-x-3 transition-colors"
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  {chat.isGroup ? (
                    <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDistanceToNow(chat.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 mt-1">
                    {chat.unread} new
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
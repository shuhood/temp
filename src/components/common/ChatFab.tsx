import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';
import ChatDrawer from '../chat/ChatDrawer';
import NotificationBadge from './notifications/NotificationBadge';

export default function ChatFab() {
  const { toggleDrawer, chats } = useChat();
  
  // Calculate total unread messages
  const unreadCount = chats.reduce((total, chat) => total + chat.unread, 0);

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="fixed bottom-20 right-6 z-40 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors group"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2">
          <NotificationBadge count={unreadCount} />
        </div>
      </button>
      <ChatDrawer />
    </>
  );
}
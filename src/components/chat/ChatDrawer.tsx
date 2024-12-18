import React, { useState } from 'react';
import { X, Users, User } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import ChatTab from './ChatTab';

type TabType = 'direct' | 'group';

export default function ChatDrawer() {
  const { isDrawerOpen, toggleDrawer, selectedChat, chats } = useChat();
  const [activeTab, setActiveTab] = useState<TabType>('direct');

  const filteredChats = chats.filter(
    (chat) => (activeTab === 'direct' && !chat.isGroup) || (activeTab === 'group' && chat.isGroup)
  );

  // Calculate unread counts for each tab
  const unreadDirectCount = chats.filter(chat => !chat.isGroup && chat.unread > 0)
    .reduce((total, chat) => total + chat.unread, 0);
  const unreadGroupCount = chats.filter(chat => chat.isGroup && chat.unread > 0)
    .reduce((total, chat) => total + chat.unread, 0);

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40 transition-opacity"
          onClick={toggleDrawer}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white dark:bg-dark-200 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-100 dark:border-dark-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Messages</h2>
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="flex border-b border-gray-100 dark:border-dark-100">
            <ChatTab
              icon={User}
              label="Direct Messages"
              isActive={activeTab === 'direct'}
              onClick={() => setActiveTab('direct')}
              unreadCount={unreadDirectCount}
            />
            <ChatTab
              icon={Users}
              label="Group Chats"
              isActive={activeTab === 'group'}
              onClick={() => setActiveTab('group')}
              unreadCount={unreadGroupCount}
            />
          </div>

          <div className="flex-1 overflow-hidden">
            {selectedChat ? (
              <ChatWindow chat={selectedChat} />
            ) : (
              <ChatList chats={filteredChats} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
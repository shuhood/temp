import React, { createContext, useContext, useState } from 'react';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar?: string;
  isGroup?: boolean;
}

interface ChatContextType {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  selectedChat: Chat | null;
  setSelectedChat: (chat: Chat | null) => void;
  chats: Chat[];
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'John Smith',
    lastMessage: 'Can you review the latest PR?',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    unread: 2,
  },
  {
    id: '2',
    name: 'Development Team',
    lastMessage: 'Sprint planning at 2 PM',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    unread: 5,
    isGroup: true,
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    lastMessage: 'Thanks for your help!',
    timestamp: new Date(Date.now() - 1000 * 60 * 120),
    unread: 0,
  },
  {
    id: '4',
    name: 'Project Managers',
    lastMessage: 'Updated project timeline',
    timestamp: new Date(Date.now() - 1000 * 60 * 180),
    unread: 3,
    isGroup: true,
  },
];

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <ChatContext.Provider value={{
      isDrawerOpen,
      toggleDrawer,
      selectedChat,
      setSelectedChat,
      chats: mockChats,
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
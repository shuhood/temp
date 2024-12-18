import React from 'react';
import { LucideIcon } from 'lucide-react';
import { NotificationBadge } from '../common/notifications';

interface ChatTabProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
  unreadCount: number;
}

export default function ChatTab({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick,
  unreadCount 
}: ChatTabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 px-4 text-sm font-medium flex items-center justify-center space-x-2 ${
        isActive
          ? 'text-green-600 dark:text-green-400 border-b-2 border-green-600 dark:border-green-400'
          : 'text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
      <NotificationBadge count={unreadCount} />
    </button>
  );
}
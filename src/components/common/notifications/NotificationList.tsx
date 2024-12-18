import React from 'react';
import { X } from 'lucide-react';
import { Notification } from '../../../types/notification';
import { formatDistanceToNow } from '../../../utils/dateUtils';
import NotificationItem from './NotificationItem';

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onClear: (id: string) => void;
}

export default function NotificationList({ 
  notifications, 
  onMarkAsRead, 
  onClear 
}: NotificationListProps) {
  if (notifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No notifications to display
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-100 dark:divide-dark-100">
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onMarkAsRead={onMarkAsRead}
          onClear={onClear}
        />
      ))}
    </div>
  );
}
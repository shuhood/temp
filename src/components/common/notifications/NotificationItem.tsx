import React from 'react';
import { X, ClipboardCheck, AlertTriangle } from 'lucide-react';
import { Notification } from '../../../types/notification';
import { formatDistanceToNow } from '../../../utils/dateUtils';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
  onClear: (id: string) => void;
}

const iconMap = {
  approval: ClipboardCheck,
  alert: AlertTriangle,
};

const colorMap = {
  approval: 'text-green-500',
  alert: 'text-yellow-500',
};

export default function NotificationItem({ 
  notification, 
  onMarkAsRead, 
  onClear 
}: NotificationItemProps) {
  const Icon = iconMap[notification.type];
  const colorClass = colorMap[notification.type];
  
  return (
    <div
      className={`p-4 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors ${
        notification.read ? 'opacity-75' : ''
      }`}
      onClick={() => onMarkAsRead(notification.id)}
    >
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 mt-0.5 ${colorClass}`} />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {notification.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClear(notification.id);
              }}
              className="p-1 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {notification.message}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            {formatDistanceToNow(notification.timestamp)}
          </p>
          {notification.type === 'approval' && !notification.read && (
            <div className="mt-2 flex space-x-2">
              <button className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm rounded-md hover:bg-green-200 dark:hover:bg-green-900/40 transition-colors">
                Approve
              </button>
              <button className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-sm rounded-md hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                Reject
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
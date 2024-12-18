import React, { createContext, useContext, useState } from 'react';
import { Notification } from '../types/notification';

interface NotificationContextType {
  notifications: Notification[];
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  markAsRead: (id: string) => void;
  clearNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Mock notifications for demo
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Leave Request Approval',
    message: 'Sarah Johnson has requested 3 days of annual leave.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    type: 'approval'
  },
  {
    id: '2',
    title: 'Overtime Approval',
    message: 'John Doe has submitted overtime hours for approval.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    read: false,
    type: 'approval'
  },
  {
    id: '3',
    title: 'System Update',
    message: 'Critical security update required. Please save your work.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    read: false,
    type: 'alert'
  },
  {
    id: '4',
    title: 'Server Maintenance',
    message: 'Scheduled maintenance in 2 hours.',
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
    type: 'alert'
  }
];

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const clearNotification = (id: string) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <NotificationContext.Provider value={{
      notifications,
      isDrawerOpen,
      toggleDrawer,
      markAsRead,
      clearNotification
    }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
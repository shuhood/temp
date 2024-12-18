import React, { useState } from 'react';
import { X, ClipboardCheck, Bell } from 'lucide-react';
import { useNotifications } from '../../contexts/NotificationContext';
import NotificationTab from './notifications/NotificationTab';
import NotificationList from './notifications/NotificationList';

type TabType = 'approvals' | 'alerts';

export default function NotificationDrawer() {
  const { isDrawerOpen, toggleDrawer, notifications, markAsRead, clearNotification } = useNotifications();
  const [activeTab, setActiveTab] = useState<TabType>('approvals');

  const filteredNotifications = notifications.filter(
    notification => activeTab === 'approvals' ? notification.type === 'approval' : notification.type === 'alert'
  );

  const unreadApprovals = notifications.filter(n => n.type === 'approval' && !n.read).length;
  const unreadAlerts = notifications.filter(n => n.type === 'alert' && !n.read).length;

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
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="flex border-b border-gray-100 dark:border-dark-100">
            <NotificationTab
              icon={ClipboardCheck}
              label="For Approvals"
              isActive={activeTab === 'approvals'}
              onClick={() => setActiveTab('approvals')}
              unreadCount={unreadApprovals}
            />
            <NotificationTab
              icon={Bell}
              label="Alerts"
              isActive={activeTab === 'alerts'}
              onClick={() => setActiveTab('alerts')}
              unreadCount={unreadAlerts}
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            <NotificationList
              notifications={filteredNotifications}
              onMarkAsRead={markAsRead}
              onClear={clearNotification}
            />
          </div>
        </div>
      </div>
    </>
  );
}
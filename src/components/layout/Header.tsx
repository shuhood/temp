import React from 'react';
import { Bell, BookOpen, TicketPlus, HelpCircle } from 'lucide-react';
import { ThemeToggle, UserMenu, NotificationDrawer } from '../common';
import { HelpdeskButton } from '../common/buttons';
import { SearchPopover } from '../search';
import { useNotifications } from '../../contexts/NotificationContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { toggleDrawer, notifications } = useNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <header className="bg-white dark:bg-dark-200 border-b border-gray-100 dark:border-dark-100 fixed w-full top-0 z-50 transition-colors">
        <div className="h-16 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://hdccdn.blob.core.windows.net/brand/hdc/HDCLOGO-01.png" 
              alt="HDC Logo" 
              className="h-8 w-auto"
            />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <SearchPopover />
          </div>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            
            <Link 
              to="/knowledge"
              className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg transition-colors text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
              title="Knowledge Base"
            >
              <BookOpen className="h-5 w-5" />
            </Link>

            <Link 
              to="/faq"
              className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg transition-colors text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
              title="FAQ"
            >
              <HelpCircle className="h-5 w-5" />
            </Link>

            <HelpdeskButton />

            <Link
              to="/support/new"
              className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg transition-colors text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
              title="Create Support Ticket"
            >
              <TicketPlus className="h-5 w-5" />
            </Link>
            
            <button
              onClick={toggleDrawer}
              className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg relative transition-colors text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
            >
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
            
            <UserMenu />
          </div>
        </div>
      </header>
      <NotificationDrawer />
    </>
  );
}
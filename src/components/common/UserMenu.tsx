import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../features/auth/hooks/useAuth';
import { getUserName, getUserInfo } from '../../lib/auth/tokenUtils';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { logout } = useAuth();
  const userName = getUserName();
  const userInfo = getUserInfo();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg transition-colors"
      >
        <div className="h-8 w-8 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center">
          <User className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-200 rounded-lg shadow-lg border border-gray-100 dark:border-dark-100 py-1">
          <div className="px-4 py-3 border-b border-gray-100 dark:border-dark-100">
            <div className="font-medium text-gray-900 dark:text-white">
              {userName}
            </div>
            {userInfo && (
              <div className="mt-1 text-sm">
                <div className="text-gray-600 dark:text-gray-300">
                  {userInfo.jobTitle}
                </div>
                <div className="text-gray-500 dark:text-gray-400">
                  {userInfo.department}
                </div>
              </div>
            )}
          </div>
          
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100"
          >
            <User className="h-4 w-4 mr-2" />
            Profile
          </Link>
          
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Link>
          
          <div className="h-px bg-gray-100 dark:bg-dark-100 my-1" />
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-dark-100"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
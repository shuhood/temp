import React from 'react';
import { Bell, HelpCircle } from 'lucide-react';
import { ThemeToggle, UserMenu } from './common';

export default function Header() {
  return (
    <header className="bg-white dark:bg-dark-200 border-b border-gray-100 dark:border-dark-100 fixed w-full top-0 z-50 transition-colors">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CorporateApp</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-full relative transition-colors">
            <HelpCircle className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          
          <button className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-full relative transition-colors">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
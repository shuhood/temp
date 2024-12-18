import React from 'react';
import { useMenu } from '../../contexts/MenuContext';
import MenuSection from '../menu/MenuSection';
import CategoryButtons from '../common/CategoryButtons';
import { ChevronLeft, ChevronRight, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { getMenuData, isMinimized, toggleMinimized } = useMenu();
  const menuData = getMenuData();

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] ${
      isMinimized ? 'w-16' : 'w-64'
    } bg-white dark:bg-dark-200 border-r border-gray-100 dark:border-dark-100 transition-all duration-300 ease-in-out overflow-hidden flex flex-col`}>
      <div className="flex items-center h-12">
        {/* Dashboard Link */}
        <Link 
          to="/dashboard"
          className={`flex items-center ${
            isMinimized ? 'justify-center px-0' : 'px-4'
          } text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors`}
        >
          <LayoutDashboard className="h-5 w-5" />
          {!isMinimized && <span className="ml-3">Dashboard</span>}
        </Link>

        {/* Minimize Button */}
        <button
          onClick={toggleMinimized}
          className={`p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full transition-colors ${
            isMinimized 
              ? 'absolute left-1/2 -translate-x-1/2' 
              : 'ml-auto mr-2'
          }`}
          title={isMinimized ? 'Expand' : 'Minimize'}
        >
          {isMinimized ? (
            <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-500 hover:scrollbar-thumb-green-600 dark:scrollbar-thumb-green-500/50 dark:hover:scrollbar-thumb-green-500">
        {menuData && (
          <div>
            {!isMinimized && (
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 px-4">
                {menuData.label}
              </h2>
            )}
            <div className="space-y-6">
              {menuData.modules.map((section) => (
                <MenuSection 
                  key={section.id} 
                  section={section} 
                  isMinimized={isMinimized}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <CategoryButtons isMinimized={isMinimized} />
    </aside>
  );
}
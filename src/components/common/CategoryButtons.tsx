import React from 'react';
import { useMenu } from '../../contexts/MenuContext';
import { CategoryType } from '../../types/menu';
import { getRandomIcon } from '../../utils/iconUtils';

interface CategoryButtonsProps {
  isMinimized: boolean;
}

export default function CategoryButtons({ isMinimized }: CategoryButtonsProps) {
  const { activeCategory, setActiveCategory } = useMenu();
  const menuStructure = JSON.parse(localStorage.getItem('menuStructure') || '[]');

  if (isMinimized) {
    return null;
  }

  // Create rows of 3 categories
  const rows = [];
  for (let i = 0; i < menuStructure.length; i += 3) {
    rows.push(menuStructure.slice(i, i + 3));
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-200 border-t border-gray-100 dark:border-dark-100">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-3 gap-2 mb-2 last:mb-0">
          {row.map((category: any) => {
            const Icon = getRandomIcon();
            const isActive = activeCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as CategoryType)}
                className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-green-50 dark:bg-green-900/20'
                    : 'hover:bg-gray-50 dark:hover:bg-dark-100'
                } group`}
                title={category.displayName}
              >
                <Icon className={`h-6 w-6 mb-1 ${
                  isActive
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400'
                }`} />
                <span className={`text-xs text-center leading-tight ${
                  isActive
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400'
                }`}>
                  {category.displayName}
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
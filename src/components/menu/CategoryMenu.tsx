import React from 'react';
import { useMenu } from '../../contexts/MenuContext';
import MenuSection from './MenuSection';

export default function CategoryMenu() {
  const { getMenuData } = useMenu();
  const menuData = getMenuData();

  if (!menuData) {
    return (
      <div className="p-6 text-center text-gray-500 dark:text-gray-400">
        Select a category to view its menu
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {menuData.displayName}
      </h2>
      <div className="space-y-6">
        {menuData.modules.map((section) => (
          <MenuSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
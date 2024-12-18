import React from 'react';
import { NavItem } from '../../types/navigation';

interface SidebarItemProps {
  item: NavItem;
}

export default function SidebarItem({ item }: SidebarItemProps) {
  return (
    <li>
      <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 text-gray-700 dark:text-gray-200 transition-colors">
        <item.icon className="h-5 w-5" />
        <span>{item.label}</span>
      </button>
    </li>
  );
}
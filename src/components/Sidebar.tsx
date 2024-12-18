import React from 'react';
import { Home, Users, BarChart2, Settings, FileText, Mail } from 'lucide-react';
import { NavItem } from '../types/navigation';
import SidebarItem from './SidebarItem';

const navItems: NavItem[] = [
  { icon: Home, label: 'Dashboard' },
  { icon: Users, label: 'Team' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: FileText, label: 'Documents' },
  { icon: Mail, label: 'Messages' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-dark-200 border-r border-gray-100 dark:border-dark-100 transition-colors">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
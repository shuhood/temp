import React from 'react';
import { LucideIcon } from 'lucide-react';

interface UserMenuItemProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

export function UserMenuItem({ icon: Icon, label, onClick, className = '' }: UserMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors ${className}`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  title: string;
  className?: string;
}

export function ActionButton({ icon: Icon, onClick, title, className = '' }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-gray-100 dark:hover:bg-dark-200 rounded-lg transition-colors text-gray-600 dark:text-gray-300 ${className}`}
      title={title}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
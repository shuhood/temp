```tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TabProps {
  icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ icon: Icon, label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'text-green-600 dark:text-green-400 border-green-600 dark:border-green-400'
          : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-green-600 dark:hover:text-green-400'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}
```
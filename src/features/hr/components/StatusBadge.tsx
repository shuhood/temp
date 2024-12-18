import React from 'react';

interface StatusBadgeProps {
  status: 'active' | 'inactive';
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium ${
      status === 'active' 
        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400'
    }`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
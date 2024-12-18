import React from 'react';
import { TicketPriority } from '../types';

const priorityStyles = {
  low: 'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400',
  medium: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
  high: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
};

interface TicketPriorityBadgeProps {
  priority: TicketPriority;
}

export default function TicketPriorityBadge({ priority }: TicketPriorityBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityStyles[priority]}`}>
      {priority.charAt(0).toUpperCase() + priority.slice(1)}
    </span>
  );
}
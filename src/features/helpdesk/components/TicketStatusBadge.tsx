import React from 'react';
import { TicketStatus } from '../types';

const statusStyles = {
  open: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400',
  'in-progress': 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400',
  resolved: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400',
  closed: 'bg-gray-50 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400'
};

interface TicketStatusBadgeProps {
  status: TicketStatus;
}

export default function TicketStatusBadge({ status }: TicketStatusBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
    </span>
  );
}
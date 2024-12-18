import React from 'react';
import { Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpdeskButton() {
  return (
    <Link
      to="/helpdesk"
      className="p-2 hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg transition-colors text-gray-600 dark:text-gray-300 group"
      title="Helpdesk"
    >
      <Headphones className="h-5 w-5 group-hover:text-green-600 dark:group-hover:text-green-400" />
    </Link>
  );
}
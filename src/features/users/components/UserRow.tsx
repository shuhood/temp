import React from 'react';
import { MoreVertical, User as UserIcon } from 'lucide-react';
import { User } from '../types';

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors">
      <div className="col-span-3">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
            ) : (
              <UserIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
            )}
          </div>
          <div>
            <div className="font-medium text-gray-900 dark:text-white">
              {user.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {user.jobTitle}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 text-gray-600 dark:text-gray-300">
        {user.email}
      </div>
      <div className="col-span-2 text-gray-600 dark:text-gray-300">
        {user.department}
      </div>
      <div className="col-span-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400">
          {user.role}
        </span>
      </div>
      <div className="col-span-2 flex items-center justify-between">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          user.status === 'active'
            ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400'
            : 'bg-gray-100 dark:bg-gray-900/20 text-gray-800 dark:text-gray-400'
        }`}>
          {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
        </span>
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-dark-200 rounded-lg transition-colors">
          <MoreVertical className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
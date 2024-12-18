import React from 'react';
import { User } from '../types';
import UserRow from './UserRow';

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-200 dark:border-dark-100 overflow-hidden">
      <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100 text-sm font-medium text-gray-500 dark:text-gray-400">
        <div className="col-span-3">Name</div>
        <div className="col-span-3">Email</div>
        <div className="col-span-2">Department</div>
        <div className="col-span-2">Role</div>
        <div className="col-span-2">Status</div>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-dark-100">
        {users.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No users found
          </div>
        ) : (
          users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

interface AssignTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAssign: (userId: string) => void;
}

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    role: 'Technical Support'
  },
  {
    id: '2',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    role: 'System Administrator'
  },
  {
    id: '3',
    name: 'Emily Brown',
    email: 'emily.brown@company.com',
    role: 'Network Engineer'
  },
  {
    id: '4',
    name: 'David Lee',
    email: 'david.lee@company.com',
    role: 'IT Support'
  }
];

export default function AssignTicketModal({ isOpen, onClose, onAssign }: AssignTicketModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark-200 rounded-lg shadow-xl w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-dark-100">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Assign Ticket
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {filteredUsers.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 py-4">
                  No users found
                </p>
              ) : (
                <div className="space-y-2">
                  {filteredUsers.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => {
                        onAssign(user.id);
                        onClose();
                      }}
                      className="w-full p-3 flex items-start hover:bg-gray-50 dark:hover:bg-dark-100 rounded-lg transition-colors text-left"
                    >
                      <div className="flex-shrink-0">
                        {user.avatar ? (
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="h-10 w-10 rounded-full"
                          />
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                            <span className="text-lg font-medium text-green-600 dark:text-green-400">
                              {user.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {user.email}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {user.role}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
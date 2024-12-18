import React, { useState } from 'react';
import { Search, User } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  department: string;
}

interface UserAssignSelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

// Mock users data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    department: 'IT Support'
  },
  {
    id: '2',
    name: 'Mike Johnson',
    email: 'mike.johnson@company.com',
    department: 'Technical Support'
  },
  {
    id: '3',
    name: 'Emily Brown',
    email: 'emily.brown@company.com',
    department: 'Customer Support'
  }
];

export default function UserAssignSelect({
  label,
  name,
  value,
  onChange,
  onBlur
}: UserAssignSelectProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedUser = mockUsers.find(user => user.id === value);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg text-left flex items-center justify-between"
        >
          {selectedUser ? (
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-2">
                <User className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-900 dark:text-white">{selectedUser.name}</span>
            </div>
          ) : (
            <span className="text-gray-500">Select user to assign</span>
          )}
        </button>

        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-200 rounded-lg border border-gray-200 dark:border-dark-100 shadow-lg z-20">
              <div className="p-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-100 rounded-lg"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="max-h-60 overflow-y-auto">
                {filteredUsers.map((user) => (
                  <button
                    key={user.id}
                    type="button"
                    onClick={() => {
                      onChange({
                        target: { name, value: user.id }
                      } as React.ChangeEvent<HTMLSelectElement>);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-dark-100"
                  >
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mr-3">
                        <User className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {user.department}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
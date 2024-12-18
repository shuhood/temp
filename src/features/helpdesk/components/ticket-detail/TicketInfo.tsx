import React, { useState } from 'react';
import { Clock, Tag, User, Users } from 'lucide-react';
import { Ticket } from '../../types';
import { formatDistanceToNow } from '../../../../utils/dateUtils';
import AssignTicketModal from './AssignTicketModal';

interface TicketInfoProps {
  ticket: Ticket;
}

export default function TicketInfo({ ticket }: TicketInfoProps) {
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);

  const handleAssign = (userId: string) => {
    console.log('Assigning ticket to user:', userId);
    // Add your assignment logic here
  };

  return (
    <>
      <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
        <div className="p-4 border-b border-gray-100 dark:border-dark-100">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Ticket Information
          </h3>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Created
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {formatDistanceToNow(ticket.createdAt)}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Tag className="h-5 w-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Category
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {ticket.category}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <User className="h-5 w-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Reported By
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                John Doe
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Users className="h-5 w-5 text-gray-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Assigned To
              </p>
              {ticket.assignedTo ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {ticket.assignedTo}
                  </span>
                  <button
                    onClick={() => setIsAssignModalOpen(true)}
                    className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                  >
                    Reassign
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAssignModalOpen(true)}
                  className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                >
                  Assign ticket
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <AssignTicketModal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        onAssign={handleAssign}
      />
    </>
  );
}
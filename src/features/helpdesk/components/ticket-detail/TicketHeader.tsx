import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Phone } from 'lucide-react';
import { Ticket } from '../../types';
import TicketStatusBadge from '../TicketStatusBadge';
import TicketPriorityBadge from '../TicketPriorityBadge';
import AudioCallModal from './AudioCallModal';

interface TicketHeaderProps {
  ticket: Ticket;
}

export default function TicketHeader({ ticket }: TicketHeaderProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <>
      <div>
        <Link
          to="/helpdesk"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to tickets
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
              {ticket.title}
            </h1>
            <div className="mt-2 flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Ticket #{ticket.id}
              </span>
              <TicketStatusBadge status={ticket.status} />
              <TicketPriorityBadge priority={ticket.priority} />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsCallModalOpen(true)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Start Call</span>
            </button>
            
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors">
              Update Status
            </button>
          </div>
        </div>
      </div>

      <AudioCallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        ticket={ticket}
      />
    </>
  );
}
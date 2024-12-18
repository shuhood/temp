import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Ticket } from '../types';
import { formatDistanceToNow } from '../../../utils/dateUtils';
import TicketStatusBadge from './TicketStatusBadge';
import TicketPriorityBadge from './TicketPriorityBadge';

interface TicketRowProps {
  ticket: Ticket;
}

export default function TicketRow({ ticket }: TicketRowProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/helpdesk/tickets/${ticket.id}`)}
      className="w-full p-4 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors text-left group"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
              {ticket.title}
            </h3>
            <TicketStatusBadge status={ticket.status} />
            <TicketPriorityBadge priority={ticket.priority} />
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {ticket.description}
          </p>
          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span>#{ticket.id}</span>
            <span>•</span>
            <span>Created {formatDistanceToNow(ticket.createdAt)}</span>
            <span>•</span>
            <span>Updated {formatDistanceToNow(ticket.updatedAt)}</span>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
      </div>
    </button>
  );
}
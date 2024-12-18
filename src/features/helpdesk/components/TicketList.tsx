import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Ticket } from '../types';
import TicketRow from './TicketRow';

interface TicketListProps {
  tickets: Ticket[];
}

export default function TicketList({ tickets }: TicketListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
      <div className="p-4 border-b border-gray-100 dark:border-dark-100">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="px-4 py-2 border border-gray-200 dark:border-dark-100 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-dark-100">
        {filteredTickets.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            No tickets found
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <TicketRow key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  );
}
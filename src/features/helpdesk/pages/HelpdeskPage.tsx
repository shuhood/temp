import React from 'react';
import TicketList from '../components/TicketList';
import TicketStats from '../components/TicketStats';
import { mockTickets } from '../data/mockData';

export default function HelpdeskPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
            Helpdesk
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track and manage your support tickets
          </p>
        </div>
        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors flex items-center space-x-2">
          <span>Create Ticket</span>
        </button>
      </div>

      <TicketStats />
      
      <div className="mt-8">
        <TicketList tickets={mockTickets} />
      </div>
    </div>
  );
}
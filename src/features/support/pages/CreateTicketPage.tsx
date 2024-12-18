import React from 'react';
import CreateTicketForm from '../components/CreateTicketForm';
import { categories } from '../data/mockData';

export default function CreateTicketPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
          Create Support Ticket
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Submit a new support request and we'll help you resolve it
        </p>
      </div>

      <div className="bg-white dark:bg-dark-200 rounded-lg shadow-sm border border-gray-100 dark:border-dark-100">
        <CreateTicketForm categories={categories} />
      </div>
    </div>
  );
}
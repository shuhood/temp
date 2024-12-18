import React from 'react';
import { useParams } from 'react-router-dom';
import TicketHeader from '../components/ticket-detail/TicketHeader';
import TicketInfo from '../components/ticket-detail/TicketInfo';
import TicketTimeline from '../components/ticket-detail/TicketTimeline';
import TicketReplyForm from '../components/ticket-detail/TicketReplyForm';
import RelatedArticles from '../components/ticket-detail/RelatedArticles';
import { mockTickets } from '../data/mockData';

export default function TicketDetailPage() {
  const { id } = useParams();
  const ticket = mockTickets.find(t => t.id === id);

  if (!ticket) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Ticket not found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <TicketHeader ticket={ticket} />
      
      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <TicketTimeline ticket={ticket} />
          <TicketReplyForm ticketId={ticket.id} />
        </div>
        
        <div className="col-span-1 space-y-6">
          <TicketInfo ticket={ticket} />
          <RelatedArticles ticket={ticket} />
        </div>
      </div>
    </div>
  );
}
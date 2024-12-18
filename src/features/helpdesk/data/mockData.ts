import { Ticket } from '../types';

export const mockTickets: Ticket[] = [
  {
    id: 'TKT-001',
    title: 'Unable to access email',
    description: 'Getting error message when trying to access company email',
    status: 'open',
    priority: 'high',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    updatedAt: new Date(Date.now() - 1000 * 60 * 30),
    category: 'Email'
  },
  {
    id: 'TKT-002',
    title: 'Printer not working',
    description: 'Office printer showing offline status',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
    updatedAt: new Date(Date.now() - 1000 * 60 * 45),
    category: 'Hardware'
  },
  {
    id: 'TKT-003',
    title: 'Password reset request',
    description: 'Need to reset system password',
    status: 'resolved',
    priority: 'low',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 23),
    category: 'Account'
  }
];
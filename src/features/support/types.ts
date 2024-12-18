import { LucideIcon } from 'lucide-react';

export interface SystemModule {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface SystemDocument {
  id: string;
  moduleId: string;
  title: string;
  reference: string;
  url: string;
}

export interface Link {
  title: string;
  url: string;
}

export type TicketPriority = 'low' | 'medium' | 'high';

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: TicketPriority;
  assignedTo?: string;
  links?: Link[];
  systemDocuments?: SystemDocument[];
  attachments?: File[];
  createdAt: Date;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
}
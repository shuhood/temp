import { 
  FileText, Users, Building2, CreditCard, 
  Briefcase, GraduationCap, Calendar 
} from 'lucide-react';
import { SystemModule, SystemDocument } from '../types';

export const mockModules: SystemModule[] = [
  { id: 'hr', name: 'Human Resources', icon: Users },
  { id: 'finance', name: 'Finance', icon: CreditCard },
  { id: 'projects', name: 'Projects', icon: Briefcase },
  { id: 'training', name: 'Training', icon: GraduationCap },
  { id: 'facilities', name: 'Facilities', icon: Building2 },
  { id: 'documents', name: 'Documents', icon: FileText },
  { id: 'calendar', name: 'Calendar', icon: Calendar }
];

export const mockDocuments: SystemDocument[] = [
  {
    id: '1',
    moduleId: 'hr',
    title: 'Employee Handbook 2024',
    reference: 'HR-DOC-001',
    url: '/documents/hr/handbook-2024'
  },
  {
    id: '2',
    moduleId: 'hr',
    title: 'Leave Policy',
    reference: 'HR-POL-002',
    url: '/documents/hr/leave-policy'
  },
  {
    id: '3',
    moduleId: 'finance',
    title: 'Expense Policy',
    reference: 'FIN-POL-001',
    url: '/documents/finance/expense-policy'
  },
  {
    id: '4',
    moduleId: 'finance',
    title: 'Travel Guidelines',
    reference: 'FIN-POL-002',
    url: '/documents/finance/travel-guidelines'
  },
  {
    id: '5',
    moduleId: 'projects',
    title: 'Project Management Guidelines',
    reference: 'PRJ-DOC-001',
    url: '/documents/projects/pm-guidelines'
  }
];
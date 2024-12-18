import { User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    jobTitle: 'Senior Developer',
    department: 'Engineering',
    role: 'Admin',
    status: 'active'
  },
  {
    id: '2',
    name: 'Michael Johnson',
    email: 'michael.johnson@company.com',
    jobTitle: 'Project Manager',
    department: 'Project Management',
    role: 'Manager',
    status: 'active'
  },
  {
    id: '3',
    name: 'Emily Brown',
    email: 'emily.brown@company.com',
    jobTitle: 'HR Specialist',
    department: 'Human Resources',
    role: 'User',
    status: 'active'
  },
  {
    id: '4',
    name: 'David Lee',
    email: 'david.lee@company.com',
    jobTitle: 'Support Specialist',
    department: 'Customer Support',
    role: 'User',
    status: 'inactive'
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    email: 'lisa.anderson@company.com',
    jobTitle: 'Financial Analyst',
    department: 'Finance',
    role: 'User',
    status: 'active'
  }
];
import {
  Users, Briefcase, GraduationCap, Clock, CreditCard,
  Building2, CalendarDays, Dumbbell, 
  LineChart, Receipt, 
  Home, Building, ParkingCircle, 
  TicketCheck, HelpCircle, MonitorSmartphone,
  HeadphonesIcon, UserPlus, MessagesSquare
} from 'lucide-react';
import { CategoryType } from '../types/menu';

// Icons for HR menu items
export const hrIcons = {
  'emp-type': Users,
  'emp-levels': Briefcase,
  'pay-grade': CreditCard,
  'academic-levels': GraduationCap,
  'duty-shifts': Clock,
  'structure-types': Building2,
  'org-structure': Building2,
  'job-positions': Briefcase,
  'job-designations': Briefcase,
  'hiring-requests': UserPlus,
  'job-announcement': MessagesSquare,
  'job-applications': Users,
  'roster': CalendarDays,
  'daily-attendance': Clock,
  'time-off': CalendarDays,
  'overtime': Clock,
  'calendar': CalendarDays,
  'allowance-types': CreditCard,
  'compensation': CreditCard,
  'deductions': CreditCard,
  'hire-purchase': CreditCard,
  'pay-cycles': CalendarDays
};

// Icons for Organization menu items
export const orgIcons = {
  'public-announcements': MessagesSquare,
  'staff-announcements': MessagesSquare,
  'events': CalendarDays,
  'policies': Building2,
  'sop': Building2,
  'management': Users,
  'board': Users,
  'hods': Users,
  'hos': Users,
  'staff-gym': Dumbbell,
  'day-care': Users,
  'teams': Users
};

// Icons for Finance menu items
export const financeIcons = {
  'chart-accounts': LineChart,
  'ledgers': Receipt,
  'ledger-records': Receipt,
  'payment-receipts': CreditCard,
  'payment-allocations': CreditCard,
  'payment-adjustments': CreditCard
};

// Icons for Real Estate menu items
export const realEstateIcons = {
  'lots': ParkingCircle,
  'buildings': Building,
  'apartments': Home,
  'developer-buildings': Building,
  'theme-parks': ParkingCircle,
  'tourist-properties': Building,
  'service-requests': TicketCheck,
  'customer-requests': HeadphonesIcon,
  'maintenance-logs': Receipt
};

// Icons for IT menu items
export const itIcons = {
  'submit-ticket': TicketCheck,
  'ticket-list': Receipt,
  'ticket-groups': Users,
  'knowledgebase': HelpCircle,
  'faqs': HelpCircle,
  'finance-software': MonitorSmartphone,
  'hr-software': MonitorSmartphone,
  'admin-software': MonitorSmartphone,
  'crm-software': MonitorSmartphone
};

// Icons for CRM menu items
export const crmIcons = {
  'register-customer': UserPlus,
  'support-center': HeadphonesIcon,
  'support-incident': TicketCheck
};

export const categoryIcons: Record<CategoryType, Record<string, any>> = {
  hr: hrIcons,
  org: orgIcons,
  finance: financeIcons,
  realestate: realEstateIcons,
  it: itIcons,
  crm: crmIcons
};
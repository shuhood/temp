import { CategoryMenu } from '../types/menu';

export const menuData: Record<string, CategoryMenu> = {
  hr: {
    id: 'hr',
    label: 'Human Resource',
    sections: [
      {
        id: 'master',
        title: 'Master Data',
        items: [
          { id: 'emp-type', label: 'Employment Type' },
          { id: 'emp-levels', label: 'Employment Levels' },
          { id: 'pay-grade', label: 'Pay Grade' },
          { id: 'academic-levels', label: 'Academic Levels' },
          { id: 'duty-shifts', label: 'Duty Shifts' }
        ]
      },
      {
        id: 'planning',
        title: 'Planning',
        items: [
          { id: 'structure-types', label: 'Structure Types' },
          { id: 'org-structure', label: 'Organization Structure' },
          { id: 'job-positions', label: 'Job Positions' },
          { id: 'job-designations', label: 'Job Designations' }
        ]
      },
      {
        id: 'recruitment',
        title: 'Recruitment',
        items: [
          { id: 'hiring-requests', label: 'Hiring Requests' },
          { id: 'job-announcement', label: 'Job Announcement' },
          { id: 'job-applications', label: 'Job Applications' }
        ]
      },
      {
        id: 'attendance',
        title: 'Time Attendance',
        items: [
          { id: 'roster', label: 'Roster' },
          { id: 'daily-attendance', label: 'Daily Attendance' },
          { id: 'time-off', label: 'Time Off Requests' },
          { id: 'overtime', label: 'Overtime' },
          { id: 'calendar', label: 'Calendar' }
        ]
      },
      {
        id: 'payroll',
        title: 'Payroll',
        items: [
          { id: 'allowance-types', label: 'Allowance Types' },
          { id: 'compensation', label: 'Compensation Structure' },
          { id: 'deductions', label: 'Deductions' },
          { id: 'hire-purchase', label: 'Hire Purchase' },
          { id: 'pay-cycles', label: 'Pay Cycles' }
        ]
      }
    ]
  },
  org: {
    id: 'org',
    label: 'Organization',
    sections: [
      {
        id: 'general',
        title: 'General',
        items: [
          { id: 'public-announcements', label: 'Public Announcements' },
          { id: 'staff-announcements', label: 'Staff Announcements' },
          { id: 'events', label: 'Events' }
        ]
      },
      {
        id: 'office',
        title: 'Office Environment',
        items: [
          { id: 'policies', label: 'Policies' },
          { id: 'sop', label: 'Standard Operating Procedures' },
          { id: 'management', label: 'Management' },
          { id: 'board', label: 'Board' },
          { id: 'hods', label: 'HODs' },
          { id: 'hos', label: 'HOS' }
        ]
      },
      {
        id: 'recreational',
        title: 'Recreational',
        items: [
          { id: 'staff-gym', label: 'Staff Gym' },
          { id: 'day-care', label: 'Day Care' },
          { id: 'teams', label: 'Different Teams' }
        ]
      }
    ]
  },
  finance: {
    id: 'finance',
    label: 'Finance',
    sections: [
      {
        id: 'accounting',
        title: 'Accounting',
        items: [
          { id: 'chart-accounts', label: 'Chart of Accounts' },
          { id: 'ledgers', label: 'Ledgers' },
          { id: 'ledger-records', label: 'Ledger Records' }
        ]
      },
      {
        id: 'payments',
        title: 'Payments',
        items: [
          { id: 'payment-receipts', label: 'Payment Receipts' },
          { id: 'payment-allocations', label: 'Payment Allocations' },
          { id: 'payment-adjustments', label: 'Payment Adjustments' }
        ]
      }
    ]
  },
  realestate: {
    id: 'realestate',
    label: 'Real Estate',
    sections: [
      {
        id: 'property',
        title: 'Property Management',
        items: [
          { id: 'lots', label: 'Lots' },
          { id: 'buildings', label: 'Buildings' },
          { id: 'apartments', label: 'Apartments' }
        ]
      },
      {
        id: 'investor',
        title: 'Investor Projects',
        items: [
          { id: 'developer-buildings', label: 'Developer Buildings' },
          { id: 'theme-parks', label: 'Theme Parks' },
          { id: 'tourist-properties', label: 'Tourist Properties' }
        ]
      },
      {
        id: 'facility',
        title: 'Facility Management',
        items: [
          { id: 'service-requests', label: 'Request for Service' },
          { id: 'customer-requests', label: 'Customer Requests' },
          { id: 'maintenance-logs', label: 'Maintenance Logs' }
        ]
      }
    ]
  },
  it: {
    id: 'it',
    label: 'Information Technology',
    sections: [
      {
        id: 'helpdesk',
        title: 'Help Desk',
        items: [
          { id: 'submit-ticket', label: 'Submit Ticket' },
          { id: 'ticket-list', label: 'Ticket List' },
          { id: 'ticket-groups', label: 'Ticket Groups' },
          { id: 'knowledgebase', label: 'Knowledgebase' },
          { id: 'faqs', label: 'FAQs' }
        ]
      },
      {
        id: 'solutions',
        title: 'Software Solutions',
        items: [
          { id: 'finance-software', label: 'Finance' },
          { id: 'hr-software', label: 'HR' },
          { id: 'admin-software', label: 'Admin' },
          { id: 'crm-software', label: 'Customer Relations' }
        ]
      }
    ]
  },
  crm: {
    id: 'crm',
    label: 'Customer Relations',
    sections: [
      {
        id: 'customer',
        title: 'Customer Management',
        items: [
          { id: 'register-customer', label: 'Register Customer' },
          { id: 'support-center', label: 'Customer Support Center' },
          { id: 'support-incident', label: 'Create a Support Incident' }
        ]
      }
    ]
  }
};
export const departments = [
  {
    id: 'it',
    name: 'IT Department',
    categories: [
      {
        id: 'hardware',
        name: 'Hardware Issues',
        description: 'Computer, printer, and other device issues'
      },
      {
        id: 'software',
        name: 'Software Issues',
        description: 'Issues with company applications and software'
      },
      {
        id: 'network',
        name: 'Network Issues',
        description: 'Internet, VPN, and network-related issues'
      }
    ]
  },
  {
    id: 'hr',
    name: 'Human Resources',
    categories: [
      {
        id: 'payroll',
        name: 'Payroll',
        description: 'Salary, benefits, and compensation issues'
      },
      {
        id: 'leave',
        name: 'Leave Management',
        description: 'Leave requests and attendance issues'
      },
      {
        id: 'recruitment',
        name: 'Recruitment',
        description: 'Hiring and recruitment related issues'
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance',
    categories: [
      {
        id: 'expense',
        name: 'Expense Claims',
        description: 'Issues with expense claims and reimbursements'
      },
      {
        id: 'invoice',
        name: 'Invoicing',
        description: 'Invoice related issues'
      },
      {
        id: 'payment',
        name: 'Payments',
        description: 'Payment processing issues'
      }
    ]
  }
];

// Flattened categories for easier access
export const categories = departments.reduce((acc, dept) => [
  ...acc,
  ...dept.categories.map(cat => ({
    ...cat,
    departmentId: dept.id,
    departmentName: dept.name
  }))
], [] as Array<{
  id: string;
  name: string;
  description: string;
  departmentId: string;
  departmentName: string;
}>);
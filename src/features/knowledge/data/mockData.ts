import { 
  Settings, Monitor, Shield, Users, Database, Cloud, 
  Smartphone, Mail, FileText, HelpCircle 
} from 'lucide-react';

export const categories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics and get up to speed quickly',
    icon: HelpCircle,
    articleCount: 12
  },
  {
    id: 'account-settings',
    title: 'Account Settings',
    description: 'Manage your account and preferences',
    icon: Settings,
    articleCount: 8
  },
  {
    id: 'system-access',
    title: 'System Access',
    description: 'Access control and permissions',
    icon: Shield,
    articleCount: 15
  },
  {
    id: 'applications',
    title: 'Applications',
    description: 'Learn about our software applications',
    icon: Monitor,
    articleCount: 20
  },
  {
    id: 'user-management',
    title: 'User Management',
    description: 'Managing users and roles',
    icon: Users,
    articleCount: 10
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Database management and queries',
    icon: Database,
    articleCount: 18
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud infrastructure and services',
    icon: Cloud,
    articleCount: 14
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Mobile application guides',
    icon: Smartphone,
    articleCount: 9
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Email configuration and troubleshooting',
    icon: Mail,
    articleCount: 11
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'Document management system',
    icon: FileText,
    articleCount: 16
  }
];

export const popularArticles = [
  {
    id: '1',
    title: 'How to Reset Your Password',
    excerpt: 'Step-by-step guide to reset your account password',
    category: 'account-settings',
    views: 1250,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: '2',
    title: 'Setting Up Two-Factor Authentication',
    excerpt: 'Enhance your account security with 2FA',
    category: 'security',
    views: 980,
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: '3',
    title: 'Getting Started with the Dashboard',
    excerpt: 'Learn how to navigate and use the main dashboard',
    category: 'getting-started',
    views: 1500,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: '4',
    title: 'Managing User Permissions',
    excerpt: 'Guide to user roles and access control',
    category: 'user-management',
    views: 850,
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-02-10')
  }
];
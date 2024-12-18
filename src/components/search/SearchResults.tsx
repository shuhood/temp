import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Building2, CreditCard, 
  FileText, BookOpen, HelpCircle, Headphones,
  ChevronRight
} from 'lucide-react';

interface SearchResultsProps {
  query: string;
  onClose: () => void;
}

const menuLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
  { icon: Users, label: 'Human Resources', to: '/hr' },
  { icon: Building2, label: 'Organization', to: '/org' },
  { icon: CreditCard, label: 'Finance', to: '/finance' }
];

const records = [
  { icon: FileText, label: 'Employment Types', to: '/hr/employment-type' },
  { icon: FileText, label: 'Leave Requests', to: '/hr/leave-requests' },
  { icon: FileText, label: 'Departments', to: '/org/departments' },
  { icon: FileText, label: 'Projects', to: '/projects' }
];

const documentation = [
  { icon: BookOpen, label: 'Knowledge Base', to: '/knowledge' },
  { icon: HelpCircle, label: 'FAQ', to: '/faq' },
  { icon: Headphones, label: 'Support', to: '/support/new' }
];

export default function SearchResults({ query, onClose }: SearchResultsProps) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-6">
        {/* Menu Links */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Menu Links
          </h3>
          <div className="space-y-2">
            {menuLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 group"
              >
                <div className="flex items-center">
                  <link.icon className="h-4 w-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {link.label}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Records */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Records
          </h3>
          <div className="space-y-2">
            {records.map((record) => (
              <Link
                key={record.to}
                to={record.to}
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 group"
              >
                <div className="flex items-center">
                  <record.icon className="h-4 w-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {record.label}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400" />
              </Link>
            ))}
          </div>
        </div>

        {/* Documentation & Help */}
        <div className="col-span-2">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Documentation & Help
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {documentation.map((doc) => (
              <Link
                key={doc.to}
                to={doc.to}
                onClick={onClose}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 group"
              >
                <div className="flex items-center">
                  <doc.icon className="h-4 w-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400" />
                  <span className="ml-3 text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                    {doc.label}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-500 dark:group-hover:text-green-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
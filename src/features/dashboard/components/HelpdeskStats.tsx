import React from 'react';
import { Clock, CheckCircle2, AlertTriangle, BarChart2, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Open Tickets',
    value: '12',
    icon: Clock,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    label: 'Resolved Today',
    value: '8',
    icon: CheckCircle2,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    label: 'High Priority',
    value: '3',
    icon: AlertTriangle,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    label: 'Avg Response Time',
    value: '2.5h',
    icon: BarChart2,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  }
];

export default function HelpdeskStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100 p-6"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
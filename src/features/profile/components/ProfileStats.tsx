import React from 'react';
import { Clock, CheckCircle2, Calendar, Award } from 'lucide-react';

const stats = [
  {
    label: 'Attendance Rate',
    value: '98%',
    icon: Clock,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    label: 'Tasks Completed',
    value: '156',
    icon: CheckCircle2,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    label: 'Leave Balance',
    value: '12 days',
    icon: Calendar,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    label: 'Performance Rating',
    value: '4.8/5',
    icon: Award,
    color: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-50 dark:bg-yellow-900/20'
  }
];

export default function ProfileStats() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100 p-4"
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${stat.bg}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
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
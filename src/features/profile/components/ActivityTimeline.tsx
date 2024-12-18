import React from 'react';
import { Clock, CheckCircle2, FileText, MessageCircle } from 'lucide-react';
import { formatDistanceToNow } from '../../../utils/dateUtils';

const activities = [
  {
    id: 1,
    type: 'task',
    title: 'Completed Project Review',
    description: 'Reviewed and approved Q1 project deliverables',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    icon: CheckCircle2,
    iconColor: 'text-green-600 dark:text-green-400',
    iconBg: 'bg-green-100 dark:bg-green-900/20'
  },
  {
    id: 2,
    type: 'document',
    title: 'Updated Documentation',
    description: 'Added new sections to the employee handbook',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    icon: FileText,
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-100 dark:bg-blue-900/20'
  },
  {
    id: 3,
    type: 'comment',
    title: 'Commented on Ticket',
    description: 'Provided feedback on IT support ticket #1234',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48),
    icon: MessageCircle,
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-100 dark:bg-purple-900/20'
  }
];

export default function ActivityTimeline() {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
      <div className="p-4 border-b border-gray-100 dark:border-dark-100">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
      </div>
      <div className="p-4">
        <div className="space-y-6">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${activity.iconBg}`}>
                  <Icon className={`h-5 w-5 ${activity.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDistanceToNow(activity.timestamp)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
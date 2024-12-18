import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const mockTasks = [
  {
    id: 1,
    title: 'Review employee leave requests',
    priority: 'high',
    deadline: '2h remaining',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Complete monthly attendance report',
    priority: 'medium',
    deadline: '1d remaining',
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Update department policies',
    priority: 'low',
    deadline: '3d remaining',
    status: 'completed'
  },
  {
    id: 4,
    title: 'Schedule team meeting',
    priority: 'medium',
    deadline: '5h remaining',
    status: 'pending'
  }
];

const priorityColors = {
  high: 'text-red-500 dark:text-red-400',
  medium: 'text-yellow-500 dark:text-yellow-400',
  low: 'text-green-500 dark:text-green-400'
};

export default function TaskList() {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-sm border border-gray-100 dark:border-dark-100">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Tasks
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your pending tasks and deadlines
            </p>
          </div>
          <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
            View All
          </button>
        </div>

        <div className="space-y-4">
          {mockTasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {task.status === 'completed' ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5" />
                  ) : (
                    <Clock className="h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5" />
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      {task.title}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`text-xs ${priorityColors[task.priority]}`}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        • {task.deadline}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-dark-200 rounded-full">
                  <AlertCircle className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
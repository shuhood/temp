import React from 'react';
import { TicketCheck, Clock, CheckCircle2, AlertTriangle, BarChart2, TrendingUp } from 'lucide-react';

const mockData = {
  totalTickets: 156,
  openTickets: 42,
  resolvedToday: 18,
  criticalIssues: 3,
  avgResponseTime: '2.5h',
  resolutionRate: '+12%'
};

export default function HelpdeskStats() {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-sm border border-gray-100 dark:border-dark-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Helpdesk Overview
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Today's support metrics
            </p>
          </div>
          <BarChart2 className="h-6 w-6 text-green-500 dark:text-green-400" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <TicketCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Total Tickets</span>
                </div>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{mockData.totalTickets}</p>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Open Tickets</span>
                </div>
                <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{mockData.openTickets}</p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Resolved Today</span>
                </div>
                <p className="text-2xl font-bold text-green-700 dark:text-green-300">{mockData.resolvedToday}</p>
              </div>

              <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <span className="text-xs font-medium text-red-600 dark:text-red-400">Critical Issues</span>
                </div>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">{mockData.criticalIssues}</p>
              </div>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-1 flex flex-col justify-between gap-4">
            <div className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Avg Response Time</span>
              </div>
              <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">{mockData.avgResponseTime}</p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Resolution Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-300">{mockData.resolutionRate}</p>
                <span className="text-sm text-green-600 dark:text-green-400">vs last week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
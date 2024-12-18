import React from 'react';
import { BarChart, Users, TrendingUp } from 'lucide-react';

const mockData = {
  present: 85,
  absent: 10,
  late: 5,
  trend: '+2.5%'
};

export default function AttendanceChart() {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-sm border border-gray-100 dark:border-dark-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Daily Attendance
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Today's attendance overview
            </p>
          </div>
          <BarChart className="h-6 w-6 text-green-500 dark:text-green-400" />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium text-green-600 dark:text-green-400">Present</span>
            </div>
            <p className="text-2xl font-bold text-green-700 dark:text-green-300">{mockData.present}%</p>
          </div>
          
          <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-5 w-5 text-red-600 dark:text-red-400" />
              <span className="text-xs font-medium text-red-600 dark:text-red-400">Absent</span>
            </div>
            <p className="text-2xl font-bold text-red-700 dark:text-red-300">{mockData.absent}%</p>
          </div>
          
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">Late</span>
            </div>
            <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{mockData.late}%</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-100">
          <span className="text-sm text-gray-600 dark:text-gray-300">Trend vs. last week</span>
          <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">{mockData.trend}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
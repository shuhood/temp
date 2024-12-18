import React from 'react';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import WeeklyAttendance from '../components/dashboard/WeeklyAttendance';
import TaskList from '../components/dashboard/TaskList';
import HelpdeskStats from '../components/dashboard/HelpdeskStats';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
          <div className="mt-6">
            <HelpdeskStats />
          </div>
          <div className="mt-6">
            <WeeklyAttendance />
          </div>
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </div>
  );
}
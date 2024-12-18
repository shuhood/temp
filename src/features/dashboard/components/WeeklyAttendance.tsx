import React from 'react';
import { Clock, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

const mockWeeklyAttendance = [
  {
    date: '2024-03-18',
    day: 'Monday',
    checkIn: '08:55',
    checkOut: '17:30',
    status: 'present',
    hours: '8.5'
  },
  {
    date: '2024-03-19',
    day: 'Tuesday',
    checkIn: '09:02',
    checkOut: '17:45',
    status: 'late',
    hours: '8.7'
  },
  {
    date: '2024-03-20',
    day: 'Wednesday',
    checkIn: '08:45',
    checkOut: '17:15',
    status: 'present',
    hours: '8.5'
  },
  {
    date: '2024-03-21',
    day: 'Thursday',
    checkIn: '08:50',
    checkOut: '17:20',
    status: 'present',
    hours: '8.5'
  },
  {
    date: '2024-03-22',
    day: 'Friday',
    checkIn: '--:--',
    checkOut: '--:--',
    status: 'absent',
    hours: '0'
  }
];

const statusColors = {
  present: 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20',
  late: 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20',
  absent: 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
};

const StatusIcon = ({ status }: { status: string }) => {
  switch (status) {
    case 'present':
      return <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />;
    case 'late':
      return <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />;
    case 'absent':
      return <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />;
    default:
      return null;
  }
};

export default function WeeklyAttendance() {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg shadow-sm border border-gray-100 dark:border-dark-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              My Week's Attendance
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This week's attendance record
            </p>
          </div>
          <Clock className="h-6 w-6 text-green-500 dark:text-green-400" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium">Day</th>
                <th className="pb-3 font-medium">Check In</th>
                <th className="pb-3 font-medium">Check Out</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-dark-100">
              {mockWeeklyAttendance.map((record) => (
                <tr key={record.date} className="text-sm">
                  <td className="py-3 text-gray-900 dark:text-white">
                    {record.date}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    {record.day}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    {record.checkIn}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    {record.checkOut}
                  </td>
                  <td className="py-3">
                    <div className="flex items-center space-x-2">
                      <StatusIcon status={record.status} />
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${statusColors[record.status]}`}>
                        {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-right text-gray-900 dark:text-white font-medium">
                    {record.hours}h
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
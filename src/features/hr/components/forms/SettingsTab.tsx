```tsx
import React from 'react';
import { EmploymentType } from '../../types';

interface SettingsTabProps {
  type?: EmploymentType;
}

export default function SettingsTab({ type }: SettingsTabProps) {
  return (
    <div className="space-y-4">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="allowOvertime"
          defaultChecked={type?.allowOvertime}
          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Allow Overtime
        </span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="requireTimesheet"
          defaultChecked={type?.requireTimesheet}
          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Require Timesheet
        </span>
      </label>
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          name="autoApproval"
          defaultChecked={type?.autoApproval}
          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
        />
        <span className="text-sm text-gray-700 dark:text-gray-300">
          Enable Auto-Approval for Leave Requests
        </span>
      </label>
    </div>
  );
}
```
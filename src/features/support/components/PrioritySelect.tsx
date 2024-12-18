import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { TicketPriority } from '../types';
import ValidationError from './ValidationError';

const priorities: { value: TicketPriority; label: string; description: string }[] = [
  {
    value: 'low',
    label: 'Low',
    description: 'Minor issue, no immediate impact'
  },
  {
    value: 'medium',
    label: 'Medium',
    description: 'Moderate impact on work'
  },
  {
    value: 'high',
    label: 'High',
    description: 'Critical issue requiring immediate attention'
  }
];

interface PrioritySelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
}

export default function PrioritySelect({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required
}: PrioritySelectProps) {
  const showError = error && touched;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="space-y-3">
        {priorities.map((priority) => (
          <label
            key={priority.value}
            className={`
              flex items-start p-3 border rounded-lg cursor-pointer transition-colors
              ${value === priority.value
                ? 'border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20'
                : showError
                  ? 'border-red-500 dark:border-red-500'
                  : 'border-gray-200 dark:border-dark-100 hover:bg-gray-50 dark:hover:bg-dark-100'
              }
            `}
          >
            <input
              type="radio"
              name={name}
              value={priority.value}
              checked={value === priority.value}
              onChange={onChange}
              onBlur={onBlur}
              required={required}
              className="sr-only"
            />
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {priority.label}
                </span>
                {priority.value === 'high' && (
                  <AlertTriangle className="h-4 w-4 text-red-500 ml-2" />
                )}
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {priority.description}
              </p>
            </div>
            <span
              className={`
                h-4 w-4 mt-0.5 rounded-full border-2 flex items-center justify-center
                ${value === priority.value
                  ? 'border-green-500 dark:border-green-400 bg-green-500 dark:bg-green-400'
                  : 'border-gray-300 dark:border-gray-600'
                }
              `}
            >
              {value === priority.value && (
                <span className="h-2 w-2 rounded-full bg-white" />
              )}
            </span>
          </label>
        ))}
      </div>
      {showError && <ValidationError message={error} />}
    </div>
  );
}
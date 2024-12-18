import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ValidationError } from '../../../components/common/forms';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
}

export default function InputField({ label, icon: Icon, error, ...props }: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          {...props}
          className={`
            block w-full pl-10 pr-3 py-2 border rounded-lg bg-white dark:bg-dark-200 
            text-gray-900 dark:text-white placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent 
            transition-colors
            ${error 
              ? 'border-red-500 dark:border-red-500' 
              : 'border-gray-300 dark:border-gray-600'
            }
          `}
        />
      </div>
      {error && <ValidationError message={error} />}
    </div>
  );
}
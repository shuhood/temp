import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ValidationError from './ValidationError';
import { departments } from '../data/mockData';

interface CategorySelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
}

export default function CategorySelect({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required
}: CategorySelectProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const showError = error && touched;

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const deptId = e.target.value;
    setSelectedDepartment(deptId);
    // Reset category when department changes
    const event = {
      target: {
        name,
        value: ''
      }
    } as React.ChangeEvent<HTMLSelectElement>;
    onChange(event);
  };

  const selectedDeptCategories = departments.find(
    dept => dept.id === selectedDepartment
  )?.categories || [];

  const selectClassName = `
    w-full px-4 py-2 bg-white dark:bg-dark-200 
    border rounded-lg transition-colors appearance-none
    ${showError 
      ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
      : 'border-gray-200 dark:border-dark-100 focus:ring-green-500 dark:focus:ring-green-400'
    }
    focus:outline-none focus:ring-2 
    text-gray-900 dark:text-white
  `;

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Department
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            value={selectedDepartment}
            onChange={handleDepartmentChange}
            onBlur={onBlur}
            required={required}
            className={selectClassName}
          >
            <option value="">Select a department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {selectedDepartment && (
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <div className="relative">
            <select
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              required={required}
              className={selectClassName}
            >
              <option value="">Select a category</option>
              {selectedDeptCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          {value && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {selectedDeptCategories.find(cat => cat.id === value)?.description}
            </p>
          )}
        </div>
      )}

      {showError && <ValidationError message={error} />}
    </div>
  );
}
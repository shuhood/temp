import React from 'react';
import { ValidationError } from '../';
import PriorityOption from './PriorityOption';
import { usePriorityOptions } from '../../../hooks/usePriorityOptions';

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
  const priorities = usePriorityOptions();
  const showError = error && touched;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-3">
        {priorities.map((priority) => (
          <PriorityOption
            key={priority.value}
            priority={priority}
            isSelected={value === priority.value}
            showError={!!showError}
            onChange={(value) => onChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>)}
            onBlur={onBlur}
            name={name}
            required={required}
          />
        ))}
      </div>
      {showError && <ValidationError message={error} />}
    </div>
  );
}
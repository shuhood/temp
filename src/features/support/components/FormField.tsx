import React from 'react';
import ValidationError from './ValidationError';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  touched?: boolean;
  multiline?: boolean;
  rows?: number;
}

export default function FormField({ 
  label, 
  error,
  touched,
  multiline, 
  rows = 3,
  className = '',
  onBlur,
  required,
  ...props 
}: FormFieldProps) {
  const showError = error && touched;
  
  const inputClassName = `
    w-full px-4 py-2 bg-white dark:bg-dark-200 
    border rounded-lg transition-colors
    ${showError 
      ? 'border-red-500 dark:border-red-500 focus:ring-red-500 dark:focus:ring-red-500' 
      : 'border-gray-200 dark:border-dark-100 focus:ring-green-500 dark:focus:ring-green-400'
    }
    focus:outline-none focus:ring-2 
    text-gray-900 dark:text-white 
    placeholder-gray-500 dark:placeholder-gray-400
    ${className}
  `;

  const commonProps = {
    ...props,
    className: inputClassName,
    onBlur,
    required,
    noValidate: true, // Disable browser validation
    'aria-invalid': showError ? 'true' : 'false',
    'aria-describedby': showError ? `${props.name}-error` : undefined
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {multiline ? (
        <textarea
          {...commonProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          rows={rows}
        />
      ) : (
        <input {...commonProps} />
      )}
      {showError && (
        <ValidationError 
          message={error} 
          id={`${props.name}-error`}
        />
      )}
    </div>
  );
}
import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ValidationErrorProps {
  message: string;
  id?: string;
}

export default function ValidationError({ message, id }: ValidationErrorProps) {
  return (
    <div 
      className="flex items-start space-x-2 mt-1"
      id={id}
      role="alert"
    >
      <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
      <span className="text-sm text-red-600 dark:text-red-400">{message}</span>
    </div>
  );
}
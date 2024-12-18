import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidationError } from '../';

interface FormActionsProps {
  isSubmitting: boolean;
  submitError?: string;
}

export default function FormActions({ isSubmitting, submitError }: FormActionsProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-dark-100">
      <div>
        {submitError && (
          <ValidationError message={submitError} />
        )}
      </div>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={() => navigate('/helpdesk')}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Creating...' : 'Create Ticket'}
        </button>
      </div>
    </div>
  );
}
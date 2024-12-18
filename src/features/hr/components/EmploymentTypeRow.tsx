import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';
import { EmploymentType } from '../types';
import { ActionButton } from './ActionButton';
import StatusBadge from './StatusBadge';

interface EmploymentTypeRowProps {
  type: EmploymentType;
  onEdit: () => void;
}

export default function EmploymentTypeRow({ type, onEdit }: EmploymentTypeRowProps) {
  const handleView = () => {
    console.log('View employment type:', type.id);
  };

  const handleDelete = () => {
    console.log('Delete employment type:', type.id);
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors">
      <div className="col-span-2">
        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 dark:bg-dark-100 text-gray-800 dark:text-gray-200 text-sm font-medium">
          {type.code}
        </span>
      </div>
      <div className="col-span-3 font-medium text-gray-900 dark:text-white">
        {type.name}
      </div>
      <div className="col-span-3 text-gray-500 dark:text-gray-400 text-sm">
        {type.description}
      </div>
      <div className="col-span-2">
        <StatusBadge status={type.status} />
      </div>
      <div className="col-span-2 flex items-center space-x-2">
        <ActionButton
          icon={Eye}
          onClick={handleView}
          title="View"
          className="hover:text-green-600 dark:hover:text-green-400"
        />
        <ActionButton
          icon={Edit2}
          onClick={onEdit}
          title="Edit"
          className="hover:text-green-600 dark:hover:text-green-400"
        />
        <ActionButton
          icon={Trash2}
          onClick={handleDelete}
          title="Delete"
          className="hover:text-red-600 dark:hover:text-red-400"
        />
      </div>
    </div>
  );
}
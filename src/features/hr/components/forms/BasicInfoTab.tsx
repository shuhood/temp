```tsx
import React from 'react';
import { FormField } from '../../../../components/common/forms';
import { EmploymentType } from '../../types';

interface BasicInfoTabProps {
  type?: EmploymentType;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function BasicInfoTab({ type, errors, touched, onBlur }: BasicInfoTabProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <FormField
          label="Code"
          name="code"
          defaultValue={type?.code}
          error={errors.code}
          touched={touched.code}
          onBlur={onBlur}
          required
          placeholder="Enter code"
        />
        <FormField
          label="Name"
          name="name"
          defaultValue={type?.name}
          error={errors.name}
          touched={touched.name}
          onBlur={onBlur}
          required
          placeholder="Enter name"
        />
      </div>
      <FormField
        label="Description"
        name="description"
        defaultValue={type?.description}
        error={errors.description}
        touched={touched.description}
        onBlur={onBlur}
        multiline
        rows={3}
        required
        placeholder="Enter description"
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Status
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="active"
              defaultChecked={type?.status !== 'inactive'}
              className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Active</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="status"
              value="inactive"
              defaultChecked={type?.status === 'inactive'}
              className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">Inactive</span>
          </label>
        </div>
      </div>
    </div>
  );
}
```
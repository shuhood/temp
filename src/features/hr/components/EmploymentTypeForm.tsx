```tsx
import React, { useState } from 'react';
import { X, Info, FileText, Settings } from 'lucide-react';
import { EmploymentType } from '../types';
import { Tab, BasicInfoTab, DetailsTab, SettingsTab } from './forms';

interface EmploymentTypeFormProps {
  type?: EmploymentType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<EmploymentType>) => void;
}

type TabType = 'basic' | 'details' | 'settings';

export default function EmploymentTypeForm({ type, isOpen, onClose, onSubmit }: EmploymentTypeFormProps) {
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const isEditing = !!type;

  const validateForm = (formData: FormData): Record<string, string> => {
    const errors: Record<string, string> = {};
    
    const code = formData.get('code') as string;
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    if (!code?.trim()) {
      errors.code = 'Code is required';
    }

    if (!name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!description?.trim()) {
      errors.description = 'Description is required';
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched(Object.keys(validationErrors).reduce((acc, key) => ({
        ...acc,
        [key]: true
      }), {}));
      return;
    }

    const data = {
      code: formData.get('code') as string,
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      status: formData.get('status') as 'active' | 'inactive',
      department: formData.get('department') as string,
      category: formData.get('category') as string,
      workHours: formData.get('workHours') as string,
      benefits: formData.get('benefits') as string,
      notes: formData.get('notes') as string,
      allowOvertime: formData.get('allowOvertime') === 'true',
      requireTimesheet: formData.get('requireTimesheet') === 'true',
      autoApproval: formData.get('autoApproval') === 'true',
    };

    onSubmit(data);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40" onClick={onClose} />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-dark-200 rounded-lg shadow-xl w-full max-w-2xl">
          <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-dark-100">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {isEditing ? 'Edit Employment Type' : 'Add Employment Type'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="flex border-b border-gray-100 dark:border-dark-100">
            <Tab
              icon={Info}
              label="Basic Info"
              isActive={activeTab === 'basic'}
              onClick={() => setActiveTab('basic')}
            />
            <Tab
              icon={FileText}
              label="Additional Details"
              isActive={activeTab === 'details'}
              onClick={() => setActiveTab('details')}
            />
            <Tab
              icon={Settings}
              label="Settings"
              isActive={activeTab === 'settings'}
              onClick={() => setActiveTab('settings')}
            />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="p-6 space-y-6">
              {activeTab === 'basic' && (
                <BasicInfoTab
                  type={type}
                  errors={errors}
                  touched={touched}
                  onBlur={handleBlur}
                />
              )}

              {activeTab === 'details' && (
                <DetailsTab type={type} />
              )}

              {activeTab === 'settings' && (
                <SettingsTab type={type} />
              )}
            </div>

            <div className="flex items-center justify-between gap-4 p-6 border-t border-gray-100 dark:border-dark-100">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span>Required fields must be filled</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 rounded-lg transition-colors"
                >
                  {isEditing ? 'Save Changes' : 'Create Type'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
```
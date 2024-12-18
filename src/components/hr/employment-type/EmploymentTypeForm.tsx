import React, { useState } from 'react';
import { X, Info, FileText, Settings } from 'lucide-react';
import { EmploymentType } from '../../../types/employmentType';

interface EmploymentTypeFormProps {
  type?: EmploymentType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<EmploymentType>) => void;
}

type TabType = 'basic' | 'details' | 'settings';

interface TabProps {
  icon: typeof Info;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function Tab({ icon: Icon, label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'text-green-600 dark:text-green-400 border-green-600 dark:border-green-400'
          : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-green-600 dark:hover:text-green-400'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}

export default function EmploymentTypeForm({ type, isOpen, onClose, onSubmit }: EmploymentTypeFormProps) {
  const [activeTab, setActiveTab] = useState<TabType>('basic');
  const isEditing = !!type;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40" onClick={onClose} />

      {/* Modal */}
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

          {/* Tabs */}
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

          <form onSubmit={handleSubmit}>
            <div className="p-6 space-y-6">
              {/* Basic Info Tab */}
              {activeTab === 'basic' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Code
                      </label>
                      <input
                        type="text"
                        id="code"
                        name="code"
                        defaultValue={type?.code}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter code"
                      />
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={type?.name}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      defaultValue={type?.description}
                      required
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      placeholder="Enter description"
                    />
                  </div>
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
              )}

              {/* Additional Details Tab */}
              {activeTab === 'details' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Department
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter department"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        name="category"
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Enter category"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="workHours" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Work Hours
                    </label>
                    <input
                      type="text"
                      id="workHours"
                      name="workHours"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="e.g., 40 hours per week"
                    />
                  </div>
                  <div>
                    <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Benefits
                    </label>
                    <textarea
                      id="benefits"
                      name="benefits"
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      placeholder="Enter benefits details"
                    />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-dark-100 bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                      placeholder="Enter additional notes"
                    />
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="allowOvertime"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Allow Overtime
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="requireTimesheet"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Require Timesheet
                      </span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="autoApproval"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Enable Auto-Approval for Leave Requests
                      </span>
                    </label>
                  </div>
                </div>
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
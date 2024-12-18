import React, { useState, useMemo } from 'react';
import { Plus, Search, Filter, ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { EmploymentType, SortConfig, SortField } from '../../../types/employmentType';
import { mockEmploymentTypes } from '../../../data/mockEmploymentTypes';
import EmploymentTypeRow from './EmploymentTypeRow';
import EmploymentTypeForm from './EmploymentTypeForm';

const ITEMS_PER_PAGE = 20;

export default function EmploymentTypeList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [employmentTypes] = useState<EmploymentType[]>(mockEmploymentTypes);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'code',
    direction: 'asc'
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<EmploymentType | undefined>();

  const handleSort = (field: SortField) => {
    setSortConfig(current => ({
      field,
      direction: 
        current.field === field && current.direction === 'asc' 
          ? 'desc' 
          : 'asc'
    }));
  };

  const handleEdit = (type: EmploymentType) => {
    setSelectedType(type);
    setIsFormOpen(true);
  };

  const handleFormSubmit = (data: Partial<EmploymentType>) => {
    console.log('Form submitted:', data);
    setIsFormOpen(false);
    setSelectedType(undefined);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    setSelectedType(undefined);
  };

  const getSortIcon = (field: SortField) => {
    if (sortConfig.field !== field) {
      return <ArrowUpDown className="h-4 w-4 text-gray-400" />;
    }
    return sortConfig.direction === 'asc' 
      ? <ArrowUp className="h-4 w-4 text-green-500" />
      : <ArrowDown className="h-4 w-4 text-green-500" />;
  };

  const sortedAndFilteredTypes = useMemo(() => {
    let filtered = employmentTypes.filter(type => 
      type.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      type.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const aValue = a[sortConfig.field];
      const bValue = b[sortConfig.field];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [employmentTypes, searchTerm, sortConfig]);

  // Pagination calculations
  const totalItems = sortedAndFilteredTypes.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);
  const currentItems = sortedAndFilteredTypes.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(page => Math.max(1, page - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(page => Math.min(totalPages, page + 1));
  };

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Employment Types
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage employment types and their configurations
            </p>
          </div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Type
          </button>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search employment types..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-dark-100 rounded-lg bg-white dark:bg-dark-200 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-200 dark:border-dark-100 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors">
            <Filter className="h-5 w-5" />
          </button>
        </div>

        <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-200 dark:border-dark-100 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100 text-sm font-medium text-gray-500 dark:text-gray-400">
            <button 
              onClick={() => handleSort('code')}
              className="col-span-2 flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <span>Code</span>
              {getSortIcon('code')}
            </button>
            <button 
              onClick={() => handleSort('name')}
              className="col-span-3 flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <span>Name</span>
              {getSortIcon('name')}
            </button>
            <button 
              onClick={() => handleSort('description')}
              className="col-span-3 flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <span>Description</span>
              {getSortIcon('description')}
            </button>
            <button 
              onClick={() => handleSort('status')}
              className="col-span-2 flex items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <span>Status</span>
              {getSortIcon('status')}
            </button>
            <div className="col-span-2 pl-2">Actions</div>
          </div>
          
          <div className="divide-y divide-gray-200 dark:divide-dark-100">
            {currentItems.map((type) => (
              <EmploymentTypeRow 
                key={type.id} 
                type={type} 
                onEdit={() => handleEdit(type)}
              />
            ))}
          </div>

          {sortedAndFilteredTypes.length === 0 && (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No employment types found
            </div>
          )}

          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-dark-100 bg-gray-50 dark:bg-dark-100 sm:px-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
                Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                <span className="font-medium">{endIndex}</span> of{' '}
                <span className="font-medium">{totalItems}</span> results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-dark-100 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <div className="flex items-center">
                    <ChevronLeft className="h-5 w-5 mr-1" />
                    Previous
                  </div>
                </button>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Page <span className="font-medium">{currentPage}</span> of{' '}
                  <span className="font-medium">{totalPages}</span>
                </div>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-lg border border-gray-200 dark:border-dark-100 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <div className="flex items-center">
                    Next
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EmploymentTypeForm
        type={selectedType}
        isOpen={isFormOpen}
        onClose={handleFormClose}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}
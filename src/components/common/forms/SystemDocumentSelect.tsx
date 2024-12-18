import React, { useState } from 'react';
import { Search, FileText, X, ChevronRight } from 'lucide-react';
import { SystemDocument, SystemModule } from '../../../types/system';
import { mockModules, mockDocuments } from '../../../data/mockSystemData';

interface SystemDocumentSelectProps {
  selectedDocuments: SystemDocument[];
  onAdd: (document: SystemDocument) => void;
  onRemove: (id: string) => void;
}

export default function SystemDocumentSelect({
  selectedDocuments,
  onAdd,
  onRemove
}: SystemDocumentSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState<SystemModule | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = mockModules.filter(module =>
    module.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDocuments = selectedModule
    ? mockDocuments.filter(doc =>
        doc.moduleId === selectedModule.id &&
        !selectedDocuments.some(selected => selected.id === doc.id) &&
        (doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.reference.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleBack = () => {
    setSelectedModule(null);
    setSearchQuery('');
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          System Documents
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
        >
          <FileText className="h-4 w-4 mr-1" />
          Attach Document
        </button>
      </div>

      {isOpen && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-dark-100 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              {selectedModule ? 'Select Document' : 'Select Module'}
            </h3>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              Close
            </button>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              placeholder={selectedModule ? "Search documents..." : "Search modules..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="max-h-60 overflow-y-auto">
            {selectedModule ? (
              <>
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full px-4 py-2 mb-2 text-left text-sm text-green-600 dark:text-green-400 hover:bg-white dark:hover:bg-dark-200 rounded-lg"
                >
                  ← Back to Modules
                </button>

                {filteredDocuments.length === 0 ? (
                  <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                    No documents found
                  </div>
                ) : (
                  filteredDocuments.map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => {
                        onAdd(doc);
                        setIsOpen(false);
                        setSelectedModule(null);
                        setSearchQuery('');
                      }}
                      className="w-full px-4 py-2 text-left hover:bg-white dark:hover:bg-dark-200 rounded-lg"
                    >
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {doc.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {doc.reference}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </>
            ) : (
              filteredModules.map((module) => (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => {
                    setSelectedModule(module);
                    setSearchQuery('');
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-white dark:hover:bg-dark-200 rounded-lg group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <module.icon className="h-5 w-5 text-gray-400 group-hover:text-green-500 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {module.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {mockDocuments.filter(doc => doc.moduleId === module.id).length} documents
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-500" />
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {selectedDocuments.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedDocuments.map((doc) => (
            <span
              key={doc.id}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300"
            >
              <FileText className="h-4 w-4 mr-2" />
              {doc.reference}
              <button
                type="button"
                onClick={() => onRemove(doc.id)}
                className="ml-2 hover:text-gray-900 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
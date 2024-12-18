import React, { useState } from 'react';
import { Search, ChevronDown, Link as LinkIcon, Plus } from 'lucide-react';
import { SystemModule, SystemDocument } from '../../types';
import { mockModules, mockDocuments } from '../../data/mockSystemData';

interface SystemDocumentsProps {
  onAttach: (documents: SystemDocument[]) => void;
}

export default function SystemDocuments({ onAttach }: SystemDocumentsProps) {
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [moduleSearchQuery, setModuleSearchQuery] = useState('');
  const [documentSearchQuery, setDocumentSearchQuery] = useState('');
  const [selectedDocuments, setSelectedDocuments] = useState<SystemDocument[]>([]);

  const filteredModules = mockModules.filter(module =>
    module.name.toLowerCase().includes(moduleSearchQuery.toLowerCase())
  );

  const filteredDocuments = mockDocuments
    .filter(doc => doc.moduleId === selectedModule)
    .filter(doc =>
      doc.title.toLowerCase().includes(documentSearchQuery.toLowerCase()) ||
      doc.reference.toLowerCase().includes(documentSearchQuery.toLowerCase())
    );

  const handleToggleDocument = (document: SystemDocument) => {
    setSelectedDocuments(prev => {
      const isSelected = prev.some(d => d.id === document.id);
      if (isSelected) {
        return prev.filter(d => d.id !== document.id);
      }
      return [...prev, document];
    });
  };

  const handleAttach = () => {
    onAttach(selectedDocuments);
    setSelectedDocuments([]);
  };

  return (
    <div className="space-y-4">
      {/* Module Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Select Module
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search modules..."
            value={moduleSearchQuery}
            onChange={(e) => setModuleSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {moduleSearchQuery && (
          <div className="mt-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {filteredModules.map((module) => (
              <button
                key={module.id}
                onClick={() => {
                  setSelectedModule(module.id);
                  setModuleSearchQuery(module.name);
                }}
                className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                <div className="flex items-center">
                  <module.icon className="h-5 w-5 text-gray-400 mr-3" />
                  <span className="text-sm text-gray-900 dark:text-white">
                    {module.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Document List */}
      {selectedModule && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Select Documents
            </label>
            {selectedDocuments.length > 0 && (
              <button
                onClick={handleAttach}
                className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Attach Selected ({selectedDocuments.length})</span>
              </button>
            )}
          </div>

          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Search documents..."
              value={documentSearchQuery}
              onChange={(e) => setDocumentSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>

          <div className="bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg divide-y divide-gray-200 dark:divide-dark-100">
            {filteredDocuments.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No documents found
              </div>
            ) : (
              filteredDocuments.map((document) => {
                const isSelected = selectedDocuments.some(d => d.id === document.id);
                return (
                  <button
                    key={document.id}
                    onClick={() => handleToggleDocument(document)}
                    className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors ${
                      isSelected ? 'bg-green-50 dark:bg-green-900/20' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {document.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {document.reference}
                        </p>
                      </div>
                      <LinkIcon className={`h-5 w-5 ${
                        isSelected 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
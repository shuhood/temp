import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface RightPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  children: React.ReactNode;
  width?: string;
}

export default function RightPanel({ 
  isOpen, 
  onToggle, 
  title, 
  children,
  width = 'w-96'
}: RightPanelProps) {
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className={`fixed top-1/2 -translate-y-1/2 transition-all duration-300 z-40
          ${isOpen ? `right-[${width.replace('w-', '')}px]` : 'right-0'}
          p-2 bg-white dark:bg-dark-200 border border-gray-100 dark:border-dark-100 
          rounded-l-lg shadow-lg hover:bg-gray-50 dark:hover:bg-dark-100`}
        title={isOpen ? 'Minimize' : 'Expand'}
      >
        {isOpen ? (
          <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronLeft className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        )}
      </button>

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full ${width} bg-white dark:bg-dark-200 
          border-l border-gray-100 dark:border-dark-100 shadow-xl 
          transform transition-transform duration-300 ease-in-out z-30
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-100 dark:border-dark-100">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green-500 hover:scrollbar-thumb-green-600 dark:scrollbar-thumb-green-500/50 dark:hover:scrollbar-thumb-green-500">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
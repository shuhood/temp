import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getRandomIcon } from '../../utils/iconUtils';

interface MenuSectionProps {
  section: any;
  isMinimized?: boolean;
}

export default function MenuSection({ section, isMinimized = false }: MenuSectionProps) {
  return (
    <div className="mb-6 last:mb-0">
      {!isMinimized && (
        <h3 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2 px-3">
          {section.displayName}
        </h3>
      )}
      <ul className="space-y-1">
        {section.features?.map((item: any) => {
          const Icon = getRandomIcon();
          
          return (
            <li key={item.id}>
              <Link 
                to={item.routePath || '#'}
                className={`w-full flex items-center ${
                  isMinimized ? 'justify-center' : 'justify-between'
                } px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg group transition-colors`}
                title={isMinimized ? `${section.displayName} - ${item.displayName}` : undefined}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="h-4 w-4 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                  {!isMinimized && (
                    <span className="group-hover:text-green-600 dark:group-hover:text-green-400">
                      {item.displayName}
                    </span>
                  )}
                </div>
                {!isMinimized && (
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
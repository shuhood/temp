import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  articleCount: number;
  to: string;
  firstArticleId?: string;
}

export default function CategoryCard({ 
  title, 
  description, 
  icon: Icon, 
  articleCount, 
  to,
  firstArticleId 
}: CategoryCardProps) {
  return (
    <Link 
      to={firstArticleId ? `/knowledge/articles/${firstArticleId}` : to}
      className="block p-6 bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100 hover:border-green-500 dark:hover:border-green-400 transition-colors group"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
          <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            {articleCount} articles
          </p>
        </div>
      </div>
    </Link>
  );
}
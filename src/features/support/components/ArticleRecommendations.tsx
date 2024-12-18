import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Article } from '../../knowledge/types';

interface ArticleRecommendationsProps {
  articles: Article[];
}

export default function ArticleRecommendations({ articles }: ArticleRecommendationsProps) {
  return (
    <div className="bg-gray-50 dark:bg-dark-100 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-3">
        <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Recommended Articles
        </h3>
      </div>
      
      <div className="space-y-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            to={`/knowledge/articles/${article.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 bg-white dark:bg-dark-200 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 border border-gray-100 dark:border-dark-100 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  {article.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {article.excerpt}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
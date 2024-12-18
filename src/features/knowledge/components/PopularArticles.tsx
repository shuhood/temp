import React from 'react';
import { TrendingUp } from 'lucide-react';
import ArticleList from './ArticleList';
import { Article } from '../types';

interface PopularArticlesProps {
  articles: Article[];
}

export default function PopularArticles({ articles }: PopularArticlesProps) {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Popular Articles
        </h2>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mockArticles } from '../data/mockArticles';

interface RelatedArticlesProps {
  currentArticleId: string;
  category: string;
}

export default function RelatedArticles({ currentArticleId, category }: RelatedArticlesProps) {
  const relatedArticles = mockArticles
    .filter(article => article.category === category && article.id !== currentArticleId)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Related Articles
      </h2>
      <div className="grid gap-4">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/knowledge/articles/${article.id}`}
            className="block p-4 bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100 hover:border-green-500 dark:hover:border-green-400 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
                  {article.title}
                </h3>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Ticket } from '../../types';

// Mock articles data
const mockArticles = [
  {
    id: '1',
    title: 'Common Email Issues and Solutions',
    excerpt: 'Learn how to resolve common email access and configuration problems',
    category: 'Email'
  },
  {
    id: '2',
    title: 'Printer Troubleshooting Guide',
    excerpt: 'Step-by-step guide to resolve printer connectivity and printing issues',
    category: 'Hardware'
  },
  {
    id: '3',
    title: 'Password Reset Guide',
    excerpt: 'How to safely reset your password and regain account access',
    category: 'Account'
  }
];

interface RelatedArticlesProps {
  ticket: Ticket;
}

export default function RelatedArticles({ ticket }: RelatedArticlesProps) {
  // Filter articles based on ticket category
  const relatedArticles = mockArticles
    .filter(article => 
      article.category.toLowerCase() === ticket.category.toLowerCase()
    )
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
      <div className="p-4 border-b border-gray-100 dark:border-dark-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Related Knowledge Base Articles
          </h3>
        </div>
        <Link
          to="/knowledge"
          className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
        >
          View All
        </Link>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-dark-100">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            to={`/knowledge/articles/${article.id}`}
            className="block p-4 hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors group"
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
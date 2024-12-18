import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ThumbsUp, ThumbsDown, Printer, Share2, Clock, Eye } from 'lucide-react';
import { formatDistanceToNow } from '../../../utils/dateUtils';
import RelatedArticles from '../components/RelatedArticles';
import { mockArticles } from '../data/mockArticles';

export default function ArticlePage() {
  const { id } = useParams();
  const article = mockArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Article not found
        </h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link
        to="/knowledge"
        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Knowledge Base
      </Link>

      <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display mb-4">
            {article.title}
          </h1>

          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>Updated {formatDistanceToNow(article.updatedAt)}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-2" />
              <span>{article.views} views</span>
            </div>
          </div>

          <div 
            className="prose dark:prose-invert max-w-none mb-8 article-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-dark-100">
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                <ThumbsUp className="h-4 w-4" />
                <span>Helpful</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                <ThumbsDown className="h-4 w-4" />
                <span>Not helpful</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Printer className="h-4 w-4" />
                <span>Print</span>
              </button>
              <button className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <RelatedArticles currentArticleId={article.id} category={article.category} />
      </div>
    </div>
  );
}
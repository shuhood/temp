import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import PopularArticles from '../components/PopularArticles';
import { categories } from '../data/mockData';
import { mockArticles } from '../data/mockArticles';

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Find the first article for the Getting Started category
  const gettingStartedArticle = mockArticles.find(
    article => article.category === 'getting-started'
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-display mb-4">
          Knowledge Base
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Find answers to common questions and learn how to use our platform
        </p>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            articleCount={category.articleCount}
            to={`/knowledge/categories/${category.id}`}
            firstArticleId={category.id === 'getting-started' ? gettingStartedArticle?.id : undefined}
          />
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-dark-100 rounded-lg p-6">
        <PopularArticles articles={mockArticles} />
      </div>
    </div>
  );
}
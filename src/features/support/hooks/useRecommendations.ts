import { useState, useEffect } from 'react';
import { Article } from '../../knowledge/types';
import { mockArticles } from '../../knowledge/data/mockArticles';

export function useRecommendations(searchTerm: string) {
  const [recommendations, setRecommendations] = useState<Article[]>([]);

  useEffect(() => {
    if (searchTerm.trim().length >= 3) {
      const searchTerms = searchTerm.toLowerCase().split(' ');
      const filtered = mockArticles.filter(article => {
        const titleWords = article.title.toLowerCase();
        const contentWords = article.content.toLowerCase();
        return searchTerms.some(term => 
          titleWords.includes(term) || contentWords.includes(term)
        );
      }).slice(0, 3);
      setRecommendations(filtered);
    } else {
      setRecommendations([]);
    }
  }, [searchTerm]);

  return recommendations;
}
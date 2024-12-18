import React from 'react';
import { FormField } from '../';
import ArticleRecommendations from '../../ArticleRecommendations';
import { Article } from '../../../../knowledge/types';

interface TitleSectionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  recommendations: Article[];
}

export default function TitleSection({
  value,
  onChange,
  onBlur,
  error,
  touched,
  recommendations
}: TitleSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        label="Title"
        name="title"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        touched={touched}
        placeholder="Brief description of the issue"
        required
      />

      {recommendations.length > 0 && (
        <ArticleRecommendations articles={recommendations} />
      )}
    </div>
  );
}
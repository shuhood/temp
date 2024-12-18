import React from 'react';
import { FormField } from '../';

interface DescriptionSectionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
  touched?: boolean;
}

export default function DescriptionSection({
  value,
  onChange,
  onBlur,
  error,
  touched
}: DescriptionSectionProps) {
  return (
    <FormField
      label="Description"
      name="description"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      touched={touched}
      placeholder="Detailed description of your issue"
      multiline
      rows={5}
      required
    />
  );
}
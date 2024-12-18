import React from 'react';
import { useTicketForm } from '../hooks/useTicketForm';
import { useRecommendations } from '../hooks/useRecommendations';
import {
  CategorySelect,
  PrioritySelect,
  UserAssignSelect,
  LinkInput,
  SystemDocumentSelect,
  AttachmentsSection
} from './form';
import {
  TitleSection,
  DescriptionSection,
  FormActions
} from './form/sections';
import { Category, Link, SystemDocument } from '../types';
import { UploadedFile } from '../types/ticket';

interface CreateTicketFormProps {
  categories: Category[];
}

export default function CreateTicketForm({ categories }: CreateTicketFormProps) {
  const { 
    formData, 
    errors, 
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    updateFormData
  } = useTicketForm({
    onSubmit: async (data) => {
      console.log('Submitting ticket:', data);
      // Add API call here
      navigate('/helpdesk');
    }
  });

  const recommendations = useRecommendations(formData.title);

  const handleAttachmentsChange = (files: UploadedFile[]) => {
    updateFormData({ attachments: files });
  };

  const handleAddLink = (link: Link) => {
    updateFormData({ 
      links: [...formData.links, link]
    });
  };

  const handleRemoveLink = (index: number) => {
    updateFormData({
      links: formData.links.filter((_, i) => i !== index)
    });
  };

  const handleAddSystemDocument = (doc: SystemDocument) => {
    updateFormData({
      systemDocuments: [...formData.systemDocuments, { id: doc.id, reference: doc.reference }]
    });
  };

  const handleRemoveSystemDocument = (id: string) => {
    updateFormData({
      systemDocuments: formData.systemDocuments.filter(doc => doc.id !== id)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <TitleSection
        value={formData.title}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.title}
        touched={touched.title}
        recommendations={recommendations}
      />

      <CategorySelect
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.category}
        touched={touched.category}
        required
      />

      <PrioritySelect
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.priority}
        touched={touched.priority}
        required
      />

      <UserAssignSelect
        label="Assign To"
        name="assignedTo"
        value={formData.assignedTo || ''}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <DescriptionSection
        value={formData.description}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.description}
        touched={touched.description}
      />

      <LinkInput
        links={formData.links}
        onAdd={handleAddLink}
        onRemove={handleRemoveLink}
      />

      <SystemDocumentSelect
        selectedDocuments={formData.systemDocuments}
        onAdd={handleAddSystemDocument}
        onRemove={handleRemoveSystemDocument}
      />

      <AttachmentsSection onAttachmentsChange={handleAttachmentsChange} />

      <FormActions
        isSubmitting={isSubmitting}
        submitError={errors.submit}
      />
    </form>
  );
}
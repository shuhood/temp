import { useState } from 'react';
import { TicketFormData, TicketFormErrors } from '../types/ticket';

interface UseTicketFormProps {
  onSubmit: (data: TicketFormData) => Promise<void>;
}

const initialFormData: TicketFormData = {
  title: '',
  description: '',
  category: '',
  priority: 'medium',
  attachments: [],
  links: [],
  systemDocuments: []
};

export function useTicketForm({ onSubmit }: UseTicketFormProps) {
  const [formData, setFormData] = useState<TicketFormData>(initialFormData);
  const [errors, setErrors] = useState<TicketFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (data: TicketFormData): TicketFormErrors => {
    const errors: TicketFormErrors = {};

    if (!data.title.trim()) {
      errors.title = 'Title is required';
    } else if (data.title.trim().length < 10) {
      errors.title = 'Title must be at least 10 characters long';
    }

    if (!data.description.trim()) {
      errors.description = 'Description is required';
    } else if (data.description.trim().length < 20) {
      errors.description = 'Description must be at least 20 characters long';
    }

    if (!data.category) {
      errors.category = 'Please select a category';
    }

    if (!data.priority) {
      errors.priority = 'Please select a priority level';
    }

    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof TicketFormErrors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof TicketFormErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const validationErrors = validateForm(formData);
    if (validationErrors[name as keyof TicketFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: validationErrors[name as keyof TicketFormErrors]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setErrors({});
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'An error occurred while submitting the form. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (updates: Partial<TicketFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  return {
    formData,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    updateFormData
  };
}
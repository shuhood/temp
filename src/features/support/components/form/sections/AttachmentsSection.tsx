import React from 'react';
import { FileUpload } from '../../../../../components/common/uploads';
import { UploadedFile } from '../../../types/ticket';

interface AttachmentsSectionProps {
  onAttachmentsChange: (files: UploadedFile[]) => void;
}

export default function AttachmentsSection({ onAttachmentsChange }: AttachmentsSectionProps) {
  return (
    <FileUpload
      label="Attachments"
      description="Upload any relevant screenshots or documents (optional)"
      onChange={onAttachmentsChange}
      accept="image/*,.pdf,.doc,.docx"
      multiple
    />
  );
}
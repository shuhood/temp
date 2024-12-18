import React from 'react';
import { Paperclip } from 'lucide-react';
import { Attachment } from '../../../types';

interface TimelineAttachmentsProps {
  attachments: Attachment[];
}

export default function TimelineAttachments({ attachments }: TimelineAttachmentsProps) {
  return (
    <>
      {attachments.map((attachment, index) => (
        <a
          key={index}
          href={attachment.url}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
        >
          <Paperclip className="h-4 w-4 mr-2" />
          {attachment.name}
        </a>
      ))}
    </>
  );
}
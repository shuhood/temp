import React, { useState } from 'react';
import { Paperclip, Link as LinkIcon, Send, FileText } from 'lucide-react';
import FileUpload from '../../../support/components/FileUpload';
import SystemDocuments from './SystemDocuments';
import { SystemDocument } from '../../types';

interface TicketReplyFormProps {
  ticketId: string;
}

export default function TicketReplyForm({ ticketId }: TicketReplyFormProps) {
  const [message, setMessage] = useState('');
  const [showLinkForm, setShowLinkForm] = useState(false);
  const [showSystemDocs, setShowSystemDocs] = useState(false);
  const [linkTitle, setLinkTitle] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [links, setLinks] = useState<{ title: string; url: string }[]>([]);
  const [systemDocuments, setSystemDocuments] = useState<SystemDocument[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reply submission
    console.log('Reply submitted:', { message, links, systemDocuments });
    setMessage('');
    setLinks([]);
    setSystemDocuments([]);
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (linkTitle && linkUrl) {
      setLinks([...links, { title: linkTitle, url: linkUrl }]);
      setLinkTitle('');
      setLinkUrl('');
      setShowLinkForm(false);
    }
  };

  const handleAttachSystemDocs = (docs: SystemDocument[]) => {
    setSystemDocuments(prev => [...prev, ...docs]);
    setShowSystemDocs(false);
  };

  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
      <form onSubmit={handleSubmit} className="p-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your reply..."
          rows={4}
          className="w-full px-4 py-2 bg-gray-50 dark:bg-dark-100 border border-gray-200 dark:border-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 text-gray-900 dark:text-white resize-none"
          required
        />

        {showLinkForm && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-dark-100 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Add Link
            </h4>
            <div className="space-y-3">
              <input
                type="text"
                value={linkTitle}
                onChange={(e) => setLinkTitle(e.target.value)}
                placeholder="Link title"
                className="w-full px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg"
              />
              <input
                type="url"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="URL"
                className="w-full px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg"
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowLinkForm(false)}
                  className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddLink}
                  className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg"
                >
                  Add Link
                </button>
              </div>
            </div>
          </div>
        )}

        {showSystemDocs && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-dark-100 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                Attach System Documents
              </h4>
              <button
                type="button"
                onClick={() => setShowSystemDocs(false)}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Cancel
              </button>
            </div>
            <SystemDocuments onAttach={handleAttachSystemDocs} />
          </div>
        )}

        {(links.length > 0 || systemDocuments.length > 0) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((link, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
              >
                <LinkIcon className="h-4 w-4 mr-2" />
                {link.title}
              </span>
            ))}
            {systemDocuments.map((doc) => (
              <span
                key={doc.id}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
              >
                <FileText className="h-4 w-4 mr-2" />
                {doc.reference}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FileUpload
              label=""
              onChange={(files) => console.log('Files:', files)}
              accept="image/*,.pdf,.doc,.docx"
              multiple
            />
            <button
              type="button"
              onClick={() => setShowLinkForm(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition-colors"
              title="Add link"
            >
              <LinkIcon className="h-5 w-5 text-gray-500" />
            </button>
            <button
              type="button"
              onClick={() => setShowSystemDocs(true)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-100 rounded-lg transition-colors"
              title="Attach system documents"
            >
              <FileText className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>Send Reply</span>
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
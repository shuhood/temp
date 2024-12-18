import React, { useState } from 'react';
import { Link as LinkIcon, Plus, X } from 'lucide-react';

interface Link {
  title: string;
  url: string;
}

interface LinkInputProps {
  links: Link[];
  onAdd: (link: Link) => void;
  onRemove: (index: number) => void;
}

export default function LinkInput({ links, onAdd, onRemove }: LinkInputProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleAdd = () => {
    if (title && url) {
      onAdd({ title, url });
      setTitle('');
      setUrl('');
      setIsAdding(false);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Related Links
        </label>
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Link
        </button>
      </div>

      {isAdding && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-dark-100 rounded-lg">
          <div className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Link title"
              className="w-full px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg"
            />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="URL"
              className="w-full px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-dark-100 rounded-lg"
            />
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAdd}
                className="px-3 py-1 text-sm bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white rounded-lg"
              >
                Add Link
              </button>
            </div>
          </div>
        </div>
      )}

      {links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400"
            >
              <LinkIcon className="h-4 w-4 mr-2" />
              {link.title}
              <button
                type="button"
                onClick={() => onRemove(index)}
                className="ml-2 hover:text-blue-800 dark:hover:text-blue-300"
              >
                <X className="h-4 w-4" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
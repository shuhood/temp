import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  description?: string;
  onChange: (files: FileList) => void;
  accept?: string;
  multiple?: boolean;
}

export default function FileUpload({
  label,
  description,
  onChange,
  accept,
  multiple
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = React.useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFiles(prev => [...prev, ...fileList]);
      onChange(e.target.files);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
      )}

      <div className="space-y-4">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="w-full px-4 py-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center hover:border-green-500 dark:hover:border-green-400 transition-colors"
        >
          <Upload className="h-6 w-6 mx-auto text-gray-400" />
          <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
            Click to upload or drag and drop
          </span>
          <span className="mt-1 block text-sm text-gray-600 dark:text-gray-400">
            Max file size: 10MB
          </span>
        </button>

        {files.length > 0 && (
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-dark-100 rounded-lg"
              >
                <span className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-dark-200 rounded-full"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        accept={accept}
        multiple={multiple}
      />
    </div>
  );
}
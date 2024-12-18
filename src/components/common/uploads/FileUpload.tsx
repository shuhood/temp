import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';
import { FileUploadService } from '../../../lib/api/services/FileUploadService';
import UploadProgress from './UploadProgress';

interface UploadedFile {
  id: string;
  name: string;
  url: string;
}

interface FileUploadProps {
  label: string;
  description?: string;
  onChange: (files: UploadedFile[]) => void;
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
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      
      for (const file of files) {
        try {
          // Initialize progress for this file
          setUploading(prev => ({ ...prev, [file.name]: 0 }));
          
          // Upload file
          const response = await FileUploadService.uploadFile(file);
          
          // Update progress to 100%
          setUploading(prev => ({ ...prev, [file.name]: 100 }));
          
          // Add to uploaded files
          const uploadedFile = {
            id: response.id,
            name: file.name,
            url: response.url
          };
          
          setUploadedFiles(prev => [...prev, uploadedFile]);
          onChange([...uploadedFiles, uploadedFile]);
          
          // Clear progress after a delay
          setTimeout(() => {
            setUploading(prev => {
              const newState = { ...prev };
              delete newState[file.name];
              return newState;
            });
          }, 1000);
          
        } catch (error) {
          console.error('Upload error:', error);
          setError('Failed to upload file. Please try again.');
          
          // Clear progress for failed file
          setUploading(prev => {
            const newState = { ...prev };
            delete newState[file.name];
            return newState;
          });
        }
      }
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => {
      const newFiles = prev.filter((_, i) => i !== index);
      onChange(newFiles);
      return newFiles;
    });
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

        {error && (
          <div className="text-sm text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
            {error}
          </div>
        )}

        {/* Upload Progress */}
        {Object.entries(uploading).map(([fileName, progress]) => (
          <UploadProgress
            key={fileName}
            fileName={fileName}
            progress={progress}
          />
        ))}

        {/* Uploaded Files List */}
        {uploadedFiles.length > 0 && (
          <ul className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <li
                key={file.id}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-dark-100 rounded-lg"
              >
                <a 
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 truncate"
                >
                  {file.name}
                </a>
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
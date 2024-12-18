import React from 'react';

interface UploadProgressProps {
  fileName: string;
  progress: number;
}

export default function UploadProgress({ fileName, progress }: UploadProgressProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600 dark:text-gray-400 truncate">{fileName}</span>
        <span className="text-gray-600 dark:text-gray-400">{progress}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-dark-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 dark:bg-green-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
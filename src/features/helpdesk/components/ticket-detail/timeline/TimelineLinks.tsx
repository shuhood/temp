import React from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { TimelineLink } from '../../../types';

interface TimelineLinksProps {
  links: TimelineLink[];
}

export default function TimelineLinks({ links }: TimelineLinksProps) {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
        >
          <LinkIcon className="h-4 w-4 mr-2" />
          {link.title}
        </a>
      ))}
    </>
  );
}
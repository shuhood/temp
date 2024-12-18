import React from 'react';
import { MessageCircle, Clock, User, CheckCircle2, AlertTriangle, Paperclip, Link as LinkIcon } from 'lucide-react';
import { Ticket } from '../../types';
import { formatDistanceToNow } from '../../../../utils/dateUtils';

interface TicketTimelineProps {
  ticket: Ticket;
}

interface TimelineItem {
  id: string;
  type: 'message' | 'status' | 'assignment';
  content: string;
  author: string;
  timestamp: Date;
  status?: string;
  assignee?: string;
  attachments?: { name: string; url: string }[];
  links?: { title: string; url: string }[];
}

// Mock timeline data
const mockTimeline: TimelineItem[] = [
  {
    id: '1',
    type: 'message',
    content: 'Initial ticket description goes here with more details about the issue...',
    author: 'John Doe',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    attachments: [
      { name: 'screenshot.png', url: '#' },
      { name: 'error-log.txt', url: '#' }
    ]
  },
  {
    id: '2',
    type: 'assignment',
    content: 'Assigned to Technical Support Team',
    author: 'System',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23),
    assignee: 'Tech Support'
  },
  {
    id: '3',
    type: 'status',
    content: 'Status changed to In Progress',
    author: 'Sarah Wilson',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
    status: 'in-progress'
  },
  {
    id: '4',
    type: 'message',
    content: 'I\'ve checked the logs and found the issue. It appears to be related to...',
    author: 'Sarah Wilson',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    links: [
      { title: 'Knowledge Base Article', url: '#' },
      { title: 'Documentation', url: '#' }
    ]
  }
];

const getTimelineIcon = (type: string) => {
  switch (type) {
    case 'message':
      return MessageCircle;
    case 'status':
      return CheckCircle2;
    case 'assignment':
      return User;
    default:
      return Clock;
  }
};

const getIconColor = (type: string) => {
  switch (type) {
    case 'message':
      return 'text-blue-600 dark:text-blue-400';
    case 'status':
      return 'text-green-600 dark:text-green-400';
    case 'assignment':
      return 'text-purple-600 dark:text-purple-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
};

const getIconBackground = (type: string) => {
  switch (type) {
    case 'message':
      return 'bg-blue-100 dark:bg-blue-900/20';
    case 'status':
      return 'bg-green-100 dark:bg-green-900/20';
    case 'assignment':
      return 'bg-purple-100 dark:bg-purple-900/20';
    default:
      return 'bg-gray-100 dark:bg-gray-900/20';
  }
};

export default function TicketTimeline({ ticket }: TicketTimelineProps) {
  return (
    <div className="bg-white dark:bg-dark-200 rounded-lg border border-gray-100 dark:border-dark-100">
      <div className="p-4 border-b border-gray-100 dark:border-dark-100">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          Ticket Timeline
        </h3>
      </div>

      <div className="divide-y divide-gray-100 dark:divide-dark-100">
        {mockTimeline.map((item) => {
          const Icon = getTimelineIcon(item.type);
          
          return (
            <div key={item.id} className="p-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full ${getIconBackground(item.type)} flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 ${getIconColor(item.type)}`} />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.author}
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDistanceToNow(item.timestamp)}
                    </span>
                  </div>
                  
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {item.content}
                  </p>

                  {(item.attachments || item.links) && (
                    <div className="mt-3 flex flex-wrap gap-3">
                      {item.attachments?.map((attachment, index) => (
                        <a
                          key={index}
                          href={attachment.url}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors"
                        >
                          <Paperclip className="h-4 w-4 mr-2" />
                          {attachment.name}
                        </a>
                      ))}
                      
                      {item.links?.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                        >
                          <LinkIcon className="h-4 w-4 mr-2" />
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
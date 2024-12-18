import React from 'react';
import { MessageCircle, Clock, User, CheckCircle2 } from 'lucide-react';
import { formatDistanceToNow } from '../../../../../utils/dateUtils';
import TimelineAttachments from './TimelineAttachments';
import TimelineLinks from './TimelineLinks';
import { TimelineItemType } from '../../../types';

interface TimelineItemProps {
  item: TimelineItemType;
}

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

export default function TimelineItem({ item }: TimelineItemProps) {
  const Icon = getTimelineIcon(item.type);
  
  return (
    <div className="p-4">
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
              {item.attachments && (
                <TimelineAttachments attachments={item.attachments} />
              )}
              {item.links && (
                <TimelineLinks links={item.links} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
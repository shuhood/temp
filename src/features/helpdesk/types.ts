// Update the types file to include new interfaces
export interface TimelineLink {
  title: string;
  url: string;
}

export interface Attachment {
  name: string;
  url: string;
}

export interface TimelineItemType {
  id: string;
  type: 'message' | 'status' | 'assignment';
  content: string;
  author: string;
  timestamp: Date;
  status?: string;
  assignee?: string;
  attachments?: Attachment[];
  links?: TimelineLink[];
}

// ... rest of the existing types
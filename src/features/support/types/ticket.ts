export interface UploadedFile {
  id: string;
  name: string;
  url: string;
}

export interface TicketFormData {
  title: string;
  description: string;
  category: string;
  priority: string;
  assignedTo?: string;
  attachments: UploadedFile[];
  links: Array<{ title: string; url: string }>;
  systemDocuments: Array<{ id: string; reference: string }>;
}

export interface TicketFormErrors {
  title?: string;
  description?: string;
  category?: string;
  priority?: string;
  submit?: string;
}
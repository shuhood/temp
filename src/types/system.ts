import { LucideIcon } from 'lucide-react';

export interface SystemModule {
  id: string;
  name: string;
  icon: LucideIcon;
}

export interface SystemDocument {
  id: string;
  moduleId: string;
  title: string;
  reference: string;
  url: string;
}

export interface Link {
  title: string;
  url: string;
}
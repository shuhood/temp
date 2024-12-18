export * from './priority';
export * from './ticket';
export * from './category';

export interface Link {
  title: string;
  url: string;
}

export interface SystemDocument {
  id: string;
  moduleId: string;
  title: string;
  reference: string;
  url: string;
}
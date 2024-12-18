export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  articleCount: number;
}
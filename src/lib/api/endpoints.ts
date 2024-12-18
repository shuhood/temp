export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/profile',
    CHANGE_PASSWORD: '/user/change-password',
  },
  TICKETS: {
    LIST: '/tickets',
    CREATE: '/tickets',
    DETAILS: (id: string) => `/tickets/${id}`,
    UPDATE: (id: string) => `/tickets/${id}`,
    DELETE: (id: string) => `/tickets/${id}`,
  },
  KNOWLEDGE: {
    ARTICLES: '/knowledge/articles',
    ARTICLE: (id: string) => `/knowledge/articles/${id}`,
    CATEGORIES: '/knowledge/categories',
  },
} as const;
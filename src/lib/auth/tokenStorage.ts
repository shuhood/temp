const TOKEN_KEY = 'hdc_auth_token';

export const storeToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getStoredToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearStoredToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getStoredToken();
};
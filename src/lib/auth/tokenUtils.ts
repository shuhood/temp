import { jwtDecode } from 'jwt-decode';
import { getStoredToken } from './tokenStorage';

interface DecodedToken {
  sub: string;
  name: string;
  email: string;
  jobTitle: string;
  department: string;
  exp: number;
  nameidentifier: string;
};

interface UserInfo {
  jobTitle: string;
  department: string;
};

export const getDecodedToken = (): DecodedToken | null => {
  const token = getStoredToken();
  if (!token) return null;
  
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const getUserId = (): string | null => {
  const decoded = getDecodedToken();
  return decoded?.nameidentifier || null;
};

export const getUserName = (): string => {
  const decoded = getDecodedToken();
  return decoded?.name || 'User';
};

export const getUserInfo = (): UserInfo | null => {
  const decoded = getDecodedToken();
  if (!decoded) return null;

  return {
    jobTitle: decoded.jobTitle || 'Employee',
    department: decoded.department || 'General'
  };
};
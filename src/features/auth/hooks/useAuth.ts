import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthService } from '../../../lib/api/services/AuthService';

interface AuthError {
  message: string;
}

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (userName: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await AuthService.login({ userName, password });
      
      // Get the redirect path from location state or default to dashboard
      const from = (location.state as any)?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    } catch (err) {
      setError({ message: err instanceof Error ? err.message : 'Login failed' });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await AuthService.logout();
      navigate('/login');
    } catch (err) {
      setError({ message: err instanceof Error ? err.message : 'Logout failed' });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    logout,
    isLoading,
    error
  };
}
import { Api } from '../Api';
import { storeToken, clearStoredToken } from '../../auth/tokenStorage';
import { NavigationService } from './NavigationService';

interface LoginResponse {
  response: {
    access_token: string;
    user: {
      id: string;
      userName: string;
      name: string;
    };
  };
}

interface LoginCredentials {
  userName: string;
  password: string;
}

export class AuthService {
  private static api = Api.getInstance();

  public static async login(credentials: LoginCredentials): Promise<void> {
    try {
      const response = await this.api.post<LoginResponse>(
        'https://hdc-core-api-dev.azurewebsites.net/identity/login',
        credentials
      );
      
      if (response.response?.access_token) {
        // Store the token
        storeToken(response.response.access_token);

        // Fetch and store menu structure
        try {
          const menuResponse = await NavigationService.getNavigations();
          localStorage.setItem('menuStructure', JSON.stringify(menuResponse.response));
          console.log(menuResponse.response);
        } catch (error) {
          console.error('Error fetching menu structure:', error);
          // Don't fail the login if menu fetch fails
        }
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      throw this.handleError(error);
    }
  }

  public static async logout(): Promise<void> {
    try {
      clearStoredToken();
      localStorage.removeItem('menuStructure');
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private static handleError(error: any): Error {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const message = error.response.data?.message || 'Invalid credentials';
      return new Error(message);
    } else if (error.request) {
      // The request was made but no response was received
      return new Error('No response received from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      return new Error('Error setting up the request');
    }
  }
}
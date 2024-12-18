import { Api } from '../Api';
import { getUserId } from '../../auth/tokenUtils';

export class NavigationService {
  private static api = Api.getInstance();

  public static async getNavigations() {
    try {
      const userId = getUserId();
      if (!userId) {
        throw new Error('User ID not found');
      }

      const response = await this.api.get(
        `https://hdc-core-api-dev.azurewebsites.net/identity/navigations?userId=${userId}`
      );
      return response;
    } catch (error) {
      console.error('Error fetching navigations:', error);
      throw error;
    }
  }
}
import { Api } from '../Api';

export interface UploadResponse {
  id: string;
  fileName: string;
  fileSize: number;
  contentType: string;
  url: string;
}

export class FileUploadService {
  private static api = Api.getInstance();
  private static UPLOAD_ENDPOINT = 'https://hdc-core-api-dev.azurewebsites.net/document';

  public static async uploadFile(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await this.api.post<UploadResponse>(
        this.UPLOAD_ENDPOINT,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log('File upload response:', response);
      return response;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
}
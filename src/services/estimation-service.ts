// src/services/EstimateService.ts
import { EstimateFormData } from '@/types';
import { HttpClient } from './api-client';

interface EstimateSubmissionResponse {
  success: boolean;
  message: string;
  estimateId?: string;
  estimatedResponseTime?: string;
}

export class EstimateService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient({
      baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
      headers: {
        'X-App-Source': 'rtb-website',
      },
    });
  }

  /**
   * Submit estimate form data including file uploads
   */
  async submitEstimate(formData: EstimateFormData): Promise<EstimateSubmissionResponse> {
    try {
      // Create FormData for multipart/form-data submission if images are present
      if (formData.images && formData.images.length > 0) {
        return await this.submitWithImages(formData);
      }

      // Otherwise, submit as JSON
      const response = await this.httpClient.post<EstimateSubmissionResponse>(
        '/estimates',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyName: formData.companyName || null,
          email: formData.email,
          phone: formData.phone,
          consentEmail: formData.consentEmail,
          consentSMS: formData.consentSMS,
          address: {
            street1: formData.street1,
            street2: formData.street2 || null,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
          },
          serviceType: formData.serviceType,
          projectDescription: formData.projectDescription,
          availability: {
            preferredDay: formData.preferredDay,
            alternateDay: formData.alternateDay || null,
            preferredTime: formData.preferredTime,
          },
        }
      );
 
      return response;
    } catch (error) {
      console.error('Error submitting estimate:', error);
      throw new Error('Failed to submit estimate. Please try again.');
    }
  }

  /**
   * Submit estimate with image files
   */
  private async submitWithImages(formData: EstimateFormData): Promise<EstimateSubmissionResponse> {
    const formDataObj = new FormData();

    // Add text fields
    formDataObj.append('firstName', formData.firstName);
    formDataObj.append('lastName', formData.lastName);
    if (formData.companyName) formDataObj.append('companyName', formData.companyName);
    formDataObj.append('email', formData.email);
    formDataObj.append('phone', formData.phone);
    formDataObj.append('consentEmail', String(formData.consentEmail));
    formDataObj.append('consentSMS', String(formData.consentSMS));
    
    // Add address as JSON string
    formDataObj.append('address', JSON.stringify({
      street1: formData.street1,
      street2: formData.street2 || null,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
    }));

    formDataObj.append('serviceType', formData.serviceType);
    formDataObj.append('projectDescription', formData.projectDescription);
    
    // Add availability as JSON string
    formDataObj.append('availability', JSON.stringify({
      preferredDay: formData.preferredDay,
      alternateDay: formData.alternateDay || null,
      preferredTime: formData.preferredTime,
    }));

    // Add images
    if (formData.images) {
      Array.from(formData.images).forEach((file) => {
        formDataObj.append(`images`, file);
      });
    }

    // Use HttpClient's postFormData method
    const response = await this.httpClient.postFormData<EstimateSubmissionResponse>(
      '/estimates',
      formDataObj
    );

    return response;
  }

  /**
   * Validate phone number format
   */
  validatePhoneNumber(phone: string): boolean {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  /**
   * Format phone number for display
   */
  formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
  }
}

// Export singleton instance
export const estimateService = new EstimateService();
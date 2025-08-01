import type { GoogleReview, GooglePlacesResponse } from "@/types";
import { HttpClient } from "./api-client";

export class GoogleReviewsService {
  private httpClient: HttpClient;
  private apiKey: string;
  private placeId: string;

  constructor() {
    this.apiKey = this.getApiKey();
    this.placeId = this.getPlaceId();
    this.httpClient = this.createHttpClient();
  }

  async fetchReviews(): Promise<GoogleReview[]> {
    try {
      const data = await this.httpClient.get<GooglePlacesResponse>(
        '/place/details/json',
        {
          place_id: this.placeId,
          fields: 'reviews,rating,user_ratings_total',
          key: this.apiKey,
        }
      );

      return data.result.reviews || [];
    } catch (error) {
      console.error('Error fetching Google reviews:', error);
      return [];
    }
  }

  async fetchRating(): Promise<{ rating: number; total: number }> {
    try {
      const data = await this.httpClient.get<GooglePlacesResponse>(
        '/place/details/json',
        {
          place_id: this.placeId,
          fields: 'rating,user_ratings_total',
          key: this.apiKey,
        }
      );

      return {
        rating: data.result.rating || 0,
        total: data.result.user_ratings_total || 0,
      };
    } catch (error) {
      console.error('Error fetching rating:', error);
      return { rating: 0, total: 0 };
    }
  }

  private getApiKey(): string {
    return import.meta.env.VITE_GOOGLE_PLACES_API_KEY || '';
  }

  private getPlaceId(): string {
    return import.meta.env.VITE_GOOGLE_PLACE_ID || '';
  }

  private createHttpClient(): HttpClient {
    const baseURL = import.meta.env.DEV
      ? 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api'
      : 'https://maps.googleapis.com/maps/api';

    return new HttpClient({ baseURL });
  }
}
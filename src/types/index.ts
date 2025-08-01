// src/types/index.ts

export interface Service {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface Specialty {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email?: string;
  address: {
    city: string;
    state: string;
    street: string;
    zip: string
  };
  yearsOfExperience: number;
}
export interface HeaderProps {
  companyInfo: CompanyInfo;
}

export interface HeroProps {
  companyInfo: CompanyInfo;
}
export interface FooterProps {
  companyInfo: CompanyInfo;
}
export interface   CompanyInfoInput {
  companyInfo: CompanyInfo
}
export interface NavItem {
  label: string;
  href: string;
}

// src/types/google-places.types.ts
export interface GooglePlacesReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlacesPhoto {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface GooglePlacesResult {
  name?: string;
  rating?: number;
  user_ratings_total?: number;
  reviews?: GooglePlacesReview[];
  photos?: GooglePlacesPhoto[];
  formatted_address?: string;
  formatted_phone_number?: string;
  website?: string;
}

export interface GooglePlacesResponse {
  result: GooglePlacesResult;
  status: 'OK' | 'ZERO_RESULTS' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'INVALID_REQUEST' | 'UNKNOWN_ERROR';
  error_message?: string;
}

export interface ReviewsResponse {
  reviews: GooglePlacesReview[];
  rating: number;
  user_ratings_total: number;
}

// src/types/api-proxy.types.ts
export interface ProxyConfig {
  baseUrl: string;
  timeout?: number;
  apiKey?: string;
}

export interface AmplifyReviewsResponse {
  reviews: GooglePlacesReview[];
  rating: number;
  user_ratings_total: number;
  lastUpdated?: string;
}

export interface GoogleReview {
  author_name: string;
  author_url: string;
  language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GooglePlaceDetails {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

export interface EstimateFormData {
  // Contact Details
  firstName: string;
  lastName: string;
  companyName?: string;
  email: string;
  phone: string;
  consentEmail: boolean;
  consentSMS: boolean;
  
  // Address
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zipCode: string;
  
  // Service Details
  serviceType: string;
  projectDescription: string;
  
  // Availability
  preferredDay: string;
  alternateDay?: string;
  preferredTime: string;
  
  // Files
  images?: FileList;
}
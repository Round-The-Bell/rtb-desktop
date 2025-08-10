// src/config/env.ts
interface EnvConfig {
  appName: string;
  appPhone: string;
  apiUrl: string;
  googlePlacesApiKey: string;
}

export const env: EnvConfig = {
  appName: import.meta.env.VITE_APP_NAME || 'Round The Bell Construction',
  appPhone: import.meta.env.VITE_APP_PHONE || '‪(919) 275-0763‬',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  googlePlacesApiKey: import.meta.env.VITE_GOOGLE_PLACES_API_KEY || '',
};

// Type declaration for TypeScript
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_PHONE: string;
  readonly VITE_API_URL: string;
  readonly VITE_GOOGLE_PLACES_API_KEY: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
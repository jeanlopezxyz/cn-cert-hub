/**
 * Main i18n configuration file
 * Imports and exports all translations from locale files
 */

import { en } from './locales/en/index';
import { es } from './locales/es/index';
import { pt } from './locales/pt/index';

export const LANGUAGES = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
};

export const DEFAULT_LANG = 'en';

// Export the unified translations object
export const UI = {
  en,
  es,
  pt,
} as const;

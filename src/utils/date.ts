/**
 * Date Formatting Utilities
 * Functions for formatting dates with i18n support
 */

import type { Language } from '@/types';

export type DateFormatPreset = 'short' | 'long' | 'medium';

const DATE_FORMAT_OPTIONS: Record<DateFormatPreset, Intl.DateTimeFormatOptions> = {
  short: { month: 'short', day: 'numeric', year: 'numeric' },
  medium: { month: 'short', day: 'numeric', year: 'numeric' },
  long: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
};

const MONTH_PADDING = {
  LENGTH: 2,
  CHAR: '0',
} as const;

/**
 * Format a date using a preset format
 * Used by NewsCard, FeaturedNewsCard, and NewsGrid
 * @param date - Date to format
 * @param lang - Language code for localization (or undefined for system locale)
 * @param preset - Format preset: 'short' (Jan 15, 2024), 'long' (Monday, January 15, 2024), 'medium' (Jan 15, 2024)
 */
export function formatDate(
  date: Date,
  lang?: Language | string,
  preset: DateFormatPreset = 'short'
): string {
  return new Intl.DateTimeFormat(lang, DATE_FORMAT_OPTIONS[preset]).format(date);
}

/**
 * Generate month key for grouping (YYYY-MM)
 * @param date - Date to generate key from
 * @returns Month key string (e.g., "2024-01")
 */
export function getMonthKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(MONTH_PADDING.LENGTH, MONTH_PADDING.CHAR);
  return `${year}-${month}`;
}

/**
 * Format date label using locale
 * @param date - Date to format
 * @param locale - Locale code (e.g., "en", "es", "pt")
 * @returns Formatted month and year (e.g., "January 2024")
 */
export function formatMonthLabel(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date);
}

/**
 * Centralized news category colors
 * Used by NewsCard, FeaturedNewsCard, and NewsGrid components
 */

import type { NewsCategory } from '@/data/news';
export type { NewsCategory };

export interface CategoryStyle {
  bg: string;
  badge: string;
  text: string;
  icon: string;
  gradient?: string;
}

/**
 * Get styles for a news category
 */
export function getCategoryStyles(category: NewsCategory): CategoryStyle {
  const styles: Record<NewsCategory, CategoryStyle> = {
    certifications: {
      bg: 'bg-teal-50 dark:bg-teal-600/20',
      badge: 'bg-teal-600 text-white',
      text: 'text-teal-700 dark:text-teal-300',
      icon: 'bg-teal-600',
      gradient: 'from-teal-500 to-teal-600',
    },
    scholarships: {
      bg: 'bg-amber-50 dark:bg-amber-600/20',
      badge: 'bg-amber-500 text-white',
      text: 'text-amber-700 dark:text-amber-300',
      icon: 'bg-amber-500',
      gradient: 'from-amber-500 to-amber-600',
    },
    events: {
      bg: 'bg-indigo-50 dark:bg-indigo-600/20',
      badge: 'bg-indigo-500 text-white',
      text: 'text-indigo-700 dark:text-indigo-300',
      icon: 'bg-indigo-500',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    announcements: {
      bg: 'bg-purple-50 dark:bg-purple-600/20',
      badge: 'bg-purple-600 text-white',
      text: 'text-purple-700 dark:text-purple-300',
      icon: 'bg-purple-600',
      gradient: 'from-purple-500 to-purple-600',
    },
  };

  return styles[category] || styles.announcements;
}

export type BadgeVariant = 'teal' | 'amber' | 'indigo' | 'purple';

/**
 * Get badge variant for a news category
 */
export function getCategoryBadgeVariant(category: NewsCategory): BadgeVariant {
  const variants: Record<NewsCategory, BadgeVariant> = {
    certifications: 'teal',
    scholarships: 'amber',
    events: 'indigo',
    announcements: 'purple',
  };
  return variants[category] || 'purple';
}

/**
 * Filter color definitions for client-side JS
 * Used by NewsGrid for dynamic filter button styling
 */
export interface FilterColorPair {
  active: string;
  inactive: string;
}

const FILTER_INACTIVE =
  'bg-neutral-100 dark:bg-neutral-700/40 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700/60';

/**
 * Get all filter colors as an object for client-side use
 * Pass this through define:vars to inline scripts
 */
export function getFilterColorsForClient(): Record<string, FilterColorPair> {
  return {
    neutral: {
      active: 'bg-neutral-700 dark:bg-neutral-600 text-white',
      inactive: FILTER_INACTIVE,
    },
    teal: {
      active: 'bg-teal-600 text-white',
      inactive: FILTER_INACTIVE,
    },
    amber: {
      active: 'bg-amber-500 text-white',
      inactive: FILTER_INACTIVE,
    },
    indigo: {
      active: 'bg-indigo-600 text-white',
      inactive: FILTER_INACTIVE,
    },
    purple: {
      active: 'bg-purple-600 text-white',
      inactive: FILTER_INACTIVE,
    },
  };
}

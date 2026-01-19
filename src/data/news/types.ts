/**
 * News Section Types
 * TypeScript interfaces for the Cloud Native News feature
 */

/**
 * News item category types
 */
export type NewsCategory = 'certifications' | 'scholarships' | 'events' | 'announcements';

/**
 * RSS feed source configuration
 */
export interface RSSFeedSource {
  id: string;
  name: string;
  url: string;
  defaultCategory: NewsCategory;
  enabled: boolean;
}

/**
 * Raw RSS item from parsed feed
 */
export interface RawRSSItem {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  content?: string;
  author?: string;
  categories?: string[];
}

/**
 * Processed news item for display
 */
export interface NewsItem {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: Date;
  source: string;
  sourceUrl: string;
  category: NewsCategory;
  imageUrl?: string;
  author?: string;
}

/**
 * Cached news data with metadata
 */
export interface CachedNewsData {
  items: NewsItem[];
  fetchedAt: Date;
  sources: string[];
  errors: string[];
}

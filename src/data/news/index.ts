/**
 * News Module - Barrel Exports
 * Centralized exports for news-related functionality
 */

export type { NewsItem, NewsCategory, RSSFeedSource, RawRSSItem, CachedNewsData } from './types';

export { RSS_FEEDS, fetchAllNews, getFallbackNewsData } from './rss-fetcher';

export { getStaticNews } from './static-news';

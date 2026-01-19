/**
 * RSS Feed Fetcher
 * Fetches and parses RSS feeds from CNCF, Linux Foundation, and Kubernetes
 * Runs at build time for static site generation
 */

import type { NewsItem, NewsCategory, RSSFeedSource, RawRSSItem, CachedNewsData } from './types';
import { getStaticNews } from './static-news';
import { generateHashId } from '@/utils/hash';

// ============================================================================
// CONSTANTS
// ============================================================================

const MAX_DESCRIPTION_LENGTH = 200;
const RSS_FETCH_TIMEOUT_MS = 10000; // 10 seconds
const MAX_NEWS_ITEMS = 50;
const USER_AGENT = 'CNCertHub/1.0 (RSS Feed Reader)';

const FEED_URL_PATTERNS = {
  FEED_SUFFIX: /\/feed\/?$/,
  FEED_XML_SUFFIX: /\/feed\.xml$/,
} as const;

// ============================================================================
// RSS FEED SOURCES
// ============================================================================

/**
 * RSS Feed Sources Configuration
 * Focus on official announcements, not technical tutorials
 */
export const RSS_FEEDS: RSSFeedSource[] = [
  {
    id: 'cncf-announcements',
    name: 'CNCF Announcements',
    url: 'https://www.cncf.io/announcements/feed/',
    defaultCategory: 'announcements',
    enabled: true, // Official CNCF news: graduations, new projects, certifications
  },
  {
    id: 'lf-events',
    name: 'LF Events',
    url: 'https://events.linuxfoundation.org/feed/',
    defaultCategory: 'events',
    enabled: true, // KubeCon, Open Source Summit schedules
  },
  {
    id: 'cncf-blog',
    name: 'CNCF Blog',
    url: 'https://www.cncf.io/blog/feed/',
    defaultCategory: 'announcements',
    enabled: false, // Disabled: mostly technical tutorials, not news
  },
  {
    id: 'kubernetes-blog',
    name: 'Kubernetes Blog',
    url: 'https://kubernetes.io/feed.xml',
    defaultCategory: 'announcements',
    enabled: false, // Disabled: too many K8s release details
  },
];

/**
 * Keywords for category detection (order matters - first match wins)
 * Tuned for CNCF Announcements feed content
 */
const CATEGORY_KEYWORDS: Record<NewsCategory, string[]> = {
  scholarships: [
    'scholarship',
    'dan kohn',
    'travel funding',
    'registration scholarship',
    'need-based',
    'complimentary registration',
    'diversity scholarship',
    'funding opportunity',
    'free registration',
    'grant program',
  ],
  certifications: [
    'certification',
    'certified kubernetes',
    'launches cnpe',
    'launches cka',
    'launches ckad',
    'launches cks',
    'launches kcna',
    'launches kcsa',
    'launches ckne',
    'kubestronaut',
    'training and certification',
    'exam update',
    'conformance program',
    'certified professional',
    'certification program',
    'new certification',
    'passing score',
    'exam curriculum',
    'proctored exam',
  ],
  events: [
    'kubecon',
    'cloudnativecon',
    'open source summit',
    'schedule for',
    'keynote speaker',
    'registration is open',
    'call for proposals',
    'cfp now open',
    'conference schedule',
    'event schedule',
    'summit schedule',
    'speaker lineup',
    'co-located events',
    'virtual event',
    'in-person event',
    'maintainer summit',
  ],
  announcements: [
    // Default category - matches:
    // - Project graduations (incubating → graduated)
    // - New CNCF members
    // - Project releases
    // - General CNCF news
  ],
};

/**
 * Detect category based on title and content keywords
 * For scholarships: only check title (to avoid false positives from event announcements)
 * For other categories: check title + description
 */
function detectCategory(
  title: string,
  description: string,
  defaultCategory: NewsCategory
): NewsCategory {
  const titleLower = title.toLowerCase();
  const fullText = `${title} ${description}`.toLowerCase();

  // 1. Scholarships: ONLY check title (avoid false positives from KubeCon announcements)
  if (CATEGORY_KEYWORDS.scholarships.some((keyword) => titleLower.includes(keyword))) {
    return 'scholarships';
  }

  // 2. Certifications: check full text
  if (CATEGORY_KEYWORDS.certifications.some((keyword) => fullText.includes(keyword))) {
    return 'certifications';
  }

  // 3. Events: check full text
  if (CATEGORY_KEYWORDS.events.some((keyword) => fullText.includes(keyword))) {
    return 'events';
  }

  return defaultCategory;
}

/**
 * Parse RSS XML to extract items
 */
function parseRSSXML(xml: string): RawRSSItem[] {
  const items: RawRSSItem[] = [];

  // Simple XML parsing for RSS items
  const itemMatches = xml.match(/<item>([\s\S]*?)<\/item>/gi) || [];

  for (const itemXml of itemMatches) {
    const getTagContent = (tag: string): string | undefined => {
      const match = itemXml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
      return match?.[1]?.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, '$1').trim();
    };

    items.push({
      title: getTagContent('title'),
      link: getTagContent('link'),
      pubDate: getTagContent('pubDate'),
      description: getTagContent('description'),
      content: getTagContent('content:encoded') || getTagContent('content'),
      author: getTagContent('author') || getTagContent('dc:creator'),
    });
  }

  return items;
}

// ============================================================================
// HTML ENTITY DECODING
// ============================================================================

const HTML_ENTITIES = {
  '&nbsp;': ' ',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x27;': "'",
  '&#8217;': "'",
  '&#8216;': "'",
  '&#8220;': '"',
  '&#8221;': '"',
  '&#8211;': '–',
  '&#8212;': '—',
} as const;

function decodeNamedEntities(text: string): string {
  let result = text;
  for (const [entity, replacement] of Object.entries(HTML_ENTITIES)) {
    result = result.replace(new RegExp(entity, 'gi'), replacement);
  }
  return result;
}

function decodeNumericEntities(text: string): string {
  return text
    .replace(/&#(\d+);/gi, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

function decodeHtmlEntities(text: string): string {
  return decodeNumericEntities(decodeNamedEntities(text));
}

function removeHtmlTags(text: string): string {
  return text.replace(/<[^>]*>/g, ' ');
}

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Strip HTML tags and decode entities
 * Handles double-encoded content from RSS feeds by processing twice
 */
function stripHtml(html: string): string {
  const firstPass = removeHtmlTags(decodeHtmlEntities(html));
  const secondPass = removeHtmlTags(decodeHtmlEntities(firstPass));
  return normalizeWhitespace(secondPass);
}

/**
 * Truncate description to max length, avoiding cutting words
 */
function truncateDescription(text: string, maxLength: number = MAX_DESCRIPTION_LENGTH): string {
  const stripped = stripHtml(text);
  if (stripped.length <= maxLength) return stripped;
  return stripped.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

/**
 * Fetch and parse a single RSS feed
 */
async function fetchFeed(
  source: RSSFeedSource,
  timeout: number = RSS_FETCH_TIMEOUT_MS
): Promise<NewsItem[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(source.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const xml = await response.text();
    const rawItems = parseRSSXML(xml);

    return rawItems
      .filter((item) => item.title && item.link)
      .map((item) => {
        const description = item.description || '';
        const content = item.content || '';
        const title = stripHtml(item.title || '');
        // Use full content for category detection (scholarships info is often in full article)
        const fullText = `${description} ${content}`;

        const sourceUrl = source.url
          .replace(FEED_URL_PATTERNS.FEED_SUFFIX, '')
          .replace(FEED_URL_PATTERNS.FEED_XML_SUFFIX, '');

        return {
          id: generateHashId(item.link!),
          title,
          description: truncateDescription(description || content),
          url: item.link!,
          publishedAt: item.pubDate ? new Date(item.pubDate) : new Date(),
          source: source.name,
          sourceUrl,
          category: detectCategory(title, fullText, source.defaultCategory),
          author: item.author ? stripHtml(item.author) : undefined,
        };
      });
  } catch {
    // Silently fail - RSS fetch errors are expected during build
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}

/**
 * Fetch all news from configured RSS feeds
 * This runs at build time in Astro frontmatter
 */
export async function fetchAllNews(): Promise<CachedNewsData> {
  const enabledFeeds = RSS_FEEDS.filter((feed) => feed.enabled);
  const errors: string[] = [];

  const results = await Promise.allSettled(enabledFeeds.map((feed) => fetchFeed(feed)));

  const items: NewsItem[] = [];
  const sources: string[] = [];

  results.forEach((result, index) => {
    const feed = enabledFeeds[index];
    if (!feed) return;
    if (result.status === 'fulfilled') {
      items.push(...result.value);
      if (result.value.length > 0) {
        sources.push(feed.name);
      }
    } else {
      errors.push(`${feed.name}: ${result.reason}`);
    }
  });

  // Add ALL static news items from static-news.ts
  const staticNews = getStaticNews();
  items.push(...staticNews.items);

  // Add static sources
  for (const source of staticNews.sources) {
    if (!sources.includes(source)) {
      sources.push(source);
    }
  }

  // Sort by publish date (newest first)
  items.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  // Deduplicate by URL
  const seen = new Set<string>();
  const uniqueItems = items.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  return {
    items: uniqueItems.slice(0, MAX_NEWS_ITEMS),
    fetchedAt: new Date(),
    sources,
    errors,
  };
}

/**
 * Get fallback news data when feeds are unavailable
 */
export function getFallbackNewsData(): CachedNewsData {
  return {
    items: [],
    fetchedAt: new Date(),
    sources: [],
    errors: ['Unable to fetch news feeds. Please try again later.'],
  };
}

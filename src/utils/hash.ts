/**
 * Hash Utilities
 * Simple hash functions for ID generation
 */

const HASH_SHIFT_BITS = 5;
const BASE_36 = 36;

/**
 * Generate a unique ID from a string (typically a URL)
 * Uses djb2-like hash algorithm for consistent ID generation
 *
 * Algorithm: hash = (hash << 5) - hash + char (djb2 variant)
 *
 * @param input - String to hash (typically a URL)
 * @param prefix - Optional prefix for the generated ID
 * @returns A base36-encoded hash string (0-9a-z)
 * @example
 * generateHashId('https://example.com') // => 'abc123'
 * generateHashId('https://example.com', 'news') // => 'news-abc123'
 */
export function generateHashId(input: string, prefix = ''): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << HASH_SHIFT_BITS) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const hashString = Math.abs(hash).toString(BASE_36);
  return prefix ? `${prefix}-${hashString}` : hashString;
}

import { describe, it, expect } from 'vitest';
import { generateHashId } from '@/utils/hash';

describe('Hash Utilities', () => {
  describe('generateHashId', () => {
    it('should generate consistent hashes for the same input', () => {
      const input = 'https://example.com/article';
      const hash1 = generateHashId(input);
      const hash2 = generateHashId(input);
      expect(hash1).toBe(hash2);
    });

    it('should generate different hashes for different inputs', () => {
      const hash1 = generateHashId('https://example.com/article1');
      const hash2 = generateHashId('https://example.com/article2');
      expect(hash1).not.toBe(hash2);
    });

    it('should generate hash without prefix by default', () => {
      const hash = generateHashId('https://example.com');
      expect(hash).not.toContain('-');
      expect(hash).toMatch(/^[a-z0-9]+$/);
    });

    it('should include prefix when provided', () => {
      const hash = generateHashId('https://example.com', 'static');
      expect(hash).toContain('static-');
      expect(hash).toMatch(/^static-[a-z0-9]+$/);
    });

    it('should handle empty string input', () => {
      const hash = generateHashId('');
      expect(hash).toBe('0');
    });

    it('should generate base36 encoded string', () => {
      const hash = generateHashId('https://example.com/test');
      // Base36 uses 0-9 and a-z
      expect(hash).toMatch(/^[a-z0-9]+$/);
    });

    it('should produce reasonably short IDs', () => {
      const hash = generateHashId('https://www.cncf.io/blog/2025/12/29/very-long-url-example');
      // Base36 encoding should keep length reasonable
      expect(hash.length).toBeLessThan(20);
    });
  });
});

/**
 * Tests for Astro lifecycle helpers
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { onPageReady, onPageSwap, onBeforeSwap, onCleanup } from '@/scripts/lifecycle';

describe('Astro Lifecycle Helpers', () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = '';
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('onPageReady', () => {
    it('should execute callback immediately', () => {
      const callback = vi.fn();
      onPageReady(callback);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should execute callback on astro:after-swap event', () => {
      const callback = vi.fn();
      onPageReady(callback);

      expect(callback).toHaveBeenCalledTimes(1);

      // Simulate astro:after-swap event
      const event = new Event('astro:after-swap');
      document.dispatchEvent(event);

      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  describe('onPageSwap', () => {
    it('should not execute callback immediately', () => {
      const callback = vi.fn();
      onPageSwap(callback);

      expect(callback).not.toHaveBeenCalled();
    });

    it('should execute callback on astro:after-swap event', () => {
      const callback = vi.fn();
      onPageSwap(callback);

      // Simulate astro:after-swap event
      const event = new Event('astro:after-swap');
      document.dispatchEvent(event);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('onBeforeSwap', () => {
    it('should not execute callback immediately', () => {
      const callback = vi.fn();
      onBeforeSwap(callback);

      expect(callback).not.toHaveBeenCalled();
    });

    it('should execute callback on astro:before-swap event', () => {
      const callback = vi.fn();
      onBeforeSwap(callback);

      // Simulate astro:before-swap event
      const event = new Event('astro:before-swap');
      document.dispatchEvent(event);

      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('onCleanup', () => {
    it('should execute cleanup when element is removed from DOM', () => {
      const cleanup = vi.fn();
      const parent = document.createElement('div');
      const child = document.createElement('span');
      parent.appendChild(child);
      document.body.appendChild(parent);

      onCleanup(child, cleanup);

      // Remove child from DOM
      parent.removeChild(child);

      // MutationObserver is async, wait a bit
      return new Promise((resolve) => {
        setTimeout(() => {
          expect(cleanup).toHaveBeenCalledTimes(1);
          resolve(undefined);
        }, 50);
      });
    });

    it('should not execute cleanup if element is not removed', () => {
      const cleanup = vi.fn();
      const parent = document.createElement('div');
      const child = document.createElement('span');
      parent.appendChild(child);
      document.body.appendChild(parent);

      onCleanup(child, cleanup);

      // Don't remove, just wait
      return new Promise((resolve) => {
        setTimeout(() => {
          expect(cleanup).not.toHaveBeenCalled();
          resolve(undefined);
        }, 50);
      });
    });

    it('should handle element without parent gracefully', () => {
      const cleanup = vi.fn();
      const orphan = document.createElement('div');

      // Should not throw
      expect(() => onCleanup(orphan, cleanup)).not.toThrow();
    });
  });
});

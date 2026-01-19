/**
 * Optimized localStorage utilities with batching and error handling
 */

import { LOGGER } from './logger';
import { hasLocalStorage } from './browser';
import { sanitizeInput, INPUT_LIMITS } from './security';

const MAX_KEY_LENGTH = 100;
const BATCH_DELAY_MS = 300;
const MAX_BATCH_SIZE = 10;
const FLUSH_INTERVAL_MS = 30000;

interface StorageUpdate {
  key: string;
  value: string;
  timestamp: number;
}

class OptimizedStorage {
  private batchedUpdates: Map<string, StorageUpdate> = new Map();
  private batchTimer: NodeJS.Timeout | null = null;
  private readonly batchDelay = BATCH_DELAY_MS;
  private readonly maxBatchSize = MAX_BATCH_SIZE;

  /**
   * Schedule a batched localStorage update
   */
  setBatched(key: string, value: string): void {
    try {
      // Validate and sanitize input
      if (typeof key !== 'string' || typeof value !== 'string') {
        LOGGER.warn('Invalid storage key or value type');
        return;
      }

      if (key.length > MAX_KEY_LENGTH || value.length > INPUT_LIMITS.STORAGE_VALUE) {
        LOGGER.warn('Storage key or value too large');
        return;
      }

      // Add to batch
      this.batchedUpdates.set(key, {
        key,
        value: this.sanitizeValue(value),
        timestamp: Date.now(),
      });

      // If batch is full, flush immediately
      if (this.batchedUpdates.size >= this.maxBatchSize) {
        this.flushBatch();
        return;
      }

      // Otherwise, schedule delayed flush
      this.scheduleBatchFlush();
    } catch (error) {
      LOGGER.error('Failed to schedule storage update:', error);
    }
  }

  /**
   * Get item with error handling and sanitization
   */
  getItem(key: string): string | null {
    try {
      if (!hasLocalStorage()) return null;
      if (typeof key !== 'string' || key.length > MAX_KEY_LENGTH) {
        return null;
      }

      const item = localStorage.getItem(key);
      return item ? this.sanitizeValue(item) : null;
    } catch (error) {
      LOGGER.warn('Failed to read from localStorage:', error);
      return null;
    }
  }

  /**
   * Set item immediately (bypass batching for critical updates)
   */
  setItem(key: string, value: string): boolean {
    try {
      if (!hasLocalStorage()) return false;
      if (typeof key !== 'string' || typeof value !== 'string') {
        return false;
      }

      localStorage.setItem(key, this.sanitizeValue(value));
      return true;
    } catch (error) {
      LOGGER.warn('Failed to write to localStorage:', error);
      return false;
    }
  }

  /**
   * Remove item with error handling
   */
  removeItem(key: string): boolean {
    try {
      if (!hasLocalStorage()) return false;
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      LOGGER.warn('Failed to remove from localStorage:', error);
      return false;
    }
  }

  /**
   * Get multiple items efficiently
   */
  getMultiple(keys: string[]): Record<string, string | null> {
    const result: Record<string, string | null> = {};

    keys.forEach((key) => {
      result[key] = this.getItem(key);
    });

    return result;
  }

  /**
   * Set multiple items with batching
   */
  setMultiple(updates: Record<string, string>): void {
    Object.entries(updates).forEach(([key, value]) => {
      this.setBatched(key, value);
    });
  }

  /**
   * Force flush all pending updates
   */
  flush(): void {
    this.flushBatch();
  }

  /**
   * Clear all batched updates without writing
   */
  clearBatch(): void {
    this.batchedUpdates.clear();
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
      this.batchTimer = null;
    }
  }

  private scheduleBatchFlush(): void {
    if (this.batchTimer) {
      clearTimeout(this.batchTimer);
    }

    this.batchTimer = setTimeout(() => {
      this.flushBatch();
    }, this.batchDelay);
  }

  private flushBatch(): void {
    if (this.batchedUpdates.size === 0) return;
    if (!hasLocalStorage()) return;

    try {
      // Sort by timestamp to maintain order
      const updates = Array.from(this.batchedUpdates.values()).sort(
        (a, b) => a.timestamp - b.timestamp
      );

      // Batch write to localStorage
      updates.forEach(({ key, value }) => {
        localStorage.setItem(key, value);
      });

      LOGGER.debug(`Flushed ${updates.length} storage updates`);
    } catch (error) {
      LOGGER.error('Failed to flush storage batch:', error);
    } finally {
      // Clear batch regardless of success/failure
      this.batchedUpdates.clear();
      if (this.batchTimer) {
        clearTimeout(this.batchTimer);
        this.batchTimer = null;
      }
    }
  }

  private sanitizeValue(value: string): string {
    // Use centralized sanitization from security.ts
    return sanitizeInput(value, INPUT_LIMITS.STORAGE_VALUE);
  }
}

// Singleton instance
export const OPTIMIZED_STORAGE = new OptimizedStorage();

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    OPTIMIZED_STORAGE.flush();
  });

  // Flush periodically to prevent data loss
  setInterval(() => {
    OPTIMIZED_STORAGE.flush();
  }, FLUSH_INTERVAL_MS);
}

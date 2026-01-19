/**
 * Browser Environment Utilities
 * Centralized checks for browser/client-side environment
 */

/**
 * Check if code is running in a browser environment
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

const STORAGE_TEST_KEY = '__storage_test__';

/**
 * Check if localStorage is available
 */
export function hasLocalStorage(): boolean {
  if (!isBrowser()) return false;
  try {
    localStorage.setItem(STORAGE_TEST_KEY, STORAGE_TEST_KEY);
    localStorage.removeItem(STORAGE_TEST_KEY);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if navigator API is available
 */
export function hasNavigator(): boolean {
  return isBrowser() && typeof navigator !== 'undefined';
}

/**
 * Check if Web Share API is available
 */
export function canShare(): boolean {
  return hasNavigator() && 'share' in navigator;
}

/**
 * Check if running in development mode
 */
export const IS_DEV = import.meta.env?.DEV ?? false;

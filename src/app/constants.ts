/**
 * Application Constants
 *
 * Centralized constants used across the application to avoid magic strings and numbers.
 * Import from '@/app' for convenient access.
 */

// =============================================================================
// Theme Constants
// =============================================================================

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  DEFAULT: 'dark',
} as const;

export const PREFS_VERSION = '2';

// =============================================================================
// Browser Detection
// =============================================================================

export const BROWSER = {
  FIREFOX_UA: 'Firefox',
} as const;

// =============================================================================
// Navigation Loading Indicator
// =============================================================================

export const LOADING = {
  DELAY_MS: 200,
  DURATION_MS: 15000,
  MAX_PROGRESS: 90,
  COMPLETE_PROGRESS: 100,
  FADE_OUT_DELAY_MS: 300,
  RESET_DELAY_MS: 150,
} as const;

// =============================================================================
// Animation Delays
// =============================================================================

export const ANIMATION_DELAY = {
  PARTICLE_1: '0.1s',
  PARTICLE_2: '0.3s',
  PARTICLE_3: '0.5s',
} as const;

// =============================================================================
// Stagger Animation Delays (for grid items)
// =============================================================================

export const STAGGER_DELAY = {
  /** Fast stagger for compact grids (certification cards) - 30ms between items */
  FAST: 30,
  /** Medium stagger for larger cards (news items) - 50ms between items */
  MEDIUM: 50,
  /** Slow stagger for prominent elements - 100ms between items */
  SLOW: 100,
} as const;

// =============================================================================
// Layout Dimensions
// =============================================================================

export const LAYOUT = {
  HEADER_HEIGHT: 64,
  FOOTER_HEIGHT_APPROX: 120,
  SIDEBAR_WIDTH: 280,
} as const;

/**
 * Quiz Constants
 * Centralized configuration values for quiz functionality
 */

/**
 * Default passing score percentage for certifications
 */
export const DEFAULT_PASSING_SCORE = 75;

/**
 * Default step for question count options (10, 20, 30...)
 */
export const DEFAULT_QUESTION_STEP = 10;

/**
 * Milliseconds in one minute (used for time calculations)
 */
export const MILLISECONDS_PER_MINUTE = 60000;

/**
 * Load more defaults for paginated content
 */
export const LOAD_MORE_DEFAULTS = {
  initialVisible: 9,
  loadMoreCount: 6,
} as const;

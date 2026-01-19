/**
 * Study Guide Utility Types
 * Internal types used by study guide utilities
 */

/**
 * Linux Foundation course data
 */
export interface LFCourse {
  title: string;
  url: string;
  description?: string;
  difficulty?: string;
  duration?: string;
}

/**
 * Translation function type
 */
export interface TranslationFn {
  (key: string): string;
}

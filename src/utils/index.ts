/**
 * Utility Functions - Barrel Export
 *
 * This module re-exports all utility functions from their respective modules.
 * Import from '@/utils' for convenience.
 *
 * Structure:
 * - colors.ts      → Level, difficulty, paid status, step, and domain colors
 * - news-colors.ts → News category-specific colors and filter styles
 * - browser.ts     → Browser environment detection
 * - dom.ts         → DOM manipulation helpers (toggles, class updates)
 * - url.ts         → URL building for i18n
 * - date.ts        → Date formatting with presets
 * - security.ts    → Input sanitization and validation
 * - storage.ts     → localStorage with batching and error handling
 * - logger.ts      → Development logging (import directly)
 * - icons/         → Icon mapping and SVG paths
 * - quiz/          → Quiz calculation, state, and sharing
 * - study-guide/   → Study section building
 */

// =============================================================================
// Color Utilities
// =============================================================================

export {
  // Certification levels
  getLevelColors,
  getLevelBadgeClass,
  // Resource difficulty
  getDifficultyColors,
  getDifficultyClass,
  // Paid/Free status
  getPaidStatusColors,
  getPaidStatusClass,
  // Step colors
  getStepColors,
  // Domain colors (step colors + badge)
  getDomainColors,
  // Achievement colors
  getAchievementStepColors,
  getAchievementHeroColors,
  // Types
  type LevelColors,
  type BadgeColors,
  type StepColors,
  type DomainColors,
  type DifficultyLevel,
  type AchievementStepColors,
  type AchievementHeroColors,
  type AchievementHeroTheme,
} from './colors';

export {
  getCategoryStyles,
  getCategoryBadgeVariant,
  getFilterColorsForClient,
  type NewsCategory,
  type CategoryStyle,
  type BadgeVariant,
} from './news-colors';

// =============================================================================
// Icon Utilities
// =============================================================================

export {
  // Icon name mappings
  getIconName,
  getCategoryIconName,
  // Client-side SVG paths
  SEARCH_ICONS,
  QUIZ_ICONS,
  SOCIAL_ICON_PATHS,
  BEST_PRACTICES_ICONS,
  NEWS_ICONS,
  STUDY_GUIDE_ICONS,
  // Types
  type IconName,
} from './icons';

export {
  // Icon box HTML generators
  generateIconBoxHTML,
  generateTextBoxHTML,
  generateFilledIconBoxHTML,
  ICON_BOX_PRESETS,
  // Types
  type IconBoxConfig,
} from './icon-box';

// =============================================================================
// Browser & DOM Utilities
// =============================================================================

export { isBrowser, hasLocalStorage, hasNavigator, canShare, IS_DEV } from './browser';

export {
  toggleChevronRotation,
  toggleGridContent,
  addClasses,
  removeClasses,
  replaceClasses,
} from './dom';

// =============================================================================
// Event Utilities
// =============================================================================

export {
  removeAllListeners,
  addCleanableListener,
  smoothScrollToElement,
  initScrollToButtons,
} from './events';

// =============================================================================
// URL & Date Utilities
// =============================================================================

export {
  buildLocalizedPath,
  buildCertificationUrl,
  getLocalizedBasePath,
  getAssetPath,
} from './url';

export { formatDate, getMonthKey, formatMonthLabel } from './date';

// =============================================================================
// Security & Storage Utilities
// =============================================================================

export { sanitizeInput, INPUT_LIMITS } from './security';

export { OPTIMIZED_STORAGE } from './storage';

// =============================================================================
// Search Utilities
// =============================================================================

export { calculateFuzzyScore, getScoreThreshold, SEARCH_CONFIG } from './search-scoring';

// =============================================================================
// Hash Utilities
// =============================================================================

export { generateHashId } from './hash';

// =============================================================================
// Dropdown Utilities
// =============================================================================

export {
  DropdownManager,
  setupSimpleDropdown,
  type DropdownElements,
  type DropdownOptions,
} from './dropdown';

// =============================================================================
// Quiz Utilities
// =============================================================================

export { canShareFiles } from './quiz/share';

/**
 * App Module
 * Centralized application configuration
 *
 * This module consolidates all application-level configuration:
 * - config: App identity and external URLs
 * - theme: Visual styling constants
 * - navigation: Sidebar and navigation structure
 */

// Core configuration
export { APP_CONFIG, EXTERNAL_URLS } from './config';

// Theme/styling
export { CERTIFICATION_GRADIENTS, FOCUS_RING, TOUCH_TARGET, CARDS, GRIDS } from './theme';

// Navigation
export {
  CERTIFICATION_CATEGORIES,
  KUBESTRONAUT_CERT_IDS,
  GOLDEN_ADDITIONAL_CERT_IDS,
  ACHIEVEMENTS_ITEMS,
  RESOURCES_ITEMS,
  NEWS_UPDATES_ITEMS,
  EXTERNAL_LINKS_ITEMS,
  groupCertificationsByCategory,
} from './navigation';

// Constants
export {
  THEME,
  PREFS_VERSION,
  BROWSER,
  LOADING,
  ANIMATION_DELAY,
  STAGGER_DELAY,
  LAYOUT,
} from './constants';

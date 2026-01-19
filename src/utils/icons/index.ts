/**
 * Icon System
 * Uses astro-icon with Heroicons and Simple Icons
 *
 * Usage in Astro components:
 *   import Icon from '@/components/ui/Icon.astro';
 *   <Icon name="check" size="md" />
 *
 * For client-side JS that needs icon paths, import from client-paths:
 *   import { QUIZ_ICONS } from '@/utils/icons/client-paths';
 */

// Icon name mappings and utilities
export { getIconName, getCategoryIconName, type IconName } from './mapping';

// Client-side icon paths (for JavaScript that renders icons dynamically)
export {
  SEARCH_ICONS,
  QUIZ_ICONS,
  SOCIAL_ICON_PATHS,
  BEST_PRACTICES_ICONS,
  NEWS_ICONS,
  STUDY_GUIDE_ICONS,
} from './client-paths';

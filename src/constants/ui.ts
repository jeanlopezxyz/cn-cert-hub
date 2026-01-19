/**
 * UI Constants
 * Reusable CSS class patterns for consistent styling
 */

/**
 * Common card styles
 */
export const CARD_STYLES = {
  /**
   * Base card with border and rounded corners
   */
  bordered:
    'rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800',

  /**
   * Card section with padding and background
   */
  section:
    'rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800',

  /**
   * Default card with shadow
   */
  default: 'rounded-xl overflow-hidden bg-white dark:bg-neutral-800 shadow-sm',

  /**
   * Card with hover effect
   */
  hover:
    'rounded-xl overflow-hidden bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-200',

  /**
   * Colored card background patterns
   */
  colored: {
    blue: 'bg-blue-50 dark:bg-blue-600/20',
    emerald: 'bg-emerald-50 dark:bg-emerald-600/20',
    violet: 'bg-violet-50 dark:bg-violet-600/20',
    amber: 'bg-amber-50 dark:bg-amber-600/20',
    sky: 'bg-sky-50 dark:bg-sky-600/20',
    teal: 'bg-teal-50 dark:bg-teal-600/20',
    indigo: 'bg-indigo-50 dark:bg-indigo-600/20',
    purple: 'bg-purple-50 dark:bg-purple-600/20',
  },

  /**
   * Gradient card backgrounds
   */
  gradient: {
    blueWhite:
      'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-neutral-800/50',
    amberWhite:
      'bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/30 dark:to-neutral-800/50',
    emeraldWhite:
      'bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-neutral-800/50',
    purpleWhite:
      'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-neutral-800/50',
  },
} as const;

/**
 * Common spacing patterns
 */
export const SPACING = {
  /**
   * Standard section padding
   */
  section: 'p-4 sm:p-5 lg:p-6',

  /**
   * Card padding
   */
  card: 'p-4 sm:p-5',

  /**
   * Compact padding
   */
  compact: 'p-3 sm:p-4',
} as const;

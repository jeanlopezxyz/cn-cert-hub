/**
 * Icon Name Mapping
 * Maps short icon names to their full Iconify identifiers
 * Heroicons: https://heroicons.com/
 * Simple Icons: https://simpleicons.org/
 */

/**
 * Heroicons mapping (outline style by default)
 * Format: heroicons:icon-name
 */
const ICON_MAP = {
  // Category icons
  certification: 'heroicons:academic-cap',
  scholarship: 'heroicons:currency-dollar',
  calendar: 'heroicons:calendar',
  announcement: 'heroicons:megaphone',

  // Navigation icons
  chevronDown: 'heroicons:chevron-down',
  chevronUp: 'heroicons:chevron-up',
  chevronRight: 'heroicons:chevron-right',
  chevronLeft: 'heroicons:chevron-left',
  arrowRight: 'heroicons:arrow-right',
  arrowLeft: 'heroicons:arrow-left',
  home: 'heroicons:home',

  // Action icons
  close: 'heroicons:x-mark',
  check: 'heroicons:check',
  plus: 'heroicons:plus',
  minus: 'heroicons:minus',
  search: 'heroicons:magnifying-glass',
  filter: 'heroicons:funnel',
  menu: 'heroicons:bars-3',
  refresh: 'heroicons:arrow-path',
  sync: 'heroicons:arrow-path',
  download: 'heroicons:arrow-down-tray',
  share: 'heroicons:share',
  copy: 'heroicons:clipboard',

  // Status icons
  checkCircle: 'heroicons:check-circle',
  xCircle: 'heroicons:x-circle',
  warning: 'heroicons:exclamation-triangle',
  info: 'heroicons:information-circle',
  badgeCheck: 'heroicons:check-badge',

  // Object icons
  newspaper: 'heroicons:newspaper',
  book: 'heroicons:book-open',
  document: 'heroicons:document',
  documentText: 'heroicons:document-text',
  computer: 'heroicons:computer-desktop',
  clipboard: 'heroicons:clipboard-document-list',
  clipboardCheck: 'heroicons:clipboard-document-check',
  archive: 'heroicons:archive-box',
  link: 'heroicons:link',
  externalLink: 'heroicons:arrow-top-right-on-square',

  // Miscellaneous icons
  star: 'heroicons:star',
  rocket: 'heroicons:rocket-launch',
  trophy: 'heroicons:trophy',
  clock: 'heroicons:clock',
  globe: 'heroicons:globe-alt',
  sparkles: 'heroicons:sparkles',
  code: 'heroicons:code-bracket',
  play: 'heroicons:play',
  shield: 'heroicons:shield-check',
  lightbulb: 'heroicons:light-bulb',
  questionCircle: 'heroicons:question-mark-circle',

  // Theme icons
  sun: 'heroicons:sun',
  moon: 'heroicons:moon',

  // Quiz icons
  quiz: 'heroicons:question-mark-circle',
  bolt: 'heroicons:bolt',
  flag: 'heroicons:flag',
} as const;

/**
 * Social media icons (Simple Icons)
 * Format: simple-icons:icon-name
 */
const SOCIAL_ICON_MAP = {
  github: 'simple-icons:github',
  whatsapp: 'simple-icons:whatsapp',
  twitter: 'simple-icons:x',
  linkedin: 'simple-icons:linkedin',
} as const;

/**
 * Filled icon variants (Heroicons solid)
 * Format: heroicons:icon-name-solid
 */
const FILLED_ICON_MAP = {
  infoCircle: 'heroicons:information-circle-solid',
  checkCircle: 'heroicons:check-circle-solid',
  xCircle: 'heroicons:x-circle-solid',
  warning: 'heroicons:exclamation-triangle-solid',
} as const;

export type IconName = keyof typeof ICON_MAP;
type SocialIconName = keyof typeof SOCIAL_ICON_MAP;
type FilledIconName = keyof typeof FILLED_ICON_MAP;

const ICONIFY_SEPARATOR = ':';
const HEROICONS_PREFIX = 'heroicons:';

/**
 * Get the full Iconify icon name from a short name
 *
 * @param name - Short icon name or full Iconify identifier
 * @param filled - Whether to use filled/solid variant (for compatible icons)
 * @returns Full Iconify identifier (e.g., 'heroicons:check' or 'simple-icons:github')
 */
export function getIconName(name: string, filled = false): string {
  if (filled && name in FILLED_ICON_MAP) {
    return FILLED_ICON_MAP[name as FilledIconName];
  }
  if (name in ICON_MAP) {
    return ICON_MAP[name as IconName];
  }
  if (name in SOCIAL_ICON_MAP) {
    return SOCIAL_ICON_MAP[name as SocialIconName];
  }
  // If already a full iconify name, return as-is
  if (name.includes(ICONIFY_SEPARATOR)) {
    return name;
  }
  // Fallback: assume it's a heroicons name
  return `${HEROICONS_PREFIX}${name}`;
}

/**
 * Category to icon mapping for news
 */
const CATEGORY_ICON_MAP = {
  all: 'newspaper',
  certifications: 'certification',
  scholarships: 'scholarship',
  events: 'calendar',
  announcements: 'announcement',
} as const;

type CategoryIconKey = keyof typeof CATEGORY_ICON_MAP;

const DEFAULT_CATEGORY_ICON: IconName = 'announcement';

/**
 * Get icon name for a news category
 *
 * @param category - Category key ('all', 'certifications', 'scholarships', etc.)
 * @returns Icon name mapped to the category
 */
export function getCategoryIconName(category: string): IconName {
  const key = category as CategoryIconKey;
  return (CATEGORY_ICON_MAP[key] ?? DEFAULT_CATEGORY_ICON) as IconName;
}

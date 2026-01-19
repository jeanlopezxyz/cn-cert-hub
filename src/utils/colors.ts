/**
 * Shared color utilities for consistent styling across components
 *
 * This module provides centralized color definitions for:
 * - Certification levels (entry, intermediate, advanced, professional)
 * - Resource difficulty (beginner, intermediate, advanced)
 * - Paid/Free status badges
 * - Step/index colors for numbered lists
 */

// =============================================================================
// Base Types
// =============================================================================

export interface LevelColors {
  bg: string;
  text: string;
  icon: string;
}

export interface BadgeColors {
  bg: string;
  text: string;
}

// =============================================================================
// Certification Level Colors
// =============================================================================

/**
 * Color mapping for certification levels
 */
const LEVEL_COLORS: Record<string, LevelColors> = {
  entry: {
    bg: 'bg-emerald-50 dark:bg-emerald-600/20',
    text: 'text-emerald-700 dark:text-emerald-300',
    icon: 'bg-emerald-600',
  },
  intermediate: {
    bg: 'bg-blue-50 dark:bg-blue-600/20',
    text: 'text-blue-700 dark:text-blue-300',
    icon: 'bg-blue-600',
  },
  advanced: {
    bg: 'bg-violet-50 dark:bg-violet-600/20',
    text: 'text-violet-700 dark:text-violet-300',
    icon: 'bg-violet-600',
  },
  professional: {
    bg: 'bg-amber-50 dark:bg-amber-500/20',
    text: 'text-amber-700 dark:text-amber-300',
    icon: 'bg-amber-500',
  },
};

/**
 * Get colors for a certification level
 * Defaults to intermediate level if not found
 */
export function getLevelColors(level: string): LevelColors {
  return (LEVEL_COLORS[level] || LEVEL_COLORS.intermediate) as LevelColors;
}

/**
 * Get combined class string for level badge
 */
export function getLevelBadgeClass(level: string): string {
  const colors = getLevelColors(level);
  return `${colors.bg} ${colors.text}`;
}

// =============================================================================
// Resource Difficulty Colors
// =============================================================================

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

const DIFFICULTY_COLORS: Record<DifficultyLevel, BadgeColors> = {
  beginner: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  intermediate: {
    bg: 'bg-orange-100 dark:bg-orange-900/50',
    text: 'text-orange-700 dark:text-orange-300',
  },
  advanced: {
    bg: 'bg-rose-100 dark:bg-rose-900/50',
    text: 'text-rose-700 dark:text-rose-300',
  },
};

/**
 * Get colors for resource difficulty level
 * Used by CertificationStudyGuide for resource badges
 */
export function getDifficultyColors(difficulty?: string): BadgeColors {
  return DIFFICULTY_COLORS[difficulty as DifficultyLevel] ?? DIFFICULTY_COLORS.intermediate;
}

/**
 * Get full class string for difficulty badge
 */
export function getDifficultyClass(difficulty?: string): string {
  const colors = getDifficultyColors(difficulty);
  return `${colors.bg} ${colors.text}`;
}

// =============================================================================
// Paid/Free Status Colors
// =============================================================================

const PAID_STATUS_COLORS = {
  free: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/50',
    text: 'text-emerald-700 dark:text-emerald-300',
  },
  paid: {
    bg: 'bg-amber-100 dark:bg-amber-900/50',
    text: 'text-amber-700 dark:text-amber-300',
  },
} as const;

/**
 * Get colors for paid/free status badge
 */
export function getPaidStatusColors(isPaid?: boolean): BadgeColors {
  return isPaid ? PAID_STATUS_COLORS.paid : PAID_STATUS_COLORS.free;
}

/**
 * Get full class string for paid status badge
 */
export function getPaidStatusClass(isPaid?: boolean): string {
  const colors = getPaidStatusColors(isPaid);
  return `${colors.bg} ${colors.text}`;
}

// =============================================================================
// Safe Index Helper (for cyclic color arrays)
// =============================================================================

/**
 * Calculate safe cyclic index for color arrays
 * Handles negative values and index overflow
 */
function getSafeColorIndex(index: number, arrayLength: number, oneBased = false): number {
  const adjustedIndex = oneBased ? index - 1 : index;
  return Math.abs(adjustedIndex) % arrayLength;
}

// =============================================================================
// Step/Index Colors (for numbered lists, steps, etc.)
// =============================================================================

export interface StepColors {
  bg: string;
  icon: string;
  text: string;
  accent: string;
}

const STEP_COLORS: StepColors[] = [
  {
    bg: 'bg-blue-50 dark:bg-blue-900/30',
    icon: 'bg-blue-600',
    text: 'text-blue-700 dark:text-blue-300',
    accent: 'text-blue-600 dark:text-blue-400',
  },
  {
    bg: 'bg-emerald-50 dark:bg-emerald-900/30',
    icon: 'bg-emerald-600',
    text: 'text-emerald-700 dark:text-emerald-300',
    accent: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    bg: 'bg-violet-50 dark:bg-violet-900/30',
    icon: 'bg-violet-600',
    text: 'text-violet-700 dark:text-violet-300',
    accent: 'text-violet-600 dark:text-violet-400',
  },
  {
    bg: 'bg-amber-50 dark:bg-amber-900/30',
    icon: 'bg-amber-500',
    text: 'text-amber-700 dark:text-amber-300',
    accent: 'text-amber-600 dark:text-amber-400',
  },
  {
    bg: 'bg-rose-50 dark:bg-rose-900/30',
    icon: 'bg-rose-600',
    text: 'text-rose-700 dark:text-rose-300',
    accent: 'text-rose-600 dark:text-rose-400',
  },
  {
    bg: 'bg-cyan-50 dark:bg-cyan-900/30',
    icon: 'bg-cyan-600',
    text: 'text-cyan-700 dark:text-cyan-300',
    accent: 'text-cyan-600 dark:text-cyan-400',
  },
];

/**
 * Get colors for a step/index (0-based or 1-based)
 * Cycles through colors if index exceeds available colors
 */
export function getStepColors(index: number, oneBased = false): StepColors {
  const safeIndex = getSafeColorIndex(index, STEP_COLORS.length, oneBased);
  return STEP_COLORS[safeIndex] as StepColors;
}

// =============================================================================
// Domain Colors (extends StepColors with badge styling)
// =============================================================================

export interface DomainColors extends StepColors {
  badge: string;
}

/**
 * Badge color mapping for each step color
 */
const BADGE_COLORS: string[] = [
  'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300',
  'bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300',
  'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
  'bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300',
  'bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300',
];

/**
 * Get domain colors (includes badge styling)
 * Used by CertificationStudyGuide for domain cards
 */
export function getDomainColors(index: number, oneBased = false): DomainColors {
  const stepColors = getStepColors(index, oneBased);
  const safeIndex = getSafeColorIndex(index, BADGE_COLORS.length, oneBased);
  return {
    ...stepColors,
    badge: BADGE_COLORS[safeIndex] as string,
  };
}

// =============================================================================
// Achievement Step Colors (sky → blue → indigo progression)
// =============================================================================

export interface AchievementStepColors {
  bg: string;
  icon: string;
  text: string;
}

const ACHIEVEMENT_STEP_COLORS: AchievementStepColors[] = [
  {
    bg: 'bg-sky-50 dark:bg-sky-600/20',
    icon: 'bg-sky-600',
    text: 'text-sky-600 dark:text-sky-400',
  },
  {
    bg: 'bg-blue-50 dark:bg-blue-600/20',
    icon: 'bg-blue-600',
    text: 'text-blue-600 dark:text-blue-400',
  },
  {
    bg: 'bg-indigo-50 dark:bg-indigo-600/20',
    icon: 'bg-indigo-600',
    text: 'text-indigo-600 dark:text-indigo-400',
  },
];

/**
 * Get colors for achievement steps (1-based index)
 * Uses sky → blue → indigo color progression
 */
export function getAchievementStepColors(stepNumber: number): AchievementStepColors {
  const safeIndex = getSafeColorIndex(stepNumber, ACHIEVEMENT_STEP_COLORS.length, true);
  return ACHIEVEMENT_STEP_COLORS[safeIndex] as AchievementStepColors;
}

// =============================================================================
// Achievement Hero Colors (cosmic/golden themes)
// =============================================================================

export interface AchievementHeroColors {
  cardBg: string;
  iconBg: string;
  titleColor: string;
  descColor: string;
  badgeBg: string;
  badgeText: string;
  countBg: string;
  countText: string;
}

const ACHIEVEMENT_HERO_THEMES: Record<'cosmic' | 'golden', AchievementHeroColors> = {
  cosmic: {
    cardBg:
      'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900',
    iconBg: 'bg-white/20',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    badgeBg: 'bg-white/20 backdrop-blur-sm',
    badgeText: 'text-white',
    countBg: 'bg-white/20 backdrop-blur-sm',
    countText: 'text-white',
  },
  golden: {
    cardBg:
      'bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 dark:from-[#D97706] dark:via-[#F59E0B] dark:to-[#EAB308]',
    iconBg: 'bg-white/20',
    titleColor: 'text-white',
    descColor: 'text-white/90',
    badgeBg: 'bg-white/20 backdrop-blur-sm',
    badgeText: 'text-white',
    countBg: 'bg-white/20 backdrop-blur-sm',
    countText: 'text-white',
  },
};

export type AchievementHeroTheme = keyof typeof ACHIEVEMENT_HERO_THEMES;

/**
 * Get colors for achievement hero cards
 */
export function getAchievementHeroColors(
  theme: AchievementHeroTheme = 'cosmic'
): AchievementHeroColors {
  return ACHIEVEMENT_HERO_THEMES[theme];
}

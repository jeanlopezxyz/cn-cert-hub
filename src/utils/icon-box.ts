/**
 * Icon Box HTML Generator
 * Helper function to generate consistent circular icon containers for client-side rendering
 */

export interface IconBoxConfig {
  /**
   * Size class for the container
   * @default 'w-10 h-10'
   */
  size?: string;
  /**
   * Background color classes
   * @default 'bg-primary-600'
   */
  bgColor?: string;
  /**
   * Icon color classes
   * @default 'text-white'
   */
  iconColor?: string;
  /**
   * Border radius variant
   * @default 'rounded-full'
   */
  rounded?: string;
  /**
   * Additional CSS classes for container
   */
  containerClass?: string;
  /**
   * Additional CSS classes for icon/content
   */
  contentClass?: string;
}

/**
 * Generates HTML for a circular icon box with SVG
 */
export function generateIconBoxHTML(svgPath: string, config: IconBoxConfig = {}): string {
  const {
    size = 'w-10 h-10',
    bgColor = 'bg-primary-600',
    iconColor = 'text-white',
    rounded = 'rounded-full',
    containerClass = '',
    contentClass = '',
  } = config;

  return `<div class="${size} ${rounded} ${bgColor} flex items-center justify-center flex-shrink-0 ${containerClass}">
    <svg class="w-5 h-5 ${iconColor} ${contentClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="${svgPath}" />
    </svg>
  </div>`;
}

/**
 * Generates HTML for a circular text box (e.g., letter indicators)
 */
export function generateTextBoxHTML(text: string, config: IconBoxConfig = {}): string {
  const {
    size = 'w-10 h-10',
    bgColor = 'bg-primary-600',
    iconColor = 'text-white',
    rounded = 'rounded-full',
    containerClass = '',
    contentClass = '',
  } = config;

  return `<div class="${size} ${rounded} ${bgColor} flex items-center justify-center flex-shrink-0 ${containerClass}">
    <span class="text-base font-bold ${iconColor} ${contentClass}">${text}</span>
  </div>`;
}

/**
 * Generates HTML for a filled SVG icon box (for social icons)
 */
export function generateFilledIconBoxHTML(svgPath: string, config: IconBoxConfig = {}): string {
  const {
    size = 'w-10 h-10',
    bgColor = 'bg-primary-600',
    iconColor = 'text-white',
    rounded = 'rounded-full',
    containerClass = '',
    contentClass = '',
  } = config;

  return `<div class="${size} ${rounded} ${bgColor} flex items-center justify-center ${containerClass}">
    <svg class="w-5 h-5 ${iconColor} ${contentClass}" fill="currentColor" viewBox="0 0 24 24">
      <path d="${svgPath}"/>
    </svg>
  </div>`;
}

/**
 * Preset configurations for common use cases
 */
export const ICON_BOX_PRESETS = {
  // Quiz options
  quizCorrect: {
    bgColor: 'bg-emerald-600',
    iconColor: 'text-white',
  },
  quizIncorrect: {
    bgColor: 'bg-rose-600',
    iconColor: 'text-white',
  },
  quizNeutral: {
    bgColor: 'bg-neutral-300 dark:bg-neutral-600',
    iconColor: 'text-neutral-700 dark:text-neutral-200',
  },
  quizSelected: {
    bgColor: 'bg-primary-600',
    iconColor: 'text-white',
  },
  quizDefault: {
    bgColor: 'bg-neutral-200 dark:bg-neutral-700',
    iconColor: 'text-neutral-700 dark:text-neutral-200',
    containerClass:
      'group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors',
    contentClass:
      'group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors',
  },
  // Social share
  shareWhatsApp: {
    bgColor: 'bg-green-600',
    iconColor: 'text-white',
  },
  shareLinkedIn: {
    bgColor: 'bg-blue-600',
    iconColor: 'text-white',
  },
  shareTwitter: {
    bgColor: 'bg-neutral-800',
    iconColor: 'text-white',
  },
  shareDownload: {
    bgColor: 'bg-amber-500',
    iconColor: 'text-white',
  },
} as const;

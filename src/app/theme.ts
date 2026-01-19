/**
 * Theme Configuration
 * Visual styling constants
 */

/**
 * Certification Card Gradient Colors
 * Used for certification cards and badges
 */
export const CERTIFICATION_GRADIENTS = {
  // Kubernetes core certifications (CKA, CKAD, CKS, KCNA, KCSA)
  kubernetes: 'from-blue-600 to-blue-800',
  // Cloud native certifications (KCA, ICA, CCA, CBA, CGOA, CNPA, OTCA, CAPA, PCA)
  cloudNative: 'from-blue-700 to-indigo-800',
  // Linux certifications (LFCS)
  linux: 'from-indigo-600 to-sky-700',
  // Security certifications (CNPE)
  security: 'from-indigo-700 to-purple-800',
} as const;

// Focus Ring - Standardized focus states for accessibility
export const FOCUS_RING = {
  base: 'focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-neutral-800',
} as const;

// Touch Target - Minimum touch target sizes for accessibility (WCAG 2.5.5)
export const TOUCH_TARGET = {
  min: 'min-h-[44px]',
  minSquare: 'min-h-[44px] min-w-[44px]',
  comfortable: 'min-h-[48px]',
} as const;

// Card Styles - Standardized card patterns
export const CARDS = {
  base: 'rounded-xl overflow-hidden transition-all duration-200',
  interactive: 'hover:shadow-lg hover:-translate-y-0.5',
  bordered: 'border border-neutral-200 dark:border-neutral-700',
  elevated: 'shadow-md',
} as const;

// Grid Layouts - Standardized grid patterns
export const GRIDS = {
  cards: {
    responsive: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
    responsiveFour: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    twoColumn: 'grid grid-cols-1 lg:grid-cols-2',
    autoFit: 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
  },
  gap: {
    sm: 'gap-3 sm:gap-4',
    md: 'gap-4 sm:gap-5',
    lg: 'gap-5 sm:gap-6',
  },
} as const;

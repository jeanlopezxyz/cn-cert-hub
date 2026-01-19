/**
 * Best Practices Configuration
 * Main categories, icons, and priority settings
 */

import type { MainCategoryConfig, PriorityConfig } from './types';

export const CATEGORY_ICON_PATHS = {
  infrastructure:
    'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z',
  applications:
    'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',
  networking:
    'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  security:
    'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  observability:
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  cicd: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
} as const;

export const MAIN_CATEGORIES: MainCategoryConfig[] = [
  {
    id: 'infrastructure',
    labelKey: 'bestPractices.category.infrastructure',
    iconPath: CATEGORY_ICON_PATHS.infrastructure,
    color: 'from-blue-500 to-blue-600',
    subcategories: ['operations', 'highavailability', 'storage', 'multitenancy'],
  },
  {
    id: 'applications',
    labelKey: 'bestPractices.category.applications',
    iconPath: CATEGORY_ICON_PATHS.applications,
    color: 'from-purple-500 to-purple-600',
    subcategories: ['containerization', 'development', 'stateful'],
  },
  {
    id: 'networking',
    labelKey: 'bestPractices.category.networking',
    iconPath: CATEGORY_ICON_PATHS.networking,
    color: 'from-cyan-500 to-cyan-600',
    subcategories: ['networkpolicies', 'servicemesh'],
  },
  {
    id: 'security',
    labelKey: 'bestPractices.category.security',
    iconPath: CATEGORY_ICON_PATHS.security,
    color: 'from-red-500 to-red-600',
    subcategories: ['accesscontrol', 'compliance', 'devsecops'],
  },
  {
    id: 'observability',
    labelKey: 'bestPractices.category.observability',
    iconPath: CATEGORY_ICON_PATHS.observability,
    color: 'from-emerald-500 to-emerald-600',
    subcategories: ['observability'],
  },
  {
    id: 'cicd',
    labelKey: 'bestPractices.category.cicd',
    iconPath: CATEGORY_ICON_PATHS.cicd,
    color: 'from-amber-500 to-amber-600',
    subcategories: ['gitops', 'costoptimization'],
  },
];

export const PRIORITY_CONFIG: Record<string, PriorityConfig> = {
  critical: {
    labelKey: 'bestPractices.priority.critical',
    color: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    dot: 'bg-red-500',
  },
  important: {
    labelKey: 'bestPractices.priority.important',
    color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    dot: 'bg-amber-500',
  },
  recommended: {
    labelKey: 'bestPractices.priority.recommended',
    color: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    dot: 'bg-green-500',
  },
};

/**
 * Best Practices Data Layer
 * Centralized exports for best practices configuration and data
 */

// Types
export type {
  MainCategoryType,
  SubCategoryType,
  Priority,
  BestPracticeItem,
  BestPractice,
  MainCategoryConfig,
  TabConfig,
  PriorityConfig,
} from './types';

// Configuration
export { CATEGORY_ICON_PATHS, MAIN_CATEGORIES, PRIORITY_CONFIG } from './config';

// Shared Constants
export {
  COMMON_ICON_PATHS,
  COMMON_CODE_SNIPPETS,
  COLOR_SCHEMES,
  createColorScheme,
} from './constants';

// Practice Data - Each category in its own file for easier collaboration
export { TABS_CONFIG } from './practices';

// Individual category exports for direct access
export {
  CONTAINERIZATION_PRACTICES,
  DEVELOPMENT_PRACTICES,
  ACCESS_CONTROL_PRACTICES,
  NETWORK_POLICIES_PRACTICES,
  OBSERVABILITY_PRACTICES,
  STORAGE_PRACTICES,
  GITOPS_PRACTICES,
  HIGH_AVAILABILITY_PRACTICES,
  COST_OPTIMIZATION_PRACTICES,
  SERVICE_MESH_PRACTICES,
  OPERATIONS_PRACTICES,
  MULTI_TENANCY_PRACTICES,
  STATEFUL_PRACTICES,
  COMPLIANCE_PRACTICES,
  DEVSECOPS_PRACTICES,
} from './practices';

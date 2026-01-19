/**
 * Best Practices - Combined exports
 * Each category is in its own file for easier collaboration
 */
import { CONTAINERIZATION_PRACTICES } from './containerization';
import { DEVELOPMENT_PRACTICES } from './development';
import { ACCESS_CONTROL_PRACTICES } from './access-control';
import { NETWORK_POLICIES_PRACTICES } from './network-policies';
import { OBSERVABILITY_PRACTICES } from './observability';
import { STORAGE_PRACTICES } from './storage';
import { GITOPS_PRACTICES } from './gitops';
import { HIGH_AVAILABILITY_PRACTICES } from './high-availability';
import { COST_OPTIMIZATION_PRACTICES } from './cost-optimization';
import { SERVICE_MESH_PRACTICES } from './service-mesh';
import { OPERATIONS_PRACTICES } from './operations';
import { MULTI_TENANCY_PRACTICES } from './multi-tenancy';
import { STATEFUL_PRACTICES } from './stateful';
import { COMPLIANCE_PRACTICES } from './compliance';
import { DEVSECOPS_PRACTICES } from './devsecops';

import type { TabConfig } from '@/data/best-practices/types';

export const TABS_CONFIG: TabConfig[] = [
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
];

// Re-export individual categories for direct access
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
};

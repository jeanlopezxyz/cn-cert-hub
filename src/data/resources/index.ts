/**
 * Central Resources Index
 *
 * This file exports all certification resources from a single location.
 * Contributors can add resources to individual certification files
 * and they will be automatically available throughout the application.
 *
 * File Structure:
 * - Each certification has its own resource file (e.g., kcna.ts, cka.ts)
 * - Resources follow the CertificationResources interface from types/index.ts
 * - Resources are organized by category (books, courses, videos, etc.)
 * - Linux Foundation free courses are available in lf-free-courses.ts
 *
 * How to add resources:
 * 1. Find the certification file (e.g., src/data/resources/cka.ts)
 * 2. Add your resource to the appropriate category
 * 3. Include all required fields for the resource type
 * 4. Verify URLs are valid and accessible
 */

import type { CertificationResources } from '@/types';

// Common Resource Factories
export * from './common-resources';

// Linux Foundation Free Courses
export {
  LF_FREE_COURSES,
  getCoursesForCertification,
  type LFFreeCourse,
  type LFTopicArea,
} from './lf-free-courses';

// Import all resources (single import, then re-export)
import { KCNA_RESOURCES } from './kcna';
import { KCSA_RESOURCES } from './kcsa';
import { CKA_RESOURCES } from './cka';
import { CKAD_RESOURCES } from './ckad';
import { CKS_RESOURCES } from './cks';
import { CAPA_RESOURCES } from './capa';
import { CBA_RESOURCES } from './cba';
import { CCA_RESOURCES } from './cca';
import { CGOA_RESOURCES } from './cgoa';
import { CNPA_RESOURCES } from './cnpa';
import { CNPE_RESOURCES } from './cnpe';
import { ICA_RESOURCES } from './ica';
import { KCA_RESOURCES } from './kca';
import { OTCA_RESOURCES } from './otca';
import { PCA_RESOURCES } from './pca';
import { LFCS_RESOURCES } from './lfcs';

// Re-export all resources for consumers
export {
  KCNA_RESOURCES,
  KCSA_RESOURCES,
  CKA_RESOURCES,
  CKAD_RESOURCES,
  CKS_RESOURCES,
  CAPA_RESOURCES,
  CBA_RESOURCES,
  CCA_RESOURCES,
  CGOA_RESOURCES,
  CNPA_RESOURCES,
  CNPE_RESOURCES,
  ICA_RESOURCES,
  KCA_RESOURCES,
  OTCA_RESOURCES,
  PCA_RESOURCES,
  LFCS_RESOURCES,
};

/**
 * Map of certification ID to resources
 * Use this to get resources for a specific certification
 */
export const RESOURCES_BY_CERTIFICATION: Record<string, CertificationResources> = {
  // Kubestronaut certifications
  kcna: KCNA_RESOURCES,
  kcsa: KCSA_RESOURCES,
  cka: CKA_RESOURCES,
  ckad: CKAD_RESOURCES,
  cks: CKS_RESOURCES,
  // Additional CNCF certifications
  capa: CAPA_RESOURCES,
  cba: CBA_RESOURCES,
  cca: CCA_RESOURCES,
  cgoa: CGOA_RESOURCES,
  cnpa: CNPA_RESOURCES,
  cnpe: CNPE_RESOURCES,
  ica: ICA_RESOURCES,
  kca: KCA_RESOURCES,
  otca: OTCA_RESOURCES,
  pca: PCA_RESOURCES,
  // Linux Foundation
  lfcs: LFCS_RESOURCES,
};

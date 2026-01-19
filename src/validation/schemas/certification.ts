/**
 * Certification validation schemas
 * Validates certification data structure and content
 */

import { z } from 'zod';
import {
  CertificationLevelSchema,
  ExamTypeSchema,
  NonEmptyStringSchema,
  IdSchema,
  AcronymSchema,
  UrlSchema,
  PercentageSchema,
  PriceSchema,
  DurationMinutesSchema,
  TailwindColorSchema,
} from './common';
import { CertificationResourcesSchema } from './resources';
import { createValidator, createBatchValidator } from '../helpers';

// Re-export resource schemas for convenience
export { PracticeResourceSchema, BookResourceSchema, VideoResourceSchema } from './resources';

// =============================================================================
// Exam Domain Schemas
// =============================================================================

export const ExamTopicSchema = z.union([
  z.string().min(1, 'Topic name cannot be empty'),
  z.object({
    name: NonEmptyStringSchema,
    url: UrlSchema.optional(),
  }),
]);

export const ExamDomainSchema = z.object({
  name: NonEmptyStringSchema,
  weight: PercentageSchema,
  topics: z.array(ExamTopicSchema).min(1, 'Domain must have at least one topic'),
  documentationUrl: UrlSchema.optional(),
});

// Validate that domain weights sum to 100
export const ExamDomainsSchema = z.array(ExamDomainSchema).refine(
  (domains) => {
    const totalWeight = domains.reduce((sum, domain) => sum + domain.weight, 0);
    return totalWeight >= 99 && totalWeight <= 101; // Allow for rounding
  },
  { message: 'Domain weights must sum to approximately 100%' }
);

// =============================================================================
// Main Certification Schema
// =============================================================================

export const CertificationSchema = z.object({
  id: IdSchema,
  acronym: AcronymSchema,
  name: NonEmptyStringSchema,
  description: z.string().min(10, 'Description must be at least 10 characters'),
  level: CertificationLevelSchema,
  type: ExamTypeSchema,
  duration: DurationMinutesSchema,
  price: PriceSchema,
  requiredFor: z.array(z.string()).optional(),
  prerequisite: z.string().optional(),
  prerequisites: z.string().optional(),
  domains: ExamDomainsSchema,
  resources: CertificationResourcesSchema,
  icon: z.string().optional(),
  color: TailwindColorSchema,
  kubernetesVersion: z.string().optional(),
  examAttempts: z.number().int().positive().optional(),
  simulatorProvider: z.string().optional(),
  simulatorAccess: z.string().optional(),
  examFormat: z.string().optional(),
  retakePolicy: z.string().optional(),
  studyTimeWeeks: z.number().int().positive().optional(),
  passingScore: PercentageSchema.optional(),
  validity: z.number().int().positive().optional(),
  isNew: z.boolean().optional(),
});

// =============================================================================
// Validation Functions
// =============================================================================

export type CertificationInput = z.infer<typeof CertificationSchema>;

export const validateCertification = createValidator(CertificationSchema);
export const validateCertifications = createBatchValidator(CertificationSchema);

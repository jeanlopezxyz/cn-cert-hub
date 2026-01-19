/**
 * Resources validation schemas
 * Validates study resources data structure and content
 */

import { z } from 'zod';
import { UrlSchema, GitHubUrlSchema, NonEmptyStringSchema, DifficultyLevelSchema } from './common';
import { createValidator } from '../helpers';

// =============================================================================
// Resource Type Schemas
// =============================================================================

export const PracticeTypeSchema = z.enum([
  'simulator',
  'scenario',
  'lab',
  'course',
  'video',
  'playground',
]);

export const BookFormatSchema = z.enum(['ebook', 'paperback', 'hardcover', 'pdf']);

// =============================================================================
// Practice Resource Schema
// =============================================================================

export const PracticeResourceSchema = z.object({
  title: NonEmptyStringSchema,
  url: UrlSchema,
  description: z.string().optional(),
  isPaid: z.boolean().optional(),
  author: z.string().optional(),
  isOfficial: z.boolean().optional(),
  type: PracticeTypeSchema.optional(),
  difficulty: DifficultyLevelSchema.optional(),
});

// =============================================================================
// Book Resource Schema
// =============================================================================

const CURRENT_YEAR = new Date().getFullYear();

export const BookResourceSchema = z.object({
  title: NonEmptyStringSchema,
  url: UrlSchema,
  author: z.string().optional(),
  description: z.string().optional(),
  isPaid: z.boolean().optional(),
  format: BookFormatSchema.optional(),
  year: z
    .number()
    .int()
    .min(2000, 'Year must be 2000 or later')
    .max(CURRENT_YEAR + 1, 'Year cannot be in the far future')
    .optional(),
  difficulty: DifficultyLevelSchema.optional(),
});

// =============================================================================
// Video Resource Schema
// =============================================================================

export const VideoResourceSchema = z.object({
  title: NonEmptyStringSchema,
  url: UrlSchema,
  author: z.string().optional(),
  description: z.string().optional(),
  isPaid: z.boolean().optional(),
  platform: z.string().optional(),
  duration: z.string().optional(),
  year: z
    .number()
    .int()
    .min(2000, 'Year must be 2000 or later')
    .max(CURRENT_YEAR + 1, 'Year cannot be in the far future')
    .optional(),
  difficulty: DifficultyLevelSchema.optional(),
});

// =============================================================================
// Study Resource Schema (for blogs, documentation, communities, tools)
// =============================================================================

export const StudyResourceSchema = z.object({
  title: NonEmptyStringSchema,
  url: UrlSchema,
  description: z.string().optional(),
  type: z.enum(['official', 'community', 'practice', 'documentation']).optional(),
  isPaid: z.boolean().optional(),
  author: z.string().optional(),
  difficulty: DifficultyLevelSchema.optional(),
  duration: z.string().optional(),
});

// =============================================================================
// Course Resource Schema (extends StudyResourceSchema)
// =============================================================================

export const CourseResourceSchema = StudyResourceSchema.extend({
  author: NonEmptyStringSchema,
  rating: z
    .number()
    .min(0, 'Rating must be at least 0')
    .max(5, 'Rating must be at most 5')
    .optional(),
});

// =============================================================================
// Certification Resources Schema
// =============================================================================

export const CertificationResourcesSchema = z.object({
  official: UrlSchema,
  github: z.array(GitHubUrlSchema).optional(),
  practice: z.array(PracticeResourceSchema).optional(),
  books: z.array(BookResourceSchema).optional(),
  courses: z.array(CourseResourceSchema).optional(),
  videos: z.array(VideoResourceSchema).optional(),
  blogs: z.array(StudyResourceSchema).optional(),
  documentation: z.array(StudyResourceSchema).optional(),
  communities: z.array(StudyResourceSchema).optional(),
  tools: z.array(StudyResourceSchema).optional(),
});

// =============================================================================
// Validation Functions
// =============================================================================

export type CertificationResourcesInput = z.infer<typeof CertificationResourcesSchema>;
export type PracticeResourceInput = z.infer<typeof PracticeResourceSchema>;
export type BookResourceInput = z.infer<typeof BookResourceSchema>;

export const validateResources = createValidator(CertificationResourcesSchema);

export function validateAllResources(resourcesMap: Record<string, unknown>): {
  valid: Array<{ certId: string; data: CertificationResourcesInput }>;
  invalid: Array<{ certId: string; errors: z.ZodError }>;
  warnings: string[];
} {
  const valid: Array<{ certId: string; data: CertificationResourcesInput }> = [];
  const invalid: Array<{ certId: string; errors: z.ZodError }> = [];
  const warnings: string[] = [];

  for (const [certId, resources] of Object.entries(resourcesMap)) {
    const result = CertificationResourcesSchema.safeParse(resources);
    if (result.success) {
      valid.push({ certId, data: result.data });

      // Check for common issues
      const practiceCount = result.data.practice?.length ?? 0;
      const bookCount = result.data.books?.length ?? 0;

      if (practiceCount === 0 && bookCount === 0) {
        warnings.push(`${certId.toUpperCase()}: No practice resources or books defined`);
      }

      // Check for broken URLs (basic validation)
      const allUrls = [
        result.data.official,
        ...(result.data.github ?? []),
        ...(result.data.practice?.map((p) => p.url) ?? []),
        ...(result.data.books?.map((b) => b.url) ?? []),
        ...(result.data.videos?.map((v) => v.url) ?? []),
      ];

      const duplicateUrls = allUrls.filter((url, idx) => allUrls.indexOf(url) !== idx);
      if (duplicateUrls.length > 0) {
        warnings.push(`${certId.toUpperCase()}: Duplicate URLs found`);
      }
    } else {
      invalid.push({ certId, errors: result.error });
    }
  }

  return { valid, invalid, warnings };
}

// =============================================================================
// Helper Functions
// =============================================================================

export function getResourceStats(resources: CertificationResourcesInput): {
  total: number;
  practice: number;
  books: number;
  videos: number;
  github: number;
  freeCount: number;
  paidCount: number;
} {
  const practice = resources.practice?.length ?? 0;
  const books = resources.books?.length ?? 0;
  const videos = resources.videos?.length ?? 0;
  const github = resources.github?.length ?? 0;

  let freeCount = 0;
  let paidCount = 0;

  resources.practice?.forEach((p) => {
    if (p.isPaid) paidCount++;
    else freeCount++;
  });

  resources.books?.forEach((b) => {
    if (b.isPaid) paidCount++;
    else freeCount++;
  });

  resources.videos?.forEach((v) => {
    if (v.isPaid) paidCount++;
    else freeCount++;
  });

  return {
    total: practice + books + videos + github,
    practice,
    books,
    videos,
    github,
    freeCount,
    paidCount,
  };
}

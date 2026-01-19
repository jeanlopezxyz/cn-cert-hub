/**
 * Best Practices validation schemas
 * Validates best practices data structure and content
 */

import { z } from 'zod';
import {
  NonEmptyStringSchema,
  IdSchema,
  I18nKeySchema,
  SvgPathSchema,
  TailwindColorSchema,
} from './common';
import { createValidator } from '../helpers';

// =============================================================================
// Category Schemas
// =============================================================================

export const MainCategoryTypeSchema = z.enum([
  'infrastructure',
  'applications',
  'networking',
  'security',
  'observability',
  'cicd',
]);

export const SubCategoryTypeSchema = z.enum([
  'containerization',
  'development',
  'accesscontrol',
  'networkpolicies',
  'observability',
  'storage',
  'gitops',
  'highavailability',
  'costoptimization',
  'servicemesh',
  'operations',
  'multitenancy',
  'stateful',
  'compliance',
  'devsecops',
]);

export const PrioritySchema = z.enum(['critical', 'important', 'recommended']);

// =============================================================================
// Best Practice Item Schemas
// =============================================================================

export const BestPracticeItemSchema = z.object({
  id: IdSchema,
  titleKey: I18nKeySchema,
  priority: PrioritySchema,
  whyItMattersKey: I18nKeySchema.optional(),
  commonMistakeKey: I18nKeySchema.optional(),
  codeExample: z.string().optional(),
});

export const BestPracticeSchema = z.object({
  id: IdSchema,
  titleKey: I18nKeySchema,
  descKey: I18nKeySchema,
  iconPath: SvgPathSchema,
  color: NonEmptyStringSchema,
  bgColor: NonEmptyStringSchema,
  iconBg: NonEmptyStringSchema,
  items: z.array(BestPracticeItemSchema).min(1, 'Must have at least one item'),
});

// =============================================================================
// Tab Configuration Schemas
// =============================================================================

export const TabConfigSchema = z.object({
  id: SubCategoryTypeSchema,
  labelKey: I18nKeySchema,
  iconPath: SvgPathSchema,
  practices: z.array(BestPracticeSchema),
});

export const MainCategoryConfigSchema = z.object({
  id: MainCategoryTypeSchema,
  labelKey: I18nKeySchema,
  iconPath: SvgPathSchema,
  color: TailwindColorSchema,
  subcategories: z.array(SubCategoryTypeSchema).min(1, 'Must have at least one subcategory'),
});

// =============================================================================
// Validation Functions
// =============================================================================

export type BestPracticeInput = z.infer<typeof BestPracticeSchema>;
export type BestPracticeItemInput = z.infer<typeof BestPracticeItemSchema>;
export type TabConfigInput = z.infer<typeof TabConfigSchema>;

export const validateBestPractice = createValidator(BestPracticeSchema);
export const validateTabConfig = createValidator(TabConfigSchema);

export function validateBestPractices(tabs: unknown[]): {
  valid: TabConfigInput[];
  invalid: Array<{ index: number; id?: string; errors: z.ZodError }>;
  missingI18nKeys: string[];
} {
  const valid: TabConfigInput[] = [];
  const invalid: Array<{ index: number; id?: string; errors: z.ZodError }> = [];
  const missingI18nKeys: string[] = [];

  tabs.forEach((tab, index) => {
    const result = TabConfigSchema.safeParse(tab);
    if (result.success) {
      valid.push(result.data);
      // Collect all i18n keys for later validation
      result.data.practices.forEach((practice) => {
        missingI18nKeys.push(practice.titleKey, practice.descKey);
        practice.items.forEach((item) => {
          missingI18nKeys.push(item.titleKey);
          if (item.whyItMattersKey) missingI18nKeys.push(item.whyItMattersKey);
          if (item.commonMistakeKey) missingI18nKeys.push(item.commonMistakeKey);
        });
      });
    } else {
      const id =
        typeof tab === 'object' && tab !== null && 'id' in tab ? String(tab.id) : undefined;
      invalid.push({ index, id, errors: result.error });
    }
  });

  return { valid, invalid, missingI18nKeys };
}

// =============================================================================
// YAML Code Example Validation
// =============================================================================

export function validateYamlSyntax(yaml: string): { valid: boolean; error?: string } {
  // Basic YAML syntax checks
  const lines = yaml.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line || line.trim() === '' || line.trim().startsWith('#')) continue;

    const indent = line.search(/\S/);
    if (indent === -1) continue;

    // Check for tabs (YAML should use spaces)
    if (line.includes('\t')) {
      return { valid: false, error: `Line ${i + 1}: YAML should use spaces, not tabs` };
    }

    // Check indentation consistency
    if (indent % 2 !== 0) {
      return {
        valid: false,
        error: `Line ${i + 1}: Indentation should be a multiple of 2 spaces`,
      };
    }

    // Check for common YAML errors
    if (line.includes(': ') && line.trim().endsWith(':')) {
      return {
        valid: false,
        error: `Line ${i + 1}: Unexpected colon at end of line`,
      };
    }
  }

  return { valid: true };
}

export function validateCodeExamples(practices: BestPracticeInput[]): {
  valid: boolean;
  errors: Array<{ practiceId: string; itemId: string; error: string }>;
} {
  const errors: Array<{ practiceId: string; itemId: string; error: string }> = [];

  practices.forEach((practice) => {
    practice.items.forEach((item) => {
      if (item.codeExample) {
        const result = validateYamlSyntax(item.codeExample);
        if (!result.valid && result.error) {
          errors.push({
            practiceId: practice.id,
            itemId: item.id,
            error: result.error,
          });
        }
      }
    });
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

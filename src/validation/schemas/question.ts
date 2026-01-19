/**
 * Question validation schemas
 * Validates quiz questions data structure and content
 */

import { z } from 'zod';
import { NonEmptyStringSchema, IdSchema } from './common';
import { createValidator } from '../helpers';

// =============================================================================
// Question Schemas
// =============================================================================

export const QuizDifficultySchema = z.enum(['easy', 'medium', 'hard']);

export const QuestionSchema = z
  .object({
    id: IdSchema,
    domain: NonEmptyStringSchema,
    question: z.string().min(10, 'Question must be at least 10 characters'),
    options: z
      .array(z.string().min(1, 'Option cannot be empty'))
      .min(2, 'Must have at least 2 options')
      .max(6, 'Cannot have more than 6 options'),
    correctAnswer: z.number().int().min(0, 'Correct answer index must be 0 or greater'),
    explanation: z.string().min(10, 'Explanation must be at least 10 characters'),
    difficulty: QuizDifficultySchema.optional(),
    tags: z.array(z.string()).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.correctAnswer >= data.options.length) {
      ctx.addIssue({
        code: 'custom',
        message: `correctAnswer index (${data.correctAnswer}) must be less than number of options (${data.options.length})`,
        path: ['correctAnswer'],
      });
    }
  });

// =============================================================================
// Question Set Schemas
// =============================================================================

export const QuestionSetSchema = z.object({
  certificationId: z.string().min(1, 'Certification ID is required'),
  questions: z.array(QuestionSchema),
});

// Validate question set with additional rules
export const ValidatedQuestionSetSchema = z
  .array(QuestionSchema)
  .refine(
    (questions) => {
      const ids = questions.map((q) => q.id);
      const uniqueIds = new Set(ids);
      return ids.length === uniqueIds.size;
    },
    { message: 'Question IDs must be unique within the set' }
  )
  .refine(
    (questions) => {
      if (questions.length === 0) return true;
      // Check for balanced correct answer distribution
      const answerCounts: number[] = [0, 0, 0, 0];
      questions.forEach((q) => {
        if (q.correctAnswer >= 0 && q.correctAnswer < 4) {
          answerCounts[q.correctAnswer] = (answerCounts[q.correctAnswer] ?? 0) + 1;
        }
      });
      const total = questions.length;
      const expectedPerOption = total / 4;
      const tolerance = 0.3; // 30% tolerance
      return answerCounts.every(
        (count) =>
          count >= expectedPerOption * (1 - tolerance) &&
          count <= expectedPerOption * (1 + tolerance)
      );
    },
    {
      message:
        'Correct answers should be evenly distributed across options (A, B, C, D). Current distribution is unbalanced.',
    }
  );

// =============================================================================
// Validation Functions
// =============================================================================

export type QuestionInput = z.infer<typeof QuestionSchema>;

export const validateQuestion = createValidator(QuestionSchema);

export function validateQuestions(data: unknown[]): {
  valid: QuestionInput[];
  invalid: Array<{ index: number; id?: string; errors: z.ZodError }>;
  warnings: string[];
} {
  const valid: QuestionInput[] = [];
  const invalid: Array<{ index: number; id?: string; errors: z.ZodError }> = [];
  const warnings: string[] = [];

  // First pass: validate individual questions
  data.forEach((item, index) => {
    const result = QuestionSchema.safeParse(item);
    if (result.success) {
      valid.push(result.data);
    } else {
      const id =
        typeof item === 'object' && item !== null && 'id' in item ? String(item.id) : undefined;
      invalid.push({ index, id, errors: result.error });
    }
  });

  // Second pass: check for duplicate IDs
  const ids = valid.map((q) => q.id);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length > 0) {
    warnings.push(`Duplicate question IDs found: ${[...new Set(duplicates)].join(', ')}`);
  }

  // Third pass: check answer distribution
  if (valid.length >= 10) {
    const answerCounts: number[] = [0, 0, 0, 0];
    valid.forEach((q) => {
      if (q.correctAnswer >= 0 && q.correctAnswer < 4) {
        answerCounts[q.correctAnswer] = (answerCounts[q.correctAnswer] ?? 0) + 1;
      }
    });
    const total = valid.length;
    const distribution = answerCounts.map((count) => ((count / total) * 100).toFixed(1) + '%');
    const isUnbalanced = answerCounts.some(
      (count) => count / total < 0.15 || count / total > 0.35 // Less than 15% or more than 35%
    );
    if (isUnbalanced) {
      warnings.push(
        `Answer distribution is unbalanced: A=${distribution[0] ?? '0%'}, B=${distribution[1] ?? '0%'}, C=${distribution[2] ?? '0%'}, D=${distribution[3] ?? '0%'}. ` +
          'Consider distributing correct answers more evenly.'
      );
    }
  }

  // Fourth pass: check for missing difficulty tags
  const missingDifficulty = valid.filter((q) => !q.difficulty);
  if (missingDifficulty.length > 0 && missingDifficulty.length < valid.length) {
    warnings.push(
      `${missingDifficulty.length} questions are missing difficulty levels. ` +
        'Consider adding difficulty: "easy" | "medium" | "hard" to all questions.'
    );
  }

  return { valid, invalid, warnings };
}

// =============================================================================
// Helper Functions
// =============================================================================

export function getQuestionStats(questions: QuestionInput[]): {
  total: number;
  byDifficulty: Record<string, number>;
  byDomain: Record<string, number>;
  answerDistribution: number[];
} {
  const byDifficulty: Record<string, number> = { easy: 0, medium: 0, hard: 0, unset: 0 };
  const byDomain: Record<string, number> = {};
  const answerDistribution: number[] = [0, 0, 0, 0];

  questions.forEach((q) => {
    // Count by difficulty
    if (q.difficulty) {
      byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] ?? 0) + 1;
    } else {
      byDifficulty['unset'] = (byDifficulty['unset'] ?? 0) + 1;
    }

    // Count by domain
    byDomain[q.domain] = (byDomain[q.domain] ?? 0) + 1;

    // Count answer distribution
    if (q.correctAnswer >= 0 && q.correctAnswer < 4) {
      answerDistribution[q.correctAnswer] = (answerDistribution[q.correctAnswer] ?? 0) + 1;
    }
  });

  return {
    total: questions.length,
    byDifficulty,
    byDomain,
    answerDistribution,
  };
}

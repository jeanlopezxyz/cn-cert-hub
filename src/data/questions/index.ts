/**
 * Central Questions Index
 *
 * This file exports all certification questions from a single location.
 * Contributors can add questions to individual certification files
 * and they will be automatically available throughout the application.
 *
 * File Structure:
 * - Each certification has its own question file (e.g., kcna.ts, cka.ts)
 * - Questions follow the Question interface from types/quiz.ts
 * - Questions are organized by exam domain within each file
 *
 * How to add questions:
 * 1. Find the certification file (e.g., src/data/questions/cka.ts)
 * 2. Add your question to the appropriate domain section
 * 3. Use a unique ID following the pattern: {cert-id}-XXX (e.g., cka-001)
 * 4. Include all required fields: id, domain, question, options, correctAnswer, explanation, difficulty
 * 5. Optionally add tags for better organization
 */

import type { Question } from '@/types/quiz';

// Import all questions (single import, then re-export)
import { KCNA_QUESTIONS } from './kcna';
import { KCSA_QUESTIONS } from './kcsa';
import { CKA_QUESTIONS } from './cka';
import { CKAD_QUESTIONS } from './ckad';
import { CKS_QUESTIONS } from './cks';
import { CAPA_QUESTIONS } from './capa';
import { CBA_QUESTIONS } from './cba';
import { CCA_QUESTIONS } from './cca';
import { CGOA_QUESTIONS } from './cgoa';
import { CNPA_QUESTIONS } from './cnpa';
import { CNPE_QUESTIONS } from './cnpe';
import { ICA_QUESTIONS } from './ica';
import { KCA_QUESTIONS } from './kca';
import { OTCA_QUESTIONS } from './otca';
import { PCA_QUESTIONS } from './pca';
import { LFCS_QUESTIONS } from './lfcs';

// Re-export all questions for consumers
export {
  KCNA_QUESTIONS,
  KCSA_QUESTIONS,
  CKA_QUESTIONS,
  CKAD_QUESTIONS,
  CKS_QUESTIONS,
  CAPA_QUESTIONS,
  CBA_QUESTIONS,
  CCA_QUESTIONS,
  CGOA_QUESTIONS,
  CNPA_QUESTIONS,
  CNPE_QUESTIONS,
  ICA_QUESTIONS,
  KCA_QUESTIONS,
  OTCA_QUESTIONS,
  PCA_QUESTIONS,
  LFCS_QUESTIONS,
};

/**
 * Map of certification ID to questions array
 * Use this to get questions for a specific certification
 */
export const QUESTIONS_BY_CERTIFICATION: Record<string, Question[]> = {
  // Kubestronaut certifications
  kcna: KCNA_QUESTIONS,
  kcsa: KCSA_QUESTIONS,
  cka: CKA_QUESTIONS,
  ckad: CKAD_QUESTIONS,
  cks: CKS_QUESTIONS,
  // Additional CNCF certifications
  capa: CAPA_QUESTIONS,
  cba: CBA_QUESTIONS,
  cca: CCA_QUESTIONS,
  cgoa: CGOA_QUESTIONS,
  cnpa: CNPA_QUESTIONS,
  cnpe: CNPE_QUESTIONS,
  ica: ICA_QUESTIONS,
  kca: KCA_QUESTIONS,
  otca: OTCA_QUESTIONS,
  pca: PCA_QUESTIONS,
  // Linux Foundation
  lfcs: LFCS_QUESTIONS,
};

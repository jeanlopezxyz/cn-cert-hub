// Individual certification imports
import { CKA } from './cka';
import { CKAD } from './ckad';
import { CKS } from './cks';
import { KCNA } from './kcna';
import { KCSA } from './kcsa';
import { PCA } from './pca';
import { ICA } from './ica';
import { CCA } from './cca';
import { CAPA } from './capa';
import { CGOA } from './cgoa';
import { LFCS } from './lfcs';
import { KCA } from './kca';
import { OTCA } from './otca';
import { CBA } from './cba';
import { CNPA } from './cnpa';
import { CNPE } from './cnpe';

// Re-export types
export type { Certification, StudyResource } from '@/types';

// Export certification constants
export * from './constants';

// Export all certifications as an array
export const CERTIFICATIONS = [
  CKA,
  CKAD,
  CKS,
  KCNA,
  KCSA,
  PCA,
  ICA,
  CCA,
  CAPA,
  CGOA,
  LFCS,
  KCA,
  OTCA,
  CBA,
  CNPA,
  CNPE,
];

// Export individual certifications for direct access
export { CKA, CKAD, CKS, KCNA, KCSA, PCA, ICA, CCA, CAPA, CGOA, LFCS, KCA, OTCA, CBA, CNPA, CNPE };

/**
 * Get certifications by their IDs, maintaining the order of IDs
 * Filters out any IDs that don't match existing certifications
 */
export function getCertificationsByIds(ids: readonly string[]): typeof CERTIFICATIONS {
  return ids
    .map((id) => CERTIFICATIONS.find((cert) => cert.id === id))
    .filter((cert): cert is (typeof CERTIFICATIONS)[number] => cert !== undefined);
}

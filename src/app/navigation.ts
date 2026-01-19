/**
 * Navigation Configuration
 * Sidebar structure and navigation items
 */

import type { Certification } from '@/types';
import { EXTERNAL_URLS } from './config';

export interface SidebarCategory {
  key: string;
  name: string;
  certificationIds: string[];
}

// Kubestronaut certification IDs (required for both achievements)
export const KUBESTRONAUT_CERT_IDS = ['kcna', 'kcsa', 'cka', 'ckad', 'cks'] as const;

// Additional certifications for Golden Kubestronaut (alphabetical order)
export const GOLDEN_ADDITIONAL_CERT_IDS = [
  'capa',
  'cba',
  'cca',
  'cgoa',
  'cnpa',
  'ica',
  'kca',
  'otca',
  'pca',
] as const;

export const CERTIFICATION_CATEGORIES: SidebarCategory[] = [
  {
    key: 'kubernetes',
    name: 'categories.kubernetes',
    certificationIds: [...KUBESTRONAUT_CERT_IDS], // Kubestronaut path order
  },
  {
    key: 'gitops',
    name: 'categories.gitops',
    certificationIds: ['capa', 'cgoa'], // CAPA (Argo) and CGOA (GitOps general)
  },
  {
    key: 'networking',
    name: 'categories.networking',
    certificationIds: ['cca'], // Cilium (CNI/eBPF networking)
  },
  {
    key: 'observability',
    name: 'categories.observability',
    certificationIds: ['otca', 'pca'], // OpenTelemetry and Prometheus
  },
  {
    key: 'platform',
    name: 'categories.platform',
    certificationIds: ['cba', 'cnpa', 'cnpe'], // Backstage, CNPA (Associate), CNPE (Engineer)
  },
  {
    key: 'security',
    name: 'categories.security',
    certificationIds: ['kca'], // Kyverno (security posture management)
  },
  {
    key: 'serviceMesh',
    name: 'categories.serviceMesh',
    certificationIds: ['ica'], // Only Istio (true service mesh)
  },
  {
    key: 'linux',
    name: 'categories.linux',
    certificationIds: ['lfcs'], // Linux Foundation certification
  },
];

export const ACHIEVEMENTS_ITEMS = [
  {
    id: 'kubestronaut',
    translationKey: 'achievements.kubestronaut.title',
    descriptionKey: 'achievements.kubestronaut.shortDesc',
    href: 'achievements/kubestronaut',
    icon: '🚀',
    color: 'blue',
    requiredCerts: 5,
  },
  {
    id: 'golden-kubestronaut',
    translationKey: 'achievements.golden.title',
    descriptionKey: 'achievements.golden.shortDesc',
    href: 'achievements/golden-kubestronaut',
    icon: '🏆',
    color: 'amber',
    requiredCerts: 16,
  },
];

export const RESOURCES_ITEMS = [
  {
    id: 'project-docs',
    translationKey: 'sidebar.projectDocs',
    href: 'docs',
    icon: 'book',
  },
  {
    id: 'best-practices',
    translationKey: 'sidebar.bestPractices',
    href: 'best-practices',
    icon: 'check-badge',
  },
];

export const NEWS_UPDATES_ITEMS = [
  {
    id: 'news',
    translationKey: 'sidebar.news',
    href: 'news',
    icon: 'newspaper',
  },
  {
    id: 'upcoming',
    translationKey: 'sidebar.upcoming',
    href: 'upcoming',
    icon: 'clock',
  },
];

export const EXTERNAL_LINKS_ITEMS = [
  {
    id: 'discounts',
    translationKey: 'sidebar.discounts',
    href: EXTERNAL_URLS.discounts.linuxFoundationCoupons,
  },
  {
    id: 'curriculum',
    translationKey: 'sidebar.curriculum',
    href: EXTERNAL_URLS.githubCNCF,
  },
];

/**
 * Helper function to group certifications by category
 * Maintains the order specified in certificationIds
 */
export function groupCertificationsByCategory(certifications: Certification[]) {
  const grouped: Record<string, Certification[]> = {};

  CERTIFICATION_CATEGORIES.forEach((category) => {
    grouped[category.key] = category.certificationIds
      .map((id) => certifications.find((cert) => cert.id === id))
      .filter((cert): cert is Certification => cert !== undefined);
  });

  return grouped;
}

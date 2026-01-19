import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { CGOA_QUESTIONS } from '@/data/questions/cgoa';
import { CGOA_RESOURCES } from '@/data/resources/cgoa';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const CGOA: Certification = {
  id: 'cgoa',
  acronym: 'CGOA',
  name: 'Certified GitOps Associate',
  description: 'cert.cgoa.description',
  level: 'entry',
  type: 'multiple-choice',
  duration: 90,
  price: 250,
  requiredFor: ['Golden Kubestronaut'],
  color: CERTIFICATION_GRADIENTS.cloudNative,
  kubernetesVersion: KUBERNETES_VERSIONS.NOT_APPLICABLE,
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.NO_SIMULATOR,
  simulatorAccess: SIMULATOR_ACCESS.NOT_APPLICABLE,
  examFormat: EXAM_FORMATS.MULTIPLE_CHOICE_60,
  retakePolicy: RETAKE_POLICIES.ONE_FREE_RETAKE,
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'GitOps Terminology',
      weight: 20,
      documentationUrl: 'https://opengitops.dev/',
      topics: [
        { name: 'Continuous', url: 'https://opengitops.dev/#principles' },
        { name: 'Declarative Description', url: 'https://opengitops.dev/#principles' },
        { name: 'Desired State', url: 'https://opengitops.dev/#principles' },
        {
          name: 'State Drift',
          url: 'https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/',
        },
        { name: 'State Reconciliation', url: 'https://opengitops.dev/#principles' },
        { name: 'GitOps Managed Software System', url: 'https://opengitops.dev/' },
        { name: 'State Store', url: 'https://opengitops.dev/#principles' },
        { name: 'Feedback Loop', url: 'https://opengitops.dev/#principles' },
        {
          name: 'Rollback',
          url: 'https://argo-cd.readthedocs.io/en/stable/user-guide/commands/argocd_app_rollback/',
        },
      ],
    },
    {
      name: 'GitOps Principles',
      weight: 30,
      documentationUrl: 'https://opengitops.dev/#principles',
      topics: [
        { name: 'Declarative', url: 'https://opengitops.dev/#principles' },
        { name: 'Versioned and Immutable', url: 'https://opengitops.dev/#principles' },
        { name: 'Pulled Automatically', url: 'https://opengitops.dev/#principles' },
        { name: 'Continuously Reconciled', url: 'https://opengitops.dev/#principles' },
      ],
    },
    {
      name: 'Related Practices',
      weight: 16,
      documentationUrl: 'https://glossary.cncf.io/',
      topics: [
        {
          name: 'Configuration as Code (CaC)',
          url: 'https://glossary.cncf.io/infrastructure-as-code/',
        },
        {
          name: 'Infrastructure as Code (IaC)',
          url: 'https://glossary.cncf.io/infrastructure-as-code/',
        },
        { name: 'DevOps and DevSecOps', url: 'https://glossary.cncf.io/devops/' },
        { name: 'CI and CD', url: 'https://glossary.cncf.io/continuous-delivery/' },
      ],
    },
    {
      name: 'GitOps Patterns',
      weight: 20,
      documentationUrl: 'https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/',
      topics: [
        {
          name: 'Deployment and Release Patterns',
          url: 'https://argo-rollouts.readthedocs.io/en/stable/concepts/',
        },
        {
          name: 'Progressive Delivery Patterns',
          url: 'https://argo-rollouts.readthedocs.io/en/stable/features/canary/',
        },
        {
          name: 'Pull vs. Event-driven',
          url: 'https://argo-cd.readthedocs.io/en/stable/operator-manual/webhook/',
        },
        {
          name: 'Architecture Patterns (in-cluster and external reconciler, state store management, etc.)',
          url: 'https://argo-cd.readthedocs.io/en/stable/operator-manual/architecture/',
        },
      ],
    },
    {
      name: 'Tooling',
      weight: 14,
      documentationUrl: 'https://argo-cd.readthedocs.io/en/stable/',
      topics: [
        {
          name: 'Manifest Format and Packaging',
          url: 'https://argo-cd.readthedocs.io/en/stable/user-guide/helm/',
        },
        {
          name: 'State Store Systems (Git and alternatives)',
          url: 'https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/',
        },
        {
          name: 'Reconciliation Engines (ArgoCD, Flux, and alternatives)',
          url: 'https://fluxcd.io/flux/',
        },
        {
          name: 'Interoperability with Notifications, Observability, and Continuous Integration Tools',
          url: 'https://argo-cd.readthedocs.io/en/stable/operator-manual/notifications/',
        },
      ],
    },
  ],
  resources: CGOA_RESOURCES,
  questions: CGOA_QUESTIONS,
  studyTimeWeeks: 4,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

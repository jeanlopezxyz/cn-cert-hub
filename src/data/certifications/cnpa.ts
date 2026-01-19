import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { CNPA_QUESTIONS } from '@/data/questions/cnpa';
import { CNPA_RESOURCES } from '@/data/resources/cnpa';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const CNPA: Certification = {
  id: 'cnpa',
  acronym: 'CNPA',
  name: 'Certified Cloud Native Platform Engineering Associate',
  description: 'cert.cnpa.description',
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
      name: 'Platform Engineering Core Fundamentals',
      weight: 36,
      documentationUrl: 'https://tag-app-delivery.cncf.io/',
      topics: [
        {
          name: 'Declarative Resource Management',
          url: 'https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/',
        },
        {
          name: 'DevOps Practices in Platform Engineering',
          url: 'https://glossary.cncf.io/devops/',
        },
        {
          name: 'Application Environments and Infrastructure Concepts',
          url: 'https://glossary.cncf.io/infrastructure-as-code/',
        },
        {
          name: 'Platform Architecture and Capabilities',
          url: 'https://tag-app-delivery.cncf.io/whitepapers/platforms/',
        },
        {
          name: 'Platform Engineering Goals, Objectives, and Approaches',
          url: 'https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/',
        },
        {
          name: 'Continuous Integration Fundamentals',
          url: 'https://glossary.cncf.io/continuous-integration/',
        },
        {
          name: 'Continuous Delivery and GitOps',
          url: 'https://glossary.cncf.io/continuous-delivery/',
        },
      ],
    },
    {
      name: 'Platform Observability, Security, and Conformance',
      weight: 20,
      documentationUrl: 'https://glossary.cncf.io/observability/',
      topics: [
        {
          name: 'Observability Fundamentals: Traces, Metrics, Logs, and Events',
          url: 'https://opentelemetry.io/docs/concepts/signals/',
        },
        {
          name: 'Secure Service Communication',
          url: 'https://glossary.cncf.io/mutual-transport-layer-security/',
        },
        {
          name: 'Policy Engines for Platform Governance',
          url: 'https://kyverno.io/docs/introduction/',
        },
        {
          name: 'Kubernetes Security Essentials',
          url: 'https://kubernetes.io/docs/concepts/security/',
        },
        { name: 'Security in CI/CD Pipelines', url: 'https://glossary.cncf.io/devsecops/' },
      ],
    },
    {
      name: 'Continuous Delivery & Platform Engineering',
      weight: 16,
      documentationUrl: 'https://glossary.cncf.io/continuous-delivery/',
      topics: [
        {
          name: 'Continuous Integration Pipelines Overview',
          url: 'https://glossary.cncf.io/continuous-integration/',
        },
        {
          name: 'Incident Response in Platform Engineering',
          url: 'https://glossary.cncf.io/site-reliability-engineering/',
        },
        {
          name: 'CI/CD Relationship Fundamentals',
          url: 'https://glossary.cncf.io/continuous-delivery/',
        },
        { name: 'GitOps Basics and Workflows', url: 'https://opengitops.dev/' },
        {
          name: 'GitOps for Application Environments',
          url: 'https://argo-cd.readthedocs.io/en/stable/',
        },
      ],
    },
    {
      name: 'Platform APIs and Provisioning Infrastructure',
      weight: 12,
      documentationUrl: 'https://kubernetes.io/docs/concepts/extend-kubernetes/',
      topics: [
        {
          name: 'Kubernetes Reconciliation Loop',
          url: 'https://kubernetes.io/docs/concepts/architecture/controller/',
        },
        {
          name: 'APIs for Self-Service Platforms (CRDs)',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/',
        },
        { name: 'Infrastructure Provisioning with Kubernetes', url: 'https://crossplane.io/docs/' },
        {
          name: 'Kubernetes Operator Pattern for Integration',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/',
        },
      ],
    },
    {
      name: 'IDPs and Developer Experience',
      weight: 8,
      documentationUrl: 'https://backstage.io/docs/overview/what-is-backstage/',
      topics: [
        {
          name: 'Simplified Access to Platform Capabilities',
          url: 'https://backstage.io/docs/features/software-catalog/',
        },
        {
          name: 'API-Driven Service Catalogs',
          url: 'https://backstage.io/docs/features/software-catalog/descriptor-format/',
        },
        {
          name: 'Developer Portals for Platform Adoption',
          url: 'https://backstage.io/docs/overview/what-is-backstage/',
        },
        {
          name: 'AI/ML in Platform Automation',
          url: 'https://www.kubeflow.org/docs/started/introduction/',
        },
      ],
    },
    {
      name: 'Measuring your Platform',
      weight: 8,
      documentationUrl: 'https://dora.dev/',
      topics: [
        {
          name: 'Platform Efficiency and Team Productivity',
          url: 'https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/',
        },
        {
          name: 'DORA Metrics for Platform Initiatives',
          url: 'https://dora.dev/guides/dora-metrics-four-keys/',
        },
      ],
    },
  ],
  resources: CNPA_RESOURCES,
  questions: CNPA_QUESTIONS,
  studyTimeWeeks: 6,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

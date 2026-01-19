import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { KCNA_QUESTIONS } from '@/data/questions/kcna';
import { KCNA_RESOURCES } from '@/data/resources/kcna';
import {
  CERTIFICATION_DEFAULTS,
  SIMULATOR_PROVIDERS,
  SIMULATOR_ACCESS,
  PREREQUISITES,
  EXAM_FORMATS,
  RETAKE_POLICIES,
  KUBERNETES_VERSIONS,
} from './constants';

export const KCNA: Certification = {
  id: 'kcna',
  acronym: 'KCNA',
  name: 'Kubernetes and Cloud Native Associate',
  description: 'cert.kcna.description',
  level: 'entry',
  type: 'multiple-choice',
  duration: 90,
  price: 250,
  requiredFor: ['Kubestronaut', 'Golden Kubestronaut'],
  color: CERTIFICATION_GRADIENTS.kubernetes,
  kubernetesVersion: KUBERNETES_VERSIONS.NOT_APPLICABLE,
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.NO_SIMULATOR,
  simulatorAccess: SIMULATOR_ACCESS.NOT_APPLICABLE,
  examFormat: EXAM_FORMATS.MULTIPLE_CHOICE_60,
  retakePolicy: RETAKE_POLICIES.ONE_FREE_RETAKE,
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'Kubernetes Fundamentals',
      weight: 44,
      documentationUrl: 'https://kubernetes.io/docs/concepts/',
      topics: [
        {
          name: 'Kubernetes Core Concepts',
          url: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/',
        },
        {
          name: 'Kubernetes Architecture',
          url: 'https://kubernetes.io/docs/concepts/architecture/',
        },
        {
          name: 'Kubernetes API',
          url: 'https://kubernetes.io/docs/concepts/overview/kubernetes-api/',
        },
        {
          name: 'Administration',
          url: 'https://kubernetes.io/docs/concepts/cluster-administration/',
        },
        {
          name: 'Scheduling',
          url: 'https://kubernetes.io/docs/concepts/scheduling-eviction/',
        },
        {
          name: 'Containerization',
          url: 'https://kubernetes.io/docs/concepts/containers/',
        },
      ],
    },
    {
      name: 'Container Orchestration',
      weight: 28,
      documentationUrl: 'https://kubernetes.io/docs/concepts/workloads/',
      topics: [
        {
          name: 'Networking',
          url: 'https://kubernetes.io/docs/concepts/services-networking/',
        },
        {
          name: 'Security',
          url: 'https://kubernetes.io/docs/concepts/security/',
        },
        {
          name: 'Troubleshooting',
          url: 'https://kubernetes.io/docs/tasks/debug/',
        },
        {
          name: 'Storage',
          url: 'https://kubernetes.io/docs/concepts/storage/',
        },
      ],
    },
    {
      name: 'Cloud Native Application Delivery',
      weight: 16,
      documentationUrl: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      topics: [
        {
          name: 'Application Delivery Fundamentals',
          url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/',
        },
        {
          name: 'GitOps',
          url: 'https://opengitops.dev/',
        },
        {
          name: 'CI/CD',
          url: 'https://glossary.cncf.io/continuous-delivery/',
        },
        {
          name: 'Debugging',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-application/',
        },
      ],
    },
    {
      name: 'Cloud Native Architecture',
      weight: 12,
      documentationUrl: 'https://glossary.cncf.io/cloud-native-tech/',
      topics: [
        {
          name: 'Observability',
          url: 'https://opentelemetry.io/docs/concepts/observability-primer/',
        },
        {
          name: 'Cloud Native Ecosystem and Principles',
          url: 'https://www.cncf.io/about/who-we-are/',
        },
        {
          name: 'Cloud Native Community and Collaboration',
          url: 'https://kubernetes.io/community/',
        },
        {
          name: 'Autoscaling',
          url: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/',
        },
        {
          name: 'Serverless',
          url: 'https://glossary.cncf.io/serverless/',
        },
      ],
    },
  ],
  resources: KCNA_RESOURCES,
  questions: KCNA_QUESTIONS,
  studyTimeWeeks: 4,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

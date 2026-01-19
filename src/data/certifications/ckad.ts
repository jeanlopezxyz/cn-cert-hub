import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { CKAD_QUESTIONS } from '@/data/questions/ckad';
import { CKAD_RESOURCES } from '@/data/resources/ckad';
import {
  CERTIFICATION_DEFAULTS,
  SIMULATOR_PROVIDERS,
  SIMULATOR_ACCESS,
  PREREQUISITES,
  EXAM_FORMATS,
  RETAKE_POLICIES,
} from './constants';

export const CKAD: Certification = {
  id: 'ckad',
  acronym: 'CKAD',
  name: 'Certified Kubernetes Application Developer',
  description: 'cert.ckad.description',
  level: 'intermediate',
  type: 'performance',
  duration: 120,
  price: 445,
  requiredFor: ['Kubestronaut', 'Golden Kubestronaut'],
  color: CERTIFICATION_GRADIENTS.kubernetes,
  kubernetesVersion: CERTIFICATION_DEFAULTS.KUBERNETES_VERSION,
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.KILLER_SH,
  simulatorAccess: SIMULATOR_ACCESS.KILLER_SH_STANDARD,
  examFormat: EXAM_FORMATS.PERFORMANCE_BASED,
  retakePolicy: RETAKE_POLICIES.TWO_ATTEMPTS_CKAD,
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'Application Design and Build',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/concepts/workloads/',
      topics: [
        {
          name: 'Define, build and modify container images',
          url: 'https://kubernetes.io/docs/concepts/containers/images/',
        },
        {
          name: 'Choose and use the right workload resource (Deployment, DaemonSet, CronJob, etc.)',
          url: 'https://kubernetes.io/docs/concepts/workloads/controllers/',
        },
        {
          name: 'Understand multi-container Pod design patterns (e.g. sidecar, init and others)',
          url: 'https://kubernetes.io/docs/concepts/workloads/pods/init-containers/',
        },
        {
          name: 'Utilize persistent and ephemeral volumes',
          url: 'https://kubernetes.io/docs/concepts/storage/volumes/',
        },
      ],
    },
    {
      name: 'Application Deployment',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      topics: [
        {
          name: 'Use Kubernetes primitives to implement common deployment strategies (e.g. blue/green or canary)',
          url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy',
        },
        {
          name: 'Understand Deployments and how to perform rolling updates',
          url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment',
        },
        {
          name: 'Use the Helm package manager to deploy existing packages',
          url: 'https://helm.sh/docs/',
        },
        {
          name: 'Kustomize',
          url: 'https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/',
        },
      ],
    },
    {
      name: 'Application Observability and Maintenance',
      weight: 15,
      documentationUrl: 'https://kubernetes.io/docs/tasks/debug/',
      topics: [
        {
          name: 'Understand API deprecations',
          url: 'https://kubernetes.io/docs/reference/using-api/deprecation-policy/',
        },
        {
          name: 'Implement probes and health checks',
          url: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/',
        },
        {
          name: 'Use built-in CLI tools to monitor Kubernetes applications',
          url: 'https://kubernetes.io/docs/reference/kubectl/',
        },
        {
          name: 'Utilize container logs',
          url: 'https://kubernetes.io/docs/concepts/cluster-administration/logging/',
        },
        {
          name: 'Debugging in Kubernetes',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-application/',
        },
      ],
    },
    {
      name: 'Application Environment, Configuration and Security',
      weight: 25,
      documentationUrl: 'https://kubernetes.io/docs/concepts/configuration/',
      topics: [
        {
          name: 'Discover and use resources that extend Kubernetes (CRD, Operators)',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/',
        },
        {
          name: 'Understand authentication, authorization and admission control',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/',
        },
        {
          name: 'Understand requests, limits, quotas',
          url: 'https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
        },
        {
          name: 'Understand ConfigMaps',
          url: 'https://kubernetes.io/docs/concepts/configuration/configmap/',
        },
        {
          name: 'Define resource requirements',
          url: 'https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
        },
        {
          name: 'Create & consume Secrets',
          url: 'https://kubernetes.io/docs/concepts/configuration/secret/',
        },
        {
          name: 'Understand ServiceAccounts',
          url: 'https://kubernetes.io/docs/concepts/security/service-accounts/',
        },
        {
          name: 'Understand Application Security (SecurityContexts, Capabilities, etc.)',
          url: 'https://kubernetes.io/docs/tasks/configure-pod-container/security-context/',
        },
      ],
    },
    {
      name: 'Services and Networking',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/concepts/services-networking/',
      topics: [
        {
          name: 'Demonstrate basic understanding of NetworkPolicies',
          url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
        },
        {
          name: 'Provide and troubleshoot access to applications via services',
          url: 'https://kubernetes.io/docs/concepts/services-networking/service/',
        },
        {
          name: 'Use Ingress rules to expose applications',
          url: 'https://kubernetes.io/docs/concepts/services-networking/ingress/',
        },
      ],
    },
  ],
  resources: CKAD_RESOURCES,
  questions: CKAD_QUESTIONS,
  studyTimeWeeks: 6,
  passingScore: 66,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

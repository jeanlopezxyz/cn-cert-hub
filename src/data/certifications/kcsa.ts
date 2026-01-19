import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { KCSA_QUESTIONS } from '@/data/questions/kcsa';
import { KCSA_RESOURCES } from '@/data/resources/kcsa';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const KCSA: Certification = {
  id: 'kcsa',
  acronym: 'KCSA',
  name: 'Kubernetes and Cloud Security Associate',
  description: 'cert.kcsa.description',
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
      name: 'Overview of Cloud Native Security',
      weight: 14,
      documentationUrl: 'https://kubernetes.io/docs/concepts/security/overview/',
      topics: [
        {
          name: 'The 4Cs of Cloud Native Security',
          url: 'https://kubernetes.io/es/docs/concepts/security/overview/#las-4c-de-seguridad-en-cloud-native',
        },
        {
          name: 'Cloud Provider and Infrastructure Security',
          url: 'https://kubernetes.io/docs/concepts/security/overview/#cloud',
        },
        {
          name: 'Controls and Frameworks',
          url: 'https://kubernetes.io/docs/concepts/security/security-checklist/',
        },
        {
          name: 'Isolation Techniques',
          url: 'https://kubernetes.io/docs/concepts/security/multi-tenancy/',
        },
        {
          name: 'Artifact Repository and Image Security',
          url: 'https://kubernetes.io/docs/concepts/containers/images/',
        },
        {
          name: 'Workload and Application Code Security',
          url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
        },
      ],
    },
    {
      name: 'Kubernetes Cluster Component Security',
      weight: 22,
      documentationUrl: 'https://kubernetes.io/docs/concepts/overview/components/',
      topics: [
        {
          name: 'API Server',
          url: 'https://kubernetes.io/docs/concepts/overview/components/#kube-apiserver',
        },
        {
          name: 'Controller Manager',
          url: 'https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager',
        },
        {
          name: 'Scheduler',
          url: 'https://kubernetes.io/docs/concepts/overview/components/#kube-scheduler',
        },
        {
          name: 'Kubelet',
          url: 'https://kubernetes.io/docs/concepts/overview/components/#kubelet',
        },
        {
          name: 'Container Runtime',
          url: 'https://kubernetes.io/docs/setup/production-environment/container-runtimes/',
        },
        {
          name: 'KubeProxy',
          url: 'https://kubernetes.io/docs/concepts/overview/components/#kube-proxy',
        },
        {
          name: 'Pod',
          url: 'https://kubernetes.io/docs/concepts/workloads/pods/',
        },
        {
          name: 'Etcd',
          url: 'https://kubernetes.io/docs/concepts/overview/components/#etcd',
        },
        {
          name: 'Container Networking',
          url: 'https://kubernetes.io/docs/concepts/services-networking/',
        },
        {
          name: 'Client Security',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/authentication/',
        },
        {
          name: 'Storage',
          url: 'https://kubernetes.io/docs/concepts/storage/',
        },
      ],
    },
    {
      name: 'Kubernetes Security Fundamentals',
      weight: 22,
      documentationUrl: 'https://kubernetes.io/docs/concepts/security/',
      topics: [
        {
          name: 'Pod Security Standards',
          url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
        },
        {
          name: 'Pod Security Admission',
          url: 'https://kubernetes.io/docs/concepts/security/pod-security-admission/',
        },
        {
          name: 'Authentication',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/authentication/',
        },
        {
          name: 'Authorization',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/authorization/',
        },
        {
          name: 'Secrets',
          url: 'https://kubernetes.io/docs/concepts/configuration/secret/',
        },
        {
          name: 'Isolation and Segmentation',
          url: 'https://kubernetes.io/docs/concepts/security/multi-tenancy/',
        },
        {
          name: 'Audit Logging',
          url: 'https://kubernetes.io/docs/tasks/debug-application-cluster/audit/',
        },
        {
          name: 'Network Policy',
          url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
        },
      ],
    },
    {
      name: 'Kubernetes Threat Model',
      weight: 16,
      documentationUrl: 'https://kubernetes.io/docs/concepts/security/security-checklist/',
      topics: [
        {
          name: 'Kubernetes Trust Boundaries and Data Flow',
          url: 'https://kubernetes.io/docs/concepts/security/',
        },
        {
          name: 'Persistence',
          url: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/',
        },
        {
          name: 'Denial of Service',
          url: 'https://kubernetes.io/docs/concepts/policy/resource-quotas/',
        },
        {
          name: 'Malicious Code Execution and Compromised Applications in Containers',
          url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
        },
        {
          name: 'Attacker on the Network',
          url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
        },
        {
          name: 'Access to Sensitive Data',
          url: 'https://kubernetes.io/docs/concepts/configuration/secret/',
        },
        {
          name: 'Privilege Escalation',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
        },
      ],
    },
    {
      name: 'Platform Security',
      weight: 16,
      documentationUrl: 'https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/',
      topics: [
        {
          name: 'Supply Chain Security',
          url: 'https://slsa.dev/',
        },
        {
          name: 'Image Repository',
          url: 'https://kubernetes.io/docs/concepts/containers/images/',
        },
        {
          name: 'Observability',
          url: 'https://kubernetes.io/docs/tasks/debug-application-cluster/resource-usage-monitoring/',
        },
        {
          name: 'Service Mesh',
          url: 'https://kubernetes.io/docs/concepts/services-networking/service/',
        },
        {
          name: 'PKI',
          url: 'https://kubernetes.io/docs/setup/best-practices/certificates/',
        },
        {
          name: 'Connectivity',
          url: 'https://kubernetes.io/docs/concepts/services-networking/',
        },
        {
          name: 'Admission Control',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/',
        },
      ],
    },
    {
      name: 'Compliance and Security Frameworks',
      weight: 10,
      documentationUrl: 'https://www.cisecurity.org/benchmark/kubernetes',
      topics: [
        {
          name: 'Compliance Frameworks',
          url: 'https://kubernetes.io/docs/concepts/security/security-checklist/',
        },
        {
          name: 'Threat Modelling Frameworks',
          url: 'https://kubernetes.io/docs/concepts/security/',
        },
        {
          name: 'Supply Chain Compliance',
          url: 'https://slsa.dev/spec/v1.1/',
        },
        {
          name: 'Automation and Tooling',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/',
        },
      ],
    },
  ],
  resources: KCSA_RESOURCES,
  questions: KCSA_QUESTIONS,
  studyTimeWeeks: 4,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { KCA_QUESTIONS } from '@/data/questions/kca';
import { KCA_RESOURCES } from '@/data/resources/kca';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  KUBERNETES_VERSIONS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const KCA: Certification = {
  id: 'kca',
  acronym: 'KCA',
  name: 'Kyverno Certified Associate',
  description: 'cert.kca.description',
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
      name: 'Writing Policies',
      weight: 32,
      documentationUrl: 'https://kyverno.io/docs/policy-types/',
      topics: [
        {
          name: 'Validation Rules',
          url: 'https://kyverno.io/docs/policy-types/validating-policy/',
        },
        {
          name: 'Preconditions',
          url: 'https://kyverno.io/docs/policy-types/cluster-policy/preconditions/',
        },
        {
          name: 'Background Scans',
          url: 'https://kyverno.io/docs/policy-reports/background/',
        },
        { name: 'Mutation Rules', url: 'https://kyverno.io/docs/policy-types/mutating-policy/' },
        {
          name: 'Generation Rules',
          url: 'https://kyverno.io/docs/policy-types/generating-policy/',
        },
        {
          name: 'VerifyImage Rules',
          url: 'https://kyverno.io/docs/policy-types/image-validating-policy/',
        },
        {
          name: 'Variables & API Calls in Policies',
          url: 'https://kyverno.io/docs/policy-types/cluster-policy/variables/',
        },
        {
          name: 'JSON Patches',
          url: 'https://kyverno.io/docs/policy-types/cluster-policy/mutate/',
        },
        {
          name: 'Autogen Rules',
          url: 'https://kyverno.io/docs/policy-types/cluster-policy/autogen/',
        },
        { name: 'Cleanup Policies', url: 'https://kyverno.io/docs/policy-types/cleanup-policy/' },
        {
          name: 'Common Expression Language (CEL)',
          url: 'https://kyverno.io/docs/policy-types/cel-libraries/',
        },
      ],
    },
    {
      name: 'Fundamentals of Kyverno',
      weight: 18,
      documentationUrl: 'https://kyverno.io/docs/introduction/',
      topics: [
        { name: 'Kyverno Policies & Rules', url: 'https://kyverno.io/docs/introduction/' },
        { name: 'YAML Manifests', url: 'https://kyverno.io/docs/policy-types/' },
        {
          name: 'Admission Controllers',
          url: 'https://kyverno.io/docs/introduction/#admission-controls',
        },
        {
          name: 'OCI Images',
          url: 'https://kyverno.io/docs/policy-types/image-validating-policy/',
        },
      ],
    },
    {
      name: 'Installation, Configuration, and Upgrades',
      weight: 18,
      documentationUrl: 'https://kyverno.io/docs/installation/',
      topics: [
        {
          name: 'Helm-based Installation and Configuration',
          url: 'https://kyverno.io/docs/installation/methods/',
        },
        {
          name: 'Kyverno Custom Resource Definitions (CRDs)',
          url: 'https://kyverno.io/docs/crds/',
        },
        {
          name: 'Controller Configuration with Flags',
          url: 'https://kyverno.io/docs/installation/customization/',
        },
        {
          name: 'Configuring Kyverno RBAC, roles, and permissions',
          url: 'https://kyverno.io/docs/security/',
        },
        {
          name: 'High Availability Installations',
          url: 'https://kyverno.io/docs/high-availability/',
        },
        { name: 'Upgrading Kyverno', url: 'https://kyverno.io/docs/installation/upgrading/' },
      ],
    },
    {
      name: 'Kyverno CLI',
      weight: 12,
      documentationUrl: 'https://kyverno.io/docs/kyverno-cli/',
      topics: [
        { name: 'apply', url: 'https://kyverno.io/docs/kyverno-cli/usage/apply/' },
        { name: 'test', url: 'https://kyverno.io/docs/kyverno-cli/usage/test/' },
        { name: 'jp', url: 'https://kyverno.io/docs/kyverno-cli/usage/jp/' },
        { name: 'Installing Kyverno CLI', url: 'https://kyverno.io/docs/kyverno-cli/install/' },
      ],
    },
    {
      name: 'Applying Policies',
      weight: 10,
      documentationUrl: 'https://kyverno.io/docs/applying-policies/',
      topics: [
        { name: 'Applying Policy in Cluster', url: 'https://kyverno.io/docs/applying-policies/' },
        {
          name: 'Resource Selection',
          url: 'https://kyverno.io/docs/policy-types/cluster-policy/match-exclude/',
        },
        {
          name: 'Common Policy Settings for Kyverno Rules',
          url: 'https://kyverno.io/docs/policy-types/cluster-policy/policy-settings/',
        },
      ],
    },
    {
      name: 'Policy Management',
      weight: 10,
      documentationUrl: 'https://kyverno.io/docs/policy-reports/',
      topics: [
        { name: 'Policy Reports', url: 'https://kyverno.io/docs/policy-reports/' },
        { name: 'PolicyExceptions', url: 'https://kyverno.io/docs/exceptions/' },
        { name: 'Kyverno Metrics', url: 'https://kyverno.io/docs/monitoring/' },
      ],
    },
  ],
  resources: KCA_RESOURCES,
  questions: KCA_QUESTIONS,
  studyTimeWeeks: 4,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

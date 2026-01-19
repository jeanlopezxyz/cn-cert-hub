import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { CNPE_RESOURCES } from '@/data/resources/cnpe';
import { CERTIFICATION_DEFAULTS, KUBERNETES_VERSIONS, SIMULATOR_PROVIDERS } from './constants';

export const CNPE: Certification = {
  id: 'cnpe',
  acronym: 'CNPE',
  name: 'Certified Cloud Native Platform Engineer',
  description: 'cert.cnpe.description',
  level: 'advanced',
  type: 'performance-based',
  duration: 120,
  price: 395,
  requiredFor: ['Golden Kubestronaut (after March 2026)'],
  isNew: true, // Launched November 2025
  color: CERTIFICATION_GRADIENTS.security,
  kubernetesVersion: KUBERNETES_VERSIONS.CURRENT,
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.KILLER_SH,
  simulatorAccess: 'Two simulator sessions included with exam registration',
  examFormat:
    'Online proctored, performance-based exam with 17 hands-on tasks in a Linux remote desktop environment',
  retakePolicy: 'One free retake included within 12 months of registration',
  prerequisites: 'CNPA recommended but not required',
  domains: [
    {
      name: 'GitOps and Continuous Delivery',
      weight: 25,
      documentationUrl: 'https://argo-cd.readthedocs.io/',
      topics: [
        { name: 'GitOps Principles and Practices', url: 'https://opengitops.dev/' },
        {
          name: 'Argo CD Configuration and Management',
          url: 'https://argo-cd.readthedocs.io/en/stable/',
        },
        { name: 'Flux CD Implementation', url: 'https://fluxcd.io/docs/' },
        {
          name: 'Progressive Delivery with Argo Rollouts',
          url: 'https://argo-rollouts.readthedocs.io/',
        },
        {
          name: 'Multi-cluster GitOps',
          url: 'https://argo-cd.readthedocs.io/en/stable/operator-manual/applicationset/',
        },
      ],
    },
    {
      name: 'Platform APIs and Self-Service Capabilities',
      weight: 25,
      documentationUrl: 'https://kubernetes.io/docs/concepts/extend-kubernetes/',
      topics: [
        {
          name: 'Custom Resource Definitions (CRDs)',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/',
        },
        { name: 'Crossplane for Infrastructure', url: 'https://crossplane.io/docs/' },
        {
          name: 'Kubernetes Operators',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/operator/',
        },
        {
          name: 'Service Catalogs and Templates',
          url: 'https://backstage.io/docs/features/software-templates/',
        },
        {
          name: 'API Gateway Configuration',
          url: 'https://kubernetes.io/docs/concepts/services-networking/gateway/',
        },
      ],
    },
    {
      name: 'Observability and Operations',
      weight: 20,
      documentationUrl: 'https://opentelemetry.io/docs/',
      topics: [
        { name: 'OpenTelemetry Integration', url: 'https://opentelemetry.io/docs/collector/' },
        { name: 'Prometheus Metrics and Alerting', url: 'https://prometheus.io/docs/' },
        {
          name: 'Distributed Tracing',
          url: 'https://opentelemetry.io/docs/concepts/signals/traces/',
        },
        {
          name: 'Log Aggregation and Analysis',
          url: 'https://opentelemetry.io/docs/concepts/signals/logs/',
        },
        { name: 'Platform Health Monitoring', url: 'https://kubernetes.io/docs/tasks/debug/' },
      ],
    },
    {
      name: 'Platform Architecture and Infrastructure',
      weight: 15,
      documentationUrl: 'https://kubernetes.io/docs/concepts/architecture/',
      topics: [
        {
          name: 'Multi-tenant Platform Design',
          url: 'https://kubernetes.io/docs/concepts/security/multi-tenancy/',
        },
        { name: 'Infrastructure as Code', url: 'https://crossplane.io/docs/concepts/' },
        { name: 'Developer Portal Configuration', url: 'https://backstage.io/docs/' },
        {
          name: 'Platform Scaling Strategies',
          url: 'https://kubernetes.io/docs/concepts/cluster-administration/',
        },
      ],
    },
    {
      name: 'Security and Policy Enforcement',
      weight: 15,
      documentationUrl: 'https://kyverno.io/docs/',
      topics: [
        { name: 'Policy as Code with Kyverno', url: 'https://kyverno.io/docs/writing-policies/' },
        { name: 'OPA Gatekeeper Policies', url: 'https://open-policy-agent.github.io/gatekeeper/' },
        {
          name: 'RBAC and Access Control',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
        },
        { name: 'Supply Chain Security', url: 'https://slsa.dev/' },
        { name: 'Secret Management', url: 'https://external-secrets.io/' },
      ],
    },
  ],
  resources: CNPE_RESOURCES,
  studyTimeWeeks: 10,
  passingScore: 66,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

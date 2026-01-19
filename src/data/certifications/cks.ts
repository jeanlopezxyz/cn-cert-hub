import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { CKS_QUESTIONS } from '@/data/questions/cks';
import { CKS_RESOURCES } from '@/data/resources/cks';
import {
  CERTIFICATION_DEFAULTS,
  SIMULATOR_PROVIDERS,
  SIMULATOR_ACCESS,
  PREREQUISITES,
  EXAM_FORMATS,
  RETAKE_POLICIES,
} from './constants';

export const CKS: Certification = {
  id: 'cks',
  acronym: 'CKS',
  name: 'Certified Kubernetes Security Specialist',
  description: 'cert.cks.description',
  level: 'advanced',
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
  retakePolicy: RETAKE_POLICIES.ONE_FREE_RETAKE,
  prerequisites: PREREQUISITES.CKA,
  domains: [
    {
      name: 'Cluster Setup',
      weight: 10,
      documentationUrl: 'https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/',
      topics: [
        {
          name: 'Use Network security policies to restrict cluster level access',
          url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
        },
        {
          name: 'Use CIS benchmark to review the security configuration of Kubernetes components (etcd, kubelet, kubedns, kubeapi)',
          url: 'https://www.cisecurity.org/benchmark/kubernetes',
        },
        {
          name: 'Properly set up Ingress with TLS',
          url: 'https://kubernetes.io/docs/concepts/services-networking/ingress/#tls',
        },
        {
          name: 'Protect node metadata and endpoints',
          url: 'https://cloud.google.com/kubernetes-engine/docs/how-to/protecting-node-metadata',
        },
        {
          name: 'Verify platform binaries before deploying',
          url: 'https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#verify-kubectl-binary-using-checksum',
        },
      ],
    },
    {
      name: 'Cluster Hardening',
      weight: 15,
      documentationUrl: 'https://kubernetes.io/docs/reference/access-authn-authz/',
      topics: [
        {
          name: 'Use Role Based Access Controls to minimize exposure',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
        },
        {
          name: 'Exercise caution in using service accounts e.g. disable defaults, minimize permissions on newly created ones',
          url: 'https://kubernetes.io/docs/concepts/security/service-accounts/',
        },
        {
          name: 'Restrict access to Kubernetes API',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/authorization/',
        },
        {
          name: 'Upgrade Kubernetes to avoid vulnerabilities',
          url: 'https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/',
        },
      ],
    },
    {
      name: 'System Hardening',
      weight: 15,
      documentationUrl: 'https://kubernetes.io/docs/concepts/security/',
      topics: [
        {
          name: 'Minimize host OS footprint (reduce attack surface)',
          url: 'https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/',
        },
        {
          name: 'Using least-privilege identity and access management',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
        },
        {
          name: 'Minimize external access to the network',
          url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/#egress',
        },
        {
          name: 'Appropriately use kernel hardening tools such as AppArmor, seccomp',
          url: 'https://kubernetes.io/docs/tutorials/security/apparmor/',
        },
      ],
    },
    {
      name: 'Minimize Microservice Vulnerabilities',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
      topics: [
        {
          name: 'Use appropriate pod security standards',
          url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/',
        },
        {
          name: 'Manage Kubernetes secrets',
          url: 'https://kubernetes.io/docs/concepts/configuration/secret/',
        },
        {
          name: 'Understand and implement isolation techniques (multi-tenancy, sandboxed containers, etc.)',
          url: 'https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/',
        },
        {
          name: 'Implement Pod-to-Pod encryption (Cilium)',
          url: 'https://docs.cilium.io/en/stable/security/network/encryption/',
        },
      ],
    },
    {
      name: 'Supply Chain Security',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/concepts/security/cloud-native-security/',
      topics: [
        {
          name: 'Minimize base image footprint',
          url: 'https://kubernetes.io/docs/concepts/containers/images/',
        },
        {
          name: 'Understand your supply chain (e.g. SBOM, CI/CD, artifact repositories)',
          url: 'https://slsa.dev',
        },
        {
          name: 'Secure your supply chain (permitted registries, sign and validate artifacts, etc.)',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook',
        },
        {
          name: 'Perform static analysis of user workloads and container images (e.g. Kubesec, KubeLinter)',
          url: 'https://docs.kubelinter.io/',
        },
      ],
    },
    {
      name: 'Monitoring, Logging, and Runtime Security',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/',
      topics: [
        {
          name: 'Perform behavioral analytics to detect malicious activities',
          url: 'https://falco.org/docs/',
        },
        {
          name: 'Detect threats within physical infrastructure, apps, networks, data, users and workloads',
          url: 'https://falco.org/docs/rules/',
        },
        {
          name: 'Investigate and identify phases of attack and bad actors within the environment',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/',
        },
        {
          name: 'Ensure immutability of containers at runtime',
          url: 'https://kubernetes.io/docs/tasks/configure-pod-container/security-context/',
        },
        {
          name: 'Use Kubernetes audit logs to monitor access',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/',
        },
      ],
    },
  ],
  resources: CKS_RESOURCES,
  questions: CKS_QUESTIONS,
  studyTimeWeeks: 8,
  passingScore: 67,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

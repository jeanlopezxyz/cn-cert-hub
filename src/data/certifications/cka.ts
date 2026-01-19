import type { Certification } from '@/types';
import { CERTIFICATION_GRADIENTS } from '@/app';
import { CKA_QUESTIONS } from '@/data/questions/cka';
import { CKA_RESOURCES } from '@/data/resources/cka';
import {
  CERTIFICATION_DEFAULTS,
  SIMULATOR_PROVIDERS,
  SIMULATOR_ACCESS,
  PREREQUISITES,
  RETAKE_POLICIES,
} from './constants';

export const CKA: Certification = {
  id: 'cka',
  acronym: 'CKA',
  name: 'Certified Kubernetes Administrator',
  description: 'cert.cka.description',
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
  retakePolicy: RETAKE_POLICIES.TWO_ATTEMPTS_CKA,
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'Storage',
      weight: 10,
      documentationUrl: 'https://kubernetes.io/docs/concepts/storage/',
      topics: [
        {
          name: 'Implement storage classes and dynamic volume provisioning',
          url: 'https://kubernetes.io/docs/concepts/storage/storage-classes/',
        },
        {
          name: 'Configure volume types, access modes and reclaim policies',
          url: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/',
        },
        {
          name: 'Manage persistent volumes and persistent volume claims',
          url: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims',
        },
      ],
    },
    {
      name: 'Troubleshooting',
      weight: 30,
      documentationUrl: 'https://kubernetes.io/docs/tasks/debug/',
      topics: [
        {
          name: 'Troubleshoot clusters and nodes',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/',
        },
        {
          name: 'Troubleshoot cluster components',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/',
        },
        {
          name: 'Monitor cluster and application resource usage',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-usage-monitoring/',
        },
        {
          name: 'Manage and evaluate container output streams',
          url: 'https://kubernetes.io/docs/concepts/cluster-administration/logging/',
        },
        {
          name: 'Troubleshoot services and networking',
          url: 'https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/',
        },
      ],
    },
    {
      name: 'Workloads & Scheduling',
      weight: 15,
      documentationUrl: 'https://kubernetes.io/docs/concepts/workloads/',
      topics: [
        {
          name: 'Understand application deployments and how to perform rolling update and rollbacks',
          url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
        },
        {
          name: 'Use ConfigMaps and Secrets to configure applications',
          url: 'https://kubernetes.io/docs/concepts/configuration/configmap/',
        },
        {
          name: 'Configure workload autoscaling',
          url: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/',
        },
        {
          name: 'Understand the primitives used to create robust, self-healing, application deployments',
          url: 'https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/',
        },
        {
          name: 'Configure Pod admission and scheduling (limits, node affinity, etc.)',
          url: 'https://kubernetes.io/docs/concepts/scheduling-eviction/',
        },
      ],
    },
    {
      name: 'Cluster Architecture, Installation & Configuration',
      weight: 25,
      documentationUrl: 'https://kubernetes.io/docs/concepts/cluster-administration/',
      topics: [
        {
          name: 'Manage role based access control (RBAC)',
          url: 'https://kubernetes.io/docs/reference/access-authn-authz/rbac/',
        },
        {
          name: 'Prepare underlying infrastructure for installing a Kubernetes cluster',
          url: 'https://kubernetes.io/docs/setup/production-environment/',
        },
        {
          name: 'Create and manage Kubernetes clusters using kubeadm',
          url: 'https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/',
        },
        {
          name: 'Manage the lifecycle of Kubernetes clusters',
          url: 'https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/',
        },
        {
          name: 'Implement and configure a highly-available control plane',
          url: 'https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/high-availability/',
        },
        {
          name: 'Use Helm and Kustomize to install cluster components',
          url: 'https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/',
        },
        {
          name: 'Understand extension interfaces (CNI, CSI, CRI, etc.)',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/',
        },
        {
          name: 'Understand CRDs, install and configure operators',
          url: 'https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/',
        },
      ],
    },
    {
      name: 'Services & Networking',
      weight: 20,
      documentationUrl: 'https://kubernetes.io/docs/concepts/services-networking/',
      topics: [
        {
          name: 'Understand connectivity between Pods',
          url: 'https://kubernetes.io/docs/concepts/services-networking/service/',
        },
        {
          name: 'Define and enforce Network Policies',
          url: 'https://kubernetes.io/docs/concepts/services-networking/network-policies/',
        },
        {
          name: 'Use ClusterIP, NodePort, LoadBalancer service types and endpoints',
          url: 'https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types',
        },
        {
          name: 'Use the Gateway API to manage Ingress traffic',
          url: 'https://kubernetes.io/docs/concepts/services-networking/gateway/',
        },
        {
          name: 'Know how to use Ingress controllers and Ingress resources',
          url: 'https://kubernetes.io/docs/concepts/services-networking/ingress/',
        },
        {
          name: 'Understand and use CoreDNS',
          url: 'https://kubernetes.io/docs/tasks/administer-cluster/coredns/',
        },
      ],
    },
  ],
  resources: CKA_RESOURCES,
  questions: CKA_QUESTIONS,
  studyTimeWeeks: 6,
  passingScore: 74,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

import { CERTIFICATION_GRADIENTS } from '@/app';
import type { Certification } from '@/types';
import { ICA_QUESTIONS } from '@/data/questions/ica';
import { ICA_RESOURCES } from '@/data/resources/ica';
import {
  CERTIFICATION_DEFAULTS,
  EXAM_FORMATS,
  PREREQUISITES,
  RETAKE_POLICIES,
  SIMULATOR_ACCESS,
  SIMULATOR_PROVIDERS,
} from './constants';

export const ICA: Certification = {
  id: 'ica',
  acronym: 'ICA',
  name: 'Istio Certified Associate',
  description: 'cert.ica.description',
  level: 'entry',
  type: 'multiple-choice',
  duration: 90,
  price: 250,
  requiredFor: ['Golden Kubestronaut'],
  color: CERTIFICATION_GRADIENTS.cloudNative,
  kubernetesVersion: 'Istio 1.26',
  examAttempts: CERTIFICATION_DEFAULTS.EXAM_ATTEMPTS,
  simulatorProvider: SIMULATOR_PROVIDERS.NO_SIMULATOR,
  simulatorAccess: SIMULATOR_ACCESS.NOT_APPLICABLE,
  examFormat: EXAM_FORMATS.MULTIPLE_CHOICE_60,
  retakePolicy: RETAKE_POLICIES.ONE_FREE_RETAKE,
  prerequisites: PREREQUISITES.NONE,
  domains: [
    {
      name: 'Installation, Upgrades, and Configuration',
      weight: 20,
      documentationUrl: 'https://istio.io/latest/docs/setup/',
      topics: [
        {
          name: 'Installing Istio with istioctl or Helm',
          url: 'https://istio.io/latest/docs/setup/install/istioctl/',
        },
        {
          name: 'Installing Istio in Sidecar or Ambient Mode',
          url: 'https://istio.io/latest/docs/ambient/',
        },
        {
          name: 'Customizing your Istio Installation',
          url: 'https://istio.io/latest/docs/setup/additional-setup/customize-installation/',
        },
        {
          name: 'Upgrading Istio (Canary, In-Place)',
          url: 'https://istio.io/latest/docs/setup/upgrade/',
        },
      ],
    },
    {
      name: 'Traffic Management',
      weight: 35,
      documentationUrl: 'https://istio.io/latest/docs/concepts/traffic-management/',
      topics: [
        {
          name: 'Configuring Ingress and Egress Traffic',
          url: 'https://istio.io/latest/docs/tasks/traffic-management/ingress/',
        },
        {
          name: 'Configuring Routing within a Service Mesh',
          url: 'https://istio.io/latest/docs/tasks/traffic-management/request-routing/',
        },
        {
          name: 'Defining Traffic Policies with Destination Rules',
          url: 'https://istio.io/latest/docs/reference/config/networking/destination-rule/',
        },
        {
          name: 'Configuring Traffic Shifting',
          url: 'https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/',
        },
        {
          name: 'Connecting In-Mesh Workloads to External Workloads and Services',
          url: 'https://istio.io/latest/docs/reference/config/networking/service-entry/',
        },
        {
          name: 'Using Resilience Features (circuit breaking, failover, outlier detection, timeouts, retries)',
          url: 'https://istio.io/latest/docs/tasks/traffic-management/circuit-breaking/',
        },
        {
          name: 'Using Fault Injection',
          url: 'https://istio.io/latest/docs/tasks/traffic-management/fault-injection/',
        },
      ],
    },
    {
      name: 'Securing Workloads',
      weight: 25,
      documentationUrl: 'https://istio.io/latest/docs/concepts/security/',
      topics: [
        {
          name: 'Configuring Authorization',
          url: 'https://istio.io/latest/docs/tasks/security/authorization/',
        },
        {
          name: 'Configuring Authentication (mTLS, JWT)',
          url: 'https://istio.io/latest/docs/tasks/security/authentication/',
        },
        {
          name: 'Securing Edge Traffic with TLS',
          url: 'https://istio.io/latest/docs/tasks/traffic-management/ingress/secure-ingress/',
        },
      ],
    },
    {
      name: 'Troubleshooting',
      weight: 20,
      documentationUrl: 'https://istio.io/latest/docs/ops/diagnostic-tools/',
      topics: [
        {
          name: 'Troubleshooting Configuration',
          url: 'https://istio.io/latest/docs/ops/diagnostic-tools/istioctl-analyze/',
        },
        {
          name: 'Troubleshooting the Mesh Control Plane',
          url: 'https://istio.io/latest/docs/ops/diagnostic-tools/controlz/',
        },
        {
          name: 'Troubleshooting the Mesh Data Plane',
          url: 'https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/',
        },
      ],
    },
  ],
  resources: ICA_RESOURCES,
  questions: ICA_QUESTIONS,
  studyTimeWeeks: 6,
  passingScore: 75,
  validity: CERTIFICATION_DEFAULTS.VALIDITY_YEARS,
};

/**
 * CNPE - Certified Cloud Native Platform Engineer
 * Practice Questions
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: cnpe-XXX (e.g., cnpe-001, cnpe-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - GitOps and Continuous Delivery (25%) - 15 questions
 * - Platform APIs and Self-Service Capabilities (25%) - 15 questions
 * - Observability and Operations (20%) - 12 questions
 * - Platform Architecture and Infrastructure (15%) - 9 questions
 * - Security and Policy Enforcement (15%) - 9 questions
 *
 * Answer Distribution: 15 each for correctAnswer 0, 1, 2, 3
 */

import type { Question } from '@/types/quiz';

export const CNPE_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: GitOps and Continuous Delivery (25%) - 15 questions
  // ============================================
  // correctAnswer: 1
  {
    id: 'cnpe-001',
    question: 'What is a core principle of GitOps?',
    options: [
      'Manual deployments are preferred for control',
      'Git is the single source of truth for declarative infrastructure and applications',
      'Applications should be deployed directly to clusters without version control',
      'Configuration drift is acceptable in production',
    ],
    correctAnswer: 1,
    explanation:
      'GitOps uses Git as the single source of truth for declarative infrastructure and application configuration. All changes are made through Git commits, enabling version control, audit trails, and automated reconciliation. Learn more: [Official Documentation](https://opengitops.dev/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['gitops', 'principles', 'git'],
    difficulty: 'easy',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-002',
    question: 'In Argo CD, what does an Application resource define?',
    options: [
      'A Kubernetes namespace',
      'A Docker image registry',
      'The source repository and target cluster/namespace for deployment',
      'A CI pipeline configuration',
    ],
    correctAnswer: 2,
    explanation:
      'An Argo CD Application resource defines the source Git repository containing the manifests and the target Kubernetes cluster and namespace where the application should be deployed. Learn more: [Official Documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['argocd', 'application', 'deployment'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-003',
    question: 'What is the purpose of Argo Rollouts?',
    options: [
      'To provide progressive delivery capabilities like canary and blue-green deployments',
      'To manage Git repositories',
      'To build container images',
      'To manage Kubernetes cluster upgrades',
    ],
    correctAnswer: 0,
    explanation:
      'Argo Rollouts provides advanced deployment strategies including canary releases, blue-green deployments, and progressive delivery with traffic management and analysis. Learn more: [Official Documentation](https://argo-rollouts.readthedocs.io/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['argo-rollouts', 'canary', 'blue-green', 'progressive-delivery'],
    difficulty: 'medium',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-004',
    question: 'What is the difference between push-based and pull-based GitOps?',
    options: [
      'There is no difference',
      'Pull-based requires manual intervention',
      'Push-based is more secure than pull-based',
      'Push-based uses webhooks to trigger deployments; pull-based has agents continuously reconciling state',
    ],
    correctAnswer: 3,
    explanation:
      'Push-based GitOps triggers deployments via CI webhooks pushing to clusters. Pull-based GitOps (used by Argo CD and Flux) has agents inside clusters that continuously pull and reconcile the desired state from Git. Pull-based is generally more secure as clusters only need outbound access. Learn more: [Official Documentation](https://www.gitops.tech/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['gitops', 'push', 'pull', 'architecture'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-005',
    question: 'In Flux CD, what is a Kustomization resource used for?',
    options: [
      'Defining how to deploy manifests from a source with optional Kustomize overlays',
      'Building container images',
      'Managing DNS records',
      'Configuring network policies',
    ],
    correctAnswer: 0,
    explanation:
      'A Flux Kustomization resource defines how to deploy Kubernetes manifests from a source (GitRepository or Bucket) with optional Kustomize overlays, health checks, and dependencies. Learn more: [Official Documentation](https://fluxcd.io/docs/components/kustomize/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['flux', 'kustomization', 'deployment'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-006',
    question: 'What is the sync status "OutOfSync" in Argo CD indicating?',
    options: [
      'The application has been deleted',
      'The cluster is unreachable',
      'The live state differs from the desired state in Git',
      'The application is healthy',
    ],
    correctAnswer: 2,
    explanation:
      'OutOfSync status in Argo CD indicates that the live state in the cluster differs from the desired state defined in Git. This can be resolved by syncing the application to apply the changes from Git. Learn more: [Official Documentation](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['argocd', 'sync', 'status'],
    difficulty: 'easy',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-007',
    question: 'Which component in Flux CD is responsible for fetching Helm charts?',
    options: [
      'Kustomize Controller',
      'Source Controller',
      'Notification Controller',
      'Helm Controller',
    ],
    correctAnswer: 3,
    explanation:
      'The Helm Controller in Flux CD is responsible for fetching Helm charts from HelmRepository sources and managing HelmRelease resources. The Source Controller handles GitRepository and HelmRepository sources. Learn more: [Official Documentation](https://fluxcd.io/docs/components/helm/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['flux', 'helm', 'controller'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-008',
    question: 'What is a canary deployment strategy?',
    options: [
      'Deploying to all nodes simultaneously',
      'Maintaining two identical production environments',
      'Gradually rolling out changes to a small subset of users before full deployment',
      'Rolling back to a previous version',
    ],
    correctAnswer: 2,
    explanation:
      'Canary deployment gradually rolls out changes to a small subset of users or traffic before deploying to the entire infrastructure. This allows testing in production with real traffic while minimizing risk. Learn more: [Official Documentation](https://argo-rollouts.readthedocs.io/en/stable/features/canary/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['canary', 'deployment', 'progressive-delivery'],
    difficulty: 'easy',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-009',
    question: 'What is the purpose of ApplicationSets in Argo CD?',
    options: [
      'Generating multiple Application resources from a single template',
      'Monitoring application health',
      'Managing secrets',
      'Building container images',
    ],
    correctAnswer: 0,
    explanation:
      'ApplicationSets in Argo CD allow you to generate multiple Application resources from a single template, enabling multi-cluster deployments, monorepo support, and self-service capabilities. Learn more: [Official Documentation](https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['argocd', 'applicationset', 'multi-cluster'],
    difficulty: 'medium',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-010',
    question: 'In GitOps, what does "reconciliation" refer to?',
    options: [
      'Merging Git branches',
      'Building container images',
      'User authentication',
      'The process of ensuring the live state matches the desired state in Git',
    ],
    correctAnswer: 3,
    explanation:
      'Reconciliation in GitOps is the continuous process of comparing the live state in the cluster with the desired state defined in Git and automatically correcting any drift. This is a core GitOps principle. Learn more: [Official Documentation](https://opengitops.dev/#principles)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['gitops', 'reconciliation', 'drift'],
    difficulty: 'easy',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-011',
    question: 'What is the purpose of Argo CD Image Updater?',
    options: [
      'Building container images',
      'Scanning images for vulnerabilities',
      'Automatically updating container image tags in Git when new versions are available',
      'Managing image pull secrets',
    ],
    correctAnswer: 2,
    explanation:
      'Argo CD Image Updater automatically updates container image versions in Git repositories when new images are pushed to registries, enabling automated image updates in GitOps workflows. Learn more: [Official Documentation](https://argocd-image-updater.readthedocs.io/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['argocd', 'image-updater', 'automation'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-012',
    question: 'What is the "App of Apps" pattern in Argo CD?',
    options: [
      'Running multiple Argo CD instances',
      'A pattern where a root Application manages other Application resources',
      'Deploying applications to multiple clusters',
      'A backup strategy for applications',
    ],
    correctAnswer: 1,
    explanation:
      'The App of Apps pattern uses a root Application that contains references to other Application resources, enabling declarative management of multiple applications and their dependencies. Learn more: [Official Documentation](https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['argocd', 'app-of-apps', 'pattern'],
    difficulty: 'hard',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-013',
    question: 'Which Flux component handles notifications and alerts?',
    options: [
      'Source Controller',
      'Kustomize Controller',
      'Notification Controller',
      'Helm Controller',
    ],
    correctAnswer: 2,
    explanation:
      'The Notification Controller in Flux handles alerts and notifications, sending messages to various providers (Slack, Teams, webhooks) about events like successful syncs, failures, or drift detection. Learn more: [Official Documentation](https://fluxcd.io/docs/components/notification/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['flux', 'notification', 'alerts'],
    difficulty: 'easy',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-014',
    question: 'What is blue-green deployment?',
    options: [
      'Deploying to nodes based on their color labels',
      'A strategy using two identical environments where traffic is switched between them',
      'Deploying only during certain hours',
      'A gradual rollout to percentage of users',
    ],
    correctAnswer: 1,
    explanation:
      'Blue-green deployment maintains two identical production environments. Traffic is switched from the current (blue) to the new (green) environment after validation, enabling instant rollback if issues occur. Learn more: [Official Documentation](https://argo-rollouts.readthedocs.io/en/stable/features/bluegreen/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['blue-green', 'deployment', 'strategy'],
    difficulty: 'easy',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-015',
    question: 'What does Flux Source Controller manage?',
    options: [
      'Container registries only',
      'Network policies',
      'CI/CD pipelines',
      'Git repositories, Helm repositories, and S3-compatible buckets as sources',
    ],
    correctAnswer: 3,
    explanation:
      'The Flux Source Controller manages Git repositories, Helm repositories, and S3-compatible buckets as sources for Kubernetes manifests. It handles authentication, polling, and artifact storage. Learn more: [Official Documentation](https://fluxcd.io/docs/components/source/)',
    domain: 'GitOps and Continuous Delivery',
    tags: ['flux', 'source-controller', 'git'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Platform APIs and Self-Service Capabilities (25%) - 15 questions
  // ============================================
  // correctAnswer: 1
  {
    id: 'cnpe-043',
    question: 'What is the purpose of Custom Resource Definitions (CRDs) in Kubernetes?',
    options: [
      'To define custom container images',
      'To extend the Kubernetes API with custom resource types',
      'To configure network policies',
      'To manage user authentication',
    ],
    correctAnswer: 1,
    explanation:
      'CRDs extend the Kubernetes API by allowing users to define custom resource types. This enables platform teams to create domain-specific APIs that developers can interact with using familiar kubectl commands. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['crd', 'api', 'kubernetes'],
    difficulty: 'easy',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-044',
    question: 'What is Crossplane primarily used for?',
    options: [
      'Container runtime management',
      'Log aggregation',
      'Provisioning and managing cloud infrastructure using Kubernetes-native APIs',
      'Service mesh configuration',
    ],
    correctAnswer: 2,
    explanation:
      'Crossplane enables platform teams to provision and manage cloud infrastructure (databases, storage, networking) using Kubernetes-native Custom Resources, enabling infrastructure self-service through familiar Kubernetes APIs. Learn more: [Official Documentation](https://docs.crossplane.io/latest/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['crossplane', 'infrastructure', 'cloud'],
    difficulty: 'medium',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-045',
    question: 'What is the role of a Kubernetes Operator?',
    options: [
      'A human administrator who manages clusters',
      'A network proxy',
      'A logging agent',
      'A pattern for automating the management of complex applications using custom controllers',
    ],
    correctAnswer: 3,
    explanation:
      'A Kubernetes Operator is a pattern that extends Kubernetes to automate the management of complex, stateful applications. Operators use custom resources and controllers to encode operational knowledge and automate tasks like upgrades, scaling, and recovery. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['operator', 'controller', 'automation'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-046',
    question: 'In Backstage, what are Software Templates used for?',
    options: [
      'Enabling developers to self-service create new projects, services, or infrastructure',
      'Monitoring application performance',
      'Managing Kubernetes secrets',
      'Configuring CI/CD pipelines only',
    ],
    correctAnswer: 0,
    explanation:
      'Backstage Software Templates enable platform teams to create self-service workflows for developers to scaffold new projects, services, documentation, or any standardized component with built-in best practices. Learn more: [Official Documentation](https://backstage.io/docs/features/software-templates/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['backstage', 'templates', 'self-service'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-047',
    question: 'What is a Composition in Crossplane?',
    options: [
      'A Docker Compose file',
      'A template that defines how to create and configure multiple cloud resources from a single custom resource',
      'A Kubernetes ConfigMap',
      'A Helm chart',
    ],
    correctAnswer: 1,
    explanation:
      'A Crossplane Composition defines how a composite resource (XR) maps to one or more managed resources. It acts as a template enabling platform teams to create higher-level abstractions that provision multiple infrastructure resources. Learn more: [Official Documentation](https://docs.crossplane.io/latest/composition/compositions/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['crossplane', 'composition', 'xr'],
    difficulty: 'hard',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-016',
    question: 'What is a CompositeResourceDefinition (XRD) in Crossplane?',
    options: [
      'A definition for container resources',
      'A network resource definition',
      'A storage class definition',
      'A schema defining a new type of composite resource and its API',
    ],
    correctAnswer: 3,
    explanation:
      'An XRD (CompositeResourceDefinition) in Crossplane defines the schema for a new type of composite resource, specifying its API shape, version, and how it should be validated. Learn more: [Official Documentation](https://docs.crossplane.io/latest/composition/composite-resource-definitions/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['crossplane', 'xrd', 'api'],
    difficulty: 'hard',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-017',
    question: 'What is the Software Catalog in Backstage?',
    options: [
      'A centralized inventory of all software assets, services, and their ownership',
      'A container image registry',
      'A Helm chart repository',
      'A Git repository browser',
    ],
    correctAnswer: 0,
    explanation:
      'The Software Catalog in Backstage is a centralized inventory tracking all software assets including services, websites, libraries, and data pipelines along with their metadata, ownership, and relationships. Learn more: [Official Documentation](https://backstage.io/docs/features/software-catalog/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['backstage', 'catalog', 'inventory'],
    difficulty: 'easy',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-018',
    question: 'What is the purpose of the Operator SDK?',
    options: [
      'Building container images',
      'Managing Kubernetes clusters',
      'A framework for building Kubernetes Operators with scaffolding and best practices',
      'Monitoring application performance',
    ],
    correctAnswer: 2,
    explanation:
      'The Operator SDK provides a framework for building Kubernetes Operators, including scaffolding, code generation, and best practices for developing operators using Go, Ansible, or Helm. Learn more: [Official Documentation](https://sdk.operatorframework.io/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['operator-sdk', 'operator', 'development'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-019',
    question: 'What is a Crossplane Provider?',
    options: [
      'A plugin that extends Crossplane with managed resources for a specific infrastructure platform',
      'A cloud service provider',
      'A Kubernetes node provider',
      'A network provider',
    ],
    correctAnswer: 0,
    explanation:
      'A Crossplane Provider is a plugin package that extends Crossplane with managed resources for specific infrastructure platforms like AWS, GCP, Azure, or Kubernetes. Providers enable Crossplane to manage external resources. Learn more: [Official Documentation](https://docs.crossplane.io/latest/packages/providers/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['crossplane', 'provider', 'infrastructure'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-020',
    question: 'What is the purpose of TechDocs in Backstage?',
    options: [
      'Managing technical debt',
      'Auto-generating API documentation from code comments',
      'Providing documentation-as-code with docs living alongside the code in Git',
      'Technical support ticketing',
    ],
    correctAnswer: 2,
    explanation:
      'TechDocs in Backstage enables documentation-as-code, where technical documentation lives alongside the code in Git repositories and is automatically published to the developer portal using MkDocs. Learn more: [Official Documentation](https://backstage.io/docs/features/techdocs/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['backstage', 'techdocs', 'documentation'],
    difficulty: 'easy',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-021',
    question: 'What is the controller-runtime library used for?',
    options: [
      'Container runtime management',
      'Building Kubernetes controllers and operators with common patterns and utilities',
      'Managing network controllers',
      'Controlling CI/CD pipelines',
    ],
    correctAnswer: 1,
    explanation:
      'Controller-runtime is a set of Go libraries for building Kubernetes controllers and operators. It provides common patterns like reconciliation loops, leader election, and client caching used by tools like Kubebuilder and Operator SDK. Learn more: [Official Documentation](https://github.com/kubernetes-sigs/controller-runtime)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['controller-runtime', 'operator', 'go'],
    difficulty: 'hard',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-022',
    question: 'What is an Aggregated API in Kubernetes?',
    options: [
      'A combined log aggregation API',
      'An API that extends the Kubernetes API server by registering additional API servers',
      'A metrics aggregation API',
      'A service mesh API aggregator',
    ],
    correctAnswer: 1,
    explanation:
      'Aggregated APIs extend the Kubernetes API server by registering additional API servers, allowing custom APIs to be served alongside core Kubernetes APIs. This is used by tools like metrics-server. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/apiserver-aggregation/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['api', 'aggregation', 'kubernetes'],
    difficulty: 'hard',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-023',
    question: 'What is the purpose of Kubebuilder?',
    options: [
      'Building container images',
      'Building Kubernetes clusters',
      'Building Helm charts',
      'A framework for building Kubernetes APIs and controllers using CRDs',
    ],
    correctAnswer: 3,
    explanation:
      'Kubebuilder is a framework for building Kubernetes APIs using CRDs. It provides code generation, scaffolding, and best practices for developing controllers and webhooks. Learn more: [Official Documentation](https://book.kubebuilder.io/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['kubebuilder', 'crd', 'controller'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-024',
    question: 'What is the catalog-info.yaml file in Backstage?',
    options: [
      'A metadata file describing a software component for registration in the Software Catalog',
      'A Kubernetes configuration file',
      'A CI/CD pipeline definition',
      'A Docker Compose file',
    ],
    correctAnswer: 0,
    explanation:
      'The catalog-info.yaml file is a metadata descriptor that registers a software component in the Backstage Software Catalog, defining its type, owner, dependencies, and relationships. Learn more: [Official Documentation](https://backstage.io/docs/features/software-catalog/descriptor-format/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['backstage', 'catalog', 'metadata'],
    difficulty: 'easy',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-025',
    question: 'What is the purpose of admission webhooks in Kubernetes?',
    options: [
      'Handling incoming network traffic',
      'Managing webhook notifications',
      'Authenticating users',
      'Intercepting API requests to validate or mutate resources before persistence',
    ],
    correctAnswer: 3,
    explanation:
      'Admission webhooks intercept Kubernetes API requests after authentication/authorization but before objects are persisted. Validating webhooks can reject requests, while mutating webhooks can modify objects. Learn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/)',
    domain: 'Platform APIs and Self-Service Capabilities',
    tags: ['webhook', 'admission', 'api'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Observability and Operations (20%) - 12 questions
  // ============================================
  // correctAnswer: 1
  {
    id: 'cnpe-048',
    question: 'What are the three pillars of observability?',
    options: [
      'CPU, Memory, Disk',
      'Logs, Metrics, and Traces',
      'Pods, Services, Deployments',
      'Git, CI, CD',
    ],
    correctAnswer: 1,
    explanation:
      'The three pillars of observability are Logs (event records), Metrics (numerical measurements over time), and Traces (request flows across services). Together they provide comprehensive visibility into system behavior. Learn more: [Official Documentation](https://opentelemetry.io/docs/)',
    domain: 'Observability and Operations',
    tags: ['observability', 'logs', 'metrics', 'traces'],
    difficulty: 'easy',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-049',
    question: 'What is the OpenTelemetry Collector used for?',
    options: [
      'Receiving, processing, and exporting telemetry data (logs, metrics, traces)',
      'Building container images',
      'Managing Kubernetes deployments',
      'Storing persistent data',
    ],
    correctAnswer: 0,
    explanation:
      'The OpenTelemetry Collector is a vendor-agnostic agent that receives, processes, and exports telemetry data. It can receive data in multiple formats, transform it, and send it to various backends. Learn more: [Official Documentation](https://opentelemetry.io/docs/collector/)',
    domain: 'Observability and Operations',
    tags: ['opentelemetry', 'collector', 'telemetry'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-050',
    question: 'In Prometheus, what is the purpose of a ServiceMonitor?',
    options: [
      'To deploy new services',
      'To monitor disk usage only',
      'To define which services Prometheus should scrape for metrics',
      'To manage service mesh traffic',
    ],
    correctAnswer: 2,
    explanation:
      'A ServiceMonitor is a Prometheus Operator CRD that declaratively specifies how services should be monitored. It defines which services to scrape, endpoints to target, and scrape intervals. Learn more: [Official Documentation](https://prometheus-operator.dev/docs/getting-started/introduction/)',
    domain: 'Observability and Operations',
    tags: ['prometheus', 'servicemonitor', 'metrics'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-051',
    question: 'What is distributed tracing used for?',
    options: [
      'Tracking Git commits',
      'Following request flows across multiple services to identify latency and errors',
      'Monitoring CPU usage',
      'Managing container images',
    ],
    correctAnswer: 1,
    explanation:
      'Distributed tracing tracks requests as they flow through multiple services, capturing timing and context at each step. This helps identify latency bottlenecks, errors, and dependencies in microservices architectures. Learn more: [Official Documentation](https://opentelemetry.io/docs/concepts/signals/traces/)',
    domain: 'Observability and Operations',
    tags: ['tracing', 'distributed', 'latency'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-026',
    question: 'What is a span in distributed tracing?',
    options: [
      'A unit of work representing a single operation within a trace',
      'A network connection',
      'A time period for metrics collection',
      'A log entry',
    ],
    correctAnswer: 0,
    explanation:
      'A span represents a single unit of work in a distributed trace, including operation name, start/end timestamps, attributes, and relationships to parent spans. Spans together form a trace showing the full request path. Learn more: [Official Documentation](https://opentelemetry.io/docs/concepts/signals/traces/#spans)',
    domain: 'Observability and Operations',
    tags: ['tracing', 'span', 'opentelemetry'],
    difficulty: 'easy',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-027',
    question: 'What is the purpose of PodMonitor in Prometheus Operator?',
    options: [
      'Monitoring pod lifecycle',
      'Managing pod security',
      'Controlling pod resources',
      'Defining scrape targets for Prometheus based on pod labels without requiring a Service',
    ],
    correctAnswer: 3,
    explanation:
      'PodMonitor is a Prometheus Operator CRD that specifies pods to monitor directly by label selector, without requiring a Kubernetes Service. This is useful for scraping sidecars or pods not exposed via Services. Learn more: [Official Documentation](https://prometheus-operator.dev/docs/api-reference/api/#monitoring.coreos.com/v1.PodMonitor)',
    domain: 'Observability and Operations',
    tags: ['prometheus', 'podmonitor', 'metrics'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-028',
    question: 'What is Grafana Loki primarily used for?',
    options: [
      'Metrics storage',
      'Distributed tracing',
      'Log aggregation with label-based indexing',
      'Service mesh management',
    ],
    correctAnswer: 2,
    explanation:
      'Grafana Loki is a horizontally scalable, highly available log aggregation system. Unlike traditional log systems, Loki indexes only labels (metadata) rather than full log content, making it cost-effective. Learn more: [Official Documentation](https://grafana.com/docs/loki/latest/)',
    domain: 'Observability and Operations',
    tags: ['loki', 'logging', 'grafana'],
    difficulty: 'medium',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-029',
    question: 'What is a Service Level Objective (SLO)?',
    options: [
      'A service configuration',
      'A service deployment strategy',
      'A service mesh configuration',
      'A target value for a service level indicator that represents desired reliability',
    ],
    correctAnswer: 3,
    explanation:
      'An SLO (Service Level Objective) is a target value or range for a service level indicator (SLI) that represents the desired reliability level, such as "99.9% of requests should succeed" over a given period. Learn more: [Official Documentation](https://sre.google/sre-book/service-level-objectives/)',
    domain: 'Observability and Operations',
    tags: ['slo', 'sre', 'reliability'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-030',
    question: 'What is the OpenTelemetry Protocol (OTLP)?',
    options: [
      'A network routing protocol',
      'A vendor-neutral protocol for transmitting telemetry data',
      'A container protocol',
      'A Git protocol',
    ],
    correctAnswer: 1,
    explanation:
      'OTLP (OpenTelemetry Protocol) is the native, vendor-neutral protocol for transmitting telemetry data (logs, metrics, traces) in OpenTelemetry. It supports both gRPC and HTTP/JSON transports. Learn more: [Official Documentation](https://opentelemetry.io/docs/specs/otlp/)',
    domain: 'Observability and Operations',
    tags: ['otlp', 'opentelemetry', 'protocol'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-031',
    question: 'What is the purpose of an error budget in SRE?',
    options: [
      'Budget for infrastructure costs',
      'The amount of allowable unreliability before blocking feature releases',
      'Budget for developer training',
      'Budget for security tools',
    ],
    correctAnswer: 1,
    explanation:
      'An error budget is derived from the SLO and represents the acceptable amount of unreliability. If the error budget is exhausted, teams should focus on reliability improvements rather than new features. Learn more: [Official Documentation](https://sre.google/sre-book/embracing-risk/)',
    domain: 'Observability and Operations',
    tags: ['error-budget', 'sre', 'reliability'],
    difficulty: 'hard',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-032',
    question: 'What is Prometheus recording rules used for?',
    options: [
      'Recording audio logs',
      'Recording API calls',
      'Recording deployment events',
      'Pre-computing frequently used or expensive queries into new time series',
    ],
    correctAnswer: 3,
    explanation:
      'Prometheus recording rules allow you to precompute frequently needed or computationally expensive expressions and save their results as new time series. This improves query performance for dashboards and alerts. Learn more: [Official Documentation](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/)',
    domain: 'Observability and Operations',
    tags: ['prometheus', 'recording-rules', 'performance'],
    difficulty: 'hard',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-033',
    question: 'What is the purpose of the kube-state-metrics exporter?',
    options: [
      'Generating metrics about Kubernetes object states (deployments, pods, etc.)',
      'Exporting container resource usage',
      'Exporting network metrics',
      'Exporting storage metrics',
    ],
    correctAnswer: 0,
    explanation:
      'kube-state-metrics generates metrics about the state of Kubernetes objects by listening to the Kubernetes API. It provides metrics like deployment replicas, pod status, and node conditions. Learn more: [Official Documentation](https://github.com/kubernetes/kube-state-metrics)',
    domain: 'Observability and Operations',
    tags: ['kube-state-metrics', 'prometheus', 'metrics'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Platform Architecture and Infrastructure (15%) - 9 questions
  // ============================================
  // correctAnswer: 3
  {
    id: 'cnpe-052',
    question: 'What is multi-tenancy in the context of Kubernetes platforms?',
    options: [
      'Running multiple container runtimes',
      'Using multiple cloud providers',
      'Having multiple master nodes',
      'Sharing cluster resources among multiple teams or applications with isolation',
    ],
    correctAnswer: 3,
    explanation:
      'Multi-tenancy in Kubernetes refers to sharing cluster resources among multiple teams, applications, or customers while maintaining appropriate isolation through namespaces, RBAC, resource quotas, and network policies. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/multi-tenancy/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['multi-tenancy', 'isolation', 'namespaces'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-053',
    question: 'What is an Internal Developer Portal (IDP)?',
    options: [
      'A VPN for developers',
      'A centralized interface providing developers with self-service access to tools, services, and documentation',
      'A code repository',
      'A container registry',
    ],
    correctAnswer: 1,
    explanation:
      'An Internal Developer Portal (IDP) like Backstage provides a centralized interface where developers can discover services, access documentation, create new projects via templates, and interact with platform capabilities through self-service. Learn more: [Official Documentation](https://backstage.io/docs/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['idp', 'backstage', 'developer-portal'],
    difficulty: 'easy',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-054',
    question: 'What is Infrastructure as Code (IaC)?',
    options: [
      'Writing code inside containers',
      'Managing and provisioning infrastructure through machine-readable definition files',
      'A programming language for Kubernetes',
      'A CI/CD tool',
    ],
    correctAnswer: 1,
    explanation:
      'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files rather than manual processes. Tools like Terraform, Pulumi, and Crossplane implement IaC patterns. Learn more: [Official Documentation](https://www.terraform.io/intro)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['iac', 'infrastructure', 'automation'],
    difficulty: 'easy',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-034',
    question: 'What is the purpose of Virtual Clusters (vClusters)?',
    options: [
      'Running virtual machines in Kubernetes',
      'Managing virtual networks',
      'Providing isolated Kubernetes control planes within a host cluster for multi-tenancy',
      'Virtualizing storage',
    ],
    correctAnswer: 2,
    explanation:
      'vClusters provide fully isolated Kubernetes control planes running inside a host cluster. They enable multi-tenancy with complete API isolation while sharing underlying compute resources. Learn more: [Official Documentation](https://www.vcluster.com/docs/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['vcluster', 'multi-tenancy', 'isolation'],
    difficulty: 'hard',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-035',
    question: 'What is Cluster API (CAPI) used for?',
    options: [
      'Declaratively creating, configuring, and managing Kubernetes clusters using Kubernetes-native APIs',
      'Managing cluster networking',
      'Monitoring cluster health',
      'Managing cluster storage',
    ],
    correctAnswer: 0,
    explanation:
      'Cluster API provides declarative, Kubernetes-style APIs for cluster creation, configuration, and management. It enables infrastructure-agnostic cluster lifecycle management. Learn more: [Official Documentation](https://cluster-api.sigs.k8s.io/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['cluster-api', 'capi', 'cluster-management'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-036',
    question: 'What is the purpose of ResourceQuotas in Kubernetes?',
    options: [
      'Constraining aggregate resource consumption per namespace',
      'Limiting container image sizes',
      'Limiting network bandwidth',
      'Restricting user logins',
    ],
    correctAnswer: 0,
    explanation:
      'ResourceQuotas constrain the aggregate resource consumption in a namespace, limiting the total CPU, memory, storage, and object count that can be consumed. This is essential for multi-tenant clusters. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/policy/resource-quotas/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['resourcequota', 'multi-tenancy', 'limits'],
    difficulty: 'easy',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-037',
    question: 'What is the Platform Engineering approach to software delivery?',
    options: [
      'Manual infrastructure management',
      'Outsourcing all operations',
      'Direct production access for all developers',
      'Building internal platforms that provide self-service capabilities to development teams',
    ],
    correctAnswer: 3,
    explanation:
      'Platform Engineering focuses on building internal platforms that provide self-service capabilities, golden paths, and developer tools that abstract infrastructure complexity while maintaining governance. Learn more: [Official Documentation](https://platformengineering.org/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['platform-engineering', 'self-service', 'devex'],
    difficulty: 'easy',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-038',
    question: 'What is the purpose of LimitRanges in Kubernetes?',
    options: [
      'Limiting API rate',
      'Setting default resource requests/limits and constraining min/max values per container or pod',
      'Limiting network connections',
      'Limiting log size',
    ],
    correctAnswer: 1,
    explanation:
      'LimitRanges set default resource requests and limits for containers/pods in a namespace and constrain the minimum and maximum resource values that can be specified. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/policy/limit-range/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['limitrange', 'resources', 'policy'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-039',
    question: 'What is the golden path concept in platform engineering?',
    options: [
      'The most expensive infrastructure option',
      'A critical network path',
      'A recommended, well-supported way to accomplish common tasks with built-in best practices',
      'The fastest deployment path',
    ],
    correctAnswer: 2,
    explanation:
      'A golden path is a recommended, well-supported, and opinionated way to accomplish common tasks. It provides developers with pre-built solutions following best practices while allowing flexibility for exceptions. Learn more: [Official Documentation](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/)',
    domain: 'Platform Architecture and Infrastructure',
    tags: ['golden-path', 'platform', 'best-practices'],
    difficulty: 'easy',
  },

  // ============================================
  // DOMAIN: Security and Policy Enforcement (15%) - 9 questions
  // ============================================
  // correctAnswer: 2
  {
    id: 'cnpe-055',
    question: 'What is Kyverno used for in Kubernetes?',
    options: [
      'Container networking',
      'Log aggregation',
      'Policy management using Kubernetes-native resources for validation, mutation, and generation',
      'Service mesh traffic management',
    ],
    correctAnswer: 2,
    explanation:
      'Kyverno is a Kubernetes-native policy engine that validates, mutates, and generates Kubernetes resources using policies defined as Custom Resources. It enforces best practices and security standards. Learn more: [Official Documentation](https://kyverno.io/docs/)',
    domain: 'Security and Policy Enforcement',
    tags: ['kyverno', 'policy', 'validation'],
    difficulty: 'medium',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-056',
    question: 'What is OPA Gatekeeper?',
    options: [
      'A Kubernetes ingress controller',
      'A secret management tool',
      'A network policy controller',
      'A policy engine that uses Open Policy Agent to enforce policies on Kubernetes resources',
    ],
    correctAnswer: 3,
    explanation:
      'OPA Gatekeeper integrates Open Policy Agent with Kubernetes as an admission controller. It uses ConstraintTemplates and Constraints to define and enforce policies on resources during admission. Learn more: [Official Documentation](https://open-policy-agent.github.io/gatekeeper/)',
    domain: 'Security and Policy Enforcement',
    tags: ['opa', 'gatekeeper', 'policy', 'admission'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-057',
    question: 'What is the External Secrets Operator used for?',
    options: [
      'Synchronizing secrets from external secret management systems into Kubernetes',
      'Encrypting network traffic',
      'Managing SSL certificates',
      'Scanning containers for vulnerabilities',
    ],
    correctAnswer: 0,
    explanation:
      'External Secrets Operator synchronizes secrets from external secret management systems (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault, etc.) into Kubernetes Secrets, enabling centralized secret management. Learn more: [Official Documentation](https://external-secrets.io/)',
    domain: 'Security and Policy Enforcement',
    tags: ['external-secrets', 'vault', 'secrets'],
    difficulty: 'medium',
  },
  // correctAnswer: 3
  {
    id: 'cnpe-058',
    question: 'What does SLSA (Supply-chain Levels for Software Artifacts) address?',
    options: [
      'Container runtime security',
      'Network encryption',
      'User authentication',
      'Software supply chain integrity and security through a framework of standards',
    ],
    correctAnswer: 3,
    explanation:
      'SLSA (pronounced "salsa") is a security framework providing standards and best practices for ensuring software supply chain integrity. It defines levels of assurance for build provenance, source integrity, and artifact verification. Learn more: [Official Documentation](https://slsa.dev/)',
    domain: 'Security and Policy Enforcement',
    tags: ['slsa', 'supply-chain', 'security'],
    difficulty: 'hard',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-059',
    question: 'What is the purpose of Kubernetes RBAC?',
    options: [
      'To control access to Kubernetes resources based on roles and permissions',
      'To manage container images',
      'To configure network policies',
      'To schedule pods on nodes',
    ],
    correctAnswer: 0,
    explanation:
      'Kubernetes Role-Based Access Control (RBAC) regulates access to cluster resources based on the roles of individual users or service accounts. It uses Roles, ClusterRoles, RoleBindings, and ClusterRoleBindings. Learn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)',
    domain: 'Security and Policy Enforcement',
    tags: ['rbac', 'security', 'access-control'],
    difficulty: 'easy',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-040',
    question: 'What is Sigstore used for?',
    options: [
      'Signal processing',
      'Managing TLS certificates',
      'Signing, verifying, and protecting software artifacts and supply chains',
      'Storing secrets',
    ],
    correctAnswer: 2,
    explanation:
      'Sigstore provides free tools for signing, verifying, and protecting software artifacts. It includes Cosign for container signing, Fulcio for certificate issuance, and Rekor for transparency logs. Learn more: [Official Documentation](https://www.sigstore.dev/)',
    domain: 'Security and Policy Enforcement',
    tags: ['sigstore', 'signing', 'supply-chain'],
    difficulty: 'medium',
  },
  // correctAnswer: 1
  {
    id: 'cnpe-041',
    question: 'What is the purpose of Pod Security Standards in Kubernetes?',
    options: [
      'Encrypting pod traffic',
      'Defining security configurations that pods must meet at different privilege levels',
      'Managing pod networking',
      'Scheduling pods securely',
    ],
    correctAnswer: 1,
    explanation:
      'Pod Security Standards define three policies (Privileged, Baseline, Restricted) that pods must comply with, controlling security-sensitive aspects like privilege escalation, host namespaces, and capabilities. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'Security and Policy Enforcement',
    tags: ['pod-security', 'security', 'standards'],
    difficulty: 'medium',
  },
  // correctAnswer: 0
  {
    id: 'cnpe-042',
    question: 'What is cosign used for in container security?',
    options: [
      'Signing and verifying container images to ensure authenticity',
      'Container orchestration',
      'Container networking',
      'Container logging',
    ],
    correctAnswer: 0,
    explanation:
      'Cosign (part of Sigstore) is a tool for signing and verifying container images using keyless signing or traditional keys. It ensures image authenticity and integrity in supply chain security. Learn more: [Official Documentation](https://github.com/sigstore/cosign)',
    domain: 'Security and Policy Enforcement',
    tags: ['cosign', 'signing', 'containers'],
    difficulty: 'medium',
  },
  // correctAnswer: 2
  {
    id: 'cnpe-060',
    question: 'What is Network Policy in Kubernetes used for?',
    options: [
      'Routing external traffic',
      'Load balancing traffic',
      'Specifying how groups of pods are allowed to communicate with each other and network endpoints',
      'Managing DNS',
    ],
    correctAnswer: 2,
    explanation:
      'Network Policies specify how groups of pods can communicate with each other and with external endpoints. They provide micro-segmentation and are essential for multi-tenant security. Learn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/)',
    domain: 'Security and Policy Enforcement',
    tags: ['networkpolicy', 'security', 'networking'],
    difficulty: 'medium',
  },
];

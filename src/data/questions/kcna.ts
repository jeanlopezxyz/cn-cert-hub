/**
 * KCNA - Kubernetes and Cloud Native Associate
 * Practice Questions (60 questions - matches exam format)
 *
 * Exam Domains:
 * - Kubernetes Fundamentals (46%) - 26 questions
 * - Container Orchestration (22%) - 13 questions
 * - Cloud Native Architecture (16%) - 8 questions
 * - Cloud Native Observability (8%) - 6 questions
 * - Cloud Native Application Delivery (8%) - 7 questions
 *
 * Topics covered:
 * - Kubernetes Architecture, Resources, API, Scheduling
 * - Container Runtime, Security, Networking, Storage
 * - Microservices, Autoscaling, Serverless, Service Mesh
 * - Observability (Logs, Metrics, Traces), Cost Management
 * - GitOps, CI/CD, Helm, Deployment Strategies
 */

import type { Question } from '@/types/quiz';

export const KCNA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Kubernetes Fundamentals (46%) - 14 questions
  // ============================================
  {
    id: 'kcna-001',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the primary purpose of Kubernetes?',
    options: [
      'To orchestrate and manage containerized applications',
      'To create virtual machines',
      'To build container images',
      'To monitor network traffic',
    ],
    correctAnswer: 0,
    explanation:
      'Kubernetes is a container orchestration platform that automates the deployment, scaling, and management of containerized applications.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/)',
    difficulty: 'medium',
    tags: ['basics', 'containers', 'orchestration'],
  },
  {
    id: 'kcna-002',
    domain: 'Kubernetes Fundamentals',
    question: 'Which component is responsible for storing cluster state in Kubernetes?',
    options: ['kube-apiserver', 'kube-controller-manager', 'kube-scheduler', 'etcd'],
    correctAnswer: 3,
    explanation:
      'etcd is a distributed key-value store that serves as the backing store for all cluster data in Kubernetes.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/components/#etcd)',
    difficulty: 'medium',
    tags: ['etcd', 'cluster-state', 'components'],
  },
  {
    id: 'kcna-003',
    domain: 'Kubernetes Fundamentals',
    question: 'What is kubectl?',
    options: [
      'A Kubernetes dashboard',
      'The command-line tool for interacting with Kubernetes',
      'A container runtime',
      'A monitoring tool',
    ],
    correctAnswer: 1,
    explanation:
      'kubectl is the command-line interface (CLI) tool that allows users to run commands against Kubernetes clusters.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/kubectl/)',
    difficulty: 'medium',
    tags: ['kubectl', 'cli', 'api'],
  },
  {
    id: 'kcna-004',
    domain: 'Kubernetes Fundamentals',
    question: 'Which control plane component is responsible for scheduling pods to nodes?',
    options: ['kube-apiserver', 'etcd', 'kube-scheduler', 'kube-controller-manager'],
    correctAnswer: 2,
    explanation:
      'The kube-scheduler watches for newly created Pods with no assigned node and selects a node for them to run on based on resource requirements, constraints, and other factors.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/)',
    difficulty: 'medium',
    tags: ['scheduler', 'control-plane', 'components'],
  },
  {
    id: 'kcna-005',
    domain: 'Kubernetes Fundamentals',
    question: 'What is a Namespace in Kubernetes?',
    options: [
      'A physical cluster partition',
      'A type of storage volume',
      'A networking protocol',
      'A virtual cluster within a physical cluster for resource isolation',
    ],
    correctAnswer: 3,
    explanation:
      'Namespaces provide a mechanism for isolating groups of resources within a single cluster. They are intended for use in environments with many users spread across multiple teams or projects.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)',
    difficulty: 'medium',
    tags: ['namespace', 'isolation', 'multi-tenancy'],
  },
  {
    id: 'kcna-006',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the role of the kubelet?',
    options: [
      'To store cluster configuration',
      'To ensure containers are running in a Pod on each node',
      'To schedule pods across nodes',
      'To provide the cluster API',
    ],
    correctAnswer: 1,
    explanation:
      'The kubelet is an agent that runs on each node in the cluster. It ensures that containers described in PodSpecs are running and healthy.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/components/#kubelet)',
    difficulty: 'medium',
    tags: ['kubelet', 'node', 'agent'],
  },
  {
    id: 'kcna-007',
    domain: 'Kubernetes Fundamentals',
    question: 'Which Kubernetes object is used to expose a set of Pods as a network service?',
    options: ['Deployment', 'ConfigMap', 'Ingress', 'Service'],
    correctAnswer: 3,
    explanation:
      'A Service is an abstract way to expose an application running on a set of Pods as a network service. It provides a stable IP address and DNS name.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/service/)',
    difficulty: 'medium',
    tags: ['service', 'networking', 'exposure'],
  },
  {
    id: 'kcna-008',
    domain: 'Kubernetes Fundamentals',
    question: 'What does a ReplicaSet ensure?',
    options: [
      'That pods are distributed across multiple clusters',
      'That a specified number of pod replicas are running at any given time',
      'That pods have unique IP addresses',
      'That pods are automatically updated',
    ],
    correctAnswer: 1,
    explanation:
      'A ReplicaSet maintains a stable set of replica Pods running at any given time. It guarantees the availability of a specified number of identical Pods.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)',
    difficulty: 'medium',
    tags: ['replicaset', 'replicas', 'availability'],
  },
  {
    id: 'kcna-009',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the purpose of a ConfigMap?',
    options: [
      'To store sensitive data like passwords',
      'To store non-confidential configuration data in key-value pairs',
      'To define resource limits for pods',
      'To configure network policies',
    ],
    correctAnswer: 1,
    explanation:
      'ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable. They store non-confidential data in key-value pairs.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/configuration/configmap/)',
    difficulty: 'medium',
    tags: ['configmap', 'configuration', 'decoupling'],
  },
  {
    id: 'kcna-010',
    domain: 'Kubernetes Fundamentals',
    question: 'How do you store sensitive information like passwords in Kubernetes?',
    options: [
      'ConfigMap',
      'PersistentVolume',
      'Environment variable directly in pod spec',
      'Secret',
    ],
    correctAnswer: 3,
    explanation:
      'Secrets are used to store and manage sensitive information such as passwords, OAuth tokens, and SSH keys. They are base64 encoded and can be encrypted at rest.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/configuration/secret/)',
    difficulty: 'medium',
    tags: ['secret', 'security', 'sensitive-data'],
  },
  {
    id: 'kcna-011',
    domain: 'Kubernetes Fundamentals',
    question: 'What is a DaemonSet used for?',
    options: [
      'Running pods only on the control plane',
      'Running a pod on every node in the cluster',
      'Scheduling batch jobs',
      'Managing stateful applications',
    ],
    correctAnswer: 1,
    explanation:
      'A DaemonSet ensures that all (or some) nodes run a copy of a Pod. Common use cases include running log collectors, monitoring agents, or storage daemons on every node.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)',
    difficulty: 'medium',
    tags: ['daemonset', 'node', 'system-services'],
  },
  {
    id: 'kcna-012',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the function of kube-proxy?',
    options: [
      'To provide the Kubernetes API',
      'To maintain network rules on nodes for Service communication',
      'To schedule pods to nodes',
      'To store cluster state',
    ],
    correctAnswer: 1,
    explanation:
      'kube-proxy is a network proxy that runs on each node in the cluster. It maintains network rules that allow network communication to Pods from inside or outside the cluster.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/components/#kube-proxy)',
    difficulty: 'medium',
    tags: ['kube-proxy', 'networking', 'services'],
  },
  {
    id: 'kcna-013',
    domain: 'Kubernetes Fundamentals',
    question:
      'Which label selector type matches resources that have a specific key regardless of value?',
    options: [
      'Equality-based selector',
      'Set-based selector with "In" operator',
      'Annotation selector',
      'Set-based selector with "Exists" operator',
    ],
    correctAnswer: 3,
    explanation:
      'The "Exists" operator in set-based selectors matches all resources that have the specified label key, regardless of the value. It is written as "key" without any operator or value.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#set-based-requirement)',
    difficulty: 'hard',
    tags: ['labels', 'selectors', 'filtering'],
  },
  {
    id: 'kcna-014',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the default Service type in Kubernetes?',
    options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'ExternalName'],
    correctAnswer: 0,
    explanation:
      'ClusterIP is the default Service type. It exposes the Service on an internal IP in the cluster, making it only reachable from within the cluster.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip)',
    difficulty: 'medium',
    tags: ['service', 'clusterip', 'networking'],
  },

  // ============================================
  // DOMAIN: Container Orchestration (22%) - 7 questions
  // ============================================
  {
    id: 'kcna-015',
    domain: 'Container Orchestration',
    question: 'What is a Pod in Kubernetes?',
    options: [
      'A single container running in isolation',
      'A collection of containers that share storage and network',
      'A virtual machine running containers',
      'A network interface for containers',
    ],
    correctAnswer: 1,
    explanation:
      'A Pod is the smallest deployable unit in Kubernetes and consists of one or more containers that share storage, network, and a specification for how to run the containers.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/pods/)',
    difficulty: 'medium',
    tags: ['pods', 'containers', 'workloads'],
  },
  {
    id: 'kcna-016',
    domain: 'Container Orchestration',
    question: 'Which container runtime interface does Kubernetes use?',
    options: [
      'Docker Engine API',
      'Open Container Initiative (OCI)',
      'Container Network Interface (CNI)',
      'Container Runtime Interface (CRI)',
    ],
    correctAnswer: 3,
    explanation:
      'Kubernetes uses the Container Runtime Interface (CRI) to communicate with container runtimes. This allows Kubernetes to support multiple container runtimes like containerd, CRI-O, etc.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/architecture/cri/)',
    difficulty: 'medium',
    tags: ['cri', 'runtime', 'containers'],
  },
  {
    id: 'kcna-017',
    domain: 'Container Orchestration',
    question: 'What is a PersistentVolume (PV) in Kubernetes?',
    options: [
      'Temporary storage that is deleted when a pod terminates',
      'A piece of storage in the cluster provisioned by an administrator or dynamically',
      'A configuration file for storage classes',
      'A network storage protocol',
    ],
    correctAnswer: 1,
    explanation:
      'A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It has a lifecycle independent of any individual Pod.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)',
    difficulty: 'medium',
    tags: ['storage', 'pv', 'persistence'],
  },
  {
    id: 'kcna-018',
    domain: 'Container Orchestration',
    question: 'What is the purpose of a NetworkPolicy?',
    options: [
      'To configure DNS for the cluster',
      'To control traffic flow between pods and network endpoints',
      'To set up load balancing',
      'To manage SSL certificates',
    ],
    correctAnswer: 1,
    explanation:
      'NetworkPolicies allow you to control traffic flow at the IP address or port level. They specify how groups of pods are allowed to communicate with each other and other network endpoints.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/network-policies/)',
    difficulty: 'medium',
    tags: ['networkpolicy', 'security', 'traffic-control'],
  },
  {
    id: 'kcna-019',
    domain: 'Container Orchestration',
    question: 'What is a StatefulSet used for?',
    options: [
      'Managing stateless applications',
      'Managing stateful applications with stable identities and persistent storage',
      'Running one-time batch jobs',
      'Exposing services externally',
    ],
    correctAnswer: 1,
    explanation:
      'StatefulSet is the workload API object used to manage stateful applications. It provides guarantees about the ordering and uniqueness of Pods, with stable network identifiers and persistent storage.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)',
    difficulty: 'medium',
    tags: ['statefulset', 'stateful', 'persistence'],
  },
  {
    id: 'kcna-020',
    domain: 'Container Orchestration',
    question: 'Which component manages container images and runs containers on a node?',
    options: ['kube-scheduler', 'Container runtime (e.g., containerd)', 'kube-apiserver', 'etcd'],
    correctAnswer: 1,
    explanation:
      'The container runtime is responsible for pulling container images and running containers. Examples include containerd, CRI-O, and Docker. The kubelet interacts with the runtime via CRI.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/setup/production-environment/container-runtimes/)',
    difficulty: 'medium',
    tags: ['runtime', 'containers', 'node'],
  },
  {
    id: 'kcna-021',
    domain: 'Container Orchestration',
    question: 'What is an Ingress in Kubernetes?',
    options: [
      'An API object that manages external access to services, typically HTTP',
      'A type of storage volume',
      'A container runtime interface',
      'A monitoring component',
    ],
    correctAnswer: 0,
    explanation:
      'Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/ingress/)',
    difficulty: 'medium',
    tags: ['ingress', 'http', 'routing'],
  },

  // ============================================
  // DOMAIN: Cloud Native Architecture (16%) - 5 questions
  // ============================================
  {
    id: 'kcna-022',
    domain: 'Cloud Native Architecture',
    question: 'Which of the following is a principle of cloud native applications?',
    options: [
      'Monolithic architecture',
      'Manual scaling',
      'Single deployment environment',
      'Microservices architecture',
    ],
    correctAnswer: 3,
    explanation:
      'Cloud native applications are typically built using microservices architecture, which allows for independent scaling, deployment, and maintenance of application components.\n\nLearn more: [Documentación oficial](https://www.cncf.io/about/who-we-are/)',
    difficulty: 'medium',
    tags: ['cloud-native', 'microservices', 'architecture'],
  },
  {
    id: 'kcna-023',
    domain: 'Cloud Native Architecture',
    question: 'What does CNCF stand for?',
    options: [
      'Container Network Configuration Framework',
      'Cloud Native Computing Foundation',
      'Cluster Node Control Framework',
      'Cloud Network Container Foundation',
    ],
    correctAnswer: 1,
    explanation:
      'CNCF stands for Cloud Native Computing Foundation. It is a vendor-neutral organization that hosts and promotes cloud native projects like Kubernetes, Prometheus, and Envoy.\n\nLearn more: [Documentación oficial](https://www.cncf.io/)',
    difficulty: 'medium',
    tags: ['cncf', 'foundation', 'governance'],
  },
  {
    id: 'kcna-024',
    domain: 'Cloud Native Architecture',
    question: 'What is the Horizontal Pod Autoscaler (HPA)?',
    options: [
      'A tool for vertical scaling of nodes',
      'A controller that automatically scales pods based on observed metrics',
      'A network load balancer',
      'A storage provisioner',
    ],
    correctAnswer: 1,
    explanation:
      'The Horizontal Pod Autoscaler automatically scales the number of Pod replicas in a deployment, replicaset, or statefulset based on observed CPU utilization or custom metrics.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)',
    difficulty: 'medium',
    tags: ['hpa', 'autoscaling', 'scaling'],
  },
  {
    id: 'kcna-025',
    domain: 'Cloud Native Architecture',
    question: 'What is serverless computing in the context of cloud native?',
    options: [
      'Running applications without any servers',
      'Using virtual machines instead of containers',
      'Running applications only on bare metal servers',
      'A model where the cloud provider manages server infrastructure and scales automatically',
    ],
    correctAnswer: 3,
    explanation:
      'Serverless computing is an execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Users write code without worrying about infrastructure.\n\nLearn more: [Documentación oficial](https://www.cncf.io/blog/2018/02/14/cncf-takes-first-step-towards-serverless-computing/)',
    difficulty: 'medium',
    tags: ['serverless', 'faas', 'cloud'],
  },
  {
    id: 'kcna-026',
    domain: 'Cloud Native Architecture',
    question: 'What is the 12-factor app methodology?',
    options: [
      'A methodology for building scalable, maintainable SaaS applications',
      'A security framework for containers',
      'A networking protocol for microservices',
      'A storage configuration standard',
    ],
    correctAnswer: 0,
    explanation:
      'The 12-factor app is a methodology for building software-as-a-service applications that are portable, resilient, and can scale. It covers aspects like codebase, dependencies, config, and processes.\n\nLearn more: [Documentación oficial](https://12factor.net/)',
    difficulty: 'hard',
    tags: ['12-factor', 'methodology', 'best-practices'],
  },

  // ============================================
  // DOMAIN: Cloud Native Observability (8%) - 2 questions
  // ============================================
  {
    id: 'kcna-027',
    domain: 'Cloud Native Observability',
    question: 'What are the three pillars of observability?',
    options: [
      'CPU, Memory, Storage',
      'Logs, Metrics, Traces',
      'Pods, Services, Deployments',
      'Security, Networking, Storage',
    ],
    correctAnswer: 1,
    explanation:
      'The three pillars of observability are Logs (event records), Metrics (numerical measurements over time), and Traces (request flow through distributed systems).\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/concepts/signals/)',
    difficulty: 'medium',
    tags: ['observability', 'monitoring', 'telemetry'],
  },
  {
    id: 'kcna-028',
    domain: 'Cloud Native Observability',
    question: 'What is Prometheus primarily used for?',
    options: [
      'Container orchestration',
      'Log aggregation',
      'Distributed tracing',
      'Metrics collection and alerting',
    ],
    correctAnswer: 3,
    explanation:
      'Prometheus is an open-source monitoring and alerting toolkit. It collects and stores metrics as time series data, with a powerful query language (PromQL) for analysis.\n\nLearn more: [Documentación oficial](https://prometheus.io/docs/introduction/overview/)',
    difficulty: 'medium',
    tags: ['prometheus', 'metrics', 'monitoring'],
  },
  {
    id: 'kcna-029',
    domain: 'Cloud Native Observability',
    question: 'What is OpenTelemetry?',
    options: [
      'A vendor-neutral standard for collecting telemetry data (traces, metrics, logs)',
      'A container runtime',
      'A Kubernetes networking plugin',
      'A CI/CD tool',
    ],
    correctAnswer: 0,
    explanation:
      'OpenTelemetry is a collection of tools, APIs, and SDKs for generating, collecting, and exporting telemetry data (metrics, logs, and traces) in a vendor-neutral way.\n\nLearn more: [Documentación oficial](https://opentelemetry.io/docs/)',
    difficulty: 'medium',
    tags: ['opentelemetry', 'telemetry', 'observability'],
  },

  // ============================================
  // DOMAIN: Cloud Native Application Delivery (8%) - 2 questions
  // ============================================
  {
    id: 'kcna-030',
    domain: 'Cloud Native Application Delivery',
    question: 'What is GitOps?',
    options: [
      'A version control system',
      'A container image registry',
      'A methodology where Git is the single source of truth for declarative infrastructure and applications',
      'A continuous integration server',
    ],
    correctAnswer: 2,
    explanation:
      'GitOps is a way of implementing Continuous Deployment for cloud native applications. It uses Git as the single source of truth for declarative infrastructure and applications.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    difficulty: 'medium',
    tags: ['gitops', 'delivery', 'automation'],
  },
  {
    id: 'kcna-031',
    domain: 'Cloud Native Application Delivery',
    question: 'What is the purpose of a Helm chart?',
    options: [
      'To monitor cluster health',
      'To encrypt secrets',
      'To configure network policies',
      'To package Kubernetes resources for easy deployment and management',
    ],
    correctAnswer: 3,
    explanation:
      'Helm charts are packages of pre-configured Kubernetes resources. They help you define, install, and upgrade complex Kubernetes applications using templates and values.\n\nLearn more: [Documentación oficial](https://helm.sh/docs/topics/charts/)',
    difficulty: 'medium',
    tags: ['helm', 'packaging', 'deployment'],
  },
  {
    id: 'kcna-032',
    domain: 'Cloud Native Application Delivery',
    question: 'What is a rolling update in Kubernetes?',
    options: [
      'Updating all pods simultaneously',
      'Rolling back to a previous version',
      'Incrementally updating pod instances with new versions while maintaining availability',
      'Updating the cluster control plane',
    ],
    correctAnswer: 2,
    explanation:
      'A rolling update incrementally updates Pod instances with new ones. Kubernetes gradually replaces old Pods with new ones, ensuring that the application remains available during the update.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)',
    difficulty: 'medium',
    tags: ['rolling-update', 'deployment', 'strategy'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Kubernetes Fundamentals
  // ============================================
  {
    id: 'kcna-033',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the purpose of a PersistentVolumeClaim (PVC)?',
    options: [
      'To request storage resources defined by a PersistentVolume',
      'To create storage on demand',
      'To configure network storage',
      'To backup data',
    ],
    correctAnswer: 0,
    explanation:
      'A PersistentVolumeClaim is a request for storage by a user. It allows pods to request specific size and access modes for persistent storage without knowing the underlying storage details.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)',
    difficulty: 'medium',
    tags: ['pvc', 'storage', 'persistence'],
  },
  {
    id: 'kcna-034',
    domain: 'Kubernetes Fundamentals',
    question: 'Which resource defines compute, memory, and storage limits for a namespace?',
    options: ['LimitRange', 'PodDisruptionBudget', 'ResourceQuota', 'HorizontalPodAutoscaler'],
    correctAnswer: 2,
    explanation:
      'ResourceQuota provides constraints that limit aggregate resource consumption per namespace, including CPU, memory, storage, and object counts.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/policy/resource-quotas/)',
    difficulty: 'medium',
    tags: ['resourcequota', 'limits', 'namespace'],
  },
  {
    id: 'kcna-035',
    domain: 'Kubernetes Fundamentals',
    question: 'What is a Job in Kubernetes?',
    options: [
      'A long-running service',
      'A workload that runs to completion',
      'A daemon running on all nodes',
      'A scheduled task only',
    ],
    correctAnswer: 1,
    explanation:
      'A Job creates one or more Pods and ensures that a specified number of them successfully terminate. Jobs are used for batch processing tasks that run to completion.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/job/)',
    difficulty: 'medium',
    tags: ['job', 'batch', 'workload'],
  },
  {
    id: 'kcna-036',
    domain: 'Kubernetes Fundamentals',
    question: 'What is a CronJob used for?',
    options: [
      'Running pods continuously',
      'Monitoring pod health',
      'Managing secrets rotation',
      'Running Jobs on a scheduled, recurring basis',
    ],
    correctAnswer: 3,
    explanation:
      'CronJobs create Jobs on a repeating schedule using cron format. They are useful for periodic tasks like backups, report generation, or cleanup operations.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)',
    difficulty: 'medium',
    tags: ['cronjob', 'scheduling', 'batch'],
  },
  {
    id: 'kcna-037',
    domain: 'Kubernetes Fundamentals',
    question: 'What does the kube-apiserver do?',
    options: [
      'Exposes the Kubernetes API and processes REST operations',
      'Stores all cluster data',
      'Schedules pods to nodes',
      'Runs containers on nodes',
    ],
    correctAnswer: 0,
    explanation:
      'The kube-apiserver is the front-end for the Kubernetes control plane. It exposes the Kubernetes API and is the only component that communicates with etcd.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/components/#kube-apiserver)',
    difficulty: 'medium',
    tags: ['apiserver', 'control-plane', 'api'],
  },
  {
    id: 'kcna-038',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the role of the kube-controller-manager?',
    options: [
      'To expose the API',
      'To schedule workloads',
      'To run controllers that regulate cluster state',
      'To provide network services',
    ],
    correctAnswer: 2,
    explanation:
      'The kube-controller-manager runs controller processes that regulate cluster state, including the node controller, replication controller, and endpoints controller.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager)',
    difficulty: 'medium',
    tags: ['controller-manager', 'controllers', 'control-plane'],
  },
  {
    id: 'kcna-039',
    domain: 'Kubernetes Fundamentals',
    question: 'What is a node affinity?',
    options: [
      'A way to spread pods across nodes',
      'Network connectivity between nodes',
      'Node resource allocation',
      'Rules that constrain which nodes a pod can be scheduled on based on labels',
    ],
    correctAnswer: 3,
    explanation:
      'Node affinity allows you to constrain which nodes your pod can be scheduled on based on node labels. It is more expressive than nodeSelector.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#affinity-and-anti-affinity)',
    difficulty: 'hard',
    tags: ['affinity', 'scheduling', 'constraints'],
  },
  {
    id: 'kcna-040',
    domain: 'Kubernetes Fundamentals',
    question: 'What are taints and tolerations used for?',
    options: [
      'Encrypting pod communications',
      'Managing network policies',
      'Controlling which pods can be scheduled on which nodes',
      'Defining resource limits',
    ],
    correctAnswer: 2,
    explanation:
      'Taints allow nodes to repel pods. Tolerations allow pods to schedule onto nodes with matching taints. Together they control pod placement on specific nodes.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)',
    difficulty: 'hard',
    tags: ['taints', 'tolerations', 'scheduling'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Container Orchestration
  // ============================================
  {
    id: 'kcna-041',
    domain: 'Container Orchestration',
    question: 'What is a sidecar container?',
    options: [
      'The main application container',
      'A container that runs on every node',
      'A helper container that runs alongside the main container in a pod',
      'A backup container',
    ],
    correctAnswer: 2,
    explanation:
      'A sidecar container is a secondary container that runs alongside the main container in a pod, providing supporting functionality like logging, monitoring, or proxying.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/)',
    difficulty: 'medium',
    tags: ['sidecar', 'patterns', 'pods'],
  },
  {
    id: 'kcna-042',
    domain: 'Container Orchestration',
    question: 'What is the difference between emptyDir and hostPath volumes?',
    options: [
      'emptyDir uses network storage; hostPath uses local storage',
      'hostPath is temporary; emptyDir is persistent',
      'They are identical',
      'emptyDir is temporary per-pod storage; hostPath mounts a directory from the host',
    ],
    correctAnswer: 3,
    explanation:
      'emptyDir creates temporary storage that is deleted when the pod is removed. hostPath mounts a file or directory from the host node filesystem into the pod.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)',
    difficulty: 'medium',
    tags: ['volumes', 'storage', 'emptydir', 'hostpath'],
  },
  {
    id: 'kcna-043',
    domain: 'Container Orchestration',
    question: 'What is the purpose of init containers?',
    options: [
      'To run setup tasks before app containers start',
      'To handle pod termination',
      'To monitor other containers',
      'To restart failed containers',
    ],
    correctAnswer: 0,
    explanation:
      'Init containers run before app containers start and run to completion. They are used for setup tasks like downloading dependencies, waiting for services, or configuration.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)',
    difficulty: 'medium',
    tags: ['init-containers', 'initialization', 'pods'],
  },
  {
    id: 'kcna-044',
    domain: 'Container Orchestration',
    question: 'What does a LoadBalancer Service type do?',
    options: [
      'Balances load between containers in a pod',
      'Distributes CPU load across nodes',
      'Provisions an external load balancer from the cloud provider',
      'Balances memory usage',
    ],
    correctAnswer: 2,
    explanation:
      'LoadBalancer exposes the Service externally using a cloud provider load balancer. It automatically provisions an external IP and routes traffic to the Service.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer)',
    difficulty: 'medium',
    tags: ['loadbalancer', 'service', 'cloud'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Cloud Native Architecture
  // ============================================
  {
    id: 'kcna-045',
    domain: 'Cloud Native Architecture',
    question: 'What is a service mesh?',
    options: [
      'A network of Kubernetes Services',
      'A type of container network',
      'A dedicated infrastructure layer for handling service-to-service communication',
      'A monitoring dashboard',
    ],
    correctAnswer: 2,
    explanation:
      'A service mesh is a dedicated infrastructure layer that handles service-to-service communication, providing features like traffic management, security, and observability.\n\nLearn more: [Documentación oficial](https://www.cncf.io/blog/2017/04/26/service-mesh-critical-component-cloud-native-stack/)',
    difficulty: 'medium',
    tags: ['service-mesh', 'networking', 'architecture'],
  },
  {
    id: 'kcna-046',
    domain: 'Cloud Native Architecture',
    question: 'What is Istio?',
    options: [
      'A popular service mesh implementation',
      'A container runtime',
      'A Kubernetes distribution',
      'A CI/CD tool',
    ],
    correctAnswer: 0,
    explanation:
      'Istio is an open-source service mesh that provides traffic management, security (mTLS), and observability for microservices running on Kubernetes.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/concepts/what-is-istio/)',
    difficulty: 'medium',
    tags: ['istio', 'service-mesh', 'cncf'],
  },
  {
    id: 'kcna-047',
    domain: 'Cloud Native Architecture',
    question: 'What is the Vertical Pod Autoscaler (VPA)?',
    options: [
      'Scales the number of pods',
      'Scales cluster nodes',
      'Manages pod placement',
      'Automatically adjusts CPU and memory requests/limits for containers',
    ],
    correctAnswer: 3,
    explanation:
      'VPA automatically adjusts the CPU and memory requests for containers based on usage. Unlike HPA which scales horizontally, VPA scales vertically by adjusting resources.\n\nLearn more: [Documentación oficial](https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler)',
    difficulty: 'medium',
    tags: ['vpa', 'autoscaling', 'resources'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Cloud Native Observability
  // ============================================
  {
    id: 'kcna-048',
    domain: 'Cloud Native Observability',
    question: 'What is Grafana commonly used for?',
    options: [
      'Container orchestration',
      'Log storage',
      'Visualization and dashboarding of metrics data',
      'Distributed tracing collection',
    ],
    correctAnswer: 2,
    explanation:
      'Grafana is an open-source analytics and visualization platform. It is commonly used to create dashboards for visualizing metrics from sources like Prometheus.\n\nLearn more: [Documentación oficial](https://grafana.com/docs/grafana/latest/introduction/)',
    difficulty: 'medium',
    tags: ['grafana', 'visualization', 'dashboards'],
  },
  {
    id: 'kcna-049',
    domain: 'Cloud Native Observability',
    question: 'What is Jaeger used for?',
    options: [
      'Metrics collection',
      'Log aggregation',
      'Container monitoring',
      'Distributed tracing',
    ],
    correctAnswer: 3,
    explanation:
      'Jaeger is an open-source distributed tracing system. It helps track requests as they flow through distributed systems, useful for debugging and performance optimization.\n\nLearn more: [Documentación oficial](https://www.jaegertracing.io/docs/)',
    difficulty: 'medium',
    tags: ['jaeger', 'tracing', 'distributed'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Cloud Native Application Delivery
  // ============================================
  {
    id: 'kcna-050',
    domain: 'Cloud Native Application Delivery',
    question: 'What is Argo CD?',
    options: [
      'A container registry',
      'A CI server',
      'A declarative GitOps continuous delivery tool for Kubernetes',
      'A testing framework',
    ],
    correctAnswer: 2,
    explanation:
      'Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. It automates deployment of applications to Kubernetes by using Git as the source of truth.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/)',
    difficulty: 'medium',
    tags: ['argocd', 'gitops', 'cd'],
  },
  {
    id: 'kcna-051',
    domain: 'Cloud Native Application Delivery',
    question: 'What is a canary deployment?',
    options: [
      'Gradually rolling out changes to a small subset of users before full rollout',
      'Deploying to all users at once',
      'Deploying only at night',
      'Using blue-green environments',
    ],
    correctAnswer: 0,
    explanation:
      'Canary deployment gradually rolls out changes to a small percentage of users first, then progressively increases the rollout while monitoring for issues.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#canary-deployment)',
    difficulty: 'medium',
    tags: ['canary', 'deployment-strategy', 'progressive'],
  },
  {
    id: 'kcna-052',
    domain: 'Cloud Native Application Delivery',
    question: 'What is blue-green deployment?',
    options: [
      'Deploying to two different cloud providers',
      'Using colored labels for environments',
      'Running two identical environments and switching traffic between them',
      'A testing methodology',
    ],
    correctAnswer: 2,
    explanation:
      'Blue-green deployment maintains two identical production environments. Traffic is switched from one (blue) to the other (green) after the new version is verified.\n\nLearn more: [Documentación oficial](https://martinfowler.com/bliki/BlueGreenDeployment.html)',
    difficulty: 'medium',
    tags: ['blue-green', 'deployment-strategy', 'zero-downtime'],
  },
  {
    id: 'kcna-053',
    domain: 'Cloud Native Application Delivery',
    question: 'What is Flux?',
    options: [
      'A container runtime',
      'A service mesh',
      'A GitOps operator for Kubernetes',
      'A monitoring tool',
    ],
    correctAnswer: 2,
    explanation:
      'Flux is a set of continuous and progressive delivery solutions for Kubernetes that keeps clusters in sync with Git repositories and automates updates.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/)',
    difficulty: 'medium',
    tags: ['flux', 'gitops', 'cncf'],
  },
  {
    id: 'kcna-054',
    domain: 'Kubernetes Fundamentals',
    question: 'What is RBAC in Kubernetes?',
    options: [
      'Resource Backup and Continuity',
      'Runtime Binary Access Control',
      'Role-Based Access Control',
      'Replica-Based Application Controller',
    ],
    correctAnswer: 2,
    explanation:
      'RBAC (Role-Based Access Control) is a method of regulating access to resources based on the roles of individual users. It uses Roles, ClusterRoles, RoleBindings, and ClusterRoleBindings.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)',
    difficulty: 'medium',
    tags: ['rbac', 'security', 'authorization'],
  },
  {
    id: 'kcna-055',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the purpose of annotations in Kubernetes?',
    options: [
      'To select resources for Services',
      'To define resource limits',
      'To attach arbitrary non-identifying metadata to objects',
      'To specify pod scheduling',
    ],
    correctAnswer: 2,
    explanation:
      'Annotations are key-value pairs used to attach arbitrary non-identifying metadata to objects. Tools and libraries can retrieve and use this metadata.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/)',
    difficulty: 'medium',
    tags: ['annotations', 'metadata', 'configuration'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Completing 60 questions
  // Coverage: LimitRange, Probes, OCI, Security, Cost Management
  // ============================================
  {
    id: 'kcna-056',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the purpose of a LimitRange in Kubernetes?',
    options: [
      'To set default resource requests and limits for containers in a namespace',
      'To limit the number of namespaces in a cluster',
      'To restrict network access between pods',
      'To limit the number of nodes in a cluster',
    ],
    correctAnswer: 0,
    explanation:
      'LimitRange sets default, minimum, and maximum resource constraints for containers and pods in a namespace. It ensures that containers have appropriate resource limits even when not explicitly specified.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/policy/limit-range/)',
    difficulty: 'medium',
    tags: ['limitrange', 'resources', 'namespace', 'policy'],
  },
  {
    id: 'kcna-057',
    domain: 'Kubernetes Fundamentals',
    question: 'What is the difference between a liveness probe and a readiness probe?',
    options: [
      'Liveness determines if container should restart; readiness determines if container can receive traffic',
      'They are identical in function',
      'Liveness is for stateful apps; readiness is for stateless apps',
      'Liveness runs once at startup; readiness runs continuously',
    ],
    correctAnswer: 0,
    explanation:
      'Liveness probes determine if a container should be restarted (is it alive?). Readiness probes determine if a container is ready to accept traffic. Both can run continuously throughout the container lifecycle.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)',
    difficulty: 'medium',
    tags: ['probes', 'liveness', 'readiness', 'health-checks'],
  },
  {
    id: 'kcna-058',
    domain: 'Container Orchestration',
    question: 'What does OCI (Open Container Initiative) define?',
    options: [
      'Industry standards for container image formats and runtime specifications',
      'A container orchestration platform',
      'A cloud provider service for containers',
      'A monitoring solution for containerized applications',
    ],
    correctAnswer: 0,
    explanation:
      'OCI defines open industry standards including the image-spec (container image format) and runtime-spec (how to run containers). This ensures container portability across different platforms and runtimes.\n\nLearn more: [Documentación oficial](https://opencontainers.org/)',
    difficulty: 'medium',
    tags: ['oci', 'standards', 'containers', 'image-spec', 'runtime-spec'],
  },
  {
    id: 'kcna-059',
    domain: 'Container Orchestration',
    question: 'What is a Pod Security Standard in Kubernetes?',
    options: [
      'A set of policies that define different isolation levels for Pods',
      'A container image scanning tool',
      'A network encryption protocol',
      'A type of ServiceAccount for secure access',
    ],
    correctAnswer: 0,
    explanation:
      'Pod Security Standards define three policies: Privileged (unrestricted), Baseline (minimally restrictive, prevents known privilege escalations), and Restricted (heavily restricted, security best practices). They replaced PodSecurityPolicy.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    difficulty: 'medium',
    tags: ['security', 'pod-security-standards', 'policies', 'best-practices'],
  },
  {
    id: 'kcna-060',
    domain: 'Cloud Native Observability',
    question: 'What is the primary purpose of cost management in cloud native observability?',
    options: [
      'To monitor and optimize resource usage and cloud spending',
      'To encrypt financial transaction data',
      'To manage user subscription billing',
      'To track application-generated revenue',
    ],
    correctAnswer: 0,
    explanation:
      'Cost management in cloud native environments involves monitoring resource utilization, identifying waste, right-sizing workloads, and optimizing cloud spending. Tools like Kubecost and cloud provider cost explorers help track and allocate Kubernetes costs.\n\nLearn more: [Documentación oficial](https://docs.aws.amazon.com/eks/latest/userguide/cost-monitoring-kubecost.html)',
    difficulty: 'medium',
    tags: ['cost-management', 'optimization', 'resources', 'finops'],
  },
];

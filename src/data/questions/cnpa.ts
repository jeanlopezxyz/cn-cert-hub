/**
 * CNPA - Cloud Native Platform Associate
 * Practice Questions (60 questions - matches exam format)
 *
 * Exam Domains:
 * - Cloud Native Architecture (20%) - 12 questions
 * - Container Fundamentals (20%) - 12 questions
 * - Kubernetes Basics (30%) - 18 questions
 * - Platform Engineering Principles (15%) - 9 questions
 * - GitOps and CI/CD (15%) - 9 questions
 *
 * Topics covered:
 * - Cloud native principles, microservices, 12-factor apps
 * - Containers, Docker, images, registries, runtimes
 * - Kubernetes core concepts, pods, deployments, services
 * - Platform engineering, IDP, developer experience
 * - GitOps, CI/CD pipelines, deployment strategies
 *
 * Answer Distribution: 15 questions each for correctAnswer 0, 1, 2, 3
 */

import type { Question } from '@/types/quiz';

export const CNPA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Cloud Native Architecture (20%) - 12 questions
  // ============================================
  {
    id: 'cnpa-001',
    domain: 'Cloud Native Architecture',
    question: 'What does CNCF stand for?',
    options: [
      'Cloud Native Computing Foundation',
      'Container Network Configuration Framework',
      'Cluster Node Control Framework',
      'Cloud Network Container Foundation',
    ],
    correctAnswer: 0,
    explanation:
      'CNCF stands for Cloud Native Computing Foundation, a vendor-neutral organization that hosts and promotes cloud native projects like Kubernetes, Prometheus, and Envoy.\n\nLearn more: [CNCF Official Website](https://www.cncf.io/)',
    difficulty: 'easy',
    tags: ['cncf', 'foundation', 'governance'],
  },
  {
    id: 'cnpa-002',
    domain: 'Cloud Native Architecture',
    question: 'What is the primary characteristic of cloud native applications?',
    options: [
      'They must run on a specific cloud provider',
      'They are designed to fully exploit cloud computing advantages',
      'They require physical servers for deployment',
      'They cannot use containers',
    ],
    correctAnswer: 1,
    explanation:
      'Cloud native applications are designed to take full advantage of cloud computing models, including scalability, resilience, and managed services. They are not tied to a specific cloud provider.\n\nLearn more: [CNCF Cloud Native Definition](https://github.com/cncf/toc/blob/main/DEFINITION.md)',
    difficulty: 'easy',
    tags: ['cloud-native', 'fundamentals', 'architecture'],
  },
  {
    id: 'cnpa-003',
    domain: 'Cloud Native Architecture',
    question: 'Which architectural pattern is most associated with cloud native applications?',
    options: [
      'Monolithic architecture',
      'Client-server architecture',
      'Microservices architecture',
      'Mainframe architecture',
    ],
    correctAnswer: 2,
    explanation:
      'Microservices architecture is a key pattern in cloud native applications, allowing independent scaling, deployment, and maintenance of application components.\n\nLearn more: [Microservices on Kubernetes](https://kubernetes.io/docs/concepts/overview/)',
    difficulty: 'easy',
    tags: ['microservices', 'architecture', 'patterns'],
  },
  {
    id: 'cnpa-004',
    domain: 'Cloud Native Architecture',
    question: 'What is a key benefit of microservices over monolithic architecture?',
    options: [
      'Simpler deployment process',
      'Lower network overhead',
      'Easier debugging',
      'Independent scaling and deployment of components',
    ],
    correctAnswer: 3,
    explanation:
      'Microservices allow each service to be scaled, deployed, and updated independently, providing greater flexibility and resilience compared to monolithic applications.\n\nLearn more: [Microservices Architecture](https://microservices.io/)',
    difficulty: 'easy',
    tags: ['microservices', 'scaling', 'deployment'],
  },
  {
    id: 'cnpa-005',
    domain: 'Cloud Native Architecture',
    question: 'What is the 12-factor app methodology?',
    options: [
      'A methodology for building scalable, maintainable SaaS applications',
      'A security framework with 12 security controls',
      'A container orchestration standard with 12 components',
      'A monitoring approach with 12 metrics',
    ],
    correctAnswer: 0,
    explanation:
      'The 12-factor app is a methodology for building software-as-a-service applications that are portable, resilient, and can scale. It covers aspects like codebase, dependencies, config, and processes.\n\nLearn more: [The Twelve-Factor App](https://12factor.net/)',
    difficulty: 'medium',
    tags: ['12-factor', 'methodology', 'best-practices'],
  },
  {
    id: 'cnpa-006',
    domain: 'Cloud Native Architecture',
    question:
      'According to the 12-factor methodology, where should application configuration be stored?',
    options: [
      'Hardcoded in the application code',
      'In a shared configuration file',
      'In the environment',
      'In a database',
    ],
    correctAnswer: 2,
    explanation:
      'The 12-factor methodology recommends storing configuration in environment variables. This allows the same codebase to be deployed across different environments without code changes.\n\nLearn more: [12-Factor Config](https://12factor.net/config)',
    difficulty: 'medium',
    tags: ['12-factor', 'configuration', 'environment'],
  },
  {
    id: 'cnpa-007',
    domain: 'Cloud Native Architecture',
    question: 'What is serverless computing?',
    options: [
      'Running applications without any servers',
      'Using only physical servers instead of virtual machines',
      'A development approach that does not require any backend',
      'A model where the cloud provider manages server infrastructure and scales automatically',
    ],
    correctAnswer: 3,
    explanation:
      'Serverless computing is an execution model where the cloud provider dynamically manages the allocation and provisioning of servers. Users write code without worrying about infrastructure management.\n\nLearn more: [CNCF Serverless](https://www.cncf.io/blog/2018/02/14/cncf-takes-first-step-towards-serverless-computing/)',
    difficulty: 'medium',
    tags: ['serverless', 'faas', 'cloud'],
  },
  {
    id: 'cnpa-008',
    domain: 'Cloud Native Architecture',
    question: 'What is horizontal scaling?',
    options: [
      'Adding more resources (CPU, memory) to an existing instance',
      'Adding more instances of an application to handle increased load',
      'Scaling across multiple geographic regions',
      'Increasing storage capacity',
    ],
    correctAnswer: 1,
    explanation:
      'Horizontal scaling (scaling out) involves adding more instances of an application to distribute the workload. This is preferred in cloud native architectures over vertical scaling.\n\nLearn more: [Kubernetes Scaling](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#scaling-a-deployment)',
    difficulty: 'easy',
    tags: ['scaling', 'horizontal', 'architecture'],
  },
  {
    id: 'cnpa-009',
    domain: 'Cloud Native Architecture',
    question: 'What is a service mesh?',
    options: [
      'A network of physical servers',
      'A type of container network interface',
      'A dedicated infrastructure layer for service-to-service communication',
      'A monitoring dashboard for services',
    ],
    correctAnswer: 2,
    explanation:
      'A service mesh is a dedicated infrastructure layer that handles service-to-service communication, providing features like traffic management, security (mTLS), and observability.\n\nLearn more: [Service Mesh Concept](https://www.cncf.io/blog/2017/04/26/service-mesh-critical-component-cloud-native-stack/)',
    difficulty: 'medium',
    tags: ['service-mesh', 'networking', 'architecture'],
  },
  {
    id: 'cnpa-010',
    domain: 'Cloud Native Architecture',
    question: 'What is the purpose of an API Gateway in cloud native architecture?',
    options: [
      'To provide a single entry point for client requests and handle cross-cutting concerns',
      'To store API documentation',
      'To generate API code automatically',
      'To replace all microservices with a single endpoint',
    ],
    correctAnswer: 0,
    explanation:
      'An API Gateway serves as a single entry point for clients, handling cross-cutting concerns like authentication, rate limiting, request routing, and load balancing across microservices.\n\nLearn more: [API Gateway Pattern](https://microservices.io/patterns/apigateway.html)',
    difficulty: 'medium',
    tags: ['api-gateway', 'routing', 'patterns'],
  },
  {
    id: 'cnpa-011',
    domain: 'Cloud Native Architecture',
    question: 'What characterizes a stateless application?',
    options: [
      'It stores all data in memory',
      'It does not store client session data between requests on the server',
      'It cannot connect to databases',
      'It only runs on a single server',
    ],
    correctAnswer: 1,
    explanation:
      'Stateless applications do not store client session information between requests on the server. Each request is independent, making the application easier to scale horizontally.\n\nLearn more: [Stateless Applications](https://12factor.net/processes)',
    difficulty: 'easy',
    tags: ['stateless', 'architecture', 'scaling'],
  },
  {
    id: 'cnpa-012',
    domain: 'Cloud Native Architecture',
    question: 'What is the primary benefit of loose coupling in microservices?',
    options: [
      'Faster network communication',
      'Lower memory usage',
      'Services can be developed, deployed, and scaled independently',
      'Simpler code structure',
    ],
    correctAnswer: 2,
    explanation:
      'Loose coupling means services have minimal dependencies on each other. This allows teams to develop, deploy, and scale services independently, improving agility and resilience.\n\nLearn more: [Microservices Principles](https://microservices.io/patterns/microservices.html)',
    difficulty: 'medium',
    tags: ['loose-coupling', 'microservices', 'design'],
  },

  // ============================================
  // DOMAIN: Container Fundamentals (20%) - 12 questions
  // ============================================
  {
    id: 'cnpa-013',
    domain: 'Container Fundamentals',
    question: 'What is a container in the context of cloud native computing?',
    options: [
      'A virtual machine running Linux',
      'A physical server in a data center',
      'A type of database storage',
      'A lightweight, standalone package that includes code and dependencies',
    ],
    correctAnswer: 3,
    explanation:
      'A container is a lightweight, standalone, executable package that includes everything needed to run an application: code, runtime, system tools, libraries, and settings.\n\nLearn more: [Docker Overview](https://docs.docker.com/get-started/overview/)',
    difficulty: 'easy',
    tags: ['containers', 'fundamentals', 'docker'],
  },
  {
    id: 'cnpa-014',
    domain: 'Container Fundamentals',
    question: 'What is Docker?',
    options: [
      'A container platform for building, shipping, and running applications',
      'A programming language',
      'A cloud provider',
      'A type of virtual machine',
    ],
    correctAnswer: 0,
    explanation:
      'Docker is a platform that uses OS-level virtualization to deliver software in packages called containers. It provides tools to build, ship, and run containerized applications.\n\nLearn more: [Docker Documentation](https://docs.docker.com/)',
    difficulty: 'easy',
    tags: ['docker', 'platform', 'containers'],
  },
  {
    id: 'cnpa-015',
    domain: 'Container Fundamentals',
    question: 'What is a Dockerfile?',
    options: [
      'A running container instance',
      'A text file containing instructions to build a container image',
      'A container orchestration tool',
      'A network configuration file',
    ],
    correctAnswer: 1,
    explanation:
      'A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble a container image. It defines the base image, dependencies, and application setup.\n\nLearn more: [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)',
    difficulty: 'easy',
    tags: ['dockerfile', 'images', 'build'],
  },
  {
    id: 'cnpa-016',
    domain: 'Container Fundamentals',
    question: 'What is the difference between a container image and a container?',
    options: [
      'They are the same thing',
      'A container is a template; an image is a running instance',
      'An image is a template; a container is a running instance of that image',
      'Images run on Windows; containers run on Linux',
    ],
    correctAnswer: 2,
    explanation:
      'A container image is a read-only template with instructions for creating a container. A container is a runnable instance of an image, with its own writable layer.\n\nLearn more: [Docker Images](https://docs.docker.com/get-started/overview/#docker-objects)',
    difficulty: 'easy',
    tags: ['images', 'containers', 'fundamentals'],
  },
  {
    id: 'cnpa-017',
    domain: 'Container Fundamentals',
    question: 'What is a container registry?',
    options: [
      'A log file for container events',
      'A container monitoring tool',
      'A configuration management database',
      'A storage and distribution system for container images',
    ],
    correctAnswer: 3,
    explanation:
      'A container registry is a repository for storing and distributing container images. Examples include Docker Hub, Amazon ECR, Google Container Registry, and Harbor.\n\nLearn more: [Docker Registry](https://docs.docker.com/registry/)',
    difficulty: 'easy',
    tags: ['registry', 'images', 'distribution'],
  },
  {
    id: 'cnpa-018',
    domain: 'Container Fundamentals',
    question: 'What does the OCI (Open Container Initiative) define?',
    options: [
      'Industry standards for container image formats and runtime specifications',
      'A specific container platform',
      'A cloud provider certification',
      'A container networking protocol',
    ],
    correctAnswer: 0,
    explanation:
      'OCI defines open industry standards including the image-spec (container image format) and runtime-spec (how to run containers). This ensures container portability across different platforms.\n\nLearn more: [Open Container Initiative](https://opencontainers.org/)',
    difficulty: 'medium',
    tags: ['oci', 'standards', 'portability'],
  },
  {
    id: 'cnpa-019',
    domain: 'Container Fundamentals',
    question: 'What is a container runtime?',
    options: [
      'The time it takes to start a container',
      'Software that runs and manages containers on a host',
      'A container image format',
      'A programming language for containers',
    ],
    correctAnswer: 1,
    explanation:
      'A container runtime is the software responsible for running containers. Examples include containerd, CRI-O, and runc. The runtime pulls images and manages the container lifecycle.\n\nLearn more: [Container Runtimes](https://kubernetes.io/docs/setup/production-environment/container-runtimes/)',
    difficulty: 'medium',
    tags: ['runtime', 'containerd', 'cri-o'],
  },
  {
    id: 'cnpa-020',
    domain: 'Container Fundamentals',
    question: 'What command is used to build a Docker image from a Dockerfile?',
    options: ['docker run', 'docker pull', 'docker build', 'docker create'],
    correctAnswer: 2,
    explanation:
      'The "docker build" command reads a Dockerfile and builds a container image from it. The -t flag is commonly used to tag the image with a name.\n\nLearn more: [Docker Build](https://docs.docker.com/engine/reference/commandline/build/)',
    difficulty: 'easy',
    tags: ['docker', 'build', 'commands'],
  },
  {
    id: 'cnpa-021',
    domain: 'Container Fundamentals',
    question: 'What is the purpose of container layers?',
    options: [
      'To provide network isolation',
      'To encrypt container data',
      'To limit CPU usage',
      'To enable efficient storage by sharing common layers between images',
    ],
    correctAnswer: 3,
    explanation:
      'Container images are built in layers. Each instruction in a Dockerfile creates a layer. Layers are cached and shared between images, reducing storage space and speeding up builds.\n\nLearn more: [Docker Storage](https://docs.docker.com/storage/storagedriver/)',
    difficulty: 'medium',
    tags: ['layers', 'storage', 'efficiency'],
  },
  {
    id: 'cnpa-022',
    domain: 'Container Fundamentals',
    question: 'How do containers achieve isolation from each other and the host system?',
    options: [
      'Using virtual machines internally',
      'By running on separate physical servers',
      'Through hardware virtualization',
      'Through Linux kernel features like namespaces and cgroups',
    ],
    correctAnswer: 3,
    explanation:
      'Containers use Linux kernel features: namespaces provide isolation (process, network, mount, etc.) and cgroups control resource allocation (CPU, memory, I/O).\n\nLearn more: [Container Security](https://docs.docker.com/engine/security/)',
    difficulty: 'medium',
    tags: ['isolation', 'namespaces', 'cgroups'],
  },
  {
    id: 'cnpa-023',
    domain: 'Container Fundamentals',
    question: 'What is Docker Hub?',
    options: [
      'The official public registry for Docker images',
      'A container orchestration platform',
      'A Docker development IDE',
      'A container monitoring service',
    ],
    correctAnswer: 0,
    explanation:
      'Docker Hub is the official public registry service for finding and sharing container images. It hosts millions of public images and supports private repositories.\n\nLearn more: [Docker Hub](https://hub.docker.com/)',
    difficulty: 'easy',
    tags: ['docker-hub', 'registry', 'public'],
  },
  {
    id: 'cnpa-024',
    domain: 'Container Fundamentals',
    question: 'What is the purpose of the EXPOSE instruction in a Dockerfile?',
    options: [
      'To publish ports to the host automatically',
      'To block incoming traffic on specified ports',
      'To configure SSL certificates',
      'To document which ports the container listens on',
    ],
    correctAnswer: 3,
    explanation:
      'EXPOSE is a documentation mechanism that indicates which ports the container listens on. It does not actually publish the port; that requires the -p flag when running the container.\n\nLearn more: [Dockerfile EXPOSE](https://docs.docker.com/engine/reference/builder/#expose)',
    difficulty: 'medium',
    tags: ['dockerfile', 'expose', 'ports'],
  },

  // ============================================
  // DOMAIN: Kubernetes Basics (30%) - 18 questions
  // ============================================
  {
    id: 'cnpa-025',
    domain: 'Kubernetes Basics',
    question: 'What is Kubernetes?',
    options: [
      'A container image format',
      'An open-source container orchestration platform',
      'A cloud provider service',
      'A programming language',
    ],
    correctAnswer: 1,
    explanation:
      'Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.\n\nLearn more: [Kubernetes Overview](https://kubernetes.io/docs/concepts/overview/)',
    difficulty: 'easy',
    tags: ['kubernetes', 'orchestration', 'fundamentals'],
  },
  {
    id: 'cnpa-026',
    domain: 'Kubernetes Basics',
    question: 'What is a Pod in Kubernetes?',
    options: [
      'A virtual machine',
      'A network policy',
      'The smallest deployable unit containing one or more containers',
      'A storage volume',
    ],
    correctAnswer: 2,
    explanation:
      'A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process and can contain one or more containers that share storage and network.\n\nLearn more: [Kubernetes Pods](https://kubernetes.io/docs/concepts/workloads/pods/)',
    difficulty: 'easy',
    tags: ['pods', 'workloads', 'basics'],
  },
  {
    id: 'cnpa-027',
    domain: 'Kubernetes Basics',
    question: 'What is kubectl?',
    options: [
      'A Kubernetes dashboard',
      'A container runtime',
      'A monitoring tool',
      'The command-line tool for interacting with Kubernetes clusters',
    ],
    correctAnswer: 3,
    explanation:
      'kubectl is the command-line interface (CLI) tool that allows users to run commands against Kubernetes clusters to deploy applications, inspect resources, and view logs.\n\nLearn more: [kubectl Overview](https://kubernetes.io/docs/reference/kubectl/)',
    difficulty: 'easy',
    tags: ['kubectl', 'cli', 'tools'],
  },
  {
    id: 'cnpa-028',
    domain: 'Kubernetes Basics',
    question: 'What is a Kubernetes Deployment?',
    options: [
      'A controller that manages ReplicaSets and provides declarative updates for Pods',
      'A way to deploy the Kubernetes cluster itself',
      'A type of storage volume',
      'A network configuration',
    ],
    correctAnswer: 0,
    explanation:
      'A Deployment provides declarative updates for Pods and ReplicaSets. It manages the desired state of your application, handling rollouts and rollbacks.\n\nLearn more: [Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)',
    difficulty: 'easy',
    tags: ['deployment', 'controllers', 'pods'],
  },
  {
    id: 'cnpa-029',
    domain: 'Kubernetes Basics',
    question: 'What is a Kubernetes Service?',
    options: [
      'A background process running on nodes',
      'An abstraction that exposes a set of Pods as a network service',
      'A storage class',
      'A type of deployment strategy',
    ],
    correctAnswer: 1,
    explanation:
      'A Service is an abstract way to expose an application running on a set of Pods as a network service. It provides a stable IP address and DNS name for accessing Pods.\n\nLearn more: [Services](https://kubernetes.io/docs/concepts/services-networking/service/)',
    difficulty: 'easy',
    tags: ['service', 'networking', 'exposure'],
  },
  {
    id: 'cnpa-030',
    domain: 'Kubernetes Basics',
    question: 'What is a Namespace in Kubernetes?',
    options: [
      'A naming convention for Pods',
      'A type of storage',
      'A virtual cluster within a physical cluster for resource isolation',
      'A networking protocol',
    ],
    correctAnswer: 2,
    explanation:
      'Namespaces provide a mechanism for isolating groups of resources within a single cluster. They are intended for environments with many users spread across multiple teams or projects.\n\nLearn more: [Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)',
    difficulty: 'easy',
    tags: ['namespace', 'isolation', 'organization'],
  },
  {
    id: 'cnpa-031',
    domain: 'Kubernetes Basics',
    question: 'What is a ConfigMap used for in Kubernetes?',
    options: [
      'To store container images',
      'To store non-confidential configuration data in key-value pairs',
      'To define network policies',
      'To store sensitive passwords',
    ],
    correctAnswer: 1,
    explanation:
      'ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable. They store non-confidential data in key-value pairs.\n\nLearn more: [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/)',
    difficulty: 'easy',
    tags: ['configmap', 'configuration', 'data'],
  },
  {
    id: 'cnpa-032',
    domain: 'Kubernetes Basics',
    question: 'What is a Secret in Kubernetes?',
    options: [
      'An object used to store sensitive information like passwords and tokens',
      'A hidden namespace',
      'An encrypted network connection',
      'A private container registry',
    ],
    correctAnswer: 0,
    explanation:
      'Secrets are used to store and manage sensitive information such as passwords, OAuth tokens, and SSH keys. They are base64 encoded and can be encrypted at rest.\n\nLearn more: [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)',
    difficulty: 'easy',
    tags: ['secrets', 'security', 'sensitive-data'],
  },
  {
    id: 'cnpa-033',
    domain: 'Kubernetes Basics',
    question: 'What is the default Service type in Kubernetes?',
    options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'ExternalName'],
    correctAnswer: 0,
    explanation:
      'ClusterIP is the default Service type. It exposes the Service on an internal IP in the cluster, making it only reachable from within the cluster.\n\nLearn more: [Service Types](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types)',
    difficulty: 'medium',
    tags: ['service', 'clusterip', 'networking'],
  },
  {
    id: 'cnpa-034',
    domain: 'Kubernetes Basics',
    question: 'What does a ReplicaSet ensure?',
    options: [
      'That Pods have unique names',
      'That a specified number of pod replicas are running at any given time',
      'That Pods are distributed across multiple clusters',
      'That Pods are automatically updated',
    ],
    correctAnswer: 1,
    explanation:
      'A ReplicaSet maintains a stable set of replica Pods running at any given time. It guarantees the availability of a specified number of identical Pods.\n\nLearn more: [ReplicaSets](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)',
    difficulty: 'easy',
    tags: ['replicaset', 'replicas', 'availability'],
  },
  {
    id: 'cnpa-035',
    domain: 'Kubernetes Basics',
    question: 'What is the purpose of labels in Kubernetes?',
    options: [
      'To encrypt Pod data',
      'To store configuration',
      'To define resource limits',
      'To identify and select groups of objects using key-value pairs',
    ],
    correctAnswer: 3,
    explanation:
      'Labels are key-value pairs attached to objects like Pods. They are used to organize and select subsets of objects, enabling loose coupling between components.\n\nLearn more: [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/)',
    difficulty: 'easy',
    tags: ['labels', 'selectors', 'organization'],
  },
  {
    id: 'cnpa-036',
    domain: 'Kubernetes Basics',
    question: 'What component stores all cluster data in Kubernetes?',
    options: ['kube-apiserver', 'kube-scheduler', 'kube-controller-manager', 'etcd'],
    correctAnswer: 3,
    explanation:
      'etcd is a consistent and highly-available key-value store used as the backing store for all cluster data in Kubernetes, including configuration and state.\n\nLearn more: [etcd](https://kubernetes.io/docs/concepts/overview/components/#etcd)',
    difficulty: 'medium',
    tags: ['etcd', 'storage', 'control-plane'],
  },
  {
    id: 'cnpa-037',
    domain: 'Kubernetes Basics',
    question: 'What is the role of the kubelet?',
    options: [
      'To schedule Pods to nodes',
      'To provide the cluster API',
      'To ensure containers are running in a Pod on each node',
      'To store cluster configuration',
    ],
    correctAnswer: 2,
    explanation:
      'The kubelet is an agent that runs on each node in the cluster. It ensures that containers described in PodSpecs are running and healthy.\n\nLearn more: [kubelet](https://kubernetes.io/docs/concepts/overview/components/#kubelet)',
    difficulty: 'medium',
    tags: ['kubelet', 'node', 'agent'],
  },
  {
    id: 'cnpa-038',
    domain: 'Kubernetes Basics',
    question: 'What is an Ingress in Kubernetes?',
    options: [
      'An API object that manages external access to services, typically HTTP',
      'A type of internal storage',
      'A container runtime interface',
      'A Pod scheduling mechanism',
    ],
    correctAnswer: 0,
    explanation:
      'Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource.\n\nLearn more: [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)',
    difficulty: 'medium',
    tags: ['ingress', 'http', 'routing'],
  },
  {
    id: 'cnpa-039',
    domain: 'Kubernetes Basics',
    question: 'What is a PersistentVolume (PV)?',
    options: [
      'Temporary storage that is deleted when a Pod terminates',
      'A piece of storage in the cluster provisioned by an administrator or dynamically',
      'A type of ConfigMap',
      'A network storage protocol',
    ],
    correctAnswer: 1,
    explanation:
      'A PersistentVolume is a piece of storage in the cluster that has been provisioned by an administrator or dynamically. It has a lifecycle independent of any individual Pod.\n\nLearn more: [Persistent Volumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)',
    difficulty: 'medium',
    tags: ['storage', 'pv', 'persistence'],
  },
  {
    id: 'cnpa-040',
    domain: 'Kubernetes Basics',
    question: 'What is the purpose of a NodePort Service?',
    options: [
      'To expose a Service on each node IP at a static port',
      'To load balance between nodes',
      'To restrict network access to specific nodes',
      'To monitor node health',
    ],
    correctAnswer: 0,
    explanation:
      'NodePort exposes the Service on each node IP at a static port. A ClusterIP Service is automatically created, and the NodePort Service routes to it.\n\nLearn more: [NodePort Service](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)',
    difficulty: 'medium',
    tags: ['nodeport', 'service', 'networking'],
  },
  {
    id: 'cnpa-041',
    domain: 'Kubernetes Basics',
    question: 'What command displays the status of Pods in the default namespace?',
    options: [
      'kubectl describe pods',
      'kubectl get pods',
      'kubectl list pods',
      'kubectl show pods',
    ],
    correctAnswer: 1,
    explanation:
      'The "kubectl get pods" command lists all Pods in the current namespace. Add -A or --all-namespaces to see Pods across all namespaces.\n\nLearn more: [kubectl get](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)',
    difficulty: 'easy',
    tags: ['kubectl', 'pods', 'commands'],
  },
  {
    id: 'cnpa-042',
    domain: 'Kubernetes Basics',
    question: 'What is the purpose of resource requests and limits in Kubernetes?',
    options: [
      'To authenticate users',
      'To configure network bandwidth',
      'To set container image versions',
      'To define minimum (requests) and maximum (limits) resources for containers',
    ],
    correctAnswer: 3,
    explanation:
      'Resource requests define the minimum resources a container needs (used for scheduling). Limits define the maximum resources a container can use (enforced at runtime).\n\nLearn more: [Resource Management](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)',
    difficulty: 'medium',
    tags: ['resources', 'requests', 'limits'],
  },

  // ============================================
  // DOMAIN: Platform Engineering Principles (15%) - 9 questions
  // ============================================
  {
    id: 'cnpa-043',
    domain: 'Platform Engineering Principles',
    question: 'What is Platform Engineering?',
    options: [
      'Building physical data center infrastructure',
      'The discipline of designing and building internal developer platforms',
      'Creating mobile applications',
      'Managing network hardware',
    ],
    correctAnswer: 1,
    explanation:
      'Platform Engineering is the discipline of designing and building toolchains and workflows that enable self-service capabilities for software engineering organizations in the cloud native era.\n\nLearn more: [Platform Engineering](https://platformengineering.org/)',
    difficulty: 'easy',
    tags: ['platform-engineering', 'idp', 'developer-experience'],
  },
  {
    id: 'cnpa-044',
    domain: 'Platform Engineering Principles',
    question: 'What is an Internal Developer Platform (IDP)?',
    options: [
      'A public cloud service',
      'An internal social network for developers',
      'A set of tools and services enabling developers to self-serve infrastructure and deployments',
      'A code review tool',
    ],
    correctAnswer: 2,
    explanation:
      'An Internal Developer Platform (IDP) is a layer built on top of existing technologies to provide developers with self-service access to tools, environments, and infrastructure.\n\nLearn more: [Internal Developer Platforms](https://internaldeveloperplatform.org/)',
    difficulty: 'medium',
    tags: ['idp', 'self-service', 'platform'],
  },
  {
    id: 'cnpa-045',
    domain: 'Platform Engineering Principles',
    question: 'What is the main goal of golden paths in platform engineering?',
    options: [
      'To restrict developers to a single technology',
      'To track developer performance',
      'To encrypt application data',
      'To provide well-supported, paved roads for common development tasks',
    ],
    correctAnswer: 3,
    explanation:
      'Golden paths (or paved roads) are well-documented, supported ways to accomplish common tasks. They reduce cognitive load while still allowing flexibility when needed.\n\nLearn more: [Golden Paths](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/)',
    difficulty: 'medium',
    tags: ['golden-paths', 'best-practices', 'standards'],
  },
  {
    id: 'cnpa-046',
    domain: 'Platform Engineering Principles',
    question: 'What does "shift left" mean in platform engineering?',
    options: [
      'Moving servers to the left side of the data center',
      'Changing the text direction in code',
      'Rolling back deployments',
      'Moving testing, security, and operations earlier in the development lifecycle',
    ],
    correctAnswer: 3,
    explanation:
      'Shift left refers to moving activities like testing, security checks, and quality assurance earlier in the software development lifecycle, catching issues sooner when they are cheaper to fix.\n\nLearn more: [Shift Left Testing](https://www.ibm.com/topics/shift-left-testing)',
    difficulty: 'medium',
    tags: ['shift-left', 'security', 'testing'],
  },
  {
    id: 'cnpa-047',
    domain: 'Platform Engineering Principles',
    question: 'What is infrastructure as code (IaC)?',
    options: [
      'Writing code that runs on servers',
      'Managing and provisioning infrastructure through machine-readable configuration files',
      'Using code to communicate between teams',
      'A programming language for networks',
    ],
    correctAnswer: 1,
    explanation:
      'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than manual processes or interactive tools.\n\nLearn more: [Infrastructure as Code](https://www.terraform.io/use-cases/infrastructure-as-code)',
    difficulty: 'easy',
    tags: ['iac', 'automation', 'infrastructure'],
  },
  {
    id: 'cnpa-048',
    domain: 'Platform Engineering Principles',
    question: 'What is the primary benefit of self-service platforms for developers?',
    options: [
      'Reduced need for documentation',
      'Lower cloud costs',
      'Faster iteration by reducing dependencies on operations teams',
      'Better code quality',
    ],
    correctAnswer: 2,
    explanation:
      'Self-service platforms allow developers to provision resources, deploy applications, and manage environments without waiting for operations teams, significantly speeding up development cycles.\n\nLearn more: [Developer Self-Service](https://www.cncf.io/blog/2025/11/19/what-is-platform-engineering/)',
    difficulty: 'easy',
    tags: ['self-service', 'developer-experience', 'velocity'],
  },
  {
    id: 'cnpa-049',
    domain: 'Platform Engineering Principles',
    question: 'What is Backstage?',
    options: [
      'A concert venue booking platform',
      'A Kubernetes distribution',
      'An open-source framework for building developer portals',
      'A monitoring tool',
    ],
    correctAnswer: 2,
    explanation:
      'Backstage is an open-source platform for building developer portals, created by Spotify. It provides a central catalog of services, documentation, and tools for developers.\n\nLearn more: [Backstage.io](https://backstage.io/)',
    difficulty: 'medium',
    tags: ['backstage', 'developer-portal', 'cncf'],
  },
  {
    id: 'cnpa-050',
    domain: 'Platform Engineering Principles',
    question: 'What is the purpose of a service catalog in platform engineering?',
    options: [
      'To provide a centralized inventory of services, APIs, and their owners',
      'To list all commercial software licenses',
      'To track server hardware',
      'To store application logs',
    ],
    correctAnswer: 0,
    explanation:
      'A service catalog provides a centralized, searchable inventory of all services, APIs, and components in an organization, including ownership, documentation, and dependencies.\n\nLearn more: [Service Catalogs](https://backstage.io/docs/features/software-catalog/)',
    difficulty: 'medium',
    tags: ['service-catalog', 'discovery', 'organization'],
  },
  {
    id: 'cnpa-051',
    domain: 'Platform Engineering Principles',
    question: 'What principle emphasizes treating servers as replaceable rather than unique?',
    options: ['Server affinity', 'Pets vs cattle', 'Server clustering', 'Vertical scaling'],
    correctAnswer: 1,
    explanation:
      'The "pets vs cattle" principle encourages treating servers as replaceable cattle (numbered, identical, disposable) rather than pets (named, unique, manually maintained), enabling better scalability and resilience.\n\nLearn more: [Pets vs Cattle](https://cloudscaling.com/blog/cloud-computing/the-history-of-pets-vs-cattle/)',
    difficulty: 'medium',
    tags: ['pets-cattle', 'immutable', 'principles'],
  },

  // ============================================
  // DOMAIN: GitOps and CI/CD (15%) - 9 questions
  // ============================================
  {
    id: 'cnpa-052',
    domain: 'GitOps and CI/CD',
    question: 'What is GitOps?',
    options: [
      'A Git hosting service',
      'A Git branching strategy',
      'A code review process',
      'A methodology where Git is the single source of truth for declarative infrastructure and applications',
    ],
    correctAnswer: 3,
    explanation:
      'GitOps is an operational framework that uses Git as the single source of truth for declarative infrastructure and applications, with automated synchronization to the target environment.\n\nLearn more: [OpenGitOps](https://opengitops.dev/)',
    difficulty: 'easy',
    tags: ['gitops', 'git', 'declarative'],
  },
  {
    id: 'cnpa-053',
    domain: 'GitOps and CI/CD',
    question: 'What does CI stand for in CI/CD?',
    options: [
      'Container Integration',
      'Continuous Integration',
      'Cloud Infrastructure',
      'Code Inspection',
    ],
    correctAnswer: 1,
    explanation:
      'CI stands for Continuous Integration, the practice of frequently merging code changes into a shared repository, with automated builds and tests to detect problems early.\n\nLearn more: [Continuous Integration](https://www.atlassian.com/continuous-delivery/continuous-integration)',
    difficulty: 'easy',
    tags: ['ci', 'integration', 'automation'],
  },
  {
    id: 'cnpa-054',
    domain: 'GitOps and CI/CD',
    question: 'What does CD typically stand for in CI/CD pipelines?',
    options: [
      'Code Deployment only',
      'Container Distribution',
      'Continuous Delivery or Continuous Deployment',
      'Cloud Distribution',
    ],
    correctAnswer: 2,
    explanation:
      'CD can mean Continuous Delivery (automated release to staging, manual approval to production) or Continuous Deployment (fully automated deployment to production after passing tests).\n\nLearn more: [Continuous Delivery vs Deployment](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)',
    difficulty: 'easy',
    tags: ['cd', 'delivery', 'deployment'],
  },
  {
    id: 'cnpa-055',
    domain: 'GitOps and CI/CD',
    question: 'What is Argo CD?',
    options: [
      'A declarative GitOps continuous delivery tool for Kubernetes',
      'A container registry',
      'A CI server',
      'A testing framework',
    ],
    correctAnswer: 0,
    explanation:
      'Argo CD is a declarative, GitOps continuous delivery tool for Kubernetes. It automates deployment of applications to Kubernetes by using Git repositories as the source of truth.\n\nLearn more: [Argo CD](https://argo-cd.readthedocs.io/en/stable/)',
    difficulty: 'medium',
    tags: ['argocd', 'gitops', 'cd'],
  },
  {
    id: 'cnpa-056',
    domain: 'GitOps and CI/CD',
    question: 'What is a rolling deployment?',
    options: [
      'Deploying to all servers at once',
      'Deploying only during maintenance windows',
      'Rolling back to a previous version',
      'Incrementally updating instances with new versions while maintaining availability',
    ],
    correctAnswer: 3,
    explanation:
      'A rolling deployment gradually replaces instances of the old version with the new version. This ensures zero downtime as there are always some instances available to serve traffic.\n\nLearn more: [Rolling Updates](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/)',
    difficulty: 'easy',
    tags: ['rolling-update', 'deployment', 'strategy'],
  },
  {
    id: 'cnpa-057',
    domain: 'GitOps and CI/CD',
    question: 'What is blue-green deployment?',
    options: [
      'Deploying to two different cloud providers',
      'Color-coding deployment environments',
      'Running two identical environments and switching traffic between them',
      'A testing methodology using colors',
    ],
    correctAnswer: 2,
    explanation:
      'Blue-green deployment maintains two identical production environments. Traffic is switched from one (blue) to the other (green) after the new version is verified, enabling instant rollback.\n\nLearn more: [Blue-Green Deployments](https://martinfowler.com/bliki/BlueGreenDeployment.html)',
    difficulty: 'medium',
    tags: ['blue-green', 'deployment', 'zero-downtime'],
  },
  {
    id: 'cnpa-058',
    domain: 'GitOps and CI/CD',
    question: 'What is a canary deployment?',
    options: [
      'Gradually rolling out changes to a small subset of users before full rollout',
      'Deploying to a coal mine',
      'Deploying only on weekends',
      'Using yellow-colored containers',
    ],
    correctAnswer: 0,
    explanation:
      'Canary deployment gradually rolls out changes to a small percentage of users first, monitoring for issues before progressively increasing the rollout to the full user base.\n\nLearn more: [Canary Deployments](https://martinfowler.com/bliki/CanaryRelease.html)',
    difficulty: 'medium',
    tags: ['canary', 'deployment', 'progressive'],
  },
  {
    id: 'cnpa-059',
    domain: 'GitOps and CI/CD',
    question: 'What is Flux in the context of GitOps?',
    options: [
      'A service mesh',
      'A container runtime',
      'A set of GitOps operators for Kubernetes',
      'A monitoring tool',
    ],
    correctAnswer: 2,
    explanation:
      'Flux is a set of continuous and progressive delivery solutions for Kubernetes. It keeps clusters in sync with Git repositories and automates updates when new code is available.\n\nLearn more: [Flux CD](https://fluxcd.io/)',
    difficulty: 'medium',
    tags: ['flux', 'gitops', 'cncf'],
  },
  {
    id: 'cnpa-060',
    domain: 'GitOps and CI/CD',
    question: 'What is the primary benefit of using GitOps for deployments?',
    options: [
      'Version control, audit trail, and easy rollbacks through Git history',
      'Faster code compilation',
      'Lower storage costs',
      'Better code syntax highlighting',
    ],
    correctAnswer: 0,
    explanation:
      'GitOps provides version control for infrastructure and applications, a complete audit trail of changes, and easy rollbacks by reverting Git commits. It ensures the deployed state matches the Git repository.\n\nLearn more: [GitOps Principles](https://opengitops.dev/)',
    difficulty: 'easy',
    tags: ['gitops', 'benefits', 'version-control'],
  },
];

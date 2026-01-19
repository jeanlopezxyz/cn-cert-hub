/**
 * CKAD - Certified Kubernetes Application Developer
 * Practice Questions (60 questions - matches exam format)
 *
 * Exam Domains:
 * - Application Design and Build (20%) - 12 questions
 * - Application Deployment (20%) - 12 questions
 * - Application Observability and Maintenance (15%) - 9 questions
 * - Application Environment, Configuration and Security (25%) - 15 questions
 * - Services and Networking (20%) - 12 questions
 *
 * Topics covered:
 * - Pods, Deployments, Jobs, CronJobs, Multi-container Pods
 * - Rolling Updates, Rollbacks, Deployment Strategies, Helm
 * - Probes, Logging, Debugging, Resource Usage
 * - ConfigMaps, Secrets, SecurityContext, ServiceAccounts, RBAC
 * - Services, Ingress, Network Policies
 *
 * Answer Distribution: 15 each for correctAnswer 0, 1, 2, 3
 */

import type { Question } from '@/types/quiz';

export const CKAD_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Application Design and Build (20%) - 12 questions
  // ============================================
  {
    id: 'ckad-001',
    domain: 'Application Design and Build',
    question:
      'Which Kubernetes resource is the smallest deployable unit that can contain one or more containers?',
    options: ['Pod', 'Container', 'Deployment', 'ReplicaSet'],
    correctAnswer: 0,
    explanation:
      'A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running process and can contain one or more containers that share storage and network resources.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/pods/)',
    difficulty: 'easy',
    tags: ['pods', 'basics', 'workloads'],
  },
  {
    id: 'ckad-002',
    domain: 'Application Design and Build',
    question: 'What is the primary purpose of a multi-container Pod pattern like the sidecar?',
    options: [
      'To provide helper functionality that enhances or extends the main container',
      'To run backup copies of the main application',
      'To replace failed containers automatically',
      'To load balance traffic between containers',
    ],
    correctAnswer: 0,
    explanation:
      'The sidecar pattern runs a helper container alongside the main application container. Common use cases include log shipping, proxies, and synchronization services that extend the main container functionality.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/)',
    difficulty: 'medium',
    tags: ['multi-container', 'sidecar', 'patterns'],
  },
  {
    id: 'ckad-003',
    domain: 'Application Design and Build',
    question: 'Which container runs and completes before the main application containers start?',
    options: ['Sidecar container', 'Ambassador container', 'Init container', 'Ephemeral container'],
    correctAnswer: 2,
    explanation:
      'Init containers run before app containers start and must complete successfully. They are used for setup tasks like downloading dependencies, waiting for services, or running initialization scripts.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/)',
    difficulty: 'medium',
    tags: ['init-containers', 'pods', 'initialization'],
  },
  {
    id: 'ckad-004',
    domain: 'Application Design and Build',
    question: 'What is the purpose of a Kubernetes Job?',
    options: [
      'To run long-running services',
      'To run pods on every node',
      'To schedule recurring tasks',
      'To run a task to completion one or more times',
    ],
    correctAnswer: 3,
    explanation:
      'A Job creates one or more Pods and ensures that a specified number of them successfully terminate. Jobs are ideal for batch processing, data migration, or any task that needs to run to completion.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/job/)',
    difficulty: 'medium',
    tags: ['job', 'batch', 'workloads'],
  },
  {
    id: 'ckad-005',
    domain: 'Application Design and Build',
    question: 'How do you create a CronJob that runs every day at midnight?',
    options: [
      'schedule: "0 0 * * *"',
      'schedule: "* * * * *"',
      'schedule: "0 * * * *"',
      'schedule: "* 0 0 * *"',
    ],
    correctAnswer: 0,
    explanation:
      'The cron expression "0 0 * * *" means at minute 0, hour 0 (midnight), every day of the month, every month, every day of the week. CronJobs use standard cron format: minute hour day-of-month month day-of-week.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)',
    difficulty: 'medium',
    tags: ['cronjob', 'scheduling', 'batch'],
  },
  {
    id: 'ckad-006',
    domain: 'Application Design and Build',
    question: 'What does the restartPolicy field in a Pod spec control?',
    options: [
      'How often the kubelet checks container health',
      'When and if containers should be restarted after they exit',
      'The order in which containers restart',
      'Whether the Pod should be rescheduled to a different node',
    ],
    correctAnswer: 1,
    explanation:
      'The restartPolicy field determines how containers are restarted: Always (default for Deployments), OnFailure (for Jobs), or Never. It applies to all containers in the Pod.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy)',
    difficulty: 'medium',
    tags: ['pods', 'restart-policy', 'lifecycle'],
  },
  {
    id: 'ckad-007',
    domain: 'Application Design and Build',
    question:
      'Which field in a Job spec ensures that a Job runs a specific number of successful completions?',
    options: ['replicas', 'parallelism', 'completions', 'backoffLimit'],
    correctAnswer: 2,
    explanation:
      'The completions field specifies the desired number of successfully finished pods. The Job controller creates pods until the specified number completes successfully.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/job/#parallel-jobs)',
    difficulty: 'medium',
    tags: ['job', 'completions', 'batch'],
  },
  {
    id: 'ckad-008',
    domain: 'Application Design and Build',
    question: 'What is the ambassador container pattern used for?',
    options: [
      'Running security scans on the main container',
      'Monitoring the main container health',
      'Storing logs from the main container',
      'Proxying network connections to/from the main container',
    ],
    correctAnswer: 3,
    explanation:
      'The ambassador pattern uses a container to proxy network connections for the main container. It simplifies connecting to databases, caches, or other services by handling connection details and protocols.\n\nLearn more: [Official Documentation](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/)',
    difficulty: 'hard',
    tags: ['ambassador', 'multi-container', 'patterns'],
  },
  {
    id: 'ckad-009',
    domain: 'Application Design and Build',
    question: 'What happens when a CronJob misses its scheduled time by more than 100 seconds?',
    options: [
      'It runs immediately when possible',
      'It is skipped and the next schedule is used',
      'The behavior depends on the concurrencyPolicy',
      'The behavior depends on the startingDeadlineSeconds field',
    ],
    correctAnswer: 3,
    explanation:
      'The startingDeadlineSeconds field defines how late a job can start. If missed by more than this deadline (default 100 seconds), the job is counted as failed. This prevents creating multiple jobs when the controller was down.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/#cron-job-limitations)',
    difficulty: 'hard',
    tags: ['cronjob', 'scheduling', 'deadline'],
  },
  {
    id: 'ckad-010',
    domain: 'Application Design and Build',
    question: 'How can you share data between containers in the same Pod?',
    options: [
      'Using an emptyDir volume',
      'Using a PersistentVolume only',
      'Containers cannot share data in the same Pod',
      'Using environment variables only',
    ],
    correctAnswer: 0,
    explanation:
      'An emptyDir volume is created when a Pod is assigned to a node and exists as long as the Pod runs. All containers in the Pod can read and write to the same emptyDir volume, making it ideal for sharing data.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)',
    difficulty: 'medium',
    tags: ['volumes', 'emptydir', 'multi-container'],
  },
  {
    id: 'ckad-011',
    domain: 'Application Design and Build',
    question: 'What is the purpose of the parallelism field in a Job specification?',
    options: [
      'To specify how many pods should run at the same time',
      'To set the total number of completions needed',
      'To define the number of retries on failure',
      'To configure the order of pod execution',
    ],
    correctAnswer: 0,
    explanation:
      'The parallelism field specifies the maximum number of pods that can run concurrently for a Job. Combined with completions, it controls how work is distributed across multiple pods.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/job/#controlling-parallelism)',
    difficulty: 'medium',
    tags: ['job', 'parallelism', 'batch'],
  },
  {
    id: 'ckad-012',
    domain: 'Application Design and Build',
    question: 'Which kubectl command creates a Pod from an image without writing a YAML file?',
    options: [
      'kubectl create pod nginx --image=nginx',
      'kubectl run nginx --image=nginx',
      'kubectl deploy nginx --image=nginx',
      'kubectl start nginx --image=nginx',
    ],
    correctAnswer: 1,
    explanation:
      'The kubectl run command creates a Pod (or Deployment with older versions) from the specified container image. It is useful for quick testing and generating YAML templates with --dry-run=client -o yaml.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/)',
    difficulty: 'easy',
    tags: ['kubectl', 'pods', 'imperative'],
  },

  // ============================================
  // DOMAIN: Application Deployment (20%) - 12 questions
  // ============================================
  {
    id: 'ckad-013',
    domain: 'Application Deployment',
    question: 'What is the default deployment strategy in Kubernetes?',
    options: ['Recreate', 'RollingUpdate', 'Blue-Green', 'Canary'],
    correctAnswer: 1,
    explanation:
      'RollingUpdate is the default strategy for Deployments. It gradually replaces old pods with new ones while maintaining availability. The Recreate strategy terminates all pods before creating new ones.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy)',
    difficulty: 'easy',
    tags: ['deployment', 'rolling-update', 'strategy'],
  },
  {
    id: 'ckad-014',
    domain: 'Application Deployment',
    question: 'Which command rolls back a Deployment to its previous revision?',
    options: [
      'kubectl rollback deployment nginx',
      'kubectl restore deployment nginx',
      'kubectl rollout undo deployment nginx',
      'kubectl deployment nginx --rollback',
    ],
    correctAnswer: 2,
    explanation:
      'The kubectl rollout undo command rolls back a deployment to the previous revision. You can also specify a specific revision using --to-revision=N flag.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-back-a-deployment)',
    difficulty: 'medium',
    tags: ['rollout', 'rollback', 'deployment'],
  },
  {
    id: 'ckad-015',
    domain: 'Application Deployment',
    question: 'What does maxSurge control in a RollingUpdate strategy?',
    options: [
      'The minimum number of pods that must be available',
      'The maximum time to wait for a pod to become ready',
      'The maximum number of unavailable pods',
      'The maximum number of pods that can be created above the desired count',
    ],
    correctAnswer: 3,
    explanation:
      'maxSurge specifies the maximum number of pods that can be created over the desired number during an update. It can be an absolute number or a percentage. This allows faster rollouts by running extra pods temporarily.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#max-surge)',
    difficulty: 'medium',
    tags: ['rolling-update', 'maxsurge', 'deployment'],
  },
  {
    id: 'ckad-016',
    domain: 'Application Deployment',
    question: 'What is the purpose of the Recreate deployment strategy?',
    options: [
      'To terminate all existing pods before creating new ones',
      'To update pods one by one',
      'To create a backup before updating',
      'To test the new version alongside the old one',
    ],
    correctAnswer: 0,
    explanation:
      'The Recreate strategy terminates all existing pods before creating new ones. This causes downtime but is useful when running multiple versions simultaneously is not supported.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#recreate-deployment)',
    difficulty: 'easy',
    tags: ['recreate', 'strategy', 'deployment'],
  },
  {
    id: 'ckad-017',
    domain: 'Application Deployment',
    question: 'Which command shows the status of a deployment rollout?',
    options: [
      'kubectl get deployment nginx',
      'kubectl describe deployment nginx',
      'kubectl rollout status deployment nginx',
      'kubectl status deployment nginx',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl rollout status watches the rollout status of a deployment. It returns a zero exit code when the rollout completes successfully, making it useful in scripts and CI/CD pipelines.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/)',
    difficulty: 'easy',
    tags: ['rollout', 'status', 'deployment'],
  },
  {
    id: 'ckad-018',
    domain: 'Application Deployment',
    question: 'What does maxUnavailable control in a RollingUpdate strategy?',
    options: [
      'The maximum number of pods that can be unavailable during the update',
      'The maximum number of new pods to create',
      'The maximum time a pod can be in terminating state',
      'The maximum number of failed pods before rollback',
    ],
    correctAnswer: 0,
    explanation:
      'maxUnavailable specifies the maximum number of pods that can be unavailable during the update process. It ensures a minimum number of pods are always running to serve traffic.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#max-unavailable)',
    difficulty: 'medium',
    tags: ['rolling-update', 'maxunavailable', 'deployment'],
  },
  {
    id: 'ckad-019',
    domain: 'Application Deployment',
    question: 'How can you pause a Deployment rollout?',
    options: [
      'kubectl rollout pause deployment nginx',
      'kubectl stop deployment nginx',
      'kubectl deployment nginx --pause',
      'kubectl suspend deployment nginx',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl rollout pause pauses a deployment, preventing any new rollouts. This is useful for making multiple changes before triggering a single rollout with kubectl rollout resume.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#pausing-and-resuming-a-deployment)',
    difficulty: 'medium',
    tags: ['rollout', 'pause', 'deployment'],
  },
  {
    id: 'ckad-020',
    domain: 'Application Deployment',
    question: 'What is Helm primarily used for in Kubernetes?',
    options: [
      'Container image building',
      'Network policy management',
      'Package management and templating for Kubernetes applications',
      'Cluster monitoring',
    ],
    correctAnswer: 2,
    explanation:
      'Helm is the package manager for Kubernetes. It uses charts to define, install, and upgrade applications. Charts contain templates and default values, making application deployment reproducible and configurable.\n\nLearn more: [Official Documentation](https://helm.sh/docs/)',
    difficulty: 'easy',
    tags: ['helm', 'packaging', 'deployment'],
  },
  {
    id: 'ckad-021',
    domain: 'Application Deployment',
    question: 'Which Helm command installs a chart?',
    options: [
      'helm deploy myrelease ./mychart',
      'helm install myrelease ./mychart',
      'helm create myrelease ./mychart',
      'helm run myrelease ./mychart',
    ],
    correctAnswer: 1,
    explanation:
      'helm install deploys a chart to the cluster with a release name. The release name is used to track and manage the installation. Use helm upgrade to update an existing release.\n\nLearn more: [Official Documentation](https://helm.sh/docs/helm/helm_install/)',
    difficulty: 'easy',
    tags: ['helm', 'install', 'charts'],
  },
  {
    id: 'ckad-022',
    domain: 'Application Deployment',
    question: 'What is stored in the revision history of a Deployment?',
    options: [
      'Container logs from each revision',
      'Metrics data from each deployment',
      'User information about who made changes',
      'ReplicaSets from previous versions for rollback purposes',
    ],
    correctAnswer: 3,
    explanation:
      'Kubernetes keeps old ReplicaSets to allow rollback. The revisionHistoryLimit field controls how many old ReplicaSets are retained. Each revision stores the pod template spec used at that time.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#revision-history-limit)',
    difficulty: 'medium',
    tags: ['deployment', 'revision', 'rollback'],
  },
  {
    id: 'ckad-023',
    domain: 'Application Deployment',
    question: 'How do you scale a Deployment to 5 replicas using kubectl?',
    options: [
      'kubectl replicas deployment nginx 5',
      'kubectl set replicas deployment nginx --replicas=5',
      'kubectl scale deployment nginx --replicas=5',
      'kubectl resize deployment nginx --count=5',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl scale is used to change the number of replicas in a deployment, replicaset, or statefulset. This is a quick way to manually scale applications without editing the manifest.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/)',
    difficulty: 'easy',
    tags: ['kubectl', 'scale', 'deployment'],
  },
  {
    id: 'ckad-024',
    domain: 'Application Deployment',
    question: 'What is a Helm release?',
    options: [
      'A version of the Helm CLI',
      'A published chart in a repository',
      'A template file in a chart',
      'An instance of a chart running in a cluster',
    ],
    correctAnswer: 3,
    explanation:
      'A release is a running instance of a chart in the cluster. Each installation creates a new release with a unique name. You can have multiple releases of the same chart with different configurations.\n\nLearn more: [Official Documentation](https://helm.sh/docs/intro/using_helm/#three-big-concepts)',
    difficulty: 'medium',
    tags: ['helm', 'release', 'charts'],
  },

  // ============================================
  // DOMAIN: Application Observability and Maintenance (15%) - 9 questions
  // ============================================
  {
    id: 'ckad-025',
    domain: 'Application Observability and Maintenance',
    question: 'What is the purpose of a liveness probe?',
    options: [
      'To determine if a container should be restarted',
      'To determine if a pod should receive traffic',
      'To check if the container started successfully',
      'To monitor CPU and memory usage',
    ],
    correctAnswer: 0,
    explanation:
      'Liveness probes determine if a container is running properly. If the probe fails, the kubelet kills the container and applies the restart policy. This helps recover from deadlocks or stuck processes.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/)',
    difficulty: 'medium',
    tags: ['probes', 'liveness', 'health-checks'],
  },
  {
    id: 'ckad-026',
    domain: 'Application Observability and Maintenance',
    question: 'What is the purpose of a readiness probe?',
    options: [
      'To restart containers that are not ready',
      'To determine if a container can receive traffic from Services',
      'To check if init containers completed',
      'To scale pods based on load',
    ],
    correctAnswer: 1,
    explanation:
      'Readiness probes determine if a container is ready to accept traffic. A pod is added to service endpoints only when all containers pass readiness checks. This prevents sending traffic to pods that are not ready.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes)',
    difficulty: 'medium',
    tags: ['probes', 'readiness', 'health-checks'],
  },
  {
    id: 'ckad-027',
    domain: 'Application Observability and Maintenance',
    question: 'Which command displays the logs of a specific container in a multi-container Pod?',
    options: [
      'kubectl logs mypod container-name',
      'kubectl get logs mypod -c container-name',
      'kubectl logs mypod --container=container-name',
      'kubectl describe pod mypod --logs',
    ],
    correctAnswer: 2,
    explanation:
      'Use kubectl logs with the -c or --container flag to specify which container logs to retrieve in a multi-container pod. Without this flag, it defaults to the first container.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/)',
    difficulty: 'easy',
    tags: ['kubectl', 'logs', 'debugging'],
  },
  {
    id: 'ckad-028',
    domain: 'Application Observability and Maintenance',
    question: 'What is a startup probe used for?',
    options: [
      'To speed up container startup',
      'To initialize application configuration',
      'To give slow-starting containers time before liveness probes take over',
      'To start dependent containers in order',
    ],
    correctAnswer: 2,
    explanation:
      'Startup probes are used for containers that need extended time to start. The kubelet does not check liveness or readiness until the startup probe succeeds, preventing premature termination.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-startup-probes)',
    difficulty: 'medium',
    tags: ['probes', 'startup', 'health-checks'],
  },
  {
    id: 'ckad-029',
    domain: 'Application Observability and Maintenance',
    question: 'Which kubectl command shows resource usage (CPU/memory) for pods?',
    options: [
      'kubectl top pods',
      'kubectl get pods --resources',
      'kubectl usage pods',
      'kubectl describe pods',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl top shows current CPU and memory usage for pods or nodes. It requires the Metrics Server to be installed in the cluster to provide this data.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/)',
    difficulty: 'easy',
    tags: ['kubectl', 'metrics', 'monitoring'],
  },
  {
    id: 'ckad-030',
    domain: 'Application Observability and Maintenance',
    question: 'How do you execute a command inside a running container?',
    options: [
      'kubectl run mypod --command=ls',
      'kubectl shell mypod -- ls',
      'kubectl exec mypod -- ls',
      'kubectl connect mypod -- ls',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl exec runs a command in a container. Use -it for interactive sessions (like bash shells). The -- separates kubectl flags from the command to execute.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_exec/)',
    difficulty: 'easy',
    tags: ['kubectl', 'exec', 'debugging'],
  },
  {
    id: 'ckad-031',
    domain: 'Application Observability and Maintenance',
    question: 'What is the initialDelaySeconds field used for in probe configuration?',
    options: [
      'How long to wait before marking the probe as failed',
      'How long to wait after container start before performing the first probe',
      'The interval between consecutive probes',
      'How long to wait before restarting a failed container',
    ],
    correctAnswer: 1,
    explanation:
      'initialDelaySeconds specifies the number of seconds after the container starts before probes are initiated. This gives applications time to initialize before being checked.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes)',
    difficulty: 'medium',
    tags: ['probes', 'configuration', 'health-checks'],
  },
  {
    id: 'ckad-032',
    domain: 'Application Observability and Maintenance',
    question: 'Which probe type executes a command inside the container?',
    options: ['httpGet', 'tcpSocket', 'exec', 'grpc'],
    correctAnswer: 2,
    explanation:
      'The exec probe runs a command inside the container. If the command exits with status code 0, the probe succeeds. This is useful for custom health check scripts.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-liveness-command)',
    difficulty: 'easy',
    tags: ['probes', 'exec', 'health-checks'],
  },
  {
    id: 'ckad-033',
    domain: 'Application Observability and Maintenance',
    question: 'How do you follow (stream) logs from a pod in real-time?',
    options: [
      'kubectl logs mypod --stream',
      'kubectl logs mypod --watch',
      'kubectl logs mypod --realtime',
      'kubectl logs mypod --follow',
    ],
    correctAnswer: 3,
    explanation:
      'The -f or --follow flag streams logs in real-time, similar to tail -f. This is useful for debugging running applications and watching for new log entries.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/)',
    difficulty: 'easy',
    tags: ['kubectl', 'logs', 'debugging'],
  },

  // ============================================
  // DOMAIN: Application Environment, Configuration and Security (25%) - 15 questions
  // ============================================
  {
    id: 'ckad-034',
    domain: 'Application Environment, Configuration and Security',
    question: 'What is a ConfigMap used for?',
    options: [
      'Storing non-confidential configuration data as key-value pairs',
      'Storing sensitive data like passwords',
      'Configuring network policies',
      'Managing container resource limits',
    ],
    correctAnswer: 0,
    explanation:
      'ConfigMaps store non-confidential configuration data as key-value pairs. They can be consumed as environment variables, command-line arguments, or configuration files in a volume.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/configmap/)',
    difficulty: 'easy',
    tags: ['configmap', 'configuration', 'environment'],
  },
  {
    id: 'ckad-035',
    domain: 'Application Environment, Configuration and Security',
    question: 'What is the primary difference between ConfigMaps and Secrets?',
    options: [
      'ConfigMaps can only store text; Secrets store binary data',
      'Secrets are base64 encoded and intended for sensitive data',
      'ConfigMaps are immutable; Secrets can be modified',
      'Secrets are automatically encrypted at rest; ConfigMaps are not',
    ],
    correctAnswer: 1,
    explanation:
      'Secrets are intended for sensitive data and are base64 encoded (not encrypted by default). ConfigMaps are for non-sensitive data. Both can be optionally encrypted at rest with additional configuration.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/secret/)',
    difficulty: 'medium',
    tags: ['secrets', 'configmap', 'security'],
  },
  {
    id: 'ckad-036',
    domain: 'Application Environment, Configuration and Security',
    question: 'How do you create a Secret from literal values using kubectl?',
    options: [
      'kubectl create secret generic mysecret --from-literal=key=value',
      'kubectl create secret mysecret --literal key=value',
      'kubectl secret create mysecret key=value',
      'kubectl new secret generic mysecret --data=key=value',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl create secret generic creates a Secret from literal values, files, or directories. The --from-literal flag specifies key-value pairs directly on the command line.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/)',
    difficulty: 'medium',
    tags: ['secrets', 'kubectl', 'imperative'],
  },
  {
    id: 'ckad-037',
    domain: 'Application Environment, Configuration and Security',
    question: 'What does a SecurityContext at the container level control?',
    options: [
      'Network policies for the container',
      'Secret encryption settings',
      'Resource limits and requests',
      'Security settings like user ID, capabilities, and privilege escalation for a specific container',
    ],
    correctAnswer: 3,
    explanation:
      'SecurityContext defines privilege and access control settings for containers. It includes runAsUser, runAsGroup, capabilities, privileged mode, and allowPrivilegeEscalation settings.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)',
    difficulty: 'medium',
    tags: ['security-context', 'security', 'containers'],
  },
  {
    id: 'ckad-038',
    domain: 'Application Environment, Configuration and Security',
    question: 'Which field prevents a container from running as root?',
    options: ['noRoot: true', 'runAsNonRoot: true', 'privileged: false', 'rootDisabled: true'],
    correctAnswer: 1,
    explanation:
      'Setting runAsNonRoot: true in the SecurityContext ensures the container will not run as root (UID 0). If the container tries to run as root, it will fail to start.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    difficulty: 'medium',
    tags: ['security-context', 'root', 'security'],
  },
  {
    id: 'ckad-039',
    domain: 'Application Environment, Configuration and Security',
    question: 'What is a ServiceAccount used for in Kubernetes?',
    options: [
      'To authenticate external users to the cluster',
      'To manage billing for services',
      'To provide an identity for processes running in Pods',
      'To configure service discovery',
    ],
    correctAnswer: 2,
    explanation:
      'ServiceAccounts provide an identity for pods to authenticate with the Kubernetes API and other services. Each namespace has a default ServiceAccount that pods use unless specified otherwise.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/service-accounts/)',
    difficulty: 'medium',
    tags: ['service-account', 'authentication', 'security'],
  },
  {
    id: 'ckad-040',
    domain: 'Application Environment, Configuration and Security',
    question: 'How do you mount a ConfigMap as environment variables in a Pod?',
    options: [
      'Using volumeMounts with configMapRef',
      'Using envFrom with configMapRef',
      'Using env with configMapSource',
      'ConfigMaps cannot be mounted as environment variables',
    ],
    correctAnswer: 1,
    explanation:
      'envFrom with configMapRef loads all key-value pairs from a ConfigMap as environment variables. For individual keys, use env with valueFrom.configMapKeyRef.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#configure-all-key-value-pairs-in-a-configmap-as-container-environment-variables)',
    difficulty: 'medium',
    tags: ['configmap', 'environment', 'configuration'],
  },
  {
    id: 'ckad-041',
    domain: 'Application Environment, Configuration and Security',
    question: 'What is the purpose of resource requests in a container spec?',
    options: [
      'To limit the maximum resources a container can use',
      'To request resources from other containers',
      'To configure auto-scaling thresholds',
      'To guarantee minimum resources allocated to a container',
    ],
    correctAnswer: 3,
    explanation:
      'Resource requests specify the minimum amount of resources guaranteed to a container. The scheduler uses requests to find a suitable node. Limits specify the maximum resources allowed.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)',
    difficulty: 'medium',
    tags: ['resources', 'requests', 'scheduling'],
  },
  {
    id: 'ckad-042',
    domain: 'Application Environment, Configuration and Security',
    question: 'Which Secret type is used for Docker registry credentials?',
    options: [
      'kubernetes.io/basic-auth',
      'kubernetes.io/dockerconfigjson',
      'kubernetes.io/tls',
      'kubernetes.io/service-account-token',
    ],
    correctAnswer: 1,
    explanation:
      'kubernetes.io/dockerconfigjson stores Docker registry credentials. It is used with imagePullSecrets to authenticate when pulling images from private registries.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)',
    difficulty: 'medium',
    tags: ['secrets', 'docker', 'registry'],
  },
  {
    id: 'ckad-043',
    domain: 'Application Environment, Configuration and Security',
    question: 'What happens when a container exceeds its memory limit?',
    options: [
      'The container is throttled',
      'A warning is logged but the container continues',
      'The limit is automatically increased',
      'The container is terminated (OOMKilled)',
    ],
    correctAnswer: 3,
    explanation:
      'When a container exceeds its memory limit, it is terminated with OOMKilled (Out Of Memory Killed) status. CPU limits cause throttling, but memory limits cause termination.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#how-pods-with-resource-limits-are-run)',
    difficulty: 'medium',
    tags: ['resources', 'limits', 'memory'],
  },
  {
    id: 'ckad-044',
    domain: 'Application Environment, Configuration and Security',
    question: 'How do you reference a specific key from a Secret as an environment variable?',
    options: [
      'env: - name: VAR secretRef: name: mysecret key: mykey',
      'envFrom: - secretRef: name: mysecret keyRef: mykey',
      'environment: - VAR: mysecret.mykey',
      'env: - name: VAR valueFrom: secretKeyRef: name: mysecret key: mykey',
    ],
    correctAnswer: 3,
    explanation:
      'Use valueFrom.secretKeyRef to reference a specific key from a Secret. This allows selective exposure of secret values as environment variables.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables)',
    difficulty: 'hard',
    tags: ['secrets', 'environment', 'configuration'],
  },
  {
    id: 'ckad-045',
    domain: 'Application Environment, Configuration and Security',
    question: 'What does the readOnly field do when mounting a ConfigMap as a volume?',
    options: [
      'Makes the ConfigMap immutable in etcd',
      'Prevents the container from modifying the mounted files',
      'Prevents updates to the ConfigMap',
      'Makes the volume read-only at the filesystem level',
    ],
    correctAnswer: 3,
    explanation:
      'readOnly: true mounts the volume as read-only at the filesystem level, preventing any write operations within the container. ConfigMaps mounted as volumes are always read-only regardless of this setting.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/volumes/#configmap)',
    difficulty: 'medium',
    tags: ['configmap', 'volumes', 'readonly'],
  },
  {
    id: 'ckad-046',
    domain: 'Application Environment, Configuration and Security',
    question: 'What is RBAC in Kubernetes?',
    options: [
      'Resource-Based Access Control for containers',
      'Runtime-Based Application Configuration',
      'Registry-Based Authentication Control',
      'Role-Based Access Control for API authorization',
    ],
    correctAnswer: 3,
    explanation:
      'RBAC (Role-Based Access Control) regulates access to Kubernetes resources based on roles. It uses Roles, ClusterRoles, RoleBindings, and ClusterRoleBindings to define permissions.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)',
    difficulty: 'medium',
    tags: ['rbac', 'security', 'authorization'],
  },
  {
    id: 'ckad-047',
    domain: 'Application Environment, Configuration and Security',
    question: 'How do you create a ConfigMap from a file?',
    options: [
      'kubectl create configmap myconfig --from-file=config.properties',
      'kubectl configmap create myconfig --file=config.properties',
      'kubectl apply configmap myconfig --source=config.properties',
      'kubectl new configmap myconfig --import=config.properties',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl create configmap with --from-file creates a ConfigMap from a file. The filename becomes the key and the file content becomes the value. Multiple files can be specified.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/#create-configmaps-from-files)',
    difficulty: 'easy',
    tags: ['configmap', 'kubectl', 'imperative'],
  },
  {
    id: 'ckad-048',
    domain: 'Application Environment, Configuration and Security',
    question: 'Which capability allows a container to bind to privileged ports (below 1024)?',
    options: ['NET_BIND_SERVICE', 'SYS_ADMIN', 'CHOWN', 'SETUID'],
    correctAnswer: 0,
    explanation:
      'The NET_BIND_SERVICE capability allows a process to bind to ports below 1024 without running as root. Capabilities provide fine-grained control over privileges.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container)',
    difficulty: 'hard',
    tags: ['capabilities', 'security', 'networking'],
  },

  // ============================================
  // DOMAIN: Services and Networking (20%) - 12 questions
  // ============================================
  {
    id: 'ckad-049',
    domain: 'Services and Networking',
    question: 'What is the default Service type in Kubernetes?',
    options: ['NodePort', 'LoadBalancer', 'ClusterIP', 'ExternalName'],
    correctAnswer: 2,
    explanation:
      'ClusterIP is the default Service type. It exposes the Service on an internal IP address, making it reachable only from within the cluster.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/service/#type-clusterip)',
    difficulty: 'easy',
    tags: ['service', 'clusterip', 'networking'],
  },
  {
    id: 'ckad-050',
    domain: 'Services and Networking',
    question: 'What is the purpose of a NodePort Service?',
    options: [
      'To expose the service on each node at a static port',
      'To assign a port to each pod',
      'To limit which ports pods can use',
      'To configure internal port mappings',
    ],
    correctAnswer: 0,
    explanation:
      'NodePort exposes the Service on a static port on each node. External traffic can access the service via <NodeIP>:<NodePort>. The port range is typically 30000-32767.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)',
    difficulty: 'easy',
    tags: ['service', 'nodeport', 'networking'],
  },
  {
    id: 'ckad-051',
    domain: 'Services and Networking',
    question: 'What is an Ingress resource used for?',
    options: [
      'Internal service communication',
      'Managing external HTTP/HTTPS access to services',
      'Pod-to-pod encryption',
      'Container networking configuration',
    ],
    correctAnswer: 1,
    explanation:
      'Ingress manages external access to services, typically HTTP/HTTPS. It provides load balancing, SSL termination, and name-based virtual hosting. Requires an Ingress controller to function.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/)',
    difficulty: 'medium',
    tags: ['ingress', 'http', 'routing'],
  },
  {
    id: 'ckad-052',
    domain: 'Services and Networking',
    question: 'What does a NetworkPolicy control?',
    options: [
      'Service mesh routing',
      'DNS resolution between pods',
      'Pod-to-pod and external traffic flow based on labels',
      'Load balancer configuration',
    ],
    correctAnswer: 2,
    explanation:
      'NetworkPolicies control which pods can communicate with each other and with external endpoints. They use label selectors to define rules for ingress and egress traffic.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/)',
    difficulty: 'medium',
    tags: ['network-policy', 'security', 'traffic'],
  },
  {
    id: 'ckad-053',
    domain: 'Services and Networking',
    question: 'How does a Service discover which pods to route traffic to?',
    options: [
      'By pod name matching',
      'By node labels',
      'By label selectors matching pod labels',
      'By namespace membership',
    ],
    correctAnswer: 2,
    explanation:
      'Services use label selectors to identify which pods should receive traffic. The Service endpoints are automatically updated when pods with matching labels are added or removed.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/service/#services-in-kubernetes)',
    difficulty: 'easy',
    tags: ['service', 'selectors', 'discovery'],
  },
  {
    id: 'ckad-054',
    domain: 'Services and Networking',
    question: 'What is required for Ingress resources to work in a cluster?',
    options: [
      'A LoadBalancer Service',
      'An Ingress Controller',
      'External DNS configuration',
      'NetworkPolicy enabled',
    ],
    correctAnswer: 1,
    explanation:
      'An Ingress Controller is required to fulfill Ingress resources. Popular controllers include NGINX Ingress Controller, Traefik, and HAProxy. Without a controller, Ingress resources have no effect.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)',
    difficulty: 'medium',
    tags: ['ingress', 'controller', 'requirements'],
  },
  {
    id: 'ckad-055',
    domain: 'Services and Networking',
    question: 'What happens to traffic when no NetworkPolicy is applied to a pod?',
    options: [
      'All traffic is blocked by default',
      'Only egress traffic is allowed',
      'All traffic is allowed (ingress and egress)',
      'Only traffic within the same namespace is allowed',
    ],
    correctAnswer: 2,
    explanation:
      'By default, pods are non-isolated and accept all traffic. Once any NetworkPolicy selects a pod, it becomes isolated and only allows traffic explicitly permitted by policies.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies)',
    difficulty: 'medium',
    tags: ['network-policy', 'default', 'security'],
  },
  {
    id: 'ckad-056',
    domain: 'Services and Networking',
    question: 'Which kubectl command exposes a Deployment as a Service?',
    options: [
      'kubectl service create myapp --port=80',
      'kubectl expose deployment myapp --port=80',
      'kubectl create service myapp --target=deployment',
      'kubectl network expose myapp --port=80',
    ],
    correctAnswer: 1,
    explanation:
      'kubectl expose creates a Service for a resource (deployment, pod, replicaset). It automatically sets up the selector based on the exposed resource labels.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/)',
    difficulty: 'easy',
    tags: ['kubectl', 'service', 'expose'],
  },
  {
    id: 'ckad-057',
    domain: 'Services and Networking',
    question: 'What does the targetPort field in a Service specify?',
    options: [
      'The port the Service listens on',
      'The port on the pod that receives traffic',
      'The external load balancer port',
      'The NodePort value',
    ],
    correctAnswer: 1,
    explanation:
      'targetPort specifies the port on the pod where traffic is sent. The Service port is what clients connect to, and targetPort is where pods receive the forwarded traffic.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service)',
    difficulty: 'medium',
    tags: ['service', 'ports', 'networking'],
  },
  {
    id: 'ckad-058',
    domain: 'Services and Networking',
    question: 'How do you route traffic to different services based on URL path in an Ingress?',
    options: [
      'Using multiple Ingress resources',
      'Using different Service ports',
      'Path-based routing is not supported',
      'Using path-based routing rules in the Ingress spec',
    ],
    correctAnswer: 3,
    explanation:
      'Ingress resources support path-based routing through rules with different paths. Each path can route to a different backend service. PathType (Prefix, Exact, ImplementationSpecific) controls matching.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types)',
    difficulty: 'medium',
    tags: ['ingress', 'routing', 'paths'],
  },
  {
    id: 'ckad-059',
    domain: 'Services and Networking',
    question: 'What is the DNS format for accessing a Service within the same namespace?',
    options: [
      '<service-name>.<namespace>.cluster.local',
      '<namespace>.<service-name>',
      '<service-name>.<cluster-domain>',
      '<service-name>',
    ],
    correctAnswer: 3,
    explanation:
      'Within the same namespace, services can be accessed simply by service name. The full DNS name is <service-name>.<namespace>.svc.cluster.local, but the short form works for same-namespace access.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)',
    difficulty: 'medium',
    tags: ['dns', 'service', 'discovery'],
  },
  {
    id: 'ckad-060',
    domain: 'Services and Networking',
    question: 'Which NetworkPolicy spec field controls incoming traffic to pods?',
    options: ['egress', 'ingress', 'incoming', 'inbound'],
    correctAnswer: 1,
    explanation:
      'The ingress field in NetworkPolicy spec defines rules for incoming traffic to selected pods. Each ingress rule can specify allowed source pods, namespaces, and IP blocks along with allowed ports.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#networkpolicy-resource)',
    difficulty: 'easy',
    tags: ['network-policy', 'ingress', 'security'],
  },
];

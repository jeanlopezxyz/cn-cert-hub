/**
 * CAPA - Certified Argo Project Associate
 * Practice Questions (60 questions - matches exam format)
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: capa-XXX (e.g., capa-001, capa-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Argo Workflows (36%) - 22 questions
 * - ARGO CD (34%) - 20 questions
 * - Argo Rollouts (18%) - 10 questions
 * - Argo Events (12%) - 8 questions
 */

import type { Question } from '@/types/quiz';

export const CAPA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Argo Workflows (36%)
  // ============================================
  {
    id: 'capa-001',
    question: 'What is Argo Workflows?',
    options: [
      'A container-native workflow engine for orchestrating jobs on Kubernetes',
      'A CI/CD tool for Kubernetes',
      'A monitoring solution',
      'A service mesh',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Argo Workflows is an open-source container-native workflow engine for orchestrating parallel jobs on Kubernetes. Workflows are defined as Kubernetes CRDs.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/)',
    domain: 'Argo Workflows',
    tags: ['workflows', 'fundamentals', 'kubernetes'],
  },
  {
    id: 'capa-002',
    question: 'What is a DAG in Argo Workflows?',
    options: [
      'A database aggregation group',
      'A debugging and governance tool',
      'A Directed Acyclic Graph defining task dependencies',
      'A deployment automation gateway',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'DAG (Directed Acyclic Graph) allows you to define tasks with dependencies. Tasks run as soon as their dependencies are met, enabling parallel execution.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/dag/)',
    domain: 'Argo Workflows',
    tags: ['dag', 'dependencies', 'parallel'],
  },
  {
    id: 'capa-003',
    question: 'What is the purpose of WorkflowTemplate in Argo Workflows?',
    options: [
      'To store workflow logs',
      'To configure workflow permissions',
      'To define one-time workflows',
      'To create reusable workflow definitions that can be referenced',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'WorkflowTemplate is a reusable workflow definition stored in the cluster. Other workflows can reference templates from WorkflowTemplates to avoid duplication.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/workflow-templates/)',
    domain: 'Argo Workflows',
    tags: ['templates', 'reusability', 'best-practices'],
  },
  {
    id: 'capa-004',
    question: 'How are artifacts passed between steps in Argo Workflows?',
    options: [
      'Via artifact repositories (S3, GCS, etc.) defined in the workflow',
      'Through environment variables only',
      'Through ConfigMaps',
      'Via direct pod-to-pod communication',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Artifacts in Argo Workflows are stored in artifact repositories (S3, GCS, Minio, etc.). Steps can produce output artifacts and consume input artifacts from previous steps.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/artifacts/)',
    domain: 'Argo Workflows',
    tags: ['artifacts', 'storage', 'data-passing'],
  },
  {
    id: 'capa-005',
    question: 'What is the difference between "steps" and "dag" templates in Argo Workflows?',
    options: [
      'They are identical',
      'DAG is deprecated',
      'Steps are for containers; DAG is for scripts',
      'Steps run sequentially; DAG allows parallel execution based on dependencies',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Steps templates define sequential stages (can have parallel steps within). DAG templates define tasks with explicit dependencies, allowing more flexible parallel execution.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/steps/)',
    domain: 'Argo Workflows',
    tags: ['steps', 'dag', 'comparison'],
  },
  {
    id: 'capa-006',
    question: 'What is an exitHandler in Argo Workflows?',
    options: [
      'A template that runs at the end of a workflow regardless of success/failure',
      'A logging mechanism',
      'A handler that prevents workflow termination',
      'An error suppression feature',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'An exitHandler is a template that runs at the end of a workflow regardless of the workflow status. It is useful for cleanup, notifications, or final reporting.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/exit-handlers/)',
    domain: 'Argo Workflows',
    tags: ['exit-handler', 'cleanup', 'workflow-lifecycle'],
  },
  {
    id: 'capa-007',
    question: 'What are parameters in Argo Workflows used for?',
    options: [
      'Defining resource limits',
      'Specifying container images',
      'Passing values between templates and customizing workflow behavior',
      'Only for authentication',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Parameters allow passing values between templates, providing inputs to workflows, and customizing behavior at runtime. They can be strings, JSON, or references to previous outputs.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/parameters/)',
    domain: 'Argo Workflows',
    tags: ['parameters', 'inputs', 'customization'],
  },
  {
    id: 'capa-008',
    question: 'What is a CronWorkflow in Argo Workflows?',
    options: [
      'A workflow that runs only once',
      'A workflow for database operations',
      'A deprecated feature',
      'A workflow scheduled to run on a recurring basis',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'CronWorkflow creates workflows on a schedule defined using cron syntax. It is useful for recurring jobs like backups, reports, or periodic data processing.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/cron-workflows/)',
    domain: 'Argo Workflows',
    tags: ['cron', 'scheduling', 'recurring'],
  },
  {
    id: 'capa-009',
    question: 'What does the "suspend" field do in an Argo Workflow?',
    options: [
      'Pauses workflow execution until manually resumed',
      'Pauses the entire cluster',
      'Suspends container resources',
      'Disables logging',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'The suspend field pauses workflow execution. The workflow will not proceed until it is manually resumed, useful for approval gates or manual intervention points.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/suspending/)',
    domain: 'Argo Workflows',
    tags: ['suspend', 'approval', 'manual-gates'],
  },
  {
    id: 'capa-010',
    question: 'What is the purpose of retryStrategy in Argo Workflows?',
    options: [
      'To retry the entire workflow on failure',
      'To retry API calls to Kubernetes',
      'To retry artifact uploads',
      'To configure automatic retries of failed steps',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'retryStrategy defines how failed steps should be retried, including the number of retries, backoff strategy, and which error types to retry on.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/retries/)',
    domain: 'Argo Workflows',
    tags: ['retry', 'error-handling', 'resilience'],
  },

  // ============================================
  // DOMAIN: ARGO CD (34%)
  // ============================================
  {
    id: 'capa-011',
    question: 'What is Argo CD?',
    options: [
      'A container registry',
      'A workflow engine',
      'A declarative GitOps continuous delivery tool for Kubernetes',
      'A monitoring platform',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Argo CD is a declarative GitOps continuous delivery tool for Kubernetes. It continuously monitors Git repositories and synchronizes application state to clusters.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/)',
    domain: 'ARGO CD',
    tags: ['argocd', 'gitops', 'fundamentals'],
  },
  {
    id: 'capa-012',
    question: 'What is an Application in Argo CD?',
    options: [
      'A running container',
      'A Helm chart only',
      'A monitoring dashboard',
      'A CRD that defines the source repository and target cluster for deployment',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'An Argo CD Application is a Kubernetes CRD that defines the source (Git repo, path, revision) and destination (cluster, namespace) for deploying Kubernetes resources.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#applications)',
    domain: 'ARGO CD',
    tags: ['application', 'crd', 'configuration'],
  },
  {
    id: 'capa-013',
    question: 'What does "sync" mean in Argo CD?',
    options: [
      'Applying the desired state from Git to the target cluster',
      'Backing up application data',
      'Synchronizing databases',
      'Restarting all pods',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Sync in Argo CD means applying the desired state (from Git) to the target Kubernetes cluster. It ensures the live state matches the desired state in the repository.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/)',
    domain: 'ARGO CD',
    tags: ['sync', 'reconciliation', 'deployment'],
  },
  {
    id: 'capa-014',
    question: 'What is the difference between "OutOfSync" and "Synced" status in Argo CD?',
    options: [
      'OutOfSync means errors; Synced means no errors',
      'OutOfSync means live state differs from Git; Synced means they match',
      'They indicate network connectivity status',
      'They are related to RBAC permissions',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Synced means the live cluster state matches the desired state in Git. OutOfSync means they differ and a sync is needed to bring the cluster in line with Git.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/)',
    domain: 'ARGO CD',
    tags: ['sync-status', 'drift', 'monitoring'],
  },
  {
    id: 'capa-015',
    question: 'What is an AppProject in Argo CD?',
    options: [
      'A project management tool',
      'A Git repository type',
      'A way to group related applications with shared access controls',
      'A container image registry',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'AppProject provides a logical grouping of Applications with shared RBAC policies, allowed source repos, destination clusters, and resource whitelists/blacklists.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/projects/)',
    domain: 'ARGO CD',
    tags: ['appproject', 'rbac', 'multi-tenancy'],
  },
  {
    id: 'capa-016',
    question: 'What sync option prunes resources deleted from Git?',
    options: [
      'syncPolicy.automated.selfHeal',
      'syncPolicy.syncOptions.PruneLast',
      'syncPolicy.automated.cleanup',
      'syncPolicy.automated.prune',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'syncPolicy.automated.prune: true enables automatic deletion of resources that have been removed from Git. Without this, deleted resources remain in the cluster.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/)',
    domain: 'ARGO CD',
    tags: ['prune', 'sync-policy', 'cleanup'],
  },
  {
    id: 'capa-017',
    question: 'What does "self-heal" do in Argo CD?',
    options: [
      'Automatically syncs when live state drifts from desired state',
      'Fixes application bugs automatically',
      'Repairs failed pods',
      'Updates container images',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Self-heal automatically triggers a sync when the live cluster state drifts from the desired state in Git, even if no Git changes occurred (manual cluster changes).\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/)',
    domain: 'ARGO CD',
    tags: ['self-heal', 'drift-correction', 'automation'],
  },
  {
    id: 'capa-018',
    question: 'How does Argo CD integrate with Helm?',
    options: [
      'It cannot use Helm charts',
      'Helm replaces Argo CD',
      'It can render Helm charts and track them as Git sources',
      'Only through external plugins',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Argo CD natively supports Helm. It can render Helm charts with values files, track them in Git, and manage them like any other Kubernetes manifests.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/helm/)',
    domain: 'ARGO CD',
    tags: ['helm', 'integration', 'manifests'],
  },
  {
    id: 'capa-019',
    question: 'What is a sync wave in Argo CD?',
    options: [
      'A network protocol',
      'An animation effect in the UI',
      'A backup mechanism',
      'A way to control the order of resource creation during sync',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Sync waves control the order of resource synchronization using annotations. Resources with lower wave numbers are synced before those with higher numbers.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/)',
    domain: 'ARGO CD',
    tags: ['sync-waves', 'ordering', 'dependencies'],
  },
  {
    id: 'capa-020',
    question: 'What is an ApplicationSet in Argo CD?',
    options: [
      'A template for generating multiple Applications from a single definition',
      'A collection of container images',
      'A backup of applications',
      'A testing framework',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'ApplicationSet is a CRD that generates multiple Argo CD Applications from a single template using generators (Git, cluster, list, etc.).\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/)',
    domain: 'ARGO CD',
    tags: ['applicationset', 'templating', 'multi-cluster'],
  },

  // ============================================
  // DOMAIN: Argo Rollouts (18%)
  // ============================================
  {
    id: 'capa-021',
    question: 'What is Argo Rollouts?',
    options: [
      'A logging solution',
      'A Kubernetes controller for progressive delivery strategies',
      'A workflow engine',
      'A GitOps tool',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Argo Rollouts is a Kubernetes controller providing advanced deployment capabilities like canary releases, blue-green deployments, and automated rollbacks.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/)',
    domain: 'Argo Rollouts',
    tags: ['rollouts', 'progressive-delivery', 'fundamentals'],
  },
  {
    id: 'capa-022',
    question: 'What is a canary deployment strategy in Argo Rollouts?',
    options: [
      'Deploying to a separate environment',
      'Running two identical production environments',
      'Gradually shifting traffic to a new version while monitoring metrics',
      'Deploying during off-hours',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Canary deployment gradually shifts traffic (e.g., 5%, 10%, 25%, 100%) to a new version while monitoring. If metrics degrade, it can automatically rollback.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/canary/)',
    domain: 'Argo Rollouts',
    tags: ['canary', 'traffic-shifting', 'strategy'],
  },
  {
    id: 'capa-023',
    question: 'What is blue-green deployment in Argo Rollouts?',
    options: [
      'Using different color schemes for environments',
      'A testing methodology',
      'Container image tagging strategy',
      'Running two versions and switching traffic instantly between them',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Blue-green deployment maintains two complete versions. Traffic is instantly switched from blue (current) to green (new) after verification, enabling instant rollback.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/bluegreen/)',
    domain: 'Argo Rollouts',
    tags: ['blue-green', 'instant-switch', 'strategy'],
  },
  {
    id: 'capa-024',
    question: 'What is an AnalysisTemplate in Argo Rollouts?',
    options: [
      'A template defining metrics to evaluate during a rollout',
      'A logging configuration',
      'A code analysis tool',
      'A security scanner configuration',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'AnalysisTemplate defines metrics queries and success criteria. During rollouts, AnalysisRuns evaluate these metrics to determine if the rollout should proceed or abort.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/analysis/)',
    domain: 'Argo Rollouts',
    tags: ['analysis', 'metrics', 'automation'],
  },
  {
    id: 'capa-025',
    question: 'What is an AnalysisRun in Argo Rollouts?',
    options: [
      'A manual testing process',
      'A log aggregation job',
      'An instance of AnalysisTemplate executed during a rollout',
      'A backup operation',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'AnalysisRun is the instantiation of an AnalysisTemplate during a rollout. It queries metrics providers and evaluates success/failure criteria in real-time.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/analysis/)',
    domain: 'Argo Rollouts',
    tags: ['analysis-run', 'execution', 'metrics'],
  },
  {
    id: 'capa-026',
    question: 'What happens when an AnalysisRun fails during a canary rollout?',
    options: [
      'The rollout continues anyway',
      'An alert is sent but nothing changes',
      'The cluster is shut down',
      'The rollout is automatically aborted and rolled back',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'When an AnalysisRun fails (metrics exceed thresholds), the Rollout is automatically aborted and traffic is rolled back to the stable version.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/analysis/)',
    domain: 'Argo Rollouts',
    tags: ['rollback', 'automatic', 'failure-handling'],
  },

  // ============================================
  // DOMAIN: Argo Events (12%)
  // ============================================
  {
    id: 'capa-027',
    question: 'What is Argo Events?',
    options: [
      'A logging system',
      'A monitoring dashboard',
      'An event-driven workflow automation framework for Kubernetes',
      'A CI/CD pipeline tool',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Argo Events is an event-driven workflow automation framework that allows you to trigger Kubernetes resources (workflows, deployments, etc.) based on events from various sources.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/)',
    domain: 'Argo Events',
    tags: ['events', 'automation', 'fundamentals'],
  },
  {
    id: 'capa-028',
    question: 'What is an EventSource in Argo Events?',
    options: [
      'A resource that defines where events come from (webhooks, queues, etc.)',
      'A Git repository',
      'A logging destination',
      'A container image source',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'EventSource defines the source of events like webhooks, message queues, S3 notifications, cron schedules, or any of 20+ supported event sources.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/concepts/event_source/)',
    domain: 'Argo Events',
    tags: ['eventsource', 'sources', 'configuration'],
  },
  {
    id: 'capa-029',
    question: 'What is a Sensor in Argo Events?',
    options: [
      'A monitoring probe',
      'A resource that defines event dependencies and triggers',
      'A temperature sensor',
      'A security scanner',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'A Sensor listens to events from EventSources and defines triggers (what actions to take) when event dependencies are met. It connects events to actions.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/concepts/sensor/)',
    domain: 'Argo Events',
    tags: ['sensor', 'triggers', 'dependencies'],
  },
  {
    id: 'capa-030',
    question: 'What is an EventBus in Argo Events?',
    options: [
      'A network switch',
      'A logging queue',
      'A deployment bus',
      'A transport layer for events between EventSources and Sensors',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'EventBus is the transport layer (using NATS, Jetstream, or Kafka) that connects EventSources to Sensors, enabling event delivery and processing.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/concepts/eventbus/)',
    domain: 'Argo Events',
    tags: ['eventbus', 'transport', 'architecture'],
  },
  {
    id: 'capa-031',
    question: 'What types of triggers can a Sensor create?',
    options: [
      'Only Argo Workflows',
      'Only HTTP webhooks',
      'Kubernetes resources, Argo Workflows, HTTP requests, AWS Lambda, and more',
      'Only container deployments',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Sensors can trigger various actions: creating Kubernetes resources, starting Argo Workflows, sending HTTP requests, invoking AWS Lambda, Slack notifications, and more.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/concepts/trigger/)',
    domain: 'Argo Events',
    tags: ['triggers', 'actions', 'integrations'],
  },
  {
    id: 'capa-032',
    question: 'What is event filtering in Argo Events?',
    options: [
      'Conditionally triggering actions based on event data',
      'Removing events from logs',
      'Compressing event payloads',
      'Encrypting events',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Event filtering allows Sensors to evaluate event data against conditions before triggering. Only events matching the filter criteria will trigger actions.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/concepts/sensor/)',
    domain: 'Argo Events',
    tags: ['filtering', 'conditions', 'triggers'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Argo Workflows
  // ============================================
  {
    id: 'capa-033',
    question: 'What is the purpose of memoization in Argo Workflows?',
    options: [
      'To store workflow logs',
      'To compress workflow definitions',
      'To cache and reuse the results of previously executed steps',
      'To encrypt workflow data',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Memoization caches step outputs so that identical steps can reuse previous results instead of re-executing. This improves performance and reduces resource usage.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/memoization/)',
    domain: 'Argo Workflows',
    tags: ['memoization', 'caching', 'optimization'],
  },
  {
    id: 'capa-034',
    question: 'What is a ClusterWorkflowTemplate?',
    options: [
      'A template that runs on all nodes',
      'A template for cluster administration',
      'A template that creates clusters',
      'A WorkflowTemplate that is accessible across all namespaces',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'ClusterWorkflowTemplate is a cluster-scoped WorkflowTemplate that can be referenced by workflows in any namespace, enabling organization-wide reusable templates.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/cluster-workflow-templates/)',
    domain: 'Argo Workflows',
    tags: ['cluster-template', 'reusability', 'multi-namespace'],
  },
  {
    id: 'capa-035',
    question: 'What does the "when" expression do in Argo Workflows?',
    options: [
      'Enables conditional execution of steps based on expressions',
      'Specifies when to delete a workflow',
      'Sets timeout values',
      'Defines scheduling time',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'The "when" expression enables conditional execution. A step only runs if its when expression evaluates to true, based on parameters, outputs, or status of previous steps.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/conditionals/)',
    domain: 'Argo Workflows',
    tags: ['conditional', 'when', 'logic'],
  },
  {
    id: 'capa-036',
    question: 'How do you run steps in parallel in Argo Workflows?',
    options: [
      'Using the "parallel" keyword',
      'Parallel execution is not supported',
      'By defining steps as a list within a single step group (double dash)',
      'Using multiple CronWorkflows',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'In steps templates, parallel execution is achieved by listing steps within the same step group (same indentation level under a step). Each group runs sequentially, but items within run in parallel.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/steps/)',
    domain: 'Argo Workflows',
    tags: ['parallel', 'steps', 'concurrency'],
  },
  {
    id: 'capa-037',
    question: 'What is a Script template in Argo Workflows?',
    options: [
      'A template that only runs bash scripts',
      'A template for documentation',
      'A template for UI rendering',
      'A convenience wrapper for running a script in a container with the script as source',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Script template is a shorthand for running scripts inside containers. Instead of specifying commands, you provide the script source directly in the workflow YAML.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/scripts-and-results/)',
    domain: 'Argo Workflows',
    tags: ['script', 'templates', 'convenience'],
  },
  {
    id: 'capa-038',
    question: 'What is the purpose of volumes in Argo Workflows?',
    options: [
      'To share data between containers and persist data across steps',
      'Only for logging',
      'To increase container size',
      'To store workflow metadata',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Volumes allow sharing data between containers within a step and persisting data across workflow steps. This includes emptyDir, PVC, secrets, and configMaps.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/volumes/)',
    domain: 'Argo Workflows',
    tags: ['volumes', 'storage', 'data-sharing'],
  },
  {
    id: 'capa-039',
    question: 'What is the WorkflowEventBinding resource used for?',
    options: [
      'Logging workflow events',
      'Binding external events to workflow submissions',
      'Binding workflows to namespaces',
      'Binding users to workflows',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'WorkflowEventBinding allows triggering workflow creation from external events. It binds incoming events to workflow or template submissions with parameter mapping.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/events/)',
    domain: 'Argo Workflows',
    tags: ['events', 'triggers', 'binding'],
  },
  {
    id: 'capa-040',
    question: 'What is a ResourceTemplate in Argo Workflows?',
    options: [
      'A template that defines CPU and memory limits',
      'A resource quota template',
      'A template that creates, patches, or deletes Kubernetes resources',
      'A template for resource monitoring',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'ResourceTemplate performs operations on Kubernetes resources. You can create, apply, patch, or delete any Kubernetes resource as part of your workflow.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/kubernetes-resources/)',
    domain: 'Argo Workflows',
    tags: ['resource', 'kubernetes', 'operations'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - ARGO CD
  // ============================================
  {
    id: 'capa-041',
    question: 'What is the difference between manual and automated sync in Argo CD?',
    options: [
      'Manual sync is faster',
      'They use different protocols',
      'Manual sync is deprecated',
      'Automated sync automatically applies changes when Git changes; manual requires explicit sync',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Manual sync requires an operator to explicitly trigger sync. Automated sync automatically syncs when changes are detected in Git, with optional prune and self-heal.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/auto_sync/)',
    domain: 'ARGO CD',
    tags: ['sync-policy', 'automation', 'manual'],
  },
  {
    id: 'capa-042',
    question: 'What is a hook in Argo CD?',
    options: [
      'A resource that runs at specific points during sync (PreSync, Sync, PostSync)',
      'A Git webhook',
      'A monitoring probe',
      'A security checkpoint',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Hooks are resources annotated to run at specific sync phases: PreSync (before sync), Sync (with normal resources), PostSync (after sync), and SyncFail (on failure).\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-waves/)',
    domain: 'ARGO CD',
    tags: ['hooks', 'sync-phases', 'lifecycle'],
  },
  {
    id: 'capa-043',
    question: 'What is the purpose of the Argo CD ApplicationSet?',
    options: [
      'To back up applications',
      'To automatically generate Applications from templates using generators',
      'To set application permissions',
      'To group applications visually',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'ApplicationSet uses generators (Git, cluster, list, matrix, merge) to automatically create and manage multiple Applications from a single template definition.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/)',
    domain: 'ARGO CD',
    tags: ['applicationset', 'generators', 'automation'],
  },
  {
    id: 'capa-044',
    question: 'What does the "replace" sync option do in Argo CD?',
    options: [
      'Replaces the entire cluster',
      'Replaces Git repository',
      'Uses kubectl replace instead of apply for syncing resources',
      'Replaces ArgoCD installation',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'The replace sync option uses kubectl replace instead of apply. This is useful when dealing with resources that have issues with server-side apply or three-way merges.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/)',
    domain: 'ARGO CD',
    tags: ['sync-options', 'replace', 'apply'],
  },
  {
    id: 'capa-045',
    question: 'What is the Resource Health check in Argo CD?',
    options: [
      'A CPU monitoring feature',
      'A network connectivity test',
      'A storage health check',
      'Assessment of whether resources are healthy, degraded, progressing, or unknown',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Resource Health shows the health status of resources: Healthy (working), Progressing (updating), Degraded (issues), Suspended, Missing, or Unknown.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/operator-manual/health/)',
    domain: 'ARGO CD',
    tags: ['health', 'status', 'monitoring'],
  },
  {
    id: 'capa-046',
    question: 'What are Argo CD repositories credentials used for?',
    options: [
      'Authenticating to private Git repositories and Helm registries',
      'Storing application secrets',
      'Database connections',
      'Cluster authentication',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Repository credentials store authentication info (SSH keys, tokens, passwords) for accessing private Git repositories and Helm chart registries.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/)',
    domain: 'ARGO CD',
    tags: ['repositories', 'credentials', 'authentication'],
  },
  {
    id: 'capa-047',
    question: 'What is a project role in Argo CD?',
    options: [
      'A Kubernetes RBAC role',
      'A role for cluster administration',
      'A way to grant JWT tokens access permissions within a project',
      'A role for Git access',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Project roles define permissions that can be granted to JWT tokens, enabling fine-grained RBAC for CI systems and automation tools within Argo CD projects.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/projects/#project-roles)',
    domain: 'ARGO CD',
    tags: ['rbac', 'project-role', 'tokens'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Argo Rollouts
  // ============================================
  {
    id: 'capa-048',
    question: 'What traffic management integrations does Argo Rollouts support?',
    options: [
      'Only Kubernetes Services',
      'Only Istio',
      'No traffic management support',
      'Istio, Nginx, ALB, SMI, Traefik, and Ambassador',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Argo Rollouts integrates with multiple traffic managers: Istio, Nginx Ingress, AWS ALB, SMI (Service Mesh Interface), Traefik, Ambassador, and more.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/traffic-management/)',
    domain: 'Argo Rollouts',
    tags: ['traffic-management', 'integrations', 'service-mesh'],
  },
  {
    id: 'capa-049',
    question: 'What is the purpose of a pause step in Argo Rollouts?',
    options: [
      'To stop the application',
      'To halt rollout progression for manual verification or time-based delays',
      'To pause metrics collection',
      'To save resources',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Pause steps halt rollout progression either indefinitely (for manual approval) or for a specified duration, allowing verification before proceeding.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/canary/#pausing-the-rollout)',
    domain: 'Argo Rollouts',
    tags: ['pause', 'approval', 'gates'],
  },
  {
    id: 'capa-050',
    question: 'What metrics providers can AnalysisTemplates query?',
    options: [
      'Only Prometheus',
      'Prometheus, Datadog, NewRelic, Wavefront, CloudWatch, Kayenta, and more',
      'Only internal metrics',
      'No external metrics support',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'AnalysisTemplates support multiple metrics providers: Prometheus, Datadog, NewRelic, Wavefront, AWS CloudWatch, Kayenta (Google), Web (custom HTTP), and more.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/analysis/)',
    domain: 'Argo Rollouts',
    tags: ['analysis', 'metrics-providers', 'integrations'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Argo Events
  // ============================================
  {
    id: 'capa-051',
    question: 'What webhook sources does Argo Events support?',
    options: [
      'Only GitHub',
      'Only REST APIs',
      'GitHub, GitLab, Bitbucket, generic webhooks, and many more',
      'Webhooks are not supported',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Argo Events supports webhooks from GitHub, GitLab, Bitbucket, generic HTTP, Stripe, Slack, and many other sources through its EventSource definitions.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/eventsources/setup/webhook/)',
    domain: 'Argo Events',
    tags: ['webhooks', 'sources', 'integrations'],
  },
  {
    id: 'capa-052',
    question: 'What is event dependency in Argo Events?',
    options: [
      'A package dependency',
      'Multiple events that must all occur before a trigger fires',
      'A logging dependency',
      'A network requirement',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Event dependencies allow Sensors to wait for multiple events before triggering. You can define AND logic (all events required) or OR logic (any event triggers).\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-events/sensors/more-about-sensors-and-triggers/)',
    domain: 'Argo Events',
    tags: ['dependencies', 'logic', 'triggers'],
  },

  // ============================================
  // NEW QUESTIONS - Aligned with Official Curriculum
  // ============================================

  // Argo Workflows (+4)
  {
    id: 'capa-053',
    question: 'What is the purpose of withItems in Argo Workflows?',
    options: [
      'To define workflow metadata',
      'To iterate over a list and run a template for each item',
      'To specify resource limits',
      'To configure artifact storage',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'withItems allows you to iterate over a list of items and run a template for each one, enabling fan-out patterns. Each item is passed as a parameter to the template.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/loops/)',
    domain: 'Argo Workflows',
    tags: ['loops', 'withItems', 'fan-out'],
  },
  {
    id: 'capa-054',
    question: 'What is a sidecar container in Argo Workflows?',
    options: [
      'A container that runs alongside the main container in a step',
      'A backup container',
      'A logging-only container',
      'A container for security scanning',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Sidecars are containers that run alongside the main container in a step. They are useful for services like databases, caches, or proxies needed during step execution.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/sidecars/)',
    domain: 'Argo Workflows',
    tags: ['sidecar', 'containers', 'services'],
  },
  {
    id: 'capa-055',
    question: 'What does the activeDeadlineSeconds field control in Argo Workflows?',
    options: [
      'The time before logs are deleted',
      'The maximum duration a workflow can run before being terminated',
      'The time between retries',
      'The artifact retention period',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'activeDeadlineSeconds sets the maximum duration a workflow or step can run. If exceeded, the workflow is terminated. This prevents runaway workflows.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/fields/)',
    domain: 'Argo Workflows',
    tags: ['timeout', 'deadline', 'limits'],
  },
  {
    id: 'capa-056',
    question: 'What is the purpose of the inputs.artifacts field in Argo Workflows?',
    options: [
      'To define output locations',
      'To specify artifacts that a step requires as input from previous steps or external sources',
      'To configure artifact compression',
      'To set artifact permissions',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'inputs.artifacts defines artifacts that a step needs before it can run. These can come from previous step outputs, Git repositories, S3, or other sources.\n\nLearn more: [Documentación oficial](https://argoproj.github.io/argo-workflows/walk-through/artifacts/)',
    domain: 'Argo Workflows',
    tags: ['artifacts', 'inputs', 'dependencies'],
  },

  // Argo CD (+3)
  {
    id: 'capa-057',
    question: 'What is Kustomize in the context of Argo CD?',
    options: [
      'A Kubernetes admission controller',
      'A template-free way to customize Kubernetes manifests using overlays',
      'A CI/CD pipeline tool',
      'A container registry',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Kustomize is a Kubernetes-native configuration management tool that allows customization through overlays without templates. Argo CD supports Kustomize natively.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/kustomize/)',
    domain: 'ARGO CD',
    tags: ['kustomize', 'configuration', 'overlays'],
  },
  {
    id: 'capa-058',
    question: 'What does the "Degraded" health status indicate in Argo CD?',
    options: [
      'The application is updating',
      'The application has errors or issues affecting functionality',
      'The application is paused',
      'The application is being deleted',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Degraded status indicates the resource has errors or issues. For example, a Deployment with failing pods or a Service with no endpoints shows as Degraded.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/operator-manual/health/)',
    domain: 'ARGO CD',
    tags: ['health', 'degraded', 'status'],
  },
  {
    id: 'capa-059',
    question: 'What is the purpose of the ignoreDifferences field in Argo CD Applications?',
    options: [
      'To ignore Git changes',
      'To specify fields that should be ignored when comparing live and desired state',
      'To ignore sync errors',
      'To disable health checks',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'ignoreDifferences allows specifying JSON paths or fields that should be excluded from comparison. Useful for fields modified by controllers (like replicas from HPA).\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/diffing/)',
    domain: 'ARGO CD',
    tags: ['ignoreDifferences', 'diffing', 'configuration'],
  },

  // Argo Rollouts (+1)
  {
    id: 'capa-060',
    question: 'What is the purpose of setWeight in a canary strategy step?',
    options: [
      'To set the resource weight for scheduling',
      'To define the percentage of traffic to route to the canary version',
      'To configure pod priority',
      'To set memory limits',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'setWeight defines the percentage of traffic to route to the canary version at each step. For example, setWeight: 20 sends 20% of traffic to canary.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/canary/#traffic-routing)',
    domain: 'Argo Rollouts',
    tags: ['canary', 'traffic', 'setWeight'],
  },
];

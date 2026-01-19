/**
 * CGOA - Certified GitOps Associate
 * Practice Questions
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: cgoa-XXX (e.g., cgoa-001, cgoa-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - GitOps Terminology (20%)
 * - GitOps Principles (30%)
 * - Related Practices (16%)
 * - GitOps Patterns (20%)
 * - Tooling (14%)
 */

import type { Question } from '@/types/quiz';

export const CGOA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: GitOps Terminology (20%)
  // ============================================
  {
    id: 'cgoa-001',
    question: 'What is the "desired state" in GitOps?',
    options: [
      'The declarative description of how the system should be configured',
      'The current running state of the system',
      'The previous version of the application',
      'The state after a rollback',
    ],
    correctAnswer: 0,
    explanation:
      'The desired state is the declarative description (stored in Git) of how the system should be configured. GitOps continuously reconciles the actual state to match this desired state.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['desired-state', 'fundamentals', 'concepts'],
  },
  {
    id: 'cgoa-002',
    question: 'What is "state drift" in GitOps?',
    options: [
      'When Git repository becomes outdated',
      'When multiple branches diverge',
      'When the actual system state differs from the desired state in Git',
      'When configuration files are missing',
    ],
    correctAnswer: 2,
    explanation:
      'State drift (or configuration drift) occurs when the actual running state of a system diverges from the desired state defined in the Git repository. GitOps tools detect and remediate drift.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['drift', 'reconciliation', 'concepts'],
  },
  {
    id: 'cgoa-003',
    question: 'What is "state reconciliation" in GitOps?',
    options: [
      'Merging Git branches',
      'Backing up configuration files',
      'Resolving merge conflicts',
      'The process of bringing actual state to match desired state',
    ],
    correctAnswer: 3,
    explanation:
      'State reconciliation is the continuous process of comparing the actual system state with the desired state in Git and taking actions to make them match.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['reconciliation', 'automation', 'concepts'],
  },
  {
    id: 'cgoa-004',
    question: 'What is the "state store" in GitOps?',
    options: [
      'The Git repository containing the desired state',
      'A database for application data',
      'A cache for faster deployments',
      'The container registry',
    ],
    correctAnswer: 0,
    explanation:
      'The state store is the version-controlled repository (typically Git) that holds the declarative desired state of the system. It serves as the single source of truth.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['state-store', 'git', 'concepts'],
  },
  {
    id: 'cgoa-005',
    question: 'What is a "feedback loop" in GitOps context?',
    options: [
      'The mechanism that reports actual state back to operators',
      'Code review comments',
      'CI pipeline status notifications',
      'Git webhook responses',
    ],
    correctAnswer: 0,
    explanation:
      'A feedback loop in GitOps provides visibility into the actual state of the system, comparing it with desired state and alerting when drift occurs or reconciliation fails.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Terminology',
    difficulty: 'hard',
    tags: ['feedback-loop', 'observability', 'concepts'],
  },
  {
    id: 'cgoa-006',
    question: 'What does "continuous" mean in GitOps?',
    options: [
      'Ongoing reconciliation to maintain desired state',
      'Running CI pipelines continuously',
      'Having no downtime',
      'Deploying every commit immediately',
    ],
    correctAnswer: 0,
    explanation:
      'In GitOps, "continuous" means the reconciliation process runs continuously (not just on commits), constantly ensuring the actual state matches the desired state.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['continuous', 'reconciliation', 'principles'],
  },

  // ============================================
  // DOMAIN: GitOps Principles (30%)
  // ============================================
  {
    id: 'cgoa-007',
    question: 'What are the four OpenGitOps principles?',
    options: [
      'Declarative, Versioned and Immutable, Pulled Automatically, Continuously Reconciled',
      'Plan, Code, Build, Release',
      'Build, Test, Deploy, Monitor',
      'Develop, Stage, Production, Archive',
    ],
    correctAnswer: 0,
    explanation:
      'The four OpenGitOps principles are: (1) Declarative, (2) Versioned and Immutable, (3) Pulled Automatically, (4) Continuously Reconciled.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Principles',
    difficulty: 'hard',
    tags: ['opengitops', 'principles', 'fundamentals'],
  },
  {
    id: 'cgoa-008',
    question: 'What does "declarative" mean in GitOps principles?',
    options: [
      'Using command-line instructions',
      'Writing detailed deployment scripts',
      'Documenting all changes',
      'Describing WHAT the system should look like, not HOW to achieve it',
    ],
    correctAnswer: 3,
    explanation:
      'Declarative means describing the desired end state (what) rather than the steps to achieve it (how). The GitOps tool figures out how to reach that state.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['declarative', 'principles', 'configuration'],
  },
  {
    id: 'cgoa-009',
    question: 'Why should desired state be "versioned and immutable"?',
    options: [
      'To save storage space',
      'To prevent accidental changes',
      'To enable audit trails, rollbacks, and reproducibility',
      'To comply with security requirements',
    ],
    correctAnswer: 2,
    explanation:
      'Versioned and immutable state provides complete audit history, enables easy rollbacks to any previous state, and ensures reproducibility of deployments.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['versioned', 'immutable', 'principles'],
  },
  {
    id: 'cgoa-010',
    question: 'What does "pulled automatically" mean in GitOps?',
    options: [
      'Software agents pull desired state from the source and apply it',
      'Developers must manually trigger deployments',
      'Code is pulled during CI builds',
      'Users download updates manually',
    ],
    correctAnswer: 0,
    explanation:
      'In GitOps, software agents automatically pull the desired state from the state store (Git) and apply changes to the system. This is a pull-based model, not push.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['pull-based', 'automation', 'principles'],
  },
  {
    id: 'cgoa-011',
    question: 'What does "continuously reconciled" mean?',
    options: [
      'Deployments happen on every commit',
      'Git branches are continuously merged',
      'Logs are continuously collected',
      'Software agents continuously ensure actual state matches desired state',
    ],
    correctAnswer: 3,
    explanation:
      'Continuously reconciled means agents constantly compare actual state with desired state and take corrective action when drift is detected, not just on changes.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['reconciliation', 'continuous', 'principles'],
  },
  {
    id: 'cgoa-012',
    question: 'What is the single source of truth in GitOps?',
    options: [
      'The running cluster state',
      'The Git repository',
      'The container registry',
      'The CI/CD pipeline',
    ],
    correctAnswer: 1,
    explanation:
      'In GitOps, Git is the single source of truth. All desired state is stored in Git, and the running system should always reflect what is in Git.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['source-of-truth', 'git', 'fundamentals'],
  },
  {
    id: 'cgoa-013',
    question: 'How do rollbacks work in GitOps?',
    options: [
      'Running a special rollback command',
      'Restoring from a backup',
      'Reverting to a previous Git commit',
      'Manually reconfiguring services',
    ],
    correctAnswer: 2,
    explanation:
      'In GitOps, rollbacks are achieved by reverting to a previous Git commit. The GitOps operator then automatically reconciles the system to match that previous state.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['rollback', 'git', 'operations'],
  },
  {
    id: 'cgoa-014',
    question: 'What advantage does pull-based GitOps have over push-based CD?',
    options: [
      'Faster deployments',
      'More detailed logs',
      'Better testing capabilities',
      'No credentials needed in CI system for cluster access',
    ],
    correctAnswer: 3,
    explanation:
      'Pull-based GitOps means the cluster pulls changes from Git. This eliminates the need for CI systems to have direct cluster credentials, improving security.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'hard',
    tags: ['pull-based', 'security', 'comparison'],
  },
  {
    id: 'cgoa-015',
    question: 'Why is Git preferred as the state store in GitOps?',
    options: [
      'Git is the fastest version control system',
      'Git is required by Kubernetes',
      'Git has the best UI',
      'Git provides versioning, audit trail, branching, and collaboration features',
    ],
    correctAnswer: 3,
    explanation:
      'Git is preferred because it provides built-in versioning, complete audit history, branching for environments, collaboration through PRs, and widespread tooling support.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['git', 'state-store', 'benefits'],
  },
  {
    id: 'cgoa-016',
    question: 'How does GitOps improve security?',
    options: [
      'Through audit trails, reduced cluster access, and reproducible deployments',
      'By encrypting all files',
      'By requiring two-factor authentication',
      'Through automatic vulnerability scanning',
    ],
    correctAnswer: 0,
    explanation:
      'GitOps improves security by providing complete audit trails in Git, reducing direct cluster access (pull vs push), enabling reproducible and verifiable deployments, and leveraging Git access controls.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'hard',
    tags: ['security', 'audit', 'benefits'],
  },

  // ============================================
  // DOMAIN: Related Practices (16%)
  // ============================================
  {
    id: 'cgoa-017',
    question:
      'What is the difference between Infrastructure as Code (IaC) and Configuration as Code (CaC)?',
    options: [
      'IaC manages infrastructure resources; CaC manages application configuration',
      'CaC is newer than IaC',
      'They are the same thing',
      'IaC uses YAML; CaC uses JSON',
    ],
    correctAnswer: 0,
    explanation:
      'IaC manages infrastructure resources (VMs, networks, storage) while CaC manages application and system configuration. GitOps often encompasses both.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'medium',
    tags: ['iac', 'cac', 'comparison'],
  },
  {
    id: 'cgoa-018',
    question: 'How does GitOps relate to DevOps?',
    options: [
      'GitOps replaces DevOps',
      'GitOps is a specific implementation pattern for DevOps practices',
      'They are unrelated',
      'DevOps is a subset of GitOps',
    ],
    correctAnswer: 1,
    explanation:
      'GitOps is an implementation pattern that embodies DevOps principles. It provides a concrete way to achieve DevOps goals like automation, collaboration, and continuous delivery.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'medium',
    tags: ['devops', 'relationship', 'practices'],
  },
  {
    id: 'cgoa-019',
    question: 'What is the relationship between GitOps and CI/CD?',
    options: [
      'GitOps replaces CI/CD',
      'GitOps is the CD part; CI focuses on building and testing',
      'They must be used together or not at all',
      'CI/CD is only for non-GitOps workflows',
    ],
    correctAnswer: 1,
    explanation:
      'GitOps provides the CD (Continuous Delivery/Deployment) mechanism. CI (Continuous Integration) still handles building, testing, and producing artifacts. They complement each other.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'medium',
    tags: ['ci', 'cd', 'continuous-delivery'],
  },
  {
    id: 'cgoa-020',
    question: 'What is DevSecOps and how does GitOps support it?',
    options: [
      'Integrating security into DevOps, supported by GitOps audit trails and PR reviews',
      'A separate process from GitOps',
      'An alternative to GitOps',
      'A security tool for Git',
    ],
    correctAnswer: 0,
    explanation:
      'DevSecOps integrates security into DevOps. GitOps supports it through audit trails, code review via PRs, policy enforcement, and security scanning in the Git workflow.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'hard',
    tags: ['devsecops', 'security', 'practices'],
  },
  {
    id: 'cgoa-021',
    question: 'What is the difference between Continuous Delivery and Continuous Deployment?',
    options: [
      'Delivery requires manual approval; Deployment is fully automated to production',
      'They are the same thing',
      'Deployment is slower than Delivery',
      'Delivery only works with GitOps',
    ],
    correctAnswer: 0,
    explanation:
      'Continuous Delivery ensures code is always deployable but may require manual approval. Continuous Deployment automatically deploys every change that passes tests to production.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'medium',
    tags: ['continuous-delivery', 'continuous-deployment', 'comparison'],
  },

  // ============================================
  // DOMAIN: GitOps Patterns (20%)
  // ============================================
  {
    id: 'cgoa-022',
    question: 'What is a canary deployment in progressive delivery?',
    options: [
      'Deploying to a test environment first',
      'Deploying during off-peak hours',
      'Using feature flags',
      'Gradually rolling out to a small percentage of users before full rollout',
    ],
    correctAnswer: 3,
    explanation:
      'Canary deployment gradually rolls out changes to a small subset of users first, monitors for issues, then progressively increases the rollout percentage.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['canary', 'progressive-delivery', 'deployment'],
  },
  {
    id: 'cgoa-023',
    question: 'What is a blue-green deployment?',
    options: [
      'Color-coding different environments',
      'Running two identical environments, switching traffic between them',
      'A testing strategy',
      'Using two Git branches',
    ],
    correctAnswer: 1,
    explanation:
      'Blue-green deployment maintains two identical environments. Traffic is switched from blue (current) to green (new) once the new version is verified, enabling instant rollback.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['blue-green', 'deployment', 'patterns'],
  },
  {
    id: 'cgoa-024',
    question: 'What is the difference between pull-based and event-driven GitOps?',
    options: [
      'Pull is slower than event-driven',
      'Pull continuously polls; event-driven responds to webhooks/notifications',
      'Event-driven is more secure',
      'They cannot be combined',
    ],
    correctAnswer: 1,
    explanation:
      'Pull-based GitOps continuously polls the Git repository. Event-driven responds to webhooks or notifications when changes occur. Many tools support both approaches.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/concepts/)',
    domain: 'GitOps Patterns',
    difficulty: 'hard',
    tags: ['pull-based', 'event-driven', 'patterns'],
  },
  {
    id: 'cgoa-025',
    question: 'What is the "in-cluster" reconciler pattern?',
    options: [
      'The reconciler runs on a separate server',
      'The GitOps operator runs inside the target Kubernetes cluster',
      'All resources must be in one namespace',
      'Using kubectl from within pods',
    ],
    correctAnswer: 1,
    explanation:
      'In the in-cluster pattern, the GitOps operator (like ArgoCD or Flux) runs inside the Kubernetes cluster it manages, pulling state and applying it locally.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/concepts/)',
    domain: 'GitOps Patterns',
    difficulty: 'hard',
    tags: ['in-cluster', 'architecture', 'patterns'],
  },
  {
    id: 'cgoa-026',
    question: 'What is the "hub and spoke" or "external reconciler" pattern?',
    options: [
      'A central GitOps operator manages multiple target clusters',
      'Using Git as the central hub',
      'Load balancing between clusters',
      'Each cluster has its own GitOps operator',
    ],
    correctAnswer: 0,
    explanation:
      'The hub and spoke pattern has a central GitOps operator (hub) that manages multiple target clusters (spokes), useful for multi-cluster environments.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/)',
    domain: 'GitOps Patterns',
    difficulty: 'hard',
    tags: ['hub-spoke', 'multi-cluster', 'architecture'],
  },
  {
    id: 'cgoa-027',
    question: 'What is the recommended pattern for managing multiple environments in GitOps?',
    options: [
      'One repository per environment',
      'Using branches for environments (e.g., dev, staging, prod)',
      'Directories or overlays within a single repository',
      'Separate Git servers for each environment',
    ],
    correctAnswer: 2,
    explanation:
      'Using directories or overlays (like Kustomize) within a single repository is recommended. Branch-per-environment can lead to merge conflicts and drift.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/guides/repository-structure/)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['environments', 'repository-structure', 'best-practices'],
  },

  // ============================================
  // DOMAIN: Tooling (14%)
  // ============================================
  {
    id: 'cgoa-028',
    question: 'What is ArgoCD?',
    options: [
      'A declarative GitOps continuous delivery tool for Kubernetes',
      'A Git repository hosting service',
      'A CI tool for building containers',
      'A monitoring tool',
    ],
    correctAnswer: 0,
    explanation:
      'ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. It continuously monitors Git repositories and syncs desired state to Kubernetes clusters.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['argocd', 'tools', 'kubernetes'],
  },
  {
    id: 'cgoa-029',
    question: 'What is Flux?',
    options: [
      'A container runtime',
      'A monitoring solution',
      'A GitOps toolkit for keeping Kubernetes clusters in sync with Git',
      'A CI pipeline tool',
    ],
    correctAnswer: 2,
    explanation:
      'Flux is a set of continuous delivery tools that keeps Kubernetes clusters in sync with Git sources. It is a CNCF graduated project.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['flux', 'tools', 'kubernetes'],
  },
  {
    id: 'cgoa-030',
    question: 'What manifest formats does ArgoCD support?',
    options: [
      'Only YAML files',
      'Helm, Kustomize, Jsonnet, and plain YAML/JSON',
      'Only Helm charts',
      'Only JSON files',
    ],
    correctAnswer: 1,
    explanation:
      'ArgoCD supports multiple manifest formats including Helm charts, Kustomize overlays, Jsonnet, and plain Kubernetes YAML/JSON manifests.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/application_sources/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['argocd', 'manifests', 'configuration'],
  },
  {
    id: 'cgoa-031',
    question: 'What is Kustomize used for in GitOps?',
    options: [
      'Building container images',
      'Running security scans',
      'Managing Git repositories',
      'Template-free customization of Kubernetes manifests',
    ],
    correctAnswer: 3,
    explanation:
      'Kustomize provides template-free customization of Kubernetes manifests using overlays and patches. It is built into kubectl and widely used with GitOps tools.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/components/kustomize/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['kustomize', 'manifests', 'customization'],
  },
  {
    id: 'cgoa-032',
    question: 'How can GitOps tools integrate with notification systems?',
    options: [
      'They cannot integrate with external systems',
      'Only through email',
      'By writing to log files',
      'Through webhooks, Slack integrations, and notification controllers',
    ],
    correctAnswer: 3,
    explanation:
      'GitOps tools like ArgoCD and Flux support integrations with Slack, Microsoft Teams, webhooks, and other notification systems to alert on sync status and events.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/components/notification/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['notifications', 'integrations', 'observability'],
  },
  {
    id: 'cgoa-033',
    question: 'What is Argo Rollouts used for?',
    options: [
      'Building container images',
      'Progressive delivery with canary and blue-green deployments',
      'Managing Git repositories',
      'Monitoring application metrics',
    ],
    correctAnswer: 1,
    explanation:
      'Argo Rollouts is a Kubernetes controller that provides advanced deployment strategies like canary releases, blue-green deployments, and automated rollbacks.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['argo-rollouts', 'progressive-delivery', 'deployment'],
  },
  {
    id: 'cgoa-034',
    question: 'What are sealed secrets used for in GitOps?',
    options: [
      'Encrypting Git repositories',
      'Safely storing encrypted secrets in Git that only the cluster can decrypt',
      'Signing Git commits',
      'Access control for Git',
    ],
    correctAnswer: 1,
    explanation:
      'Sealed Secrets encrypt Kubernetes secrets so they can be safely stored in Git. Only the cluster controller can decrypt them, enabling secrets in GitOps workflows.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/guides/sealed-secrets/)',
    domain: 'Tooling',
    difficulty: 'hard',
    tags: ['sealed-secrets', 'security', 'secrets'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - GitOps Terminology
  // ============================================
  {
    id: 'cgoa-035',
    question: 'What is an "agent" in GitOps terminology?',
    options: [
      'Software that runs in the cluster and performs reconciliation',
      'A human operator managing the cluster',
      'A Git repository webhook',
      'A CI/CD pipeline stage',
    ],
    correctAnswer: 0,
    explanation:
      'In GitOps, an agent is software that runs in or has access to the target environment, continuously reconciling the actual state with the desired state from Git.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['agent', 'reconciliation', 'concepts'],
  },
  {
    id: 'cgoa-036',
    question: 'What is "idempotency" in the context of GitOps?',
    options: [
      'Running operations in parallel',
      'Automatic scaling of resources',
      'Encrypting configuration data',
      'Applying the same configuration multiple times produces the same result',
    ],
    correctAnswer: 3,
    explanation:
      'Idempotency means applying the same desired state multiple times has the same effect as applying it once. This is essential for reliable reconciliation loops.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Terminology',
    difficulty: 'hard',
    tags: ['idempotency', 'reconciliation', 'concepts'],
  },
  {
    id: 'cgoa-037',
    question: 'What is "imperative" configuration in contrast to declarative?',
    options: [
      'Configuration stored in YAML files',
      'Configuration that cannot be changed',
      'Specifying step-by-step commands to achieve a state',
      'Using variables in configuration',
    ],
    correctAnswer: 2,
    explanation:
      'Imperative configuration specifies HOW to achieve a state through step-by-step commands. GitOps favors declarative (WHAT the state should be) over imperative approaches.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['imperative', 'declarative', 'comparison'],
  },
  {
    id: 'cgoa-038',
    question: 'What is "convergence" in GitOps?',
    options: [
      'Merging multiple Git branches',
      'The process of the actual state moving toward the desired state',
      'Combining multiple clusters',
      'Reducing the number of configuration files',
    ],
    correctAnswer: 1,
    explanation:
      'Convergence is when the actual system state moves toward and eventually matches the desired state defined in Git through the reconciliation process.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'hard',
    tags: ['convergence', 'reconciliation', 'concepts'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - GitOps Principles
  // ============================================
  {
    id: 'cgoa-039',
    question: 'What is the benefit of "immutable" infrastructure in GitOps?',
    options: [
      'Faster deployments',
      'Lower costs',
      'Reproducibility, consistency, and easier rollbacks',
      'Simpler configuration',
    ],
    correctAnswer: 2,
    explanation:
      'Immutable infrastructure means components are replaced rather than modified. This ensures reproducibility, prevents configuration drift, and makes rollbacks straightforward.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['immutable', 'infrastructure', 'benefits'],
  },
  {
    id: 'cgoa-040',
    question: 'Why is Git history important for GitOps compliance?',
    options: [
      'It helps with code formatting',
      'It speeds up deployments',
      'It provides a complete audit trail of who changed what and when',
      'It reduces storage requirements',
    ],
    correctAnswer: 2,
    explanation:
      'Git history provides an immutable audit trail showing every change, who made it, when, and why (through commit messages). This is crucial for compliance and security audits.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['audit', 'compliance', 'git-history'],
  },
  {
    id: 'cgoa-041',
    question: 'What happens when someone makes a manual change to the cluster in GitOps?',
    options: [
      'The GitOps agent will revert it to match the desired state in Git',
      'The change is automatically saved to Git',
      'The change persists permanently',
      'An alert is sent but nothing else',
    ],
    correctAnswer: 0,
    explanation:
      'GitOps agents continuously reconcile actual state with Git. Manual changes (drift) are detected and reverted to ensure the cluster always matches the desired state in Git.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/concepts/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['drift', 'reconciliation', 'self-healing'],
  },
  {
    id: 'cgoa-042',
    question: 'What is "self-healing" in GitOps?',
    options: [
      'Automatic bug fixes in code',
      'Automatic scaling during high load',
      'Automatic certificate renewal',
      'Automatically restoring the system to the desired state when drift occurs',
    ],
    correctAnswer: 3,
    explanation:
      'Self-healing means the GitOps system automatically detects and corrects drift, restoring the actual state to match the desired state without manual intervention.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/concepts/)',
    domain: 'GitOps Principles',
    difficulty: 'medium',
    tags: ['self-healing', 'reconciliation', 'automation'],
  },
  {
    id: 'cgoa-043',
    question: 'How does GitOps improve disaster recovery?',
    options: [
      'By providing automatic backups',
      'By having the entire system state in Git, enabling quick recreation',
      'By preventing all disasters',
      'By alerting before failures',
    ],
    correctAnswer: 1,
    explanation:
      'With GitOps, the entire system state is stored in Git. In a disaster, you can recreate the entire environment by pointing a GitOps agent at the repository.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'GitOps Principles',
    difficulty: 'hard',
    tags: ['disaster-recovery', 'reproducibility', 'benefits'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Related Practices
  // ============================================
  {
    id: 'cgoa-044',
    question: 'What is Policy as Code in relation to GitOps?',
    options: [
      'Writing policies in YAML format',
      'A type of access control',
      'Defining and enforcing policies through code stored in Git',
      'Documentation for policies',
    ],
    correctAnswer: 2,
    explanation:
      'Policy as Code defines policies in code format, stored in Git alongside application configuration. Tools like OPA/Gatekeeper can enforce these policies in GitOps workflows.\n\nLearn more: [Documentación oficial](https://fluxcd.io/flux/security/)',
    domain: 'Related Practices',
    difficulty: 'hard',
    tags: ['policy-as-code', 'governance', 'opa'],
  },
  {
    id: 'cgoa-045',
    question: 'How does GitOps relate to Platform Engineering?',
    options: [
      'They are competing approaches',
      'Platform Engineering replaces GitOps',
      'They cannot be used together',
      'GitOps provides the delivery mechanism for platform capabilities',
    ],
    correctAnswer: 3,
    explanation:
      'GitOps is often used as the delivery mechanism in Platform Engineering. The platform team provisions capabilities that developers consume through Git-based workflows.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'hard',
    tags: ['platform-engineering', 'devex', 'practices'],
  },
  {
    id: 'cgoa-046',
    question: 'What is the relationship between GitOps and Site Reliability Engineering (SRE)?',
    options: [
      'GitOps replaces SRE practices',
      'GitOps supports SRE goals of reliability, reproducibility, and automation',
      'SRE teams cannot use GitOps',
      'They address completely different concerns',
    ],
    correctAnswer: 1,
    explanation:
      'GitOps supports SRE practices by providing reproducible deployments, automated reconciliation, easy rollbacks, and audit trails - all contributing to system reliability.\n\nLearn more: [Documentación oficial](https://www.gitops.tech/)',
    domain: 'Related Practices',
    difficulty: 'medium',
    tags: ['sre', 'reliability', 'practices'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - GitOps Patterns
  // ============================================
  {
    id: 'cgoa-047',
    question: 'What is the "mono-repo" vs "multi-repo" pattern in GitOps?',
    options: [
      'Using one or multiple Git branches',
      'Using Git vs other version control',
      'Storing all config in one repo vs separate repos per team/app/environment',
      'Private vs public repositories',
    ],
    correctAnswer: 2,
    explanation:
      'Mono-repo stores all configuration in a single repository. Multi-repo separates configuration into multiple repositories by team, application, or environment. Each has trade-offs.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/guides/repository-structure/)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['mono-repo', 'multi-repo', 'repository-structure'],
  },
  {
    id: 'cgoa-048',
    question: 'What is the "app of apps" pattern in ArgoCD?',
    options: [
      'Deploying multiple replicas of an application',
      'Running multiple ArgoCD instances',
      'A parent Application that manages other ArgoCD Applications',
      'Grouping applications by namespace',
    ],
    correctAnswer: 2,
    explanation:
      'The "app of apps" pattern uses a parent ArgoCD Application to manage and deploy child Applications, enabling hierarchical organization and bootstrap of multiple apps.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/#app-of-apps)',
    domain: 'GitOps Patterns',
    difficulty: 'hard',
    tags: ['app-of-apps', 'argocd', 'patterns'],
  },
  {
    id: 'cgoa-049',
    question: 'What is "ApplicationSet" in ArgoCD?',
    options: [
      'A collection of Kubernetes deployments',
      'A backup of application configurations',
      'A set of Helm charts',
      'A controller that automatically generates ArgoCD Applications from templates',
    ],
    correctAnswer: 3,
    explanation:
      'ApplicationSet is an ArgoCD controller that generates Applications from templates using generators (Git, clusters, lists). It enables managing many apps with reduced repetition.\n\nLearn more: [Documentación oficial](https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/)',
    domain: 'GitOps Patterns',
    difficulty: 'hard',
    tags: ['applicationset', 'argocd', 'automation'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Tooling
  // ============================================
  {
    id: 'cgoa-050',
    question: 'What is SOPS (Secrets OPerationS) used for in GitOps?',
    options: [
      'Managing Git permissions',
      'Optimizing deployment speed',
      'Managing service accounts',
      'Encrypting secrets in files while keeping keys/structure visible',
    ],
    correctAnswer: 3,
    explanation:
      'SOPS encrypts secret values while keeping the file structure and keys visible. This allows secrets to be stored in Git and reviewed without exposing sensitive values.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/guides/mozilla-sops/)',
    domain: 'Tooling',
    difficulty: 'hard',
    tags: ['sops', 'secrets', 'encryption'],
  },
  {
    id: 'cgoa-051',
    question: 'What is the purpose of Flux Source Controller?',
    options: [
      'Managing source code repositories',
      'Compiling source code',
      'Fetching and storing artifacts from Git repos, Helm repos, and S3 buckets',
      'Managing CI pipelines',
    ],
    correctAnswer: 2,
    explanation:
      'The Flux Source Controller acquires artifacts from various sources (Git, Helm repos, S3) and stores them locally for other Flux controllers to use in reconciliation.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/components/source/)',
    domain: 'Tooling',
    difficulty: 'hard',
    tags: ['flux', 'source-controller', 'architecture'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - cgoa-052 to cgoa-060
  // ============================================
  {
    id: 'cgoa-052',
    question: 'What is the "Recreate" deployment pattern in GitOps?',
    options: [
      'Creating a new Git repository for each deployment',
      'Terminating all existing pods before deploying new ones',
      'Recreating the entire cluster for updates',
      'Building new container images from scratch',
    ],
    correctAnswer: 1,
    explanation:
      'The Recreate deployment pattern terminates all existing pods before creating new ones. This causes downtime but ensures no two versions run simultaneously, useful for incompatible updates.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['recreate', 'deployment-strategy', 'patterns'],
  },
  {
    id: 'cgoa-053',
    question: 'What is the "Rolling Update" deployment pattern?',
    options: [
      'A strategy that updates all pods simultaneously',
      'A manual rollback procedure',
      'A strategy that gradually replaces old pods with new ones while maintaining availability',
      'A pattern for updating Git branches',
    ],
    correctAnswer: 2,
    explanation:
      'Rolling Update gradually replaces old pods with new ones, ensuring zero downtime. Parameters like maxSurge and maxUnavailable control the rollout speed. This is the default Kubernetes deployment strategy.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#rolling-update-deployment)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['rolling-update', 'deployment-strategy', 'zero-downtime'],
  },
  {
    id: 'cgoa-054',
    question: 'What is "Shadow/Mirroring" deployment strategy in progressive delivery?',
    options: [
      'Deploying to a backup cluster',
      'Creating duplicate Git repositories',
      'Sending a copy of production traffic to a new version without affecting user responses',
      'Mirroring configuration between environments',
    ],
    correctAnswer: 2,
    explanation:
      'Shadow (or Traffic Mirroring) deployment sends a copy of real production traffic to a new version for testing, while only the current version serves actual user responses. This validates behavior with real traffic risk-free.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/traffic-management/)',
    domain: 'GitOps Patterns',
    difficulty: 'hard',
    tags: ['shadow', 'mirroring', 'progressive-delivery', 'traffic-management'],
  },
  {
    id: 'cgoa-055',
    question: 'What is A/B Testing deployment strategy in GitOps?',
    options: [
      'Testing between Git branches A and B',
      'Routing different user segments to different versions based on headers or criteria',
      'Alternating deployments between two clusters',
      'Running automated tests A and B in sequence',
    ],
    correctAnswer: 1,
    explanation:
      'A/B Testing routes specific user segments to different application versions based on headers, cookies, or other criteria. This enables feature experimentation and data-driven decisions about which version performs better.\n\nLearn more: [Documentación oficial](https://argo-rollouts.readthedocs.io/en/stable/features/traffic-management/)',
    domain: 'GitOps Patterns',
    difficulty: 'medium',
    tags: ['ab-testing', 'progressive-delivery', 'experimentation'],
  },
  {
    id: 'cgoa-056',
    question: 'How can Jenkins X serve as a reconciliation engine in GitOps workflows?',
    options: [
      'By providing a web UI for managing clusters',
      'By automatically promoting versions through environments via Git commits',
      'By replacing Git as the source of truth',
      'By manually triggering deployments',
    ],
    correctAnswer: 1,
    explanation:
      'Jenkins X automates GitOps by promoting application versions through environments (dev, staging, production) via automated Git commits. It creates pull requests for promotions and maintains environment state in Git.\n\nLearn more: [Documentación oficial](https://jenkins-x.io/v3/devops/gitops/)',
    domain: 'Related Practices',
    difficulty: 'hard',
    tags: ['jenkins-x', 'reconciliation', 'promotion', 'automation'],
  },
  {
    id: 'cgoa-057',
    question: 'What is an OCI Registry as a state store in GitOps?',
    options: [
      'A registry for Git repositories',
      'A database for OCI configurations',
      'A monitoring solution for containers',
      'A container image registry used to store GitOps artifacts and manifests',
    ],
    correctAnswer: 3,
    explanation:
      'OCI (Open Container Initiative) registries can store not just container images but also GitOps artifacts like Helm charts and Kustomize configurations. Flux supports OCI registries as sources, providing an alternative to Git.\n\nLearn more: [Documentación oficial](https://fluxcd.io/docs/cheatsheets/oci-artifacts/)',
    domain: 'Tooling',
    difficulty: 'hard',
    tags: ['oci', 'state-store', 'registry', 'flux'],
  },
  {
    id: 'cgoa-058',
    question: 'What are DORA Metrics and how do they relate to GitOps?',
    options: [
      'Security metrics for container scanning',
      'Metrics for Git repository size',
      'DevOps Research and Assessment metrics measuring deployment frequency, lead time, change failure rate, and MTTR',
      'Metrics for monitoring cluster health',
    ],
    correctAnswer: 2,
    explanation:
      'DORA Metrics (Deployment Frequency, Lead Time for Changes, Change Failure Rate, Mean Time to Recovery) measure software delivery performance. GitOps practices typically improve these metrics through automated, auditable deployments.\n\nLearn more: [Documentación oficial](https://dora.dev/guides/dora-metrics-four-keys/)',
    domain: 'Tooling',
    difficulty: 'medium',
    tags: ['dora', 'metrics', 'performance', 'devops'],
  },
  {
    id: 'cgoa-059',
    question: 'What is Keptn and how does it support GitOps?',
    options: [
      'A cloud-native application lifecycle orchestration tool for progressive delivery and automated operations',
      'A Git hosting platform',
      'A container runtime',
      'A logging aggregation tool',
    ],
    correctAnswer: 0,
    explanation:
      'Keptn is a CNCF project that orchestrates cloud-native application lifecycle. It supports GitOps through progressive delivery, automated quality gates, and remediation workflows based on SLO evaluation.\n\nLearn more: [Documentación oficial](https://keptn.sh/)',
    domain: 'Tooling',
    difficulty: 'hard',
    tags: ['keptn', 'progressive-delivery', 'automation', 'slo'],
  },
  {
    id: 'cgoa-060',
    question: 'What is a "GitOps Managed Software System" according to OpenGitOps?',
    options: [
      'Any system that uses Git for version control',
      'A CI/CD pipeline configuration',
      'A monitoring dashboard for Git repositories',
      'A target system whose desired state is defined declaratively in Git and managed by software agents',
    ],
    correctAnswer: 3,
    explanation:
      'A GitOps Managed Software System is a target system (like a Kubernetes cluster) whose desired state is defined declaratively, stored in a versioned and immutable state store, and managed by software agents that continuously reconcile actual state with desired state.\n\nLearn more: [Documentación oficial](https://opengitops.dev/)',
    domain: 'GitOps Terminology',
    difficulty: 'medium',
    tags: ['managed-system', 'opengitops', 'terminology', 'definition'],
  },
];

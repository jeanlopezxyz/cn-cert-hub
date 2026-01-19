/**
 * KCA - Kyverno Certified Associate
 * Practice Questions
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: kca-XXX (e.g., kca-001, kca-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Writing Policies (32%)
 * - Fundamentals of Kyverno (18%)
 * - Installation, Configuration, and Upgrades (18%)
 * - Kyverno CLI (12%)
 * - Applying Policies (10%)
 * - Policy Management (10%)
 */

import type { Question } from '@/types/quiz';

export const KCA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Writing Policies (32%)
  // ============================================
  {
    id: 'kca-001',
    question: 'What are the main types of Kyverno policy rules?',
    options: [
      'Validate, Mutate, Generate, VerifyImages',
      'Create, Read, Update, Delete',
      'Allow, Deny, Audit',
      'Pod, Service, Deployment',
    ],
    correctAnswer: 0,
    explanation:
      'Kyverno supports four main rule types: Validate (enforce constraints), Mutate (modify resources), Generate (create new resources), and VerifyImages (verify container image signatures).\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['rule-types', 'fundamentals', 'policies'],
  },
  {
    id: 'kca-002',
    question: 'What is the purpose of preconditions in Kyverno policies?',
    options: [
      'Define prerequisites for installing Kyverno',
      'Specify required Kubernetes version',
      'Configure policy priority',
      'Add conditional logic to determine if a rule should be applied',
    ],
    correctAnswer: 3,
    explanation:
      'Preconditions allow adding conditional logic using JMESPath expressions to determine if a rule should be evaluated. Rules are skipped if preconditions are not met.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['preconditions', 'conditional', 'jmespath'],
  },
  {
    id: 'kca-003',
    question: 'What is a mutation rule in Kyverno?',
    options: [
      'A rule that blocks invalid resources',
      'A rule that creates new resources',
      'A rule that deletes resources',
      'A rule that modifies resources before admission',
    ],
    correctAnswer: 3,
    explanation:
      'Mutation rules modify incoming resources before they are admitted. Common uses include adding labels, injecting sidecars, or setting defaults.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['mutation', 'modify', 'admission'],
  },
  {
    id: 'kca-004',
    question: 'What is a generate rule in Kyverno?',
    options: [
      'Creates new Kubernetes resources when a trigger resource is created',
      'Generates policy reports',
      'Generates random values',
      'Creates new policies automatically',
    ],
    correctAnswer: 0,
    explanation:
      'Generate rules automatically create new resources (ConfigMaps, Secrets, NetworkPolicies, etc.) when a trigger resource is created, updated, or deleted.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['generate', 'create-resources', 'automation'],
  },
  {
    id: 'kca-005',
    question: 'What is the verifyImages rule used for?',
    options: [
      'Checking image file formats',
      'Validating image size',
      'Testing image pull speed',
      'Verifying container image signatures and attestations',
    ],
    correctAnswer: 3,
    explanation:
      'VerifyImages rules verify container image signatures using Sigstore/cosign or Notary, ensuring only signed and trusted images are deployed.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['verify-images', 'signatures', 'supply-chain'],
  },
  {
    id: 'kca-006',
    question: 'What is a JSON patch in Kyverno mutation rules?',
    options: [
      'A precise way to modify specific parts of a resource using RFC 6902 operations',
      'A bug fix for JSON files',
      'A file format conversion',
      'A compression algorithm',
    ],
    correctAnswer: 0,
    explanation:
      'JSON Patch (RFC 6902) provides precise operations (add, remove, replace) to modify specific parts of resources, useful when strategic merge patch is insufficient.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['json-patch', 'mutation', 'rfc6902'],
  },
  {
    id: 'kca-007',
    question: 'What are autogen rules in Kyverno?',
    options: [
      'Automatically generated documentation',
      'Machine learning generated policies',
      'Auto-scaling rules',
      'Auto-generated rules for Pod controllers (Deployments, StatefulSets, etc.)',
    ],
    correctAnswer: 3,
    explanation:
      'Autogen automatically creates additional rules for Pod controllers. A policy targeting Pods will auto-generate rules for Deployments, StatefulSets, DaemonSets, Jobs, and CronJobs.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['autogen', 'pod-controllers', 'automation'],
  },
  {
    id: 'kca-008',
    question: 'How do you use variables in Kyverno policies?',
    options: [
      'Using $VAR syntax',
      'Using JMESPath expressions with {{}} syntax',
      'Using %variable% syntax',
      'Variables are not supported',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno uses JMESPath expressions enclosed in {{}} to access request data, resource fields, and context variables (e.g., {{request.object.metadata.name}}).\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['variables', 'jmespath', 'expressions'],
  },
  {
    id: 'kca-009',
    question: 'What is CEL (Common Expression Language) support in Kyverno?',
    options: [
      'A phone company integration',
      'A logging format',
      'An alternative to JMESPath for writing validation expressions',
      'A certificate management feature',
    ],
    correctAnswer: 2,
    explanation:
      'Kyverno supports CEL as an alternative to JMESPath for validation expressions. CEL is the same language used in Kubernetes ValidatingAdmissionPolicy.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['cel', 'expressions', 'validation'],
  },
  {
    id: 'kca-010',
    question: 'What is a cleanup policy in Kyverno?',
    options: [
      'Removes old policy versions',
      'Cleans up container images',
      'Removes unused namespaces',
      'Automatically deletes resources based on conditions or schedules',
    ],
    correctAnswer: 3,
    explanation:
      'Cleanup policies automatically delete resources matching specific criteria, either immediately when conditions are met or on a scheduled basis using cron expressions.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['cleanup', 'delete', 'automation'],
  },

  // ============================================
  // DOMAIN: Fundamentals of Kyverno (18%)
  // ============================================
  {
    id: 'kca-011',
    question: 'What is Kyverno?',
    options: [
      'A container runtime',
      'A Kubernetes-native policy engine',
      'A service mesh',
      'A monitoring tool',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno is a Kubernetes-native policy engine designed for Kubernetes. Policies are managed as Kubernetes resources without requiring a new language.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/introduction/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['kyverno', 'policy-engine', 'fundamentals'],
  },
  {
    id: 'kca-012',
    question: 'How does Kyverno integrate with Kubernetes?',
    options: [
      'As a Kubernetes admission controller using webhooks',
      'As a separate external service',
      'By modifying the Kubernetes API server',
      'Through kubectl plugins only',
    ],
    correctAnswer: 0,
    explanation:
      'Kyverno runs as a dynamic admission controller, using validating and mutating webhooks to intercept API requests before resources are persisted.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/introduction/#how-kyverno-works)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['admission-controller', 'webhooks', 'integration'],
  },
  {
    id: 'kca-013',
    question: 'What is the difference between ClusterPolicy and Policy in Kyverno?',
    options: [
      'They are identical',
      'ClusterPolicy is deprecated',
      'Policy is for production; ClusterPolicy is for testing',
      'ClusterPolicy applies cluster-wide; Policy applies to a specific namespace',
    ],
    correctAnswer: 3,
    explanation:
      'ClusterPolicy is cluster-scoped and can apply to resources across all namespaces. Policy is namespace-scoped and only applies to resources in its namespace.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['clusterpolicy', 'policy', 'scope'],
  },
  {
    id: 'kca-014',
    question: 'What happens when a validation rule fails in enforce mode?',
    options: [
      'The resource is created with a warning',
      'Only a report is generated',
      'The resource creation/update is blocked',
      'The resource is created then deleted',
    ],
    correctAnswer: 2,
    explanation:
      'In enforce mode, when validation fails, the API request is rejected with an error message. In audit mode, the resource is allowed but a policy report is generated.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['enforce', 'validation', 'admission'],
  },
  {
    id: 'kca-015',
    question: 'What is a background scan in Kyverno?',
    options: [
      'Evaluating policies against existing resources in the cluster',
      'Scanning for vulnerabilities',
      'Running policies in a separate thread',
      'Monitoring network traffic',
    ],
    correctAnswer: 0,
    explanation:
      'Background scans evaluate policies against existing resources that were created before the policy. This generates policy reports for pre-existing resources.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'hard',
    tags: ['background-scan', 'existing-resources', 'reports'],
  },

  // ============================================
  // DOMAIN: Installation, Configuration, and Upgrades (18%)
  // ============================================
  {
    id: 'kca-016',
    question: 'What is the recommended way to install Kyverno?',
    options: [
      'kubectl apply from a URL',
      'Manual YAML files only',
      'Operator pattern',
      'Helm chart',
    ],
    correctAnswer: 3,
    explanation:
      'Helm is the recommended installation method for Kyverno, providing easy configuration, upgrades, and customization of the deployment.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/methods/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'medium',
    tags: ['installation', 'helm', 'setup'],
  },
  {
    id: 'kca-017',
    question: 'What CRDs does Kyverno install?',
    options: [
      'Only Policy and ClusterPolicy',
      'Policy, ClusterPolicy, PolicyReport, ClusterPolicyReport, and others',
      'Only PolicyReport',
      'No CRDs are used',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno installs several CRDs including Policy, ClusterPolicy, PolicyReport, ClusterPolicyReport, PolicyException, ClusterCleanupPolicy, and more.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'medium',
    tags: ['crds', 'installation', 'resources'],
  },
  {
    id: 'kca-018',
    question: 'How do you configure Kyverno for high availability?',
    options: [
      'Deploy multiple replicas and configure leader election',
      'HA is not supported',
      'Use multiple clusters',
      'Enable HA flag in policies',
    ],
    correctAnswer: 0,
    explanation:
      'Kyverno supports high availability by running multiple replicas with leader election for coordination. This ensures policy enforcement continues if one replica fails.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/high-availability/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'hard',
    tags: ['high-availability', 'replicas', 'production'],
  },
  {
    id: 'kca-019',
    question: 'How are Kyverno controller flags configured?',
    options: [
      'Through ConfigMaps only',
      'Environment variables only',
      'They cannot be configured',
      'Through container arguments in the deployment or Helm values',
    ],
    correctAnswer: 3,
    explanation:
      'Kyverno controller flags can be set via container arguments in the deployment spec or through Helm values, controlling features like auto-gen, background scanning, and webhooks.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/customization/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'medium',
    tags: ['configuration', 'flags', 'helm'],
  },
  {
    id: 'kca-020',
    question: 'What should you check before upgrading Kyverno?',
    options: [
      'Nothing special is needed',
      'Only the Kubernetes version',
      'Only the cluster size',
      'Breaking changes, CRD updates, and policy compatibility',
    ],
    correctAnswer: 3,
    explanation:
      'Before upgrading, review release notes for breaking changes, CRD schema changes, deprecated features, and test policy compatibility with the new version.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/upgrading/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'hard',
    tags: ['upgrades', 'compatibility', 'planning'],
  },

  // ============================================
  // DOMAIN: Kyverno CLI (12%)
  // ============================================
  {
    id: 'kca-021',
    question: 'What does the "kyverno apply" command do?',
    options: [
      'Installs Kyverno',
      'Applies policies to a cluster',
      'Tests policies against resources without a cluster',
      'Generates policy templates',
    ],
    correctAnswer: 2,
    explanation:
      'kyverno apply tests policies against resources locally without requiring a cluster. It shows what the policy results would be for given resources.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/kyverno-cli/usage/apply/)',
    domain: 'Kyverno CLI',
    difficulty: 'medium',
    tags: ['cli', 'apply', 'testing'],
  },
  {
    id: 'kca-022',
    question: 'What is the "kyverno test" command used for?',
    options: [
      'Running policy unit tests defined in test files',
      'Testing cluster connectivity',
      'Testing Kubernetes API',
      'Performance testing',
    ],
    correctAnswer: 0,
    explanation:
      'kyverno test runs unit tests for policies using test manifest files that define expected outcomes, enabling CI/CD integration and policy validation.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/kyverno-cli/usage/test/)',
    domain: 'Kyverno CLI',
    difficulty: 'medium',
    tags: ['cli', 'test', 'unit-testing'],
  },
  {
    id: 'kca-023',
    question: 'What is the "kyverno jp" command?',
    options: [
      'A Japanese language setting',
      'Jump to policy command',
      'JSON pretty print',
      'A tool for testing and debugging JMESPath expressions',
    ],
    correctAnswer: 3,
    explanation:
      'kyverno jp is a JMESPath playground for testing and debugging JMESPath expressions used in Kyverno policies, helping write correct variable expressions.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/kyverno-cli/usage/jp/)',
    domain: 'Kyverno CLI',
    difficulty: 'hard',
    tags: ['cli', 'jmespath', 'debugging'],
  },
  {
    id: 'kca-024',
    question: 'How do you install the Kyverno CLI?',
    options: [
      'It comes with kubectl',
      'Via brew, krew, or direct binary download',
      'npm install kyverno',
      'It is not available as CLI',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno CLI can be installed via Homebrew (brew install kyverno), kubectl krew plugin manager, or by downloading the binary directly from releases.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/kyverno-cli/)',
    domain: 'Kyverno CLI',
    difficulty: 'medium',
    tags: ['cli', 'installation', 'tools'],
  },

  // ============================================
  // DOMAIN: Applying Policies (10%)
  // ============================================
  {
    id: 'kca-025',
    question: 'How do you select which resources a policy applies to?',
    options: [
      'Using match and exclude blocks with kinds, namespaces, and selectors',
      'Policies always apply to all resources',
      'Only through annotations',
      'Resource selection is not supported',
    ],
    correctAnswer: 0,
    explanation:
      'Policies use match (include) and exclude blocks to select resources based on kinds, namespaces, labels, annotations, and other criteria.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Applying Policies',
    difficulty: 'medium',
    tags: ['match', 'exclude', 'selection'],
  },
  {
    id: 'kca-026',
    question: 'What is the validationFailureAction setting?',
    options: [
      'Action taken when Kyverno fails',
      'Action for network failures',
      'Whether to enforce (block) or audit (allow with report) policy violations',
      'Cleanup action on failure',
    ],
    correctAnswer: 2,
    explanation:
      'validationFailureAction determines policy behavior: "enforce" blocks violating resources, "audit" allows them but generates policy reports.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Applying Policies',
    difficulty: 'medium',
    tags: ['enforce', 'audit', 'validation'],
  },
  {
    id: 'kca-027',
    question: 'Can you apply multiple rules in a single Kyverno policy?',
    options: [
      'No, only one rule per policy',
      'Only if they are the same type',
      'Only in ClusterPolicy',
      'Yes, policies can contain multiple rules',
    ],
    correctAnswer: 3,
    explanation:
      'A single Kyverno policy can contain multiple rules of different types (validate, mutate, generate). Rules are evaluated in order.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Applying Policies',
    difficulty: 'medium',
    tags: ['rules', 'multiple', 'organization'],
  },

  // ============================================
  // DOMAIN: Policy Management (10%)
  // ============================================
  {
    id: 'kca-028',
    question: 'What are Policy Reports in Kyverno?',
    options: [
      'PDF documents',
      'Kubernetes resources showing policy evaluation results',
      'Email notifications',
      'Log files',
    ],
    correctAnswer: 1,
    explanation:
      'PolicyReport and ClusterPolicyReport are Kubernetes resources that store results of policy evaluations, showing pass/fail/warn/error status for each resource.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/policy-reports/)',
    domain: 'Policy Management',
    difficulty: 'medium',
    tags: ['reports', 'status', 'monitoring'],
  },
  {
    id: 'kca-029',
    question: 'What is a PolicyException in Kyverno?',
    options: [
      'A way to exclude specific resources from policy enforcement',
      'An error in policy syntax',
      'A bug report',
      'A deprecated feature',
    ],
    correctAnswer: 0,
    explanation:
      'PolicyException allows excluding specific resources from policy enforcement based on conditions, providing a controlled way to grant exceptions.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Policy Management',
    difficulty: 'hard',
    tags: ['exceptions', 'exclusions', 'flexibility'],
  },
  {
    id: 'kca-030',
    question: 'How can you monitor Kyverno policy enforcement?',
    options: [
      'Monitoring is not available',
      'Only through kubectl logs',
      'External monitoring tools only',
      'Through Prometheus metrics, Policy Reports, and admission controller logs',
    ],
    correctAnswer: 3,
    explanation:
      'Kyverno exposes Prometheus metrics, generates Policy Reports, and logs admission decisions. These can be used for monitoring, alerting, and dashboards.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/monitoring/)',
    domain: 'Policy Management',
    difficulty: 'medium',
    tags: ['monitoring', 'metrics', 'prometheus'],
  },
  {
    id: 'kca-031',
    question: 'How do you view policy violations for existing resources?',
    options: [
      'Run kubectl get pods',
      'Query PolicyReport or ClusterPolicyReport resources',
      'Check container logs',
      'Violations are not tracked',
    ],
    correctAnswer: 1,
    explanation:
      'PolicyReport (namespaced) and ClusterPolicyReport (cluster-scoped) resources contain results from background scans showing violations for existing resources.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/policy-reports/)',
    domain: 'Policy Management',
    difficulty: 'medium',
    tags: ['reports', 'violations', 'background-scan'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Writing Policies
  // ============================================
  {
    id: 'kca-032',
    question: 'What is strategic merge patch in Kyverno mutations?',
    options: [
      'A patch management tool',
      'A Git merge strategy',
      'A method to merge changes into existing resource fields without replacing',
      'A file comparison utility',
    ],
    correctAnswer: 2,
    explanation:
      'Strategic merge patch intelligently merges mutation changes into existing fields, preserving existing values while adding or modifying specific fields.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['strategic-merge', 'mutation', 'patch'],
  },
  {
    id: 'kca-033',
    question: 'What is the purpose of the context section in Kyverno policies?',
    options: [
      'Setting environment variables',
      'Defining policy scope',
      'Configuring logging',
      'Loading external data from ConfigMaps, API calls, or variables',
    ],
    correctAnswer: 3,
    explanation:
      'The context section loads external data sources like ConfigMaps, API server queries, or image registry data that can be used in policy rules.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['context', 'external-data', 'configmaps'],
  },
  {
    id: 'kca-034',
    question: 'What are foreach loops used for in Kyverno policies?',
    options: [
      'Iterating over files',
      'Iterating over lists of items in a resource to apply rules to each',
      'Looping policy evaluation',
      'Repeating mutations',
    ],
    correctAnswer: 1,
    explanation:
      'Foreach loops iterate over lists (like containers or volumes) in a resource, allowing rules to be applied to each item individually.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['foreach', 'iteration', 'lists'],
  },
  {
    id: 'kca-035',
    question: 'What is an image verification attestation in Kyverno?',
    options: [
      'A signed statement about an image (e.g., vulnerability scan results)',
      'A certificate of image quality',
      'Image documentation',
      'Container registry authentication',
    ],
    correctAnswer: 0,
    explanation:
      'Attestations are signed statements attached to images containing metadata like SBOM, vulnerability scan results, or provenance. Kyverno can verify and enforce conditions on attestations.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['attestations', 'verify-images', 'supply-chain'],
  },
  {
    id: 'kca-036',
    question: 'What is pattern matching in Kyverno validation rules?',
    options: [
      'Regex matching only',
      'File pattern matching',
      'Log pattern matching',
      'Comparing resource fields against a defined pattern structure',
    ],
    correctAnswer: 3,
    explanation:
      'Pattern matching validates that resource fields match a specified structure. It supports wildcards, operators, and anchors for flexible matching.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['pattern', 'validation', 'matching'],
  },
  {
    id: 'kca-037',
    question: 'What are anchors in Kyverno policies?',
    options: [
      'Links to external resources',
      'Special operators that control how patterns are applied',
      'Policy dependencies',
      'HTML anchors',
    ],
    correctAnswer: 1,
    explanation:
      'Anchors like () conditional, (=) equality, (+) add-if-not-present, and (!) negation control how pattern matching and mutations are applied.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['anchors', 'operators', 'patterns'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Fundamentals of Kyverno
  // ============================================
  {
    id: 'kca-038',
    question: 'What is the audit mode in Kyverno?',
    options: [
      'A security scanning mode',
      'A logging mode',
      'A mode where violations are reported but not blocked',
      'A backup mode',
    ],
    correctAnswer: 2,
    explanation:
      'Audit mode (validationFailureAction: audit) allows violations to proceed but generates PolicyReports, useful for testing policies before enforcement.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['audit', 'mode', 'testing'],
  },
  {
    id: 'kca-039',
    question: 'What is the relationship between Kyverno and Kubernetes RBAC?',
    options: [
      'Kyverno complements RBAC by adding policy-based controls',
      'Kyverno replaces RBAC',
      'They are mutually exclusive',
      'RBAC is required to run Kyverno',
    ],
    correctAnswer: 0,
    explanation:
      'Kyverno complements RBAC. While RBAC controls who can perform actions, Kyverno controls what resources can be created and how they should be configured.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/introduction/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['rbac', 'relationship', 'security'],
  },
  {
    id: 'kca-040',
    question: 'What happens if Kyverno is unavailable when a resource is created?',
    options: [
      'Resources are always blocked',
      'Resources are always allowed',
      'Kubernetes API server crashes',
      'Behavior depends on webhook failurePolicy (Fail or Ignore)',
    ],
    correctAnswer: 3,
    explanation:
      'Webhook failurePolicy determines behavior: Fail blocks the request, Ignore allows it. Production setups typically use Fail with HA configuration.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/customization/#webhook-configurations)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'hard',
    tags: ['failurepolicy', 'webhooks', 'availability'],
  },
  {
    id: 'kca-041',
    question: 'What are the main components of a Kyverno installation?',
    options: [
      'Only the admission controller',
      'Admission controller, background controller, reports controller, and cleanup controller',
      'Web UI and database',
      'CLI only',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno consists of multiple controllers: admission (webhooks), background (scanning existing resources), reports (generating reports), and cleanup (cleanup policies).\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/introduction/#components)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'hard',
    tags: ['components', 'controllers', 'architecture'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Installation, Configuration, and Upgrades
  // ============================================
  {
    id: 'kca-042',
    question: 'What is the purpose of the Kyverno namespace?',
    options: [
      'Houses Kyverno components and should be protected from user access',
      'It is optional',
      'Only for logging',
      'For user policies only',
    ],
    correctAnswer: 0,
    explanation:
      'The Kyverno namespace (usually kyverno) contains Kyverno deployments and should be protected. Policies often exclude this namespace from enforcement.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'medium',
    tags: ['namespace', 'security', 'installation'],
  },
  {
    id: 'kca-043',
    question: 'How can you customize webhook timeout in Kyverno?',
    options: [
      'Timeouts cannot be changed',
      'In each policy',
      'Through Helm values or controller flags',
      'Only by editing webhook configurations',
    ],
    correctAnswer: 2,
    explanation:
      'Webhook timeout can be configured via Helm values (webhooks.timeoutSeconds) or controller flags. Default is usually 10 seconds.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/customization/#webhook-configurations)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'hard',
    tags: ['webhooks', 'timeout', 'configuration'],
  },
  {
    id: 'kca-044',
    question: 'What resource requirements should be considered for Kyverno?',
    options: [
      'Kyverno has fixed resource usage',
      'Only CPU matters',
      'CPU, memory, and storage based on cluster size and policy count',
      'Resources are automatically managed',
    ],
    correctAnswer: 2,
    explanation:
      'Kyverno resource requirements depend on cluster size, number of policies, and request rate. Large clusters need more memory for caching and CPU for policy evaluation.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/scaling/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'medium',
    tags: ['resources', 'sizing', 'performance'],
  },
  {
    id: 'kca-045',
    question: 'How do you upgrade Kyverno using Helm?',
    options: [
      'Uninstall and reinstall',
      'kubectl apply new manifests',
      'helm upgrade with the new chart version',
      'Automatic updates only',
    ],
    correctAnswer: 2,
    explanation:
      'helm upgrade kyverno kyverno/kyverno upgrades the installation. Always review release notes for breaking changes and CRD updates.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/upgrading/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'medium',
    tags: ['upgrade', 'helm', 'operations'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Kyverno CLI
  // ============================================
  {
    id: 'kca-046',
    question: 'What does the kyverno fix command do?',
    options: [
      'Fixes Kyverno bugs',
      'Repairs cluster state',
      'Automatically fixes policy syntax issues and updates deprecated APIs',
      'Fixes resource violations',
    ],
    correctAnswer: 2,
    explanation:
      'kyverno fix automatically updates policies to fix deprecations and syntax issues, helping migrate policies to newer Kyverno versions.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/kyverno-cli/)',
    domain: 'Kyverno CLI',
    difficulty: 'hard',
    tags: ['cli', 'fix', 'migration'],
  },
  {
    id: 'kca-047',
    question: 'How do you validate policy syntax without applying?',
    options: [
      'kubectl validate',
      'Syntax validation is automatic',
      'kyverno validate or kyverno apply with --dry-run',
      'Use a text editor',
    ],
    correctAnswer: 2,
    explanation:
      'kyverno validate checks policy syntax and structure. kyverno apply can also validate policies against resources without a cluster.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/kyverno-cli/)',
    domain: 'Kyverno CLI',
    difficulty: 'medium',
    tags: ['cli', 'validate', 'syntax'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Applying Policies
  // ============================================
  {
    id: 'kca-048',
    question: 'What is the purpose of namespace selectors in policies?',
    options: [
      'Selecting the Kyverno namespace',
      'Matching namespaces by labels for policy application',
      'Creating namespaces',
      'Namespace documentation',
    ],
    correctAnswer: 1,
    explanation:
      'Namespace selectors use label selectors to match namespaces, allowing policies to apply to groups of namespaces sharing common labels.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Applying Policies',
    difficulty: 'medium',
    tags: ['namespace-selector', 'labels', 'matching'],
  },
  {
    id: 'kca-049',
    question: 'What are subject filters in Kyverno policies?',
    options: [
      'Matching requests based on the requester (users, groups, service accounts)',
      'Filtering log subjects',
      'Email subject filters',
      'Policy subjects',
    ],
    correctAnswer: 0,
    explanation:
      'Subject filters match based on who made the request - users, groups, or service accounts - allowing policies to apply differently based on the requester.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Applying Policies',
    difficulty: 'hard',
    tags: ['subjects', 'users', 'serviceaccounts'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Policy Management
  // ============================================
  {
    id: 'kca-050',
    question: 'What is the Kyverno Policy Reporter?',
    options: [
      'An email reporting tool',
      'A tool providing dashboards, metrics, and notifications for policy reports',
      'A PDF generator',
      'A compliance scanner',
    ],
    correctAnswer: 1,
    explanation:
      'Policy Reporter is a companion tool providing Grafana dashboards, Prometheus metrics, and notification integrations (Slack, teams) for Kyverno policy reports.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Policy Management',
    difficulty: 'medium',
    tags: ['policy-reporter', 'dashboards', 'notifications'],
  },
  {
    id: 'kca-051',
    question: 'How do you organize policies in a large cluster?',
    options: [
      'All policies must be in one file',
      'Only ClusterPolicies are allowed',
      'Using namespaced policies, naming conventions, and labels',
      'Separate clusters for each policy',
    ],
    correctAnswer: 2,
    explanation:
      'Large clusters benefit from namespaced policies where appropriate, consistent naming conventions, labels for categorization, and separation by team or environment.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Policy Management',
    difficulty: 'hard',
    tags: ['organization', 'best-practices', 'scale'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Advanced Topics
  // ============================================
  {
    id: 'kca-052',
    question: 'What RBAC permissions does the Kyverno service account need for generate rules?',
    options: [
      'Only read permissions on all resources',
      'Full cluster-admin permissions',
      'Create, update, and delete permissions on the resources being generated',
      'No special permissions are required',
    ],
    correctAnswer: 2,
    explanation:
      'Kyverno needs RBAC permissions to create, update, and delete the specific resources defined in generate rules. Additional ClusterRoles may need to be created and bound to the Kyverno service account.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'hard',
    tags: ['rbac', 'service-account', 'generate', 'permissions'],
  },
  {
    id: 'kca-053',
    question: 'How can Kyverno policies make API calls to external services?',
    options: [
      'Using the context.apiCall field to query external REST endpoints',
      'API calls to external services are not supported',
      'Only through ConfigMaps',
      'Using kubectl commands in policies',
    ],
    correctAnswer: 0,
    explanation:
      'Kyverno supports API calls in the context section to fetch data from the Kubernetes API server or external services. The apiCall field allows querying endpoints and using the response in policy logic.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['api-calls', 'context', 'external-data'],
  },
  {
    id: 'kca-054',
    question:
      'What is the first step when troubleshooting a Kyverno policy that is not being enforced?',
    options: [
      'Reinstall Kyverno',
      'Delete and recreate the policy',
      'Check if the policy status shows Ready and verify webhook configurations are active',
      'Upgrade to the latest version',
    ],
    correctAnswer: 2,
    explanation:
      'When troubleshooting, first check if the policy shows Ready status (kubectl get clusterpolicy), verify webhooks are registered (kubectl get validatingwebhookconfigurations), and check Kyverno pod logs for errors.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/troubleshooting/)',
    domain: 'Fundamentals of Kyverno',
    difficulty: 'medium',
    tags: ['troubleshooting', 'debugging', 'webhooks', 'status'],
  },
  {
    id: 'kca-055',
    question:
      'What is the correct YAML structure for a basic Kyverno ClusterPolicy with a validate rule?',
    options: [
      'apiVersion: policy/v1, kind: Policy, spec.rules.validate',
      'apiVersion: kyverno.io/v1, kind: ClusterPolicy, spec.rules[].validate',
      'apiVersion: admission.k8s.io/v1, kind: ValidatingPolicy, spec.validation',
      'apiVersion: kyverno.io/v1beta1, kind: Validator, spec.checks',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno policies use apiVersion: kyverno.io/v1, kind: ClusterPolicy (or Policy for namespaced), with rules defined as an array under spec.rules[], each containing match/exclude and a rule type like validate.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'medium',
    tags: ['yaml', 'structure', 'manifest', 'syntax'],
  },
  {
    id: 'kca-056',
    question: 'What is Kyverno Chainsaw and what is it used for?',
    options: [
      'A log analysis tool for Kyverno',
      'A declarative end-to-end testing framework for Kubernetes operators and policies',
      'A policy migration utility',
      'A Kyverno installation helper',
    ],
    correctAnswer: 1,
    explanation:
      'Chainsaw is a declarative end-to-end testing framework that can test Kyverno policies by defining test scenarios with assertions. It supports testing policy behavior against resources in a structured, repeatable way.\n\nLearn more: [Documentación oficial](https://kyverno.github.io/chainsaw/)',
    domain: 'Kyverno CLI',
    difficulty: 'hard',
    tags: ['chainsaw', 'testing', 'e2e', 'framework'],
  },
  {
    id: 'kca-057',
    question: 'How does Kyverno integrate with Kubernetes ValidatingAdmissionPolicy?',
    options: [
      'They cannot be used together',
      'Kyverno replaces ValidatingAdmissionPolicy entirely',
      'Kyverno can generate and manage ValidatingAdmissionPolicy resources from Kyverno policies',
      'ValidatingAdmissionPolicy must be disabled to use Kyverno',
    ],
    correctAnswer: 2,
    explanation:
      'Kyverno can generate Kubernetes ValidatingAdmissionPolicy resources, allowing users to leverage native Kubernetes admission control while authoring policies in Kyverno format. This provides flexibility and reduces webhook overhead.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['validatingadmissionpolicy', 'integration', 'native'],
  },
  {
    id: 'kca-058',
    question: 'What is the purpose of resource caching in Kyverno?',
    options: [
      'To store policy definitions permanently',
      'To reduce API server load by caching resources used in context lookups',
      'To backup cluster resources',
      'To speed up policy file loading',
    ],
    correctAnswer: 1,
    explanation:
      'Kyverno caches Kubernetes resources referenced in policy context to reduce load on the API server. This improves performance when policies query ConfigMaps, Secrets, or other resources repeatedly.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/installation/customization/#resource-filters)',
    domain: 'Installation, Configuration, and Upgrades',
    difficulty: 'hard',
    tags: ['caching', 'performance', 'api-server', 'optimization'],
  },
  {
    id: 'kca-059',
    question: 'What is the Kyverno Playground?',
    options: [
      'A local development environment',
      'An online tool to test and experiment with Kyverno policies without a cluster',
      'A game for learning Kyverno',
      'A Kubernetes namespace for testing',
    ],
    correctAnswer: 1,
    explanation:
      'The Kyverno Playground (playground.kyverno.io) is a web-based tool for testing policies against resources without needing a Kubernetes cluster. It helps validate policy logic before deployment.\n\nLearn more: [Documentación oficial](https://playground.kyverno.io/)',
    domain: 'Kyverno CLI',
    difficulty: 'medium',
    tags: ['playground', 'testing', 'online-tool', 'validation'],
  },
  {
    id: 'kca-060',
    question: 'What are Global Context Entries in Kyverno?',
    options: [
      'Cluster-wide variables that can be shared across multiple policies',
      'Environment variables for Kyverno pods',
      'Logging configuration settings',
      'Default namespace settings',
    ],
    correctAnswer: 0,
    explanation:
      'Global Context Entries (GlobalContextEntry CRD) define reusable context data that can be referenced by multiple policies. This avoids duplicating API calls or ConfigMap lookups across policies and improves maintainability.\n\nLearn more: [Documentación oficial](https://kyverno.io/docs/)',
    domain: 'Writing Policies',
    difficulty: 'hard',
    tags: ['global-context', 'shared-data', 'reusability'],
  },
];

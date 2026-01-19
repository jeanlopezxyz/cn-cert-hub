/**
 * KCSA - Kubernetes and Cloud Security Associate
 * Practice Questions (60 questions - matches exam format)
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: kcsa-XXX (e.g., kcsa-001, kcsa-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Overview of Cloud Native Security (14%) - 9 questions
 * - Kubernetes Cluster Component Security (22%) - 11 questions
 * - Kubernetes Security Fundamentals (22%) - 12 questions
 * - Kubernetes Threat Model (16%) - 10 questions
 * - Platform Security (16%) - 10 questions
 * - Compliance and Security Frameworks (10%) - 8 questions
 */

import type { Question } from '@/types/quiz';

export const KCSA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Overview of Cloud Native Security (14%)
  // ============================================
  {
    id: 'kcsa-001',
    question: 'What are the 4Cs of Cloud Native Security?',
    options: [
      'Code, Container, Cluster, Cloud',
      'Configuration, Compliance, Control, Cloud',
      'Container, CI/CD, Cluster, Code',
      'Cloud, Compute, Container, Configuration',
    ],
    correctAnswer: 0,
    explanation:
      'The 4Cs of Cloud Native Security are Code, Container, Cluster, and Cloud. Each layer builds upon the security of the previous one, creating a defense-in-depth approach.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['4Cs', 'security-model', 'fundamentals'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-002',
    question: 'In the 4Cs security model, which layer provides the foundation for all others?',
    options: ['Code', 'Container', 'Cloud', 'Cluster'],
    correctAnswer: 2,
    explanation:
      'Cloud is the outermost layer and provides the foundation. If the cloud layer is vulnerable, all inner layers (Cluster, Container, Code) are at risk regardless of their individual security measures.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/#the-4c-s-of-cloud-native-security)',
    domain: 'Overview of Cloud Native Security',
    tags: ['4Cs', 'cloud-security', 'fundamentals'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-003',
    question: 'Which isolation technique creates the strongest workload separation in Kubernetes?',
    options: [
      'Namespace isolation',
      'Separate clusters',
      'Network policies',
      'Pod security policies',
    ],
    correctAnswer: 1,
    explanation:
      'Separate clusters provide the strongest isolation as they have completely separate control planes and worker nodes. Namespaces provide logical isolation but share the same cluster resources.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/multi-tenancy/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['isolation', 'multi-tenancy', 'clusters'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-004',
    question:
      'What is the primary security concern with using container images from public registries?',
    options: [
      'They are slower to download',
      'They cannot be customized',
      'They may contain vulnerabilities or malicious code',
      'They require more storage space',
    ],
    correctAnswer: 2,
    explanation:
      'Public container images may contain known vulnerabilities, malware, or backdoors. Always scan images for vulnerabilities and use trusted base images from verified publishers.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['container-images', 'supply-chain', 'registries'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-005',
    question: 'Which security principle involves reducing the attack surface of containers?',
    options: ['Minimal base images', 'Defense in depth', 'Least privilege', 'Zero trust'],
    correctAnswer: 0,
    explanation:
      'Using minimal base images (like distroless or Alpine) reduces the attack surface by including only necessary components. Fewer packages mean fewer potential vulnerabilities.\n\nLearn more: [Documentación oficial](https://cloud.google.com/blog/products/containers-kubernetes/7-best-practices-for-building-containers)',
    domain: 'Overview of Cloud Native Security',
    tags: ['containers', 'attack-surface', 'best-practices'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Kubernetes Cluster Component Security (22%)
  // ============================================
  {
    id: 'kcsa-006',
    question: 'Which Kubernetes component stores all cluster data and should be encrypted at rest?',
    options: ['API Server', 'etcd', 'Controller Manager', 'Scheduler'],
    correctAnswer: 1,
    explanation:
      'etcd is the key-value store that holds all cluster state, including Secrets. Encrypting etcd at rest protects sensitive data from being read if the storage is compromised.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['etcd', 'encryption', 'data-protection'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-007',
    question: 'What is the recommended way to secure communication between API server and kubelet?',
    options: [
      'Use HTTP without authentication',
      'Use SSH tunnels',
      'Enable mutual TLS (mTLS)',
      'Disable certificate verification',
    ],
    correctAnswer: 2,
    explanation:
      'Mutual TLS ensures both the API server and kubelet authenticate each other, preventing man-in-the-middle attacks and unauthorized access.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/kubelet-tls-bootstrapping/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['api-server', 'kubelet', 'tls', 'mtls'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-008',
    question: 'Which component is responsible for enforcing network policies in Kubernetes?',
    options: ['CNI plugin', 'kube-proxy', 'API Server', 'Controller Manager'],
    correctAnswer: 0,
    explanation:
      'The CNI (Container Network Interface) plugin is responsible for implementing and enforcing NetworkPolicies. Not all CNI plugins support network policies.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/network-policies/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['cni', 'network-policies', 'networking'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-009',
    question: 'What is the purpose of the --anonymous-auth=false flag on the API server?',
    options: [
      'Enables anonymous access',
      'Disables all authentication',
      'Enables audit logging',
      'Prevents unauthenticated requests',
    ],
    correctAnswer: 3,
    explanation:
      'Setting --anonymous-auth=false prevents anonymous requests to the API server, requiring all requests to be authenticated.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#anonymous-requests)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['api-server', 'authentication', 'hardening'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-010',
    question: 'Why should the kubelet read-only port (10255) be disabled?',
    options: [
      'It exposes sensitive information without authentication',
      'It improves performance',
      'It conflicts with other services',
      'It is deprecated in newer versions',
    ],
    correctAnswer: 0,
    explanation:
      'Port 10255 provides read-only access to kubelet metrics and pod information without authentication, potentially exposing sensitive cluster information.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['kubelet', 'ports', 'hardening'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-011',
    question: 'What is the role of the admission controller in Kubernetes security?',
    options: [
      'Intercepting and validating/mutating requests before persistence',
      'Managing user authentication',
      'Encrypting data at rest',
      'Managing network routing',
    ],
    correctAnswer: 0,
    explanation:
      'Admission controllers intercept requests to the API server after authentication/authorization but before data is persisted. They can validate or mutate requests.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['admission-controllers', 'api-server', 'validation'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-012',
    question:
      'Which etcd security configuration prevents unauthorized node access to cluster data?',
    options: [
      'Enabling peer authentication',
      'Using client certificate authentication',
      'Enabling encryption at rest',
      'All of the above',
    ],
    correctAnswer: 3,
    explanation:
      'All options contribute to etcd security: peer authentication secures etcd cluster communication, client certificates authenticate API server access, and encryption at rest protects stored data.\n\nLearn more: [Documentación oficial](https://etcd.io/docs/latest/op-guide/security/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['etcd', 'authentication', 'encryption'],
    difficulty: 'hard',
  },

  // ============================================
  // DOMAIN: Kubernetes Security Fundamentals (22%)
  // ============================================
  {
    id: 'kcsa-013',
    question: 'Which Pod Security Standard level is the most restrictive?',
    options: ['Privileged', 'Restricted', 'Baseline', 'Default'],
    correctAnswer: 1,
    explanation:
      'Restricted is the most restrictive Pod Security Standard, enforcing pod hardening best practices. Baseline provides minimal restrictions, and Privileged allows everything.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['pss', 'pod-security', 'standards'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-014',
    question: 'What is the purpose of Pod Security Admission?',
    options: [
      'Enforcing Pod Security Standards at namespace level',
      'Managing network policies',
      'Encrypting secrets',
      'Managing service accounts',
    ],
    correctAnswer: 0,
    explanation:
      'Pod Security Admission (PSA) is a built-in admission controller that enforces Pod Security Standards at the namespace level through labels.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/pod-security-admission/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['psa', 'pod-security', 'admission'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-015',
    question: 'Which RBAC resource defines what actions can be performed on which resources?',
    options: ['Role/ClusterRole', 'ServiceAccount', 'RoleBinding', 'Subject'],
    correctAnswer: 0,
    explanation:
      'Role and ClusterRole define the permissions (verbs on resources). RoleBinding and ClusterRoleBinding then bind these permissions to subjects (users, groups, service accounts).\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['rbac', 'authorization', 'roles'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-016',
    question: 'What is the security risk of mounting the Docker socket into a container?',
    options: [
      'Increased memory usage',
      'Slower container startup',
      'Incompatibility with other containers',
      'Container can control host Docker daemon (container escape)',
    ],
    correctAnswer: 3,
    explanation:
      'Mounting the Docker socket gives the container full control over the host Docker daemon, allowing it to create privileged containers and effectively escape containment.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['container-escape', 'docker', 'privileges'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-017',
    question: 'Which Kubernetes object should be used instead of hardcoding credentials in pods?',
    options: ['ConfigMap', 'Annotation', 'Secret', 'Label'],
    correctAnswer: 2,
    explanation:
      'Secrets are designed to store sensitive data like credentials. They can be encrypted at rest and have access controlled via RBAC. ConfigMaps are for non-sensitive configuration.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/configuration/secret/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['secrets', 'credentials', 'best-practices'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-018',
    question: 'What is the default behavior of NetworkPolicy if none are applied to a namespace?',
    options: [
      'All traffic is blocked',
      'Only ingress is blocked',
      'Only egress is blocked',
      'All traffic is allowed',
    ],
    correctAnswer: 3,
    explanation:
      'By default, without any NetworkPolicy, all pods can communicate with all other pods. NetworkPolicies are additive - creating one implicitly denies all other traffic not covered by a policy.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['network-policies', 'networking', 'default-behavior'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-019',
    question: 'Which securityContext setting prevents a container from running as root?',
    options: [
      'runAsNonRoot: true',
      'privileged: false',
      'allowPrivilegeEscalation: false',
      'readOnlyRootFilesystem: true',
    ],
    correctAnswer: 0,
    explanation:
      'runAsNonRoot: true ensures the container cannot run as root (UID 0). The container will fail to start if the image is configured to run as root.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['security-context', 'root', 'hardening'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-020',
    question: 'What does audit logging in Kubernetes capture?',
    options: [
      'API server requests and responses',
      'Container application logs',
      'Network traffic between pods',
      'Node system logs',
    ],
    correctAnswer: 0,
    explanation:
      'Kubernetes audit logging records all requests to the API server, including who made the request, what was requested, and the response. It provides an audit trail for security analysis.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['audit', 'logging', 'api-server'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Kubernetes Threat Model (16%)
  // ============================================
  {
    id: 'kcsa-021',
    question: 'What type of attack does ResourceQuota help prevent?',
    options: [
      'Denial of Service (DoS)',
      'SQL injection',
      'Privilege escalation',
      'Man-in-the-middle',
    ],
    correctAnswer: 0,
    explanation:
      'ResourceQuota limits resource consumption per namespace, preventing a single namespace from consuming all cluster resources and causing denial of service to other workloads.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/policy/resource-quotas/)',
    domain: 'Kubernetes Threat Model',
    tags: ['resource-quota', 'dos', 'resource-limits'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-022',
    question: 'Which attack vector involves exploiting a compromised container to access the host?',
    options: ['Network sniffing', 'DNS spoofing', 'Certificate theft', 'Container escape'],
    correctAnswer: 3,
    explanation:
      'Container escape occurs when an attacker exploits vulnerabilities to break out of container isolation and access the underlying host system.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'Kubernetes Threat Model',
    tags: ['container-escape', 'host-access', 'threats'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-023',
    question: 'What is the risk of overly permissive RBAC ClusterRoleBindings?',
    options: [
      'Slower cluster performance',
      'Privilege escalation and unauthorized access',
      'Network connectivity issues',
      'Storage quota exceeded',
    ],
    correctAnswer: 1,
    explanation:
      'Overly permissive RBAC allows users or service accounts to perform actions beyond their intended scope, potentially leading to privilege escalation and unauthorized access to sensitive resources.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#privilege-escalation-prevention-and-bootstrapping)',
    domain: 'Kubernetes Threat Model',
    tags: ['rbac', 'privilege-escalation', 'authorization'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-024',
    question: 'How can an attacker persist in a Kubernetes cluster after initial compromise?',
    options: [
      'Storing data in ConfigMaps',
      'Using horizontal pod autoscaling',
      'Creating multiple replicas',
      'Creating new ServiceAccounts with ClusterAdmin privileges',
    ],
    correctAnswer: 3,
    explanation:
      'Attackers can create new highly privileged ServiceAccounts or modify existing RBAC rules to maintain access even if the initial entry point is closed.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/rbac-good-practices/)',
    domain: 'Kubernetes Threat Model',
    tags: ['persistence', 'rbac', 'service-accounts'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-025',
    question: 'What threat does pod-to-pod encryption with a service mesh mitigate?',
    options: [
      'Network traffic interception',
      'Container escape',
      'Resource exhaustion',
      'Image vulnerabilities',
    ],
    correctAnswer: 0,
    explanation:
      'Service mesh encryption (mTLS) protects against network traffic interception (eavesdropping) by encrypting all pod-to-pod communication within the cluster.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication)',
    domain: 'Kubernetes Threat Model',
    tags: ['service-mesh', 'mtls', 'encryption', 'networking'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-026',
    question: 'Which component is the primary target for attackers seeking cluster-wide access?',
    options: ['Scheduler', 'API Server', 'kubelet', 'kube-proxy'],
    correctAnswer: 1,
    explanation:
      'The API Server is the central entry point for all cluster operations. Compromising it gives attackers full control over the cluster.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/controlling-access/)',
    domain: 'Kubernetes Threat Model',
    tags: ['api-server', 'attack-targets', 'threats'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: Platform Security (16%)
  // ============================================
  {
    id: 'kcsa-027',
    question: 'What is the purpose of image signing in supply chain security?',
    options: [
      'Compressing images for faster downloads',
      'Encrypting image contents',
      'Reducing image size',
      'Verifying image integrity and authenticity',
    ],
    correctAnswer: 3,
    explanation:
      'Image signing creates a cryptographic signature that verifies the image has not been tampered with and comes from a trusted source, ensuring supply chain integrity.\n\nLearn more: [Documentación oficial](https://docs.sigstore.dev/cosign/signing/overview/)',
    domain: 'Platform Security',
    tags: ['supply-chain', 'image-signing', 'verification'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-028',
    question: 'Which tool is commonly used for scanning container images for vulnerabilities?',
    options: ['kubectl', 'Trivy', 'Helm', 'Prometheus'],
    correctAnswer: 1,
    explanation:
      'Trivy is a popular open-source vulnerability scanner for container images. It scans for OS and application dependencies with known vulnerabilities.\n\nLearn more: [Documentación oficial](https://trivy.dev/)',
    domain: 'Platform Security',
    tags: ['vulnerability-scanning', 'trivy', 'images'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-029',
    question: 'What is the benefit of using a private container registry?',
    options: [
      'Faster image pulls',
      'Control over which images can be deployed',
      'Automatic vulnerability patching',
      'Free storage',
    ],
    correctAnswer: 1,
    explanation:
      'Private registries give organizations control over approved images, enable vulnerability scanning policies, and prevent deployment of untrusted external images.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/containers/images/#using-a-private-registry)',
    domain: 'Platform Security',
    tags: ['registry', 'supply-chain', 'image-management'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-030',
    question: 'What does SLSA (Supply-chain Levels for Software Artifacts) framework ensure?',
    options: [
      'Container runtime performance',
      'Network encryption',
      'User authentication',
      'Build integrity and provenance',
    ],
    correctAnswer: 3,
    explanation:
      'SLSA is a framework for ensuring software supply chain integrity. It defines levels of assurance for build processes and artifact provenance.\n\nLearn more: [Documentación oficial](https://slsa.dev/)',
    domain: 'Platform Security',
    tags: ['slsa', 'supply-chain', 'build-integrity'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-031',
    question: 'Which admission controller can enforce that only signed images are deployed?',
    options: ['PodSecurityPolicy', 'ResourceQuota', 'ImagePolicyWebhook', 'LimitRanger'],
    correctAnswer: 2,
    explanation:
      'ImagePolicyWebhook calls an external service to verify image policies, including signature verification, before allowing pod creation.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook)',
    domain: 'Platform Security',
    tags: ['admission-controllers', 'image-policy', 'signing'],
    difficulty: 'hard',
  },

  // ============================================
  // DOMAIN: Compliance and Security Frameworks (10%)
  // ============================================
  {
    id: 'kcsa-032',
    question: 'What is the CIS Kubernetes Benchmark?',
    options: [
      'A performance testing tool',
      'Security configuration guidelines for Kubernetes',
      'A container runtime specification',
      'A network policy framework',
    ],
    correctAnswer: 1,
    explanation:
      'The CIS Kubernetes Benchmark provides prescriptive security configuration guidelines for Kubernetes clusters, covering the API server, etcd, control plane, and worker nodes.\n\nLearn more: [Documentación oficial](https://www.cisecurity.org/benchmark/kubernetes)',
    domain: 'Compliance and Security Frameworks',
    tags: ['cis-benchmark', 'compliance', 'hardening'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-033',
    question: 'Which tool can automatically check Kubernetes clusters against CIS benchmarks?',
    options: ['kubectl', 'Helm', 'Grafana', 'kube-bench'],
    correctAnswer: 3,
    explanation:
      'kube-bench is an open-source tool that checks Kubernetes clusters against CIS benchmark recommendations and reports compliance status.\n\nLearn more: [Documentación oficial](https://github.com/aquasecurity/kube-bench)',
    domain: 'Compliance and Security Frameworks',
    tags: ['kube-bench', 'cis-benchmark', 'automation'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-034',
    question: 'What threat modeling framework uses STRIDE categories?',
    options: [
      'Microsoft Threat Modeling',
      'OWASP Top 10',
      'NIST Cybersecurity Framework',
      'CIS Controls',
    ],
    correctAnswer: 0,
    explanation:
      'STRIDE (Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege) is a threat modeling methodology developed by Microsoft.\n\nLearn more: [Documentación oficial](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats)',
    domain: 'Compliance and Security Frameworks',
    tags: ['stride', 'threat-modeling', 'frameworks'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-035',
    question:
      'Which compliance requirement often mandates encryption of data at rest and in transit?',
    options: ['GDPR only', 'Neither', 'PCI-DSS', 'Both GDPR and PCI-DSS'],
    correctAnswer: 3,
    explanation:
      'Both GDPR and PCI-DSS require appropriate security measures for protecting data. PCI-DSS specifically mandates encryption for cardholder data, and GDPR requires appropriate technical measures.\n\nLearn more: [Documentación oficial](https://www.pcisecuritystandards.org/document_library/)',
    domain: 'Compliance and Security Frameworks',
    tags: ['compliance', 'gdpr', 'pci-dss', 'encryption'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-036',
    question: 'What is the purpose of OPA (Open Policy Agent) in Kubernetes?',
    options: [
      'Container runtime',
      'Network routing',
      'Log aggregation',
      'Policy enforcement and validation',
    ],
    correctAnswer: 3,
    explanation:
      'OPA is a general-purpose policy engine that can be used with Kubernetes (via Gatekeeper) to enforce custom policies on resources, ensuring compliance with organizational rules.\n\nLearn more: [Documentación oficial](https://www.openpolicyagent.org/docs/latest/kubernetes-introduction/)',
    domain: 'Compliance and Security Frameworks',
    tags: ['opa', 'gatekeeper', 'policy-enforcement'],
    difficulty: 'medium',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Overview of Cloud Native Security
  // ============================================
  {
    id: 'kcsa-037',
    question: 'What is the purpose of the "shift left" security approach?',
    options: [
      'Delaying security testing until production',
      'Moving security checks to earlier stages of the development lifecycle',
      'Shifting security responsibilities to end users',
      'Moving applications to the left side of the cluster',
    ],
    correctAnswer: 1,
    explanation:
      'Shift left security means integrating security practices earlier in the software development lifecycle (SDLC), catching vulnerabilities during development rather than in production.\n\nLearn more: [Documentación oficial](https://owasp.org/www-project-devsecops-guideline/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['shift-left', 'sdlc', 'devsecops'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-038',
    question:
      'Which principle states that every access request should be verified regardless of location?',
    options: ['Defense in depth', 'Zero trust', 'Least privilege', 'Separation of duties'],
    correctAnswer: 1,
    explanation:
      'Zero trust assumes no implicit trust based on network location. Every access request must be authenticated, authorized, and encrypted regardless of where it originates.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['zero-trust', 'security-principles', 'authentication'],
    difficulty: 'medium',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Kubernetes Cluster Component Security
  // ============================================
  {
    id: 'kcsa-039',
    question:
      'What is the recommended approach for managing TLS certificates in a Kubernetes cluster?',
    options: [
      'Use a proper PKI with automatic certificate rotation',
      'Use self-signed certificates for all components',
      'Disable TLS for internal communication',
      'Use the same certificate for all components',
    ],
    correctAnswer: 0,
    explanation:
      'A proper PKI (Public Key Infrastructure) with automatic certificate rotation ensures certificates are properly managed, renewed before expiration, and unique per component.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/setup/best-practices/certificates/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['tls', 'pki', 'certificates', 'rotation'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-040',
    question:
      'What security feature should be enabled on the kube-apiserver to track all API requests?',
    options: ['Authorization mode', 'Anonymous authentication', 'Audit logging', 'Insecure port'],
    correctAnswer: 2,
    explanation:
      'Audit logging records all requests to the API server with configurable detail levels, enabling security monitoring, compliance, and forensic analysis.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['audit-logging', 'api-server', 'monitoring'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-041',
    question: 'Which flag should be set on the kubelet to prevent unauthorized image pulls?',
    options: [
      '--image-pull-policy=Always',
      '--authorization-mode=Webhook',
      '--anonymous-auth=false',
      '--image-credential-provider-config',
    ],
    correctAnswer: 1,
    explanation:
      'Setting --authorization-mode=Webhook on the kubelet ensures all requests are authorized through the API server, preventing unauthorized operations including image pulls.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/kubelet-authn-authz/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['kubelet', 'authorization', 'images'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-042',
    question: 'What is the purpose of encrypting etcd peer communication?',
    options: [
      'Faster data replication',
      'Reducing storage requirements',
      'Improving query performance',
      'Preventing eavesdropping between etcd cluster members',
    ],
    correctAnswer: 3,
    explanation:
      'Encrypting etcd peer communication (with --peer-cert-file and --peer-key-file) prevents eavesdropping and tampering of data exchanged between etcd cluster members.\n\nLearn more: [Documentación oficial](https://etcd.io/docs/latest/op-guide/security/)',
    domain: 'Kubernetes Cluster Component Security',
    tags: ['etcd', 'encryption', 'peer-communication'],
    difficulty: 'hard',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Kubernetes Security Fundamentals
  // ============================================
  {
    id: 'kcsa-043',
    question: 'What does the securityContext setting "readOnlyRootFilesystem: true" accomplish?',
    options: [
      'Encrypts the root filesystem',
      'Makes the host root filesystem read-only',
      'Prevents containers from writing to their root filesystem',
      'Disables container logging',
    ],
    correctAnswer: 2,
    explanation:
      'readOnlyRootFilesystem: true mounts the container root filesystem as read-only, preventing attackers from modifying system binaries or writing malicious files.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['security-context', 'filesystem', 'hardening'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-044',
    question: 'Which Kubernetes resource type provides fine-grained access control to Secrets?',
    options: ['ConfigMap', 'NetworkPolicy', 'PodSecurityPolicy', 'Role with resourceNames'],
    correctAnswer: 3,
    explanation:
      'Roles can specify resourceNames to limit access to specific Secrets by name, providing fine-grained access control rather than access to all Secrets.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#referring-to-resources)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['rbac', 'secrets', 'access-control'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-045',
    question: 'What is the purpose of Linux capabilities in container security?',
    options: [
      'Increasing container performance',
      'Managing network bandwidth',
      'Controlling CPU allocation',
      'Providing fine-grained privilege control instead of full root',
    ],
    correctAnswer: 3,
    explanation:
      'Linux capabilities break down root privileges into distinct units. Containers can be granted specific capabilities (like NET_BIND_SERVICE) without full root access.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-capabilities-for-a-container)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['capabilities', 'linux', 'privileges'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-046',
    question: 'What happens when allowPrivilegeEscalation is set to false in a securityContext?',
    options: [
      'The container process cannot gain more privileges than its parent',
      'The container cannot use sudo',
      'The container cannot access the network',
      'The container cannot read files',
    ],
    correctAnswer: 0,
    explanation:
      'allowPrivilegeEscalation: false sets the no_new_privs flag, preventing the container process from gaining additional privileges through setuid binaries or other mechanisms.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'Kubernetes Security Fundamentals',
    tags: ['security-context', 'privilege-escalation', 'hardening'],
    difficulty: 'hard',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Kubernetes Threat Model
  // ============================================
  {
    id: 'kcsa-047',
    question: 'What is cryptojacking in the context of Kubernetes?',
    options: [
      'Encrypting cluster communication',
      'Stealing TLS certificates',
      'Unauthorized use of cluster resources for cryptocurrency mining',
      'Breaking encryption algorithms',
    ],
    correctAnswer: 2,
    explanation:
      'Cryptojacking is an attack where adversaries deploy cryptocurrency miners on compromised clusters, consuming compute resources for financial gain.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/)',
    domain: 'Kubernetes Threat Model',
    tags: ['cryptojacking', 'threats', 'resource-abuse'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-048',
    question: 'How can attackers exfiltrate data from a compromised Kubernetes cluster?',
    options: [
      'Only through physical access',
      'Through DNS tunneling or HTTP to external endpoints',
      'Data cannot be exfiltrated from containers',
      'Only through the Kubernetes Dashboard',
    ],
    correctAnswer: 1,
    explanation:
      'Attackers can exfiltrate data through various channels including DNS tunneling, HTTP/HTTPS to external endpoints, or cloud provider metadata services if egress is not restricted.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/services-networking/network-policies/)',
    domain: 'Kubernetes Threat Model',
    tags: ['data-exfiltration', 'threats', 'egress'],
    difficulty: 'hard',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Platform Security
  // ============================================
  {
    id: 'kcsa-049',
    question: 'What is a Software Bill of Materials (SBOM)?',
    options: [
      'A comprehensive inventory of components in a software artifact',
      'A list of hardware components',
      'A financial document for software licensing',
      'A deployment manifest',
    ],
    correctAnswer: 0,
    explanation:
      'An SBOM is a complete inventory of all components, libraries, and dependencies in a software artifact, enabling vulnerability tracking and supply chain transparency.\n\nLearn more: [Documentación oficial](https://www.cisa.gov/sbom)',
    domain: 'Platform Security',
    tags: ['sbom', 'supply-chain', 'inventory'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-050',
    question: 'Which technique helps detect compromised container images in the build pipeline?',
    options: [
      'Using larger base images',
      'Disabling build caching',
      'Vulnerability scanning and image signing verification',
      'Using public registries only',
    ],
    correctAnswer: 2,
    explanation:
      "Vulnerability scanning identifies known CVEs, while image signing verification ensures images come from trusted sources and haven't been tampered with.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/)",
    domain: 'Platform Security',
    tags: ['vulnerability-scanning', 'image-signing', 'pipeline'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-051',
    question: 'What is the purpose of Cosign in container security?',
    options: [
      'Container networking',
      'Container orchestration',
      'Log collection',
      'Signing and verifying container images and artifacts',
    ],
    correctAnswer: 3,
    explanation:
      'Cosign is a tool for signing, verifying, and storing container image signatures. It integrates with OCI registries and supports keyless signing with Sigstore.\n\nLearn more: [Documentación oficial](https://docs.sigstore.dev/cosign/signing/overview/)',
    domain: 'Platform Security',
    tags: ['cosign', 'signing', 'sigstore'],
    difficulty: 'medium',
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Compliance and Security Frameworks
  // ============================================
  {
    id: 'kcsa-052',
    question: 'What is the purpose of runtime security monitoring in Kubernetes?',
    options: [
      'Improving application performance',
      'Detecting anomalous behavior and threats during container execution',
      'Managing container lifecycles',
      'Scheduling workloads',
    ],
    correctAnswer: 1,
    explanation:
      'Runtime security tools like Falco detect anomalous behavior, policy violations, and security threats by monitoring system calls and container activity during execution.\n\nLearn more: [Documentación oficial](https://falco.org/docs/)',
    domain: 'Compliance and Security Frameworks',
    tags: ['runtime-security', 'falco', 'monitoring'],
    difficulty: 'medium',
  },

  // ============================================
  // NEW QUESTIONS - Overview of Cloud Native Security
  // ============================================
  {
    id: 'kcsa-053',
    question: 'What is the defense in depth security strategy?',
    options: [
      'Using a single strong firewall',
      'Multiple layers of security controls to protect assets',
      'Focusing security only at the network perimeter',
      'Relying solely on encryption for protection',
    ],
    correctAnswer: 1,
    explanation:
      'Defense in depth implements multiple layers of security controls (network, host, container, application). If one layer fails, others continue protecting the system. This aligns with the 4Cs model.\n\nLearn more: [Documentación oficial](https://kubernetes.io/docs/concepts/security/overview/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['defense-in-depth', 'security-strategy', 'layered-security'],
    difficulty: 'medium',
  },
  {
    id: 'kcsa-054',
    question:
      'According to CNCF security best practices, what should be the first step when securing a Kubernetes cluster?',
    options: [
      'Install a service mesh',
      'Enable audit logging immediately',
      'Understand the threat model and attack surface',
      'Deploy all workloads in a single namespace',
    ],
    correctAnswer: 2,
    explanation:
      'CNCF recommends starting with understanding your threat model and attack surface before implementing controls. This helps prioritize security measures based on actual risks.\n\nLearn more: [Documentación oficial](https://www.cncf.io/reports/cloud-native-security-whitepaper/)',
    domain: 'Overview of Cloud Native Security',
    tags: ['cncf', 'best-practices', 'threat-model'],
    difficulty: 'medium',
  },

  // ============================================
  // NEW QUESTIONS - Kubernetes Threat Model
  // ============================================
  {
    id: 'kcsa-055',
    question: 'What is lateral movement in the context of Kubernetes security?',
    options: [
      'Scaling pods horizontally across nodes',
      'Moving containers between registries',
      'An attacker moving from one compromised component to others within the cluster',
      'Migrating workloads between clusters',
    ],
    correctAnswer: 2,
    explanation:
      'Lateral movement occurs when an attacker uses access to one compromised component (pod, node, service account) to gain access to other resources in the cluster. Network policies and RBAC help limit this.\n\nLearn more: [Documentación oficial](https://microsoft.github.io/Threat-Matrix-for-Kubernetes/)',
    domain: 'Kubernetes Threat Model',
    tags: ['lateral-movement', 'attack-techniques', 'threats'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-056',
    question: 'What is the MITRE ATT&CK framework for Kubernetes used for?',
    options: [
      'Deploying containers automatically',
      'Managing cluster networking',
      'Documenting adversary tactics, techniques, and procedures specific to Kubernetes',
      'Automating security patches',
    ],
    correctAnswer: 2,
    explanation:
      'The MITRE ATT&CK Matrix for Kubernetes documents known adversary behaviors, tactics, and techniques targeting Kubernetes environments. It helps security teams understand and defend against real-world attacks.\n\nLearn more: [Documentación oficial](https://microsoft.github.io/Threat-Matrix-for-Kubernetes/)',
    domain: 'Kubernetes Threat Model',
    tags: ['mitre-attack', 'threat-matrix', 'adversary-techniques'],
    difficulty: 'hard',
  },

  // ============================================
  // NEW QUESTIONS - Platform Security
  // ============================================
  {
    id: 'kcsa-057',
    question: 'What is the purpose of in-toto attestations in supply chain security?',
    options: [
      'Encrypting container images',
      'Providing cryptographic proof that each step in the software supply chain was performed correctly',
      'Compressing build artifacts',
      'Managing container registries',
    ],
    correctAnswer: 1,
    explanation:
      'In-toto attestations provide cryptographic evidence that each step in the software supply chain (build, test, scan) was performed by authorized parties and produced expected outputs.\n\nLearn more: [Documentación oficial](https://in-toto.io/)',
    domain: 'Platform Security',
    tags: ['in-toto', 'attestations', 'supply-chain'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-058',
    question: 'What does Notary v2 (Notation) provide for container security?',
    options: [
      'Container runtime isolation',
      'Network policy enforcement',
      'Standards-based signing and verification of OCI artifacts',
      'Vulnerability scanning',
    ],
    correctAnswer: 2,
    explanation:
      'Notary v2 (now called Notation) provides a specification and tooling for signing and verifying OCI artifacts (container images, Helm charts, SBOMs) using industry standards.\n\nLearn more: [Documentación oficial](https://notaryproject.dev/)',
    domain: 'Platform Security',
    tags: ['notary', 'notation', 'oci-signing', 'supply-chain'],
    difficulty: 'hard',
  },

  // ============================================
  // NEW QUESTIONS - Compliance and Security Frameworks
  // ============================================
  {
    id: 'kcsa-059',
    question:
      'Which SOC 2 Trust Service Criteria is most relevant to Kubernetes access control configuration?',
    options: ['Availability', 'Processing Integrity', 'Security (Common Criteria)', 'Privacy'],
    correctAnswer: 2,
    explanation:
      'SOC 2 Security (Common Criteria) covers logical and physical access controls, which directly relates to Kubernetes RBAC, authentication, and authorization configurations.\n\nLearn more: [Documentación oficial](https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2)',
    domain: 'Compliance and Security Frameworks',
    tags: ['soc2', 'compliance', 'access-control'],
    difficulty: 'hard',
  },
  {
    id: 'kcsa-060',
    question: 'How does NIST 800-53 relate to Kubernetes security?',
    options: [
      'It provides container runtime specifications',
      'It defines network protocols for clusters',
      'It provides security and privacy controls that can be mapped to Kubernetes configurations',
      'It specifies container image formats',
    ],
    correctAnswer: 2,
    explanation:
      'NIST 800-53 provides a catalog of security and privacy controls (AC, AU, CM, etc.) that organizations can map to Kubernetes security configurations for compliance. Many controls apply to access control, audit, and configuration management.\n\nLearn more: [Documentación oficial](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)',
    domain: 'Compliance and Security Frameworks',
    tags: ['nist', '800-53', 'compliance', 'controls'],
    difficulty: 'hard',
  },
];

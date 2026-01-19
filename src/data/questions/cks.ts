/**
 * CKS - Certified Kubernetes Security Specialist
 * Practice Questions (60 questions - matches exam format)
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: cks-XXX (e.g., cks-001, cks-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Cluster Setup (10%) - 6 questions
 * - Cluster Hardening (15%) - 9 questions
 * - System Hardening (15%) - 9 questions
 * - Minimize Microservice Vulnerabilities (20%) - 12 questions
 * - Supply Chain Security (20%) - 12 questions
 * - Monitoring, Logging and Runtime Security (20%) - 12 questions
 *
 * Answer Distribution: 15 questions each for correctAnswer 0, 1, 2, 3
 */

import type { Question } from '@/types/quiz';

export const CKS_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Cluster Setup (10%) - 6 questions
  // ============================================
  {
    id: 'cks-001',
    question:
      'Which NetworkPolicy specification would deny all ingress traffic to pods in a namespace by default?',
    options: [
      'A NetworkPolicy with podSelector: {} and empty ingress array',
      'A NetworkPolicy with podSelector: {} and no ingress field',
      'A NetworkPolicy with ingress: deny-all',
      'A NetworkPolicy with policyTypes: [Ingress] only',
    ],
    correctAnswer: 0,
    explanation:
      'A NetworkPolicy with an empty podSelector ({}) selects all pods in the namespace. Including an empty ingress array means no ingress is allowed, effectively creating a default deny policy for all incoming traffic.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic)',
    domain: 'Cluster Setup',
    tags: ['network-policies', 'ingress', 'security'],
    difficulty: 'medium',
  },
  {
    id: 'cks-002',
    question: 'What is the purpose of using a CIS Benchmark for Kubernetes?',
    options: [
      'To optimize cluster performance',
      'To provide security configuration guidelines and best practices',
      'To manage container images',
      'To automate deployments',
    ],
    correctAnswer: 1,
    explanation:
      'The CIS (Center for Internet Security) Kubernetes Benchmark provides prescriptive guidance for establishing a secure configuration posture for Kubernetes. It covers control plane components, worker nodes, and policies.\n\nLearn more: [Official Documentation](https://www.cisecurity.org/benchmark/kubernetes)',
    domain: 'Cluster Setup',
    tags: ['cis-benchmark', 'hardening', 'compliance'],
    difficulty: 'easy',
  },
  {
    id: 'cks-003',
    question:
      'Which tool can be used to verify Kubernetes cluster configuration against CIS Benchmarks?',
    options: ['kubectl audit', 'kubeadm check', 'kube-bench', 'kube-scan'],
    correctAnswer: 2,
    explanation:
      'kube-bench is an open-source tool that checks whether Kubernetes is deployed securely by running the checks documented in the CIS Kubernetes Benchmark. It can be run as a job or directly on nodes.\n\nLearn more: [Official Documentation](https://github.com/aquasecurity/kube-bench)',
    domain: 'Cluster Setup',
    tags: ['kube-bench', 'cis-benchmark', 'security-scanning'],
    difficulty: 'easy',
  },
  {
    id: 'cks-004',
    question: 'How can you verify the integrity of Kubernetes binaries before installation?',
    options: [
      'Run them in a sandbox environment first',
      'Verify the SHA-256 checksums against official release checksums',
      'Scan them with antivirus software',
      'Check the file size matches the expected size',
    ],
    correctAnswer: 1,
    explanation:
      'Kubernetes releases include SHA-256 checksums for all binaries. Verifying these checksums ensures the binaries have not been tampered with and match the official releases from the Kubernetes project.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/tools/)',
    domain: 'Cluster Setup',
    tags: ['binary-verification', 'integrity', 'installation'],
    difficulty: 'medium',
  },
  {
    id: 'cks-005',
    question:
      'When configuring Ingress TLS termination, what is the recommended practice for storing TLS certificates?',
    options: [
      'Store them in ConfigMaps for easy access',
      'Embed them directly in Ingress annotations',
      'Store them as Kubernetes Secrets of type kubernetes.io/tls',
      'Store them in environment variables',
    ],
    correctAnswer: 2,
    explanation:
      'TLS certificates should be stored as Kubernetes Secrets of type kubernetes.io/tls. This type ensures proper structure (tls.crt and tls.key) and can be encrypted at rest with proper etcd encryption configuration.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls)',
    domain: 'Cluster Setup',
    tags: ['ingress', 'tls', 'secrets', 'certificates'],
    difficulty: 'medium',
  },
  {
    id: 'cks-006',
    question:
      'What is the primary security benefit of using a GUI-less operating system for Kubernetes nodes?',
    options: [
      'Reduced attack surface with fewer packages and services',
      'Faster boot times',
      'Better container performance',
      'Simplified logging',
    ],
    correctAnswer: 0,
    explanation:
      'GUI-less (minimal) operating systems have fewer installed packages and running services, which reduces the attack surface. Fewer components mean fewer potential vulnerabilities and less maintenance overhead for security patches.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/setup/best-practices/node-conformance/)',
    domain: 'Cluster Setup',
    tags: ['node-security', 'attack-surface', 'os-hardening'],
    difficulty: 'easy',
  },

  // ============================================
  // DOMAIN: Cluster Hardening (15%) - 9 questions
  // ============================================
  {
    id: 'cks-007',
    question:
      'Which Kubernetes RBAC resource should be used to grant permissions across all namespaces?',
    options: ['Role', 'RoleBinding', 'ClusterRole', 'ServiceAccount'],
    correctAnswer: 2,
    explanation:
      'ClusterRole is used to define permissions that apply cluster-wide or across all namespaces. A Role only grants permissions within a specific namespace. ClusterRoles can be bound using ClusterRoleBinding for cluster-wide access.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)',
    domain: 'Cluster Hardening',
    tags: ['rbac', 'clusterrole', 'authorization'],
    difficulty: 'easy',
  },
  {
    id: 'cks-008',
    question:
      'What is the security implication of using the default ServiceAccount in a namespace?',
    options: [
      'It has no API access by default',
      'It automatically gets cluster-admin privileges',
      'It cannot mount secrets',
      'It may have been granted excessive permissions by cluster administrators',
    ],
    correctAnswer: 3,
    explanation:
      'The default ServiceAccount in each namespace may have been granted additional permissions by administrators. Best practice is to create dedicated ServiceAccounts for each workload with minimal required permissions.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)',
    domain: 'Cluster Hardening',
    tags: ['service-accounts', 'rbac', 'least-privilege'],
    difficulty: 'medium',
  },
  {
    id: 'cks-009',
    question:
      'How can you prevent a ServiceAccount token from being automatically mounted into pods?',
    options: [
      'Set automountServiceAccountToken: false in the pod spec or ServiceAccount',
      'Delete the ServiceAccount',
      'Remove the token secret',
      'Use a NetworkPolicy to block token access',
    ],
    correctAnswer: 0,
    explanation:
      'Setting automountServiceAccountToken: false either in the ServiceAccount or in the Pod spec prevents the automatic mounting of the ServiceAccount token. This reduces the attack surface if the pod is compromised.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#opt-out-of-api-credential-automounting)',
    domain: 'Cluster Hardening',
    tags: ['service-accounts', 'tokens', 'security'],
    difficulty: 'medium',
  },
  {
    id: 'cks-010',
    question: 'What is the purpose of the NodeRestriction admission controller?',
    options: [
      'Limiting which nodes can join the cluster',
      'Preventing nodes from running privileged containers',
      'Limiting resource usage per node',
      'Restricting kubelet to only modify its own Node and Pod objects',
    ],
    correctAnswer: 3,
    explanation:
      'The NodeRestriction admission controller limits a kubelet to only modify its own Node object and Pod objects that are bound to its node. This prevents a compromised node from affecting other nodes or pods.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#noderestriction)',
    domain: 'Cluster Hardening',
    tags: ['admission-controllers', 'node-security', 'kubelet'],
    difficulty: 'hard',
  },
  {
    id: 'cks-011',
    question: 'Which API server flag should be set to ensure all API requests are authenticated?',
    options: [
      '--authorization-mode=RBAC',
      '--enable-admission-plugins=NodeRestriction',
      '--anonymous-auth=false',
      '--audit-log-path=/var/log/audit.log',
    ],
    correctAnswer: 2,
    explanation:
      'Setting --anonymous-auth=false on the API server ensures that all requests must be authenticated. Without this, anonymous requests may be allowed depending on authorization configuration.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#anonymous-requests)',
    domain: 'Cluster Hardening',
    tags: ['api-server', 'authentication', 'hardening'],
    difficulty: 'medium',
  },
  {
    id: 'cks-012',
    question:
      'What is the recommended way to restrict which users can impersonate other users or groups?',
    options: [
      'Disable user impersonation entirely',
      'Grant impersonate verb only to specific subjects via RBAC',
      'Configure the API server to log all impersonation attempts',
      'Use network policies to block impersonation requests',
    ],
    correctAnswer: 1,
    explanation:
      'User impersonation is controlled through RBAC. The impersonate verb can be granted for users, groups, and serviceaccounts resources. Only trusted subjects like cluster administrators should have this permission.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation)',
    domain: 'Cluster Hardening',
    tags: ['rbac', 'impersonation', 'authorization'],
    difficulty: 'hard',
  },
  {
    id: 'cks-013',
    question: 'How do you restrict API access to only allow specific API groups and resources?',
    options: [
      'Using NetworkPolicies',
      'Using RBAC Roles with specific apiGroups and resources',
      'Using Admission Webhooks',
      'Using Pod Security Policies',
    ],
    correctAnswer: 1,
    explanation:
      'RBAC Roles and ClusterRoles can specify exact apiGroups, resources, and verbs to restrict access. This follows the principle of least privilege by only granting necessary permissions.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)',
    domain: 'Cluster Hardening',
    tags: ['rbac', 'api-access', 'least-privilege'],
    difficulty: 'medium',
  },
  {
    id: 'cks-014',
    question: 'What is the security benefit of upgrading Kubernetes to the latest patch version?',
    options: [
      'New features improve security automatically',
      'Older versions are no longer supported by cloud providers',
      'Security vulnerabilities and CVEs are patched in newer versions',
      'Performance improvements reduce resource usage',
    ],
    correctAnswer: 2,
    explanation:
      'Kubernetes patch releases include security fixes for known vulnerabilities (CVEs). Staying current with patches ensures your cluster is protected against known exploits. Always review release notes for security-related changes.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/setup/release/version-skew-policy/)',
    domain: 'Cluster Hardening',
    tags: ['upgrades', 'cve', 'patching'],
    difficulty: 'easy',
  },
  {
    id: 'cks-015',
    question: 'Which practice helps prevent privilege escalation through RBAC?',
    options: [
      'Avoiding the use of wildcards (*) in RBAC rules',
      'Using only ClusterRoles instead of Roles',
      'Granting cluster-admin to all developers',
      'Disabling RBAC entirely',
    ],
    correctAnswer: 0,
    explanation:
      'Wildcards (*) in RBAC rules grant broad permissions that can lead to unintended privilege escalation. Being specific about verbs, resources, and apiGroups ensures minimal necessary permissions are granted.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/rbac-good-practices/)',
    domain: 'Cluster Hardening',
    tags: ['rbac', 'privilege-escalation', 'best-practices'],
    difficulty: 'medium',
  },

  // ============================================
  // DOMAIN: System Hardening (15%) - 9 questions
  // ============================================
  {
    id: 'cks-016',
    question: 'What is the purpose of seccomp profiles in Kubernetes?',
    options: [
      'To encrypt container communication',
      'To manage container networking',
      'To control container resource usage',
      'To limit which system calls a container can make to the kernel',
    ],
    correctAnswer: 3,
    explanation:
      'Seccomp (Secure Computing Mode) profiles restrict the system calls a container can make to the Linux kernel. This reduces the attack surface by preventing containers from using potentially dangerous system calls.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tutorials/security/seccomp/)',
    domain: 'System Hardening',
    tags: ['seccomp', 'system-calls', 'container-security'],
    difficulty: 'medium',
  },
  {
    id: 'cks-017',
    question:
      'Which securityContext field enables the RuntimeDefault seccomp profile for a container?',
    options: [
      'seccompProfile: { type: RuntimeDefault }',
      'seccomp: runtime/default',
      'profile: seccomp-default',
      'systemCallFilter: default',
    ],
    correctAnswer: 0,
    explanation:
      'The securityContext.seccompProfile.type field set to RuntimeDefault applies the container runtime default seccomp profile. This is recommended as a baseline security measure for all containers.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tutorials/security/seccomp/#create-pod-with-a-seccomp-profile-for-syscall-auditing)',
    domain: 'System Hardening',
    tags: ['seccomp', 'security-context', 'runtime'],
    difficulty: 'medium',
  },
  {
    id: 'cks-018',
    question: 'What is AppArmor used for in Kubernetes security?',
    options: [
      'Network segmentation between pods',
      'API server authentication',
      'Container image vulnerability scanning',
      'Mandatory access control to restrict container capabilities',
    ],
    correctAnswer: 3,
    explanation:
      'AppArmor is a Linux security module that provides mandatory access control. In Kubernetes, it restricts what files containers can access and what operations they can perform, providing defense-in-depth.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tutorials/security/apparmor/)',
    domain: 'System Hardening',
    tags: ['apparmor', 'mac', 'linux-security'],
    difficulty: 'medium',
  },
  {
    id: 'cks-019',
    question: 'How do you apply an AppArmor profile to a container in Kubernetes?',
    options: [
      'Using a ConfigMap mounted as /etc/apparmor.d/',
      'Using the container.apparmor.security.beta.kubernetes.io annotation',
      'Using a dedicated AppArmor CRD',
      'Setting appArmorProfile in the container securityContext',
    ],
    correctAnswer: 3,
    explanation:
      'As of Kubernetes 1.30+, AppArmor profiles are configured using the securityContext.appArmorProfile field. For older versions, the container.apparmor.security.beta.kubernetes.io annotation was used.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tutorials/security/apparmor/)',
    domain: 'System Hardening',
    tags: ['apparmor', 'security-context', 'annotations'],
    difficulty: 'hard',
  },
  {
    id: 'cks-020',
    question: 'What is the purpose of reducing host namespace sharing in pods?',
    options: [
      'To improve container performance',
      'To allow containers to share storage',
      'To enable better logging',
      'To prevent containers from accessing host processes, network, and IPC',
    ],
    correctAnswer: 3,
    explanation:
      'Host namespace sharing (hostPID, hostNetwork, hostIPC) allows containers to access host-level resources. Disabling these prevents container escape attacks and maintains isolation between container and host.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'System Hardening',
    tags: ['namespaces', 'isolation', 'host-access'],
    difficulty: 'medium',
  },
  {
    id: 'cks-021',
    question: 'Which Linux kernel feature provides namespace isolation for containers?',
    options: ['SELinux', 'cgroups', 'iptables', 'Linux namespaces (pid, net, mnt, etc.)'],
    correctAnswer: 3,
    explanation:
      'Linux namespaces provide isolation for various system resources including process IDs (pid), network (net), mount points (mnt), users (user), and more. Containers use these namespaces for isolation from the host and other containers.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/linux-kernel-security-constraints/)',
    domain: 'System Hardening',
    tags: ['namespaces', 'linux', 'isolation'],
    difficulty: 'medium',
  },
  {
    id: 'cks-022',
    question: 'What command would you use to check open ports on a Kubernetes node?',
    options: [
      'kubectl get ports',
      'ss -tulpn or netstat -tulpn',
      'docker port list',
      'crictl ports',
    ],
    correctAnswer: 1,
    explanation:
      'The ss (socket statistics) or netstat commands with -tulpn flags show TCP/UDP listening ports with process information. This helps identify unnecessary services that should be disabled for security.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/setup/best-practices/node-conformance/)',
    domain: 'System Hardening',
    tags: ['node-security', 'ports', 'hardening'],
    difficulty: 'easy',
  },
  {
    id: 'cks-023',
    question: 'Why should you limit or disable kernel modules on Kubernetes nodes?',
    options: [
      'To reduce boot time',
      'To improve container startup speed',
      'To prevent loading of potentially vulnerable or unnecessary kernel code',
      'To enable better networking',
    ],
    correctAnswer: 2,
    explanation:
      'Unnecessary kernel modules can introduce security vulnerabilities or be exploited by attackers. Using /etc/modprobe.d/ to blacklist modules or configuring kernel parameters reduces the attack surface.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/securing-a-cluster/)',
    domain: 'System Hardening',
    tags: ['kernel', 'modules', 'hardening'],
    difficulty: 'hard',
  },
  {
    id: 'cks-024',
    question: 'What is the security benefit of using read-only root filesystems in containers?',
    options: [
      'Containers start faster with read-only filesystems',
      'Reduces container image size',
      'Prevents attackers from persisting malware or modifying binaries',
      'Enables better container logging',
    ],
    correctAnswer: 2,
    explanation:
      'A read-only root filesystem prevents attackers from writing malicious files, modifying system binaries, or persisting malware. Writable areas can be provided through emptyDir or other volume mounts as needed.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/#set-the-security-context-for-a-container)',
    domain: 'System Hardening',
    tags: ['filesystem', 'read-only', 'security-context'],
    difficulty: 'easy',
  },

  // ============================================
  // DOMAIN: Minimize Microservice Vulnerabilities (20%) - 12 questions
  // ============================================
  {
    id: 'cks-025',
    question: 'What is the purpose of Pod Security Standards in Kubernetes?',
    options: [
      'To define security profiles (Privileged, Baseline, Restricted) for pods',
      'To manage pod networking',
      'To schedule pods efficiently',
      'To monitor pod health',
    ],
    correctAnswer: 0,
    explanation:
      'Pod Security Standards define three policies: Privileged (unrestricted), Baseline (minimally restrictive), and Restricted (heavily restricted). These provide a standard way to enforce security policies across clusters.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['pod-security-standards', 'pss', 'policies'],
    difficulty: 'medium',
  },
  {
    id: 'cks-026',
    question: 'How do you enforce Pod Security Standards at the namespace level?',
    options: [
      'Using namespace labels like pod-security.kubernetes.io/enforce',
      'Using a ConfigMap',
      'Using a Custom Resource Definition',
      'Using a DaemonSet',
    ],
    correctAnswer: 0,
    explanation:
      'Pod Security Admission uses namespace labels to enforce standards. Labels like pod-security.kubernetes.io/enforce: restricted will reject non-compliant pods in that namespace.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/pod-security-admission/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['psa', 'namespaces', 'labels'],
    difficulty: 'medium',
  },
  {
    id: 'cks-027',
    question: 'What is OPA Gatekeeper used for in Kubernetes?',
    options: [
      'Container image building',
      'Policy-based admission control using Rego policies',
      'Network traffic encryption',
      'Log aggregation',
    ],
    correctAnswer: 1,
    explanation:
      'OPA Gatekeeper is an admission controller that enforces policies written in Rego. It validates resources against customizable policies and can reject non-compliant configurations.\n\nLearn more: [Official Documentation](https://open-policy-agent.github.io/gatekeeper/website/docs/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['opa', 'gatekeeper', 'admission-control', 'rego'],
    difficulty: 'hard',
  },
  {
    id: 'cks-028',
    question:
      'Which Kubernetes resource is used to store sensitive data like passwords and API keys?',
    options: ['ConfigMap', 'Secret', 'PersistentVolume', 'ResourceQuota'],
    correctAnswer: 1,
    explanation:
      'Secrets are designed to store sensitive data. They are base64 encoded by default and can be encrypted at rest with proper etcd encryption configuration. Access should be restricted via RBAC.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/secret/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['secrets', 'sensitive-data', 'encryption'],
    difficulty: 'easy',
  },
  {
    id: 'cks-029',
    question:
      'What is the security risk of using environment variables to pass secrets to containers?',
    options: [
      'Environment variables are slower than volumes',
      'Environment variables cannot store large secrets',
      'Environment variables are not supported in Kubernetes',
      'Environment variables may be logged, visible in process listings, or leaked in crash dumps',
    ],
    correctAnswer: 3,
    explanation:
      'Environment variables can appear in logs, process listings (/proc), and crash dumps. Volume-mounted secrets are preferred as they can be more easily protected and are not exposed in the same ways.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['secrets', 'environment-variables', 'security-risks'],
    difficulty: 'medium',
  },
  {
    id: 'cks-030',
    question: 'How can you encrypt Kubernetes Secrets at rest in etcd?',
    options: [
      'Secrets are automatically encrypted',
      'Configure EncryptionConfiguration with the API server',
      'Use a third-party secrets manager only',
      'Enable TLS on etcd',
    ],
    correctAnswer: 1,
    explanation:
      'Encryption at rest requires configuring an EncryptionConfiguration file and passing it to the API server via --encryption-provider-config. This encrypts Secret data before storing in etcd.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/encrypt-data/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['secrets', 'encryption', 'etcd'],
    difficulty: 'hard',
  },
  {
    id: 'cks-031',
    question: 'What is the purpose of a RuntimeClass in Kubernetes?',
    options: [
      'To define resource limits',
      'To configure network policies',
      'To select different container runtimes with varying isolation levels',
      'To manage storage classes',
    ],
    correctAnswer: 2,
    explanation:
      'RuntimeClass allows you to select different container runtime configurations. This enables using runtimes like gVisor or Kata Containers that provide stronger isolation through sandboxing or virtualization.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/containers/runtime-class/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['runtime-class', 'container-runtime', 'isolation'],
    difficulty: 'hard',
  },
  {
    id: 'cks-032',
    question: 'What container runtime provides additional isolation through kernel virtualization?',
    options: ['containerd', 'Docker', 'Kata Containers', 'CRI-O'],
    correctAnswer: 2,
    explanation:
      'Kata Containers runs each container in a lightweight virtual machine, providing hardware-level isolation. This adds a strong security boundary compared to traditional namespace-based isolation.\n\nLearn more: [Official Documentation](https://katacontainers.io/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['kata-containers', 'isolation', 'virtualization'],
    difficulty: 'medium',
  },
  {
    id: 'cks-033',
    question: 'What is gVisor and how does it improve container security?',
    options: [
      'A network policy engine',
      'An application-level kernel that intercepts container system calls',
      'A container image scanner',
      'A secrets management tool',
    ],
    correctAnswer: 1,
    explanation:
      'gVisor is a user-space kernel that intercepts and handles container system calls, providing an additional isolation layer. It reduces the attack surface by limiting direct kernel access.\n\nLearn more: [Official Documentation](https://gvisor.dev/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['gvisor', 'sandbox', 'system-calls'],
    difficulty: 'hard',
  },
  {
    id: 'cks-034',
    question: 'What is the security benefit of using mutual TLS (mTLS) in a service mesh?',
    options: [
      'Faster network communication',
      'Simplified certificate management',
      'Reduced network latency',
      'Both client and server authenticate each other, ensuring encrypted and verified communication',
    ],
    correctAnswer: 3,
    explanation:
      'mTLS ensures both parties in a connection authenticate each other using certificates. This prevents man-in-the-middle attacks, ensures traffic encryption, and verifies the identity of communicating services.\n\nLearn more: [Official Documentation](https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['mtls', 'service-mesh', 'encryption'],
    difficulty: 'medium',
  },
  {
    id: 'cks-035',
    question:
      'Which securityContext setting prevents a process from gaining more privileges than its parent?',
    options: [
      'runAsNonRoot: true',
      'privileged: false',
      'readOnlyRootFilesystem: true',
      'allowPrivilegeEscalation: false',
    ],
    correctAnswer: 3,
    explanation:
      'allowPrivilegeEscalation: false sets the no_new_privs flag, preventing the container process from gaining additional privileges through setuid binaries or other privilege escalation mechanisms.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['security-context', 'privilege-escalation', 'hardening'],
    difficulty: 'medium',
  },
  {
    id: 'cks-036',
    question:
      'How should you handle secrets when using external secrets management systems like HashiCorp Vault?',
    options: [
      'Use a secrets operator or CSI driver to inject secrets directly into pods',
      'Copy secrets from Vault into Kubernetes Secrets manually',
      'Store Vault credentials in ConfigMaps',
      'Disable Kubernetes Secrets entirely',
    ],
    correctAnswer: 0,
    explanation:
      'Secrets operators (like External Secrets Operator) or CSI drivers (like Secrets Store CSI Driver) automatically sync secrets from external systems like Vault into pods, maintaining security and enabling automatic rotation.\n\nLearn more: [Official Documentation](https://secrets-store-csi-driver.sigs.k8s.io/)',
    domain: 'Minimize Microservice Vulnerabilities',
    tags: ['vault', 'secrets-management', 'csi-driver'],
    difficulty: 'hard',
  },

  // ============================================
  // DOMAIN: Supply Chain Security (20%) - 12 questions
  // ============================================
  {
    id: 'cks-037',
    question: 'What is the primary purpose of container image scanning?',
    options: [
      'To reduce image size',
      'To identify known vulnerabilities (CVEs) in image packages',
      'To verify image format compliance',
      'To improve container startup time',
    ],
    correctAnswer: 1,
    explanation:
      'Container image scanning analyzes image contents to identify known vulnerabilities (CVEs) in OS packages and application dependencies. This enables remediation before deployment to production.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/verify-signed-artifacts/)',
    domain: 'Supply Chain Security',
    tags: ['image-scanning', 'cve', 'vulnerabilities'],
    difficulty: 'easy',
  },
  {
    id: 'cks-038',
    question: 'Which tool is commonly used for scanning container images for vulnerabilities?',
    options: ['kubectl', 'Trivy', 'etcdctl', 'kubeadm'],
    correctAnswer: 1,
    explanation:
      'Trivy is a popular open-source vulnerability scanner that can scan container images, filesystems, and git repositories. It detects vulnerabilities in OS packages and application dependencies.\n\nLearn more: [Official Documentation](https://trivy.dev/)',
    domain: 'Supply Chain Security',
    tags: ['trivy', 'image-scanning', 'security-tools'],
    difficulty: 'easy',
  },
  {
    id: 'cks-039',
    question: 'What is the purpose of image signing with tools like Cosign?',
    options: [
      'To compress images for faster transfer',
      'To encrypt image contents',
      'To convert image formats',
      'To cryptographically verify image authenticity and integrity',
    ],
    correctAnswer: 3,
    explanation:
      'Image signing creates cryptographic signatures that verify an image has not been tampered with and comes from a trusted source. Cosign is part of the Sigstore project for keyless signing and verification.\n\nLearn more: [Official Documentation](https://docs.sigstore.dev/cosign/signing/overview/)',
    domain: 'Supply Chain Security',
    tags: ['cosign', 'image-signing', 'sigstore'],
    difficulty: 'medium',
  },
  {
    id: 'cks-040',
    question:
      'How can you enforce that only images from specific registries are deployed in a cluster?',
    options: [
      'Using an admission controller like ImagePolicyWebhook or OPA Gatekeeper',
      'Using NetworkPolicies',
      'Using ResourceQuotas',
      'Using PodDisruptionBudgets',
    ],
    correctAnswer: 0,
    explanation:
      'Admission controllers can validate image sources before allowing pod creation. ImagePolicyWebhook or OPA Gatekeeper can enforce policies that only allow images from approved registries.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook)',
    domain: 'Supply Chain Security',
    tags: ['admission-controllers', 'image-policy', 'registries'],
    difficulty: 'hard',
  },
  {
    id: 'cks-041',
    question: 'What is a Software Bill of Materials (SBOM) and why is it important?',
    options: [
      'A complete inventory of components and dependencies in a software artifact',
      'A list of hardware requirements for running software',
      'A pricing document for software licenses',
      'A deployment manifest for Kubernetes',
    ],
    correctAnswer: 0,
    explanation:
      'An SBOM lists all components, libraries, and dependencies in a software artifact. It enables vulnerability tracking, license compliance, and supply chain transparency. Tools like Syft generate SBOMs.\n\nLearn more: [Official Documentation](https://www.cisa.gov/sbom)',
    domain: 'Supply Chain Security',
    tags: ['sbom', 'supply-chain', 'dependencies'],
    difficulty: 'medium',
  },
  {
    id: 'cks-042',
    question: 'What is the security benefit of using minimal or distroless base images?',
    options: [
      'They reduce attack surface by including only essential components',
      'They are faster to download',
      'They support more applications',
      'They are easier to debug',
    ],
    correctAnswer: 0,
    explanation:
      'Minimal/distroless images contain only the application and its runtime dependencies. Fewer packages mean fewer potential vulnerabilities, a smaller attack surface, and less maintenance overhead.\n\nLearn more: [Official Documentation](https://github.com/GoogleContainerTools/distroless)',
    domain: 'Supply Chain Security',
    tags: ['base-images', 'distroless', 'attack-surface'],
    difficulty: 'easy',
  },
  {
    id: 'cks-043',
    question: 'What is the purpose of image digest pinning in Kubernetes deployments?',
    options: [
      'To ensure the exact same image is always deployed, preventing tag mutation attacks',
      'To reduce image storage requirements',
      'To improve image pull performance',
      'To enable image caching',
    ],
    correctAnswer: 0,
    explanation:
      'Image digests (sha256) are immutable identifiers. Using digests instead of tags prevents tag mutation attacks where an attacker replaces a tagged image with a malicious one.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy)',
    domain: 'Supply Chain Security',
    tags: ['image-digest', 'tags', 'immutability'],
    difficulty: 'medium',
  },
  {
    id: 'cks-044',
    question: 'Which Kubernetes admission controller validates image pull policies?',
    options: ['LimitRanger', 'ResourceQuota', 'AlwaysPullImages', 'PodSecurity'],
    correctAnswer: 2,
    explanation:
      'The AlwaysPullImages admission controller modifies every new Pod to force the image pull policy to Always. This ensures images are always pulled from the registry, preventing use of potentially outdated cached images.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#alwayspullimages)',
    domain: 'Supply Chain Security',
    tags: ['admission-controllers', 'image-pull', 'policy'],
    difficulty: 'medium',
  },
  {
    id: 'cks-045',
    question: 'What is static analysis of Kubernetes manifests used for?',
    options: [
      'Monitoring runtime behavior',
      'Detecting security misconfigurations before deployment',
      'Managing cluster resources',
      'Measuring application performance',
    ],
    correctAnswer: 1,
    explanation:
      'Static analysis tools (like kubesec, Checkov, or kube-score) analyze Kubernetes manifests to identify security misconfigurations, policy violations, and best practice deviations before deployment.\n\nLearn more: [Official Documentation](https://github.com/controlplaneio/kubesec)',
    domain: 'Supply Chain Security',
    tags: ['static-analysis', 'kubesec', 'manifests'],
    difficulty: 'medium',
  },
  {
    id: 'cks-046',
    question: 'What does the ImagePolicyWebhook admission controller do?',
    options: [
      'Pulls images automatically',
      'Scans images for vulnerabilities',
      'Calls an external service to approve or deny image deployment',
      'Signs container images',
    ],
    correctAnswer: 2,
    explanation:
      'ImagePolicyWebhook sends image information to an external backend service for approval. This enables custom image validation policies like signature verification or registry allowlisting.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#imagepolicywebhook)',
    domain: 'Supply Chain Security',
    tags: ['admission-controllers', 'image-policy', 'webhook'],
    difficulty: 'hard',
  },
  {
    id: 'cks-047',
    question: 'What is the purpose of Dockerfile linting tools like hadolint?',
    options: [
      'Identifying Dockerfile best practice violations and security issues',
      'Building Docker images faster',
      'Managing Docker registries',
      'Monitoring container health',
    ],
    correctAnswer: 0,
    explanation:
      'Hadolint analyzes Dockerfiles to identify security issues, best practice violations, and potential problems. It helps catch issues early in the development process before images are built.\n\nLearn more: [Official Documentation](https://github.com/hadolint/hadolint)',
    domain: 'Supply Chain Security',
    tags: ['hadolint', 'dockerfile', 'linting'],
    difficulty: 'easy',
  },
  {
    id: 'cks-048',
    question: 'What is the SLSA framework used for in supply chain security?',
    options: [
      'Container runtime configuration',
      'Network policy management',
      'Defining levels of build integrity and provenance assurance',
      'Secret rotation',
    ],
    correctAnswer: 2,
    explanation:
      'SLSA (Supply-chain Levels for Software Artifacts) is a framework that defines progressive levels of supply chain security maturity. It focuses on build integrity, provenance, and protecting against tampering.\n\nLearn more: [Official Documentation](https://slsa.dev/)',
    domain: 'Supply Chain Security',
    tags: ['slsa', 'provenance', 'build-integrity'],
    difficulty: 'hard',
  },

  // ============================================
  // DOMAIN: Monitoring, Logging and Runtime Security (20%) - 12 questions
  // ============================================
  {
    id: 'cks-049',
    question: 'What is Falco used for in Kubernetes security?',
    options: [
      'Container image building',
      'Network policy enforcement',
      'Secret management',
      'Runtime threat detection by monitoring system calls',
    ],
    correctAnswer: 3,
    explanation:
      'Falco is a CNCF runtime security tool that detects threats by monitoring Linux system calls. It uses rules to identify suspicious behavior like privilege escalation, file access violations, or network activity.\n\nLearn more: [Official Documentation](https://falco.org/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['falco', 'runtime-security', 'system-calls'],
    difficulty: 'medium',
  },
  {
    id: 'cks-050',
    question: 'Which type of Kubernetes audit log event captures both request and response data?',
    options: ['None', 'Metadata', 'RequestResponse', 'Request'],
    correctAnswer: 2,
    explanation:
      'The RequestResponse audit level logs the event metadata, request body, and response body. This provides the most complete audit trail but generates the largest log volume.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['audit-logging', 'api-server', 'compliance'],
    difficulty: 'medium',
  },
  {
    id: 'cks-051',
    question: 'What information does the Metadata audit level capture?',
    options: [
      'Only the timestamp',
      'Request metadata without request/response bodies',
      'Full request and response bodies',
      'Only error messages',
    ],
    correctAnswer: 1,
    explanation:
      'The Metadata level logs request metadata (user, timestamp, resource, verb) but not request or response bodies. This provides a balance between audit trail completeness and log volume.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#audit-policy)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['audit-logging', 'metadata', 'compliance'],
    difficulty: 'easy',
  },
  {
    id: 'cks-052',
    question: 'How do you configure Kubernetes API server audit logging?',
    options: [
      'Using the --audit-policy-file and --audit-log-path flags',
      'Using a ConfigMap in kube-system',
      'Through a CRD',
      'By modifying kubelet configuration',
    ],
    correctAnswer: 0,
    explanation:
      'API server audit logging is configured using --audit-policy-file (defines what to log) and --audit-log-path (where to write logs). Additional flags control log rotation and retention.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['audit-logging', 'api-server', 'configuration'],
    difficulty: 'medium',
  },
  {
    id: 'cks-053',
    question: 'What is the purpose of immutable containers in security?',
    options: [
      'To prevent configuration changes at runtime',
      'To speed up container deployment',
      'To reduce storage requirements',
      'To enable horizontal scaling',
    ],
    correctAnswer: 0,
    explanation:
      'Immutable containers cannot be modified at runtime. This prevents attackers from changing binaries, installing malware, or altering configurations. Any changes require deploying a new container image.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/pods/#pod-update-and-replacement)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['immutability', 'runtime-security', 'best-practices'],
    difficulty: 'medium',
  },
  {
    id: 'cks-054',
    question: 'Which Falco output channel sends alerts to a Kubernetes-native log collector?',
    options: ['file output', 'syslog output', 'stdout output', 'HTTP output'],
    correctAnswer: 2,
    explanation:
      'Stdout output allows Falco alerts to be captured by Kubernetes log collectors like Fluentd or Fluent Bit. This integrates Falco alerts into existing log aggregation pipelines.\n\nLearn more: [Official Documentation](https://falco.org/docs/outputs/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['falco', 'logging', 'alerting'],
    difficulty: 'medium',
  },
  {
    id: 'cks-055',
    question: 'What behavioral analysis can Falco detect in containers?',
    options: [
      'CPU usage patterns',
      'Memory allocation efficiency',
      'Storage I/O throughput',
      'Unexpected process execution, file access, and network connections',
    ],
    correctAnswer: 3,
    explanation:
      'Falco monitors system calls to detect anomalous behavior including unexpected shell executions, sensitive file access, network connections to suspicious destinations, and privilege escalation attempts.\n\nLearn more: [Official Documentation](https://falco.org/docs/rules/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['falco', 'behavioral-analysis', 'detection'],
    difficulty: 'medium',
  },
  {
    id: 'cks-056',
    question: 'What is the security purpose of centralized logging in Kubernetes?',
    options: [
      'To improve application performance',
      'To simplify deployment',
      'To reduce storage costs',
      'To enable log correlation, anomaly detection, and forensic analysis',
    ],
    correctAnswer: 3,
    explanation:
      'Centralized logging aggregates logs from all cluster components enabling correlation of events, detection of anomalies, incident investigation, and compliance audit trails.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['logging', 'centralized', 'forensics'],
    difficulty: 'easy',
  },
  {
    id: 'cks-057',
    question: 'How can you detect if a container is running a cryptocurrency miner at runtime?',
    options: [
      'Check container labels',
      'Monitor for high CPU usage combined with suspicious network connections and process names',
      'Analyze container image size',
      'Review pod annotations',
    ],
    correctAnswer: 1,
    explanation:
      'Cryptojacking can be detected by monitoring for high sustained CPU usage, connections to mining pools, and processes with mining-related names. Tools like Falco can alert on these behaviors.\n\nLearn more: [Official Documentation](https://falco.org/docs/reference/rules/default-rules/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['cryptojacking', 'detection', 'runtime-security'],
    difficulty: 'hard',
  },
  {
    id: 'cks-058',
    question: 'What should you monitor to detect potential container escape attempts?',
    options: [
      'HTTP response times',
      'Container restart counts',
      'Attempts to access host paths, privileged operations, and namespace manipulation',
      'Image pull latency',
    ],
    correctAnswer: 2,
    explanation:
      'Container escape attempts often involve accessing host filesystems, attempting privileged operations, or manipulating namespaces. Runtime security tools should alert on these suspicious activities.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/security/pod-security-standards/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['container-escape', 'detection', 'monitoring'],
    difficulty: 'hard',
  },
  {
    id: 'cks-059',
    question: 'What is the benefit of using mutable vs immutable audit logging backends?',
    options: [
      'Mutable backends are more secure',
      'Immutable backends (like WORM storage) prevent tampering with audit logs',
      'Mutable backends have better performance',
      'There is no security difference',
    ],
    correctAnswer: 1,
    explanation:
      'Immutable audit logging backends (Write Once Read Many - WORM) prevent attackers from modifying or deleting audit logs to cover their tracks. This is important for forensic analysis and compliance.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['audit-logging', 'immutability', 'forensics'],
    difficulty: 'hard',
  },
  {
    id: 'cks-060',
    question:
      'Which approach helps ensure security events are not lost during high-volume periods?',
    options: [
      'Reducing audit log levels',
      'Disabling audit logging temporarily',
      'Sampling audit events randomly',
      'Using webhook backends with proper buffering and retry mechanisms',
    ],
    correctAnswer: 3,
    explanation:
      'Audit webhook backends should be configured with proper buffering, batching, and retry mechanisms to handle high-volume periods without dropping events. This ensures complete audit trails for security analysis.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/#webhook-backend)',
    domain: 'Monitoring, Logging and Runtime Security',
    tags: ['audit-logging', 'webhook', 'reliability'],
    difficulty: 'hard',
  },
];

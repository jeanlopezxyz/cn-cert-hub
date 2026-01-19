/**
 * ICA - Istio Certified Associate
 * Practice Questions
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: ica-XXX (e.g., ica-001, ica-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Istio Installation, Upgrade & Configuration (7%)
 * - Traffic Management (40%)
 * - Resilience and Fault Injection (20%)
 * - Securing Workloads (20%)
 * - Advanced Scenarios (13%)
 */

import type { Question } from '@/types/quiz';

export const ICA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Istio Installation, Upgrade & Configuration (7%)
  // ============================================
  {
    id: 'ica-001',
    question: 'What is the recommended way to install Istio?',
    options: [
      'Using istioctl install with a configuration profile',
      'kubectl apply -f istio.yaml',
      'helm install istio',
      'docker run istio',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'istioctl install is the recommended installation method. It supports configuration profiles (demo, default, minimal) and allows customization via IstioOperator API.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/install/istioctl/)',
    domain: 'Istio Installation, Upgrade & Configuration',
    tags: ['installation', 'istioctl', 'setup'],
  },
  {
    id: 'ica-002',
    question: 'What are Istio installation profiles?',
    options: [
      'Predefined configurations for different use cases (demo, default, minimal)',
      'User account settings',
      'Network configurations',
      'Security policies',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Installation profiles are predefined configurations: default (production), demo (full features with tracing), minimal (just control plane), and empty (nothing installed).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/additional-setup/config-profiles/)',
    domain: 'Istio Installation, Upgrade & Configuration',
    tags: ['profiles', 'installation', 'configuration'],
  },
  {
    id: 'ica-003',
    question: 'How do you customize Istio installation beyond profiles?',
    options: [
      'Edit Kubernetes YAML files directly',
      'Using IstioOperator API or --set flags with istioctl',
      'Modify Istio source code',
      'Customization is not supported',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Istio can be customized using IstioOperator CRD YAML files or --set flags with istioctl install, allowing control over components, resources, and configurations.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/install/istioctl/#customizing-the-configuration)',
    domain: 'Istio Installation, Upgrade & Configuration',
    tags: ['istiooperator', 'customization', 'installation'],
  },

  // ============================================
  // DOMAIN: Traffic Management (40%)
  // ============================================
  {
    id: 'ica-004',
    question: 'What is an Istio sidecar proxy?',
    options: [
      'An Envoy proxy container injected alongside application containers',
      'A separate microservice',
      'A load balancer',
      'A monitoring agent',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      "The sidecar proxy is an Envoy proxy container automatically injected into each pod. It intercepts all network traffic, enabling Istio's traffic management and security features.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/deployment/architecture/)",
    domain: 'Traffic Management',
    tags: ['sidecar', 'envoy', 'proxy'],
  },
  {
    id: 'ica-005',
    question: 'How do you enable automatic sidecar injection for a namespace?',
    options: [
      'Add the label istio-injection=enabled to the namespace',
      'Create a SidecarConfig resource',
      'Edit each deployment manually',
      'Sidecars are always injected automatically',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'Adding the label istio-injection=enabled to a namespace enables automatic sidecar injection for all new pods in that namespace.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/)',
    domain: 'Traffic Management',
    tags: ['sidecar-injection', 'namespace', 'labels'],
  },
  {
    id: 'ica-006',
    question: 'What is a VirtualService in Istio?',
    options: [
      'A virtual machine',
      'A CRD that defines traffic routing rules',
      'A Kubernetes Service',
      'A DNS record',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'VirtualService is an Istio CRD that defines how requests are routed to services. It enables features like traffic splitting, URL rewriting, and retry policies.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/)',
    domain: 'Traffic Management',
    tags: ['virtualservice', 'routing', 'crd'],
  },
  {
    id: 'ica-007',
    question: 'What is a DestinationRule in Istio?',
    options: [
      'A firewall rule',
      'A CRD that defines policies applied after routing decisions',
      'A routing table',
      'A DNS configuration',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'DestinationRule defines policies applied to traffic destined for a service, including load balancing, connection pool settings, and TLS settings. It works with VirtualService.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/destination-rule/)',
    domain: 'Traffic Management',
    tags: ['destinationrule', 'policies', 'load-balancing'],
  },
  {
    id: 'ica-008',
    question: 'What is traffic mirroring (shadowing) in Istio?',
    options: [
      'Sending a copy of live traffic to a mirrored service for testing',
      'Encrypting traffic',
      'Blocking unwanted traffic',
      'Compressing network data',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Traffic mirroring sends a copy of live traffic to a mirrored service while still forwarding to the primary destination. It enables testing with real production traffic without affecting users.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/mirroring/)',
    domain: 'Traffic Management',
    tags: ['mirroring', 'shadowing', 'testing'],
  },
  {
    id: 'ica-009',
    question: 'What is the purpose of an Istio Gateway?',
    options: [
      'Internal service-to-service communication',
      'Managing ingress and egress traffic at the mesh boundary',
      'Database connection pooling',
      'Log aggregation',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Gateway manages inbound (ingress) and outbound (egress) traffic at the mesh edge. It configures load balancers to expose services outside the mesh.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/gateway/)',
    domain: 'Traffic Management',
    tags: ['gateway', 'ingress', 'egress'],
  },
  {
    id: 'ica-010',
    question: 'What is a ServiceEntry in Istio?',
    options: [
      "A way to add external services to Istio's internal service registry",
      'A Kubernetes Service definition',
      'A logging entry',
      'A database record',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      "ServiceEntry adds entries to Istio's service registry for services outside the mesh (external APIs, databases). This enables applying Istio features to external traffic.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/service-entry/)",
    domain: 'Traffic Management',
    tags: ['serviceentry', 'external-services', 'registry'],
  },
  {
    id: 'ica-011',
    question: 'How do you implement canary deployments with Istio?',
    options: [
      'Using Kubernetes Deployments only',
      'Deploying to different clusters',
      'Using VirtualService to split traffic between service versions',
      'Using feature flags in code',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Canary deployments use VirtualService weight-based routing to split traffic (e.g., 90% to stable, 10% to canary) combined with DestinationRule subsets for version targeting.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/)',
    domain: 'Traffic Management',
    tags: ['canary', 'traffic-splitting', 'deployment'],
  },
  {
    id: 'ica-012',
    question: 'What are subsets in a DestinationRule?',
    options: [
      'Network subnets',
      'Database partitions',
      'Log categories',
      'Named versions of a service identified by labels',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Subsets define named service versions using label selectors (e.g., version: v1, version: v2). VirtualServices route traffic to specific subsets for traffic splitting.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/destination-rule/#Subset)',
    domain: 'Traffic Management',
    tags: ['subsets', 'versions', 'labels'],
  },
  {
    id: 'ica-013',
    question: 'How does Istio handle traffic to services outside the mesh by default?',
    options: [
      'All external traffic is blocked',
      'External traffic is allowed (ALLOW_ANY outbound mode)',
      'External traffic requires explicit ServiceEntry',
      'External traffic goes through a central proxy',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'By default (ALLOW_ANY mode), Istio allows traffic to external services. This can be changed to REGISTRY_ONLY to block traffic to services not in the registry.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/egress/egress-control/)',
    domain: 'Traffic Management',
    tags: ['external-traffic', 'outbound', 'configuration'],
  },

  // ============================================
  // DOMAIN: Resilience and Fault Injection (20%)
  // ============================================
  {
    id: 'ica-014',
    question: 'What is a circuit breaker in Istio?',
    options: [
      'An electrical safety device',
      'A pattern that stops sending traffic to unhealthy endpoints',
      'A firewall rule',
      'A load balancer type',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Circuit breakers prevent cascading failures by stopping traffic to endpoints that are failing. Configured in DestinationRule with connection limits and outlier detection.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/circuit-breaking/)',
    domain: 'Resilience and Fault Injection',
    tags: ['circuit-breaker', 'resilience', 'destinarionrule'],
  },
  {
    id: 'ica-015',
    question: 'What is outlier detection in Istio?',
    options: [
      'Detecting and ejecting unhealthy hosts from the load balancing pool',
      'Finding anomalies in logs',
      'Security threat detection',
      'Performance monitoring',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Outlier detection monitors endpoints for errors and ejects unhealthy hosts from the load balancing pool temporarily, implementing circuit breaker behavior.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/destination-rule/#OutlierDetection)',
    domain: 'Resilience and Fault Injection',
    tags: ['outlier-detection', 'health', 'ejection'],
  },
  {
    id: 'ica-016',
    question: 'How do you configure request timeouts in Istio?',
    options: [
      'In application code only',
      'In Kubernetes Service definition',
      'Timeouts cannot be configured',
      'In VirtualService using the timeout field',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Request timeouts are configured in VirtualService using the timeout field on routes. This applies at the mesh level without requiring application changes.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/request-timeouts/)',
    domain: 'Resilience and Fault Injection',
    tags: ['timeouts', 'virtualservice', 'configuration'],
  },
  {
    id: 'ica-017',
    question: 'How do you configure automatic retries in Istio?',
    options: [
      'Retries are automatic and cannot be configured',
      'In VirtualService using the retries field with attempts and conditions',
      'In application code only',
      'Using Kubernetes restartPolicy',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'Retries are configured in VirtualService using the retries field, specifying number of attempts, per-try timeout, and retry conditions (5xx, connect-failure, etc.).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPRetry)',
    domain: 'Resilience and Fault Injection',
    tags: ['retries', 'virtualservice', 'resilience'],
  },
  {
    id: 'ica-018',
    question: 'What is fault injection in Istio?',
    options: [
      'Introducing security vulnerabilities',
      'Logging error messages',
      'Deliberately introducing errors or delays to test resilience',
      'Blocking malicious traffic',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Fault injection deliberately introduces failures (abort with HTTP codes) or delays to test application resilience. Configured in VirtualService fault field.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/fault-injection/)',
    domain: 'Resilience and Fault Injection',
    tags: ['fault-injection', 'testing', 'chaos'],
  },
  {
    id: 'ica-019',
    question: 'What types of faults can be injected with Istio?',
    options: [
      'Only network disconnections',
      'Only HTTP 500 errors',
      'CPU overload',
      'Delays (latency) and aborts (HTTP error codes)',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Istio can inject two types of faults: delays (add latency to requests) and aborts (return specific HTTP error codes like 503 without calling the service).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPFaultInjection)',
    domain: 'Resilience and Fault Injection',
    tags: ['delays', 'aborts', 'fault-types'],
  },
  {
    id: 'ica-020',
    question: 'What is connection pool configuration in DestinationRule?',
    options: [
      'Limiting TCP and HTTP connections to prevent overload',
      'Database connection pooling',
      'VPN configuration',
      'DNS caching',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Connection pool settings in DestinationRule limit the number of connections (TCP) and requests (HTTP) to a service, preventing overload and implementing circuit breaker behavior.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/destination-rule/#ConnectionPoolSettings)',
    domain: 'Resilience and Fault Injection',
    tags: ['connection-pool', 'limits', 'circuit-breaker'],
  },

  // ============================================
  // DOMAIN: Securing Workloads (20%)
  // ============================================
  {
    id: 'ica-021',
    question: 'What is mutual TLS (mTLS) in Istio?',
    options: [
      'One-way SSL encryption',
      'Password-based authentication',
      'Token-based authentication',
      'Both client and server authenticate each other with certificates',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Mutual TLS (mTLS) requires both the client and server to present and verify certificates. Istio automatically manages certificate generation and rotation.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/concepts/security/#mutual-tls-authentication)',
    domain: 'Securing Workloads',
    tags: ['mtls', 'authentication', 'certificates'],
  },
  {
    id: 'ica-022',
    question: 'What are the mTLS modes in Istio?',
    options: [
      'ON and OFF only',
      'ENCRYPT and DECRYPT',
      'PUBLIC and PRIVATE',
      'STRICT (require mTLS), PERMISSIVE (accept both), DISABLE',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'STRICT requires mTLS for all traffic. PERMISSIVE accepts both mTLS and plaintext (useful during migration). DISABLE turns off mTLS.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/security/peer_authentication/)',
    domain: 'Securing Workloads',
    tags: ['mtls-modes', 'peer-authentication', 'security'],
  },
  {
    id: 'ica-023',
    question: 'How do you configure mTLS at the mesh level?',
    options: [
      'Edit Istio source code',
      'Create a PeerAuthentication resource in istio-system namespace',
      "Modify each pod's security context",
      'mTLS cannot be configured at mesh level',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Mesh-wide mTLS is configured by creating a PeerAuthentication resource in the istio-system namespace with no workload selector (applies to entire mesh).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/security/authentication/mtls-migration/)',
    domain: 'Securing Workloads',
    tags: ['peer-authentication', 'mesh-wide', 'configuration'],
  },
  {
    id: 'ica-024',
    question: 'What is AuthorizationPolicy in Istio?',
    options: [
      'A CRD for defining access control policies (who can access what)',
      'User authentication configuration',
      'Certificate management',
      'Network firewall rules',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'AuthorizationPolicy defines access control at the workload level. It specifies which sources can access which operations, supporting ALLOW, DENY, and CUSTOM actions.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/security/authorization-policy/)',
    domain: 'Securing Workloads',
    tags: ['authorization', 'access-control', 'rbac'],
  },
  {
    id: 'ica-025',
    question: 'What are the action types in AuthorizationPolicy?',
    options: [
      'GRANT and REVOKE',
      'READ and WRITE',
      'ACCEPT and REJECT',
      'ALLOW, DENY, AUDIT, and CUSTOM',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'AuthorizationPolicy supports ALLOW (permit matching requests), DENY (reject matching requests), AUDIT (log matching requests), and CUSTOM (delegate to external authorizer).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/concepts/security/#authorization)',
    domain: 'Securing Workloads',
    tags: ['authorization-actions', 'policy', 'security'],
  },
  {
    id: 'ica-026',
    question: 'How does Istio handle certificate management?',
    options: [
      'Certificates must be manually created',
      'Uses external CA only',
      'Certificates are optional',
      'Istiod automatically generates, distributes, and rotates certificates',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Istiod acts as a certificate authority, automatically generating workload certificates (SPIFFE SVIDs), distributing them to proxies, and rotating them before expiration.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/concepts/security/#pki)',
    domain: 'Securing Workloads',
    tags: ['certificates', 'istiod', 'automation'],
  },
  {
    id: 'ica-027',
    question: 'What is a SPIFFE identity in Istio?',
    options: [
      'A username and password',
      'A URI-based identity format (spiffe://cluster.local/ns/namespace/sa/service-account)',
      'An IP address',
      'A DNS name',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'SPIFFE (Secure Production Identity Framework For Everyone) provides URI-based identities. Istio uses SPIFFE IDs based on service accounts for workload identity.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/concepts/security/#istio-identity)',
    domain: 'Securing Workloads',
    tags: ['spiffe', 'identity', 'service-accounts'],
  },

  // ============================================
  // DOMAIN: Advanced Scenarios (13%)
  // ============================================
  {
    id: 'ica-028',
    question: 'How can VMs be added to an Istio mesh?',
    options: [
      'VMs cannot be part of an Istio mesh',
      'Converting VMs to containers',
      'Using a VPN only',
      'Using WorkloadEntry and installing Istio sidecar on the VM',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'VMs can join the mesh using WorkloadEntry (registers the VM) and WorkloadGroup (template for VMs). The Istio sidecar is installed on the VM to enable mesh features.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/deployment/vm-architecture/)',
    domain: 'Advanced Scenarios',
    tags: ['vm', 'workloadentry', 'hybrid'],
  },
  {
    id: 'ica-029',
    question: 'What command helps troubleshoot Istio configuration issues?',
    options: ['kubectl describe', 'istioctl analyze', 'istioctl debug', 'kubectl logs'],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'istioctl analyze checks for configuration issues, misconfigurations, and best practice violations. It can analyze live clusters or local files.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/istioctl-analyze/)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'istioctl', 'analyze'],
  },
  {
    id: 'ica-030',
    question: 'How do you view the Envoy proxy configuration for a pod?',
    options: [
      'kubectl describe pod',
      'View /etc/envoy/envoy.yaml',
      'istioctl proxy-config (clusters, listeners, routes)',
      'Check ConfigMaps',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'istioctl proxy-config commands show Envoy configuration for a pod: clusters (endpoints), listeners (ports), routes (routing rules), and secrets (certificates).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/)',
    domain: 'Advanced Scenarios',
    tags: ['proxy-config', 'envoy', 'debugging'],
  },
  {
    id: 'ica-031',
    question: 'What is multi-cluster mesh in Istio?',
    options: [
      'Running Istio on multiple namespaces',
      'Connecting multiple Kubernetes clusters into a single service mesh',
      'Load balancing between clusters',
      'Backup cluster configuration',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Multi-cluster mesh connects multiple Kubernetes clusters under a single Istio control plane or multiple synchronized control planes, enabling cross-cluster service discovery and traffic management.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/install/multicluster/)',
    domain: 'Advanced Scenarios',
    tags: ['multi-cluster', 'federation', 'advanced'],
  },
  {
    id: 'ica-032',
    question: 'What is the Kiali dashboard used for in Istio?',
    options: [
      'Installing Istio',
      'Managing certificates',
      'Writing Istio policies',
      'Visualizing service mesh topology, traffic flow, and configuration',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Kiali is an observability console for Istio providing visualization of service mesh topology, traffic flows, health status, and configuration validation.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/integrations/kiali/)',
    domain: 'Advanced Scenarios',
    tags: ['kiali', 'observability', 'visualization'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Istio Installation
  // ============================================
  {
    id: 'ica-033',
    question: 'What is the purpose of the Istio CNI plugin?',
    options: [
      'Replacing the service mesh',
      'Managing DNS resolution',
      'Configuring traffic interception without requiring init containers or elevated privileges',
      'Installing network policies',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'The Istio CNI plugin configures pod traffic redirection at the network level, eliminating the need for init containers with NET_ADMIN capability.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/additional-setup/cni/)',
    domain: 'Istio Installation, Upgrade & Configuration',
    tags: ['cni', 'installation', 'security'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Traffic Management
  // ============================================
  {
    id: 'ica-034',
    question: 'What is header-based routing in Istio?',
    options: [
      'Routing based on DNS headers',
      'Encrypting headers',
      'Compressing headers',
      'Routing requests based on HTTP header values',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Header-based routing uses HTTP headers to make routing decisions. VirtualService match conditions can route based on exact, prefix, or regex header matches.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/request-routing/)',
    domain: 'Traffic Management',
    tags: ['header-routing', 'match', 'virtualservice'],
  },
  {
    id: 'ica-035',
    question: 'What is URL rewriting in Istio?',
    options: [
      'Modifying the URI or authority of a request before forwarding',
      'Changing DNS records',
      'Encrypting URLs',
      'Logging URL access',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'URL rewriting modifies the URI path or host header before forwarding the request. Configured in VirtualService using the rewrite field.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPRewrite)',
    domain: 'Traffic Management',
    tags: ['rewrite', 'uri', 'virtualservice'],
  },
  {
    id: 'ica-036',
    question: 'What load balancing algorithms does Istio support?',
    options: [
      'Only round robin',
      'Only weighted routing',
      'Load balancing is not supported',
      'Round robin, random, least connection, consistent hash, and more',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'DestinationRule supports multiple load balancing algorithms: ROUND_ROBIN, RANDOM, LEAST_REQUEST, PASSTHROUGH, and consistent hash (for session affinity).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/destination-rule/#LoadBalancerSettings)',
    domain: 'Traffic Management',
    tags: ['load-balancing', 'destinationrule', 'algorithms'],
  },
  {
    id: 'ica-037',
    question: 'What is consistent hash load balancing used for?',
    options: [
      'Spreading load evenly',
      'Implementing session affinity by routing based on headers, cookies, or source IP',
      'Encrypting traffic',
      'Logging requests',
    ],
    correctAnswer: 1,
    difficulty: 'hard',
    explanation:
      'Consistent hash load balancing routes requests with the same hash key to the same backend, enabling session affinity based on headers, cookies, or source IP.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/destination-rule/#LoadBalancerSettings-ConsistentHashLB)',
    domain: 'Traffic Management',
    tags: ['consistent-hash', 'session-affinity', 'load-balancing'],
  },
  {
    id: 'ica-038',
    question: 'What is the Sidecar resource used for in Istio?',
    options: [
      'Installing sidecars',
      'Debugging proxies',
      'Managing certificates',
      'Controlling the scope of sidecar proxy configuration to reduce resource usage',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'The Sidecar CRD limits which services a sidecar proxy is configured to reach, reducing memory usage and improving performance in large meshes.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/sidecar/)',
    domain: 'Traffic Management',
    tags: ['sidecar', 'scope', 'optimization'],
  },
  {
    id: 'ica-039',
    question: 'What is locality-aware load balancing in Istio?',
    options: [
      'Preferring endpoints in the same region/zone to reduce latency',
      'Load balancing based on time of day',
      'Geographic DNS routing',
      'Local file caching',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Locality-aware load balancing prefers endpoints in the same locality (region/zone) to reduce latency. It fails over to other localities when local endpoints are unhealthy.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/locality-load-balancing/)',
    domain: 'Traffic Management',
    tags: ['locality', 'load-balancing', 'multi-region'],
  },
  {
    id: 'ica-040',
    question: 'How do you configure request headers modification in Istio?',
    options: [
      'In application code only',
      'Using VirtualService headers field to add, set, or remove headers',
      'In Kubernetes Ingress',
      'Headers cannot be modified',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'VirtualService allows modifying request and response headers using the headers field, with operations to set, add, or remove headers.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/#Headers)',
    domain: 'Traffic Management',
    tags: ['headers', 'modification', 'virtualservice'],
  },
  {
    id: 'ica-041',
    question: 'What is an EnvoyFilter in Istio?',
    options: [
      'A log filter',
      'A security filter',
      'A custom configuration for extending or overriding Envoy proxy behavior',
      'A network filter',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'EnvoyFilter allows direct customization of Envoy proxy configuration, enabling advanced use cases not covered by standard Istio APIs. Use with caution.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/envoy-filter/)',
    domain: 'Traffic Management',
    tags: ['envoyfilter', 'customization', 'advanced'],
  },
  {
    id: 'ica-042',
    question: 'What is traffic shifting vs traffic splitting?',
    options: [
      'They are identical concepts',
      'Shifting is for security; splitting is for performance',
      'Shifting uses DNS; splitting uses proxies',
      'Shifting is gradual migration; splitting is concurrent routing to multiple versions',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'Traffic shifting gradually moves traffic from one version to another. Traffic splitting routes a percentage of traffic to multiple versions simultaneously.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/)',
    domain: 'Traffic Management',
    tags: ['traffic-shifting', 'traffic-splitting', 'deployment'],
  },
  {
    id: 'ica-043',
    question: 'What protocol does Istio use for xDS configuration?',
    options: ['HTTP/1.1', 'REST API', 'gRPC-based xDS (ADS, EDS, CDS, LDS, RDS)', 'SOAP'],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Istiod uses gRPC-based xDS APIs to push configuration to Envoy proxies: ADS (Aggregated), EDS (Endpoint), CDS (Cluster), LDS (Listener), RDS (Route).\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/deployment/architecture/#istiod)',
    domain: 'Traffic Management',
    tags: ['xds', 'configuration', 'envoy'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Resilience and Fault Injection
  // ============================================
  {
    id: 'ica-044',
    question: 'What is the difference between delay and abort fault injection?',
    options: [
      'Delay is faster than abort',
      'Abort is for timeouts; delay is for errors',
      'They are the same',
      'Delay adds latency; abort returns error codes without calling the service',
    ],
    correctAnswer: 3,
    difficulty: 'medium',
    explanation:
      'Delay fault injection adds artificial latency to requests. Abort fault injection returns an error code immediately without forwarding the request.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/traffic-management/fault-injection/)',
    domain: 'Resilience and Fault Injection',
    tags: ['delay', 'abort', 'fault-injection'],
  },
  {
    id: 'ica-045',
    question: 'How do you apply fault injection to only a percentage of requests?',
    options: [
      'Use multiple VirtualServices',
      'Configure the percentage field in the fault injection specification',
      'Random selection is not supported',
      'Use external tools',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'The fault injection specification includes a percentage field that determines what fraction of requests receive the injected fault.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPFaultInjection-Delay)',
    domain: 'Resilience and Fault Injection',
    tags: ['percentage', 'fault-injection', 'configuration'],
  },
  {
    id: 'ica-046',
    question: 'What is the purpose of retryOn conditions in VirtualService?',
    options: [
      'Defining which error conditions trigger automatic retries',
      'Specifying when to log retries',
      'Setting retry delays',
      'Counting total retries',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'retryOn specifies which conditions trigger retries: 5xx (server errors), connect-failure, retriable-4xx, reset, retriable-status-codes, and more.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/networking/virtual-service/#HTTPRetry)',
    domain: 'Resilience and Fault Injection',
    tags: ['retryOn', 'conditions', 'resilience'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Securing Workloads
  // ============================================
  {
    id: 'ica-047',
    question: 'What is RequestAuthentication in Istio?',
    options: [
      'HTTP Basic Auth configuration',
      'mTLS configuration',
      'JWT token validation configuration for workloads',
      'API key validation',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'RequestAuthentication defines how JWTs are validated for requests to a workload, specifying issuers, JWKS URIs, and claims to extract.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/security/request_authentication/)',
    domain: 'Securing Workloads',
    tags: ['jwt', 'request-authentication', 'tokens'],
  },
  {
    id: 'ica-048',
    question: 'How can you deny all traffic to a workload by default?',
    options: [
      'Delete the service',
      'Disable the sidecar',
      'Use NetworkPolicy only',
      'Create an AuthorizationPolicy with no rules (empty policy)',
    ],
    correctAnswer: 3,
    difficulty: 'hard',
    explanation:
      'An AuthorizationPolicy with no rules explicitly denies all traffic to the selected workloads, implementing a deny-by-default security posture.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/security/authorization/authz-deny/)',
    domain: 'Securing Workloads',
    tags: ['deny-all', 'authorization', 'security'],
  },
  {
    id: 'ica-049',
    question: 'What are principals in AuthorizationPolicy?',
    options: [
      'Database principals',
      'Network addresses',
      'Identities (service accounts) that are allowed or denied access',
      'HTTP methods',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Principals are source identities (based on SPIFFE IDs/service accounts) used in AuthorizationPolicy rules to specify who can access the workload.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/reference/config/security/authorization-policy/#Source)',
    domain: 'Securing Workloads',
    tags: ['principals', 'identity', 'authorization'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Advanced Scenarios
  // ============================================
  {
    id: 'ica-050',
    question: 'What is istioctl proxy-status used for?',
    options: [
      'Showing synchronization status between Istiod and proxies',
      'Installing proxies',
      'Restarting proxies',
      'Updating proxy version',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'istioctl proxy-status shows whether each proxy is in sync with Istiod configuration, helping identify configuration distribution issues.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/#verifying-connectivity-to-istiod)',
    domain: 'Advanced Scenarios',
    tags: ['proxy-status', 'troubleshooting', 'sync'],
  },
  {
    id: 'ica-051',
    question: 'What is the ambient mesh mode in Istio?',
    options: [
      'A low-power mode',
      'A deprecated mode',
      'A sidecar-less data plane using ztunnel and waypoint proxies',
      'A testing mode',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Ambient mesh is an alternative data plane architecture using node-level ztunnel proxies for L4 and optional waypoint proxies for L7, eliminating sidecar overhead.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ambient/)',
    domain: 'Advanced Scenarios',
    tags: ['ambient', 'ztunnel', 'sidecarless'],
  },

  // ============================================
  // ADDITIONAL QUESTIONS - Troubleshooting (20% weight)
  // ============================================
  {
    id: 'ica-052',
    question:
      'A pod is not receiving traffic despite being in the mesh. Which istioctl command helps diagnose proxy configuration issues?',
    options: [
      'istioctl dashboard',
      'istioctl proxy-config listeners <pod-name>',
      'istioctl version',
      'istioctl install --verify',
    ],
    correctAnswer: 1,
    difficulty: 'medium',
    explanation:
      'istioctl proxy-config listeners shows the listener configuration in the Envoy proxy, helping diagnose why traffic may not be reaching the pod. Other subcommands include clusters, routes, endpoints, and secrets.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'proxy-config', 'listeners'],
  },
  {
    id: 'ica-053',
    question:
      'You suspect sidecar injection is failing for pods in a namespace. What is the FIRST thing to check?',
    options: [
      'Check if the namespace has the istio-injection=enabled label',
      'Restart Istiod',
      'Reinstall Istio',
      'Delete and recreate the pods',
    ],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation:
      'The first step is to verify the namespace has the istio-injection=enabled label. Without this label, automatic sidecar injection will not occur. Use kubectl get namespace <name> --show-labels to check.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'sidecar-injection', 'namespace'],
  },
  {
    id: 'ica-054',
    question: 'What does istioctl analyze do when troubleshooting Istio configurations?',
    options: [
      'It only checks YAML syntax',
      'It restarts failed proxies',
      'It detects configuration issues, warnings, and best practice violations',
      'It generates traffic for testing',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'istioctl analyze validates Istio configuration against best practices and detects common issues like missing destination rules, conflicting virtual services, and security misconfigurations. It can analyze live clusters or local YAML files.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/istioctl-analyze/)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'analyze', 'validation'],
  },
  {
    id: 'ica-055',
    question:
      'A service is experiencing intermittent mTLS failures. Which command shows the TLS mode and certificate information for a proxy?',
    options: [
      'kubectl describe secret',
      'istioctl authn tls-check',
      'istioctl proxy-config secret <pod-name>',
      'openssl s_client',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'istioctl proxy-config secret displays the certificates loaded in the Envoy proxy, including their validity and expiration. This helps diagnose mTLS issues caused by certificate problems.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/#inspecting-bootstrap-configuration)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'mtls', 'certificates'],
  },
  {
    id: 'ica-056',
    question: 'Where can you find Envoy access logs for debugging traffic routing issues?',
    options: [
      'In the application container logs',
      'In the Istiod logs only',
      'In the istio-proxy container logs of the pod',
      'In Kubernetes events',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'Envoy access logs are available in the istio-proxy container logs. Use kubectl logs <pod-name> -c istio-proxy to view them. Access logs show request details, response codes, and timing information.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/tasks/observability/logs/access-log/)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'access-logs', 'envoy'],
  },
  {
    id: 'ica-057',
    question:
      'You notice SYNCED status for all proxies but traffic is still not routing correctly. What should you check next with istioctl?',
    options: [
      'istioctl proxy-config routes <pod-name> to verify routing rules',
      'istioctl upgrade',
      'istioctl uninstall',
      'istioctl manifest generate',
    ],
    correctAnswer: 0,
    difficulty: 'hard',
    explanation:
      'Even when proxies are synced, route configuration might not match expectations. istioctl proxy-config routes shows the actual routing rules in the Envoy proxy, helping identify mismatches between intended and actual routing.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/diagnostic-tools/proxy-cmd/#routes)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'routes', 'proxy-config'],
  },
  {
    id: 'ica-058',
    question:
      'A VirtualService is configured but requests are not being routed to the expected subset. What common issue should you check?',
    options: [
      'The Gateway configuration',
      'The Envoy version',
      'Whether a DestinationRule with matching subsets exists for the service',
      'The Kubernetes Service port name',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'VirtualService routes to subsets require a corresponding DestinationRule that defines those subsets with appropriate label selectors. Without the DestinationRule, subset routing will fail. istioctl analyze can detect this mismatch.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/ops/common-problems/network-issues/#route-rules-dont-seem-to-affect-traffic-flow)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'subsets', 'destinationrule'],
  },
  {
    id: 'ica-059',
    question: 'What information does the response_flags field in Envoy access logs provide?',
    options: [
      'HTTP response headers',
      'Application error messages',
      'Flags indicating why a request failed (e.g., NR=no route, UH=no healthy upstream)',
      'Request body content',
    ],
    correctAnswer: 2,
    difficulty: 'hard',
    explanation:
      'Response flags in Envoy access logs indicate specific failure reasons: NR (no route), UH (no healthy upstream), UF (upstream connection failure), UC (upstream connection termination), and more. These are critical for diagnosing traffic issues.\n\nLearn more: [Documentación oficial](https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log-format-response-flags)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'response-flags', 'access-logs'],
  },
  {
    id: 'ica-060',
    question:
      'When troubleshooting why a sidecar was not injected into a pod, which annotation on the pod would prevent injection?',
    options: [
      'istio.io/rev=default',
      'proxy.istio.io/config',
      'sidecar.istio.io/inject=false',
      'traffic.sidecar.istio.io/includeOutboundIPRanges',
    ],
    correctAnswer: 2,
    difficulty: 'medium',
    explanation:
      'The annotation sidecar.istio.io/inject=false explicitly disables sidecar injection for a specific pod, even if the namespace has injection enabled. This is useful for pods that should not have a sidecar.\n\nLearn more: [Documentación oficial](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/#controlling-the-injection-policy)',
    domain: 'Advanced Scenarios',
    tags: ['troubleshooting', 'sidecar-injection', 'annotations'],
  },
];

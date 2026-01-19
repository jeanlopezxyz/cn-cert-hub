/**
 * CCA - Cilium Certified Associate
 * Practice Questions (60 questions - matches exam format)
 *
 * How to contribute:
 * 1. Add new questions following the Question interface
 * 2. Use unique IDs: cca-XXX (e.g., cca-001, cca-002)
 * 3. Match domain names exactly with exam domains
 * 4. Provide clear explanations for each answer
 * 5. Tag questions for better organization
 *
 * Exam Domains:
 * - Architecture (20%) - 12 questions
 * - Network Policy (18%) - 11 questions
 * - Service Mesh (16%) - 9 questions
 * - Network Observability (10%) - 6 questions
 * - Installation and Configuration (10%) - 6 questions
 * - Cluster Mesh (10%) - 6 questions
 * - eBPF (10%) - 7 questions
 * - BGP and External Networking (6%) - 3 questions
 */

import type { Question } from '@/types/quiz';

export const CCA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Architecture (20%)
  // ============================================
  {
    id: 'cca-001',
    question:
      'A platform engineer notices that after scaling a deployment from 10 to 100 replicas, some pods are unable to obtain IP addresses. The cluster uses Cilium with the default IPAM mode. Which component should be investigated first to resolve this issue?',
    options: [
      'The Cilium Operator logs for IPAM allocation failures',
      'The kube-controller-manager for node CIDR assignments',
      'The kubelet logs for CNI plugin errors',
      'The Cilium agent logs on nodes where pods are pending',
    ],
    correctAnswer: 0,
    explanation:
      'In Cluster Pool IPAM mode (the default), the Cilium Operator is responsible for allocating IP ranges to nodes and managing the cluster-wide IP pool. When pods cannot obtain IPs after scaling, the Operator logs should be checked first for IPAM exhaustion or allocation issues.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/concepts/ipam/cluster-pool/)',
    domain: 'Architecture',
    difficulty: 'medium',
    tags: ['ipam', 'operator', 'troubleshooting', 'scaling'],
  },
  {
    id: 'cca-002',
    question:
      'An organization requires that pod IPs are routable from their on-premises network without NAT. They are running Kubernetes on AWS EKS. Which Cilium IPAM mode should be configured to meet this requirement?',
    options: [
      'AWS ENI mode',
      'Cluster Pool with native routing enabled',
      'CRD-backed IPAM with custom CIDRs',
      'Kubernetes Host Scope mode',
    ],
    correctAnswer: 0,
    explanation:
      'AWS ENI mode allocates IPs directly from the VPC subnet to pods via Elastic Network Interfaces, making pod IPs natively routable within the VPC and to peered networks including on-premises. This eliminates the need for NAT or overlay networks.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/concepts/ipam/eni/)',
    domain: 'Architecture',
    difficulty: 'medium',
    tags: ['ipam', 'aws', 'eni', 'native-routing'],
  },
  {
    id: 'cca-003',
    question:
      'When examining Cilium architecture, which statement accurately describes the relationship between endpoints and identities?',
    options: [
      'Each endpoint has a unique identity based on its IP address',
      'Each pod namespace has a single identity shared by all endpoints within it',
      'Identities are assigned per node and shared by all endpoints on that node',
      'Endpoints sharing the same security-relevant labels receive the same numeric identity',
    ],
    correctAnswer: 3,
    explanation:
      'Cilium assigns numeric identities based on security-relevant labels (pod labels, namespace, service account). Multiple endpoints with identical label sets share the same identity, enabling efficient policy enforcement using identity-based lookups in eBPF maps rather than IP-based rules.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#identity-based)',
    domain: 'Architecture',
    difficulty: 'medium',
    tags: ['identity', 'endpoint', 'labels', 'security'],
  },
  {
    id: 'cca-004',
    question:
      'A DevOps team is troubleshooting network latency issues in their Cilium-managed cluster. They discover that traffic between pods on different nodes is being encapsulated. Which configuration change would eliminate this encapsulation overhead while maintaining pod-to-pod connectivity?',
    options: [
      'Enable DSR (Direct Server Return) mode for services',
      'Switch from VXLAN to Geneve encapsulation',
      'Enable eBPF host routing to bypass the kernel network stack',
      'Configure native routing mode with appropriate network infrastructure support',
    ],
    correctAnswer: 3,
    explanation:
      'Native routing mode eliminates encapsulation by using the underlying network infrastructure to route pod traffic directly. This requires the network (physical or cloud) to have routes for pod CIDRs, often achieved via BGP peering or cloud-native routing tables.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/concepts/routing/#native-routing)',
    domain: 'Architecture',
    difficulty: 'hard',
    tags: ['routing', 'native-routing', 'encapsulation', 'performance'],
  },
  {
    id: 'cca-005',
    question:
      'In a Cilium deployment, what is the primary function of the cilium-agent process running on each node?',
    options: [
      'Compiling and loading eBPF programs, managing endpoints, and enforcing network policies',
      'Synchronizing CiliumNetworkPolicy resources across the cluster',
      'Managing the etcd cluster used for Cilium state storage',
      'Providing the API server for Hubble observability queries',
    ],
    correctAnswer: 0,
    explanation:
      'The cilium-agent runs as a DaemonSet on each node and is responsible for compiling/loading eBPF programs into the kernel, managing local endpoints (pods), implementing network policies, handling service load balancing, and communicating with the Cilium Operator for cluster-wide coordination.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/overview/component-overview/)',
    domain: 'Architecture',
    difficulty: 'medium',
    tags: ['cilium-agent', 'ebpf', 'components'],
  },
  {
    id: 'cca-006',
    question:
      'A security team requires that all inter-node pod traffic be encrypted. The cluster runs on bare-metal servers with limited CPU resources. Which Cilium encryption option provides the best performance for this scenario?',
    options: [
      'WireGuard transparent encryption',
      'IPsec with AES-GCM-128 cipher',
      'IPsec with AES-CBC-256 cipher',
      'Mutual TLS via Cilium Service Mesh',
    ],
    correctAnswer: 0,
    explanation:
      'WireGuard provides better performance than IPsec due to its simpler cryptographic design and more efficient kernel implementation. It uses modern cryptography (ChaCha20, Poly1305) that performs well on systems without AES-NI hardware acceleration, making it ideal for CPU-constrained environments.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/network/encryption-wireguard/)',
    domain: 'Architecture',
    difficulty: 'hard',
    tags: ['encryption', 'wireguard', 'ipsec', 'performance'],
  },
  {
    id: 'cca-007',
    question:
      'When Cilium is configured to replace kube-proxy, which eBPF feature enables efficient service load balancing with consistent hashing for long-lived connections?',
    options: [
      'XDP-based packet steering',
      'Maglev consistent hashing algorithm',
      'Socket-level load balancing with BPF_PROG_TYPE_SOCK_OPS',
      'TC-BPF redirect actions',
    ],
    correctAnswer: 1,
    explanation:
      'Cilium implements Maglev consistent hashing for service load balancing when replacing kube-proxy. Maglev provides minimal disruption during backend changes and consistent backend selection, which is crucial for long-lived connections and stateful services.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/#maglev-consistent-hashing)',
    domain: 'Architecture',
    difficulty: 'hard',
    tags: ['kube-proxy', 'maglev', 'load-balancing', 'ebpf'],
  },
  {
    id: 'cca-008',
    question:
      'A cluster administrator observes that the Cilium Operator is running but shows warnings about "kvstore client not configured". What does this indicate about the Cilium deployment?',
    options: [
      'The cluster is using CRD-based state storage instead of etcd',
      'The etcd cluster is unreachable and Cilium is in degraded mode',
      'The Operator requires manual etcd configuration',
      'Cilium identity allocation will fail without kvstore access',
    ],
    correctAnswer: 0,
    explanation:
      'When using the Kubernetes CRD backend (the default), no external kvstore is required. The warning indicates Cilium is operating normally using CRDs for state storage. The kvstore (etcd) backend is optional and only needed for specific use cases like external etcd clusters or Cluster Mesh with older configurations.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/installation/k8s-install-helm/#configure-cilium)',
    domain: 'Architecture',
    difficulty: 'medium',
    tags: ['operator', 'etcd', 'crd', 'state-storage'],
  },
  {
    id: 'cca-009',
    question:
      "In Cilium's datapath, what determines whether traffic between two pods on the same node traverses the kernel network stack or uses eBPF fast-path?",
    options: [
      'Whether the pods are in the same namespace',
      'Whether eBPF host routing is enabled and the kernel version supports it',
      'The routing mode configuration (tunnel vs native)',
      'The type of network policy applied to the pods',
    ],
    correctAnswer: 1,
    explanation:
      'eBPF host routing, when enabled on supported kernels (5.10+), allows Cilium to bypass the kernel network stack for local pod-to-pod traffic. This significantly reduces latency and CPU overhead by handling packet forwarding entirely in eBPF without going through iptables or the routing subsystem.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/operations/performance/tuning/#ebpf-host-routing)',
    domain: 'Architecture',
    difficulty: 'hard',
    tags: ['datapath', 'host-routing', 'performance', 'ebpf'],
  },
  {
    id: 'cca-010',
    question:
      'Which statement correctly describes how Cilium handles Kubernetes Service traffic when operating in kube-proxy replacement mode?',
    options: [
      'Services are resolved at the socket layer using connect-time load balancing, avoiding per-packet NAT',
      'All service traffic is forwarded to a central Envoy proxy for load balancing',
      'Service resolution happens in user space via the cilium-agent proxy',
      'ClusterIP services use iptables while LoadBalancer services use eBPF',
    ],
    correctAnswer: 0,
    explanation:
      "Cilium's socket-level load balancing (socket-LB) intercepts connect() syscalls and performs service-to-backend translation at connection time. This eliminates per-packet DNAT, preserves client source IPs, and significantly improves performance compared to traditional iptables-based kube-proxy.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/#socket-level-load-balancing)",
    domain: 'Architecture',
    difficulty: 'hard',
    tags: ['kube-proxy', 'socket-lb', 'services', 'performance'],
  },

  // ============================================
  // DOMAIN: Network Policy (18%)
  // ============================================
  {
    id: 'cca-011',
    question:
      'A CiliumNetworkPolicy is applied with an empty endpointSelector ({}). In a namespace with 50 pods, what is the effect of this policy?',
    options: [
      'The policy is invalid and will be rejected by the API server',
      'The policy applies to all pods in the namespace',
      'The policy applies only to pods without any labels',
      'The policy applies to no pods until a selector is specified',
    ],
    correctAnswer: 1,
    explanation:
      "An empty endpointSelector ({}) matches all endpoints in the policy's namespace, similar to an empty selector in Kubernetes. This is commonly used to apply default deny policies or namespace-wide rules. Be cautious as this affects all current and future pods in the namespace.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#endpointselector)",
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['endpoint-selector', 'policy', 'namespace'],
  },
  {
    id: 'cca-012',
    question:
      'An application team needs to allow their frontend pods to communicate with an external API at "api.example.com" while blocking all other egress traffic. Which CiliumNetworkPolicy configuration achieves this?',
    options: [
      'Use toFQDNs with matchName: "api.example.com" in egress rules',
      'Use toEndpoints with matchLabels for the external API',
      'Use toServices referencing a Kubernetes ExternalName service',
      'Use toCIDR with the resolved IP addresses of api.example.com',
    ],
    correctAnswer: 0,
    explanation:
      'toFQDNs allows specifying external destinations by DNS name. Cilium intercepts DNS responses and dynamically updates the allowed IP list as DNS records change. This is more maintainable than static IP rules and handles DNS-based load balancing correctly.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#dns-based)',
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['fqdn', 'egress', 'dns', 'policy'],
  },
  {
    id: 'cca-013',
    question:
      'A security engineer needs to implement a policy that allows HTTP GET requests to /api/v1/public/* but denies POST requests to the same path. Which Cilium policy feature enables this level of control?',
    options: [
      'Custom Envoy filters attached via CiliumEnvoyConfig',
      'toPorts with protocol: HTTP and port rules',
      'Layer 7 rules with HTTP method and path matching in toPorts.rules.http',
      'toEndpoints with HTTP-specific label selectors',
    ],
    correctAnswer: 2,
    explanation:
      'CiliumNetworkPolicy supports Layer 7 HTTP rules within the toPorts section using rules.http. You can specify allowed methods (GET, POST, etc.), paths (with regex support), and headers to create fine-grained HTTP access controls at the network layer.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#http)',
    domain: 'Network Policy',
    difficulty: 'hard',
    tags: ['l7', 'http', 'policy', 'method-filtering'],
  },
  {
    id: 'cca-014',
    question:
      'What is the key difference between policyEnforcementMode "default" and "always" in Cilium?',
    options: [
      '"default" applies implicit deny only to endpoints selected by a policy; "always" applies implicit deny to all endpoints',
      '"default" allows all traffic; "always" denies all traffic',
      '"default" only enforces ingress policies; "always" enforces both ingress and egress',
      '"default" logs policy decisions; "always" enforces them',
    ],
    correctAnswer: 0,
    explanation:
      'In "default" mode, endpoints without any selecting policy allow all traffic (default-allow). Once selected by any policy, implicit deny applies. In "always" mode, all endpoints have implicit deny regardless of policy selection, providing zero-trust networking where all traffic must be explicitly allowed.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/intro/#policy-enforcement-modes)',
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['enforcement-mode', 'zero-trust', 'policy'],
  },
  {
    id: 'cca-015',
    question:
      'A CiliumClusterwideNetworkPolicy needs to allow ingress traffic from the monitoring namespace to all pods with label "metrics: enabled" across all namespaces. Which selector combination achieves this?',
    options: [
      'nodeSelector with monitoring label and toEndpoints with metrics label',
      'endpointSelector with matchLabels: {metrics: enabled} and fromNamespaces with monitoring label',
      'endpointSelector with matchLabels: {metrics: enabled} and fromEndpoints with k8s:io.kubernetes.pod.namespace: monitoring',
      'Both B and C would work correctly',
    ],
    correctAnswer: 3,
    explanation:
      'Both approaches work: using the k8s:io.kubernetes.pod.namespace reserved label in fromEndpoints or using the fromNamespaces selector. CiliumClusterwideNetworkPolicy can select endpoints across namespaces with endpointSelector, and both ingress source specifications correctly identify the monitoring namespace.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#ciliumclusterwidenetworkpolicy)',
    domain: 'Network Policy',
    difficulty: 'hard',
    tags: ['ccnp', 'namespace', 'cross-namespace', 'policy'],
  },
  {
    id: 'cca-016',
    question:
      'When a CiliumNetworkPolicy with both ingress and egress rules selects an endpoint, what happens to traffic not explicitly allowed by the rules?',
    options: [
      'All traffic not matching allow rules is denied (implicit deny)',
      'Traffic is allowed but logged for auditing',
      'Traffic is queued until an explicit deny rule is added',
      'Ingress traffic is denied; egress traffic is allowed by default',
    ],
    correctAnswer: 0,
    explanation:
      'Once any CiliumNetworkPolicy selects an endpoint, the endpoint enters a "policy-aware" state where implicit deny applies. Only traffic explicitly allowed by ingress or egress rules is permitted; all other traffic is dropped. This follows the whitelisting security model.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/intro/#rule-basics)',
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['implicit-deny', 'whitelist', 'policy'],
  },
  {
    id: 'cca-017',
    question:
      'A policy administrator needs to allow all pods in namespace "frontend" to access any ClusterIP service in namespace "backend". Which policy construct is most appropriate?',
    options: [
      'toServices with k8s:io.kubernetes.service.namespace: backend',
      'toEndpoints selecting all pods in backend namespace',
      'toCIDR with the backend namespace service CIDR range',
      'toEntities with entity: cluster',
    ],
    correctAnswer: 0,
    explanation:
      "toServices allows selecting Kubernetes services by labels, including the namespace label. This is more precise than toEndpoints as it specifically allows access to the service VIP, and it automatically handles service endpoint changes. It's the recommended approach for service-to-service communication policies.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#services-based)",
    domain: 'Network Policy',
    difficulty: 'hard',
    tags: ['toServices', 'service-access', 'policy'],
  },
  {
    id: 'cca-018',
    question:
      'What is the effect of specifying toEntities: [world] in a CiliumNetworkPolicy egress rule?',
    options: [
      'Allows traffic to any IP address outside the cluster',
      'Allows traffic to any endpoint that is not managed by Cilium',
      'Allows traffic only to endpoints with the "world" identity label',
      'Allows traffic to any IP address including cluster-internal IPs',
    ],
    correctAnswer: 0,
    explanation:
      'The "world" entity represents all IP addresses that are not part of the cluster (not having a Cilium identity). This includes external internet destinations, on-premises networks, and any IP not assigned to a Cilium-managed endpoint. It does not include cluster-internal traffic.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#entities-based)',
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['entities', 'world', 'egress', 'policy'],
  },
  {
    id: 'cca-019',
    question:
      'An administrator applies a CiliumNetworkPolicy but notices it has no effect on existing connections. What explains this behavior?',
    options: [
      'Cilium uses connection tracking and policies apply to new connections, not existing ones',
      'The policy has a syntax error preventing enforcement',
      'Policies are only enforced after the cilium-agent is restarted',
      'Policies require manual activation via cilium policy enable command',
    ],
    correctAnswer: 0,
    explanation:
      'Cilium maintains connection tracking (conntrack) state. Existing established connections continue to be allowed based on their conntrack entries until they terminate. New policies apply to new connection attempts. To enforce policies on existing connections, they must be terminated or the conntrack entries cleared.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/intro/)',
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['conntrack', 'connection-tracking', 'policy-enforcement'],
  },

  // ============================================
  // DOMAIN: Service Mesh (16%)
  // ============================================
  {
    id: 'cca-020',
    question:
      'A company wants to implement mutual TLS between services without modifying applications or deploying sidecars. Which Cilium feature addresses this requirement?',
    options: [
      'WireGuard node-to-node encryption',
      'Cilium Service Mesh with SPIFFE-based mutual authentication',
      'IPsec with pre-shared keys',
      'Cilium Network Policies with TLS inspection enabled',
    ],
    correctAnswer: 1,
    explanation:
      'Cilium Service Mesh provides sidecar-less mTLS using eBPF and SPIFFE identities. It transparently handles TLS at the socket layer without requiring application changes or sidecar proxies. Workload identities are derived from Kubernetes metadata and managed automatically.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/mutual-authentication/mutual-authentication/)',
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['mtls', 'service-mesh', 'spiffe', 'sidecarless'],
  },
  {
    id: 'cca-021',
    question:
      'When configuring Cilium Gateway API, what is the relationship between GatewayClass, Gateway, and HTTPRoute resources?',
    options: [
      'GatewayClass defines routing rules, Gateway defines listeners, HTTPRoute defines the controller',
      'All three resources are interchangeable and define the same ingress configuration',
      'GatewayClass specifies the controller, Gateway defines listeners and ports, HTTPRoute defines routing rules attached to Gateway listeners',
      'GatewayClass and Gateway are for TCP; HTTPRoute is only for HTTP/2 traffic',
    ],
    correctAnswer: 2,
    explanation:
      'GatewayClass specifies which controller (e.g., Cilium) handles Gateways of that class. Gateway defines listeners (ports, protocols, TLS config) and references a GatewayClass. HTTPRoute defines HTTP-specific routing rules and attaches to Gateway listeners via parentRefs. This separation enables role-based ownership.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/)',
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['gateway-api', 'gatewayclass', 'httproute'],
  },
  {
    id: 'cca-022',
    question:
      "An organization is migrating from Istio to Cilium Service Mesh. Which architectural benefit does Cilium's approach provide over Istio's sidecar model?",
    options: [
      'Better support for gRPC protocol',
      'Native support for Kubernetes NetworkPolicy resources',
      'Automatic certificate rotation via cert-manager integration',
      'Reduced resource overhead and latency by eliminating per-pod proxy containers',
    ],
    correctAnswer: 3,
    explanation:
      'Cilium Service Mesh operates at the kernel level using eBPF, eliminating the need for sidecar proxy containers. This reduces memory and CPU overhead per pod, removes sidecar injection complexity, decreases latency by avoiding extra network hops, and simplifies troubleshooting by having fewer components.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/)',
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['sidecarless', 'performance', 'istio-migration'],
  },
  {
    id: 'cca-023',
    question:
      'Which statement accurately describes how Cilium handles L7 traffic visibility and policy enforcement?',
    options: [
      'L7 visibility requires enabling a global feature flag that proxies all cluster traffic',
      'L7 processing is triggered only when a policy with L7 rules matches the traffic or visibility annotations are present',
      'All L7 traffic is always proxied through Envoy for inspection',
      'L7 policies can only be enforced on ingress traffic, not egress',
    ],
    correctAnswer: 1,
    explanation:
      'Cilium uses selective L7 proxying for efficiency. Traffic is only redirected to the Envoy proxy when needed: either when matching a CiliumNetworkPolicy with L7 rules, when pods have visibility annotations, or when using features like mutual authentication. L4-only traffic bypasses the proxy entirely.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#layer-7-examples)',
    domain: 'Service Mesh',
    difficulty: 'hard',
    tags: ['l7', 'envoy', 'proxy', 'visibility'],
  },
  {
    id: 'cca-024',
    question:
      'A platform team needs to configure traffic splitting for canary deployments using Gateway API. Which HTTPRoute feature enables sending 10% of traffic to a canary service?',
    options: [
      'Creating separate HTTPRoutes with priority annotations',
      'Configuring backendRefs with weight fields totaling 100',
      'Setting up header-based routing to the canary backend',
      'Using multiple rules with different path matches',
    ],
    correctAnswer: 1,
    explanation:
      "HTTPRoute supports weighted traffic splitting via the weight field in backendRefs. To send 10% to canary, configure backendRefs with stable service (weight: 90) and canary service (weight: 10). Weights are relative and don't need to sum to 100, but it's conventional.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/http/#traffic-splitting)",
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['gateway-api', 'traffic-splitting', 'canary', 'httproute'],
  },
  {
    id: 'cca-025',
    question:
      "When using Cilium's Gateway API implementation, which component actually terminates TLS for HTTPS listeners?",
    options: [
      'The cilium-agent on each node',
      'The application pods directly',
      'A kube-proxy managed load balancer',
      'A dedicated Envoy proxy deployment managed by Cilium',
    ],
    correctAnswer: 3,
    explanation:
      'Cilium deploys and manages Envoy proxy instances for Gateway API functionality. TLS termination, HTTP routing, and L7 processing are handled by these Envoy instances. Cilium automatically configures Envoy based on Gateway, HTTPRoute, and related resources.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/)',
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['gateway-api', 'envoy', 'tls', 'termination'],
  },
  {
    id: 'cca-026',
    question:
      'What advantage does Gateway API provide over the traditional Kubernetes Ingress API for advanced use cases?',
    options: [
      'Gateway API has better backward compatibility with older Kubernetes versions',
      'Gateway API is simpler with fewer resources to manage',
      'Gateway API works without any controller installation',
      'Gateway API supports TCP/UDP routing, traffic splitting, header manipulation, and cross-namespace references natively',
    ],
    correctAnswer: 3,
    explanation:
      'Gateway API extends beyond HTTP/HTTPS with native support for TCP, UDP, gRPC, and TLS passthrough. It provides built-in traffic management (splitting, mirroring), header manipulation, cross-namespace routing, and extensibility through policy attachments—features that required vendor-specific annotations in Ingress.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/gateway-api/gateway-api/)',
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['gateway-api', 'ingress', 'comparison'],
  },
  {
    id: 'cca-027',
    question:
      'A developer wants to enable HTTP request/response visibility for their application pods without creating network policies. How can this be achieved in Cilium?',
    options: [
      'Deploy Hubble with L7 mode enabled',
      'Add the policy.cilium.io/proxy-visibility annotation to pods',
      'Enable global L7 visibility in the Cilium ConfigMap',
      'Configure CiliumEnvoyConfig with access logging',
    ],
    correctAnswer: 1,
    explanation:
      'The policy.cilium.io/proxy-visibility annotation enables L7 visibility for specific pods without requiring a network policy. The annotation format specifies protocols and ports: e.g., "<Ingress/80/TCP/HTTP>". This redirects matching traffic through the proxy for visibility without enforcing policy.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/visibility/)',
    domain: 'Service Mesh',
    difficulty: 'medium',
    tags: ['visibility', 'annotation', 'l7', 'proxy'],
  },
  {
    id: 'cca-028',
    question:
      'In a Cilium Service Mesh deployment, what determines whether two services can establish a mutually authenticated connection?',
    options: [
      'Both services must have TLS certificates signed by the same CA',
      'Both services must be annotated with service.cilium.io/mutual-auth: enabled',
      'The services must be in the same namespace',
      'A CiliumNetworkPolicy with authentication.mode: required must allow the connection',
    ],
    correctAnswer: 3,
    explanation:
      'Cilium mutual authentication is enabled through CiliumNetworkPolicy by setting authentication.mode to "required" in ingress rules. When set, Cilium only allows connections from endpoints that successfully complete mutual TLS authentication with valid SPIFFE identities.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/servicemesh/mutual-authentication/mutual-authentication/)',
    domain: 'Service Mesh',
    difficulty: 'hard',
    tags: ['mtls', 'authentication', 'policy', 'spiffe'],
  },

  // ============================================
  // DOMAIN: Network Observability (10%)
  // ============================================
  {
    id: 'cca-029',
    question:
      'A network administrator needs to identify which pods are generating the most DNS queries in the cluster. Which Hubble command provides this information?',
    options: [
      'hubble observe --type dns --aggregate source',
      'hubble observe --type l7 --protocol DNS',
      'hubble observe --protocol DNS --follow',
      'hubble metrics dns --group-by pod',
    ],
    correctAnswer: 1,
    explanation:
      'To observe DNS queries, use hubble observe with --type l7 to see Layer 7 flows and --protocol DNS to filter DNS traffic specifically. This shows DNS queries and responses including query names, types, and response codes, helping identify pods with high DNS activity.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/hubble/hubble-cli/)',
    domain: 'Network Observability',
    difficulty: 'medium',
    tags: ['hubble', 'dns', 'observability'],
  },
  {
    id: 'cca-030',
    question:
      'What must be deployed to query Hubble flow data from multiple nodes through a single API endpoint?',
    options: [
      'Hubble UI with cluster-wide access',
      'Hubble Relay service',
      'A dedicated Hubble aggregator pod',
      'Prometheus with Hubble metrics endpoint',
    ],
    correctAnswer: 1,
    explanation:
      'Hubble Relay is a cluster-wide component that connects to local Hubble instances on each node and provides a unified gRPC API for cluster-wide flow queries. Without Relay, Hubble CLI can only query the local node. Hubble UI and multi-node CLI queries require Relay.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/hubble/setup/#hubble-relay)',
    domain: 'Network Observability',
    difficulty: 'medium',
    tags: ['hubble-relay', 'cluster-wide', 'observability'],
  },
  {
    id: 'cca-031',
    question:
      'An SRE is troubleshooting dropped traffic between two services. Which Hubble command helps identify if the drops are due to policy denials?',
    options: [
      'hubble observe --from-pod <source> --to-pod <dest>',
      'hubble status --policy-drops',
      'hubble policy trace <source> <dest>',
      'hubble observe --verdict DROPPED --from-pod <source> --to-pod <dest>',
    ],
    correctAnswer: 3,
    explanation:
      "The --verdict DROPPED filter shows only dropped flows. Combined with --from-pod and --to-pod, this reveals why traffic between specific pods is being blocked. The drop reason in the output indicates if it's a policy denial (POLICY_DENIED) or other cause like unknown endpoint.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/hubble/hubble-cli/#observing-flows)",
    domain: 'Network Observability',
    difficulty: 'medium',
    tags: ['hubble', 'troubleshooting', 'policy', 'drops'],
  },
  {
    id: 'cca-032',
    question:
      'Which Hubble feature provides a real-time graphical visualization of service-to-service communication patterns?',
    options: [
      'Grafana dashboards with Hubble data source',
      'Prometheus visualization of hubble_flows_total metric',
      'Hubble CLI with --output graph flag',
      'Hubble UI service map',
    ],
    correctAnswer: 3,
    explanation:
      'Hubble UI provides an interactive service dependency map showing real-time traffic flows between services. It visualizes which services communicate, their protocols, success/failure rates, and helps identify anomalies in service communication patterns.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/hubble/hubble-ui/)',
    domain: 'Network Observability',
    difficulty: 'medium',
    tags: ['hubble-ui', 'service-map', 'visualization'],
  },
  {
    id: 'cca-033',
    question:
      'How can an administrator enable Hubble metrics export to Prometheus for long-term network observability?',
    options: [
      'Configure Hubble to write flows to a Prometheus remote write endpoint',
      'Deploy the Prometheus Cilium exporter sidecar',
      'Use hubble observe --format prometheus to stream metrics',
      'Enable the Hubble metrics server and configure Prometheus to scrape the /metrics endpoint',
    ],
    correctAnswer: 3,
    explanation:
      "Cilium agent exposes Hubble metrics in Prometheus format when enabled via Helm (hubble.metrics.enabled). Metrics include flow counts, drop reasons, HTTP request durations, and DNS query stats. Prometheus scrapes these from each Cilium agent's metrics port.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/metrics/)",
    domain: 'Network Observability',
    difficulty: 'medium',
    tags: ['hubble', 'prometheus', 'metrics', 'monitoring'],
  },
  {
    id: 'cca-034',
    question:
      'When using Hubble to observe flows, what does the "identity" field in flow output represent?',
    options: [
      'The Kubernetes service account of the pod',
      "The pod's unique identifier in the cluster",
      'A numeric identifier derived from endpoint labels used for policy decisions',
      'The TLS certificate fingerprint of the endpoint',
    ],
    correctAnswer: 2,
    explanation:
      'Cilium identities are numeric values computed from security-relevant labels. They enable efficient policy enforcement in eBPF using integer comparisons instead of string matching. Hubble displays these identities to help correlate flows with policies and understand which label-sets are communicating.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/hubble/)',
    domain: 'Network Observability',
    difficulty: 'medium',
    tags: ['hubble', 'identity', 'labels'],
  },

  // ============================================
  // DOMAIN: Installation and Configuration (10%)
  // ============================================
  {
    id: 'cca-035',
    question:
      'After installing Cilium, the "cilium status" command shows "KVStore: Disabled". What does this indicate about the installation?',
    options: [
      'Cilium installation has failed and requires etcd to be configured',
      'Cilium is using Kubernetes CRDs for state storage instead of an external kvstore',
      'Cluster Mesh functionality is not available',
      'Identity allocation is disabled and policies cannot be enforced',
    ],
    correctAnswer: 1,
    explanation:
      'KVStore: Disabled indicates Cilium is using the default CRD-based backend for storing state (identities, endpoints, policies). This is the recommended configuration for most deployments. An external etcd kvstore is optional and typically only used for specific scenarios like legacy Cluster Mesh setups.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/operations/system_requirements/#kvstore)',
    domain: 'Installation and Configuration',
    difficulty: 'medium',
    tags: ['cilium-status', 'kvstore', 'crd', 'installation'],
  },
  {
    id: 'cca-036',
    question:
      'Which Cilium CLI command validates that network connectivity is working correctly including policy enforcement?',
    options: [
      'cilium status --verbose',
      'cilium endpoint list',
      'cilium config view',
      'cilium connectivity test',
    ],
    correctAnswer: 3,
    explanation:
      'The "cilium connectivity test" deploys test pods and runs comprehensive tests including pod-to-pod connectivity, service access, policy enforcement, and external connectivity. It validates the entire Cilium datapath and reports detailed results for troubleshooting.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/operations/troubleshooting/#cilium-connectivity-test)',
    domain: 'Installation and Configuration',
    difficulty: 'medium',
    tags: ['connectivity-test', 'validation', 'troubleshooting'],
  },
  {
    id: 'cca-037',
    question:
      'An administrator needs to install Cilium with kube-proxy replacement on an existing cluster running kube-proxy. What is the correct procedure?',
    options: [
      'kube-proxy replacement is only supported on new clusters without kube-proxy',
      'Install Cilium with kubeProxyReplacement=true; Cilium will automatically remove kube-proxy',
      'Delete the kube-proxy DaemonSet, then install Cilium with kubeProxyReplacement=true',
      'Install Cilium first, then patch kube-proxy to disable it',
    ],
    correctAnswer: 2,
    explanation:
      'When enabling kube-proxy replacement, you should remove kube-proxy first to avoid conflicts and duplicate service handling. Delete the kube-proxy DaemonSet, clean up iptables rules if necessary, then install Cilium with kubeProxyReplacement=true to have Cilium handle all service load balancing.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/#kube-proxy-removal)',
    domain: 'Installation and Configuration',
    difficulty: 'medium',
    tags: ['kube-proxy-replacement', 'installation', 'migration'],
  },
  {
    id: 'cca-038',
    question:
      'Which Helm values are required to enable Hubble with UI access in a Cilium installation?',
    options: [
      'hubble.enabled=true, hubble.relay.enabled=true, hubble.ui.enabled=true',
      'hubble=enabled, hubble-ui=enabled',
      'observability.hubble=true, observability.ui=true',
      'hubble.metrics.enabled=true, hubble.ui.enabled=true',
    ],
    correctAnswer: 0,
    explanation:
      'To enable Hubble with UI: hubble.enabled=true enables Hubble on the agent, hubble.relay.enabled=true deploys Hubble Relay for cluster-wide visibility, and hubble.ui.enabled=true deploys the Hubble UI. All three are required for full UI functionality.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/observability/hubble/setup/)',
    domain: 'Installation and Configuration',
    difficulty: 'medium',
    tags: ['hubble', 'helm', 'installation', 'ui'],
  },
  {
    id: 'cca-039',
    question:
      'A new node joins a Cilium-managed cluster but pods on this node cannot communicate with pods on other nodes. What should be checked first?',
    options: [
      'Ensure kube-proxy is running on the new node',
      'Verify the Cilium agent pod is running and healthy on the new node',
      'Check if the node has the correct CNI configuration file',
      'Verify the node has the Cilium node taint',
    ],
    correctAnswer: 1,
    explanation:
      'The Cilium agent DaemonSet should automatically deploy to new nodes. If pods cannot communicate, first verify the agent pod is running (kubectl get pods -n kube-system -l k8s-app=cilium) and check its logs. The agent handles CNI configuration and node initialization automatically.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/operations/troubleshooting/)',
    domain: 'Installation and Configuration',
    difficulty: 'medium',
    tags: ['troubleshooting', 'node', 'agent'],
  },
  {
    id: 'cca-040',
    question:
      'Which command displays the eBPF datapath configuration and enabled features on a Cilium node?',
    options: [
      'cilium bpf config list',
      'cilium config',
      'cilium endpoint config',
      'cilium status --verbose',
    ],
    correctAnswer: 3,
    explanation:
      'The "cilium status --verbose" command provides detailed information about the Cilium agent including datapath mode, enabled features (like kubeProxyReplacement, hostRouting), BPF map sizes, encryption status, and cluster connectivity. It\'s the primary diagnostic command for understanding node configuration.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/reference/commands/cilium-dbg_status/)',
    domain: 'Installation and Configuration',
    difficulty: 'medium',
    tags: ['cilium-status', 'datapath', 'configuration'],
  },

  // ============================================
  // DOMAIN: Cluster Mesh (10%)
  // ============================================
  {
    id: 'cca-041',
    question:
      'What prerequisite must be met for two Kubernetes clusters to successfully establish a Cilium Cluster Mesh connection?',
    options: [
      'Clusters must have non-overlapping Pod and Service CIDR ranges',
      'Both clusters must run identical Kubernetes versions',
      'Both clusters must be deployed in the same cloud provider region',
      'Clusters must share the same Cilium version and configuration',
    ],
    correctAnswer: 0,
    explanation:
      'Cluster Mesh requires non-overlapping Pod CIDRs and Service CIDRs between clusters to ensure unique addressing. Overlapping ranges would cause routing conflicts. Network connectivity between clusters is also required but Kubernetes versions can differ within compatible ranges.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/clustermesh/clustermesh/#prerequisites)',
    domain: 'Cluster Mesh',
    difficulty: 'medium',
    tags: ['cluster-mesh', 'prerequisites', 'cidr'],
  },
  {
    id: 'cca-042',
    question:
      'A multi-cluster deployment uses Cilium Cluster Mesh. How does a pod in Cluster A discover and connect to a service running in Cluster B?',
    options: [
      'By querying a central DNS server that aggregates records from both clusters',
      "By using the service's ClusterIP which is synchronized across clusters when marked as global",
      'By specifying the remote cluster name in the service hostname',
      'By resolving an external DNS record pointing to a shared load balancer',
    ],
    correctAnswer: 1,
    explanation:
      'When a service is annotated with service.cilium.io/global: "true", its endpoints are synchronized across all connected clusters. Pods can access the service using its normal ClusterIP/DNS name, and Cilium load-balances across local and remote endpoints based on configuration.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/clustermesh/services/)',
    domain: 'Cluster Mesh',
    difficulty: 'medium',
    tags: ['cluster-mesh', 'global-services', 'service-discovery'],
  },
  {
    id: 'cca-043',
    question:
      'In Cluster Mesh, what does setting service.cilium.io/affinity: "local" on a global service achieve?',
    options: [
      'The service is pinned to specific nodes in the local cluster',
      'Mutual TLS is required for all connections to the service',
      "Traffic is always routed to the local cluster's endpoints, using remote only if local is unavailable",
      'The service cannot be accessed from remote clusters',
    ],
    correctAnswer: 2,
    explanation:
      'The affinity: "local" annotation implements local-preference routing. Requests are sent to local endpoints first; remote endpoints are used only when no healthy local endpoints exist. This reduces cross-cluster traffic while maintaining availability. Options include "local", "remote", and "none" (balanced).\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/clustermesh/services/#service-affinity)',
    domain: 'Cluster Mesh',
    difficulty: 'hard',
    tags: ['cluster-mesh', 'affinity', 'load-balancing'],
  },
  {
    id: 'cca-044',
    question:
      'Which component establishes the control plane connectivity between clusters in Cilium Cluster Mesh?',
    options: [
      'The Cilium agents communicate directly via a gossip protocol',
      'A shared etcd cluster is required for inter-cluster state',
      'Kubernetes API servers are federated across clusters',
      'clustermesh-apiserver in each cluster exposes endpoints for cross-cluster synchronization',
    ],
    correctAnswer: 3,
    explanation:
      'Each cluster runs a clustermesh-apiserver that exposes the cluster\'s state (identities, services, endpoints) to other clusters. Remote clusters connect to this API server to synchronize state. This component is deployed when enabling Cluster Mesh with "cilium clustermesh enable".\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/clustermesh/clustermesh/#architecture)',
    domain: 'Cluster Mesh',
    difficulty: 'medium',
    tags: ['cluster-mesh', 'architecture', 'apiserver'],
  },
  {
    id: 'cca-045',
    question:
      "A CiliumNetworkPolicy in Cluster A needs to allow traffic from pods in Cluster B. How can the remote cluster's pods be identified in the policy?",
    options: [
      "Using fromEndpoints with the remote cluster's pod IP ranges",
      'Using fromEntities with entity: remote-cluster',
      'Using fromEndpoints with labels including io.cilium.k8s.policy.cluster: cluster-b',
      'Cross-cluster policies require CiliumClusterwideNetworkPolicy only',
    ],
    correctAnswer: 2,
    explanation:
      'Cilium Cluster Mesh automatically adds the io.cilium.k8s.policy.cluster label to remote endpoints with their cluster name. Policies can select remote endpoints using this label in combination with other labels. This enables identity-aware cross-cluster policy enforcement.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/clustermesh/policy/)',
    domain: 'Cluster Mesh',
    difficulty: 'hard',
    tags: ['cluster-mesh', 'policy', 'cross-cluster'],
  },

  // ============================================
  // DOMAIN: eBPF (16%)
  // ============================================
  {
    id: 'cca-046',
    question:
      'What mechanism ensures that eBPF programs loaded by Cilium cannot crash the Linux kernel or access arbitrary memory?',
    options: [
      'Programs run in a sandboxed container with limited syscalls',
      'Cilium signs eBPF programs and the kernel validates signatures',
      "The kernel's eBPF verifier analyzes programs before loading to ensure safety properties",
      'A watchdog process monitors eBPF execution and terminates unsafe operations',
    ],
    correctAnswer: 2,
    explanation:
      'The Linux kernel includes an eBPF verifier that performs static analysis on programs before loading. It ensures programs terminate (no infinite loops), access only valid memory (bounds checking), and follow allowed operation sequences. Programs failing verification are rejected.\n\nLearn more: [Documentación oficial](https://ebpf.io/what-is-ebpf/#ebpf-safety)',
    domain: 'eBPF',
    difficulty: 'medium',
    tags: ['ebpf', 'verifier', 'security', 'kernel'],
  },
  {
    id: 'cca-047',
    question:
      'Cilium uses eBPF maps extensively. What is the primary purpose of the cilium_ipcache map?',
    options: [
      'Caching DNS resolution results for FQDN policies',
      'Tracking active TCP connections for connection tracking',
      'Storing IP-to-identity mappings for policy enforcement',
      'Buffering packets during policy evaluation',
    ],
    correctAnswer: 2,
    explanation:
      'The ipcache map stores mappings from IP addresses to Cilium security identities. When a packet arrives, Cilium looks up the source/destination IPs in ipcache to determine their identities, then uses these identities for policy enforcement in O(1) time complexity.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/reference-guides/bpf/architecture/#maps)',
    domain: 'eBPF',
    difficulty: 'hard',
    tags: ['ebpf', 'maps', 'ipcache', 'identity'],
  },
  {
    id: 'cca-048',
    question:
      'At which point in the Linux networking stack does XDP (eXpress Data Path) process packets?',
    options: [
      'After the packet passes through iptables rules',
      'After the packet is queued for the receiving socket',
      'At the network driver level, before the sk_buff is allocated',
      'At the TC (Traffic Control) ingress hook',
    ],
    correctAnswer: 2,
    explanation:
      'XDP runs at the earliest possible point in the network stack, directly in the network driver before sk_buff allocation. This enables extremely high-performance packet processing for use cases like DDoS mitigation, load balancing, and packet filtering with minimal CPU overhead.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/reference-guides/bpf/progtypes/#xdp)',
    domain: 'eBPF',
    difficulty: 'medium',
    tags: ['xdp', 'ebpf', 'datapath', 'performance'],
  },
  {
    id: 'cca-049',
    question:
      "Why does Cilium's eBPF-based networking provide better scalability than iptables for large clusters?",
    options: [
      'eBPF rules are processed in parallel across multiple CPU cores',
      'eBPF offloads processing to network interface hardware',
      'eBPF uses hash-based lookups (O(1)) while iptables uses linear rule traversal (O(n))',
      'eBPF rules are compiled to machine code while iptables is interpreted',
    ],
    correctAnswer: 2,
    explanation:
      'iptables processes rules sequentially—each packet traverses all rules until a match (O(n) complexity). Cilium uses eBPF maps with hash-based lookups achieving O(1) complexity regardless of policy count. This is critical in large clusters where thousands of services/policies would severely impact iptables performance.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/concepts/routing/#id2)',
    domain: 'eBPF',
    difficulty: 'medium',
    tags: ['ebpf', 'iptables', 'scalability', 'performance'],
  },
  {
    id: 'cca-050',
    question:
      'Which eBPF hook point does Cilium primarily use for implementing Kubernetes Service load balancing?',
    options: [
      'XDP for all service traffic processing',
      'cgroup hooks for container network isolation',
      'Socket operations hooks (connect, sendmsg) for socket-level load balancing',
      'TC (Traffic Control) ingress and egress hooks',
    ],
    correctAnswer: 2,
    explanation:
      'Cilium implements socket-level load balancing using BPF_PROG_TYPE_CGROUP_SOCK_ADDR programs that intercept connect() and sendmsg() syscalls. This translates service addresses to backend addresses at connection time, eliminating per-packet NAT and preserving client source IPs.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/#socket-level-load-balancing)',
    domain: 'eBPF',
    difficulty: 'hard',
    tags: ['ebpf', 'socket-lb', 'services', 'hooks'],
  },
  {
    id: 'cca-051',
    question:
      'What happens when an eBPF program attached by Cilium exceeds the instruction limit or complexity?',
    options: [
      'The kernel automatically optimizes the program to fit within limits',
      'The program is rejected by the verifier and Cilium logs an error',
      'Cilium splits the program across multiple eBPF programs using tail calls',
      'The program runs but with reduced functionality',
    ],
    correctAnswer: 1,
    explanation:
      "The eBPF verifier enforces instruction limits and complexity bounds. Programs exceeding these limits are rejected at load time. Cilium's eBPF programs are designed to stay within limits, but complex configurations may require kernel version upgrades (newer kernels have higher limits). Tail calls can extend functionality across multiple programs.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/operations/system_requirements/)",
    domain: 'eBPF',
    difficulty: 'medium',
    tags: ['ebpf', 'verifier', 'limits', 'troubleshooting'],
  },
  {
    id: 'cca-052',
    question: "In Cilium's eBPF datapath, what is the purpose of tail calls?",
    options: [
      'Implementing timeouts for long-running packet processing',
      'Logging packet processing decisions to a ring buffer',
      'Chaining multiple eBPF programs together to extend functionality beyond single-program limits',
      'Sending packets back to user space for complex processing',
    ],
    correctAnswer: 2,
    explanation:
      'Tail calls allow one eBPF program to call another, transferring execution with shared context. Cilium uses tail calls to modularize its datapath—separating policy evaluation, NAT, encryption, and forwarding into distinct programs that can be composed and individually updated.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/reference-guides/bpf/architecture/#tail-calls)',
    domain: 'eBPF',
    difficulty: 'hard',
    tags: ['ebpf', 'tail-calls', 'datapath', 'architecture'],
  },

  // ============================================
  // DOMAIN: BGP and External Networking (6%)
  // ============================================
  {
    id: 'cca-053',
    question:
      'An organization wants their Kubernetes pods to be directly reachable from the corporate network without NAT. Which Cilium feature should they configure?',
    options: [
      'NodePort services with externalTrafficPolicy: Local',
      'Egress Gateway with SNAT disabled',
      'MetalLB integration for LoadBalancer services',
      'BGP peering to advertise Pod CIDRs to network infrastructure',
    ],
    correctAnswer: 3,
    explanation:
      'Cilium BGP can advertise Pod CIDRs to external routers, enabling direct routing to pods without NAT. The external network learns routes to pod IPs and forwards traffic directly. This requires native routing mode and network infrastructure that supports BGP peering.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/bgp/)',
    domain: 'BGP and External Networking',
    difficulty: 'medium',
    tags: ['bgp', 'pod-cidr', 'direct-routing'],
  },
  {
    id: 'cca-054',
    question:
      'A security team requires that all egress traffic from specific pods exits the cluster through designated nodes with known IP addresses. Which Cilium feature addresses this requirement?',
    options: [
      'CiliumEgressGatewayPolicy with egressGateway configuration',
      'BGP advertisement of LoadBalancer service IPs',
      'Egress Network Policies with toCIDR rules',
      'Node-local traffic steering with externalTrafficPolicy',
    ],
    correctAnswer: 0,
    explanation:
      "CiliumEgressGatewayPolicy routes egress traffic from selected pods through specific gateway nodes. This provides predictable source IP addresses (the gateway node's IP), enabling firewall rules and compliance with external services that require static source IPs.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/egress-gateway/)",
    domain: 'BGP and External Networking',
    difficulty: 'medium',
    tags: ['egress-gateway', 'source-ip', 'security'],
  },
  {
    id: 'cca-055',
    question:
      'When configuring CiliumBGPPeeringPolicy, what determines which nodes establish BGP sessions with external routers?',
    options: [
      'All nodes automatically peer with routers specified in the policy',
      'Nodes must be labeled with cilium.io/bgp=enabled',
      'Only the Cilium Operator node establishes BGP sessions',
      'The nodeSelector field in the CiliumBGPPeeringPolicy spec',
    ],
    correctAnswer: 3,
    explanation:
      'CiliumBGPPeeringPolicy uses nodeSelector to determine which nodes should establish BGP sessions. This enables flexible topologies: all nodes can peer (rack-level BGP), only designated nodes (spine-leaf), or specific node groups. Each selected node runs a BGP speaker integrated with the Cilium agent.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/bgp/)',
    domain: 'BGP and External Networking',
    difficulty: 'hard',
    tags: ['bgp', 'peering-policy', 'node-selector'],
  },

  // ============================================
  // NEW QUESTIONS - Aligned with Official Curriculum
  // ============================================
  {
    id: 'cca-056',
    question: 'What is the role of the Cilium Operator in a Kubernetes cluster?',
    options: [
      'Compiling and loading eBPF programs on each node',
      'Handling cluster-wide operations like IPAM allocation and CiliumIdentity garbage collection',
      'Terminating TLS connections for Gateway API',
      'Running the Hubble observability stack',
    ],
    correctAnswer: 1,
    explanation:
      'The Cilium Operator handles cluster-wide operations that should not be duplicated per-node: IPAM allocation in cluster-pool mode, CiliumIdentity garbage collection, and synchronization of cluster-wide resources. It runs as a Deployment (not DaemonSet).\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/overview/component-overview/#cilium-operator)',
    domain: 'Architecture',
    difficulty: 'medium',
    tags: ['operator', 'components', 'ipam'],
  },
  {
    id: 'cca-057',
    question:
      'Which datapath mode provides the lowest latency for pod-to-pod communication across nodes?',
    options: [
      'VXLAN encapsulation with checksum offload',
      'Geneve encapsulation with flow-based labels',
      'Native routing with eBPF host routing enabled',
      'IPsec tunnel mode with hardware acceleration',
    ],
    correctAnswer: 2,
    explanation:
      'Native routing eliminates encapsulation overhead, and eBPF host routing bypasses the kernel network stack entirely for forwarding decisions. This combination provides the lowest latency by processing packets directly in eBPF without iptables or routing table lookups.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/operations/performance/tuning/)',
    domain: 'Architecture',
    difficulty: 'hard',
    tags: ['datapath', 'performance', 'native-routing', 'host-routing'],
  },
  {
    id: 'cca-058',
    question:
      'A CiliumNetworkPolicy needs to allow traffic only to specific ports on selected endpoints. Which policy construct should be used?',
    options: [
      'toEndpoints with matchLabels only',
      'toCIDR with port specifications',
      'toEndpoints combined with toPorts specifying allowed ports',
      'toEntities with port filtering',
    ],
    correctAnswer: 2,
    explanation:
      'To restrict traffic to specific ports on selected endpoints, combine toEndpoints (to select destination pods by labels) with toPorts (to specify allowed ports and protocols). This provides both identity-based and port-based filtering.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/language/#layer-4-examples)',
    domain: 'Network Policy',
    difficulty: 'medium',
    tags: ['policy', 'toPorts', 'toEndpoints', 'l4'],
  },
  {
    id: 'cca-059',
    question: 'What happens when multiple CiliumNetworkPolicies select the same endpoint?',
    options: [
      'Only the most recently created policy applies',
      'The policies conflict and traffic is blocked',
      'All matching policies are combined with OR semantics (union of allowed traffic)',
      'An error is logged and policies are ignored',
    ],
    correctAnswer: 2,
    explanation:
      "When multiple policies select the same endpoint, their rules are combined using OR semantics. Traffic is allowed if ANY policy permits it. This additive model allows different teams to manage different aspects of an endpoint's connectivity independently.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/security/policy/intro/#rule-basics)",
    domain: 'Network Policy',
    difficulty: 'hard',
    tags: ['policy', 'multiple-policies', 'semantics'],
  },
  {
    id: 'cca-060',
    question:
      'In Cluster Mesh, what annotation makes a Kubernetes Service accessible from other connected clusters?',
    options: [
      'service.cilium.io/external: "true"',
      'service.cilium.io/global: "true"',
      'cilium.io/cluster-mesh: "enabled"',
      'service.kubernetes.io/shared: "true"',
    ],
    correctAnswer: 1,
    explanation:
      'The annotation service.cilium.io/global: "true" marks a Service as global, causing its endpoints to be synchronized across all clusters in the Cluster Mesh. Pods in any connected cluster can then access the service using its normal name/ClusterIP.\n\nLearn more: [Documentación oficial](https://docs.cilium.io/en/stable/network/clustermesh/services/)',
    domain: 'Cluster Mesh',
    difficulty: 'medium',
    tags: ['cluster-mesh', 'global-services', 'annotation'],
  },
];

/**
 * EN - BestPractices translations
 *
 * This file contains translations for: bestPractices
 *
 * To contribute translations:
 * 1. Find the key you want to translate
 * 2. Update the value while keeping the key unchanged
 * 3. Run 'npm run validate' to check for errors
 */

export const bestPractices = {
  'bestPractices.priority.critical': 'Critical',
  'bestPractices.priority.important': 'Important',
  'bestPractices.priority.recommended': 'Recommended',
  'bestPractices.ui.copy': 'Copy',
  'bestPractices.ui.showCode': 'Show code',
  'bestPractices.ui.hideCode': 'Hide code',
  'bestPractices.ui.whyMatters': 'Why it matters?',
  'bestPractices.ui.hideDetails': 'Hide details',
  'bestPractices.ui.whyMattersLabel': 'Why it matters',
  'bestPractices.ui.commonMistakeLabel': 'Common mistake',
  'bestPractices.ui.selectCategory': 'Select category',
  'bestPractices.ui.categories': 'Categories',
  'bestPractices.ui.selectSubcategory': 'Select subcategory',
  'bestPractices.ui.subcategories': 'Subcategories',
  'bestPractices.category.applications': 'Applications',
  'bestPractices.category.cicd': 'CI/CD',
  'bestPractices.category.infrastructure': 'Infrastructure',
  'bestPractices.category.networking': 'Networking',
  'bestPractices.category.observability': 'Observability',
  'bestPractices.category.security': 'Security',
  'bestPractices.compliance.audit.desc': 'Track and monitor all cluster activities',
  'bestPractices.compliance.audit.item1':
    'Enable Kubernetes audit logging with appropriate policy levels',
  'bestPractices.compliance.audit.item2':
    'Forward audit logs to external SIEM for analysis and retention',
  'bestPractices.compliance.audit.item3':
    'Use Falco for runtime security monitoring and threat detection',
  'bestPractices.compliance.audit.item4':
    'Set up alerts for suspicious activities (shell access, privilege escalation)',
  'bestPractices.compliance.audit.title': 'Audit Logging',
  'bestPractices.compliance.policy.desc':
    'Enforce policies automatically with admission controllers',
  'bestPractices.compliance.policy.item1': 'Use Kyverno for Kubernetes-native policy enforcement',
  'bestPractices.compliance.policy.item2': 'Implement OPA Gatekeeper for Rego-based policies',
  'bestPractices.compliance.policy.item3': 'Block insecure configurations at admission time',
  'bestPractices.compliance.policy.item4':
    'Use mutation policies to add security defaults automatically',
  'bestPractices.compliance.policy.title': 'Policy as Code',
  'bestPractices.compliance.standards.desc': 'Meet industry security benchmarks and regulations',
  'bestPractices.compliance.standards.item1':
    'Run CIS Kubernetes Benchmark with kube-bench regularly',
  'bestPractices.compliance.standards.item2': 'Follow NSA/CISA Kubernetes Hardening guidelines',
  'bestPractices.compliance.standards.item3':
    'Map Kubernetes controls to PCI-DSS, SOC2, or HIPAA requirements',
  'bestPractices.compliance.standards.item4':
    'Document security controls and maintain evidence for audits',
  'bestPractices.compliance.standards.title': 'Compliance Standards',
  'bestPractices.containers.images.desc':
    'Best practices for building and managing container images',
  'bestPractices.containers.images.item1': 'Use multi-stage Docker builds to minimize image size',
  'bestPractices.containers.images.item2':
    'Always use specific image tags, never use :latest in production',
  'bestPractices.containers.images.item3':
    'Scan images for vulnerabilities before deployment (Trivy, Snyk)',
  'bestPractices.containers.images.item4': 'Use distroless or minimal base images when possible',
  'bestPractices.containers.images.item5': 'Sign and verify container images with Cosign or Notary',
  'bestPractices.containers.images.title': 'Container Images',
  'bestPractices.containers.runtime.desc': 'Runtime configuration and optimization',
  'bestPractices.containers.runtime.item1': 'Never run containers as root user',
  'bestPractices.containers.runtime.item2': 'Use read-only root filesystems when possible',
  'bestPractices.containers.runtime.item3':
    'Drop all Linux capabilities and add only required ones',
  'bestPractices.containers.runtime.item4': 'Set appropriate seccomp and AppArmor profiles',
  'bestPractices.containers.runtime.title': 'Container Runtime',
  'bestPractices.cost.cleanup.desc': 'Eliminate unused and orphaned resources',
  'bestPractices.cost.cleanup.item1': 'Clean up orphaned PersistentVolumeClaims regularly',
  'bestPractices.cost.cleanup.item2': 'Set TTL for completed Jobs and CronJobs',
  'bestPractices.cost.cleanup.item3': 'Limit ReplicaSet revision history to reduce storage',
  'bestPractices.cost.cleanup.item4': 'Use tools like Kubecost or OpenCost for visibility',
  'bestPractices.cost.cleanup.title': 'Resource Cleanup',
  'bestPractices.cost.resources.desc': 'Optimize resource allocation and reduce waste',
  'bestPractices.cost.resources.item1': 'Right-size resources based on actual usage metrics',
  'bestPractices.cost.resources.item2':
    'Use Vertical Pod Autoscaler (VPA) for sizing recommendations',
  'bestPractices.cost.resources.item3': 'Implement LimitRanges to set default resource constraints',
  'bestPractices.cost.resources.item4': 'Regularly audit and identify over-provisioned workloads',
  'bestPractices.cost.resources.title': 'Resource Efficiency',
  'bestPractices.cost.scaling.desc': 'Scale efficiently to match demand',
  'bestPractices.cost.scaling.item1':
    'Configure Cluster Autoscaler to scale down underutilized nodes',
  'bestPractices.cost.scaling.item2': 'Use spot/preemptible instances for fault-tolerant workloads',
  'bestPractices.cost.scaling.item3': 'Scale to zero during off-peak hours with KEDA',
  'bestPractices.cost.scaling.item4':
    'Use node pools with different instance types for workload matching',
  'bestPractices.cost.scaling.title': 'Scaling Strategies',
  'bestPractices.cost.serverless.desc': 'Scale to zero and event-driven autoscaling',
  'bestPractices.cost.serverless.item1': 'Use KEDA to scale workloads to zero when idle',
  'bestPractices.cost.serverless.item2': 'Configure KEDA triggers based on queue length or metrics',
  'bestPractices.cost.serverless.item3': 'Use Knative Serving for serverless container workloads',
  'bestPractices.cost.serverless.item4':
    'Schedule scaling with KEDA cron triggers for predictable loads',
  'bestPractices.cost.serverless.item5': 'Consider OpenFaaS for function-as-a-service workloads',
  'bestPractices.cost.serverless.mistake5':
    'Not considering cold start latency. Serverless works great for async jobs but may add latency for user-facing APIs.',
  'bestPractices.cost.serverless.title': 'Serverless & KEDA',
  'bestPractices.cost.serverless.why1':
    'Scale-to-zero eliminates costs for idle workloads. A service with no traffic costs nothing instead of running 24/7.',
  'bestPractices.cost.serverless.why3':
    'Knative handles cold starts, traffic splitting, and automatic scaling - you only pay for actual request processing time.',
  'bestPractices.dev.applications.desc': 'Best practices for cloud-native application development',
  'bestPractices.dev.applications.item1':
    'Implement health checks (liveness, readiness, startup probes)',
  'bestPractices.dev.applications.item2': 'Handle graceful shutdown with SIGTERM signals',
  'bestPractices.dev.applications.item3': 'Follow the 12-factor app methodology',
  'bestPractices.dev.applications.item4': 'Use environment variables for configuration',
  'bestPractices.dev.applications.item5': 'Design stateless applications when possible',
  'bestPractices.dev.applications.title': 'Application Design',
  'bestPractices.dev.configuration.desc': 'Managing application configuration in Kubernetes',
  'bestPractices.dev.configuration.item1': 'Use ConfigMaps for non-sensitive configuration',
  'bestPractices.dev.configuration.item2': 'Store sensitive data in Secrets (encrypted)',
  'bestPractices.dev.configuration.item3': 'Use namespaces to organize and isolate applications',
  'bestPractices.dev.configuration.item4':
    'Apply consistent labels and annotations for organization',
  'bestPractices.dev.configuration.title': 'Configuration Management',
  'bestPractices.dev.resources.desc': 'Efficient resource allocation and scaling',
  'bestPractices.dev.resources.item1': 'Always define resource requests and limits',
  'bestPractices.dev.resources.item2': 'Use Horizontal Pod Autoscaler (HPA) for automatic scaling',
  'bestPractices.dev.resources.item3': 'Implement Resource Quotas and Limit Ranges per namespace',
  'bestPractices.dev.resources.item4': 'Use Pod Disruption Budgets for high availability',
  'bestPractices.dev.resources.title': 'Resource Management',
  'bestPractices.devsecops.admission.desc': 'Enforce security policies at deployment time',
  'bestPractices.devsecops.admission.item1':
    'Enforce Pod Security Standards (restricted profile for production)',
  'bestPractices.devsecops.admission.item2':
    'Block images with latest tag or from untrusted registries',
  'bestPractices.devsecops.admission.item3': 'Require resource limits on all containers',
  'bestPractices.devsecops.admission.item4':
    'Use audit mode first to identify violations before enforcing',
  'bestPractices.devsecops.admission.title': 'Admission Control',
  'bestPractices.devsecops.scanning.desc':
    'Detect vulnerabilities and threats in your running cluster',
  'bestPractices.devsecops.scanning.item1':
    'Scan running container images in your cluster with Trivy',
  'bestPractices.devsecops.scanning.item2': 'Configure Falco rules for runtime threat detection',
  'bestPractices.devsecops.scanning.item3':
    'Audit cluster security with kube-bench (CIS Benchmark)',
  'bestPractices.devsecops.scanning.item4':
    'Validate manifests with kubeconform and kube-score before applying',
  'bestPractices.devsecops.scanning.title': 'Runtime Security & Scanning',
  'bestPractices.devsecops.supplychain.desc':
    'Control which container images can run in your cluster',
  'bestPractices.devsecops.supplychain.item1':
    'Verify image signatures at admission time with Kyverno',
  'bestPractices.devsecops.supplychain.item2':
    'Restrict deployments to approved container registries only',
  'bestPractices.devsecops.supplychain.item3': 'Require image digests instead of mutable tags',
  'bestPractices.devsecops.supplychain.item4':
    'Use Sigstore Policy Controller for signature verification',
  'bestPractices.devsecops.supplychain.title': 'Image Security in Kubernetes',
  'bestPractices.gitops.delivery.desc': 'CI/CD pipeline best practices',
  'bestPractices.gitops.delivery.item1': 'Automate image builds and vulnerability scanning',
  'bestPractices.gitops.delivery.item2': 'Use progressive delivery strategies (canary, blue-green)',
  'bestPractices.gitops.delivery.item3': 'Implement automated rollbacks on failure',
  'bestPractices.gitops.delivery.item4': 'Use Helm or Kustomize for configuration management',
  'bestPractices.gitops.delivery.title': 'Continuous Delivery',
  'bestPractices.gitops.workflow.desc': 'Infrastructure and application delivery with Git',
  'bestPractices.gitops.workflow.item1': 'Use Git as the single source of truth',
  'bestPractices.gitops.workflow.item2': 'Implement ArgoCD or Flux for continuous delivery',
  'bestPractices.gitops.workflow.item3': 'Use pull-based deployment model',
  'bestPractices.gitops.workflow.item4': 'Separate application and infrastructure repositories',
  'bestPractices.gitops.workflow.title': 'GitOps Workflow',
  'bestPractices.ha.redundancy.desc': 'Ensure workloads survive infrastructure failures',
  'bestPractices.ha.redundancy.item1': 'Run at least 3 replicas for production workloads',
  'bestPractices.ha.redundancy.item2': 'Use pod anti-affinity to spread across availability zones',
  'bestPractices.ha.redundancy.item3':
    'Configure topology spread constraints for even distribution',
  'bestPractices.ha.redundancy.item4': 'Use node affinity to schedule on appropriate node pools',
  'bestPractices.ha.redundancy.item5': 'Assign priority classes to critical workloads',
  'bestPractices.ha.redundancy.title': 'Redundancy & Distribution',
  'bestPractices.ha.resilience.desc': 'Handle failures gracefully and recover quickly',
  'bestPractices.ha.resilience.item1': 'Configure Pod Disruption Budgets for all critical services',
  'bestPractices.ha.resilience.item2': 'Implement graceful shutdown with preStop hooks',
  'bestPractices.ha.resilience.item3': 'Set appropriate probe timeouts and thresholds',
  'bestPractices.ha.resilience.item4': 'Test failure scenarios regularly (chaos engineering)',
  'bestPractices.ha.resilience.title': 'Resilience & Recovery',
  'bestPractices.mesh.observability.desc': 'Deep visibility into service mesh behavior',
  'bestPractices.mesh.observability.item1': 'Enable distributed tracing with Jaeger or Zipkin',
  'bestPractices.mesh.observability.item2': 'Monitor mesh metrics with Prometheus and Grafana',
  'bestPractices.mesh.observability.item3': 'Use Kiali for service mesh topology visualization',
  'bestPractices.mesh.observability.item4': 'Set appropriate sampling rates for production tracing',
  'bestPractices.mesh.observability.title': 'Mesh Observability',
  'bestPractices.mesh.security.desc': 'Zero-trust networking with service mesh',
  'bestPractices.mesh.security.item1':
    'Enable strict mTLS for all service-to-service communication',
  'bestPractices.mesh.security.item2':
    'Define AuthorizationPolicies for fine-grained access control',
  'bestPractices.mesh.security.item3': 'Regularly rotate service mesh certificates',
  'bestPractices.mesh.security.item4': 'Use RequestAuthentication for JWT validation at ingress',
  'bestPractices.mesh.security.title': 'Mesh Security',
  'bestPractices.mesh.traffic.desc': 'Control and optimize service traffic',
  'bestPractices.mesh.traffic.item1': 'Implement circuit breakers to prevent cascade failures',
  'bestPractices.mesh.traffic.item2': 'Configure retry policies with exponential backoff',
  'bestPractices.mesh.traffic.item3': 'Use traffic splitting for canary deployments',
  'bestPractices.mesh.traffic.item4': 'Set appropriate request timeouts for all services',
  'bestPractices.mesh.traffic.title': 'Traffic Management',
  'bestPractices.networking.ingress.desc': 'Managing external traffic with modern APIs',
  'bestPractices.networking.ingress.item1':
    'Use Gateway API for new projects (modern, expressive, multi-tenant)',
  'bestPractices.networking.ingress.item2': 'Ingress API is still valid for simple use cases',
  'bestPractices.networking.ingress.item3': 'Enforce TLS for all external communications',
  'bestPractices.networking.ingress.item4': 'Implement rate limiting and traffic policies',
  'bestPractices.networking.ingress.item5':
    'Use Gateway implementations that support your needs (Cilium, Istio, NGINX)',
  'bestPractices.networking.ingress.title': 'Gateway API & Ingress',
  'bestPractices.networking.policies.desc': 'Network segmentation and access control',
  'bestPractices.networking.policies.item1': 'Implement default deny policies for all namespaces',
  'bestPractices.networking.policies.item2':
    'Use Network Policies to restrict pod-to-pod communication',
  'bestPractices.networking.policies.item3': 'Segment workloads by sensitivity level',
  'bestPractices.networking.policies.item4':
    'Use CNI plugins that support Network Policies (Cilium, Calico)',
  'bestPractices.networking.policies.title': 'Network Policies',
  'bestPractices.networking.services.desc': 'Service discovery and internal communication',
  'bestPractices.networking.services.item1': 'Use Services for stable network endpoints',
  'bestPractices.networking.services.item2':
    'Choose appropriate service types (ClusterIP, NodePort, LoadBalancer)',
  'bestPractices.networking.services.item3': 'Use headless services for StatefulSets',
  'bestPractices.networking.services.item4': 'Implement proper DNS naming conventions',
  'bestPractices.networking.services.title': 'Service Networking',
  'bestPractices.observability.external.desc': 'Centralize metrics and logs outside the cluster',
  'bestPractices.observability.external.item1':
    'Use Thanos or Cortex for long-term Prometheus metrics storage',
  'bestPractices.observability.external.item2':
    'Configure Loki/Elasticsearch with external object storage (S3, GCS, Azure Blob)',
  'bestPractices.observability.external.item3':
    'Keep only short-term data (hours/days) in the cluster for real-time queries',
  'bestPractices.observability.external.item4':
    'Use remote_write for Prometheus to ship metrics to external storage',
  'bestPractices.observability.external.item5':
    'Implement lifecycle policies for automatic data tiering and deletion',
  'bestPractices.observability.external.mistake':
    'Storing months or years of metrics/logs inside the cluster, leading to storage exhaustion and degraded cluster performance during queries.',
  'bestPractices.observability.external.title': 'External Storage',
  'bestPractices.observability.external.why':
    'The Kubernetes cluster should not be used for long-term storage of observability data. Metrics and logs consume significant storage and can impact cluster performance. External storage provides better scalability, durability, and allows cluster maintenance without data loss.',
  'bestPractices.observability.logging.desc': 'Centralized logging and analysis',
  'bestPractices.observability.logging.item1': 'Centralize logs with Loki, ELK, or similar tools',
  'bestPractices.observability.logging.item2': 'Use structured logging formats (JSON)',
  'bestPractices.observability.logging.item3': 'Include correlation IDs for request tracing',
  'bestPractices.observability.logging.item4': 'Implement log retention and rotation policies',
  'bestPractices.observability.logging.title': 'Logging',
  'bestPractices.observability.metrics.desc': 'Collecting and analyzing metrics',
  'bestPractices.observability.metrics.item1': 'Use Prometheus for metrics collection and storage',
  'bestPractices.observability.metrics.item2': 'Create meaningful dashboards with Grafana',
  'bestPractices.observability.metrics.item3': 'Set up alerting for critical metrics and SLOs',
  'bestPractices.observability.metrics.item4': 'Monitor both cluster and application-level metrics',
  'bestPractices.observability.metrics.title': 'Metrics & Monitoring',
  'bestPractices.observability.tracing.desc': 'End-to-end request tracing',
  'bestPractices.observability.tracing.item1': 'Implement OpenTelemetry for distributed tracing',
  'bestPractices.observability.tracing.item2': 'Use Jaeger or Tempo for trace visualization',
  'bestPractices.observability.tracing.item3': 'Propagate trace context across services',
  'bestPractices.observability.tracing.item4': 'Sample traces appropriately for production',
  'bestPractices.observability.tracing.title': 'Distributed Tracing',
  'bestPractices.ops.auth.desc':
    'Secure cluster access with proper authentication and authorization mechanisms',
  'bestPractices.ops.auth.item1':
    'Configure OIDC authentication for API server with external identity providers',
  'bestPractices.ops.auth.item2':
    'Use bound ServiceAccount tokens with expiration instead of static tokens',
  'bestPractices.ops.auth.item3':
    'Enable audit logging to track authentication and authorization events',
  'bestPractices.ops.auth.item4':
    'Disable anonymous authentication and enforce RBAC authorization mode',
  'bestPractices.ops.auth.item5':
    'Use short-lived kubeconfig with OIDC exec plugins for developers',
  'bestPractices.ops.auth.title': 'Authentication & Authorization',
  'bestPractices.ops.backup.desc': 'Disaster recovery and data protection strategies',
  'bestPractices.ops.backup.item1': 'Create regular etcd snapshots and store them externally',
  'bestPractices.ops.backup.item2': 'Use Velero for cluster and application-level backups',
  'bestPractices.ops.backup.item3': 'Automate backups with scheduled jobs and retention policies',
  'bestPractices.ops.backup.item4':
    'Regularly test restore procedures in a non-production environment',
  'bestPractices.ops.backup.item5':
    'Follow the 3-2-1 backup rule: 3 copies, 2 different media, 1 offsite',
  'bestPractices.ops.backup.title': 'Backup & Recovery',
  'bestPractices.ops.maintenance.desc': 'Regular cluster maintenance and operations',
  'bestPractices.ops.maintenance.item1': 'Backup etcd regularly and verify restoration works',
  'bestPractices.ops.maintenance.item2': 'Monitor and renew certificates before expiration',
  'bestPractices.ops.maintenance.item3': 'Compact and defragment etcd periodically',
  'bestPractices.ops.maintenance.item4': 'Document runbooks for common operational procedures',
  'bestPractices.ops.maintenance.title': 'Maintenance Tasks',
  'bestPractices.ops.troubleshooting.desc': 'Debug and diagnose cluster issues',
  'bestPractices.ops.troubleshooting.item1':
    'Use ephemeral debug containers for live troubleshooting',
  'bestPractices.ops.troubleshooting.item2': 'Check cluster events for error patterns',
  'bestPractices.ops.troubleshooting.item3': 'Use kubectl logs with proper flags for debugging',
  'bestPractices.ops.troubleshooting.item4': 'Monitor node and pod resource utilization',
  'bestPractices.ops.troubleshooting.title': 'Troubleshooting',
  'bestPractices.ops.upgrades.desc': 'Safe and reliable Kubernetes upgrades',
  'bestPractices.ops.upgrades.item1':
    'Follow the sequential upgrade path (one minor version at a time)',
  'bestPractices.ops.upgrades.item2': 'Drain nodes properly before maintenance',
  'bestPractices.ops.upgrades.item3': 'Test upgrades in staging environment first',
  'bestPractices.ops.upgrades.item4': 'Check API deprecations before upgrading with kubent',
  'bestPractices.ops.upgrades.title': 'Cluster Upgrades',
  'bestPractices.security.cluster.desc': 'Securing the Kubernetes cluster infrastructure',
  'bestPractices.security.cluster.item1': 'Enable RBAC and follow the principle of least privilege',
  'bestPractices.security.cluster.item2': 'Regularly update Kubernetes and all components',
  'bestPractices.security.cluster.item3': 'Enable audit logging for security monitoring',
  'bestPractices.security.cluster.item4': 'Secure the API server with proper authentication',
  'bestPractices.security.cluster.item5': 'Use admission controllers (OPA Gatekeeper, Kyverno)',
  'bestPractices.security.cluster.title': 'Cluster Security',
  'bestPractices.security.secrets.desc': 'Protecting sensitive data',
  'bestPractices.security.secrets.item1': 'Encrypt secrets at rest with encryption providers',
  'bestPractices.security.secrets.item2':
    'Use external secret managers (Vault, AWS Secrets Manager)',
  'bestPractices.security.secrets.item3': 'Rotate secrets regularly and automatically',
  'bestPractices.security.secrets.item4': 'Never store secrets in container images or code',
  'bestPractices.security.secrets.title': 'Secrets Management',
  'bestPractices.security.tls.desc': 'Certificate management and encrypted communications',
  'bestPractices.security.tls.item1':
    'Use cert-manager for automatic certificate provisioning and renewal',
  'bestPractices.security.tls.item2':
    'Monitor and rotate cluster certificates before expiration (kubeadm certs)',
  'bestPractices.security.tls.item3': 'Configure TLS certificates for all exposed services',
  'bestPractices.security.tls.item4':
    'Enable mTLS between services using service mesh (Istio, Linkerd)',
  'bestPractices.security.tls.item5': 'Use short-lived certificates and automate renewal',
  'bestPractices.security.tls.title': 'TLS & Certificates',
  'bestPractices.security.workloads.desc': 'Securing pods and deployments',
  'bestPractices.security.workloads.item1': 'Use Pod Security Standards (Restricted/Baseline)',
  'bestPractices.security.workloads.item2': 'Run containers as non-root users',
  'bestPractices.security.workloads.item3': 'Use read-only root filesystems',
  'bestPractices.security.workloads.item4': 'Limit container capabilities to minimum required',
  'bestPractices.security.workloads.item5': 'Use service accounts with minimal permissions',
  'bestPractices.security.workloads.title': 'Workload Security',
  'bestPractices.stateful.operators.desc': 'Use Kubernetes operators for production databases',
  'bestPractices.stateful.operators.item1':
    'Use CloudNativePG for PostgreSQL with automated backups and HA',
  'bestPractices.stateful.operators.item2':
    'Deploy MongoDB with the Community Operator for replica sets',
  'bestPractices.stateful.operators.item3':
    'Use Redis Operator for high-availability Redis with Sentinel',
  'bestPractices.stateful.operators.item4':
    'Prefer CNCF-graduated or widely-adopted operators over custom solutions',
  'bestPractices.stateful.operators.title': 'Database Operators',
  'bestPractices.stateful.replication.desc': 'Ensure data durability and availability',
  'bestPractices.stateful.replication.item1': 'Enable synchronous replication for critical data',
  'bestPractices.stateful.replication.item2':
    'Use storage with built-in replication (Longhorn, Rook-Ceph)',
  'bestPractices.stateful.replication.item3':
    'Implement VolumeSnapshots for point-in-time recovery',
  'bestPractices.stateful.replication.item4':
    'Test failover scenarios regularly in non-production environments',
  'bestPractices.stateful.replication.title': 'Data Replication',
  'bestPractices.stateful.sets.desc': 'Configure StatefulSets correctly for stateful applications',
  'bestPractices.stateful.sets.item1': 'Use ordered pod management and volume claim templates',
  'bestPractices.stateful.sets.item2':
    'Create headless services for stable DNS names (pod-0.service)',
  'bestPractices.stateful.sets.item3':
    'Configure PodDisruptionBudget to maintain quorum during updates',
  'bestPractices.stateful.sets.item4':
    'Use pod anti-affinity to spread replicas across nodes and zones',
  'bestPractices.stateful.sets.title': 'StatefulSet Best Practices',
  'bestPractices.storage.backup.desc': 'Data protection and recovery strategies',
  'bestPractices.storage.backup.item1': 'Backup etcd regularly and test restoration procedures',
  'bestPractices.storage.backup.item2': 'Use Velero for cluster and application backups',
  'bestPractices.storage.backup.item3': 'Store backups in multiple locations (3-2-1 rule)',
  'bestPractices.storage.backup.item4': 'Define and document RPO/RTO objectives',
  'bestPractices.storage.backup.title': 'Backup & Disaster Recovery',
  'bestPractices.storage.volumes.desc': 'Managing persistent data in Kubernetes',
  'bestPractices.storage.volumes.item1': 'Use StorageClasses for dynamic provisioning',
  'bestPractices.storage.volumes.item2': 'Choose appropriate access modes (RWO, RWX, ROX)',
  'bestPractices.storage.volumes.item3': 'Use volume snapshots for point-in-time recovery',
  'bestPractices.storage.volumes.item4': 'Implement volume expansion policies when needed',
  'bestPractices.storage.volumes.title': 'Persistent Storage',
  'bestPractices.subtitle': 'Cloud Native best practices organized by areas',
  'bestPractices.tab.accesscontrol': 'Access Control',
  'bestPractices.tab.compliance': 'Compliance',
  'bestPractices.tab.containerization': 'Containerization',
  'bestPractices.tab.costoptimization': 'Cost Optimization',
  'bestPractices.tab.development': 'Development',
  'bestPractices.tab.devsecops': 'DevSecOps',
  'bestPractices.tab.gitops': 'GitOps & CI/CD',
  'bestPractices.tab.highavailability': 'High Availability',
  'bestPractices.tab.multitenancy': 'Multi-tenancy',
  'bestPractices.tab.networkpolicies': 'Network Policies',
  'bestPractices.tab.observability': 'Observability',
  'bestPractices.tab.operations': 'Cluster Operations',
  'bestPractices.tab.servicemesh': 'Service Mesh',
  'bestPractices.tab.stateful': 'Stateful Workloads',
  'bestPractices.tab.storage': 'Storage & Backup',
  'bestPractices.tenant.isolation.desc':
    'Secure isolation between tenants using namespaces and policies',
  'bestPractices.tenant.isolation.item1':
    'Use dedicated namespaces per tenant with proper labeling',
  'bestPractices.tenant.isolation.item2':
    'Configure ResourceQuotas to limit tenant resource consumption',
  'bestPractices.tenant.isolation.item3':
    'Apply LimitRanges to enforce default and maximum resource limits',
  'bestPractices.tenant.isolation.item4':
    'Implement NetworkPolicies to prevent cross-tenant communication',
  'bestPractices.tenant.isolation.title': 'Tenant Isolation',
  'bestPractices.title': 'Best Practices',
} as const;

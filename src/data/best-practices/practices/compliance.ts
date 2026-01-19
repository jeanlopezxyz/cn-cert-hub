/**
 * Best Practices - Compliance
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const COMPLIANCE_PRACTICES: TabConfig = {
  id: 'compliance',
  labelKey: 'bestPractices.tab.compliance',
  iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
  practices: [
    {
      id: 'compliance-policy',
      titleKey: 'bestPractices.compliance.policy.title',
      descKey: 'bestPractices.compliance.policy.desc',
      iconPath: COMMON_ICON_PATHS.DOCUMENT,
      ...COLOR_SCHEMES.OPERATIONS,
      items: [
        {
          id: 'compliance-1',
          titleKey: 'bestPractices.compliance.policy.item1',
          priority: 'critical',
          codeExample: `# Kyverno policy - require labels
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-labels
spec:
  validationFailureAction: Enforce
  rules:
    - name: require-team-label
      match:
        any:
          - resources:
              kinds:
                - Pod
                - Deployment
      validate:
        message: "Label 'team' is required"
        pattern:
          metadata:
            labels:
              team: "?*"`,
        },
        {
          id: 'compliance-2',
          titleKey: 'bestPractices.compliance.policy.item2',
          priority: 'critical',
          codeExample: `# OPA Gatekeeper constraint template
apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8srequiredlabels
spec:
  crd:
    spec:
      names:
        kind: K8sRequiredLabels
      validation:
        openAPIV3Schema:
          type: object
          properties:
            labels:
              type: array
              items:
                type: string
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8srequiredlabels
        violation[{"msg": msg}] {
          provided := {label | input.review.object.metadata.labels[label]}
          required := {label | label := input.parameters.labels[_]}
          missing := required - provided
          count(missing) > 0
          msg := sprintf("Missing labels: %v", [missing])
        }`,
        },
        {
          id: 'compliance-3',
          titleKey: 'bestPractices.compliance.policy.item3',
          priority: 'important',
          codeExample: `# Kyverno - block privileged containers
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-privileged
spec:
  validationFailureAction: Enforce
  rules:
    - name: deny-privileged
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "Privileged containers are not allowed"
        pattern:
          spec:
            containers:
              - securityContext:
                  privileged: "!true"`,
        },
        {
          id: 'compliance-4',
          titleKey: 'bestPractices.compliance.policy.item4',
          priority: 'recommended',
          codeExample: `# Kyverno - mutate to add defaults
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: add-security-defaults
spec:
  rules:
    - name: add-security-context
      match:
        any:
          - resources:
              kinds:
                - Pod
      mutate:
        patchStrategicMerge:
          spec:
            containers:
              - (name): "*"
                securityContext:
                  runAsNonRoot: true
                  readOnlyRootFilesystem: true
                  allowPrivilegeEscalation: false`,
        },
      ],
    },
    {
      id: 'compliance-audit',
      titleKey: 'bestPractices.compliance.audit.title',
      descKey: 'bestPractices.compliance.audit.desc',
      iconPath: COMMON_ICON_PATHS.SEARCH,
      ...COLOR_SCHEMES.COMPLIANCE,
      items: [
        {
          id: 'compliance-5',
          titleKey: 'bestPractices.compliance.audit.item1',
          priority: 'critical',
          codeExample: `# Enable audit logging in kube-apiserver
# /etc/kubernetes/audit-policy.yaml
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
  # Log pod changes at RequestResponse level
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["pods"]
  # Log secrets at Metadata level (no body)
  - level: Metadata
    resources:
      - group: ""
        resources: ["secrets"]
  # Log all other resources at Request level
  - level: Request
    resources:
      - group: ""
      - group: "apps"
      - group: "batch"`,
        },
        {
          id: 'compliance-6',
          titleKey: 'bestPractices.compliance.audit.item2',
          priority: 'important',
          codeExample: `# Forward audit logs to external system
# kube-apiserver flags
--audit-log-path=/var/log/kubernetes/audit.log
--audit-log-maxage=30
--audit-log-maxbackup=10
--audit-log-maxsize=100
--audit-policy-file=/etc/kubernetes/audit-policy.yaml

# Or use webhook backend
--audit-webhook-config-file=/etc/kubernetes/audit-webhook.yaml
--audit-webhook-batch-max-wait=5s`,
        },
        {
          id: 'compliance-7',
          titleKey: 'bestPractices.compliance.audit.item3',
          priority: 'important',
          codeExample: `# Falco for runtime security monitoring
# Install Falco
helm repo add falcosecurity https://falcosecurity.github.io/charts
helm install falco falcosecurity/falco \\
  --set falcosidekick.enabled=true \\
  --set falcosidekick.webui.enabled=true

# Custom Falco rule
- rule: Detect shell in container
  desc: Alert when a shell is spawned in a container
  condition: >
    spawned_process and container
    and shell_procs
    and not known_shell_spawn_binaries
  output: >
    Shell spawned in container
    (user=%user.name container=%container.name image=%container.image.repository)
  priority: WARNING`,
        },
        {
          id: 'compliance-8',
          titleKey: 'bestPractices.compliance.audit.item4',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'compliance-standards',
      titleKey: 'bestPractices.compliance.standards.title',
      descKey: 'bestPractices.compliance.standards.desc',
      iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
      ...COLOR_SCHEMES.STORAGE,
      items: [
        {
          id: 'compliance-9',
          titleKey: 'bestPractices.compliance.standards.item1',
          priority: 'critical',
          codeExample: `# Run CIS Kubernetes Benchmark with kube-bench
# Install and run kube-bench
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml

# View results
kubectl logs -l app=kube-bench

# Or run directly on master node
docker run --pid=host -v /etc:/etc:ro \\
  aquasec/kube-bench:latest run --targets=master`,
        },
        {
          id: 'compliance-10',
          titleKey: 'bestPractices.compliance.standards.item2',
          priority: 'important',
          codeExample: `# NSA/CISA Kubernetes Hardening checklist
# 1. Pod Security Standards
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted

# 2. Network Policies (deny by default)
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-all
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress`,
        },
        {
          id: 'compliance-11',
          titleKey: 'bestPractices.compliance.standards.item3',
          priority: 'important',
          codeExample: `# PCI-DSS requirements mapping
# Requirement 2: No vendor defaults
# - Change default ServiceAccount tokens
automountServiceAccountToken: false

# Requirement 7: Restrict access
# - RBAC with least privilege
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-reader
rules:
  - apiGroups: [""]
    resources: ["pods", "services"]
    verbs: ["get", "list"]

# Requirement 10: Track access
# - Enable audit logging (see audit section)`,
        },
        {
          id: 'compliance-12',
          titleKey: 'bestPractices.compliance.standards.item4',
          priority: 'recommended',
        },
      ],
    },
  ],
};

/**
 * Best Practices - Devsecops
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const DEVSECOPS_PRACTICES: TabConfig = {
  id: 'devsecops',
  labelKey: 'bestPractices.tab.devsecops',
  iconPath:
    'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
  practices: [
    {
      id: 'devsecops-scanning',
      titleKey: 'bestPractices.devsecops.scanning.title',
      descKey: 'bestPractices.devsecops.scanning.desc',
      iconPath: COMMON_ICON_PATHS.SEARCH,
      ...COLOR_SCHEMES.SECURITY,
      items: [
        {
          id: 'devsecops-1',
          titleKey: 'bestPractices.devsecops.scanning.item1',
          priority: 'critical',
          codeExample: `# Scan running images in your cluster
kubectl get pods -A -o jsonpath='{range .items[*]}{.spec.containers[*].image}{"\\n"}{end}' | sort -u > images.txt

# Scan each image with Trivy
while read image; do
  trivy image --severity HIGH,CRITICAL "$image"
done < images.txt

# Scan a specific namespace
kubectl get pods -n production -o jsonpath='{.items[*].spec.containers[*].image}' | tr ' ' '\\n' | xargs -I {} trivy image {}`,
        },
        {
          id: 'devsecops-2',
          titleKey: 'bestPractices.devsecops.scanning.item2',
          priority: 'critical',
          codeExample: `# Falco rules for runtime threat detection
# /etc/falco/falco_rules.local.yaml
- rule: Shell Spawned in Container
  desc: Detect shell execution in container
  condition: >
    spawned_process and container and shell_procs
  output: "Shell spawned (user=%user.name container=%container.name image=%container.image.repository command=%proc.cmdline)"
  priority: WARNING

- rule: Sensitive File Access
  desc: Detect access to sensitive files
  condition: >
    open_read and container and
    fd.name in (/etc/shadow, /etc/passwd, /etc/kubernetes/admin.conf)
  output: "Sensitive file accessed (file=%fd.name container=%container.name)"
  priority: CRITICAL`,
        },
        {
          id: 'devsecops-3',
          titleKey: 'bestPractices.devsecops.scanning.item3',
          priority: 'important',
          codeExample: `# Audit cluster security with kube-bench (CIS Benchmark)
# Run on master node
kube-bench run --targets master

# Run on worker node
kube-bench run --targets node

# Run as a Job in cluster
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml
kubectl logs -l app=kube-bench --tail=-1`,
        },
        {
          id: 'devsecops-4',
          titleKey: 'bestPractices.devsecops.scanning.item4',
          priority: 'recommended',
          codeExample: `# Validate manifests before applying
# With kubeconform (validates against K8s schemas)
kubeconform -strict -kubernetes-version 1.29.0 ./manifests/

# With kube-score (best practices)
kube-score score deployment.yaml

# Pre-commit hook for validation
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/yannh/kubeconform
    hooks:
      - id: kubeconform
        args: ['-strict', '-kubernetes-version', '1.29.0']`,
        },
      ],
    },
    {
      id: 'devsecops-supplychain',
      titleKey: 'bestPractices.devsecops.supplychain.title',
      descKey: 'bestPractices.devsecops.supplychain.desc',
      iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'devsecops-5',
          titleKey: 'bestPractices.devsecops.supplychain.item1',
          priority: 'critical',
          codeExample: `# Kyverno policy to verify image signatures
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: verify-image-signature
spec:
  validationFailureAction: Enforce
  rules:
    - name: verify-signature
      match:
        any:
          - resources:
              kinds:
                - Pod
      verifyImages:
        - imageReferences:
            - "myregistry.io/*"
          attestors:
            - entries:
                - keyless:
                    issuer: https://token.actions.githubusercontent.com
                    subject: https://github.com/myorg/*`,
        },
        {
          id: 'devsecops-6',
          titleKey: 'bestPractices.devsecops.supplychain.item2',
          priority: 'critical',
          codeExample: `# Restrict to allowed registries only
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: allowed-registries
spec:
  validationFailureAction: Enforce
  rules:
    - name: validate-registries
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "Images must come from approved registries"
        pattern:
          spec:
            containers:
              - image: "myregistry.io/* | gcr.io/myproject/*"
            initContainers:
              - image: "myregistry.io/* | gcr.io/myproject/*"`,
        },
        {
          id: 'devsecops-7',
          titleKey: 'bestPractices.devsecops.supplychain.item3',
          priority: 'important',
          codeExample: `# Use image digests instead of tags
# Bad - mutable tag
image: nginx:1.25

# Good - immutable digest
image: nginx@sha256:a484819eb60211f5299034ac80f...

# Kyverno policy to require digests
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-image-digest
spec:
  validationFailureAction: Enforce
  rules:
    - name: require-digest
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "Images must use digest (@sha256:...)"
        pattern:
          spec:
            containers:
              - image: "*@sha256:*"`,
        },
        {
          id: 'devsecops-8',
          titleKey: 'bestPractices.devsecops.supplychain.item4',
          priority: 'recommended',
          codeExample: `# Sigstore Policy Controller for signature verification
# Install Policy Controller
helm repo add sigstore https://sigstore.github.io/helm-charts
helm install policy-controller sigstore/policy-controller \\
  --namespace cosign-system --create-namespace

# Create ClusterImagePolicy
apiVersion: policy.sigstore.dev/v1beta1
kind: ClusterImagePolicy
metadata:
  name: require-signatures
spec:
  images:
    - glob: "myregistry.io/**"
  authorities:
    - keyless:
        url: https://fulcio.sigstore.dev
        identities:
          - issuer: https://token.actions.githubusercontent.com
            subject: https://github.com/myorg/myrepo/.github/workflows/*`,
        },
      ],
    },
    {
      id: 'devsecops-admission',
      titleKey: 'bestPractices.devsecops.admission.title',
      descKey: 'bestPractices.devsecops.admission.desc',
      iconPath: COMMON_ICON_PATHS.LOCK_CLOSED,
      ...COLOR_SCHEMES.COMPLIANCE,
      items: [
        {
          id: 'devsecops-9',
          titleKey: 'bestPractices.devsecops.admission.item1',
          priority: 'critical',
          codeExample: `# Enforce Pod Security Standards
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    # Enforce restricted profile
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: latest
    # Warn on violations of baseline
    pod-security.kubernetes.io/warn: baseline
    pod-security.kubernetes.io/warn-version: latest`,
        },
        {
          id: 'devsecops-10',
          titleKey: 'bestPractices.devsecops.admission.item2',
          priority: 'important',
          codeExample: `# Kyverno - block latest tag
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: disallow-latest-tag
spec:
  validationFailureAction: Enforce
  rules:
    - name: require-image-tag
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "Using 'latest' tag is not allowed"
        pattern:
          spec:
            containers:
              - image: "!*:latest"
            initContainers:
              - image: "!*:latest"`,
        },
        {
          id: 'devsecops-11',
          titleKey: 'bestPractices.devsecops.admission.item3',
          priority: 'important',
          codeExample: `# Require resource limits
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-limits
spec:
  validationFailureAction: Enforce
  rules:
    - name: require-cpu-memory-limits
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "CPU and memory limits are required"
        pattern:
          spec:
            containers:
              - resources:
                  limits:
                    memory: "?*"
                    cpu: "?*"`,
        },
        {
          id: 'devsecops-12',
          titleKey: 'bestPractices.devsecops.admission.item4',
          priority: 'recommended',
          codeExample: `# Dry-run mode for policy testing
# Kyverno in audit mode
spec:
  validationFailureAction: Audit  # Don't block, just log

# Generate policy reports
kubectl get polr -A

# View violations
kubectl get polr -A -o jsonpath='{range .items[*]}{.metadata.name}{"\\n"}{range .results[*]}  {.rule}: {.message}{"\\n"}{end}{end}'`,
        },
      ],
    },
  ],
};

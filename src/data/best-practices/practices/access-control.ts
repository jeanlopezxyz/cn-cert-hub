/**
 * Best Practices - Accesscontrol
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const ACCESS_CONTROL_PRACTICES: TabConfig = {
  id: 'accesscontrol',
  labelKey: 'bestPractices.tab.accesscontrol',
  iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
  practices: [
    {
      id: 'sec-cluster',
      titleKey: 'bestPractices.security.cluster.title',
      descKey: 'bestPractices.security.cluster.desc',
      iconPath: COMMON_ICON_PATHS.LOCK,
      ...COLOR_SCHEMES.SECURITY,
      items: [
        {
          id: 'sec-1',
          titleKey: 'bestPractices.security.cluster.item1',
          priority: 'critical',
          codeExample: `apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
subjects:
  - kind: ServiceAccount
    name: myapp-sa
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io`,
        },
        { id: 'sec-2', titleKey: 'bestPractices.security.cluster.item2', priority: 'critical' },
        {
          id: 'sec-3',
          titleKey: 'bestPractices.security.cluster.item3',
          priority: 'important',
          codeExample: `# Enable audit logging in API server
--audit-log-path=/var/log/kubernetes/audit.log
--audit-log-maxage=30
--audit-log-maxbackup=10
--audit-log-maxsize=100
--audit-policy-file=/etc/kubernetes/audit-policy.yaml`,
        },
        { id: 'sec-4', titleKey: 'bestPractices.security.cluster.item4', priority: 'critical' },
        {
          id: 'sec-5',
          titleKey: 'bestPractices.security.cluster.item5',
          priority: 'important',
          codeExample: `# Kyverno policy example
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: require-labels
spec:
  validationFailureAction: Enforce
  rules:
    - name: check-team-label
      match:
        resources:
          kinds:
            - Pod
      validate:
        message: "Label 'team' is required"
        pattern:
          metadata:
            labels:
              team: "?*"`,
        },
      ],
    },
    {
      id: 'sec-workloads',
      titleKey: 'bestPractices.security.workloads.title',
      descKey: 'bestPractices.security.workloads.desc',
      iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
      ...COLOR_SCHEMES.OBSERVABILITY,
      items: [
        {
          id: 'wl-1',
          titleKey: 'bestPractices.security.workloads.item1',
          priority: 'critical',
          codeExample: `apiVersion: v1
kind: Namespace
metadata:
  name: restricted-ns
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/warn: restricted`,
        },
        {
          id: 'wl-2',
          titleKey: 'bestPractices.security.workloads.item2',
          priority: 'critical',
          codeExample: `securityContext:
  runAsNonRoot: true
  runAsUser: 1000`,
        },
        {
          id: 'wl-3',
          titleKey: 'bestPractices.security.workloads.item3',
          priority: 'important',
          codeExample: `securityContext:
  readOnlyRootFilesystem: true`,
        },
        {
          id: 'wl-4',
          titleKey: 'bestPractices.security.workloads.item4',
          priority: 'critical',
          codeExample: `securityContext:
  capabilities:
    drop:
      - ALL`,
        },
        {
          id: 'wl-5',
          titleKey: 'bestPractices.security.workloads.item5',
          priority: 'important',
          codeExample: `apiVersion: v1
kind: ServiceAccount
metadata:
  name: myapp-sa
automountServiceAccountToken: false`,
        },
      ],
    },
    {
      id: 'sec-secrets',
      titleKey: 'bestPractices.security.secrets.title',
      descKey: 'bestPractices.security.secrets.desc',
      iconPath: COMMON_ICON_PATHS.KEY,
      ...COLOR_SCHEMES.COMPLIANCE,
      items: [
        {
          id: 'scr-1',
          titleKey: 'bestPractices.security.secrets.item1',
          priority: 'critical',
          codeExample: `# Enable encryption at rest
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
      - secrets
    providers:
      - aescbc:
          keys:
            - name: key1
              secret: <base64-encoded-key>
      - identity: {}`,
        },
        {
          id: 'scr-2',
          titleKey: 'bestPractices.security.secrets.item2',
          priority: 'important',
          codeExample: `# External Secrets Operator example
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: my-secret
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: vault-backend
    kind: SecretStore
  target:
    name: my-secret
  data:
    - secretKey: password
      remoteRef:
        key: secret/myapp
        property: password`,
        },
        { id: 'scr-3', titleKey: 'bestPractices.security.secrets.item3', priority: 'important' },
        { id: 'scr-4', titleKey: 'bestPractices.security.secrets.item4', priority: 'critical' },
      ],
    },
    {
      id: 'sec-tls',
      titleKey: 'bestPractices.security.tls.title',
      descKey: 'bestPractices.security.tls.desc',
      iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'tls-1',
          titleKey: 'bestPractices.security.tls.item1',
          priority: 'critical',
          codeExample: `# Install cert-manager
kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.13.0/cert-manager.yaml

# Create ClusterIssuer for Let's Encrypt
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: admin@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      - http01:
          ingress:
            class: nginx`,
        },
        {
          id: 'tls-2',
          titleKey: 'bestPractices.security.tls.item2',
          priority: 'critical',
          codeExample: `# Check certificate expiration
kubeadm certs check-expiration

# Renew all certificates
kubeadm certs renew all

# Restart control plane after renewal
systemctl restart kubelet`,
        },
        {
          id: 'tls-3',
          titleKey: 'bestPractices.security.tls.item3',
          priority: 'important',
          codeExample: `# Certificate for application with cert-manager
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: myapp-tls
  namespace: myapp
spec:
  secretName: myapp-tls-secret
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
    - myapp.example.com
    - www.myapp.example.com`,
        },
        {
          id: 'tls-4',
          titleKey: 'bestPractices.security.tls.item4',
          priority: 'important',
          codeExample: `# Istio PeerAuthentication for mTLS
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: istio-system
spec:
  mtls:
    mode: STRICT`,
        },
        { id: 'tls-5', titleKey: 'bestPractices.security.tls.item5', priority: 'recommended' },
      ],
    },
  ],
};

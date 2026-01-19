/**
 * Best Practices - Operations
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COLOR_SCHEMES } from '../constants';

export const OPERATIONS_PRACTICES: TabConfig = {
  id: 'operations',
  labelKey: 'bestPractices.tab.operations',
  iconPath:
    'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
  practices: [
    {
      id: 'ops-upgrades',
      titleKey: 'bestPractices.ops.upgrades.title',
      descKey: 'bestPractices.ops.upgrades.desc',
      iconPath:
        'M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5',
      ...COLOR_SCHEMES.OPERATIONS,
      items: [
        {
          id: 'ops-1',
          titleKey: 'bestPractices.ops.upgrades.item1',
          priority: 'critical',
          codeExample: `# Check current version and available upgrades
kubectl version
kubeadm upgrade plan

# Upgrade control plane (one node at a time)
kubeadm upgrade apply v1.29.0

# Upgrade kubelet and kubectl
apt-get update && apt-get install -y kubelet=1.29.0-00 kubectl=1.29.0-00
systemctl daemon-reload && systemctl restart kubelet`,
        },
        {
          id: 'ops-2',
          titleKey: 'bestPractices.ops.upgrades.item2',
          priority: 'critical',
          codeExample: `# Drain node before maintenance
kubectl drain <node-name> --ignore-daemonsets --delete-emptydir-data

# After maintenance, uncordon the node
kubectl uncordon <node-name>`,
        },
        { id: 'ops-3', titleKey: 'bestPractices.ops.upgrades.item3', priority: 'important' },
        {
          id: 'ops-4',
          titleKey: 'bestPractices.ops.upgrades.item4',
          priority: 'important',
          codeExample: `# Check deprecations before upgrade
kubectl deprecations

# Or use kubent (kube-no-trouble)
kubent

# Check API versions
kubectl api-versions | grep -E "v1beta1|v1alpha1"`,
        },
      ],
    },
    {
      id: 'ops-troubleshooting',
      titleKey: 'bestPractices.ops.troubleshooting.title',
      descKey: 'bestPractices.ops.troubleshooting.desc',
      iconPath: 'M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z',
      ...COLOR_SCHEMES.COMPLIANCE,
      items: [
        {
          id: 'ops-5',
          titleKey: 'bestPractices.ops.troubleshooting.item1',
          priority: 'important',
          codeExample: `# Debug running pod with ephemeral container
kubectl debug -it <pod-name> --image=busybox --target=<container-name>

# Debug node issues
kubectl debug node/<node-name> -it --image=ubuntu`,
        },
        {
          id: 'ops-6',
          titleKey: 'bestPractices.ops.troubleshooting.item2',
          priority: 'important',
          codeExample: `# Check pod events
kubectl describe pod <pod-name>

# Get cluster events sorted by time
kubectl get events --sort-by='.lastTimestamp'

# Watch events in real-time
kubectl get events -w`,
        },
        {
          id: 'ops-7',
          titleKey: 'bestPractices.ops.troubleshooting.item3',
          priority: 'recommended',
          codeExample: `# Check logs with follow and timestamps
kubectl logs <pod-name> -f --timestamps

# Logs from previous container instance
kubectl logs <pod-name> --previous

# Logs from specific container
kubectl logs <pod-name> -c <container-name>

# Logs from all pods with label
kubectl logs -l app=myapp --all-containers`,
        },
        {
          id: 'ops-8',
          titleKey: 'bestPractices.ops.troubleshooting.item4',
          priority: 'recommended',
          codeExample: `# Check resource usage
kubectl top pods --sort-by=memory
kubectl top nodes

# Check cluster health
kubectl get componentstatuses
kubectl get nodes -o wide`,
        },
      ],
    },
    {
      id: 'ops-maintenance',
      titleKey: 'bestPractices.ops.maintenance.title',
      descKey: 'bestPractices.ops.maintenance.desc',
      iconPath:
        'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      ...COLOR_SCHEMES.RELIABILITY,
      items: [
        {
          id: 'ops-9',
          titleKey: 'bestPractices.ops.maintenance.item1',
          priority: 'critical',
          codeExample: `# Etcd backup (critical for disaster recovery)
ETCDCTL_API=3 etcdctl snapshot save /backup/etcd-snapshot.db \\
  --endpoints=https://127.0.0.1:2379 \\
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\
  --cert=/etc/kubernetes/pki/etcd/server.crt \\
  --key=/etc/kubernetes/pki/etcd/server.key

# Verify backup
ETCDCTL_API=3 etcdctl snapshot status /backup/etcd-snapshot.db`,
        },
        {
          id: 'ops-10',
          titleKey: 'bestPractices.ops.maintenance.item2',
          priority: 'important',
          codeExample: `# Renew certificates before expiry
kubeadm certs check-expiration
kubeadm certs renew all

# Restart control plane components after renewal
systemctl restart kubelet`,
        },
        {
          id: 'ops-11',
          titleKey: 'bestPractices.ops.maintenance.item3',
          priority: 'important',
          codeExample: `# Compact and defrag etcd
ETCDCTL_API=3 etcdctl compact $(ETCDCTL_API=3 etcdctl endpoint status --write-out="json" | jq -r '.[0].Status.header.revision')

ETCDCTL_API=3 etcdctl defrag --endpoints=https://127.0.0.1:2379`,
        },
        {
          id: 'ops-12',
          titleKey: 'bestPractices.ops.maintenance.item4',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'ops-backup',
      titleKey: 'bestPractices.ops.backup.title',
      descKey: 'bestPractices.ops.backup.desc',
      iconPath:
        'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
      ...COLOR_SCHEMES.STORAGE,
      items: [
        {
          id: 'ops-13',
          titleKey: 'bestPractices.ops.backup.item1',
          priority: 'critical',
          codeExample: `# Backup etcd snapshot
ETCDCTL_API=3 etcdctl snapshot save /backup/etcd-$(date +%Y%m%d).db \\
  --endpoints=https://127.0.0.1:2379 \\
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\
  --cert=/etc/kubernetes/pki/etcd/server.crt \\
  --key=/etc/kubernetes/pki/etcd/server.key

# Verify backup integrity
ETCDCTL_API=3 etcdctl snapshot status /backup/etcd-$(date +%Y%m%d).db`,
        },
        {
          id: 'ops-14',
          titleKey: 'bestPractices.ops.backup.item2',
          priority: 'critical',
          codeExample: `# Install Velero with S3 backend
velero install \\
  --provider aws \\
  --bucket my-backup-bucket \\
  --secret-file ./credentials-velero \\
  --backup-location-config region=us-east-1

# Create backup of namespace
velero backup create myapp-backup \\
  --include-namespaces myapp \\
  --storage-location default`,
        },
        {
          id: 'ops-15',
          titleKey: 'bestPractices.ops.backup.item3',
          priority: 'important',
          codeExample: `# Velero scheduled backup
velero schedule create daily-backup \\
  --schedule="0 2 * * *" \\
  --include-namespaces production,staging \\
  --ttl 720h

# List scheduled backups
velero schedule get`,
        },
        {
          id: 'ops-16',
          titleKey: 'bestPractices.ops.backup.item4',
          priority: 'important',
          codeExample: `# Test restore in a different namespace
velero restore create --from-backup myapp-backup \\
  --namespace-mappings myapp:myapp-restore-test

# Verify restored resources
kubectl get all -n myapp-restore-test`,
        },
        {
          id: 'ops-17',
          titleKey: 'bestPractices.ops.backup.item5',
          priority: 'recommended',
          codeExample: `# Backup to multiple locations (3-2-1 rule)
# Primary: Cloud storage
velero backup-location create primary \\
  --provider aws --bucket primary-bucket

# Secondary: Different region/provider
velero backup-location create secondary \\
  --provider gcp --bucket secondary-bucket

# Create backup to both locations
velero backup create full-backup \\
  --storage-location primary,secondary`,
        },
      ],
    },
    {
      id: 'ops-auth',
      titleKey: 'bestPractices.ops.auth.title',
      descKey: 'bestPractices.ops.auth.desc',
      iconPath:
        'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'auth-1',
          titleKey: 'bestPractices.ops.auth.item1',
          priority: 'critical',
          codeExample: `# Configure OIDC authentication for API server
# kube-apiserver flags
--oidc-issuer-url=https://accounts.google.com
--oidc-client-id=my-kubernetes-cluster
--oidc-username-claim=email
--oidc-groups-claim=groups

# Or with Dex as OIDC provider
--oidc-issuer-url=https://dex.example.com
--oidc-client-id=kubernetes
--oidc-ca-file=/etc/kubernetes/pki/dex-ca.crt`,
        },
        {
          id: 'auth-2',
          titleKey: 'bestPractices.ops.auth.item2',
          priority: 'critical',
          codeExample: `# ServiceAccount with bound token (recommended)
apiVersion: v1
kind: ServiceAccount
metadata:
  name: app-sa
  namespace: production
automountServiceAccountToken: false
---
# Create bound token with expiration
apiVersion: v1
kind: Secret
metadata:
  name: app-sa-token
  annotations:
    kubernetes.io/service-account.name: app-sa
type: kubernetes.io/service-account-token`,
        },
        {
          id: 'auth-3',
          titleKey: 'bestPractices.ops.auth.item3',
          priority: 'important',
          codeExample: `# Audit logging configuration
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
  # Log authentication failures
  - level: Metadata
    users: ["system:anonymous"]
    verbs: ["*"]
  # Log secrets access
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["secrets"]
  # Log RBAC changes
  - level: RequestResponse
    resources:
      - group: "rbac.authorization.k8s.io"
        resources: ["*"]`,
        },
        {
          id: 'auth-4',
          titleKey: 'bestPractices.ops.auth.item4',
          priority: 'important',
          codeExample: `# Disable anonymous authentication
# kube-apiserver flags
--anonymous-auth=false
--authorization-mode=RBAC,Node

# Audit webhook for external SIEM
--audit-log-path=/var/log/kubernetes/audit.log
--audit-log-maxage=30
--audit-log-maxbackup=10
--audit-webhook-config-file=/etc/kubernetes/audit-webhook.yaml`,
        },
        {
          id: 'auth-5',
          titleKey: 'bestPractices.ops.auth.item5',
          priority: 'recommended',
          codeExample: `# Short-lived kubeconfig with OIDC
apiVersion: v1
kind: Config
clusters:
  - name: production
    cluster:
      server: https://k8s.example.com:6443
      certificate-authority-data: <base64-ca>
users:
  - name: developer
    user:
      exec:
        apiVersion: client.authentication.k8s.io/v1beta1
        command: kubectl
        args:
          - oidc-login
          - get-token
          - --oidc-issuer-url=https://dex.example.com
          - --oidc-client-id=kubernetes`,
        },
      ],
    },
  ],
};

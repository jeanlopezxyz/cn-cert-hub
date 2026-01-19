/**
 * Best Practices - Storage
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const STORAGE_PRACTICES: TabConfig = {
  id: 'storage',
  labelKey: 'bestPractices.tab.storage',
  iconPath: COMMON_ICON_PATHS.DATABASE,
  practices: [
    {
      id: 'sto-volumes',
      titleKey: 'bestPractices.storage.volumes.title',
      descKey: 'bestPractices.storage.volumes.desc',
      iconPath: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
      ...COLOR_SCHEMES.STORAGE,
      items: [
        {
          id: 'vol-1',
          titleKey: 'bestPractices.storage.volumes.item1',
          priority: 'important',
          codeExample: `apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast-ssd
provisioner: kubernetes.io/gce-pd
parameters:
  type: pd-ssd
reclaimPolicy: Retain
allowVolumeExpansion: true`,
        },
        {
          id: 'vol-2',
          titleKey: 'bestPractices.storage.volumes.item2',
          priority: 'important',
          codeExample: `# RWO - ReadWriteOnce (single node)
# RWX - ReadWriteMany (multiple nodes)
# ROX - ReadOnlyMany (multiple nodes, read-only)
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi`,
        },
        {
          id: 'vol-3',
          titleKey: 'bestPractices.storage.volumes.item3',
          priority: 'recommended',
          codeExample: `apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: myapp-snapshot
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: myapp-pvc`,
        },
        { id: 'vol-4', titleKey: 'bestPractices.storage.volumes.item4', priority: 'recommended' },
      ],
    },
    {
      id: 'sto-backup',
      titleKey: 'bestPractices.storage.backup.title',
      descKey: 'bestPractices.storage.backup.desc',
      iconPath: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12',
      ...COLOR_SCHEMES.COST,
      items: [
        {
          id: 'bak-1',
          titleKey: 'bestPractices.storage.backup.item1',
          priority: 'critical',
          codeExample: `# Backup etcd
ETCDCTL_API=3 etcdctl snapshot save snapshot.db \\
  --endpoints=https://127.0.0.1:2379 \\
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \\
  --cert=/etc/kubernetes/pki/etcd/server.crt \\
  --key=/etc/kubernetes/pki/etcd/server.key

# Restore etcd
ETCDCTL_API=3 etcdctl snapshot restore snapshot.db`,
        },
        {
          id: 'bak-2',
          titleKey: 'bestPractices.storage.backup.item2',
          priority: 'important',
          codeExample: `# Velero backup
velero backup create mybackup \\
  --include-namespaces myapp \\
  --storage-location default

# Schedule backups
velero schedule create daily-backup \\
  --schedule="0 2 * * *" \\
  --include-namespaces myapp`,
        },
        { id: 'bak-3', titleKey: 'bestPractices.storage.backup.item3', priority: 'important' },
        { id: 'bak-4', titleKey: 'bestPractices.storage.backup.item4', priority: 'recommended' },
      ],
    },
  ],
};

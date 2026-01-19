/**
 * Best Practices - Stateful
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const STATEFUL_PRACTICES: TabConfig = {
  id: 'stateful',
  labelKey: 'bestPractices.tab.stateful',
  iconPath: COMMON_ICON_PATHS.DATABASE,
  practices: [
    {
      id: 'stateful-operators',
      titleKey: 'bestPractices.stateful.operators.title',
      descKey: 'bestPractices.stateful.operators.desc',
      iconPath: COMMON_ICON_PATHS.DATABASE,
      ...COLOR_SCHEMES.COST,
      items: [
        {
          id: 'stateful-1',
          titleKey: 'bestPractices.stateful.operators.item1',
          priority: 'critical',
          codeExample: `# CloudNativePG for PostgreSQL
# Install operator
kubectl apply -f https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/release-1.22/releases/cnpg-1.22.0.yaml

# Create PostgreSQL cluster
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-cluster
spec:
  instances: 3
  storage:
    size: 10Gi
    storageClass: fast-ssd
  backup:
    barmanObjectStore:
      destinationPath: s3://backups/postgres
      s3Credentials:
        accessKeyId:
          name: s3-creds
          key: ACCESS_KEY_ID
        secretAccessKey:
          name: s3-creds
          key: SECRET_ACCESS_KEY`,
        },
        {
          id: 'stateful-2',
          titleKey: 'bestPractices.stateful.operators.item2',
          priority: 'important',
          codeExample: `# MongoDB Community Operator
# Install operator
helm repo add mongodb https://mongodb.github.io/helm-charts
helm install mongodb-operator mongodb/community-operator

# Create MongoDB ReplicaSet
apiVersion: mongodbcommunity.mongodb.com/v1
kind: MongoDBCommunity
metadata:
  name: mongodb-cluster
spec:
  members: 3
  type: ReplicaSet
  version: "6.0.5"
  security:
    authentication:
      modes: ["SCRAM"]
  users:
    - name: admin
      db: admin
      passwordSecretRef:
        name: mongodb-admin-password
      roles:
        - name: root
          db: admin`,
        },
        {
          id: 'stateful-3',
          titleKey: 'bestPractices.stateful.operators.item3',
          priority: 'important',
          codeExample: `# Redis Operator (Spotahome)
# Install operator
helm repo add redis-operator https://spotahome.github.io/redis-operator
helm install redis-operator redis-operator/redis-operator

# Create Redis Failover cluster
apiVersion: databases.spotahome.com/v1
kind: RedisFailover
metadata:
  name: redis-cluster
spec:
  sentinel:
    replicas: 3
  redis:
    replicas: 3
    resources:
      limits:
        memory: 1Gi
    storage:
      persistentVolumeClaim:
        spec:
          accessModes: [ReadWriteOnce]
          resources:
            requests:
              storage: 5Gi`,
        },
        {
          id: 'stateful-4',
          titleKey: 'bestPractices.stateful.operators.item4',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'stateful-sets',
      titleKey: 'bestPractices.stateful.sets.title',
      descKey: 'bestPractices.stateful.sets.desc',
      iconPath: COMMON_ICON_PATHS.CUBE_STACK,
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'stateful-5',
          titleKey: 'bestPractices.stateful.sets.item1',
          priority: 'critical',
          codeExample: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "web"
  replicas: 3
  podManagementPolicy: OrderedReady  # Sequential startup
  updateStrategy:
    type: RollingUpdate
    rollingUpdate:
      partition: 0  # Update all pods
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: app
          image: myapp:1.0
          volumeMounts:
            - name: data
              mountPath: /data
  volumeClaimTemplates:
    - metadata:
        name: data
      spec:
        accessModes: ["ReadWriteOnce"]
        storageClassName: fast-ssd
        resources:
          requests:
            storage: 10Gi`,
        },
        {
          id: 'stateful-6',
          titleKey: 'bestPractices.stateful.sets.item2',
          priority: 'important',
          codeExample: `# Headless service for StatefulSet DNS
apiVersion: v1
kind: Service
metadata:
  name: web
spec:
  clusterIP: None  # Headless
  selector:
    app: web
  ports:
    - port: 80
      name: http

# Pods get stable DNS names:
# web-0.web.namespace.svc.cluster.local
# web-1.web.namespace.svc.cluster.local
# web-2.web.namespace.svc.cluster.local`,
        },
        {
          id: 'stateful-7',
          titleKey: 'bestPractices.stateful.sets.item3',
          priority: 'important',
          codeExample: `# PodDisruptionBudget for StatefulSet
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: web-pdb
spec:
  minAvailable: 2  # Maintain quorum
  selector:
    matchLabels:
      app: web`,
        },
        {
          id: 'stateful-8',
          titleKey: 'bestPractices.stateful.sets.item4',
          priority: 'recommended',
          codeExample: `# Anti-affinity for HA
spec:
  template:
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            - labelSelector:
                matchLabels:
                  app: web
              topologyKey: kubernetes.io/hostname
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                labelSelector:
                  matchLabels:
                    app: web
                topologyKey: topology.kubernetes.io/zone`,
        },
      ],
    },
    {
      id: 'stateful-replication',
      titleKey: 'bestPractices.stateful.replication.title',
      descKey: 'bestPractices.stateful.replication.desc',
      iconPath: COMMON_ICON_PATHS.ARROWS_EXCHANGE,
      ...COLOR_SCHEMES.OBSERVABILITY,
      items: [
        {
          id: 'stateful-9',
          titleKey: 'bestPractices.stateful.replication.item1',
          priority: 'critical',
          codeExample: `# PostgreSQL with synchronous replication
apiVersion: postgresql.cnpg.io/v1
kind: Cluster
metadata:
  name: postgres-ha
spec:
  instances: 3
  postgresql:
    parameters:
      synchronous_commit: "on"
  primaryUpdateStrategy: unsupervised
  minSyncReplicas: 1
  maxSyncReplicas: 2`,
        },
        {
          id: 'stateful-10',
          titleKey: 'bestPractices.stateful.replication.item2',
          priority: 'important',
          codeExample: `# Use storage with replication (Longhorn example)
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: longhorn-ha
provisioner: driver.longhorn.io
parameters:
  numberOfReplicas: "3"
  staleReplicaTimeout: "2880"
  fromBackup: ""
  dataLocality: "best-effort"
reclaimPolicy: Delete
volumeBindingMode: Immediate`,
        },
        {
          id: 'stateful-11',
          titleKey: 'bestPractices.stateful.replication.item3',
          priority: 'important',
          codeExample: `# VolumeSnapshot for point-in-time recovery
apiVersion: snapshot.storage.k8s.io/v1
kind: VolumeSnapshot
metadata:
  name: postgres-snapshot
spec:
  volumeSnapshotClassName: csi-snapclass
  source:
    persistentVolumeClaimName: data-postgres-0

# Restore from snapshot
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-postgres-restored
spec:
  dataSource:
    name: postgres-snapshot
    kind: VolumeSnapshot
    apiGroup: snapshot.storage.k8s.io
  accessModes: [ReadWriteOnce]
  resources:
    requests:
      storage: 10Gi`,
        },
        {
          id: 'stateful-12',
          titleKey: 'bestPractices.stateful.replication.item4',
          priority: 'recommended',
        },
      ],
    },
  ],
};

/**
 * Best Practices - Highavailability
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const HIGH_AVAILABILITY_PRACTICES: TabConfig = {
  id: 'highavailability',
  labelKey: 'bestPractices.tab.highavailability',
  iconPath: COMMON_ICON_PATHS.SHIELD_CHECK,
  practices: [
    {
      id: 'ha-redundancy',
      titleKey: 'bestPractices.ha.redundancy.title',
      descKey: 'bestPractices.ha.redundancy.desc',
      iconPath: COMMON_ICON_PATHS.DOCUMENT,
      ...COLOR_SCHEMES.RELIABILITY,
      items: [
        {
          id: 'ha-1',
          titleKey: 'bestPractices.ha.redundancy.item1',
          priority: 'critical',
          codeExample: `# Minimum 3 replicas for high availability
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1
      maxSurge: 1`,
        },
        {
          id: 'ha-2',
          titleKey: 'bestPractices.ha.redundancy.item2',
          priority: 'critical',
          codeExample: `# Pod anti-affinity for zone distribution
affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchLabels:
            app: myapp
        topologyKey: topology.kubernetes.io/zone`,
        },
        {
          id: 'ha-3',
          titleKey: 'bestPractices.ha.redundancy.item3',
          priority: 'important',
          codeExample: `# Spread across nodes
topologySpreadConstraints:
  - maxSkew: 1
    topologyKey: kubernetes.io/hostname
    whenUnsatisfiable: DoNotSchedule
    labelSelector:
      matchLabels:
        app: myapp`,
        },
        {
          id: 'ha-4',
          titleKey: 'bestPractices.ha.redundancy.item4',
          priority: 'important',
          codeExample: `# Node affinity for specific node pools
affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
        - matchExpressions:
            - key: node-type
              operator: In
              values:
                - production`,
        },
        {
          id: 'ha-5',
          titleKey: 'bestPractices.ha.redundancy.item5',
          priority: 'recommended',
          codeExample: `# Priority class for critical workloads
apiVersion: scheduling.k8s.io/v1
kind: PriorityClass
metadata:
  name: high-priority
value: 1000000
globalDefault: false
description: "Critical production workloads"`,
        },
      ],
    },
    {
      id: 'ha-resilience',
      titleKey: 'bestPractices.ha.resilience.title',
      descKey: 'bestPractices.ha.resilience.desc',
      iconPath: COMMON_ICON_PATHS.CYCLE,
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'res-ha-1',
          titleKey: 'bestPractices.ha.resilience.item1',
          priority: 'critical',
          codeExample: `apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2
  # Or use: maxUnavailable: 1
  selector:
    matchLabels:
      app: myapp`,
        },
        {
          id: 'res-ha-2',
          titleKey: 'bestPractices.ha.resilience.item2',
          priority: 'important',
          codeExample: `# Graceful shutdown handling
spec:
  terminationGracePeriodSeconds: 60
  containers:
    - name: myapp
      lifecycle:
        preStop:
          exec:
            command: ["/bin/sh", "-c", "sleep 10"]`,
        },
        {
          id: 'res-ha-3',
          titleKey: 'bestPractices.ha.resilience.item3',
          priority: 'important',
          codeExample: `# Configure proper timeouts
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
  timeoutSeconds: 3
  failureThreshold: 3`,
        },
        {
          id: 'res-ha-4',
          titleKey: 'bestPractices.ha.resilience.item4',
          priority: 'recommended',
        },
      ],
    },
  ],
};

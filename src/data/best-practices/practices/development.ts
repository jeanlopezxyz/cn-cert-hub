/**
 * Best Practices - Development
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COLOR_SCHEMES } from '../constants';

export const DEVELOPMENT_PRACTICES: TabConfig = {
  id: 'development',
  labelKey: 'bestPractices.tab.development',
  iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  practices: [
    {
      id: 'dev-applications',
      titleKey: 'bestPractices.dev.applications.title',
      descKey: 'bestPractices.dev.applications.desc',
      iconPath:
        'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'app-1',
          titleKey: 'bestPractices.dev.applications.item1',
          priority: 'critical',
          codeExample: `livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 5

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 3

startupProbe:
  httpGet:
    path: /healthz
    port: 8080
  failureThreshold: 30
  periodSeconds: 10`,
        },
        {
          id: 'app-2',
          titleKey: 'bestPractices.dev.applications.item2',
          priority: 'important',
          codeExample: `# Handle SIGTERM in your application
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down...');
  server.close(() => {
    process.exit(0);
  });
});

# Pod configuration
spec:
  terminationGracePeriodSeconds: 30`,
        },
        {
          id: 'app-3',
          titleKey: 'bestPractices.dev.applications.item3',
          priority: 'recommended',
        },
        {
          id: 'app-4',
          titleKey: 'bestPractices.dev.applications.item4',
          priority: 'important',
          codeExample: `env:
  - name: DATABASE_URL
    valueFrom:
      secretKeyRef:
        name: db-secret
        key: url
  - name: LOG_LEVEL
    valueFrom:
      configMapKeyRef:
        name: app-config
        key: log_level`,
        },
        {
          id: 'app-5',
          titleKey: 'bestPractices.dev.applications.item5',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'dev-resources',
      titleKey: 'bestPractices.dev.resources.title',
      descKey: 'bestPractices.dev.resources.desc',
      iconPath:
        'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      ...COLOR_SCHEMES.OPERATIONS,
      items: [
        {
          id: 'res-1',
          titleKey: 'bestPractices.dev.resources.item1',
          priority: 'critical',
          codeExample: `resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "500m"`,
        },
        {
          id: 'res-2',
          titleKey: 'bestPractices.dev.resources.item2',
          priority: 'important',
          codeExample: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`,
        },
        {
          id: 'res-3',
          titleKey: 'bestPractices.dev.resources.item3',
          priority: 'important',
          codeExample: `apiVersion: v1
kind: ResourceQuota
metadata:
  name: namespace-quota
spec:
  hard:
    requests.cpu: "4"
    requests.memory: 8Gi
    limits.cpu: "8"
    limits.memory: 16Gi
    pods: "20"`,
        },
        {
          id: 'res-4',
          titleKey: 'bestPractices.dev.resources.item4',
          priority: 'recommended',
          codeExample: `apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: myapp-pdb
spec:
  minAvailable: 2  # or use maxUnavailable
  selector:
    matchLabels:
      app: myapp`,
        },
      ],
    },
  ],
};

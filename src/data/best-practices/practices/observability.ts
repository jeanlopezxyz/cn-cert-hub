/**
 * Best Practices - Observability
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const OBSERVABILITY_PRACTICES: TabConfig = {
  id: 'observability',
  labelKey: 'bestPractices.tab.observability',
  iconPath: COMMON_ICON_PATHS.CHART_BAR,
  practices: [
    {
      id: 'obs-metrics',
      titleKey: 'bestPractices.observability.metrics.title',
      descKey: 'bestPractices.observability.metrics.desc',
      iconPath: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
      ...COLOR_SCHEMES.OBSERVABILITY,
      items: [
        {
          id: 'met-1',
          titleKey: 'bestPractices.observability.metrics.item1',
          priority: 'important',
          codeExample: `# ServiceMonitor for Prometheus Operator
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: myapp-monitor
spec:
  selector:
    matchLabels:
      app: myapp
  endpoints:
    - port: metrics
      interval: 30s
      path: /metrics`,
        },
        {
          id: 'met-2',
          titleKey: 'bestPractices.observability.metrics.item2',
          priority: 'recommended',
        },
        {
          id: 'met-3',
          titleKey: 'bestPractices.observability.metrics.item3',
          priority: 'important',
          codeExample: `# PrometheusRule for alerting
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: myapp-alerts
spec:
  groups:
    - name: myapp
      rules:
        - alert: HighErrorRate
          expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
          for: 5m
          labels:
            severity: critical
          annotations:
            summary: High error rate detected`,
        },
        {
          id: 'met-4',
          titleKey: 'bestPractices.observability.metrics.item4',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'obs-logging',
      titleKey: 'bestPractices.observability.logging.title',
      descKey: 'bestPractices.observability.logging.desc',
      iconPath:
        'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      ...COLOR_SCHEMES.COST,
      items: [
        {
          id: 'log-1',
          titleKey: 'bestPractices.observability.logging.item1',
          priority: 'important',
        },
        {
          id: 'log-2',
          titleKey: 'bestPractices.observability.logging.item2',
          priority: 'important',
          codeExample: `// Structured JSON logging
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "info",
  "message": "Request processed",
  "traceId": "abc123",
  "userId": "user-456",
  "duration_ms": 150
}`,
        },
        {
          id: 'log-3',
          titleKey: 'bestPractices.observability.logging.item3',
          priority: 'recommended',
        },
        {
          id: 'log-4',
          titleKey: 'bestPractices.observability.logging.item4',
          priority: 'recommended',
        },
      ],
    },
    {
      id: 'obs-external',
      titleKey: 'bestPractices.observability.external.title',
      descKey: 'bestPractices.observability.external.desc',
      iconPath:
        'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10',
      ...COLOR_SCHEMES.STORAGE,
      items: [
        {
          id: 'ext-1',
          titleKey: 'bestPractices.observability.external.item1',
          priority: 'critical',
          codeExample: `# Thanos sidecar for long-term metrics storage
apiVersion: apps/v1
kind: Deployment
metadata:
  name: prometheus
spec:
  template:
    spec:
      containers:
        - name: prometheus
          image: prom/prometheus:v2.45.0
        - name: thanos-sidecar
          image: quay.io/thanos/thanos:v0.32.0
          args:
            - sidecar
            - --prometheus.url=http://localhost:9090
            - --objstore.config-file=/etc/thanos/objstore.yaml`,
        },
        {
          id: 'ext-2',
          titleKey: 'bestPractices.observability.external.item2',
          priority: 'important',
          codeExample: `# Loki with S3 storage backend
loki:
  storage:
    type: s3
    s3:
      endpoint: s3.amazonaws.com
      bucketnames: my-loki-logs
      region: us-east-1
      access_key_id: \${AWS_ACCESS_KEY_ID}
      secret_access_key: \${AWS_SECRET_ACCESS_KEY}
  schema_config:
    configs:
      - from: 2024-01-01
        store: tsdb
        object_store: s3
        schema: v13`,
        },
        {
          id: 'ext-3',
          titleKey: 'bestPractices.observability.external.item3',
          priority: 'important',
        },
        {
          id: 'ext-4',
          titleKey: 'bestPractices.observability.external.item4',
          priority: 'recommended',
          codeExample: `# Prometheus remote_write to external storage
global:
  external_labels:
    cluster: production

remote_write:
  - url: https://cortex.example.com/api/v1/push
    queue_config:
      max_samples_per_send: 10000
      batch_send_deadline: 5s
    write_relabel_configs:
      - source_labels: [__name__]
        regex: 'go_.*'
        action: drop`,
        },
        {
          id: 'ext-5',
          titleKey: 'bestPractices.observability.external.item5',
          priority: 'recommended',
        },
      ],
    },
  ],
};

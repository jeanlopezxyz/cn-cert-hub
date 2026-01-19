/**
 * Best Practices - Costoptimization
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COLOR_SCHEMES } from '../constants';

export const COST_OPTIMIZATION_PRACTICES: TabConfig = {
  id: 'costoptimization',
  labelKey: 'bestPractices.tab.costoptimization',
  iconPath:
    'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  practices: [
    {
      id: 'cost-resources',
      titleKey: 'bestPractices.cost.resources.title',
      descKey: 'bestPractices.cost.resources.desc',
      iconPath:
        'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
      ...COLOR_SCHEMES.COST,
      items: [
        {
          id: 'cost-1',
          titleKey: 'bestPractices.cost.resources.item1',
          priority: 'critical',
          codeExample: `# Right-size your resources based on actual usage
resources:
  requests:
    memory: "256Mi"  # Based on p95 usage
    cpu: "100m"      # Based on average usage
  limits:
    memory: "512Mi"  # 2x requests for burst
    cpu: "500m"      # Allow burst capacity`,
        },
        {
          id: 'cost-2',
          titleKey: 'bestPractices.cost.resources.item2',
          priority: 'important',
          codeExample: `# Install metrics-server and use VPA recommendations
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: myapp-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  updatePolicy:
    updateMode: "Off"  # Use "Auto" for automatic updates`,
        },
        {
          id: 'cost-3',
          titleKey: 'bestPractices.cost.resources.item3',
          priority: 'important',
          codeExample: `# Enforce resource limits per namespace
apiVersion: v1
kind: LimitRange
metadata:
  name: default-limits
spec:
  limits:
    - default:
        cpu: "500m"
        memory: "256Mi"
      defaultRequest:
        cpu: "100m"
        memory: "128Mi"
      type: Container`,
        },
        {
          id: 'cost-4',
          titleKey: 'bestPractices.cost.resources.item4',
          priority: 'recommended',
          codeExample: `# Check resource usage
kubectl top pods --all-namespaces
kubectl top nodes

# Find pods without resource limits
kubectl get pods -A -o json | jq '.items[] | select(.spec.containers[].resources.limits == null) | .metadata.name'`,
        },
      ],
    },
    {
      id: 'cost-scaling',
      titleKey: 'bestPractices.cost.scaling.title',
      descKey: 'bestPractices.cost.scaling.desc',
      iconPath:
        'M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z',
      ...COLOR_SCHEMES.COMPLIANCE,
      items: [
        {
          id: 'cost-5',
          titleKey: 'bestPractices.cost.scaling.item1',
          priority: 'important',
          codeExample: `# Cluster Autoscaler configuration
apiVersion: v1
kind: ConfigMap
metadata:
  name: cluster-autoscaler-config
data:
  scale-down-delay-after-add: "10m"
  scale-down-unneeded-time: "10m"
  scale-down-utilization-threshold: "0.5"`,
        },
        {
          id: 'cost-6',
          titleKey: 'bestPractices.cost.scaling.item2',
          priority: 'important',
          codeExample: `# Use spot/preemptible nodes for non-critical workloads
affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
        - matchExpressions:
            - key: cloud.google.com/gke-spot
              operator: In
              values:
                - "true"
tolerations:
  - key: "cloud.google.com/gke-spot"
    operator: "Equal"
    value: "true"
    effect: "NoSchedule"`,
        },
        {
          id: 'cost-7',
          titleKey: 'bestPractices.cost.scaling.item3',
          priority: 'recommended',
          codeExample: `# Scale to zero during off-hours with KEDA
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: myapp-scaler
spec:
  scaleTargetRef:
    name: myapp
  minReplicaCount: 0
  maxReplicaCount: 10
  triggers:
    - type: cron
      metadata:
        timezone: America/New_York
        start: "0 8 * * 1-5"
        end: "0 18 * * 1-5"
        desiredReplicas: "3"`,
        },
        { id: 'cost-8', titleKey: 'bestPractices.cost.scaling.item4', priority: 'recommended' },
      ],
    },
    {
      id: 'cost-cleanup',
      titleKey: 'bestPractices.cost.cleanup.title',
      descKey: 'bestPractices.cost.cleanup.desc',
      iconPath:
        'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0',
      ...COLOR_SCHEMES.SECURITY,
      items: [
        {
          id: 'cost-9',
          titleKey: 'bestPractices.cost.cleanup.item1',
          priority: 'important',
          codeExample: `# Find and delete orphaned PVCs
kubectl get pvc --all-namespaces -o json | jq -r '.items[] | select(.status.phase == "Released") | .metadata.name'

# Delete unused PVCs
kubectl delete pvc <pvc-name> -n <namespace>`,
        },
        {
          id: 'cost-10',
          titleKey: 'bestPractices.cost.cleanup.item2',
          priority: 'important',
          codeExample: `# Set TTL for completed Jobs
apiVersion: batch/v1
kind: Job
metadata:
  name: cleanup-job
spec:
  ttlSecondsAfterFinished: 3600  # Auto-delete after 1 hour
  template:
    spec:
      containers:
        - name: job
          image: busybox
          command: ["echo", "done"]
      restartPolicy: Never`,
        },
        {
          id: 'cost-11',
          titleKey: 'bestPractices.cost.cleanup.item3',
          priority: 'recommended',
          codeExample: `# Clean up old ReplicaSets
kubectl get rs --all-namespaces -o json | jq -r '.items[] | select(.spec.replicas == 0) | .metadata.name'

# Set revision history limit in deployments
spec:
  revisionHistoryLimit: 3`,
        },
        { id: 'cost-12', titleKey: 'bestPractices.cost.cleanup.item4', priority: 'recommended' },
      ],
    },
    {
      id: 'cost-serverless',
      titleKey: 'bestPractices.cost.serverless.title',
      descKey: 'bestPractices.cost.serverless.desc',
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'cost-13',
          titleKey: 'bestPractices.cost.serverless.item1',
          priority: 'critical',
          whyItMattersKey: 'bestPractices.cost.serverless.why1',
          codeExample: `# KEDA ScaledObject - Scale to zero
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: myapp-scaler
spec:
  scaleTargetRef:
    name: myapp
  minReplicaCount: 0    # Scale to zero!
  maxReplicaCount: 100
  cooldownPeriod: 300   # Wait 5 min before scaling down
  triggers:
    - type: prometheus
      metadata:
        serverAddress: http://prometheus:9090
        metricName: http_requests_total
        threshold: "100"
        query: sum(rate(http_requests_total{app="myapp"}[2m]))`,
        },
        {
          id: 'cost-14',
          titleKey: 'bestPractices.cost.serverless.item2',
          priority: 'important',
          codeExample: `# KEDA with multiple triggers
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: worker-scaler
spec:
  scaleTargetRef:
    name: worker
  minReplicaCount: 0
  triggers:
    # Scale based on RabbitMQ queue length
    - type: rabbitmq
      metadata:
        queueName: jobs
        host: amqp://rabbitmq:5672
        queueLength: "5"
    # Or scale based on AWS SQS
    - type: aws-sqs-queue
      metadata:
        queueURL: https://sqs.us-east-1.amazonaws.com/xxx/my-queue
        queueLength: "10"`,
        },
        {
          id: 'cost-15',
          titleKey: 'bestPractices.cost.serverless.item3',
          priority: 'important',
          whyItMattersKey: 'bestPractices.cost.serverless.why3',
          codeExample: `# Knative Service - Serverless containers
apiVersion: serving.knative.dev/v1
kind: Service
metadata:
  name: my-service
spec:
  template:
    metadata:
      annotations:
        autoscaling.knative.dev/min-scale: "0"
        autoscaling.knative.dev/max-scale: "10"
        autoscaling.knative.dev/target: "100"  # Concurrent requests per pod
    spec:
      containerConcurrency: 100
      containers:
        - image: myapp:latest
          resources:
            limits:
              cpu: "1"
              memory: "512Mi"`,
        },
        {
          id: 'cost-16',
          titleKey: 'bestPractices.cost.serverless.item4',
          priority: 'recommended',
          codeExample: `# KEDA Cron Scaler - Schedule-based scaling
apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: business-hours-scaler
spec:
  scaleTargetRef:
    name: api-server
  triggers:
    # Scale up during business hours
    - type: cron
      metadata:
        timezone: America/New_York
        start: "0 8 * * 1-5"   # 8 AM Mon-Fri
        end: "0 18 * * 1-5"    # 6 PM Mon-Fri
        desiredReplicas: "5"
    # Minimal during off-hours
    - type: cron
      metadata:
        timezone: America/New_York
        start: "0 18 * * 1-5"
        end: "0 8 * * 1-5"
        desiredReplicas: "1"`,
        },
        {
          id: 'cost-17',
          titleKey: 'bestPractices.cost.serverless.item5',
          priority: 'recommended',
          commonMistakeKey: 'bestPractices.cost.serverless.mistake5',
          codeExample: `# OpenFaaS function definition
version: 1.0
provider:
  name: openfaas
functions:
  process-image:
    lang: python3
    handler: ./handler
    image: myregistry/process-image:latest
    labels:
      com.openfaas.scale.min: "0"
      com.openfaas.scale.max: "20"
      com.openfaas.scale.zero: "true"
    environment:
      write_timeout: 60s
      read_timeout: 60s`,
        },
      ],
    },
  ],
};

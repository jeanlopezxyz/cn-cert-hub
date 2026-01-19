/**
 * Best Practices - Servicemesh
 */
import type { TabConfig } from '@/data/best-practices/types';
import { COMMON_ICON_PATHS, COLOR_SCHEMES } from '../constants';

export const SERVICE_MESH_PRACTICES: TabConfig = {
  id: 'servicemesh',
  labelKey: 'bestPractices.tab.servicemesh',
  iconPath: COMMON_ICON_PATHS.ARROWS_EXCHANGE,
  practices: [
    {
      id: 'mesh-security',
      titleKey: 'bestPractices.mesh.security.title',
      descKey: 'bestPractices.mesh.security.desc',
      iconPath: COMMON_ICON_PATHS.LOCK_CLOSED,
      ...COLOR_SCHEMES.PERFORMANCE,
      items: [
        {
          id: 'mesh-1',
          titleKey: 'bestPractices.mesh.security.item1',
          priority: 'critical',
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
        {
          id: 'mesh-2',
          titleKey: 'bestPractices.mesh.security.item2',
          priority: 'critical',
          codeExample: `# Istio AuthorizationPolicy
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: frontend-to-backend
  namespace: myapp
spec:
  selector:
    matchLabels:
      app: backend
  action: ALLOW
  rules:
    - from:
        - source:
            principals: ["cluster.local/ns/myapp/sa/frontend"]
      to:
        - operation:
            methods: ["GET", "POST"]`,
        },
        { id: 'mesh-3', titleKey: 'bestPractices.mesh.security.item3', priority: 'important' },
        {
          id: 'mesh-4',
          titleKey: 'bestPractices.mesh.security.item4',
          priority: 'recommended',
          codeExample: `# RequestAuthentication for JWT validation
apiVersion: security.istio.io/v1beta1
kind: RequestAuthentication
metadata:
  name: jwt-auth
spec:
  selector:
    matchLabels:
      app: api-gateway
  jwtRules:
    - issuer: "https://auth.example.com"
      jwksUri: "https://auth.example.com/.well-known/jwks.json"`,
        },
      ],
    },
    {
      id: 'mesh-traffic',
      titleKey: 'bestPractices.mesh.traffic.title',
      descKey: 'bestPractices.mesh.traffic.desc',
      iconPath: COMMON_ICON_PATHS.ARROWS_EXCHANGE,
      ...COLOR_SCHEMES.NETWORKING,
      items: [
        {
          id: 'mesh-5',
          titleKey: 'bestPractices.mesh.traffic.item1',
          priority: 'important',
          codeExample: `# Circuit breaker with Istio
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: backend-circuit-breaker
spec:
  host: backend
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        h2UpgradePolicy: UPGRADE
        http1MaxPendingRequests: 100
        http2MaxRequests: 1000
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50`,
        },
        {
          id: 'mesh-6',
          titleKey: 'bestPractices.mesh.traffic.item2',
          priority: 'important',
          codeExample: `# Retry policy
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: backend-vs
spec:
  hosts:
    - backend
  http:
    - route:
        - destination:
            host: backend
      retries:
        attempts: 3
        perTryTimeout: 2s
        retryOn: 5xx,reset,connect-failure`,
        },
        {
          id: 'mesh-7',
          titleKey: 'bestPractices.mesh.traffic.item3',
          priority: 'recommended',
          codeExample: `# Traffic splitting for canary
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: myapp-canary
spec:
  hosts:
    - myapp
  http:
    - route:
        - destination:
            host: myapp
            subset: stable
          weight: 90
        - destination:
            host: myapp
            subset: canary
          weight: 10`,
        },
        {
          id: 'mesh-8',
          titleKey: 'bestPractices.mesh.traffic.item4',
          priority: 'recommended',
          codeExample: `# Request timeout
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: backend-timeout
spec:
  hosts:
    - backend
  http:
    - route:
        - destination:
            host: backend
      timeout: 10s`,
        },
      ],
    },
    {
      id: 'mesh-observability',
      titleKey: 'bestPractices.mesh.observability.title',
      descKey: 'bestPractices.mesh.observability.desc',
      iconPath: COMMON_ICON_PATHS.CHART_BAR,
      ...COLOR_SCHEMES.OBSERVABILITY,
      items: [
        {
          id: 'mesh-9',
          titleKey: 'bestPractices.mesh.observability.item1',
          priority: 'important',
          codeExample: `# Enable distributed tracing with Jaeger
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
  meshConfig:
    enableTracing: true
    defaultConfig:
      tracing:
        sampling: 100.0
        zipkin:
          address: jaeger-collector.istio-system:9411`,
        },
        {
          id: 'mesh-10',
          titleKey: 'bestPractices.mesh.observability.item2',
          priority: 'important',
        },
        {
          id: 'mesh-11',
          titleKey: 'bestPractices.mesh.observability.item3',
          priority: 'recommended',
          codeExample: `# Kiali for service mesh visualization
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/kiali.yaml

# Access Kiali dashboard
istioctl dashboard kiali`,
        },
        {
          id: 'mesh-12',
          titleKey: 'bestPractices.mesh.observability.item4',
          priority: 'recommended',
        },
      ],
    },
  ],
};

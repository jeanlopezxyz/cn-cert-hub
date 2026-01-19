/**
 * ES - BestPractices translations
 *
 * This file contains translations for: bestPractices
 *
 * To contribute translations:
 * 1. Find the key you want to translate
 * 2. Update the value while keeping the key unchanged
 * 3. Run 'npm run validate' to check for errors
 */

export const bestPractices = {
  'bestPractices.priority.critical': 'Crítico',
  'bestPractices.priority.important': 'Importante',
  'bestPractices.priority.recommended': 'Recomendado',
  'bestPractices.ui.copy': 'Copiar',
  'bestPractices.ui.showCode': 'Ver código',
  'bestPractices.ui.hideCode': 'Ocultar código',
  'bestPractices.ui.whyMatters': '¿Por qué importa?',
  'bestPractices.ui.hideDetails': 'Ocultar detalles',
  'bestPractices.ui.whyMattersLabel': 'Por qué importa',
  'bestPractices.ui.commonMistakeLabel': 'Error común',
  'bestPractices.ui.selectCategory': 'Seleccionar categoría',
  'bestPractices.ui.categories': 'Categorías',
  'bestPractices.ui.selectSubcategory': 'Seleccionar subcategoría',
  'bestPractices.ui.subcategories': 'Subcategorías',
  'bestPractices.category.applications': 'Aplicaciones',
  'bestPractices.category.cicd': 'CI/CD',
  'bestPractices.category.infrastructure': 'Infraestructura',
  'bestPractices.category.networking': 'Redes',
  'bestPractices.category.observability': 'Observabilidad',
  'bestPractices.category.security': 'Seguridad',
  'bestPractices.compliance.audit.desc': 'Rastrea y monitorea todas las actividades del cluster',
  'bestPractices.compliance.audit.item1':
    'Habilita audit logging de Kubernetes con niveles de política apropiados',
  'bestPractices.compliance.audit.item2':
    'Envía logs de auditoría a SIEM externo para análisis y retención',
  'bestPractices.compliance.audit.item3':
    'Usa Falco para monitoreo de seguridad en runtime y detección de amenazas',
  'bestPractices.compliance.audit.item4':
    'Configura alertas para actividades sospechosas (acceso shell, escalación de privilegios)',
  'bestPractices.compliance.audit.title': 'Audit Logging',
  'bestPractices.compliance.policy.desc':
    'Aplica políticas automáticamente con admission controllers',
  'bestPractices.compliance.policy.item1':
    'Usa Kyverno para enforcement de políticas nativo de Kubernetes',
  'bestPractices.compliance.policy.item2':
    'Implementa OPA Gatekeeper para políticas basadas en Rego',
  'bestPractices.compliance.policy.item3':
    'Bloquea configuraciones inseguras en tiempo de admisión',
  'bestPractices.compliance.policy.item4':
    'Usa políticas de mutación para agregar defaults de seguridad',
  'bestPractices.compliance.policy.title': 'Policy as Code',
  'bestPractices.compliance.standards.desc':
    'Cumple con benchmarks de seguridad y regulaciones de la industria',
  'bestPractices.compliance.standards.item1':
    'Ejecuta CIS Kubernetes Benchmark con kube-bench regularmente',
  'bestPractices.compliance.standards.item2':
    'Sigue las guías de hardening de NSA/CISA para Kubernetes',
  'bestPractices.compliance.standards.item3':
    'Mapea controles de Kubernetes a requisitos PCI-DSS, SOC2 o HIPAA',
  'bestPractices.compliance.standards.item4':
    'Documenta controles de seguridad y mantén evidencia para auditorías',
  'bestPractices.compliance.standards.title': 'Estándares de Compliance',
  'bestPractices.containers.images.desc':
    'Mejores prácticas para construir y gestionar imágenes de contenedores',
  'bestPractices.containers.images.item1':
    'Usa builds Docker multi-stage para minimizar el tamaño de la imagen',
  'bestPractices.containers.images.item2':
    'Siempre usa tags específicos, nunca uses :latest en producción',
  'bestPractices.containers.images.item3':
    'Escanea imágenes por vulnerabilidades antes del despliegue (Trivy, Snyk)',
  'bestPractices.containers.images.item4':
    'Usa imágenes base distroless o mínimas cuando sea posible',
  'bestPractices.containers.images.item5':
    'Firma y verifica imágenes de contenedores con Cosign o Notary',
  'bestPractices.containers.images.title': 'Imágenes de Contenedor',
  'bestPractices.containers.runtime.desc': 'Configuración y optimización del runtime',
  'bestPractices.containers.runtime.item1': 'Nunca ejecutes contenedores como usuario root',
  'bestPractices.containers.runtime.item2':
    'Usa sistemas de archivos raíz de solo lectura cuando sea posible',
  'bestPractices.containers.runtime.item3':
    'Elimina todas las capabilities de Linux y agrega solo las requeridas',
  'bestPractices.containers.runtime.item4': 'Configura perfiles seccomp y AppArmor apropiados',
  'bestPractices.containers.runtime.title': 'Runtime de Contenedores',
  'bestPractices.cost.cleanup.desc': 'Elimina recursos no utilizados y huérfanos',
  'bestPractices.cost.cleanup.item1': 'Limpia PersistentVolumeClaims huérfanos regularmente',
  'bestPractices.cost.cleanup.item2': 'Establece TTL para Jobs y CronJobs completados',
  'bestPractices.cost.cleanup.item3':
    'Limita el historial de revisiones de ReplicaSet para reducir almacenamiento',
  'bestPractices.cost.cleanup.item4': 'Usa herramientas como Kubecost u OpenCost para visibilidad',
  'bestPractices.cost.cleanup.title': 'Limpieza de Recursos',
  'bestPractices.cost.resources.desc': 'Optimiza la asignación de recursos y reduce el desperdicio',
  'bestPractices.cost.resources.item1': 'Dimensiona los recursos basándote en métricas de uso real',
  'bestPractices.cost.resources.item2':
    'Usa Vertical Pod Autoscaler (VPA) para recomendaciones de dimensionamiento',
  'bestPractices.cost.resources.item3':
    'Implementa LimitRanges para establecer restricciones de recursos por defecto',
  'bestPractices.cost.resources.item4':
    'Audita regularmente e identifica cargas de trabajo sobredimensionadas',
  'bestPractices.cost.resources.title': 'Eficiencia de Recursos',
  'bestPractices.cost.scaling.desc': 'Escala eficientemente para coincidir con la demanda',
  'bestPractices.cost.scaling.item1':
    'Configura Cluster Autoscaler para reducir nodos infrautilizados',
  'bestPractices.cost.scaling.item2':
    'Usa instancias spot/preemptible para cargas tolerantes a fallos',
  'bestPractices.cost.scaling.item3': 'Escala a cero durante horas de baja actividad con KEDA',
  'bestPractices.cost.scaling.item4':
    'Usa node pools con diferentes tipos de instancia para diferentes cargas',
  'bestPractices.cost.scaling.title': 'Estrategias de Escalado',
  'bestPractices.cost.serverless.desc': 'Escala a cero y autoescalado basado en eventos',
  'bestPractices.cost.serverless.item1':
    'Usa KEDA para escalar workloads a cero cuando están inactivos',
  'bestPractices.cost.serverless.item2':
    'Configura triggers de KEDA basados en longitud de cola o métricas',
  'bestPractices.cost.serverless.item3':
    'Usa Knative Serving para workloads serverless de contenedores',
  'bestPractices.cost.serverless.item4':
    'Programa el escalado con cron triggers de KEDA para cargas predecibles',
  'bestPractices.cost.serverless.item5': 'Considera OpenFaaS para workloads function-as-a-service',
  'bestPractices.cost.serverless.mistake5':
    'No considerar la latencia de cold start. Serverless funciona genial para jobs async pero puede agregar latencia para APIs de usuario.',
  'bestPractices.cost.serverless.title': 'Serverless y KEDA',
  'bestPractices.cost.serverless.why1':
    'Escalar a cero elimina costos de workloads inactivos. Un servicio sin tráfico no cuesta nada en lugar de ejecutarse 24/7.',
  'bestPractices.cost.serverless.why3':
    'Knative maneja cold starts, división de tráfico y escalado automático - solo pagas por el tiempo real de procesamiento.',
  'bestPractices.dev.applications.desc':
    'Mejores prácticas para desarrollo de aplicaciones cloud-native',
  'bestPractices.dev.applications.item1':
    'Implementa health checks (liveness, readiness, startup probes)',
  'bestPractices.dev.applications.item2': 'Maneja el cierre graceful con señales SIGTERM',
  'bestPractices.dev.applications.item3': 'Sigue la metodología de las 12 factores',
  'bestPractices.dev.applications.item4': 'Usa variables de entorno para configuración',
  'bestPractices.dev.applications.item5': 'Diseña aplicaciones sin estado cuando sea posible',
  'bestPractices.dev.applications.title': 'Diseño de Aplicaciones',
  'bestPractices.dev.configuration.desc': 'Gestión de configuración de aplicaciones en Kubernetes',
  'bestPractices.dev.configuration.item1': 'Usa ConfigMaps para configuración no sensible',
  'bestPractices.dev.configuration.item2': 'Almacena datos sensibles en Secrets (encriptados)',
  'bestPractices.dev.configuration.item3': 'Usa namespaces para organizar y aislar aplicaciones',
  'bestPractices.dev.configuration.item4':
    'Aplica labels y annotations consistentes para organización',
  'bestPractices.dev.configuration.title': 'Gestión de Configuración',
  'bestPractices.dev.resources.desc': 'Asignación eficiente de recursos y escalado',
  'bestPractices.dev.resources.item1': 'Siempre define requests y limits de recursos',
  'bestPractices.dev.resources.item2':
    'Usa Horizontal Pod Autoscaler (HPA) para escalado automático',
  'bestPractices.dev.resources.item3': 'Implementa Resource Quotas y Limit Ranges por namespace',
  'bestPractices.dev.resources.item4': 'Usa Pod Disruption Budgets para alta disponibilidad',
  'bestPractices.dev.resources.title': 'Gestión de Recursos',
  'bestPractices.devsecops.admission.desc': 'Aplica políticas de seguridad en tiempo de despliegue',
  'bestPractices.devsecops.admission.item1':
    'Aplica Pod Security Standards (perfil restricted para producción)',
  'bestPractices.devsecops.admission.item2':
    'Bloquea imágenes con tag latest o de registros no confiables',
  'bestPractices.devsecops.admission.item3':
    'Requiere límites de recursos en todos los contenedores',
  'bestPractices.devsecops.admission.item4':
    'Usa modo audit primero para identificar violaciones antes de aplicar',
  'bestPractices.devsecops.admission.title': 'Control de Admisión',
  'bestPractices.devsecops.scanning.desc':
    'Detecta vulnerabilidades y amenazas en tu cluster en ejecución',
  'bestPractices.devsecops.scanning.item1':
    'Escanea las imágenes de contenedores en ejecución con Trivy',
  'bestPractices.devsecops.scanning.item2':
    'Configura reglas de Falco para detección de amenazas en runtime',
  'bestPractices.devsecops.scanning.item3':
    'Audita la seguridad del cluster con kube-bench (CIS Benchmark)',
  'bestPractices.devsecops.scanning.item4':
    'Valida manifiestos con kubeconform y kube-score antes de aplicar',
  'bestPractices.devsecops.scanning.title': 'Seguridad en Runtime y Escaneo',
  'bestPractices.devsecops.supplychain.desc':
    'Controla qué imágenes de contenedores pueden ejecutarse en tu cluster',
  'bestPractices.devsecops.supplychain.item1':
    'Verifica firmas de imágenes en tiempo de admisión con Kyverno',
  'bestPractices.devsecops.supplychain.item2':
    'Restringe despliegues solo a registros de contenedores aprobados',
  'bestPractices.devsecops.supplychain.item3':
    'Requiere digests de imágenes en lugar de tags mutables',
  'bestPractices.devsecops.supplychain.item4':
    'Usa Sigstore Policy Controller para verificación de firmas',
  'bestPractices.devsecops.supplychain.title': 'Seguridad de Imágenes en Kubernetes',
  'bestPractices.gitops.delivery.desc': 'Mejores prácticas de pipelines CI/CD',
  'bestPractices.gitops.delivery.item1':
    'Automatiza builds de imágenes y escaneo de vulnerabilidades',
  'bestPractices.gitops.delivery.item2':
    'Usa estrategias de entrega progresiva (canary, blue-green)',
  'bestPractices.gitops.delivery.item3': 'Implementa rollbacks automáticos en caso de fallo',
  'bestPractices.gitops.delivery.item4': 'Usa Helm o Kustomize para gestión de configuración',
  'bestPractices.gitops.delivery.title': 'Entrega Continua',
  'bestPractices.gitops.workflow.desc': 'Entrega de infraestructura y aplicaciones con Git',
  'bestPractices.gitops.workflow.item1': 'Usa Git como la única fuente de verdad',
  'bestPractices.gitops.workflow.item2': 'Implementa ArgoCD o Flux para entrega continua',
  'bestPractices.gitops.workflow.item3': 'Usa modelo de despliegue basado en pull',
  'bestPractices.gitops.workflow.item4': 'Separa repositorios de aplicación e infraestructura',
  'bestPractices.gitops.workflow.title': 'Flujo de Trabajo GitOps',
  'bestPractices.ha.redundancy.desc':
    'Asegura que las cargas de trabajo sobrevivan a fallos de infraestructura',
  'bestPractices.ha.redundancy.item1':
    'Ejecuta al menos 3 réplicas para cargas de trabajo de producción',
  'bestPractices.ha.redundancy.item2':
    'Usa pod anti-affinity para distribuir entre zonas de disponibilidad',
  'bestPractices.ha.redundancy.item3':
    'Configura topology spread constraints para distribución uniforme',
  'bestPractices.ha.redundancy.item4':
    'Usa node affinity para programar en pools de nodos apropiados',
  'bestPractices.ha.redundancy.item5': 'Asigna priority classes a cargas de trabajo críticas',
  'bestPractices.ha.redundancy.title': 'Redundancia y Distribución',
  'bestPractices.ha.resilience.desc': 'Maneja fallos de forma elegante y recupera rápidamente',
  'bestPractices.ha.resilience.item1':
    'Configura Pod Disruption Budgets para todos los servicios críticos',
  'bestPractices.ha.resilience.item2': 'Implementa apagado graceful con hooks preStop',
  'bestPractices.ha.resilience.item3': 'Establece timeouts y umbrales apropiados para probes',
  'bestPractices.ha.resilience.item4':
    'Prueba escenarios de fallo regularmente (chaos engineering)',
  'bestPractices.ha.resilience.title': 'Resiliencia y Recuperación',
  'bestPractices.mesh.observability.desc':
    'Visibilidad profunda del comportamiento del service mesh',
  'bestPractices.mesh.observability.item1': 'Habilita trazado distribuido con Jaeger o Zipkin',
  'bestPractices.mesh.observability.item2': 'Monitorea métricas del mesh con Prometheus y Grafana',
  'bestPractices.mesh.observability.item3':
    'Usa Kiali para visualización de topología del service mesh',
  'bestPractices.mesh.observability.item4':
    'Establece tasas de muestreo apropiadas para trazado en producción',
  'bestPractices.mesh.observability.title': 'Observabilidad del Mesh',
  'bestPractices.mesh.security.desc': 'Red de confianza cero con service mesh',
  'bestPractices.mesh.security.item1':
    'Habilita mTLS estricto para toda comunicación servicio a servicio',
  'bestPractices.mesh.security.item2':
    'Define AuthorizationPolicies para control de acceso granular',
  'bestPractices.mesh.security.item3': 'Rota los certificados del service mesh regularmente',
  'bestPractices.mesh.security.item4':
    'Usa RequestAuthentication para validación JWT en el ingress',
  'bestPractices.mesh.security.title': 'Seguridad del Mesh',
  'bestPractices.mesh.traffic.desc': 'Controla y optimiza el tráfico de servicios',
  'bestPractices.mesh.traffic.item1': 'Implementa circuit breakers para prevenir fallos en cascada',
  'bestPractices.mesh.traffic.item2': 'Configura políticas de reintentos con backoff exponencial',
  'bestPractices.mesh.traffic.item3': 'Usa traffic splitting para despliegues canary',
  'bestPractices.mesh.traffic.item4':
    'Establece timeouts de request apropiados para todos los servicios',
  'bestPractices.mesh.traffic.title': 'Gestión de Tráfico',
  'bestPractices.networking.ingress.desc': 'Gestionando tráfico externo con APIs modernas',
  'bestPractices.networking.ingress.item1':
    'Usa Gateway API para proyectos nuevos (moderno, expresivo, multi-tenant)',
  'bestPractices.networking.ingress.item2': 'Ingress API sigue siendo válido para casos simples',
  'bestPractices.networking.ingress.item3': 'Aplica TLS para todas las comunicaciones externas',
  'bestPractices.networking.ingress.item4': 'Implementa rate limiting y políticas de tráfico',
  'bestPractices.networking.ingress.item5':
    'Usa implementaciones de Gateway según tus necesidades (Cilium, Istio, NGINX)',
  'bestPractices.networking.ingress.title': 'Gateway API e Ingress',
  'bestPractices.networking.policies.desc': 'Segmentación de red y control de acceso',
  'bestPractices.networking.policies.item1':
    'Implementa políticas de denegación por defecto para todos los namespaces',
  'bestPractices.networking.policies.item2':
    'Usa Network Policies para restringir comunicación pod-a-pod',
  'bestPractices.networking.policies.item3': 'Segmenta cargas de trabajo por nivel de sensibilidad',
  'bestPractices.networking.policies.item4':
    'Usa plugins CNI que soporten Network Policies (Cilium, Calico)',
  'bestPractices.networking.policies.title': 'Network Policies',
  'bestPractices.networking.services.desc': 'Descubrimiento de servicios y comunicación interna',
  'bestPractices.networking.services.item1': 'Usa Services para endpoints de red estables',
  'bestPractices.networking.services.item2':
    'Elige tipos de servicio apropiados (ClusterIP, NodePort, LoadBalancer)',
  'bestPractices.networking.services.item3': 'Usa headless services para StatefulSets',
  'bestPractices.networking.services.item4': 'Implementa convenciones de nombres DNS apropiadas',
  'bestPractices.networking.services.title': 'Networking de Servicios',
  'bestPractices.observability.external.desc': 'Centraliza métricas y logs fuera del cluster',
  'bestPractices.observability.external.item1':
    'Usa Thanos o Cortex para almacenamiento a largo plazo de métricas Prometheus',
  'bestPractices.observability.external.item2':
    'Configura Loki/Elasticsearch con almacenamiento de objetos externo (S3, GCS, Azure Blob)',
  'bestPractices.observability.external.item3':
    'Mantén solo datos a corto plazo (horas/días) en el cluster para consultas en tiempo real',
  'bestPractices.observability.external.item4':
    'Usa remote_write de Prometheus para enviar métricas a almacenamiento externo',
  'bestPractices.observability.external.item5':
    'Implementa políticas de ciclo de vida para eliminación y tiering automático de datos',
  'bestPractices.observability.external.mistake':
    'Almacenar meses o años de métricas/logs dentro del cluster, causando agotamiento de almacenamiento y rendimiento degradado durante consultas.',
  'bestPractices.observability.external.title': 'Almacenamiento Externo',
  'bestPractices.observability.external.why':
    'El cluster de Kubernetes no debe usarse para almacenamiento a largo plazo de datos de observabilidad. Las métricas y logs consumen almacenamiento significativo y pueden impactar el rendimiento del cluster. El almacenamiento externo proporciona mejor escalabilidad, durabilidad y permite mantenimiento del cluster sin pérdida de datos.',
  'bestPractices.observability.logging.desc': 'Logging centralizado y análisis',
  'bestPractices.observability.logging.item1':
    'Centraliza logs con Loki, ELK, o herramientas similares',
  'bestPractices.observability.logging.item2': 'Usa formatos de logging estructurado (JSON)',
  'bestPractices.observability.logging.item3':
    'Incluye IDs de correlación para trazabilidad de requests',
  'bestPractices.observability.logging.item4':
    'Implementa políticas de retención y rotación de logs',
  'bestPractices.observability.logging.title': 'Logging',
  'bestPractices.observability.metrics.desc': 'Recolección y análisis de métricas',
  'bestPractices.observability.metrics.item1':
    'Usa Prometheus para recolección y almacenamiento de métricas',
  'bestPractices.observability.metrics.item2': 'Crea dashboards significativos con Grafana',
  'bestPractices.observability.metrics.item3': 'Configura alertas para métricas críticas y SLOs',
  'bestPractices.observability.metrics.item4': 'Monitorea métricas a nivel de cluster y aplicación',
  'bestPractices.observability.metrics.title': 'Métricas y Monitoreo',
  'bestPractices.observability.tracing.desc': 'Trazabilidad end-to-end de requests',
  'bestPractices.observability.tracing.item1':
    'Implementa OpenTelemetry para trazabilidad distribuida',
  'bestPractices.observability.tracing.item2': 'Usa Jaeger o Tempo para visualización de trazas',
  'bestPractices.observability.tracing.item3': 'Propaga contexto de trazas entre servicios',
  'bestPractices.observability.tracing.item4': 'Muestrea trazas apropiadamente para producción',
  'bestPractices.observability.tracing.title': 'Trazabilidad Distribuida',
  'bestPractices.ops.auth.desc':
    'Asegura el acceso al cluster con mecanismos apropiados de autenticación y autorización',
  'bestPractices.ops.auth.item1':
    'Configura autenticación OIDC para el API server con proveedores de identidad externos',
  'bestPractices.ops.auth.item2':
    'Usa tokens de ServiceAccount con expiración en lugar de tokens estáticos',
  'bestPractices.ops.auth.item3':
    'Habilita audit logging para rastrear eventos de autenticación y autorización',
  'bestPractices.ops.auth.item4':
    'Deshabilita autenticación anónima y fuerza el modo de autorización RBAC',
  'bestPractices.ops.auth.item5':
    'Usa kubeconfig de corta duración con plugins exec OIDC para desarrolladores',
  'bestPractices.ops.auth.title': 'Autenticación y Autorización',
  'bestPractices.ops.backup.desc':
    'Estrategias de recuperación ante desastres y protección de datos',
  'bestPractices.ops.backup.item1':
    'Crea snapshots de etcd regularmente y almacénalos externamente',
  'bestPractices.ops.backup.item2': 'Usa Velero para backups a nivel de cluster y aplicación',
  'bestPractices.ops.backup.item3':
    'Automatiza backups con jobs programados y políticas de retención',
  'bestPractices.ops.backup.item4':
    'Prueba regularmente los procedimientos de restauración en ambientes no productivos',
  'bestPractices.ops.backup.item5':
    'Sigue la regla 3-2-1: 3 copias, 2 medios diferentes, 1 fuera del sitio',
  'bestPractices.ops.backup.title': 'Backup y Recuperación',
  'bestPractices.ops.maintenance.desc': 'Mantenimiento regular del cluster y operaciones',
  'bestPractices.ops.maintenance.item1':
    'Respalda etcd regularmente y verifica que la restauración funcione',
  'bestPractices.ops.maintenance.item2': 'Monitorea y renueva certificados antes de que expiren',
  'bestPractices.ops.maintenance.item3': 'Compacta y desfragmenta etcd periódicamente',
  'bestPractices.ops.maintenance.item4':
    'Documenta runbooks para procedimientos operativos comunes',
  'bestPractices.ops.maintenance.title': 'Tareas de Mantenimiento',
  'bestPractices.ops.troubleshooting.desc': 'Depura y diagnostica problemas del cluster',
  'bestPractices.ops.troubleshooting.item1':
    'Usa contenedores debug efímeros para troubleshooting en vivo',
  'bestPractices.ops.troubleshooting.item2': 'Revisa eventos del cluster para patrones de errores',
  'bestPractices.ops.troubleshooting.item3': 'Usa kubectl logs con flags apropiados para debugging',
  'bestPractices.ops.troubleshooting.item4': 'Monitorea la utilización de recursos de nodos y pods',
  'bestPractices.ops.troubleshooting.title': 'Resolución de Problemas',
  'bestPractices.ops.upgrades.desc': 'Actualizaciones de Kubernetes seguras y confiables',
  'bestPractices.ops.upgrades.item1':
    'Sigue la ruta de actualización secuencial (una versión menor a la vez)',
  'bestPractices.ops.upgrades.item2': 'Drena los nodos correctamente antes del mantenimiento',
  'bestPractices.ops.upgrades.item3': 'Prueba las actualizaciones en entorno de staging primero',
  'bestPractices.ops.upgrades.item4':
    'Verifica deprecaciones de API antes de actualizar con kubent',
  'bestPractices.ops.upgrades.title': 'Actualizaciones del Cluster',
  'bestPractices.security.cluster.desc': 'Asegurando la infraestructura del cluster Kubernetes',
  'bestPractices.security.cluster.item1': 'Habilita RBAC y sigue el principio de mínimo privilegio',
  'bestPractices.security.cluster.item2':
    'Actualiza regularmente Kubernetes y todos los componentes',
  'bestPractices.security.cluster.item3':
    'Habilita registro de auditoría para monitoreo de seguridad',
  'bestPractices.security.cluster.item4': 'Asegura el API server con autenticación apropiada',
  'bestPractices.security.cluster.item5': 'Usa admission controllers (OPA Gatekeeper, Kyverno)',
  'bestPractices.security.cluster.title': 'Seguridad del Cluster',
  'bestPractices.security.secrets.desc': 'Protegiendo datos sensibles',
  'bestPractices.security.secrets.item1':
    'Encripta secrets en reposo con proveedores de encriptación',
  'bestPractices.security.secrets.item2':
    'Usa gestores de secrets externos (Vault, AWS Secrets Manager)',
  'bestPractices.security.secrets.item3': 'Rota secrets regularmente y automáticamente',
  'bestPractices.security.secrets.item4':
    'Nunca almacenes secrets en imágenes de contenedor o código',
  'bestPractices.security.secrets.title': 'Gestión de Secrets',
  'bestPractices.security.tls.desc': 'Gestión de certificados y comunicaciones cifradas',
  'bestPractices.security.tls.item1':
    'Usa cert-manager para provisión y renovación automática de certificados',
  'bestPractices.security.tls.item2':
    'Monitorea y rota certificados del cluster antes de que expiren (kubeadm certs)',
  'bestPractices.security.tls.item3':
    'Configura certificados TLS para todos los servicios expuestos',
  'bestPractices.security.tls.item4':
    'Habilita mTLS entre servicios usando service mesh (Istio, Linkerd)',
  'bestPractices.security.tls.item5':
    'Usa certificados de corta duración y automatiza la renovación',
  'bestPractices.security.tls.title': 'TLS y Certificados',
  'bestPractices.security.workloads.desc': 'Asegurando pods y deployments',
  'bestPractices.security.workloads.item1': 'Usa Pod Security Standards (Restricted/Baseline)',
  'bestPractices.security.workloads.item2': 'Ejecuta contenedores como usuarios no-root',
  'bestPractices.security.workloads.item3': 'Usa sistemas de archivos raíz de solo lectura',
  'bestPractices.security.workloads.item4':
    'Limita capabilities del contenedor al mínimo requerido',
  'bestPractices.security.workloads.item5': 'Usa service accounts con permisos mínimos',
  'bestPractices.security.workloads.title': 'Seguridad de Cargas de Trabajo',
  'bestPractices.stateful.operators.desc':
    'Usa operators de Kubernetes para bases de datos en producción',
  'bestPractices.stateful.operators.item1':
    'Usa CloudNativePG para PostgreSQL con backups automáticos y HA',
  'bestPractices.stateful.operators.item2':
    'Despliega MongoDB con el Community Operator para replica sets',
  'bestPractices.stateful.operators.item3':
    'Usa Redis Operator para Redis de alta disponibilidad con Sentinel',
  'bestPractices.stateful.operators.item4':
    'Prefiere operators graduados de CNCF o ampliamente adoptados',
  'bestPractices.stateful.operators.title': 'Operators de Bases de Datos',
  'bestPractices.stateful.replication.desc': 'Asegura durabilidad y disponibilidad de datos',
  'bestPractices.stateful.replication.item1': 'Habilita replicación síncrona para datos críticos',
  'bestPractices.stateful.replication.item2':
    'Usa storage con replicación integrada (Longhorn, Rook-Ceph)',
  'bestPractices.stateful.replication.item3':
    'Implementa VolumeSnapshots para recuperación point-in-time',
  'bestPractices.stateful.replication.item4':
    'Prueba escenarios de failover regularmente en ambientes no productivos',
  'bestPractices.stateful.replication.title': 'Replicación de Datos',
  'bestPractices.stateful.sets.desc':
    'Configura StatefulSets correctamente para aplicaciones stateful',
  'bestPractices.stateful.sets.item1': 'Usa gestión ordenada de pods y templates de volume claims',
  'bestPractices.stateful.sets.item2':
    'Crea servicios headless para nombres DNS estables (pod-0.service)',
  'bestPractices.stateful.sets.item3':
    'Configura PodDisruptionBudget para mantener quórum durante updates',
  'bestPractices.stateful.sets.item4':
    'Usa pod anti-affinity para distribuir réplicas entre nodos y zonas',
  'bestPractices.stateful.sets.title': 'Mejores Prácticas de StatefulSet',
  'bestPractices.storage.backup.desc': 'Protección de datos y estrategias de recuperación',
  'bestPractices.storage.backup.item1':
    'Respalda etcd regularmente y prueba procedimientos de restauración',
  'bestPractices.storage.backup.item2': 'Usa Velero para backups de cluster y aplicación',
  'bestPractices.storage.backup.item3': 'Almacena backups en múltiples ubicaciones (regla 3-2-1)',
  'bestPractices.storage.backup.item4': 'Define y documenta objetivos de RPO/RTO',
  'bestPractices.storage.backup.title': 'Backup y Recuperación ante Desastres',
  'bestPractices.storage.volumes.desc': 'Gestionando datos persistentes en Kubernetes',
  'bestPractices.storage.volumes.item1': 'Usa StorageClasses para aprovisionamiento dinámico',
  'bestPractices.storage.volumes.item2': 'Elige modos de acceso apropiados (RWO, RWX, ROX)',
  'bestPractices.storage.volumes.item3': 'Usa snapshots de volumen para recuperación point-in-time',
  'bestPractices.storage.volumes.item4':
    'Implementa políticas de expansión de volumen cuando sea necesario',
  'bestPractices.storage.volumes.title': 'Almacenamiento Persistente',
  'bestPractices.subtitle': 'Buenas prácticas Cloud Native organizadas por áreas',
  'bestPractices.tab.accesscontrol': 'Control de Acceso',
  'bestPractices.tab.compliance': 'Compliance',
  'bestPractices.tab.containerization': 'Contenedores',
  'bestPractices.tab.costoptimization': 'Optimización de Costos',
  'bestPractices.tab.development': 'Desarrollo',
  'bestPractices.tab.devsecops': 'DevSecOps',
  'bestPractices.tab.gitops': 'GitOps & CI/CD',
  'bestPractices.tab.highavailability': 'Alta Disponibilidad',
  'bestPractices.tab.multitenancy': 'Multi-tenancy',
  'bestPractices.tab.networkpolicies': 'Políticas de Red',
  'bestPractices.tab.observability': 'Observabilidad',
  'bestPractices.tab.operations': 'Operaciones del Cluster',
  'bestPractices.tab.servicemesh': 'Service Mesh',
  'bestPractices.tab.stateful': 'Cargas Stateful',
  'bestPractices.tab.storage': 'Almacenamiento',
  'bestPractices.tenant.isolation.desc':
    'Aislamiento seguro entre tenants usando namespaces y políticas',
  'bestPractices.tenant.isolation.item1':
    'Usa namespaces dedicados por tenant con etiquetado apropiado',
  'bestPractices.tenant.isolation.item2':
    'Configura ResourceQuotas para limitar el consumo de recursos por tenant',
  'bestPractices.tenant.isolation.item3':
    'Aplica LimitRanges para forzar límites por defecto y máximos',
  'bestPractices.tenant.isolation.item4':
    'Implementa NetworkPolicies para prevenir comunicación entre tenants',
  'bestPractices.tenant.isolation.title': 'Aislamiento de Tenants',
  'bestPractices.title': 'Buenas Prácticas',
} as const;

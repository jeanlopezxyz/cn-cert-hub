/**
 * PT - BestPractices translations
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
  'bestPractices.ui.whyMatters': 'Por que importa?',
  'bestPractices.ui.hideDetails': 'Ocultar detalhes',
  'bestPractices.ui.whyMattersLabel': 'Por que importa',
  'bestPractices.ui.commonMistakeLabel': 'Erro comum',
  'bestPractices.ui.selectCategory': 'Selecionar categoria',
  'bestPractices.ui.categories': 'Categorias',
  'bestPractices.ui.selectSubcategory': 'Selecionar subcategoria',
  'bestPractices.ui.subcategories': 'Subcategorias',
  'bestPractices.category.applications': 'Aplicações',
  'bestPractices.category.cicd': 'CI/CD',
  'bestPractices.category.infrastructure': 'Infraestrutura',
  'bestPractices.category.networking': 'Redes',
  'bestPractices.category.observability': 'Observabilidade',
  'bestPractices.category.security': 'Segurança',
  'bestPractices.compliance.audit.desc': 'Rastreie e monitore todas as atividades do cluster',
  'bestPractices.compliance.audit.item1':
    'Habilite audit logging do Kubernetes com níveis de política apropriados',
  'bestPractices.compliance.audit.item2':
    'Envie logs de auditoria para SIEM externo para análise e retenção',
  'bestPractices.compliance.audit.item3':
    'Use Falco para monitoramento de segurança em runtime e detecção de ameaças',
  'bestPractices.compliance.audit.item4':
    'Configure alertas para atividades suspeitas (acesso shell, escalação de privilégios)',
  'bestPractices.compliance.audit.title': 'Audit Logging',
  'bestPractices.compliance.policy.desc':
    'Aplique políticas automaticamente com admission controllers',
  'bestPractices.compliance.policy.item1':
    'Use Kyverno para enforcement de políticas nativo do Kubernetes',
  'bestPractices.compliance.policy.item2':
    'Implemente OPA Gatekeeper para políticas baseadas em Rego',
  'bestPractices.compliance.policy.item3':
    'Bloqueie configurações inseguras no momento da admissão',
  'bestPractices.compliance.policy.item4':
    'Use políticas de mutação para adicionar defaults de segurança',
  'bestPractices.compliance.policy.title': 'Policy as Code',
  'bestPractices.compliance.standards.desc':
    'Cumpra benchmarks de segurança e regulações da indústria',
  'bestPractices.compliance.standards.item1':
    'Execute CIS Kubernetes Benchmark com kube-bench regularmente',
  'bestPractices.compliance.standards.item2':
    'Siga as diretrizes de hardening NSA/CISA para Kubernetes',
  'bestPractices.compliance.standards.item3':
    'Mapeie controles do Kubernetes para requisitos PCI-DSS, SOC2 ou HIPAA',
  'bestPractices.compliance.standards.item4':
    'Documente controles de segurança e mantenha evidências para auditorias',
  'bestPractices.compliance.standards.title': 'Padrões de Compliance',
  'bestPractices.containers.images.desc':
    'Melhores práticas para construir e gerenciar imagens de contêineres',
  'bestPractices.containers.images.item1':
    'Use builds Docker multi-stage para minimizar o tamanho da imagem',
  'bestPractices.containers.images.item2':
    'Sempre use tags específicas, nunca use :latest em produção',
  'bestPractices.containers.images.item3':
    'Escaneie imagens por vulnerabilidades antes do deploy (Trivy, Snyk)',
  'bestPractices.containers.images.item4': 'Use imagens base distroless ou mínimas quando possível',
  'bestPractices.containers.images.item5':
    'Assine e verifique imagens de contêineres com Cosign ou Notary',
  'bestPractices.containers.images.title': 'Imagens de Contêiner',
  'bestPractices.containers.runtime.desc': 'Configuração e otimização do runtime',
  'bestPractices.containers.runtime.item1': 'Nunca execute contêineres como usuário root',
  'bestPractices.containers.runtime.item2':
    'Use sistemas de arquivos raiz somente leitura quando possível',
  'bestPractices.containers.runtime.item3':
    'Remova todas as capabilities do Linux e adicione apenas as necessárias',
  'bestPractices.containers.runtime.item4': 'Configure perfis seccomp e AppArmor apropriados',
  'bestPractices.containers.runtime.title': 'Runtime de Contêineres',
  'bestPractices.cost.cleanup.desc': 'Elimine recursos não utilizados e órfãos',
  'bestPractices.cost.cleanup.item1': 'Limpe PersistentVolumeClaims órfãos regularmente',
  'bestPractices.cost.cleanup.item2': 'Defina TTL para Jobs e CronJobs concluídos',
  'bestPractices.cost.cleanup.item3':
    'Limite o histórico de revisões de ReplicaSet para reduzir armazenamento',
  'bestPractices.cost.cleanup.item4': 'Use ferramentas como Kubecost ou OpenCost para visibilidade',
  'bestPractices.cost.cleanup.title': 'Limpeza de Recursos',
  'bestPractices.cost.resources.desc': 'Otimize a alocação de recursos e reduza o desperdício',
  'bestPractices.cost.resources.item1': 'Dimensione recursos com base em métricas de uso real',
  'bestPractices.cost.resources.item2':
    'Use Vertical Pod Autoscaler (VPA) para recomendações de dimensionamento',
  'bestPractices.cost.resources.item3':
    'Implemente LimitRanges para definir restrições de recursos padrão',
  'bestPractices.cost.resources.item4':
    'Audite regularmente e identifique cargas de trabalho superdimensionadas',
  'bestPractices.cost.resources.title': 'Eficiência de Recursos',
  'bestPractices.cost.scaling.desc': 'Escale eficientemente para corresponder à demanda',
  'bestPractices.cost.scaling.item1': 'Configure Cluster Autoscaler para reduzir nós subutilizados',
  'bestPractices.cost.scaling.item2':
    'Use instâncias spot/preemptible para cargas tolerantes a falhas',
  'bestPractices.cost.scaling.item3':
    'Escale para zero durante horários de baixa atividade com KEDA',
  'bestPractices.cost.scaling.item4':
    'Use node pools com diferentes tipos de instância para diferentes cargas',
  'bestPractices.cost.scaling.title': 'Estratégias de Escalonamento',
  'bestPractices.cost.serverless.desc': 'Escale para zero e autoescalonamento baseado em eventos',
  'bestPractices.cost.serverless.item1': 'Use KEDA para escalar workloads para zero quando ociosos',
  'bestPractices.cost.serverless.item2':
    'Configure triggers do KEDA baseados em tamanho de fila ou métricas',
  'bestPractices.cost.serverless.item3':
    'Use Knative Serving para workloads serverless de containers',
  'bestPractices.cost.serverless.item4':
    'Agende o escalonamento com cron triggers do KEDA para cargas previsíveis',
  'bestPractices.cost.serverless.item5': 'Considere OpenFaaS para workloads function-as-a-service',
  'bestPractices.cost.serverless.mistake5':
    'Não considerar a latência de cold start. Serverless funciona ótimo para jobs async mas pode adicionar latência para APIs de usuário.',
  'bestPractices.cost.serverless.title': 'Serverless e KEDA',
  'bestPractices.cost.serverless.why1':
    'Escalar para zero elimina custos de workloads ociosos. Um serviço sem tráfego não custa nada em vez de rodar 24/7.',
  'bestPractices.cost.serverless.why3':
    'Knative lida com cold starts, divisão de tráfego e escalonamento automático - você só paga pelo tempo real de processamento.',
  'bestPractices.dev.applications.desc':
    'Melhores práticas para desenvolvimento de aplicações cloud-native',
  'bestPractices.dev.applications.item1':
    'Implemente health checks (liveness, readiness, startup probes)',
  'bestPractices.dev.applications.item2': 'Trate shutdown graceful com sinais SIGTERM',
  'bestPractices.dev.applications.item3': 'Siga a metodologia dos 12 fatores',
  'bestPractices.dev.applications.item4': 'Use variáveis de ambiente para configuração',
  'bestPractices.dev.applications.item5': 'Projete aplicações stateless quando possível',
  'bestPractices.dev.applications.title': 'Design de Aplicações',
  'bestPractices.dev.configuration.desc': 'Gerenciando configuração de aplicações no Kubernetes',
  'bestPractices.dev.configuration.item1': 'Use ConfigMaps para configuração não sensível',
  'bestPractices.dev.configuration.item2': 'Armazene dados sensíveis em Secrets (criptografados)',
  'bestPractices.dev.configuration.item3': 'Use namespaces para organizar e isolar aplicações',
  'bestPractices.dev.configuration.item4':
    'Aplique labels e annotations consistentes para organização',
  'bestPractices.dev.configuration.title': 'Gestão de Configuração',
  'bestPractices.dev.resources.desc': 'Alocação eficiente de recursos e escalabilidade',
  'bestPractices.dev.resources.item1': 'Sempre defina requests e limits de recursos',
  'bestPractices.dev.resources.item2':
    'Use Horizontal Pod Autoscaler (HPA) para escalabilidade automática',
  'bestPractices.dev.resources.item3': 'Implemente Resource Quotas e Limit Ranges por namespace',
  'bestPractices.dev.resources.item4': 'Use Pod Disruption Budgets para alta disponibilidade',
  'bestPractices.dev.resources.title': 'Gestão de Recursos',
  'bestPractices.devsecops.admission.desc': 'Aplique políticas de segurança no momento do deploy',
  'bestPractices.devsecops.admission.item1':
    'Aplique Pod Security Standards (perfil restricted para produção)',
  'bestPractices.devsecops.admission.item2':
    'Bloqueie imagens com tag latest ou de registros não confiáveis',
  'bestPractices.devsecops.admission.item3': 'Exija limites de recursos em todos os containers',
  'bestPractices.devsecops.admission.item4':
    'Use modo audit primeiro para identificar violações antes de aplicar',
  'bestPractices.devsecops.admission.title': 'Controle de Admissão',
  'bestPractices.devsecops.scanning.desc':
    'Detecte vulnerabilidades e ameaças no seu cluster em execução',
  'bestPractices.devsecops.scanning.item1':
    'Escaneie as imagens de containers em execução com Trivy',
  'bestPractices.devsecops.scanning.item2':
    'Configure regras do Falco para detecção de ameaças em runtime',
  'bestPractices.devsecops.scanning.item3':
    'Audite a segurança do cluster com kube-bench (CIS Benchmark)',
  'bestPractices.devsecops.scanning.item4':
    'Valide manifestos com kubeconform e kube-score antes de aplicar',
  'bestPractices.devsecops.scanning.title': 'Segurança em Runtime e Escaneamento',
  'bestPractices.devsecops.supplychain.desc':
    'Controle quais imagens de containers podem executar no seu cluster',
  'bestPractices.devsecops.supplychain.item1':
    'Verifique assinaturas de imagens no momento da admissão com Kyverno',
  'bestPractices.devsecops.supplychain.item2':
    'Restrinja deploys apenas a registros de containers aprovados',
  'bestPractices.devsecops.supplychain.item3': 'Exija digests de imagens em vez de tags mutáveis',
  'bestPractices.devsecops.supplychain.item4':
    'Use Sigstore Policy Controller para verificação de assinaturas',
  'bestPractices.devsecops.supplychain.title': 'Segurança de Imagens no Kubernetes',
  'bestPractices.gitops.delivery.desc': 'Melhores práticas de pipelines CI/CD',
  'bestPractices.gitops.delivery.item1':
    'Automatize builds de imagens e escaneamento de vulnerabilidades',
  'bestPractices.gitops.delivery.item2':
    'Use estratégias de entrega progressiva (canary, blue-green)',
  'bestPractices.gitops.delivery.item3': 'Implemente rollbacks automáticos em caso de falha',
  'bestPractices.gitops.delivery.item4': 'Use Helm ou Kustomize para gestão de configuração',
  'bestPractices.gitops.delivery.title': 'Entrega Contínua',
  'bestPractices.gitops.workflow.desc': 'Entrega de infraestrutura e aplicações com Git',
  'bestPractices.gitops.workflow.item1': 'Use Git como a única fonte da verdade',
  'bestPractices.gitops.workflow.item2': 'Implemente ArgoCD ou Flux para entrega contínua',
  'bestPractices.gitops.workflow.item3': 'Use modelo de deploy baseado em pull',
  'bestPractices.gitops.workflow.item4': 'Separe repositórios de aplicação e infraestrutura',
  'bestPractices.gitops.workflow.title': 'Fluxo de Trabalho GitOps',
  'bestPractices.ha.redundancy.desc':
    'Garanta que as cargas de trabalho sobrevivam a falhas de infraestrutura',
  'bestPractices.ha.redundancy.item1':
    'Execute pelo menos 3 réplicas para cargas de trabalho de produção',
  'bestPractices.ha.redundancy.item2':
    'Use pod anti-affinity para distribuir entre zonas de disponibilidade',
  'bestPractices.ha.redundancy.item3':
    'Configure topology spread constraints para distribuição uniforme',
  'bestPractices.ha.redundancy.item4': 'Use node affinity para agendar em pools de nós apropriados',
  'bestPractices.ha.redundancy.item5': 'Atribua priority classes a cargas de trabalho críticas',
  'bestPractices.ha.redundancy.title': 'Redundância e Distribuição',
  'bestPractices.ha.resilience.desc': 'Lide com falhas de forma elegante e recupere rapidamente',
  'bestPractices.ha.resilience.item1':
    'Configure Pod Disruption Budgets para todos os serviços críticos',
  'bestPractices.ha.resilience.item2': 'Implemente desligamento graceful com hooks preStop',
  'bestPractices.ha.resilience.item3': 'Defina timeouts e limites apropriados para probes',
  'bestPractices.ha.resilience.item4': 'Teste cenários de falha regularmente (chaos engineering)',
  'bestPractices.ha.resilience.title': 'Resiliência e Recuperação',
  'bestPractices.mesh.observability.desc': 'Visibilidade profunda do comportamento do service mesh',
  'bestPractices.mesh.observability.item1':
    'Habilite rastreamento distribuído com Jaeger ou Zipkin',
  'bestPractices.mesh.observability.item2': 'Monitore métricas do mesh com Prometheus e Grafana',
  'bestPractices.mesh.observability.item3':
    'Use Kiali para visualização da topologia do service mesh',
  'bestPractices.mesh.observability.item4':
    'Defina taxas de amostragem apropriadas para rastreamento em produção',
  'bestPractices.mesh.observability.title': 'Observabilidade do Mesh',
  'bestPractices.mesh.security.desc': 'Rede de confiança zero com service mesh',
  'bestPractices.mesh.security.item1':
    'Habilite mTLS estrito para toda comunicação serviço a serviço',
  'bestPractices.mesh.security.item2':
    'Defina AuthorizationPolicies para controle de acesso granular',
  'bestPractices.mesh.security.item3': 'Rotacione os certificados do service mesh regularmente',
  'bestPractices.mesh.security.item4': 'Use RequestAuthentication para validação JWT no ingress',
  'bestPractices.mesh.security.title': 'Segurança do Mesh',
  'bestPractices.mesh.traffic.desc': 'Controle e otimize o tráfego de serviços',
  'bestPractices.mesh.traffic.item1': 'Implemente circuit breakers para prevenir falhas em cascata',
  'bestPractices.mesh.traffic.item2': 'Configure políticas de retry com backoff exponencial',
  'bestPractices.mesh.traffic.item3': 'Use traffic splitting para deploys canary',
  'bestPractices.mesh.traffic.item4':
    'Defina timeouts de request apropriados para todos os serviços',
  'bestPractices.mesh.traffic.title': 'Gerenciamento de Tráfego',
  'bestPractices.networking.ingress.desc': 'Gerenciando tráfego externo com APIs modernas',
  'bestPractices.networking.ingress.item1':
    'Use Gateway API para novos projetos (moderno, expressivo, multi-tenant)',
  'bestPractices.networking.ingress.item2': 'Ingress API ainda é válido para casos simples',
  'bestPractices.networking.ingress.item3': 'Aplique TLS para todas as comunicações externas',
  'bestPractices.networking.ingress.item4': 'Implemente rate limiting e políticas de tráfego',
  'bestPractices.networking.ingress.item5':
    'Use implementações de Gateway conforme suas necessidades (Cilium, Istio, NGINX)',
  'bestPractices.networking.ingress.title': 'Gateway API e Ingress',
  'bestPractices.networking.policies.desc': 'Segmentação de rede e controle de acesso',
  'bestPractices.networking.policies.item1':
    'Implemente políticas de negação padrão para todos os namespaces',
  'bestPractices.networking.policies.item2':
    'Use Network Policies para restringir comunicação pod-a-pod',
  'bestPractices.networking.policies.item3': 'Segmente workloads por nível de sensibilidade',
  'bestPractices.networking.policies.item4':
    'Use plugins CNI que suportem Network Policies (Cilium, Calico)',
  'bestPractices.networking.policies.title': 'Network Policies',
  'bestPractices.networking.services.desc': 'Descoberta de serviços e comunicação interna',
  'bestPractices.networking.services.item1': 'Use Services para endpoints de rede estáveis',
  'bestPractices.networking.services.item2':
    'Escolha tipos de serviço apropriados (ClusterIP, NodePort, LoadBalancer)',
  'bestPractices.networking.services.item3': 'Use headless services para StatefulSets',
  'bestPractices.networking.services.item4':
    'Implemente convenções de nomenclatura DNS apropriadas',
  'bestPractices.networking.services.title': 'Networking de Serviços',
  'bestPractices.observability.external.desc': 'Centralize métricas e logs fora do cluster',
  'bestPractices.observability.external.item1':
    'Use Thanos ou Cortex para armazenamento de longo prazo de métricas Prometheus',
  'bestPractices.observability.external.item2':
    'Configure Loki/Elasticsearch com armazenamento de objetos externo (S3, GCS, Azure Blob)',
  'bestPractices.observability.external.item3':
    'Mantenha apenas dados de curto prazo (horas/dias) no cluster para consultas em tempo real',
  'bestPractices.observability.external.item4':
    'Use remote_write do Prometheus para enviar métricas para armazenamento externo',
  'bestPractices.observability.external.item5':
    'Implemente políticas de ciclo de vida para exclusão e tiering automático de dados',
  'bestPractices.observability.external.mistake':
    'Armazenar meses ou anos de métricas/logs dentro do cluster, causando esgotamento de armazenamento e desempenho degradado durante consultas.',
  'bestPractices.observability.external.title': 'Armazenamento Externo',
  'bestPractices.observability.external.why':
    'O cluster Kubernetes não deve ser usado para armazenamento de longo prazo de dados de observabilidade. Métricas e logs consomem armazenamento significativo e podem impactar o desempenho do cluster. O armazenamento externo fornece melhor escalabilidade, durabilidade e permite manutenção do cluster sem perda de dados.',
  'bestPractices.observability.logging.desc': 'Logging centralizado e análise',
  'bestPractices.observability.logging.item1':
    'Centralize logs com Loki, ELK, ou ferramentas similares',
  'bestPractices.observability.logging.item2': 'Use formatos de logging estruturado (JSON)',
  'bestPractices.observability.logging.item3':
    'Inclua IDs de correlação para rastreamento de requests',
  'bestPractices.observability.logging.item4': 'Implemente políticas de retenção e rotação de logs',
  'bestPractices.observability.logging.title': 'Logging',
  'bestPractices.observability.metrics.desc': 'Coleta e análise de métricas',
  'bestPractices.observability.metrics.item1':
    'Use Prometheus para coleta e armazenamento de métricas',
  'bestPractices.observability.metrics.item2': 'Crie dashboards significativos com Grafana',
  'bestPractices.observability.metrics.item3': 'Configure alertas para métricas críticas e SLOs',
  'bestPractices.observability.metrics.item4': 'Monitore métricas a nível de cluster e aplicação',
  'bestPractices.observability.metrics.title': 'Métricas e Monitoramento',
  'bestPractices.observability.tracing.desc': 'Rastreamento end-to-end de requests',
  'bestPractices.observability.tracing.item1':
    'Implemente OpenTelemetry para rastreamento distribuído',
  'bestPractices.observability.tracing.item2': 'Use Jaeger ou Tempo para visualização de traces',
  'bestPractices.observability.tracing.item3': 'Propague contexto de traces entre serviços',
  'bestPractices.observability.tracing.item4': 'Amoestre traces apropriadamente para produção',
  'bestPractices.observability.tracing.title': 'Rastreamento Distribuído',
  'bestPractices.ops.auth.desc':
    'Proteja o acesso ao cluster com mecanismos apropriados de autenticação e autorização',
  'bestPractices.ops.auth.item1':
    'Configure autenticação OIDC para o API server com provedores de identidade externos',
  'bestPractices.ops.auth.item2':
    'Use tokens de ServiceAccount com expiração em vez de tokens estáticos',
  'bestPractices.ops.auth.item3':
    'Habilite audit logging para rastrear eventos de autenticação e autorização',
  'bestPractices.ops.auth.item4':
    'Desabilite autenticação anônima e force o modo de autorização RBAC',
  'bestPractices.ops.auth.item5':
    'Use kubeconfig de curta duração com plugins exec OIDC para desenvolvedores',
  'bestPractices.ops.auth.title': 'Autenticação e Autorização',
  'bestPractices.ops.backup.desc': 'Estratégias de recuperação de desastres e proteção de dados',
  'bestPractices.ops.backup.item1':
    'Crie snapshots do etcd regularmente e armazene-os externamente',
  'bestPractices.ops.backup.item2': 'Use Velero para backups a nível de cluster e aplicação',
  'bestPractices.ops.backup.item3': 'Automatize backups com jobs agendados e políticas de retenção',
  'bestPractices.ops.backup.item4':
    'Teste regularmente os procedimentos de restauração em ambientes não produtivos',
  'bestPractices.ops.backup.item5':
    'Siga a regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 fora do local',
  'bestPractices.ops.backup.title': 'Backup e Recuperação',
  'bestPractices.ops.maintenance.desc': 'Manutenção regular do cluster e operações',
  'bestPractices.ops.maintenance.item1':
    'Faça backup do etcd regularmente e verifique se a restauração funciona',
  'bestPractices.ops.maintenance.item2': 'Monitore e renove certificados antes de expirarem',
  'bestPractices.ops.maintenance.item3': 'Compacte e desfragmente o etcd periodicamente',
  'bestPractices.ops.maintenance.item4':
    'Documente runbooks para procedimentos operacionais comuns',
  'bestPractices.ops.maintenance.title': 'Tarefas de Manutenção',
  'bestPractices.ops.troubleshooting.desc': 'Depure e diagnostique problemas do cluster',
  'bestPractices.ops.troubleshooting.item1':
    'Use containers debug efêmeros para troubleshooting ao vivo',
  'bestPractices.ops.troubleshooting.item2': 'Verifique eventos do cluster para padrões de erros',
  'bestPractices.ops.troubleshooting.item3':
    'Use kubectl logs com flags apropriadas para debugging',
  'bestPractices.ops.troubleshooting.item4': 'Monitore a utilização de recursos de nós e pods',
  'bestPractices.ops.troubleshooting.title': 'Resolução de Problemas',
  'bestPractices.ops.upgrades.desc': 'Atualizações de Kubernetes seguras e confiáveis',
  'bestPractices.ops.upgrades.item1':
    'Siga o caminho de atualização sequencial (uma versão menor por vez)',
  'bestPractices.ops.upgrades.item2': 'Drene os nós corretamente antes da manutenção',
  'bestPractices.ops.upgrades.item3': 'Teste as atualizações em ambiente de staging primeiro',
  'bestPractices.ops.upgrades.item4': 'Verifique deprecações de API antes de atualizar com kubent',
  'bestPractices.ops.upgrades.title': 'Atualizações do Cluster',
  'bestPractices.security.cluster.desc': 'Protegendo a infraestrutura do cluster Kubernetes',
  'bestPractices.security.cluster.item1': 'Habilite RBAC e siga o princípio do menor privilégio',
  'bestPractices.security.cluster.item2': 'Atualize regularmente Kubernetes e todos os componentes',
  'bestPractices.security.cluster.item3':
    'Habilite registro de auditoria para monitoramento de segurança',
  'bestPractices.security.cluster.item4': 'Proteja o API server com autenticação apropriada',
  'bestPractices.security.cluster.item5': 'Use admission controllers (OPA Gatekeeper, Kyverno)',
  'bestPractices.security.cluster.title': 'Segurança do Cluster',
  'bestPractices.security.secrets.desc': 'Protegendo dados sensíveis',
  'bestPractices.security.secrets.item1':
    'Criptografe secrets em repouso com provedores de criptografia',
  'bestPractices.security.secrets.item2':
    'Use gerenciadores de secrets externos (Vault, AWS Secrets Manager)',
  'bestPractices.security.secrets.item3': 'Rotacione secrets regularmente e automaticamente',
  'bestPractices.security.secrets.item4':
    'Nunca armazene secrets em imagens de contêiner ou código',
  'bestPractices.security.secrets.title': 'Gestão de Secrets',
  'bestPractices.security.tls.desc': 'Gestão de certificados e comunicações criptografadas',
  'bestPractices.security.tls.item1':
    'Use cert-manager para provisionamento e renovação automática de certificados',
  'bestPractices.security.tls.item2':
    'Monitore e rotacione certificados do cluster antes de expirarem (kubeadm certs)',
  'bestPractices.security.tls.item3': 'Configure certificados TLS para todos os serviços expostos',
  'bestPractices.security.tls.item4':
    'Habilite mTLS entre serviços usando service mesh (Istio, Linkerd)',
  'bestPractices.security.tls.item5': 'Use certificados de curta duração e automatize a renovação',
  'bestPractices.security.tls.title': 'TLS e Certificados',
  'bestPractices.security.workloads.desc': 'Protegendo pods e deployments',
  'bestPractices.security.workloads.item1': 'Use Pod Security Standards (Restricted/Baseline)',
  'bestPractices.security.workloads.item2': 'Execute contêineres como usuários não-root',
  'bestPractices.security.workloads.item3': 'Use sistemas de arquivos raiz somente leitura',
  'bestPractices.security.workloads.item4': 'Limite capabilities do contêiner ao mínimo necessário',
  'bestPractices.security.workloads.item5': 'Use service accounts com permissões mínimas',
  'bestPractices.security.workloads.title': 'Segurança de Workloads',
  'bestPractices.stateful.operators.desc':
    'Use operators do Kubernetes para bancos de dados em produção',
  'bestPractices.stateful.operators.item1':
    'Use CloudNativePG para PostgreSQL com backups automáticos e HA',
  'bestPractices.stateful.operators.item2':
    'Deploy MongoDB com o Community Operator para replica sets',
  'bestPractices.stateful.operators.item3':
    'Use Redis Operator para Redis de alta disponibilidade com Sentinel',
  'bestPractices.stateful.operators.item4':
    'Prefira operators graduados da CNCF ou amplamente adotados',
  'bestPractices.stateful.operators.title': 'Operators de Bancos de Dados',
  'bestPractices.stateful.replication.desc': 'Garanta durabilidade e disponibilidade de dados',
  'bestPractices.stateful.replication.item1': 'Habilite replicação síncrona para dados críticos',
  'bestPractices.stateful.replication.item2':
    'Use storage com replicação integrada (Longhorn, Rook-Ceph)',
  'bestPractices.stateful.replication.item3':
    'Implemente VolumeSnapshots para recuperação point-in-time',
  'bestPractices.stateful.replication.item4':
    'Teste cenários de failover regularmente em ambientes não produtivos',
  'bestPractices.stateful.replication.title': 'Replicação de Dados',
  'bestPractices.stateful.sets.desc':
    'Configure StatefulSets corretamente para aplicações stateful',
  'bestPractices.stateful.sets.item1':
    'Use gerenciamento ordenado de pods e templates de volume claims',
  'bestPractices.stateful.sets.item2':
    'Crie serviços headless para nomes DNS estáveis (pod-0.service)',
  'bestPractices.stateful.sets.item3':
    'Configure PodDisruptionBudget para manter quórum durante updates',
  'bestPractices.stateful.sets.item4':
    'Use pod anti-affinity para distribuir réplicas entre nós e zonas',
  'bestPractices.stateful.sets.title': 'Melhores Práticas de StatefulSet',
  'bestPractices.storage.backup.desc': 'Proteção de dados e estratégias de recuperação',
  'bestPractices.storage.backup.item1':
    'Faça backup do etcd regularmente e teste procedimentos de restauração',
  'bestPractices.storage.backup.item2': 'Use Velero para backups de cluster e aplicação',
  'bestPractices.storage.backup.item3': 'Armazene backups em múltiplas localizações (regra 3-2-1)',
  'bestPractices.storage.backup.item4': 'Defina e documente objetivos de RPO/RTO',
  'bestPractices.storage.backup.title': 'Backup e Recuperação de Desastres',
  'bestPractices.storage.volumes.desc': 'Gerenciando dados persistentes no Kubernetes',
  'bestPractices.storage.volumes.item1': 'Use StorageClasses para provisionamento dinâmico',
  'bestPractices.storage.volumes.item2': 'Escolha modos de acesso apropriados (RWO, RWX, ROX)',
  'bestPractices.storage.volumes.item3': 'Use snapshots de volume para recuperação point-in-time',
  'bestPractices.storage.volumes.item4':
    'Implemente políticas de expansão de volume quando necessário',
  'bestPractices.storage.volumes.title': 'Armazenamento Persistente',
  'bestPractices.subtitle': 'Boas práticas Cloud Native organizadas por áreas',
  'bestPractices.tab.accesscontrol': 'Controle de Acesso',
  'bestPractices.tab.compliance': 'Compliance',
  'bestPractices.tab.containerization': 'Contêineres',
  'bestPractices.tab.costoptimization': 'Otimização de Custos',
  'bestPractices.tab.development': 'Desenvolvimento',
  'bestPractices.tab.devsecops': 'DevSecOps',
  'bestPractices.tab.gitops': 'GitOps & CI/CD',
  'bestPractices.tab.highavailability': 'Alta Disponibilidade',
  'bestPractices.tab.multitenancy': 'Multi-tenancy',
  'bestPractices.tab.networkpolicies': 'Políticas de Rede',
  'bestPractices.tab.observability': 'Observabilidade',
  'bestPractices.tab.operations': 'Operações do Cluster',
  'bestPractices.tab.servicemesh': 'Service Mesh',
  'bestPractices.tab.stateful': 'Cargas Stateful',
  'bestPractices.tab.storage': 'Armazenamento',
  'bestPractices.tenant.isolation.desc':
    'Isolamento seguro entre tenants usando namespaces e políticas',
  'bestPractices.tenant.isolation.item1':
    'Use namespaces dedicados por tenant com rotulagem apropriada',
  'bestPractices.tenant.isolation.item2':
    'Configure ResourceQuotas para limitar o consumo de recursos por tenant',
  'bestPractices.tenant.isolation.item3':
    'Aplique LimitRanges para forçar limites padrão e máximos',
  'bestPractices.tenant.isolation.item4':
    'Implemente NetworkPolicies para prevenir comunicação entre tenants',
  'bestPractices.tenant.isolation.title': 'Isolamento de Tenants',
  'bestPractices.title': 'Boas Práticas',
} as const;

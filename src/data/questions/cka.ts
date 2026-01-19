/**
 * CKA - Certified Kubernetes Administrator
 * Practice Questions (60 questions - matches exam format)
 *
 * Exam Domains:
 * - Storage (10%) - 6 questions
 * - Troubleshooting (30%) - 18 questions
 * - Workloads & Scheduling (15%) - 9 questions
 * - Cluster Architecture, Installation & Configuration (25%) - 15 questions
 * - Services & Networking (20%) - 12 questions
 *
 * Topics covered:
 * - kubeadm, etcd, RBAC, kubectl, cluster upgrades
 * - Troubleshooting pods, nodes, networking, applications
 * - Storage classes, PV/PVC, volume types
 * - Services, Ingress, Network Policies, DNS
 * - Deployments, DaemonSets, resource management
 */

import type { Question } from '@/types/quiz';

export const CKA_QUESTIONS: Question[] = [
  // ============================================
  // DOMAIN: Storage (10%) - 6 questions
  // ============================================
  {
    id: 'cka-001',
    domain: 'Storage',
    question:
      'Which access mode allows a PersistentVolume to be mounted as read-write by a single node?',
    options: ['ReadWriteOnce', 'ReadWriteMany', 'ReadOnlyMany', 'ReadWriteOncePod'],
    correctAnswer: 0,
    explanation:
      'ReadWriteOnce (RWO) allows the volume to be mounted as read-write by a single node. ReadOnlyMany (ROX) allows read-only access from multiple nodes, ReadWriteMany (RWX) allows read-write from multiple nodes, and ReadWriteOncePod (RWOP) restricts access to a single pod.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes)',
    difficulty: 'medium',
    tags: ['storage', 'pv', 'access-modes'],
  },
  {
    id: 'cka-002',
    domain: 'Storage',
    question: 'What is the purpose of a StorageClass in Kubernetes?',
    options: [
      'To monitor storage usage across the cluster',
      'To encrypt data at rest in volumes',
      'To define backup policies for volumes',
      'To provide a way to describe different classes of storage with provisioner and parameters',
    ],
    correctAnswer: 3,
    explanation:
      'A StorageClass provides a way for administrators to describe the "classes" of storage they offer. Different classes might map to quality-of-service levels, backup policies, or arbitrary policies determined by the cluster administrators.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/storage-classes/)',
    difficulty: 'medium',
    tags: ['storage', 'storageclass', 'provisioning'],
  },
  {
    id: 'cka-003',
    domain: 'Storage',
    question:
      'Which reclaim policy causes the PersistentVolume to be deleted when the PersistentVolumeClaim is deleted?',
    options: ['Retain', 'Delete', 'Recycle', 'Archive'],
    correctAnswer: 1,
    explanation:
      'The Delete reclaim policy causes the volume and its associated storage asset to be deleted when the PVC is deleted. Retain keeps the volume for manual reclamation. Recycle is deprecated. Archive is not a valid reclaim policy.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#reclaiming)',
    difficulty: 'medium',
    tags: ['storage', 'pv', 'reclaim-policy'],
  },
  {
    id: 'cka-004',
    domain: 'Storage',
    question:
      'How do you expand a PersistentVolumeClaim that uses a StorageClass with allowVolumeExpansion set to true?',
    options: [
      'Delete and recreate the PVC with a larger size',
      'Create a new PV with larger capacity and rebind',
      'Edit the PVC and increase the spec.resources.requests.storage value',
      'Use kubectl scale command on the PVC',
    ],
    correctAnswer: 2,
    explanation:
      'To expand a PVC, you can edit it and increase the storage request in spec.resources.requests.storage. The StorageClass must have allowVolumeExpansion: true. Some volume types may require pod restart for the filesystem to be expanded.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims)',
    difficulty: 'hard',
    tags: ['storage', 'pvc', 'expansion'],
  },
  {
    id: 'cka-005',
    domain: 'Storage',
    question: 'What happens when a PVC requests storage from a StorageClass that does not exist?',
    options: [
      'Kubernetes creates a default StorageClass automatically',
      'The PVC is automatically bound to any available PV',
      'The PVC is rejected with an error',
      'The PVC remains in Pending state until the StorageClass is created',
    ],
    correctAnswer: 3,
    explanation:
      'When a PVC references a non-existent StorageClass, it remains in Pending state waiting for the StorageClass to be created or for an administrator to manually bind a PV. No automatic fallback occurs.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class-1)',
    difficulty: 'medium',
    tags: ['storage', 'pvc', 'storageclass'],
  },
  {
    id: 'cka-006',
    domain: 'Storage',
    question:
      'Which volume type should you use to share data between containers in the same Pod that does not need to persist after the Pod terminates?',
    options: ['emptyDir', 'persistentVolumeClaim', 'configMap', 'hostPath'],
    correctAnswer: 0,
    explanation:
      'emptyDir is created when a Pod is assigned to a node and exists as long as the Pod runs on that node. It is ideal for sharing data between containers in a Pod when persistence is not required.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)',
    difficulty: 'easy',
    tags: ['storage', 'volumes', 'emptydir'],
  },

  // ============================================
  // DOMAIN: Troubleshooting (30%) - 18 questions
  // ============================================
  {
    id: 'cka-007',
    domain: 'Troubleshooting',
    question: 'A Pod is stuck in ImagePullBackOff status. What is the most likely cause?',
    options: [
      'The node has insufficient memory',
      'The container image cannot be pulled from the registry',
      'The Pod has a failing liveness probe',
      'The PersistentVolumeClaim is not bound',
    ],
    correctAnswer: 1,
    explanation:
      'ImagePullBackOff indicates that Kubernetes cannot pull the container image. This could be due to incorrect image name, missing image tag, invalid registry credentials, or network issues reaching the registry.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'pods', 'images'],
  },
  {
    id: 'cka-008',
    domain: 'Troubleshooting',
    question: 'Which command shows the logs of a previous instance of a container that crashed?',
    options: [
      'kubectl logs <pod> --history',
      'kubectl describe pod <pod>',
      'kubectl logs <pod> --previous',
      'kubectl get events',
    ],
    correctAnswer: 2,
    explanation:
      'The kubectl logs command with the --previous flag shows logs from a previous instantiation of a container. This is useful for debugging crashed containers to see what happened before the crash.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'kubectl', 'logs'],
  },
  {
    id: 'cka-009',
    domain: 'Troubleshooting',
    question: 'A Pod is in CrashLoopBackOff state. What does this indicate?',
    options: [
      'The Pod is waiting for a dependent service',
      'The image pull is being rate limited',
      'The Pod cannot be scheduled due to resource constraints',
      'The container keeps crashing and Kubernetes is backing off restart attempts',
    ],
    correctAnswer: 3,
    explanation:
      'CrashLoopBackOff means the container is repeatedly crashing after starting. Kubernetes backs off the restart attempts exponentially. Check container logs and events to identify the root cause.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'pods', 'crashloop'],
  },
  {
    id: 'cka-010',
    domain: 'Troubleshooting',
    question: 'How do you check the events related to a specific Pod?',
    options: [
      'kubectl events <pod-name>',
      'kubectl logs <pod-name> --events',
      'kubectl describe pod <pod-name>',
      'kubectl get pod <pod-name> -o events',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl describe pod shows detailed information about a Pod including recent events. Events provide crucial information about scheduling, pulling images, starting containers, and any errors encountered.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_describe/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'kubectl', 'events'],
  },
  {
    id: 'cka-011',
    domain: 'Troubleshooting',
    question: 'A node shows NotReady status. Which component should you check first on the node?',
    options: ['kube-proxy', 'etcd', 'kube-scheduler', 'kubelet'],
    correctAnswer: 3,
    explanation:
      'The kubelet is responsible for reporting node status to the control plane. If a node is NotReady, check the kubelet service first, then verify network connectivity and container runtime status.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'nodes', 'kubelet'],
  },
  {
    id: 'cka-012',
    domain: 'Troubleshooting',
    question:
      'Which command allows you to execute commands inside a running container for debugging?',
    options: [
      'kubectl run --attach',
      'kubectl debug <pod>',
      'kubectl exec -it <pod> -- <command>',
      'kubectl attach <pod>',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl exec -it allows you to execute commands inside a running container. The -it flags enable interactive terminal mode. This is essential for debugging running applications.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'kubectl', 'exec'],
  },
  {
    id: 'cka-013',
    domain: 'Troubleshooting',
    question: 'A Service is not routing traffic to Pods. What should you verify first?',
    options: [
      'Check if the Ingress controller is running',
      'Ensure the LoadBalancer has an external IP',
      'Verify that the Service selector matches the Pod labels',
      'Check the NetworkPolicy rules',
    ],
    correctAnswer: 2,
    explanation:
      'The most common cause of Services not routing traffic is a mismatch between the Service selector and Pod labels. Use kubectl describe service and kubectl get pods --show-labels to verify they match.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-application/debug-service/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'services', 'selectors'],
  },
  {
    id: 'cka-014',
    domain: 'Troubleshooting',
    question: 'How do you view the kubelet logs on a systemd-based Linux node?',
    options: [
      'kubectl logs kubelet',
      'docker logs kubelet',
      'cat /var/log/kubelet.log',
      'journalctl -u kubelet',
    ],
    correctAnswer: 3,
    explanation:
      'On systemd-based systems, kubelet runs as a systemd service. Use journalctl -u kubelet to view its logs. Add -f to follow logs in real-time or --since to filter by time.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'kubelet', 'logs'],
  },
  {
    id: 'cka-015',
    domain: 'Troubleshooting',
    question: 'A Pod is stuck in Pending state with no events. What is the most likely cause?',
    options: [
      'Image pull failure',
      'Container runtime not running',
      'PVC not bound',
      'No nodes match the Pod scheduling requirements',
    ],
    correctAnswer: 3,
    explanation:
      'When a Pod is Pending with no events, it typically means the scheduler cannot find a suitable node. Check for taints, node selectors, affinity rules, and resource requests that might prevent scheduling.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'scheduling', 'pending'],
  },
  {
    id: 'cka-016',
    domain: 'Troubleshooting',
    question: 'Which command helps identify why a Pod cannot be scheduled?',
    options: [
      'kubectl logs <pod>',
      'kubectl get pod <pod> -o yaml',
      'kubectl describe pod <pod>',
      'kubectl top pod <pod>',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl describe pod provides detailed information including scheduling events, conditions, and any errors. For scheduling issues, look at the Events section which shows scheduler messages about why placement failed.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'kubectl', 'scheduling'],
  },
  {
    id: 'cka-017',
    domain: 'Troubleshooting',
    question: 'How do you check the resource consumption of Pods in a namespace?',
    options: [
      'kubectl top pods -n <namespace>',
      'kubectl describe pods -n <namespace>',
      'kubectl resources -n <namespace>',
      'kubectl get pods -n <namespace> -o wide',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl top pods shows CPU and memory consumption of pods. This requires the metrics-server to be installed in the cluster. Use -n to specify namespace or --all-namespaces for cluster-wide view.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_top/)',
    difficulty: 'easy',
    tags: ['troubleshooting', 'kubectl', 'resources'],
  },
  {
    id: 'cka-018',
    domain: 'Troubleshooting',
    question: 'A Pod has OOMKilled status. What does this mean and how do you fix it?',
    options: [
      'Out of Mounts - add more volumes to the Pod',
      'Out of Modules - install missing kernel modules',
      'Out of Memory - increase the memory limit or optimize the application',
      'Out of Mappings - increase the port range',
    ],
    correctAnswer: 2,
    explanation:
      'OOMKilled indicates the container was terminated because it exceeded its memory limit. Fix by increasing memory limits in the Pod spec or optimizing the application memory usage.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'resources', 'memory'],
  },
  {
    id: 'cka-019',
    domain: 'Troubleshooting',
    question: 'How do you test DNS resolution from within a Pod?',
    options: [
      'kubectl dns test <service-name>',
      'kubectl exec -it <pod> -- nslookup <service-name>',
      'kubectl resolve <service-name>',
      'kubectl get endpoints <service-name>',
    ],
    correctAnswer: 1,
    explanation:
      'Use kubectl exec to run nslookup, dig, or host commands inside a Pod to test DNS resolution. This helps verify that CoreDNS is working and services are resolvable.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'dns', 'networking'],
  },
  {
    id: 'cka-020',
    domain: 'Troubleshooting',
    question: 'Which file contains the static pod manifests on a kubeadm-initialized node?',
    options: [
      '/etc/kubernetes/kubelet.conf',
      '/etc/kubernetes/admin.conf',
      '/var/lib/kubelet/config.yaml',
      '/etc/kubernetes/manifests/',
    ],
    correctAnswer: 3,
    explanation:
      'Static pod manifests are stored in /etc/kubernetes/manifests/ by default. The kubelet watches this directory and automatically creates/updates pods based on the manifests present.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'static-pods', 'kubeadm'],
  },
  {
    id: 'cka-021',
    domain: 'Troubleshooting',
    question:
      'A container fails to start with "Error: failed to create containerd task". What should you check?',
    options: [
      'etcd cluster health',
      'kube-apiserver logs',
      'kube-scheduler configuration',
      'Container runtime status and logs',
    ],
    correctAnswer: 3,
    explanation:
      'This error indicates a problem with the container runtime (containerd). Check the runtime service status (systemctl status containerd) and its logs (journalctl -u containerd) for more details.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/debug/debug-cluster/)',
    difficulty: 'hard',
    tags: ['troubleshooting', 'containerd', 'runtime'],
  },
  {
    id: 'cka-022',
    domain: 'Troubleshooting',
    question: 'How do you drain a node for maintenance while respecting PodDisruptionBudgets?',
    options: [
      'kubectl delete node <node-name>',
      'kubectl cordon <node-name>',
      'kubectl drain <node-name> --ignore-daemonsets',
      'kubectl taint nodes <node-name> maintenance=true:NoSchedule',
    ],
    correctAnswer: 2,
    explanation:
      'kubectl drain safely evicts all pods from a node while respecting PodDisruptionBudgets. Use --ignore-daemonsets to handle DaemonSet pods. The node is also cordoned to prevent new pod scheduling.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'maintenance', 'drain'],
  },
  {
    id: 'cka-023',
    domain: 'Troubleshooting',
    question: 'What causes a Pod to be Evicted?',
    options: [
      'The Pod exceeded its CPU limit',
      'The Service selector changed',
      'Node is under resource pressure (memory, disk, or PID)',
      'The Deployment was scaled down',
    ],
    correctAnswer: 2,
    explanation:
      'Pods are evicted when nodes are under resource pressure. The kubelet evicts pods based on priority and resource usage when memory, disk space, or PIDs are running low.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/)',
    difficulty: 'medium',
    tags: ['troubleshooting', 'eviction', 'resources'],
  },
  {
    id: 'cka-024',
    domain: 'Troubleshooting',
    question: 'How do you check the health of the etcd cluster?',
    options: [
      'kubectl get componentstatuses',
      'kubectl describe etcd',
      'etcdctl endpoint health',
      'systemctl status etcd',
    ],
    correctAnswer: 2,
    explanation:
      'etcdctl endpoint health checks the health of etcd members. You need to provide the correct endpoints and certificates. For kubeadm clusters, use the etcd container or etcdctl with proper TLS flags.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/)',
    difficulty: 'hard',
    tags: ['troubleshooting', 'etcd', 'cluster-health'],
  },

  // ============================================
  // DOMAIN: Workloads & Scheduling (15%) - 9 questions
  // ============================================
  {
    id: 'cka-025',
    domain: 'Workloads & Scheduling',
    question: 'How do you prevent a Pod from being scheduled on a specific node?',
    options: [
      'Set a PodDisruptionBudget',
      'Use a ResourceQuota on the node',
      'Configure a LimitRange',
      'Apply a taint to the node',
    ],
    correctAnswer: 3,
    explanation:
      'Taints allow a node to repel pods that do not tolerate the taint. Apply a taint with kubectl taint nodes <node> key=value:NoSchedule to prevent pods without matching tolerations from being scheduled.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)',
    difficulty: 'medium',
    tags: ['scheduling', 'taints', 'nodes'],
  },
  {
    id: 'cka-026',
    domain: 'Workloads & Scheduling',
    question: 'What is the effect of a taint with NoExecute effect?',
    options: [
      'Prevents new pods from being scheduled on the node',
      'Evicts existing pods that do not tolerate the taint and prevents new ones',
      'Allows pods to run but marks them as unschedulable',
      'Only affects pods during rolling updates',
    ],
    correctAnswer: 1,
    explanation:
      'NoExecute taint effect evicts existing pods that do not tolerate the taint and prevents new pods from being scheduled. NoSchedule only prevents new scheduling, while PreferNoSchedule is a soft preference.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions)',
    difficulty: 'medium',
    tags: ['scheduling', 'taints', 'eviction'],
  },
  {
    id: 'cka-027',
    domain: 'Workloads & Scheduling',
    question: 'How do you ensure a Pod runs on a node with a GPU?',
    options: [
      'Use a Pod priority class',
      'Set resource limits for GPU',
      'Configure nodeSelector with the appropriate label',
      'Use a PodDisruptionBudget',
    ],
    correctAnswer: 2,
    explanation:
      'nodeSelector is the simplest way to constrain pods to nodes with specific labels. Add nodeSelector with the GPU node label (e.g., gpu: nvidia) to ensure the pod is scheduled on GPU nodes.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector)',
    difficulty: 'easy',
    tags: ['scheduling', 'nodeselector', 'labels'],
  },
  {
    id: 'cka-028',
    domain: 'Workloads & Scheduling',
    question:
      'What is the difference between node affinity requiredDuringSchedulingIgnoredDuringExecution and preferredDuringSchedulingIgnoredDuringExecution?',
    options: [
      'Required is enforced during execution; preferred is not',
      'Required must be satisfied for scheduling; preferred is a soft preference',
      'Required applies to all pods; preferred applies to specific pods',
      'There is no difference between them',
    ],
    correctAnswer: 1,
    explanation:
      'requiredDuringSchedulingIgnoredDuringExecution is a hard requirement that must be met for a pod to be scheduled. preferredDuringSchedulingIgnoredDuringExecution is a soft preference that the scheduler tries to enforce but will schedule even if not met.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity)',
    difficulty: 'hard',
    tags: ['scheduling', 'affinity', 'nodes'],
  },
  {
    id: 'cka-029',
    domain: 'Workloads & Scheduling',
    question: 'How do you set resource requests and limits for a container?',
    options: [
      'Using a ResourceQuota object',
      'In the Pod metadata section',
      'Through kubectl set resources command only',
      'In the container spec under resources.requests and resources.limits',
    ],
    correctAnswer: 3,
    explanation:
      'Resource requests and limits are defined in the container specification under spec.containers[].resources. Requests guarantee minimum resources; limits cap maximum usage.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/)',
    difficulty: 'easy',
    tags: ['scheduling', 'resources', 'containers'],
  },
  {
    id: 'cka-030',
    domain: 'Workloads & Scheduling',
    question: 'What happens when a container exceeds its CPU limit?',
    options: [
      'The container is terminated',
      'The Pod is evicted',
      'The container is throttled',
      'The node becomes NotReady',
    ],
    correctAnswer: 2,
    explanation:
      'When a container exceeds its CPU limit, it is throttled (CPU time is restricted) but not terminated. Unlike memory limits where exceeding causes OOMKill, CPU is a compressible resource.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#how-pods-with-resource-limits-are-run)',
    difficulty: 'medium',
    tags: ['scheduling', 'resources', 'cpu'],
  },
  {
    id: 'cka-031',
    domain: 'Workloads & Scheduling',
    question:
      'Which resource controls the maximum number of Pods that can be unavailable during a voluntary disruption?',
    options: ['ResourceQuota', 'LimitRange', 'PodDisruptionBudget', 'HorizontalPodAutoscaler'],
    correctAnswer: 2,
    explanation:
      'PodDisruptionBudget (PDB) limits the number of pods that can be down simultaneously during voluntary disruptions like draining a node or rolling updates. It specifies minAvailable or maxUnavailable.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/run-application/configure-pdb/)',
    difficulty: 'medium',
    tags: ['scheduling', 'pdb', 'availability'],
  },
  {
    id: 'cka-032',
    domain: 'Workloads & Scheduling',
    question: 'How do you configure a DaemonSet to run only on specific nodes?',
    options: [
      'Set replicas to match the number of target nodes',
      'Use nodeSelector or node affinity in the Pod template',
      'Create separate DaemonSets for each node',
      'Use a Deployment with anti-affinity',
    ],
    correctAnswer: 1,
    explanation:
      'DaemonSets support nodeSelector and node affinity in their Pod template to target specific nodes. Taints and tolerations can also be used to control DaemonSet pod placement.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/#running-pods-on-select-nodes)',
    difficulty: 'medium',
    tags: ['scheduling', 'daemonset', 'nodeselector'],
  },
  {
    id: 'cka-033',
    domain: 'Workloads & Scheduling',
    question: 'What is the purpose of PriorityClass in Kubernetes?',
    options: [
      'To define network traffic priority',
      'To determine pod scheduling and preemption priority',
      'To set the order of container startup',
      'To configure storage I/O priority',
    ],
    correctAnswer: 1,
    explanation:
      'PriorityClass defines a mapping between a priority class name and the integer priority value. Higher priority pods can preempt lower priority pods when resources are scarce.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/)',
    difficulty: 'medium',
    tags: ['scheduling', 'priority', 'preemption'],
  },

  // ============================================
  // DOMAIN: Cluster Architecture, Installation & Configuration (25%) - 15 questions
  // ============================================
  {
    id: 'cka-034',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'Which command initializes a Kubernetes control plane node using kubeadm?',
    options: ['kubeadm init', 'kubeadm start', 'kubeadm create cluster', 'kubeadm bootstrap'],
    correctAnswer: 0,
    explanation:
      'kubeadm init bootstraps a Kubernetes control plane node. It performs preflight checks, generates certificates, starts control plane components, and provides a join command for worker nodes.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/)',
    difficulty: 'easy',
    tags: ['kubeadm', 'installation', 'control-plane'],
  },
  {
    id: 'cka-035',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you add a worker node to an existing kubeadm cluster?',
    options: [
      'kubeadm init --join',
      'kubeadm add node',
      'kubectl add node',
      'kubeadm join <control-plane-endpoint> --token <token> --discovery-token-ca-cert-hash <hash>',
    ],
    correctAnswer: 3,
    explanation:
      'kubeadm join is used to add worker nodes to a cluster. It requires the control plane endpoint, a valid bootstrap token, and the CA certificate hash for secure discovery.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-join/)',
    difficulty: 'medium',
    tags: ['kubeadm', 'installation', 'worker-node'],
  },
  {
    id: 'cka-036',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'What is the recommended method to upgrade a kubeadm cluster?',
    options: [
      'Delete and recreate the cluster with new version',
      'Upgrade all nodes simultaneously',
      'Only upgrade the kubelet on all nodes',
      'Upgrade control plane first, then worker nodes one at a time',
    ],
    correctAnswer: 3,
    explanation:
      'The recommended upgrade procedure is to upgrade the control plane first, then upgrade worker nodes one at a time. This ensures cluster availability throughout the upgrade process.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/)',
    difficulty: 'medium',
    tags: ['kubeadm', 'upgrade', 'cluster-management'],
  },
  {
    id: 'cka-037',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you backup etcd data?',
    options: [
      'kubectl backup etcd',
      'etcdctl snapshot save <filename>',
      'cp -r /var/lib/etcd /backup',
      'kubeadm backup etcd',
    ],
    correctAnswer: 1,
    explanation:
      'etcdctl snapshot save creates a backup of the etcd database. You need to provide proper certificates for authentication. The snapshot can be restored with etcdctl snapshot restore.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/#backing-up-an-etcd-cluster)',
    difficulty: 'medium',
    tags: ['etcd', 'backup', 'disaster-recovery'],
  },
  {
    id: 'cka-038',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'Which RBAC resource grants permissions within a specific namespace?',
    options: ['ClusterRole', 'ClusterRoleBinding', 'ServiceAccount', 'Role'],
    correctAnswer: 3,
    explanation:
      'Role is namespace-scoped and defines permissions within a single namespace. ClusterRole is cluster-scoped and can define permissions across all namespaces or for cluster-wide resources.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole)',
    difficulty: 'medium',
    tags: ['rbac', 'security', 'authorization'],
  },
  {
    id: 'cka-039',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you grant a ServiceAccount permission to list pods in a namespace?',
    options: [
      'Create a Role with pods list verb and bind it with RoleBinding',
      'Modify the ServiceAccount directly',
      'Add the permission to the namespace',
      'Update the kube-apiserver configuration',
    ],
    correctAnswer: 0,
    explanation:
      'Create a Role with rules for pods resource and list verb, then create a RoleBinding to bind the Role to the ServiceAccount. This grants the ServiceAccount permission to list pods in that namespace.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding)',
    difficulty: 'medium',
    tags: ['rbac', 'serviceaccount', 'authorization'],
  },
  {
    id: 'cka-040',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'Where are the kubeconfig files typically stored for cluster access?',
    options: [
      '/etc/kubernetes/kubelet.conf',
      '~/.kube/config or specified by KUBECONFIG environment variable',
      '/var/lib/kubelet/',
      '/etc/kubernetes/manifests/',
    ],
    correctAnswer: 1,
    explanation:
      'By default, kubectl looks for a config file at ~/.kube/config. The KUBECONFIG environment variable can specify an alternate location or multiple config files.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/)',
    difficulty: 'easy',
    tags: ['kubeconfig', 'kubectl', 'authentication'],
  },
  {
    id: 'cka-041',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'What is the purpose of the kube-controller-manager?',
    options: [
      'To store cluster data',
      'To schedule pods to nodes',
      'To expose the Kubernetes API',
      'To run controller loops that regulate cluster state',
    ],
    correctAnswer: 3,
    explanation:
      'The kube-controller-manager runs controller processes including the node controller, replication controller, endpoints controller, and service account controller. These controllers watch cluster state and make changes to move toward the desired state.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/overview/components/#kube-controller-manager)',
    difficulty: 'medium',
    tags: ['architecture', 'control-plane', 'controllers'],
  },
  {
    id: 'cka-042',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you check if the API server is accessible?',
    options: ['kubectl cluster-info', 'kubectl get cs', 'kubectl api-versions', 'All of the above'],
    correctAnswer: 3,
    explanation:
      'All these commands can verify API server accessibility. kubectl cluster-info shows cluster endpoints, kubectl get cs (deprecated) shows component status, and kubectl api-versions lists available API versions.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cluster-info/)',
    difficulty: 'easy',
    tags: ['architecture', 'apiserver', 'kubectl'],
  },
  {
    id: 'cka-043',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'What happens to the cluster if etcd becomes unavailable?',
    options: [
      'Running pods continue but no new operations can be performed',
      'All pods are immediately terminated',
      'The cluster automatically fails over to backup',
      'Only the control plane is affected',
    ],
    correctAnswer: 0,
    explanation:
      'If etcd is unavailable, existing workloads continue running but the control plane cannot process new requests. No new pods can be scheduled, and existing resources cannot be modified.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/)',
    difficulty: 'medium',
    tags: ['etcd', 'architecture', 'high-availability'],
  },
  {
    id: 'cka-044',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you configure kubectl to use a different context?',
    options: [
      'kubectl config set-context',
      'kubectl config use-context <context-name>',
      'kubectl context switch',
      'kubectl set context',
    ],
    correctAnswer: 1,
    explanation:
      'kubectl config use-context switches to a different context defined in the kubeconfig file. A context combines a cluster, user, and namespace into a named configuration.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_config/kubectl_config_use-context/)',
    difficulty: 'easy',
    tags: ['kubectl', 'kubeconfig', 'context'],
  },
  {
    id: 'cka-045',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'Which certificate is used by the kubelet to authenticate to the API server?',
    options: [
      'admin.conf certificate',
      'kubelet client certificate',
      'etcd server certificate',
      'front-proxy certificate',
    ],
    correctAnswer: 1,
    explanation:
      'The kubelet uses a client certificate to authenticate to the API server. This certificate is typically located at /var/lib/kubelet/pki/ and can be rotated automatically.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/setup/best-practices/certificates/)',
    difficulty: 'hard',
    tags: ['security', 'certificates', 'kubelet'],
  },
  {
    id: 'cka-046',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you create a new namespace in Kubernetes?',
    options: [
      'kubectl create namespace <name>',
      'kubectl new namespace <name>',
      'kubectl namespace create <name>',
      'kubectl init namespace <name>',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl create namespace creates a new namespace. You can also use kubectl create ns as a shorthand. Alternatively, apply a namespace YAML manifest.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/#creating-a-new-namespace)',
    difficulty: 'easy',
    tags: ['namespace', 'kubectl', 'basics'],
  },
  {
    id: 'cka-047',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'What is the purpose of the --dry-run=client flag in kubectl?',
    options: [
      'To simulate network latency',
      'To execute the command on a test cluster',
      'To validate and print the resource without creating it',
      'To run the command with reduced permissions',
    ],
    correctAnswer: 2,
    explanation:
      '--dry-run=client processes the command locally without sending it to the server. Combined with -o yaml, it is useful for generating resource manifests without actually creating resources.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/)',
    difficulty: 'easy',
    tags: ['kubectl', 'dry-run', 'manifests'],
  },
  {
    id: 'cka-048',
    domain: 'Cluster Architecture, Installation & Configuration',
    question: 'How do you generate a join token for adding new nodes to a kubeadm cluster?',
    options: [
      'kubeadm init phase token',
      'kubeadm token create',
      'kubectl create token',
      'kubeadm generate token',
    ],
    correctAnswer: 1,
    explanation:
      'kubeadm token create generates a new bootstrap token. Use --print-join-command to output a complete join command that can be run on worker nodes.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-token/)',
    difficulty: 'medium',
    tags: ['kubeadm', 'tokens', 'cluster-management'],
  },

  // ============================================
  // DOMAIN: Services & Networking (20%) - 12 questions
  // ============================================
  {
    id: 'cka-049',
    domain: 'Services & Networking',
    question: 'Which Service type exposes the Service on each Node IP at a static port?',
    options: ['LoadBalancer', 'ClusterIP', 'NodePort', 'ExternalName'],
    correctAnswer: 2,
    explanation:
      'NodePort exposes the Service on each node IP at a static port (the NodePort). Traffic to the NodePort is routed to the Service. The range is typically 30000-32767.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)',
    difficulty: 'easy',
    tags: ['services', 'nodeport', 'networking'],
  },
  {
    id: 'cka-050',
    domain: 'Services & Networking',
    question: 'What is the purpose of an Ingress controller?',
    options: [
      'To implement the rules defined in Ingress resources',
      'To manage NetworkPolicies',
      'To create LoadBalancer services',
      'To configure CoreDNS',
    ],
    correctAnswer: 0,
    explanation:
      'An Ingress controller watches Ingress resources and configures the underlying load balancer or proxy to implement the routing rules. Common controllers include NGINX, Traefik, and HAProxy.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)',
    difficulty: 'medium',
    tags: ['ingress', 'networking', 'load-balancing'],
  },
  {
    id: 'cka-051',
    domain: 'Services & Networking',
    question:
      'How do you create an Ingress resource that routes traffic to different services based on the URL path?',
    options: [
      'Configure path-based routing rules in the Ingress spec',
      'Create separate Ingress resources for each path',
      'Use NetworkPolicies with path selectors',
      'Use multiple Services with different ClusterIPs',
    ],
    correctAnswer: 0,
    explanation:
      'Ingress resources support path-based routing using the spec.rules[].http.paths[] field. Each path can route to a different backend service, enabling URL-based traffic distribution.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/#path-types)',
    difficulty: 'medium',
    tags: ['ingress', 'routing', 'networking'],
  },
  {
    id: 'cka-052',
    domain: 'Services & Networking',
    question: 'What does a NetworkPolicy with an empty podSelector match?',
    options: [
      'All pods in the namespace',
      'No pods in the namespace',
      'Only pods without labels',
      'Pods in all namespaces',
    ],
    correctAnswer: 0,
    explanation:
      'An empty podSelector ({}) in a NetworkPolicy selects all pods in the policy namespace. This is commonly used to create default deny policies for an entire namespace.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-policies)',
    difficulty: 'medium',
    tags: ['networkpolicy', 'security', 'networking'],
  },
  {
    id: 'cka-053',
    domain: 'Services & Networking',
    question: 'How do you create a default deny all ingress NetworkPolicy for a namespace?',
    options: [
      'Apply a NetworkPolicy with podSelector: {} and policyTypes: ["Ingress"]',
      'Delete all existing NetworkPolicies',
      'Set namespace annotation to deny-all',
      'Apply a NetworkPolicy with empty ingress rules',
    ],
    correctAnswer: 0,
    explanation:
      'A default deny ingress policy uses podSelector: {} to select all pods and policyTypes: ["Ingress"] with no ingress rules. This blocks all incoming traffic unless explicitly allowed by another policy.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/network-policies/#default-deny-all-ingress-traffic)',
    difficulty: 'hard',
    tags: ['networkpolicy', 'security', 'ingress'],
  },
  {
    id: 'cka-054',
    domain: 'Services & Networking',
    question: 'What is CoreDNS used for in Kubernetes?',
    options: [
      'Container networking',
      'Service discovery and DNS resolution',
      'Load balancing',
      'Certificate management',
    ],
    correctAnswer: 1,
    explanation:
      'CoreDNS provides DNS-based service discovery in Kubernetes. It resolves service names to ClusterIPs, enabling pods to communicate using DNS names instead of IP addresses.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/administer-cluster/coredns/)',
    difficulty: 'easy',
    tags: ['dns', 'coredns', 'service-discovery'],
  },
  {
    id: 'cka-055',
    domain: 'Services & Networking',
    question: 'How do you expose a Deployment as a ClusterIP Service using kubectl?',
    options: [
      'kubectl expose deployment <name> --port=<port> --target-port=<targetPort>',
      'kubectl service create <name>',
      'kubectl create service clusterip <name> --tcp=<port>:<targetPort>',
      'kubectl network expose <name>',
    ],
    correctAnswer: 0,
    explanation:
      'kubectl expose creates a Service for a Deployment, ReplicaSet, or Pod. Specify --port for the Service port and --target-port for the container port. ClusterIP is the default type.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/)',
    difficulty: 'easy',
    tags: ['services', 'kubectl', 'expose'],
  },
  {
    id: 'cka-056',
    domain: 'Services & Networking',
    question: 'What is the FQDN format for a Service in Kubernetes?',
    options: [
      '<service-name>.<namespace>.svc.cluster.local',
      '<namespace>.<service-name>.local',
      '<service-name>.cluster.local',
      '<service-name>.<namespace>',
    ],
    correctAnswer: 0,
    explanation:
      'The fully qualified domain name for a Service is <service-name>.<namespace>.svc.cluster.local. You can use shorter forms like <service-name> within the same namespace or <service-name>.<namespace> across namespaces.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/)',
    difficulty: 'medium',
    tags: ['dns', 'services', 'networking'],
  },
  {
    id: 'cka-057',
    domain: 'Services & Networking',
    question: 'What happens when you set externalTrafficPolicy: Local on a NodePort Service?',
    options: [
      'Traffic is routed only through the local node, preserving client IP',
      'Traffic is distributed across all nodes equally',
      'The Service becomes accessible only from within the cluster',
      'Load balancing is disabled',
    ],
    correctAnswer: 0,
    explanation:
      'externalTrafficPolicy: Local routes traffic only to pods on the local node, avoiding an extra network hop. This preserves the client source IP but may cause uneven load distribution.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/#preserving-the-client-source-ip)',
    difficulty: 'hard',
    tags: ['services', 'networking', 'traffic-policy'],
  },
  {
    id: 'cka-058',
    domain: 'Services & Networking',
    question: 'Which CNI plugin feature enables NetworkPolicy enforcement?',
    options: [
      'IP address management (IPAM)',
      'Network policy support in the CNI plugin',
      'Service mesh integration',
      'Container runtime interface',
    ],
    correctAnswer: 1,
    explanation:
      'NetworkPolicy enforcement requires a CNI plugin that supports it. Not all CNI plugins support NetworkPolicies. Calico, Cilium, and Weave Net support NetworkPolicies, while Flannel does not by default.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/cluster-administration/networking/#how-to-implement-the-kubernetes-network-model)',
    difficulty: 'medium',
    tags: ['cni', 'networkpolicy', 'networking'],
  },
  {
    id: 'cka-059',
    domain: 'Services & Networking',
    question: 'How do you configure an Ingress to use TLS?',
    options: [
      'Add a TLS annotation to the Service',
      'Specify tls section in the Ingress with secretName containing the certificate',
      'Configure TLS in the NetworkPolicy',
      'Enable TLS in CoreDNS configuration',
    ],
    correctAnswer: 1,
    explanation:
      'Configure TLS in the Ingress spec.tls section, specifying hosts and a secretName containing the TLS certificate and key. The Ingress controller handles TLS termination.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/#tls)',
    difficulty: 'medium',
    tags: ['ingress', 'tls', 'security'],
  },
  {
    id: 'cka-060',
    domain: 'Services & Networking',
    question: 'What is the purpose of the Endpoints object in Kubernetes?',
    options: [
      'To track the IP addresses of Pods backing a Service',
      'To configure load balancer health checks',
      'To store TLS certificates',
      'To define external DNS entries',
    ],
    correctAnswer: 0,
    explanation:
      'Endpoints track the IP addresses and ports of Pods that match a Service selector. When Pods are added or removed, the Endpoints object is automatically updated by the endpoints controller.\n\nLearn more: [Official Documentation](https://kubernetes.io/docs/concepts/services-networking/service/#endpoints)',
    difficulty: 'medium',
    tags: ['services', 'endpoints', 'networking'],
  },
];

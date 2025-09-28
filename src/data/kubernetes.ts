export const k8sIntro =
  "Kubernetes is my playground for learning real production ergonomics: controllers, operators, manifests, observability, and release workflows.";

export const certs = [
  {
    key: "cka",
    title: "Certified Kubernetes Administrator (CKA)",
    subtitle: "in progress",
    notes: [
      "Practice clusters with k3d/kind",
      "Troubleshooting drills: pods, networking, storage",
      "Imperative commands and YAML speed",
    ],
  },
  {
    key: "ckad",
    title: "Certified Kubernetes Application Developer (CKAD)",
    subtitle: "planned",
    notes: [
      "Designing apps for k8s runtime",
      "Config, secrets, probes, and policy",
    ],
  },
  {
    key: "kcna",
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    subtitle: "completed (mock)",
    notes: [
      "Core concepts across CNCF landscape",
      "Containers, scheduling, and security basics",
    ],
  },
] as const;

export const k8sProjects = [
  {
    title: "Prometheus stack on k3d",
    href: "#",
    description: "Opinionated manifests for Prom + Grafana + exporters on a tiny cluster.",
    technologies: ["Kubernetes", "Prometheus", "Grafana"],
    status: "previous project",
  },
  {
    title: "Image patch pipeline",
    href: "#",
    description: "Patching and relabeling multi-arch images with SBOMs and provenance.",
    technologies: ["Containers", "SBOM", "CI/CD"],
    status: "previous project",
  },
] as const;

export const workingProject = {
  title: "Cluster housekeeping operator",
  href: "#",
  description:
    "Controller that tidies old jobs, rotates secrets, and exposes metrics. Focus on reconciliation and safety.",
  technologies: ["Go", "controller-runtime", "Kubernetes"],
  status: "currently working on",
};

export const learningNow = [
  "controller-runtime patterns",
  "multi-arch builds + registry auth",
  "prometheus rules, alerts, and SLOs",
] as const;

export const blogsDigging = [
  "The Kubernetes Blog",
  "Robusta.dev – K8s best practices",
  "CNCF TAG Observability notes",
] as const;

export const homelab = {
  title: "Dorm-room homelab",
  goals:
    "Run a reliable personal platform to learn real ops: automate cluster provisioning, observability dashboards, GitOps deployments, and safe multi-tenant experiments.",
  config: [
    "k3d on a small x86 node + one ARM SBC",
    "Traefik ingress, cert-manager (staging)",
    "Prometheus + Grafana, loki for logs",
    "Longhorn for storage (experimenting)",
  ],
} as const;


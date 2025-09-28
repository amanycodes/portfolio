export type FavoritePR = {
  title: string;
  url: string;
  loc: number;
  repo: string;
};

export type OrgConfig = {
  key: string;
  label: string;
  org: string;
  role: string;
  logo?: "github" | "globe"; // placeholder logo id
};

export const GITHUB_USER = "amanycodes";

export const ORGS: OrgConfig[] = [
  {
    key: "copacetic",
    label: "CNCF Copacetic",
    org: "project-copacetic",
    role: "LFX Mentee",
    logo: "github",
  },
  {
    key: "prometheus",
    label: "CNCF Prometheus",
    org: "prometheus",
    role: "OSS Contributor",
    logo: "github",
  },
  {
    key: "prequel",
    label: "Prequel",
    org: "prequel",
    role: "OSS Contributor",
    logo: "github",
  },
];

export const intro =
  "I enjoy contributing to open source because it sharpens my thinking and lets me collaborate with great engineers. Lately I’ve been diving into Golang, Docker internals, observability stacks, CI/CD, and all the YAML in between.";

export const techList = [
  "Golang",
  "Docker",
  "Kubernetes",
  "Observability",
  "CI/CD",
  "YAML",
] as const;

// Hand-picked favorite PRs where I learned the most (mock content)
export const favorites: FavoritePR[] = [
  {
    title: "Bulk image patch pipeline + logs table",
    url: "https://github.com/project-copacetic/copacetic/pull/0001",
    repo: "project-copacetic/copacetic",
    loc: 420,
  },
  {
    title: "Improve Prom config + scrape defaults",
    url: "https://github.com/prometheus/prometheus/pull/0002",
    repo: "prometheus/prometheus",
    loc: 185,
  },
  {
    title: "Docs + examples for multi-arch builds",
    url: "https://github.com/project-copacetic/copacetic/pull/0003",
    repo: "project-copacetic/copacetic",
    loc: 96,
  },
  {
    title: "Operator prototype for image patch orchestrations",
    url: "https://github.com/prequel/repo/pull/0004",
    repo: "prequel/repo",
    loc: 238,
  },
];

export const golangIntro =
  "Notes, experiments and builds while learning and using Go — from language internals to concurrency, tooling, containers and server design.";

export const learningTopics = [
  "Advanced concurrency patterns (worker pools, pipelines)",
  "Context cancellation best practices",
  "HTTP middleware, rate limiting, observability",
  "Go module/tooling deep dives",
] as const;

export const booksILiked = [
  "The Go Programming Language (Donovan & Kernighan)",
  "Concurrency in Go (Katherine Cox-Buday)",
  "100 Go Mistakes and How to Avoid Them",
] as const;

export const featuredProgress = {
  title: "API gateway for LLMs in Go",
  blurb:
    "Building a lightweight gateway with per-model routing, request deduplication, caching and metrics. Designed for local + cloud backends.",
  percent: 55,
};

export const goProjects = [
  {
    title: "POSIX shell from Scratch in Go",
    href: "#",
    description:
      "Toy shell with parser + REPL, job control experiments, and tests.",
    technologies: ["Go", "Parser", "REPL"],
    video: "https://cdn.magicui.design/bento-grid.mp4",
    status: "previous project",
  },
  {
    title: "Distributed file server in Go",
    href: "#",
    description:
      "Chunked storage, simple replication and a gossip-like membership.",
    technologies: ["Go", "Raft-ish", "gossip"],
    image: "/nvidia.png",
    status: "previous project",
  },
] as const;

export const favoriteLibs = [
  "chi (router)",
  "zap / zerolog (logging)",
  "prometheus/client_golang",
  "go-chi/httprate",
  "spf13/cobra",
] as const;

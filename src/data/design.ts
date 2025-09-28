export const designIntro =
  "I enjoy designing interfaces that feel fast, legible, and purposeful. I’m Google UX certified and have freelanced on dashboards, landing pages, and in‑product developer tooling.";

export const credsNote = "Google UX Certificate • Freelance experience (selected)";

export const mentoring = {
  title: "HiQs & UX mentoring",
  description:
    "I run lightweight UX sessions: rapid heuristics, wireframe critiques, and design dev‑handoff audits. I focus on clarity, hierarchy, and motion that serves the task.",
  highlights: ["heuristic reviews", "wireframe clinics", "dev handoff"],
  image: "/buildspace.jpg", // placeholder
} as const;

export const designProjects = [
  {
    title: "Admin dashboard redesign",
    href: "#",
    description: "Re‑worked IA and visual hierarchy for a dense metrics surface.",
    image: "/nvidia.png",
    tags: ["dashboard", "ui/ux", "design system"],
    status: "case study",
    links: [{ type: "Original", href: "#", icon: null }],
  },
  {
    title: "Marketing landing variations",
    href: "#",
    description: "Swift A/B hero, testimonial, and pricing sections for conversions.",
    image: "/mitremedia.png",
    tags: ["landing", "a/b", "components"],
    status: "prototype",
    links: [{ type: "Original", href: "#", icon: null }],
  },
] as const;

export const designCTAs = {
  behance: "https://www.behance.net/",
  dribbble: "https://dribbble.com/",
} as const;


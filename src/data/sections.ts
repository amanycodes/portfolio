export type LinkItem = { title: string; href: string };

export const OPEN_SOURCE = {
  blurb:
    "selected open source work, issues, and PRs. mock content for now.",
  items: [
    { title: "copacetic bulk patcher", href: "#" },
    { title: "prometheus docs tweak", href: "#" },
    { title: "k8s operator example", href: "#" },
  ] as LinkItem[],
} as const;

export const GOLANG = {
  blurb: "golang notes, toys, and libs (mock)",
  items: [
    { title: "posix shell in go", href: "#" },
    { title: "distributed file server", href: "#" },
  ],
} as const;

export const KUBERNETES = {
  blurb: "kubernetes tips, manifests, and operators (mock)",
  items: [
    { title: "prom stack on k3d", href: "#" },
    { title: "multi-arch builds", href: "#" },
  ],
} as const;

export const DESIGN = {
  blurb: "design experiments and UI kits (mock)",
  items: [
    { title: "pixel header concepts", href: "#" },
    { title: "mono blog layouts", href: "#" },
  ],
} as const;

export const GEAR = {
  blurb: "stuff i use (mock)",
  categories: {
    dev: ["thinkpad x1", "arch linux", "neovim"],
    audio: ["ath-m50x", "usb interface"],
    desk: ["mechanical keyboard", "mx master"],
  },
} as const;


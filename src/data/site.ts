export type NavItem = { label: string; href: string; external?: boolean };
export type SiteConfig = {
  title: string;
  cover: { color?: string; image?: string };
  nav: NavItem[];
};

export const SITE: SiteConfig = {
  title: "daitya",
  cover: {
    // Use an image banner if available; fallback color kept for safety
    image: "/cover.jpeg",
    color: "#14b8a6",
  },
  nav: [
    { label: "home", href: "/" },
    { label: "blogs", href: "https://daitya.bearblog.dev/", external: true },
    { label: "opensource", href: "/opensource" },
    { label: "golang", href: "/golang" },
    { label: "kubernetes", href: "/kubernetes" },
    { label: "design", href: "/design" },
    { label: "gear", href: "/gear" },
  ],
};

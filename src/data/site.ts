export type NavItem = { label: string; href: string; external?: boolean };
export type SiteConfig = {
  title: string;
  cover: { color: string };
  nav: NavItem[];
};

export const SITE: SiteConfig = {
  title: "daitya",
  cover: {
    // Placeholder solid color (teal-ish). Replace later with an image if desired
    color: "#14b8a6", // tailwind teal-500
  },
  nav: [
    { label: "home", href: "/" },
    { label: "blogs", href: "https://example.com/blogs", external: true },
    { label: "opensource", href: "/opensource" },
    { label: "golang", href: "/golang" },
    { label: "kubernetes", href: "/kubernetes" },
    { label: "design", href: "/design" },
    { label: "gear", href: "/gear" },
  ],
};

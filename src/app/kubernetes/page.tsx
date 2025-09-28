import BlurFade from "@/components/magicui/blur-fade";
import { KUBERNETES } from "@/data/sections";
const BLUR_FADE_DELAY = 0.04;

export const metadata = { title: "Kubernetes" };

export default function KubernetesPage() {
  return (
    <main className="space-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold tracking-wider">kubernetes</h1>
      </BlurFade>
      <p className="text-sm text-muted-foreground">{KUBERNETES.blurb}</p>
      <ul className="list-disc pl-6 space-y-2">
        {KUBERNETES.items.map((i) => (
          <li key={i.title}>
            <a href={i.href} className="underline underline-offset-4">
              {i.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}


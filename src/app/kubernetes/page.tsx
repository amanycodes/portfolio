import BlurFade from "@/components/magicui/blur-fade";
import MultiTabCards from "@/components/multi-tab-cards";
import TwoTabCards from "@/components/two-tab-cards";
import { ProjectCard } from "@/components/project-card";
import {
  blogsDigging,
  certs,
  homelab,
  k8sIntro,
  k8sProjects,
  learningNow,
  workingProject,
} from "@/data/kubernetes";

const BLUR_FADE_DELAY = 0.04;

export const metadata = { title: "Kubernetes" };

export default function KubernetesPage() {
  return (
    <main className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold tracking-wider">kubernetes</h1>
      </BlurFade>
      <p className="text-sm text-muted-foreground max-w-prose">{k8sIntro}</p>

      {/* Certs horizontal tabs */}
      <MultiTabCards
        tabs={certs.map((c) => ({
          key: c.key,
          title: c.title,
          subtitle: c.subtitle,
          content: (
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {c.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          ),
        }))}
      />

      {/* Working project card */}
      <section className="max-w-[900px]">
        <ProjectCard
          href={workingProject.href}
          title={workingProject.title}
          description={workingProject.description}
          tags={workingProject.technologies}
          status={workingProject.status}
        />
      </section>

      {/* K8s projects as cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[900px]">
        {k8sProjects.map((p) => (
          <ProjectCard
            key={p.title}
            href={p.href}
            title={p.title}
            description={p.description}
            tags={p.technologies}
            status={(p as any).status}
          />
        ))}
      </section>

      {/* Learning and blogs two-tab */}
      <TwoTabCards
        tabs={[
          {
            key: "learning",
            title: "currently learning",
            content: (
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {learningNow.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ),
          },
          {
            key: "blogs",
            title: "blogs I'm digging into",
            content: (
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {blogsDigging.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ),
          },
        ]}
      />

      {/* Homelab config tab */}
      <MultiTabCards
        tabs={[
          {
            key: "homelab",
            title: homelab.title,
            subtitle: "config + goals",
            content: (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{homelab.goals}</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  {homelab.config.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            ),
          },
        ]}
      />
    </main>
  );
}

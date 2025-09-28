import BlurFade from "@/components/magicui/blur-fade";
import TwoTabCards from "@/components/two-tab-cards";
import { ProjectCard } from "@/components/project-card";
import {
  booksILiked,
  featuredProgress,
  goProjects,
  golangIntro,
  learningTopics,
  favoriteLibs,
} from "@/data/golang";
import { Badge } from "@/components/ui/badge";

const BLUR_FADE_DELAY = 0.04;

export const metadata = { title: "Golang" };

export default function GolangPage() {
  return (
    <main className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold tracking-wider">golang</h1>
      </BlurFade>
      <p className="text-sm text-muted-foreground max-w-prose">{golangIntro}</p>

      {/* Featured active project with progress */}
      <section className="border rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{featuredProgress.title}</h2>
          <span className="text-xs text-muted-foreground">{featuredProgress.percent}% complete</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{featuredProgress.blurb}</p>
        <div className="mt-3 h-2 w-full bg-secondary rounded">
          <div
            className="h-full bg-primary rounded"
            style={{ width: `${featuredProgress.percent}%` }}
          ></div>
        </div>
      </section>

      {/* Projects grid (2 per row) – previous projects */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[900px]">
        {goProjects.slice(0, 2).map((p) => (
          <ProjectCard
            key={p.title}
            href={p.href}
            title={p.title}
            description={p.description}
            tags={p.technologies}
            image={(p as any).image}
            video={(p as any).video}
            status={(p as any).status}
          />
        ))}
      </section>

      {/* Two tab horizontal grid */}
      <TwoTabCards
        tabs={[
          {
            key: "learning",
            title: "currently learning",
            content: (
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {learningTopics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ),
          },
          {
            key: "books",
            title: "books I enjoyed",
            content: (
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {booksILiked.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ),
          },
        ]}
      />

      {/* Favorite Go libraries */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">favorite go libraries</h2>
        <div className="flex flex-wrap gap-2">
          {favoriteLibs.map((lib) => (
            <Badge key={lib} variant="secondary">{lib}</Badge>
          ))}
        </div>
      </section>
    </main>
  );
}

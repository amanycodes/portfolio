import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  designIntro,
  credsNote,
  mentoring,
  designProjects,
  designCTAs,
} from "@/data/design";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export const metadata = { title: "Design" };

export default function DesignPage() {
  return (
    <main className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold tracking-wider">design</h1>
      </BlurFade>
      <p className="text-sm text-muted-foreground max-w-prose">{designIntro}</p>
      <div className="text-xs text-muted-foreground">{credsNote}</div>

      {/* HiQs & Mentoring section (split card) */}
      <section className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-5 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{mentoring.title}</h2>
            <p className="text-sm text-muted-foreground">{mentoring.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {mentoring.highlights.map((h) => (
                <Badge key={h} variant="secondary">{h}</Badge>
              ))}
            </div>
          </div>
          <div className="relative min-h-[220px]">
            <Image src={mentoring.image} alt={mentoring.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* UX Experience (from work history) */}
      <section id="experience">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="text-lg font-semibold">experience</h2>
          </BlurFade>
          {DATA.work
            .filter((w) => ["Cloudraft", "Dataplay"].includes(w.company))
            .map((work, id) => (
              <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 3 + id * 0.05}>
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
        </div>
      </section>

      {/* Design projects */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">selected work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[1000px]">
          {designProjects.map((p) => (
            <ProjectCard
              key={p.title}
              href={p.href}
              title={p.title}
              description={p.description}
              tags={p.tags}
              image={p.image}
              links={p.links}
              status={p.status}
            />
          ))}
        </div>
      </section>

      {/* CTAs */}
      <section className="flex gap-3">
        <Link href={designCTAs.behance} className={buttonVariants({ variant: "default" })}>
          Behance
        </Link>
        <Link href={designCTAs.dribbble} className={buttonVariants({ variant: "secondary" })}>
          Dribbble
        </Link>
      </section>
    </main>
  );
}

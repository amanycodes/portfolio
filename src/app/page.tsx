import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-6 flex justify-between items-center">
            <div className="flex-col flex flex-1 space-y-3">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-4xl font-bold tracking-wider sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`hi, i'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col items-center gap-3">
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              <Link
                href={DATA.resumeUrl || "#"}
                className={buttonVariants({ variant: "secondary" })}
              >
                Resume
              </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">whoami</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work
            .filter((work) => !/designer/i.test(work.title))
            .map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
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
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <details className="border rounded-md">
              <summary className="cursor-pointer px-3 py-2 text-sm font-semibold">UX Experience</summary>
              <div className="p-3 space-y-3">
                {DATA.work
                  .filter((work) => /designer/i.test(work.title))
                  .map((work) => (
                    <ResumeCard
                      key={work.company}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                    />
                  ))}
              </div>
            </details>
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  i'm currently working on
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  what i'm hacking on right now
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A snapshot of current projects, experiments, and ongoing learning.
                </p>
              </div>
            </div>
          </BlurFade>
          {/* Feature one current project */}
          <div className="max-w-[800px] mx-auto">
            {DATA.projects[0] && (
              <BlurFade delay={BLUR_FADE_DELAY * 12}>
                <ProjectCard
                  href={DATA.projects[0].href}
                  title={DATA.projects[0].title}
                  description={DATA.projects[0].description}
                  tags={DATA.projects[0].technologies}
                  image={DATA.projects[0].image}
                  video={DATA.projects[0].video}
                  links={DATA.projects[0].links}
                />
              </BlurFade>
            )}
          </div>

          {/* Learning tab: Kubernetes journey */}
          <div className="max-w-[800px] mx-auto grid grid-cols-1 gap-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">CKA tryhard — kubernetes journey</h3>
                <span className="text-xs text-muted-foreground">42% complete</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                running a small homelab in my dorm room and piecing together a
                working k8s environment. lots of YAML. occasional chaos.
              </p>
              <div className="mt-3 h-2 w-full bg-secondary rounded">
                <div className="h-full w-[42%] bg-primary rounded"></div>
              </div>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                <li>k3d cluster, prometheus + grafana stack</li>
                <li>multi-arch image builds and SBOMs</li>
                <li>operators and controllers in Go (learning)</li>
              </ul>
            </div>

            {/* Current focus */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">current focus</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>kubernetes</Badge>
                <Badge>golang integration</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hackathons section removed per user request */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-wider">get in touch</h2>
              <div className="flex justify-center gap-3">
                <Link
                  href={DATA.contact.social.X.url}
                  className={buttonVariants({ variant: "default" })}
                >
                  X / Twitter
                </Link>
                <Link
                  href={`mailto:amanycodes@gmail.com`}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Email
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

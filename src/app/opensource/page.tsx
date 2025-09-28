import BlurFade from "@/components/magicui/blur-fade";
import { favorites, GITHUB_USER, ORGS, intro, techList } from "@/data/oss";
import { fetchOrgPRs } from "@/lib/github";
import OSSLedger from "@/components/oss-tabs";
import { Badge } from "@/components/ui/badge";
const BLUR_FADE_DELAY = 0.04;

export const metadata = { title: "Open Source" };

export default async function OpenSourcePage() {
  // Fetch PRs for each org (server-side)
  const results = await Promise.all(
    ORGS.map(async (o) => ({
      org: o,
      prs: await fetchOrgPRs(GITHUB_USER, o.org),
    }))
  );

  const orgData = results.map(({ org, prs }) => ({
    key: org.key,
    label: org.label,
    role: org.role,
    org: org.org,
    logo: org.logo ?? "github",
    prCount: prs.length,
    link: `https://github.com/search?q=${encodeURIComponent(
      `is:pr author:${GITHUB_USER} org:${org.org}`
    )}`,
    items: prs.map((p) => ({
      title: p.title,
      date: new Date(p.created_at).toLocaleDateString(),
      state: p.state,
      repo: p.repo,
      number: p.number,
    })),
  }));

  return (
    <main className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold tracking-wider">open source</h1>
      </BlurFade>
      <p className="text-sm text-muted-foreground max-w-prose">{intro}</p>
      <div className="flex flex-wrap gap-2">
        {techList.map((t) => (
          <Badge key={t} variant="secondary">{t}</Badge>
        ))}
      </div>

      {/* Favorites first */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">pull requests I loved working on</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {favorites.map((f, idx) => (
            <div key={idx} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold max-w-[80%]">{f.title}</h3>
                <a
                  href={f.url}
                  target="_blank"
                  className="underline text-xs"
                >
                  view PR
                </a>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {f.repo} • {f.loc} LOC
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs with dropdown timelines */}
      <OSSLedger orgs={orgData} />
    </main>
  );
}

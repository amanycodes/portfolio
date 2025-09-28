"use client";

import { useState } from "react";
import { Icons } from "@/components/icons";

type OrgTimeline = {
  key: string;
  label: string;
  role: string;
  org: string;
  logo?: "github" | "globe";
  prCount: number;
  link: string; // link to GitHub search page
  items: { title: string; date: string; repo: string; state: string; number: number }[];
};

export default function OSSLedger({ orgs }: { orgs: OrgTimeline[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const renderLogo = (name?: string) => {
    switch (name) {
      case "github":
        return <Icons.github className="size-5" />;
      default:
        return <Icons.globe className="size-5" />;
    }
  };

  return (
    <section className="space-y-3">
      {orgs.map((o) => {
        const open = expanded === o.key;
        return (
          <div key={o.key} className="border rounded-lg overflow-hidden">
            <div
              className={
                "flex items-center gap-4 p-4 cursor-pointer transition-colors bg-secondary/40 hover:bg-secondary/60"
              }
              onClick={() => setExpanded(open ? null : o.key)}
            >
              <div className="text-sm font-semibold w-16 text-center">
                {o.prCount} PRs
              </div>
              <div className="flex items-center gap-3 flex-1">
                {renderLogo(o.logo)}
                <div>
                  <div className="font-semibold leading-tight">{o.label}</div>
                  <div className="text-xs text-muted-foreground">{o.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={o.link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="underline text-xs"
                >
                  view on github
                </a>
                <button
                  className="px-2 py-1 rounded-md border text-xs hover:bg-background"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpanded(open ? null : o.key);
                  }}
                >
                  {open ? "hide timeline" : "show timeline"}
                </button>
              </div>
            </div>

            {open && (
              <ul className="mb-2 ml-4 divide-y divide-dashed border-l">
                {o.items.map((it) => (
                  <li key={it.number} className="relative ml-10 py-3">
                    <div className="absolute -left-16 top-3 flex items-center justify-center rounded-full">
                      <div className="size-3 rounded-full bg-primary" />
                    </div>
                    <div className="flex flex-1 flex-col justify-start gap-1">
                      <time className="text-xs text-muted-foreground">{it.date}</time>
                      <h3 className="font-semibold leading-none text-sm">{it.title}</h3>
                      <p className="text-xs text-muted-foreground">{it.repo} • {it.state}</p>
                    </div>
                  </li>
                ))}
                {o.items.length === 0 && (
                  <li className="py-3 text-sm text-muted-foreground ml-10">No pull requests found (or rate limited).</li>
                )}
              </ul>
            )}
          </div>
        );
      })}
    </section>
  );
}

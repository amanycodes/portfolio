"use client";

import { useState } from "react";

type Tab = {
  key: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
};

export default function MultiTabCards({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.key);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {tabs.map((t) => {
          const selected = t.key === active;
          return (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={
                "text-left border rounded-lg p-4 transition-colors hover:bg-secondary/60 " +
                (selected ? "bg-secondary/60 border-primary" : "bg-secondary/40")
              }
            >
              <div className="text-base font-semibold">{t.title}</div>
              {t.subtitle && (
                <div className="text-xs text-muted-foreground mt-1">{t.subtitle}</div>
              )}
            </button>
          );
        })}
      </div>
      <div className="border rounded-lg p-4">
        {tabs.find((t) => t.key === active)?.content}
      </div>
    </div>
  );
}


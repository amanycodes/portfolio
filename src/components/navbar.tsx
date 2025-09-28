"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="mb-10 sticky top-0 z-40">
      {/* Cover image (replaces solid color) */}
      <div className="relative w-full h-28 overflow-hidden">
        {SITE.cover.image ? (
          <Image
            src={SITE.cover.image}
            alt={`${SITE.title} cover`}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full" style={{ backgroundColor: SITE.cover.color }} />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 mx-auto max-w-6xl h-full flex items-center px-4">
          <span className="text-3xl font-bold tracking-wider lowercase">{SITE.title}</span>
        </div>
      </div>
      {/* Nav row */}
      <nav className="w-full bg-black border-b border-border">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex flex-wrap gap-6 py-3 text-sm">
            {SITE.nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className={cn(
                    "underline underline-offset-4 decoration-muted-foreground/60 hover:decoration-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

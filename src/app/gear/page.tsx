import BlurFade from "@/components/magicui/blur-fade";
import { GEAR } from "@/data/sections";
const BLUR_FADE_DELAY = 0.04;

export const metadata = { title: "Gear" };

export default function GearPage() {
  const { categories } = GEAR;
  return (
    <main className="space-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold tracking-wider">gear</h1>
      </BlurFade>
      <p className="text-sm text-muted-foreground">{GEAR.blurb}</p>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(categories).map(([name, items]) => (
          <div key={name} className="border rounded-md p-4">
            <h2 className="text-base font-semibold mb-2">{name}</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}


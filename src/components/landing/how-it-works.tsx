import { Reveal } from "@/components/landing/reveal";
import { SectionBadge } from "@/components/landing/section-badge";

const steps = [
  {
    n: "01",
    title: "Set up once",
    body: "One command installs, starts PostgreSQL, applies migrations, and checks the environment.",
    block:
      "$ npm run setup\n✓ PostgreSQL healthy\n✓ Migrations applied\n✓ Doctor: 6 checks passed",
  },
  {
    n: "02",
    title: "Prompt your agent",
    body: "Open the project in your AI editor and describe the smallest useful feature.",
    block:
      "Read AGENTS.md and the\nproject skills, then build\nthe smallest useful\nfeature end to end.",
  },
  {
    n: "03",
    title: "Extend with skills",
    body: "Project skills carry the conventions for setup, features, database work, and variants.",
    block:
      ".agents/skills/\n  starter-setup/\n  build-feature/\n  dev-database/\n  create-variant/",
  },
  {
    n: "04",
    title: "Ship features",
    body: "Routes, APIs, and screens already follow one pattern you can copy for anything new.",
    block:
      "/          landing\n/sign-up   accounts\n/app       your feature\n/admin     roles",
  },
];

export function HowItWorks() {
  return (
    <section className="border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionBadge>Setup · Prompt · Extend · Ship</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 max-w-xl text-balance text-base leading-7 text-neutral-400">
            From a fresh clone to a running app, without a setup maze.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.16]">
                <span className="font-mono text-xs text-neutral-400">
                  {step.n}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-neutral-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {step.body}
                </p>
                <pre className="mt-6 overflow-x-auto rounded-xl border border-white/[0.06] bg-neutral-950/80 p-4 font-mono text-[11px] leading-5 text-neutral-400">
                  {step.block}
                </pre>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

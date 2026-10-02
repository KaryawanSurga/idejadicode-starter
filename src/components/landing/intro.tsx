import { Bot, Database, Fingerprint } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { SectionBadge } from "@/components/landing/section-badge";

const features = [
  {
    icon: Bot,
    title: "Agent-ready docs",
    body: "AGENTS.md and project skills tell any AI editor how to set up, extend, and verify the app.",
  },
  {
    icon: Fingerprint,
    title: "Accounts included",
    body: "Email sign-up, sessions on real database tables, and roles with an admin screen.",
  },
  {
    icon: Database,
    title: "Data that grows",
    body: "PostgreSQL with Drizzle migrations, a notes example, and validation that runs on the server.",
  },
];

export function Intro() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="flex flex-col items-center text-center">
          <SectionBadge>Introduction</SectionBadge>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            What is Idejadicode?
          </h2>
          <p className="mt-4 max-w-xl text-balance text-base leading-7 text-neutral-400">
            A starter that turns plain-language ideas into working software, one
            small feature at a time.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.16]">
                <span className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Icon
                    className="size-4.5 text-neutral-300"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-[15px] font-semibold text-neutral-100">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

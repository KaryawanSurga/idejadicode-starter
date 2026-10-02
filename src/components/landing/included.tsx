import { Reveal } from "@/components/landing/reveal";

const included = [
  {
    title: "Roles and permissions",
    body: "Member by default, admin by command, and permission checks that live on the server.",
    glow: "[background:radial-gradient(90%_130%_at_50%_0%,rgba(251,132,107,0.16),transparent_70%)]",
    visual: (
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-neutral-300">
            member
          </span>
          <span className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-950">
            admin
          </span>
        </div>
        <p className="font-mono text-[11px] text-neutral-400">
          signup cannot set roles
        </p>
      </div>
    ),
  },
  {
    title: "PostgreSQL, migrated",
    body: "Drizzle schema, committed SQL migrations, and a direct migration connection for deploys.",
    glow: "[background:radial-gradient(90%_130%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]",
    visual: (
      <pre className="w-full max-w-[15rem] overflow-x-auto rounded-lg border border-white/[0.06] bg-neutral-950/70 p-3 text-left font-mono text-[10.5px] leading-4.5 text-neutral-400">
        {
          "create table notes (\n  id uuid primary key,\n  user_id text not null,\n  body text not null\n);"
        }
      </pre>
    ),
  },
  {
    title: "A working example",
    body: "Notes CRUD shows the full path: validator, service, API route, and screen. Copy it for your idea.",
    glow: "[background:radial-gradient(90%_130%_at_50%_0%,rgba(255,255,255,0.10),transparent_70%)]",
    visual: (
      <pre className="w-full max-w-[15rem] overflow-x-auto rounded-lg border border-white/[0.06] bg-neutral-950/70 p-3 text-left font-mono text-[10.5px] leading-4.5 text-neutral-400">
        {
          "GET    /api/notes\nPOST   /api/notes\nPATCH  /api/notes/:id\nDELETE /api/notes/:id"
        }
      </pre>
    ),
  },
];

export function Included() {
  return (
    <section className="border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Everything wired, nothing wasted.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-neutral-400">
            The boring parts are already done, small enough to read and real
            enough to extend.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {included.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-colors hover:border-white/[0.16]">
                <div
                  className={`relative flex h-40 items-center justify-center border-b border-white/[0.06] px-6 ${item.glow}`}
                >
                  {item.visual}
                </div>
                <div className="p-6">
                  <h3 className="text-[15px] font-semibold text-neutral-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

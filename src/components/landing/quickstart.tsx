import { Reveal } from "@/components/landing/reveal";
import { CopyCommand } from "@/components/landing/copy-command";

const commands = "npm run setup\nnpm run dev";
const firstPrompt =
  "Read AGENTS.md and use build-feature. Build the smallest useful version of: <your idea>. Each account should only see its own data.";

const steps = [
  {
    n: "01",
    title: "Run setup once",
    body: "Installs pinned dependencies, starts PostgreSQL 17, applies migrations, and checks the environment.",
  },
  {
    n: "02",
    title: "Open the app",
    body: "Start the dev server, create your account, and land in your own protected app.",
  },
  {
    n: "03",
    title: "Prompt your agent",
    body: "Open the folder in your AI editor and describe the smallest useful feature. Project skills carry the conventions.",
  },
];

export function Quickstart() {
  return (
    <section className="border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 sm:px-10 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Quickstart
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-neutral-400">
            Three steps from a fresh folder to a running app.
          </p>

          <ol className="mt-10 grid gap-7">
            {steps.map((step) => (
              <li key={step.n} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-xs text-neutral-400"
                >
                  {step.n}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-neutral-100">
                    {step.title}
                  </span>
                  <span className="mt-1 block max-w-sm text-sm leading-6 text-neutral-400">
                    {step.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950/80">
            <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-3">
              <span className="flex items-center gap-2.5">
                <span aria-hidden="true" className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/10" />
                  <span className="size-2.5 rounded-full bg-white/10" />
                  <span className="size-2.5 rounded-full bg-white/10" />
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  quickstart
                </span>
              </span>
              <CopyCommand text={commands} label="Copy commands" />
            </div>

            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 whitespace-pre">
              <span className="text-neutral-500">{"$ "}</span>
              <span className="text-neutral-100">npm run setup</span>
              <span className="text-neutral-500">
                {
                  "\n✓ PostgreSQL healthy\n✓ Migrations applied\n✓ Doctor: all checks passed\n\n"
                }
              </span>
              <span className="text-neutral-500">{"$ "}</span>
              <span className="text-neutral-100">npm run dev</span>
              <span className="text-neutral-500">
                {"\n→ http://localhost:3000"}
              </span>
            </pre>

            <div className="border-t border-white/[0.06] p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                  First prompt
                </p>
                <CopyCommand text={firstPrompt} label="Copy prompt" />
              </div>
              <pre className="mt-3 font-mono text-[12px] leading-6 whitespace-pre-wrap text-neutral-400">
                {firstPrompt}
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

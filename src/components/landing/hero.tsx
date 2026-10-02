import Link from "next/link";
import { Layers2 } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";

export function Hero({ signedIn }: { signedIn: boolean }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_55%_at_50%_0%,rgba(255,255,255,0.09),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] overflow-hidden [mask-image:linear-gradient(to_top,black_10%,transparent)]"
      >
        <div className="absolute inset-x-[-60%] bottom-[-70%] h-[180%] opacity-40 [transform:perspective(700px)_rotateX(62deg)] [transform-origin:center_bottom] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-4rem)] max-w-4xl flex-col items-center justify-center px-6 pt-24 pb-28 text-center sm:px-10">
        <Reveal>
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Ideas become code.
            <span className="block text-neutral-500">
              Full-stack, agent-ready.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-7 max-w-xl text-balance text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
            Next.js, PostgreSQL, and accounts, wired together and documented so
            AI agents can build with you.
          </p>
        </Reveal>

        <Reveal delay={0.16} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={signedIn ? "/app" : "/sign-up"}
              className="inline-flex h-11 items-center rounded-full bg-white px-7 text-[15px] font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              {signedIn ? "Open your app" : "Create your account"}
            </Link>
            {!signedIn && (
              <Link
                href="/sign-in"
                className="inline-flex h-11 items-center rounded-full border border-white/15 px-7 text-[15px] font-medium text-neutral-200 transition-colors hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                Sign in
              </Link>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.26} className="mt-20">
          <div className="relative flex flex-col items-center">
            <span
              aria-hidden="true"
              className="absolute -top-20 h-20 w-px bg-gradient-to-b from-transparent to-white/50"
            />
            <span
              aria-hidden="true"
              className="absolute -top-6 size-40 rounded-full bg-white/[0.07] blur-3xl"
            />
            <span className="relative flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.14] to-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
              <Layers2 className="size-7 text-white" aria-hidden="true" />
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-10 h-10 w-40 rounded-full bg-white/[0.05] blur-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Reveal } from "@/components/landing/reveal";

export function Closing({ signedIn }: { signedIn: boolean }) {
  return (
    <section className="border-t border-white/[0.06] py-28 sm:py-36">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center sm:px-10">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Your next idea is one command away.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 max-w-lg text-balance text-base leading-7 text-neutral-400">
            Create an account and start building on a foundation that is already
            running.
          </p>
        </Reveal>
        <Reveal delay={0.16} className="mt-9">
          <Link
            href={signedIn ? "/app" : "/sign-up"}
            className="inline-flex h-11 items-center rounded-full bg-white px-7 text-[15px] font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            {signedIn ? "Open your app" : "Create your account"}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

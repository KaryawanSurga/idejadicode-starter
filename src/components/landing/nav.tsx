import Link from "next/link";
import { Layers2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function LandingNav({ signedIn }: { signedIn: boolean }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-sm font-semibold tracking-tight text-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/40"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-white text-neutral-950">
            <Layers2 className="size-4" aria-hidden="true" />
          </span>
          <span>
            {siteConfig.name}
            <span className="ml-2 font-normal text-neutral-400">/ starter</span>
          </span>
        </Link>
        <nav className="flex items-center gap-2" aria-label="Account">
          {signedIn ? (
            <Link
              href={siteConfig.homePath}
              className="inline-flex h-9 items-center rounded-full bg-white px-5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            >
              Open your app
            </Link>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="inline-flex h-9 items-center rounded-full px-4 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                Sign in
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex h-9 items-center rounded-full bg-white px-5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Create your account
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

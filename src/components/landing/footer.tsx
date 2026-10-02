import Link from "next/link";
import { siteConfig } from "@/config/site";

export function LandingFooter() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-neutral-400 sm:flex-row sm:items-center sm:px-10">
        <span>
          {siteConfig.name} / starter
          <span className="ml-3 font-mono text-xs">
            Next.js · PostgreSQL · Better Auth
          </span>
        </span>
        <span className="flex items-center gap-6">
          <Link
            href="/sign-in"
            className="transition-colors hover:text-neutral-200"
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="transition-colors hover:text-neutral-200"
          >
            Create your account
          </Link>
        </span>
      </div>
    </footer>
  );
}

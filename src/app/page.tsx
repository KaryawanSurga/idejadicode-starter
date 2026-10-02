import { Closing } from "@/components/landing/closing";
import { LandingFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Included } from "@/components/landing/included";
import { Intro } from "@/components/landing/intro";
import { LandingNav } from "@/components/landing/nav";
import { Quickstart } from "@/components/landing/quickstart";
import { StackStrip } from "@/components/landing/stack-strip";
import { getSession } from "@/lib/session";

export default async function Home() {
  const session = await getSession();
  const signedIn = Boolean(session);

  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100">
      <LandingNav signedIn={signedIn} />
      <main id="main-content">
        <Hero signedIn={signedIn} />
        <StackStrip />
        <Intro />
        <HowItWorks />
        <Quickstart />
        <Included />
        <Closing signedIn={signedIn} />
      </main>
      <LandingFooter />
    </div>
  );
}

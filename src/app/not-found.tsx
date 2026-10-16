import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Spectrum } from "@/components/ui/Spectrum";
import { nav } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="on-dark relative isolate flex min-h-[80svh] items-center overflow-hidden bg-navy text-white">
      <Spectrum bars={41} className="absolute -right-6 bottom-0 -z-10 h-2/3 w-[min(34rem,70vw)] justify-end text-ocean-500/30" />
      <div className="container-site py-40">
        <p className="text-sm font-semibold text-signal">Error 404</p>
        <h1 className="mt-4 max-w-2xl text-h1 font-extrabold text-white">This page doesn’t exist</h1>
        <p className="mt-5 max-w-xl text-lead text-white/80">
          The link may be out of date, or the page may have moved. Try one of these instead.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="light" size="lg">
            Go to the homepage
          </ButtonLink>
          {nav.map((n) => (
            <ButtonLink key={n.href} href={n.href} variant="ghost-light" size="lg" arrow={false}>
              {n.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}

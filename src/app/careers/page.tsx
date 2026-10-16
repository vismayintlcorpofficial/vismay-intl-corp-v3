import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { InquiryBand } from "@/components/sections/InquiryBand";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careers, news } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at Vismay International Corporation and join our growing team of talented and motivated professionals.",
  path: "/careers/",
});

export default function CareersPage() {
  const sportFest = news[1];
  const primary = careers.channels[0];

  return (
    <>
      <PageHero
        title="Careers"
        intro={careers.intro}
        crumbs={[{ label: "Careers", href: "/careers/" }]}
        image={{ src: "/images/careers/careers.svg", alt: "Vismay employees celebrating together", position: "80% 30%" }}
      >
        <ButtonLink href="#openings" variant="light" size="lg" arrow={false}>
          See open roles
        </ButtonLink>
        <ButtonLink href={primary.href} variant="ghost-light" size="lg">
          Apply on {primary.name}
        </ButtonLink>
      </PageHero>

      {/* Intro ------------------------------------------------------------------ */}
      <section aria-labelledby="purpose-heading" className="section-y bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="purpose-heading" className="text-h2 font-extrabold text-navy">
              {careers.heading}
            </h2>
            <p className="mt-6 text-lead text-slate">{careers.body}</p>
          </div>
          <div className="relative aspect-[1271/1037] overflow-hidden rounded-[var(--radius-media)] bg-sky">
            <Image
              src="/images/careers/jobs.svg"
              alt="Vismay colleagues reviewing work together in the office"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Openings --------------------------------------------------------------- */}
      <section id="openings" aria-labelledby="openings-heading" className="section-y scroll-mt-20 bg-mist">
        <div className="container-site">
          <SectionHeading
            id="openings-heading"
            title="Current openings"
            intro={`We are hiring for ${careers.openings.length} roles. Full job descriptions and applications are on our hiring channels below.`}
          />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-media)] border border-line bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {careers.openings.map((role) => (
              <li key={role} className="flex items-center gap-4 bg-white px-6 py-6 sm:px-7">
                <span className="inline-flex size-10 flex-none items-center justify-center rounded-full bg-ocean-50 text-ocean-600">
                  <BriefcaseBusiness aria-hidden className="size-[1.125rem]" />
                </span>
                <span className="text-[1.0625rem] font-semibold leading-snug text-navy">{role}</span>
              </li>
            ))}
            {/* Fill the last grid row on three-column layouts so the border grid stays even. */}
            {careers.openings.length % 3 !== 0 &&
              Array.from({ length: 3 - (careers.openings.length % 3) }).map((_, i) => (
                <li key={`filler-${i}`} aria-hidden className="hidden bg-white lg:block" />
              ))}
          </ul>

          <h3 id="apply" className="mt-20 text-h3 font-bold text-navy">
            Where to apply
          </h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {careers.channels.map((c) => (
              <li key={c.name}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-start justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-white p-7 transition-colors hover:border-ocean-400"
                >
                  <span>
                    <span className="block text-xl font-bold text-navy">{c.name}</span>
                    <span className="mt-2 block text-[0.9375rem] leading-relaxed text-slate">{c.note}</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-5 flex-none text-ocean-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Life at Vismay ----------------------------------------------------------- */}
      <section aria-labelledby="life-heading" className="section-y bg-white">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-media)] bg-sky">
            <Image src={sportFest.image} alt={sportFest.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <h2 id="life-heading" className="text-h2 font-extrabold text-navy">
              Life at Vismay
            </h2>
            <h3 className="mt-6 text-lg font-bold text-navy">{sportFest.title}</h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate">{sportFest.body}</p>
          </div>
        </div>
      </section>

      <InquiryBand secondary={{ label: "Learn who we are", href: "/who-we-are/" }} />
    </>
  );
}

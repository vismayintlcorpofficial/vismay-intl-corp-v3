import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { BrandPanel } from "@/components/sections/BrandPanel";
import { InquiryBand } from "@/components/sections/InquiryBand";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, brands, mission, stats, vision } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = pageMetadata({
  title: "Who We Are",
  description:
    "Learn about our journey, milestones, mission, and vision.",
  path: "/who-we-are/",
});

export default function WhoWeArePage() {
  const statements = [
    // The source images carry baked-in text on one side; the crop keeps only the photograph.
    { ...mission, id: "our-mission", objectPosition: "100% 50%" },
    { ...vision, id: "our-vision", objectPosition: "0% 50%" },
  ];

  return (
    <>
      <PageHero
        title="Who we are"
        intro="Discover the story, passion, and purpose behind Vismay International Corporation."
        crumbs={[{ label: "Who We Are", href: "/who-we-are/" }]}
        image={{ src: "/images/whoWeAre/whoWeAreBanner.webp", alt: "Vismay International Corporation office building", position: "75% 40%" }}
      />

      {/* About ---------------------------------------------------------------- */}
      <section aria-labelledby="about-heading" className="section-y bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="about-heading" className="text-h2 font-extrabold text-navy">
              About us
            </h2>
            <p className="mt-6 text-lead font-medium text-ink">{about.lead}</p>
          </div>
          <div className="prose-site">
            {about.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <p>
              The Platinum Karaoke portfolio includes karaoke systems such as the Piano 4K, Piano XL SD, Alpha 2, and
              Tango; party jukeboxes; and karaoke microphones. Complementing this is PK Audio, our growing lifestyle
              audio brand featuring products such as the Apollo Series, Mate, Zuma, Rover, AK Series, and more,
              designed to bring powerful sound and enjoyable listening experiences into everyday life.
            </p>
            <blockquote className="my-10 border-l-4 border-ocean-600 pl-6 text-xl font-semibold leading-snug tracking-[-0.01em] text-navy sm:text-2xl">
              {about.beliefQuote}
            </blockquote>
            <p>{about.belief}</p>
            <p>{about.purpose}</p>
          </div>
        </div>
      </section>

      {/* At a glance ---------------------------------------------------------- */}
      <section aria-labelledby="glance-heading" className="bg-sky py-16 sm:py-20">
        <div className="container-site">
          <h2 id="glance-heading" className="text-h3 font-bold text-navy">
            Vismay in the Philippines
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-ocean-200/60 sm:grid-cols-4">
            <div className="flex flex-col-reverse gap-1 bg-white px-7 py-7">
              <dt className="text-sm font-medium text-slate">Year Platinum Karaoke began</dt>
              <dd className="text-4xl font-extrabold tracking-[-0.03em] text-ocean-600">{about.founded}</dd>
            </div>
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1 bg-white px-7 py-7">
                <dt className="text-sm font-medium text-slate">{s.label}</dt>
                <dd className="text-4xl font-extrabold tracking-[-0.03em] text-ocean-600">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Mission & vision ----------------------------------------------------- */}
      <section aria-labelledby="mv-heading" className="section-y bg-white">
        <div className="container-site">
          <SectionHeading id="mv-heading" title="What guides us" />
          <div className="mt-12 space-y-6 lg:mt-16">
            {statements.map((s, i) => (
              <Reveal key={s.id}>
                <article
                  id={s.id}
                  aria-labelledby={`${s.id}-title`}
                  className={cn(
                    "grid scroll-mt-28 overflow-hidden rounded-[var(--radius-media)] bg-navy text-white",
                    i % 2 === 1 ? "lg:grid-cols-[7fr_5fr]" : "lg:grid-cols-[5fr_7fr]",
                  )}
                >
                  {/* Kept close to square so the text baked into the source photos stays out of frame. */}
                  <div className={cn("relative aspect-[5/4] lg:aspect-auto lg:min-h-[28rem]", i % 2 === 1 && "lg:order-2")}>
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: s.objectPosition }}
                    />
                  </div>
                  <div className="on-dark flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
                    <h3 id={`${s.id}-title`} className="text-h2 font-extrabold text-white">
                      {s.title}
                    </h3>
                    <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-white/85">
                      {s.body.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio ------------------------------------------------------------ */}
      <section aria-labelledby="portfolio-heading" className="section-y bg-mist">
        <div className="container-site">
          <SectionHeading
            id="portfolio-heading"
            title="Our portfolio"
            intro="Two brands, one purpose: giving people more reasons to sing, connect and celebrate."
          />
          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            {brands.map((brand) => (
              <BrandPanel key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <InquiryBand surface="mist" />
    </>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { BrandPanel } from "@/components/sections/BrandPanel";
import { InquiryBand } from "@/components/sections/InquiryBand";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brands, featuredProducts, productSeries } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Our Brands",
  description:
    "Explore the brands under Vismay International Corporation, featuring quality products and trusted names selected to deliver reliable value to our customers.",
  path: "/ourbrands/",
});

export default function OurBrandsPage() {
  return (
    <>
      <PageHero
        title="Experience real karaoke"
        intro="Explore the brands under Vismay International Corporation, featuring quality products and trusted names selected to deliver reliable value to our customers."
        crumbs={[{ label: "Our Brands", href: "/ourbrands/" }]}
        image={{ src: "/images/brands/ourbrand.webp", alt: "Platinum Karaoke and PK Audio karaoke systems, speakers and microphones", position: "70% 45%" }}
      >
        <ButtonLink href="https://platinumkaraoke.com" variant="light" size="lg">
          Shop Platinum Karaoke
        </ButtonLink>
      </PageHero>

      {/* Brands ---------------------------------------------------------------- */}
      <section aria-labelledby="brands-heading" className="section-y bg-white">
        <div className="container-site">
          <SectionHeading
            id="brands-heading"
            title="Two brands, built for music lovers"
            intro="Platinum Karaoke has been a trusted name in karaoke and home entertainment since 2000. PK Audio carries that sound into everyday listening."
          />
          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            {brands.map((brand) => (
              <BrandPanel key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured products ------------------------------------------------------- */}
      <section aria-labelledby="featured-heading" className="section-y bg-mist">
        <div className="container-site">
          <SectionHeading id="featured-heading" title="Featured products" intro="Our flagship karaoke systems and party speakers." />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {featuredProducts.map((p, i) => (
              <Reveal as="li" key={p.name} delay={(i % 2) * 0.08}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full overflow-hidden rounded-[var(--radius-media)] border border-line bg-white transition-[border-color,box-shadow] duration-300 hover:border-ocean-300 hover:shadow-[0_24px_50px_-30px_rgba(6,82,155,0.5)]"
                >
                  {/* The backdrop photos already show each product in a real setting. */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-sky">
                    <Image
                      src={p.backdrop}
                      alt={`${p.name} in use`}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-end justify-between gap-6 p-7 sm:p-9">
                    <div>
                      <h3 className="text-h3 font-extrabold text-navy">{p.name}</h3>
                      <p className="mt-2 leading-relaxed text-slate">{p.description}</p>
                    </div>
                    <span className="inline-flex size-11 flex-none items-center justify-center rounded-full bg-ocean-600 text-white transition-colors group-hover:bg-ocean-700">
                      <ArrowUpRight aria-hidden className="size-5" />
                      <span className="sr-only">View {p.name} on platinumkaraoke.com (opens in a new tab)</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Product series ------------------------------------------------------- */}
      <section aria-labelledby="series-heading" className="section-y bg-white">
        <div className="container-site">
          <SectionHeading
            id="series-heading"
            title="Shop by series"
            aside={
              <ButtonLink href="https://platinumkaraoke.com" variant="secondary">
                Visit platinumkaraoke.com
              </ButtonLink>
            }
          />
          <ul className="mt-12 grid grid-cols-2 gap-4 lg:mt-16 lg:grid-cols-4 lg:gap-5">
            {productSeries.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[var(--radius-card)] bg-mist p-5 transition-colors hover:bg-ocean-50 sm:p-7"
                >
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[13rem]">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 18vw, 40vw"
                      className="object-contain transition-transform duration-500 ease-out-soft group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-6 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-navy">{s.name}</h3>
                      <p className="mt-1 text-sm text-slate">{s.note}</p>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 flex-none text-ocean-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InquiryBand
        title="Interested in carrying our brands?"
        body="For partnerships, distribution and business opportunities, send us an inquiry and tell us about your company."
        secondary={{ label: "Learn who we are", href: "/who-we-are/" }}
      />
    </>
  );
}

import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Spectrum } from "@/components/ui/Spectrum";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { BrandPanel } from "@/components/sections/BrandPanel";
import { ProductCard } from "@/components/sections/ProductCard";
import { InquiryBand } from "@/components/sections/InquiryBand";
import { about, brands, featuredProducts, lifestyleImages, news, site, stats } from "@/content/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: { absolute: site.name },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const [lead, ...moreNews] = news;

  return (
    <>
      {/* 1. Hero ------------------------------------------------------------ */}
      <section
        aria-labelledby="hero-heading"
        className="on-dark relative isolate flex min-h-[40rem] items-end overflow-hidden bg-navy text-white sm:min-h-[44rem] lg:h-[100svh] lg:max-h-[58rem] lg:min-h-[44rem]"
      >
        <HeroVideo src="/videos/hero/MAIN_BANNER_1.webm" poster="/images/ourPeople/ourPeople1.webp" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(6,29,56,0.92)_0%,rgba(6,29,56,0.72)_42%,rgba(6,29,56,0.2)_80%)] max-md:bg-[linear-gradient(180deg,rgba(6,29,56,0.5)_0%,rgba(6,29,56,0.9)_65%)]"
        />
        <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-navy/70 to-transparent" />

        <div className="container-site relative pb-20 pt-36 lg:pb-28">
          <Spectrum
            bars={29}
            animate
            className="mb-9 h-16 w-[8.25rem] text-signal sm:h-20 sm:w-[9.5rem]"
          />
          <h1 id="hero-heading" className="max-w-[15ch] text-display font-extrabold text-white">
            {site.tagline}
          </h1>
          <p className="mt-7 max-w-xl text-lead text-white/85">{about.lead}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/ourbrands/" variant="light" size="lg">
              Explore our brands
            </ButtonLink>
            <ButtonLink href="/who-we-are/" variant="ghost-light" size="lg">
              Who we are
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 2. Introduction ---------------------------------------------------- */}
      <section aria-labelledby="intro-heading" className="section-y bg-white">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <h2 id="intro-heading" className="text-h2 font-extrabold text-navy">
              Bringing people together through music since {about.founded}
            </h2>
            <div className="prose-site">
              {about.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <div className="mt-8">
                <ButtonLink href="/who-we-are/" variant="text" className="text-base">
                  Read our story
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Lifestyle mosaic: staggered heights read as a moving rhythm, like the spectrum mark. */}
          <ul className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-24 lg:grid-cols-4 lg:items-end">
            {lifestyleImages.map((img, i) => (
              <li
                key={img.src}
                className={cn(
                  "relative overflow-hidden rounded-[var(--radius-media)] bg-sky",
                  ["aspect-[4/5] lg:aspect-[3/4]", "aspect-[4/5] lg:aspect-[4/5.6]", "aspect-[4/5] lg:aspect-[3/4.4]", "aspect-[4/5] lg:aspect-[4/4.6]"][i],
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, 48vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Brands ---------------------------------------------------------- */}
      <section aria-labelledby="brands-heading" className="section-y bg-mist">
        <div className="container-site">
          <SectionHeading
            id="brands-heading"
            title="Our brands"
            intro="Karaoke, audio and entertainment products designed for different lifestyles, occasions and ways of enjoying music."
            aside={
              <ButtonLink href="/ourbrands/" variant="secondary">
                See all brands and products
              </ButtonLink>
            }
          />
          <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
            {brands.map((brand, i) => (
              <Reveal key={brand.id} delay={i * 0.08}>
                <BrandPanel brand={brand} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product highlights --------------------------------------------- */}
      <section aria-labelledby="products-heading" className="section-y bg-white">
        <div className="container-site">
          <SectionHeading
            id="products-heading"
            title="Featured products"
            intro="A few of the Platinum Karaoke systems and speakers that families bring home for every celebration."
          />
          <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-16 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
            {featuredProducts.map((product) => (
              <li key={product.name} className="w-[78%] flex-none snap-start sm:w-[44%] lg:w-auto">
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Vismay in the Philippines -------------------------------------- */}
      <section aria-labelledby="people-heading" className="on-dark relative isolate overflow-hidden bg-navy text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-full">
            <Image
              src="/images/ourPeople/ourPeople1.webp"
              alt="Vismay team members collaborating in the office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative px-5 py-20 sm:px-12 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
            <Spectrum
              bars={25}
              shape="rise"
              className="absolute bottom-0 right-8 -z-10 h-48 w-40 justify-end text-ocean-600/40"
            />
            <h2 id="people-heading" className="text-h2 font-extrabold text-white">
              Vismay in the Philippines
            </h2>
            <p className="mt-5 max-w-lg text-lead text-white/80">
              Since Platinum Karaoke began in {about.founded}, our products have reached homes and communities
              across the Philippines, the United Arab Emirates and other countries.
            </p>
            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-card)] bg-white/10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1 bg-navy px-6 py-6">
                  <dt className="text-sm font-medium text-white/70">{s.label}</dt>
                  <dd className="text-4xl font-extrabold tracking-[-0.03em] text-white">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/careers/" variant="light">
                Join our team
              </ButtonLink>
              <ButtonLink href="/who-we-are/" variant="ghost-light">
                About us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* 6. News highlights -------------------------------------------------- */}
      <section aria-labelledby="news-heading" className="section-y bg-white">
        <div className="container-site">
          <SectionHeading id="news-heading" title="Recent highlights" intro="Milestones and moments from across Vismay and Platinum Karaoke." />

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            <article>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-media)] bg-sky">
                <Image src={lead.image} alt={lead.alt} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" />
              </div>
              <h3 className="mt-7 text-h3 font-bold text-navy">{lead.title}</h3>
              <p className="mt-3 max-w-[62ch] leading-relaxed text-slate">{lead.body}</p>
            </article>

            <ul className="divide-y divide-line border-y border-line">
              {moreNews.map((item) => (
                <li key={item.title} className="grid grid-cols-[6.5rem_1fr] gap-5 py-7 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <div className="relative aspect-square overflow-hidden rounded-[var(--radius-card)] bg-sky">
                    <Image src={item.image} alt={item.alt} fill sizes="144px" className="object-cover" />
                  </div>
                  <article>
                    <h3 className="text-lg font-bold leading-snug text-navy">{item.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">{item.body}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Inquiry --------------------------------------------------------- */}
      <InquiryBand />
    </>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Spectrum } from "@/components/ui/Spectrum";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  title: string;
  intro?: ReactNode;
  crumbs: { label: string; href: string }[];
  image?: { src: string; alt: string; position?: string };
  children?: ReactNode;
};

/**
 * Banner at the top of every internal page. With an image it is a full-bleed
 * photograph with a navy wash on the reading side; without one it is a solid
 * navy band carrying the spectrum mark.
 */
export function PageHero({ title, intro, crumbs, image, children }: PageHeroProps) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-white">
      {image ? (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            quality={75}
            className="-z-20 object-cover"
            style={{ objectPosition: image.position ?? "right center" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,29,56,0.94)_0%,rgba(6,29,56,0.82)_38%,rgba(6,29,56,0.25)_75%,rgba(6,29,56,0.1)_100%)] max-md:bg-[linear-gradient(180deg,rgba(6,29,56,0.55)_0%,rgba(6,29,56,0.92)_70%)]"
          />
          {/* Keeps the transparent header legible over bright photography. */}
          <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-navy/70 to-transparent" />
        </>
      ) : (
        <Spectrum
          bars={41}
          className="absolute -right-6 bottom-0 -z-10 h-[78%] w-[min(34rem,70vw)] justify-end text-ocean-500/35 max-sm:h-[38%] max-sm:text-ocean-500/25"
        />
      )}

      <div
        className={cn(
          "container-site flex flex-col justify-end pb-14 pt-36 sm:pb-16 lg:pb-20",
          image ? "min-h-[30rem] lg:min-h-[36rem]" : "min-h-[22rem] lg:min-h-[26rem]",
        )}
      >
        <Breadcrumbs items={crumbs} tone="dark" />
        <h1 className="mt-6 max-w-3xl text-h1 font-extrabold text-white">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lead text-white/85">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

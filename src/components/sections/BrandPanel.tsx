import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import type { Brand } from "@/content/site";

/** One of Vismay's brands: logo, what it is, and the product lines it covers. */
export function BrandPanel({ brand, headingLevel = "h3" }: { brand: Brand; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article
      id={brand.id}
      className="flex h-full flex-col rounded-[var(--radius-media)] border border-line bg-white p-7 sm:p-10"
    >
      <div className="flex items-center gap-5">
        <Image
          src={brand.logo}
          alt={`${brand.name} logo`}
          width={96}
          height={96}
          className="size-20 rounded-2xl object-contain sm:size-24"
        />
        <Heading className="text-h3 font-extrabold text-navy">{brand.name}</Heading>
      </div>
      <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-slate">{brand.summary}</p>

      <ul className="mt-8 space-y-5 border-t border-line pt-7">
        {brand.lines.map((line) => (
          <li key={line.name} className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6">
            <span className="text-sm font-semibold text-navy">{line.name}</span>
            {line.items.length > 0 && (
              <ul className="flex flex-wrap gap-2" aria-label={`${line.name} include`}>
                {line.items.map((item) => (
                  <li key={item} className="rounded-full bg-ocean-50 px-3 py-1 text-sm font-medium text-ocean-800">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-9">
        <ButtonLink href={brand.href} variant="secondary">
          Visit {brand.name}
        </ButtonLink>
      </div>
    </article>
  );
}

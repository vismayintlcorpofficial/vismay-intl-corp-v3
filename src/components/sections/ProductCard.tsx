import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/content/site";

/** A featured product. The whole card links to the product on platinumkaraoke.com. */
export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-[border-color,box-shadow] duration-300 hover:border-ocean-300 hover:shadow-[0_18px_40px_-24px_rgba(6,82,155,0.45)]"
    >
      <div className="relative aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_60%,#ffffff_0%,var(--color-mist)_70%)]">
        <Image
          src={product.image}
          alt={`${product.name}, ${product.description.toLowerCase()}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 80vw"
          className="object-contain p-6 transition-transform duration-500 ease-out-soft group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-line p-6">
        <h3 className="text-h3 font-bold text-navy">{product.name}</h3>
        <p className="text-[0.9375rem] leading-relaxed text-slate">{product.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-ocean-600">
          View on Platinum Karaoke
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </div>
    </a>
  );
}

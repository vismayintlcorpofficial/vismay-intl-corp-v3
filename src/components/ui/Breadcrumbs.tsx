import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { site } from "@/content/site";

type Crumb = { label: string; href: string };

/** Visible breadcrumb trail plus matching schema.org BreadcrumbList for search engines. */
export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href}`,
    })),
  };
  const muted = tone === "dark" ? "text-white/70 hover:text-white" : "text-slate hover:text-ocean-700";
  const current = tone === "dark" ? "text-white" : "text-navy";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm font-medium">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={current}>
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className={`rounded transition-colors ${muted}`}>
                    {c.label}
                  </Link>
                  <ChevronRight aria-hidden className={`size-3.5 ${tone === "dark" ? "text-white/50" : "text-slate/60"}`} />
                </>
              )}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}

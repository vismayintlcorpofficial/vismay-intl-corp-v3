import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Page metadata with a complete Open Graph / Twitter block.
 * (Next.js replaces a parent's `openGraph` object wholesale, so each page sets all of it.)
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_PH",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { Spectrum } from "@/components/ui/Spectrum";
import { site } from "@/content/site";

type FooterLink = { label: string; href: string };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "Who we are", href: "/who-we-are/" },
      { label: "Our mission", href: "/who-we-are/#our-mission" },
      { label: "Careers", href: "/careers/" },
    ],
  },
  {
    heading: "Brands",
    links: [
      { label: "Our brands", href: "/ourbrands/" },
      { label: "Platinum Karaoke", href: "https://platinumkaraoke.com" },
      {
        label: "PK Audio",
        href: "https://platinumkaraoke.com/collections/pk-audio",
      },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact us", href: "/contact-us/" },
      { label: "Facebook", href: site.social.facebook },
      { label: "LinkedIn", href: site.social.linkedin },
    ],
  },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  const external = link.href.startsWith("http");
  const cls =
    "group inline-flex items-center gap-1.5 rounded py-1 text-[0.9375rem] text-white/75 transition-colors hover:text-white";
  if (external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {link.label}
        <ArrowUpRight
          aria-hidden
          className="size-3.5 opacity-50 transition-opacity group-hover:opacity-100"
        />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={link.href} className={cls}>
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="on-dark relative isolate overflow-hidden bg-navy-deep text-white">
      <Spectrum
        bars={61}
        className="pointer-events-none absolute -bottom-2 left-1/2 -z-10 h-40 w-[64rem] -translate-x-1/2 justify-center text-ocean-600/25"
      />

      <div className="container-site pb-10 pt-20 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div>
            <Logo tone="white" />
            <p className="mt-7 max-w-md text-[0.9375rem] leading-relaxed text-white/70">
              {site.footerBlurb}
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vismay on Facebook (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/85 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vismay on LinkedIn (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white/85 transition-colors hover:border-white/40 hover:bg-white/10 hover:text-white"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map(col => (
              <div key={col.heading}>
                <h2 className="text-sm font-semibold text-white">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-1.5">
                  {col.links.map(link => (
                    <li key={link.href}>
                      <FooterAnchor link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:p-6">
          <Link
            href="/privacy-policy/"
            className="shrink-0 self-start rounded-md bg-white p-1.5"
            aria-label="Data privacy statement"
          >
            <Image
              src="/icons/dpo-dps.png"
              alt="National Privacy Commission DPO/DPS registration seal"
              width={72}
              height={72}
              className="size-14 object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-white/75">
            {site.compliance}
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vismay International Corporation. All rights reserved.</p>
          <Link
            href="/privacy-policy/"
            className="rounded text-white/75 hover:text-white"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, ShoppingBag } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { site } from "@/content/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Vismay International Corporation for inquiries, partnerships, and business opportunities. We're here to connect with you and provide the support you need.",
  path: "/contact-us/",
});

const elsewhere = [
  {
    label: "Facebook",
    note: "Company news and updates",
    href: site.social.facebook,
    Icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    note: "Company updates and hiring",
    href: site.social.linkedin,
    Icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        intro="For inquiries, partnerships and business opportunities, we’re here to connect with you and provide the support you need."
        crumbs={[{ label: "Contact Us", href: "/contact-us/" }]}
      />

      <section aria-label="Inquiry form and other ways to reach us" className="bg-mist py-16 sm:py-20 lg:py-24">
        <div className="container-site grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <ContactForm />

          <aside aria-labelledby="elsewhere-heading" className="space-y-10 lg:pt-4">
            <div>
              <h2 id="elsewhere-heading" className="text-h3 font-bold text-navy">
                Other ways to reach us
              </h2>
              <ul className="mt-5 space-y-3">
                {elsewhere.map(({ label, note, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white p-5 transition-colors hover:border-ocean-400"
                    >
                      <span className="inline-flex size-11 flex-none items-center justify-center rounded-full bg-ocean-600 text-white">
                        <Icon className="size-5" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-bold text-navy">{label}</span>
                        <span className="block text-sm text-slate">{note}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-5 text-ocean-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line pt-10">
              <h2 className="text-h3 font-bold text-navy">Looking for something else?</h2>
              <ul className="mt-5 space-y-5">
                <li className="flex gap-4">
                  <ShoppingBag aria-hidden className="mt-0.5 size-5 flex-none text-ocean-600" />
                  <p className="text-[0.9375rem] leading-relaxed text-slate">
                    <span className="block font-semibold text-navy">Buying a product</span>
                    Shop karaoke systems, speakers and microphones at{" "}
                    <a
                      href="https://platinumkaraoke.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ocean-600 underline-offset-2 hover:underline"
                    >
                      platinumkaraoke.com
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    .
                  </p>
                </li>
                <li className="flex gap-4">
                  <BriefcaseBusiness aria-hidden className="mt-0.5 size-5 flex-none text-ocean-600" />
                  <p className="text-[0.9375rem] leading-relaxed text-slate">
                    <span className="block font-semibold text-navy">Applying for a job</span>
                    See current openings and where to apply on our{" "}
                    <Link href="/careers/" className="font-semibold text-ocean-600 underline-offset-2 hover:underline">
                      careers page
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

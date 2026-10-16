import Image from "next/image";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { privacyPolicy, site } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Vismay International Corporation collects, uses, stores, shares and disposes of personal information under the Data Privacy Act of 2012.",
  path: "/privacy-policy/",
});

const toc = [{ id: "purposes", heading: "How we use your information" }, ...privacyPolicy.sections.map((s) => ({
  id: s.heading.toLowerCase().replace(/[^a-z]+/g, "-"),
  heading: s.heading,
}))];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Data privacy statement"
        intro="How we protect your personal data in compliance with the Data Privacy Act of 2012."
        crumbs={[{ label: "Privacy Policy", href: "/privacy-policy/" }]}
      />

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-labelledby="toc-heading">
              <h2 id="toc-heading" className="text-sm font-semibold text-navy">
                On this page
              </h2>
              <ol className="mt-4 space-y-1 border-l border-line">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[0.9375rem] text-slate transition-colors hover:border-ocean-600 hover:text-ocean-700"
                    >
                      {t.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="mt-10 flex items-center gap-4 rounded-[var(--radius-card)] bg-mist p-4">
              <Image
                src="/images/compliance/dpo-dps.png"
                alt="National Privacy Commission DPO/DPS registration seal"
                width={64}
                height={64}
                className="size-14 flex-none object-contain"
              />
              <p className="text-xs leading-relaxed text-slate">{site.compliance}</p>
            </div>
          </aside>

          <article className="prose-site">
            <p className="text-lead text-ink">{privacyPolicy.intro}</p>

            <h2 id="purposes" className="mt-14 scroll-mt-28 text-h3 font-bold text-navy">
              How we use your information
            </h2>
            <p className="mt-4">{privacyPolicy.purposeLead}</p>
            <dl className="mt-6 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line">
              {privacyPolicy.purposes.map((p) => (
                <div key={p.term} className="grid gap-1 px-6 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-navy">{p.term}</dt>
                  <dd className="text-slate">{p.text.charAt(0).toUpperCase() + p.text.slice(1)}.</dd>
                </div>
              ))}
            </dl>

            {privacyPolicy.sections.map((s, i) => (
              <section key={s.heading} aria-labelledby={toc[i + 1].id}>
                <h2 id={toc[i + 1].id} className="mt-14 scroll-mt-28 text-h3 font-bold text-navy">
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}

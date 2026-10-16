import { ButtonLink } from "@/components/ui/Button";
import { Spectrum } from "@/components/ui/Spectrum";

type InquiryBandProps = {
  title?: string;
  body?: string;
  secondary?: { label: string; href: string };
  /** Match the background of the section above so the band floats on it. */
  surface?: "white" | "mist";
};

/** Closing call to action used at the bottom of most pages. */
export function InquiryBand({
  title = "Let’s talk about working together",
  body = "Get in touch with Vismay International Corporation for inquiries, partnerships, and business opportunities. We’re here to connect with you and provide the support you need.",
  secondary = { label: "Explore careers", href: "/careers/" },
  surface = "white",
}: InquiryBandProps) {
  return (
    <section aria-labelledby="inquiry-heading" className={surface === "mist" ? "bg-mist pb-20 sm:pb-24 lg:pb-32" : "bg-white pb-20 sm:pb-24 lg:pb-32"}>
      <div className="container-site">
        <div className="on-dark relative isolate overflow-hidden rounded-[var(--radius-media)] bg-ocean-600 px-7 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <Spectrum
            bars={33}
            shape="rise"
            className="absolute -bottom-1 right-6 -z-10 h-[85%] w-[22rem] justify-end text-white/15 max-sm:h-[30%] max-sm:w-[12rem] lg:right-14"
          />
          <div className="max-w-2xl">
            <h2 id="inquiry-heading" className="text-h2 font-extrabold text-white">
              {title}
            </h2>
            <p className="mt-5 text-lead text-white/85">{body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact-us/" variant="light" size="lg">
                Send an inquiry
              </ButtonLink>
              <ButtonLink href={secondary.href} variant="ghost-light" size="lg">
                {secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

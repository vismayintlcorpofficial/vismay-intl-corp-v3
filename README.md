# Vismay International Corporation — website

The redesigned corporate site for [vismayintlcorp.com](https://vismayintlcorp.com), built with
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion and Lucide icons.

## Setup

Requires Node.js 20.9 or newer.

```bash
npm install
npm run assets:pull     # copies the logo, photos, product shots and hero video from the live site into /public
cp .env.example .env.local   # then add the EmailJS public key (see "Contact form")
npm run dev             # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

> **Run `npm run assets:pull` before the new site replaces the old one.** The images are currently
> served by the old build; once it's gone, the script has nothing to copy from. After pulling,
> commit the files in `/public` so every deploy has them.

## Contact form

The inquiry form sends through **EmailJS**, the same service, template and field names
(`fullname`, `email`, `phone`, `company`, `website`, `inquiry`) as the current site, so inquiries keep
arriving where they do today. Set `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` in `.env.local` (EmailJS dashboard →
Account → General → Public Key). Until it's set, the form shows a clear "not connected yet" message
instead of failing silently.

## Editing content

All company copy, stats, brands, products, job openings, news highlights and the privacy statement
live in **`src/content/site.ts`**. Change text there; every page reads from it.

- New job opening → add it to `careers.openings`.
- New news highlight → add an item to `news` (image in `/public/images/news/`).
- New featured product → add it to `featuredProducts`.

## Project structure

```
src/
  app/
    layout.tsx            Root layout: Montserrat, header, footer, organisation schema
    page.tsx              Home
    who-we-are/           About, mission & vision (#our-mission), portfolio
    ourbrands/            Brands, featured products, product series
    careers/              Openings and where to apply
    contact-us/           Inquiry form (ContactForm.tsx) and other channels
    privacy-policy/       Data privacy statement
    not-found.tsx         404
    sitemap.ts robots.ts  /sitemap.xml and /robots.txt
    opengraph-image.tsx   Generated social-share image
  components/
    layout/               SiteHeader, SiteFooter, PageHero
    sections/             HeroVideo, BrandPanel, ProductCard, InquiryBand
    ui/                   Button, Logo, Spectrum, Breadcrumbs, SectionHeading, Reveal, SocialIcons
  content/site.ts         All site content
  lib/                    emailjs.ts, metadata.ts, cn.ts
scripts/pull-assets.mjs   Asset import from the live site
```

## Design system

| Token | Value | Use |
| --- | --- | --- |
| `ocean-600` | `#06529B` | Brand primary, sampled from the official logo. Buttons, links, highlights |
| `navy` | `#061D38` | Headings, dark sections, page heroes |
| `navy-deep` | `#03122A` | Footer |
| `sky` | `#E7ECF5` | Light-blue surfaces |
| `mist` | `#F4F7FB` | Alternate section background |
| `signal` | `#5CB8FF` | Light-blue accent, on dark backgrounds only |
| `slate` | `#4A5870` | Secondary text (7:1 on white) |

- **Type:** Montserrat via `next/font/google` — 800 for headings, 600 for buttons/nav/labels, 400–500 for body.
  Fluid scale: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-lead` (defined in `globals.css`).
- **Signature graphic:** `Spectrum` — the vertical lines of the Vismay "V" mark drawn as bars. It rises
  once in the home hero and sits quietly in page heroes, the inquiry band and the footer.
- **Radius:** 24px for media and large panels, 16px for cards, full pill for buttons.
- **Motion:** one hero entrance plus a gentle reveal on a few key blocks. Everything is fully
  visible without JavaScript and honours `prefers-reduced-motion`; the hero video has a pause control
  and never autoplays for reduced-motion users.

## URLs and redirects

All existing URLs are kept, including their trailing slashes (`trailingSlash: true`):
`/`, `/who-we-are/`, `/who-we-are/#our-mission`, `/careers/`, `/ourbrands/`, `/contact-us/`, `/privacy-policy/`.

Permanent redirects for likely guesses: `/our-brands`, `/brands`, `/about`, `/about-us`, `/contact`,
`/privacy`, `/career`, `/jobs`.

See `AUDIT.md` for the page inventory and the items that need the client's input.

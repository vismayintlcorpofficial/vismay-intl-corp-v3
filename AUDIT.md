# Site audit and handover notes

Audit of https://vismayintlcorp.com, 16 October 2026.

## Page inventory

| Live URL | Status | New page |
| --- | --- | --- |
| `/` | Live | Redesigned: video hero, story, brands, featured products, Vismay in the Philippines, highlights, inquiry |
| `/who-we-are/` | Live | Redesigned: about story, stats, mission & vision as real text, portfolio |
| `/who-we-are/#our-mission` | Anchor | Kept (mission block); `#our-vision` added |
| `/careers/` | Live | Redesigned: purpose, 11 openings, where to apply, life at Vismay |
| `/ourbrands/` | Live | Redesigned: brands, featured products, product series |
| `/contact-us/` | Live | Redesigned: accessible inquiry form (same EmailJS setup), other channels |
| `/privacy-policy/` | Live | Redesigned: readable statement with on-page navigation |
| Newsroom, Lifestyle, Leadership, Terms of use, Sitemap (footer) | Link to `#`, no page exists | Removed from navigation (see below) |
| News "Read more" ×4, "See all News" | Link to `#` | News shown in full on the home page instead |
| `/sitemap.xml`, `/robots.txt` | Missing | Generated |

Every live URL keeps its exact path. Unknown paths now show a branded 404 with links back into the site.

## Problems found on the old site and what changed

- **Broken social previews:** `og:image` pointed to `http://localhost:3000/icon.png`, so shared links had no image.
  The new site generates a proper 1200×630 share image and absolute URLs.
- **Mission and vision were images of text,** invisible to search engines and screen readers. Transcribed into real text.
- **Dead links** across the footer and news cards (listed above).
- **Accessibility:** form fields used placeholders as their only hint; no visible focus styles; autoplaying
  video with no pause control; banner images with alt text "Careers Banner" on every page.
- **Typography:** Arial fallback instead of a brand typeface. Montserrat is now loaded with `next/font`.
- **Content fix:** "Key Accounts_Manager" corrected to "Key Accounts Manager". No other facts were changed.

## Needs the client's input

1. **EmailJS public key** — required for the contact form (see README). Service and template IDs are pre-filled.
2. **Assets** — run `npm run assets:pull` before the old site is taken down, then commit `/public`.
   Higher-resolution originals would improve the brand logos (596px and 647px today) and the
   product-series images (147–270px wide, so they're shown small).
3. **Company contact details** — the live site has no address, phone number or email. If you want them on
   the Contact page and in search results, send them over and they'll go in `src/content/site.ts`.
4. **Pages that were linked but never built** — Newsroom, Lifestyle, Leadership, Terms of Use. They were left
   out rather than filled with placeholder text. Supply content and they can be added using the existing page
   components.
5. **News articles** — the four highlights have no dates or full articles. Dates would let them be ordered
   and shown as a proper newsroom.
6. **Stats** — "950+ employees, 80+ iconic products, 12+ brand stores" are carried over unchanged. Please confirm
   they're still current.
7. **Mission/vision images** — the source photos have text baked in, so they're cropped to show only the
   people. Clean versions without text would allow wider crops.
8. **Brand identity** — the primary blue `#06529B` was sampled from the official logo. The logo file on the
   site is a raster image inside an SVG; a true vector logo (and a white version) would render sharper.

## Verification done

- All seven pages (including 404) render without errors and with exactly one `<h1>` each, alt text on every
  image and no duplicate IDs.
- Checked at 390px (mobile), 820px (tablet) and 1440px (desktop): no horizontal overflow on any page.
- Not yet run: `npm run build` against the real packages, live form submission, and a Lighthouse pass with the
  real images. Do these once dependencies and assets are installed.

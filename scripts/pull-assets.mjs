#!/usr/bin/env node
/**
 * Copies Vismay's existing brand assets (logo, photography, product shots,
 * hero video) from the current live site into /public.
 *
 * Run once after `npm install`:   npm run assets:pull
 * Re-download everything:         npm run assets:pull -- --force
 *
 * Do this BEFORE the new site replaces the old one on vismayintlcorp.com,
 * because these files are served by the old build.
 */
import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = process.env.ASSET_ORIGIN ?? "https://vismayintlcorp.com";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const force = process.argv.includes("--force");

/** [path on live site, path inside /public] */
const ASSETS = [
  // Brand
  ["/vismayLogo.svg", "/vismayLogo.svg"],
  ["/icon.png", "/icon.png"],
  ["/_next/static/media/dpo-dps.33i0pyjf-sy_r.png", "/images/compliance/dpo-dps.png"],

  // Home
  ["/videos/hero/MAIN_BANNER_1.webm", "/videos/hero/MAIN_BANNER_1.webm"],
  ["/images/ourMission/mission-1.webp", "/images/ourMission/mission-1.webp"],
  ["/images/ourMission/mission-2.webp", "/images/ourMission/mission-2.webp"],
  ["/images/ourMission/mission-3.webp", "/images/ourMission/mission-3.webp"],
  ["/images/ourMission/mission-4.webp", "/images/ourMission/mission-4.webp"],
  ["/images/ourPeople/ourPeople1.webp", "/images/ourPeople/ourPeople1.webp"],
  ["/_next/static/media/pk.3qdxaoig2hp2g.webp", "/images/brands/platinum-karaoke-logo.webp"],
  ["/_next/static/media/pk_audio.1-_az7ke1skpb.webp", "/images/brands/pk-audio-logo.webp"],
  ["/_next/static/media/news1.0zm_45w7-rs8h.webp", "/images/news/store-opening.webp"],
  ["/_next/static/media/news2.2ukzp1l0ekg4r.webp", "/images/news/sport-fest.webp"],
  ["/_next/static/media/news3.2vqezjack0e5q.webp", "/images/news/25-years.webp"],
  ["/_next/static/media/news4.0boinwsw97c6p.webp", "/images/news/concert.webp"],

  // Who we are
  ["/images/whoWeAre/whoWeAreBanner.webp", "/images/whoWeAre/whoWeAreBanner.webp"],
  ["/images/whoWeAre/ourMission.webp", "/images/whoWeAre/ourMission.webp"],
  ["/images/whoWeAre/ourVision.webp", "/images/whoWeAre/ourVision.webp"],

  // Careers
  ["/images/careers/careers.svg", "/images/careers/careers.svg"],
  ["/images/careers/jobs.svg", "/images/careers/jobs.svg"],

  // Our brands
  ["/images/brands/ourbrand.webp", "/images/brands/ourbrand.webp"],
  ["/images/brands/piano4k.webp", "/images/brands/piano4k.webp"],
  ["/images/brands/piano4kbg.webp", "/images/brands/piano4kbg.webp"],
  ["/images/brands/alpha2.webp", "/images/brands/alpha2.webp"],
  ["/images/brands/alpha2bg.webp", "/images/brands/alpha2bg.webp"],
  ["/images/brands/cello2.webp", "/images/brands/cello2.webp"],
  ["/images/brands/cello2bg.webp", "/images/brands/cello2bg.webp"],
  ["/images/brands/pk10.webp", "/images/brands/pk10.webp"],
  ["/images/brands/pk10bg.webp", "/images/brands/pk10bg.webp"],
  ["/images/brands/dk88_plain.png", "/images/brands/dk88_plain.png"],
  ["/images/brands/piano-XL-SD_plain.png", "/images/brands/piano-XL-SD_plain.png"],
  ["/images/brands/ks10-mini-sd_plain.png", "/images/brands/ks10-mini-sd_plain.png"],
  ["/images/brands/reyna-4_plain.png", "/images/brands/reyna-4_plain.png"],
];

async function exists(file) {
  try {
    return (await stat(file)).size > 0;
  } catch {
    return false;
  }
}

async function download(remote, local, attempt = 1) {
  const target = path.join(root, "public", local);
  if (!force && (await exists(target))) return { local, status: "kept" };

  try {
    const res = await fetch(ORIGIN + remote, { signal: AbortSignal.timeout(60_000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, buf);
    return { local, status: "saved", kb: Math.round(buf.length / 1024) };
  } catch (err) {
    if (attempt < 3) return download(remote, local, attempt + 1);
    return { local, status: "failed", error: String(err.message ?? err) };
  }
}

console.log(`Pulling ${ASSETS.length} assets from ${ORIGIN}\n`);

const results = [];
// Small batches so the old server is not flooded.
for (let i = 0; i < ASSETS.length; i += 4) {
  const batch = await Promise.all(ASSETS.slice(i, i + 4).map(([r, l]) => download(r, l)));
  for (const r of batch) {
    const note = r.status === "saved" ? `${r.kb} KB` : r.status === "failed" ? r.error : "already present";
    console.log(`${r.status.padEnd(6)}  ${r.local}  (${note})`);
  }
  results.push(...batch);
}

const failed = results.filter((r) => r.status === "failed");
console.log(`\n${results.length - failed.length}/${results.length} assets ready in /public.`);
if (failed.length) {
  console.log("Re-run the script, or copy these files into /public by hand:");
  failed.forEach((f) => console.log(`  - ${f.local}`));
  process.exitCode = 1;
}

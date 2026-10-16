import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The live site serves every page with a trailing slash (/who-we-are/).
  // Keeping it means every existing link, bookmark and search result still resolves.
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
  },
  async redirects() {
    return [
      // Common guesses and old-style paths, sent to the real pages.
      { source: "/our-brands", destination: "/ourbrands/", permanent: true },
      { source: "/brands", destination: "/ourbrands/", permanent: true },
      { source: "/about", destination: "/who-we-are/", permanent: true },
      { source: "/about-us", destination: "/who-we-are/", permanent: true },
      { source: "/contact", destination: "/contact-us/", permanent: true },
      { source: "/privacy", destination: "/privacy-policy/", permanent: true },
      { source: "/career", destination: "/careers/", permanent: true },
      { source: "/jobs", destination: "/careers/", permanent: true },
    ];
  },
};

export default nextConfig;

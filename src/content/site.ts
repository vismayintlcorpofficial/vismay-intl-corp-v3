/**
 * Single source of truth for every piece of company content on the site.
 * All text here comes from the current vismayintlcorp.com (audited Oct 2026).
 * Edit copy here; pages read from this file.
 */

export const site = {
  name: "Vismay International Corporation",
  shortName: "Vismay",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://vismayintlcorp.com"
  ).replace(/\/$/, ""),
  description:
    "A Philippine-based company dedicated to providing quality products and services to customers and businesses. We strive to deliver reliable solutions, excellent customer service, and value through our growing range of products and business offerings.",
  footerBlurb:
    "Vismay International Corp. is committed to delivering quality products, innovative solutions, and exceptional experiences through our diverse portfolio of brands. We strive to build lasting relationships with our customers, partners, and communities through excellence and integrity.",
  tagline: "We are shaping the future of everyday experiences",
  compliance:
    "Vismay International Corporation is now DPO/DPS compliant, certified by the National Privacy Commission.",
  social: {
    facebook: "https://www.facebook.com/vismayinternationalcorp",
    linkedin:
      "https://www.linkedin.com/company/vismay-international-corporation/",
  },
} as const;

export const nav = [
  { label: "Who We Are", href: "/who-we-are/" },
  { label: "Our Brands", href: "/ourbrands/" },
  { label: "Careers", href: "/careers/" },
  { label: "Contact Us", href: "/contact-us/" },
] as const;

export const stats = [
  { value: "950+", label: "Employees" },
  { value: "80+", label: "Iconic products" },
  { value: "12+", label: "Brand stores" },
] as const;

export const about = {
  lead: "Vismay International Corporation is built around a passion for entertainment, music, innovation, and creating experiences that bring people together.",
  story: [
    "Our journey began in 2000 with the brand Platinum Karaoke, a pioneering name in home entertainment. Over the years, Platinum Karaoke has become a trusted name in karaoke and entertainment, bringing the joy of singing and celebration to homes and communities in the Philippines and international markets, including the United Arab Emirates and other countries.",
    "Today, Vismay continues to build on this heritage through Platinum Karaoke and PK Audio, offering a diverse portfolio of karaoke, audio, and entertainment products designed for different lifestyles, occasions, and ways of enjoying music.",
  ],
  beliefQuote:
    "Our products are more than technology. They are made for experiences.",
  belief:
    "They bring families and friends together, turn ordinary gatherings into celebrations, and give people countless reasons to sing, connect, enjoy, and create memories.",
  purpose:
    "As Vismay continues to grow, we remain guided by a single purpose: to deliver innovation, quality, and service that feel personal, relevant, and true to the way people truly live and celebrate.",
  founded: "2000",
  markets: [
    "Philippines",
    "United Arab Emirates",
    "Other international markets",
  ],
} as const;

export const mission = {
  title: "Our mission",
  body: [
    "Our mission is to transform how people live and work by developing dependable, cutting-edge technology products that boost efficiency, connectivity, and convenience.",
    "We work hard to provide innovative solutions that enable people, organizations, and communities to prosper in the digital era.",
  ],
  image: "/images/whoWeAre/ourMission.webp",
};

export const vision = {
  title: "Our vision",
  body: [
    "Our vision is to be the leading provider of technology products that seamlessly integrate into people’s lives, enabling them to unlock their full potential.",
    "We envision a future where our products are at the forefront of technological advancement, empowering individuals to connect, create, and thrive. We aim to shape the digital landscape and make a positive impact on society.",
  ],
  image: "/images/whoWeAre/ourVision.webp",
};

export type Brand = {
  id: string;
  name: string;
  href: string;
  logo: string;
  summary: string;
  lines: { name: string; items: string[] }[];
};

export const brands: Brand[] = [
  {
    id: "platinum-karaoke",
    name: "Platinum Karaoke",
    href: "https://platinumkaraoke.com",
    logo: "/images/brands/pk.webp",
    summary:
      "A pioneering name in home entertainment since 2000, bringing the joy of singing and celebration to homes and communities in the Philippines and abroad.",
    lines: [
      {
        name: "Karaoke systems",
        items: ["Piano 4K", "Piano XL SD", "Alpha 2", "Tango"],
      },
      { name: "Party jukeboxes", items: [] },
      { name: "Karaoke microphones", items: [] },
    ],
  },
  {
    id: "pk-audio",
    name: "PK Audio",
    href: "https://platinumkaraoke.com/collections/pk-audio",
    logo: "/images/brands/pk_audio.webp",
    summary:
      "Our growing lifestyle audio brand, designed to bring powerful sound and enjoyable listening experiences into everyday life.",
    lines: [
      {
        name: "Lifestyle audio",
        items: ["Apollo Series", "Mate", "Zuma", "Rover", "AK Series"],
      },
    ],
  },
];

export type Product = {
  name: string;
  description: string;
  href: string;
  image: string;
  backdrop: string;
};

export const featuredProducts: Product[] = [
  {
    name: "Piano 4K",
    description: "High-end home karaoke system",
    href: "https://platinumkaraoke.com/collections/piano-4k",
    image: "/images/brands/piano4k.webp",
    backdrop: "/images/brands/piano4kbg.webp",
  },
  {
    name: "Alpha 2",
    description: "High-end home karaoke system",
    href: "https://platinumkaraoke.com/products/alpha-2-high-end-home-karaoke-system",
    image: "/images/brands/alpha2.webp",
    backdrop: "/images/brands/alpha2bg.webp",
  },
  {
    name: "Cello 2",
    description: "UHF wireless microphone karaoke player",
    href: "https://platinumkaraoke.com/products/cello-2-uhf-wireless-microphone-karaoke-player",
    image: "/images/brands/cello2.webp",
    backdrop: "/images/brands/cello2bg.webp",
  },
  {
    name: "PK10",
    description: "All-in-one party speaker with UHF wireless keypad microphone",
    href: "https://platinumkaraoke.com/products/pk-10-trolley-speaker",
    image: "/images/brands/pk10.webp",
    backdrop: "/images/brands/pk10bg.webp",
  },
];

export const productSeries = [
  {
    name: "Party Jukebox",
    note: "Featuring the DK88",
    href: "https://platinumkaraoke.com/collections/speakers-with-built-in-karaoke",
    image: "/images/brands/dk88_plain.png",
    alt: "DK88 party jukebox",
  },
  {
    name: "Piano Series",
    note: "Home karaoke systems",
    href: "https://platinumkaraoke.com/collections/piano-series",
    image: "/images/brands/piano-XL-SD_plain.png",
    alt: "Piano XL SD karaoke system",
  },
  {
    name: "KS Series",
    note: "Karaoke systems",
    href: "https://platinumkaraoke.com/collections/ks-series",
    image: "/images/brands/ks10-mini-sd_plain.png",
    alt: "KS10 Mini SD karaoke system",
  },
  {
    name: "Reyna Series",
    note: "Karaoke systems",
    href: "https://platinumkaraoke.com/collections/reyna-series",
    image: "/images/brands/reyna-4_plain.png",
    alt: "Reyna 4 karaoke system",
  },
] as const;

export const news = [
  {
    title: "Platinum Karaoke store opening",
    image: "/images/news/news1.webp",
    alt: "Ribbon cutting at a new Platinum Karaoke store",
    body: "Vismay International Corporation proudly celebrates the opening of a new Platinum Karaoke store, bringing premium karaoke entertainment closer to music lovers. This special occasion marks another milestone in our commitment to delivering quality products, innovative entertainment solutions, and unforgettable experiences to our customers.",
  },
  {
    title: "Platinum Karaoke Sport Fest",
    image: "/images/news/news2.webp",
    alt: "Employee basketball team at the Platinum Karaoke Sport Fest",
    body: "Teamwork, camaraderie, and sportsmanship take center stage at the Platinum Karaoke Sport Fest. Vismay International Corporation brings employees and teams together through exciting sporting activities, fostering stronger connections, healthy competition, and a shared spirit of unity beyond the workplace.",
  },
  {
    title: "Platinum Karaoke celebrates 25 years",
    image: "/images/news/news3.webp",
    alt: "Guests celebrating Platinum Karaoke’s 25th anniversary",
    body: "Celebrating 25 years of passion, innovation, and entertainment, Platinum Karaoke reflects on a remarkable journey of connecting people through music. Vismay International Corporation honors this milestone with gratitude to our customers, partners, and dedicated team members who have been part of our growth and success.",
  },
  {
    title: "Platinum Karaoke Concert",
    image: "/images/news/news4.webp",
    alt: "Team members at a Platinum Karaoke store event",
    body: "Experience the energy of music and entertainment at the Platinum Karaoke Concert. Vismay International Corporation celebrates the joy of live performances and shared musical experiences, bringing together music enthusiasts and supporters for an unforgettable celebration of sound, talent, and entertainment.",
  },
] as const;

export const lifestyleImages = [
  {
    src: "/images/ourMission/mission-1.webp",
    alt: "Friends singing karaoke together at home",
  },
  {
    src: "/images/ourMission/mission-2.webp",
    alt: "A woman singing into a microphone at a party",
  },
  {
    src: "/images/ourMission/mission-3.webp",
    alt: "Friends sharing music on a city rooftop",
  },
  {
    src: "/images/ourMission/mission-4.webp",
    alt: "Friends celebrating at an outdoor festival",
  },
] as const;

export const careers = {
  intro:
    "Build your career with Vismay and be part of a team driven by passion for creating meaningful experiences.",
  heading: "Careers with purpose",
  body: "At Vismay, what you do matters. Whether you’re just starting out or ready for a new challenge, your work can shape the world and your own future all at once.",
  openings: [
    "Marketing Head",
    "Customer Service Head",
    "Trade Marketing Manager",
    "Training Manager",
    "Digital Marketing Manager",
    "Events and Activation Manager",
    "Channel Sales Manager",
    "Product Manager",
    "Field Force & Agency Manager",
    "Platinum Brandstore Manager",
    "Sales Operations Manager",
  ],
  channels: [
    {
      name: "JobStreet",
      href: "https://ph.jobstreet.com/companies/vismay-international-corporation-168552132659638",
      note: "See full job descriptions and apply",
    },
    {
      name: "Indeed",
      href: "https://ph.indeed.com/cmp/Vismay-International-Corporation",
      note: "Browse openings and company reviews",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/vismayinternationalcorp/",
      note: "Follow for new openings and hiring news",
    },
  ],
} as const;

export const privacyPolicy = {
  title: "Data privacy statement",
  intro:
    "The Company (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal data in compliance with the Data Privacy Act of 2012 and its Implementing Rules and Regulations (IRR). This privacy statement describes our policies regarding the collection, use, storage, sharing, and disposal of personal information.",
  purposeLead:
    "As we may collect and process various types of personal information, we will only use this information for the following purposes:",
  purposes: [
    {
      term: "Service provision",
      text: "to process your orders, provide customer service and fulfill your orders",
    },
    {
      term: "Business operations",
      text: "to evaluate business partnerships and manage workforce",
    },
    {
      term: "Marketing & promotions",
      text: "to keep you in the loop with our products, promotions and services",
    },
    {
      term: "Legal compliance",
      text: "to comply with applicable legal requirements",
    },
  ],
  sections: [
    {
      heading: "Retention and disposal",
      body: [
        "We will retain personal information for as long as it is necessary to fulfill the purposes outlined in this statement, or as required by applicable laws. When no longer needed, we securely dispose of personal information to prevent unauthorized access or use.",
      ],
    },
    {
      heading: "Sharing",
      body: [
        "We may share your information with our affiliates and subsidiaries for operations and promotions, and with our service providers: third-party companies that provide services on our behalf, such as payment processing, data storage, and delivery services.",
        "Our third-party providers are mandated to implement similar levels of protection for your data and adhere to this privacy statement.",
      ],
    },
    {
      heading: "Security",
      body: [
        "We commit to implement appropriate organizational, physical, and technical security measures to protect your personal information against unauthorized access, use, and disclosure. We regularly review and update our security practices to ensure the confidentiality, integrity, and availability of your data.",
      ],
    },
    {
      heading: "Changes to this statement",
      body: [
        "We may modify this statement from time to time in line with regulatory requirements, updates or business practices. Significant changes will be communicated to affected individuals in accordance with the Data Privacy Act and related regulations.",
      ],
    },
    {
      heading: "Scope",
      body: [
        "Throughout this Statement, “the COMPANY” refers to either VISMAY International Corporation and Xtremeway Corporation, including its affiliated companies, branches, and subsidiaries.",
      ],
    },
  ],
} as const;

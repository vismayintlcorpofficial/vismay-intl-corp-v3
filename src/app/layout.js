import { montserrat, geistSans, geistMono } from "@/components/ui/fonts";
import "./globals.css";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { title } from "motion/react-client";

export const metadata = {
  title: {
    default: "Vismay International Corporation",
    template: "%s | Vismay International Corporation",
  },

  description:
    "A Philippine-based company dedicated to providing quality products and services to customers and businesses. We strive to deliver reliable solutions, excellent customer service, and value through our growing range of products and business offerings.",

  authors: [{ name: "Vismay International Corporation" }],
  creator: "Vismay International Corporation",

  openGraph: {
    title: "Vismay International Corporation",
    description:
      "A Philippine-based company dedicated to providing quality products and services to customers and businesses. We strive to deliver reliable solutions, excellent customer service, and value through our growing range of products and business offerings.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "icon.svg",
        width: 400,
        height: 400,
        alt: "Vismay International Corporation",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-[#ECF0F8] selection:text-[#06529B]">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

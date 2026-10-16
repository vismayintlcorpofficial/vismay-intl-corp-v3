import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "color" is the official blue logo; "white" knocks it out for dark backgrounds. */
  tone?: "color" | "white";
  className?: string;
  /** Hide the "International Corporation" line on very small screens. */
  compact?: boolean;
};

export function Logo({ tone = "color", className, compact }: LogoProps) {
  const dark = tone === "white";
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-3 rounded-md", className)}
      aria-label="Vismay International Corporation, home"
    >
      <Image
        src="/vismayLogo.png"
        alt=""
        width={104}
        height={122}
        priority
        unoptimized
        className={cn(
          "h-10 w-auto transition-[filter] duration-300 sm:h-11",
          dark && "brightness-0 invert",
        )}
      />
    </Link>
  );
}

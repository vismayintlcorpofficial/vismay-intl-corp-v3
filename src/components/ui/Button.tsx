import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "light" | "ghost-light" | "text";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-[-0.005em] transition-[background-color,color,border-color,box-shadow] duration-200 ease-out-soft disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ocean-600 text-white hover:bg-ocean-700 active:bg-ocean-800",
  secondary: "border border-ocean-600/30 bg-white text-ocean-700 hover:border-ocean-600 hover:bg-ocean-50",
  light: "bg-white text-navy hover:bg-ocean-50",
  "ghost-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
  text: "rounded-md px-0 text-ocean-600 hover:text-ocean-800",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[0.9375rem]",
  lg: "h-[3.25rem] px-7 text-base",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className,
  arrow = true,
}: ButtonLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const Icon = isExternal ? ArrowUpRight : ArrowRight;
  const classes = cn(base, variants[variant], variant !== "text" && sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon
          aria-hidden
          className={cn(
            "size-[1.1em] shrink-0 transition-transform duration-200 ease-out-soft",
            isExternal ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : "group-hover:translate-x-1",
          )}
        />
      )}
      {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant; size?: Size };

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}

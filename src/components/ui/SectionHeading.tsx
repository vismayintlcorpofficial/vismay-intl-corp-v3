import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
  /** Optional element placed opposite the heading on wide screens (e.g. a link). */
  aside?: ReactNode;
};

export function SectionHeading({
  title,
  intro,
  id,
  align = "left",
  tone = "light",
  as: Tag = "h2",
  className,
  aside,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        <Tag id={id} className={cn("text-h2 font-extrabold", dark ? "text-white" : "text-navy")}>
          {title}
        </Tag>
        {intro && (
          <p className={cn("mt-5 text-lead", dark ? "text-white/80" : "text-slate", align === "center" && "mx-auto max-w-2xl")}>
            {intro}
          </p>
        )}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
}

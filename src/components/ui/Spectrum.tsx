import { cn } from "@/lib/cn";

/**
 * The spectrum lines from the Vismay "V" mark, drawn as a row of bars.
 * It is the site's one signature graphic: it rises once on the home hero
 * and appears static elsewhere as a quiet brand device.
 */

type SpectrumProps = {
  bars?: number;
  className?: string;
  barClassName?: string;
  /** Play the one-time rise animation (respects reduced motion via globals.css). */
  animate?: boolean;
  /** "peak" mirrors the logo (tallest in the middle); "rise" climbs left to right. */
  shape?: "peak" | "rise";
};

// Deterministic jitter so server and client render identical bars.
function jitter(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function Spectrum({ bars = 29, className, barClassName, animate, shape = "peak" }: SpectrumProps) {
  const mid = (bars - 1) / 2;
  const heights = Array.from({ length: bars }, (_, i) => {
    const t = shape === "peak" ? 1 - Math.abs(i - mid) / (mid + 1) : (i + 1) / bars;
    const h = 0.12 + 0.88 * Math.pow(t, 1.6) * (0.82 + 0.18 * jitter(i + 1));
    return Math.round(h * 1000) / 10;
  });

  return (
    <div aria-hidden className={cn("flex items-end gap-[3px]", className)}>
      {heights.map((h, i) => (
        <span
          key={i}
          className={cn(
            "block w-[3px] flex-none origin-bottom rounded-full bg-current",
            animate && "animate-eq",
            barClassName,
          )}
          style={{
            height: `${h}%`,
            animationDelay: animate ? `${450 + Math.abs(i - mid) * 35}ms` : undefined,
          }}
        />
      ))}
    </div>
  );
}

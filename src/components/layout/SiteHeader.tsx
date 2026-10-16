"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  const clean = (p: string) => p.replace(/\/+$/, "") || "/";
  return clean(pathname) === clean(href);
}

/**
 * Sticky header. Every page opens on a dark hero, so the header starts
 * transparent with white type and turns solid white once the page scrolls.
 */
export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Menu open: lock page scroll, close on Escape, keep Tab inside the panel.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button"));
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl?.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-out-soft",
        solid
          ? "border-b border-line/80 bg-white/95 shadow-[0_1px_0_rgba(6,29,56,0.03)] backdrop-blur-md"
          : open
            ? "border-b border-white/10 bg-navy"
            : "border-b border-transparent bg-transparent",
        !solid && "on-dark",
      )}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo tone={solid ? "color" : "white"} compact />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              const isCta = item.href === "/contact-us/";
              if (isCta) {
                return (
                  <li key={item.href} className="ml-3">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex h-11 items-center gap-2 rounded-full px-5 text-[0.9375rem] font-semibold transition-colors duration-200",
                        solid ? "bg-ocean-600 text-white hover:bg-ocean-700" : "bg-white text-navy hover:bg-ocean-50",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center rounded-full px-4 text-[0.9375rem] font-semibold transition-colors duration-200",
                      solid ? "text-ink hover:text-ocean-600" : "text-white/90 hover:text-white",
                      "after:absolute after:inset-x-4 after:bottom-1.5 after:h-0.5 after:origin-left after:rounded-full after:transition-transform after:duration-300",
                      solid ? "after:bg-ocean-600" : "after:bg-signal",
                      active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full transition-colors lg:hidden",
            open ? "text-white" : solid ? "text-navy hover:bg-mist" : "text-white hover:bg-white/10",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="on-dark fixed inset-0 top-20 z-40 overflow-y-auto bg-navy text-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col pb-10 pt-6">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {[{ label: "Home", href: "/" }, ...nav].map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-5 text-2xl font-bold tracking-[-0.02em]",
                      active ? "text-signal" : "text-white",
                    )}
                  >
                    {item.label}
                    <ArrowRight aria-hidden className="size-5 opacity-60" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto flex items-center gap-3 pt-10">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
              aria-label="Vismay on Facebook (opens in a new tab)"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
              aria-label="Vismay on LinkedIn (opens in a new tab)"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

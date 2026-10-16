"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

type HeroVideoProps = {
  src: string;
  poster: string;
};

/**
 * Background brand film for the home hero.
 * - Never autoplays for visitors who prefer reduced motion (they see the poster).
 * - Has a visible pause/play control (WCAG 2.2.2).
 * - Pauses itself when scrolled out of view to save battery and CPU.
 */
export function HeroVideo({ src, poster }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (reduced || userPaused) {
      video.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => setPlaying(false));
        else video.pause();
      },
      { threshold: 0.15 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [reduced, userPaused]);

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 -z-20 size-full object-cover"
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={src} type="video/webm" />
      </video>

      {!reduced && (
        <button
          type="button"
          onClick={() => {
            const video = ref.current;
            if (!video) return;
            if (playing) {
              setUserPaused(true);
              video.pause();
            } else {
              setUserPaused(false);
              video.play().catch(() => undefined);
            }
          }}
          className="absolute bottom-6 right-5 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-navy/40 text-white backdrop-blur-sm transition-colors hover:bg-navy/70 sm:right-8 lg:bottom-10 lg:right-12"
          aria-label={playing ? "Pause background video" : "Play background video"}
        >
          {playing ? <Pause aria-hidden className="size-4" /> : <Play aria-hidden className="size-4 translate-x-px" />}
        </button>
      )}
    </>
  );
}

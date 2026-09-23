"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: "Vismay International Corp.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus tempore nobis laboriosam hic blanditiis quam adipisci quis magni minus fuga optio nemo obcaecati aliquam sed, dolor quaerat et ipsam?",
    image: "/videos/hero/MAIN_BANNER_1.webm",
    link: "#",
  },
  {
    title: "Vismay International",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus tempore nobis laboriosam hic blanditiis quam adipisci quis magni minus fuga optio nemo obcaecati aliquam sed, dolor quaerat et ipsam?",
    image: "/videos/hero/MAIN_BANNER_2.webm",
    link: "#",
  },
  {
    title: "Vismay",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique temporibus tempore nobis laboriosam hic blanditiis quam adipisci quis magni minus fuga optio nemo obcaecati aliquam sed, dolor quaerat et ipsam?",
    image: "/videos/hero/MAIN_BANNER_3.webm",
    link: "#",
  },
];

const SLIDE_DURATION = 5000;

export default function HeroBanner() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const remainingTime = useRef(SLIDE_DURATION);
  const startTime = useRef(null);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);

  const clearTimers = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const changeSlide = () => {
    // stop the current slide's timers
    clearTimers();

    // reset progress to 0
    setProgress(0);

    // reset the timer for the next slide
    remainingTime.current = SLIDE_DURATION;
    startTime.current = null;

    // Move to the next slide
    setActive((prev) => (prev + 1) % slides.length);
  };

  // Start timer
  useEffect(() => {
    if (isPaused) return;

    startTime.current = Date.now();

    const initialRemaining = remainingTime.current;

    timerRef.current = setTimeout(() => {
      // Stop the interval so it cannot overwrite 100%
      clearTimers();

      // First, let the current slide reach 100%
      setProgress(100);

      // Wait for the 100% state to render
      timerRef.current = setTimeout(() => {
        remainingTime.current = SLIDE_DURATION;
        startTime.current = null;

        // Change slide and reset progress together
        setActive((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, 150);
    }, initialRemaining);

    intervalRef.current = setInterval(() => {
      if (!startTime.current) return;

      const elapsed = Date.now() - startTime.current;

      const remaining = Math.max(0, initialRemaining - elapsed);

      const currentProgress = Math.min(
        100,
        ((SLIDE_DURATION - remaining) / SLIDE_DURATION) * 100,
      );

      setProgress(currentProgress);
    }, 50);

    return () => {
      clearTimers();
    };
  }, [active, isPaused]);

  // Pause timer
  const handleMouseEnter = () => {
    if (isPaused || !startTime.current) return;

    const elapsed = Date.now() - startTime.current;

    remainingTime.current = Math.max(0, remainingTime.current - elapsed);

    clearTimers();

    setIsPaused(true);
  };

  // Resume timer
  const handleMouseLeave = () => {
    if (!isPaused) return;

    startTime.current = null;

    setIsPaused(false);
  };

  // Manual slide selection
  const selectSlide = (index) => {
    clearTimers();

    remainingTime.current = SLIDE_DURATION;
    startTime.current = null;

    setProgress(0);
    setActive(index);
  };

  // Play / Pause
  const togglePause = () => {
    if (isPaused) {
      handleMouseLeave();
    } else {
      handleMouseEnter();
    }
  };

  const currentSlide = slides[active];

  return (
    <section
      className="relative flex min-h-225 w-full flex-col justify-between overflow-hidden text-white"
      style={{
        backgroundColor: "#06529B",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image */}
      <div className="absolute h-200 inset-0 z-0 overflow-hidden rounded-br-[150px]">
        <AnimatePresence mode="wait">
          <Link
            key={active}
            href={currentSlide.link}
            className="absolute inset-0 z-10 block"
          >
            <motion.video
              key={active}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              initial={{
                opacity: 0,
                scale: 1.05,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <source src={currentSlide.image} type="video/webm" />
            </motion.video>

            <motion.div
              className="absolute top-60 left-40 w-130"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl font-bold">{currentSlide.title}</h3>
              <p className="w-110">{currentSlide.description}</p>
            </motion.div>
          </Link>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="relative z-10 mt-auto flex w-full items-end gap-5 px-5 pb-8 pt-6 md:px-[8vw]">
        {slides.map((slide, index) => {
          const isActive = index === active;

          return (
            <button
              key={slide.title}
              className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent p-0 text-left text-white"
              onClick={() => selectSlide(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={isActive ? "step" : undefined}
            >
              {/* Title + Icon */}
              <div className="flex min-h-8 items-center justify-between gap-3 text-xs font-normal md:text-sm">
                <span>{slide.title}</span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/80 text-xs">
                  {isActive && !isPaused ? "Ⅱ" : "▷"}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative mt-3 h-0.75 w-full overflow-hidden bg-black/20">
                <motion.div
                  className="h-full bg-white"
                  animate={{
                    width: isActive ? `${progress}%` : "0%",
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

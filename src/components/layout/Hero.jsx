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
  const videoRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();

      // Resume the timer
      startTime.current = Date.now();

      setIsPaused(false);
    } else {
      // Calculate how much time has already passed
      const elapsed = Date.now() - startTime.current;

      remainingTime.current = Math.max(0, remainingTime.current - elapsed);

      // Stop the timer
      clearTimers();

      // Stop the video
      video.pause();

      setIsPaused(true);
    }
  };
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

  useEffect(() => {
    if (isPaused) return;

    startTime.current = Date.now();

    const initialRemaining = remainingTime.current;

    timerRef.current = setTimeout(() => {
      clearTimers();

      setProgress(100);

      timerRef.current = setTimeout(() => {
        remainingTime.current = SLIDE_DURATION;
        startTime.current = null;

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

  const handleMouseEnter = () => {
    if (isPaused || !startTime.current) return;

    const elapsed = Date.now() - startTime.current;

    remainingTime.current = Math.max(0, remainingTime.current - elapsed);

    clearTimers();

    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (!isPaused) return;

    startTime.current = null;

    setIsPaused(false);
  };

  const selectSlide = (index) => {
    clearTimers();

    remainingTime.current = SLIDE_DURATION;
    startTime.current = null;

    setProgress(0);
    setActive(index);
  };

  // const togglePause = () => {
  //   if (isPaused) {
  //     handleMouseLeave();
  //   } else {
  //     handleMouseEnter();
  //   }
  // };

  const currentSlide = slides[active];

  return (
    <section
      className="relative flex min-h-[650px] sm:min-h-[700px] lg:min-h-[900px] xl:min-h-[1000px] w-full flex-col justify-between overflow-hidden bg-[#06529B] text-white "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden ">
        <AnimatePresence mode="wait">
          <Link
            key={active}
            href={currentSlide.link}
            className="absolute inset-0 block"
          >
            {/* Video */}
            <motion.video
              ref={videoRef}
              key={active}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 min-h-[550px] sm:min-h-[600px] lg:min-h-[800px] xl:min-h-[900px] w-full object-cover rounded-br-[70px] sm:rounded-br-[100px] lg:rounded-br-[150px]"
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

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <motion.div
              className="absolute left-5 right-5 top-1/2 -translate-y-1/2 sm:left-10 sm:right-auto sm:w-125 lg:left-[10vw] lg:top-1/2 lg:w-137.5"
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <h3 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
                {currentSlide.title}
              </h3>

              <p className="mt-4 max-w-full text-sm leading-relaxed sm:max-w-120 sm:text-base lg:text-lg">
                {currentSlide.description}
              </p>

              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();

                  toggleVideo();
                }}
                className="mt-6 flex h-10 w-10 items-center justify-center rounded-full border  border-white/80 text-sm transition hover:bg-white hover:text-[#06529B]"
              >
                {isPaused ? "▷" : "Ⅱ"}
              </button>
            </motion.div>
          </Link>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="relative  z-10 mt-auto flex w-full items-end gap-3 px-5 pb-6 pt-6 sm:gap-5 sm:px-10 lg:px-[8vw] lg:pb-8">
        {slides.map((slide, index) => {
          const isActive = index === active;

          return (
            <button
              key={slide.title}
              type="button"
              className="min-w-0 flex-1 cursor-pointer border-0 bg-transparent p-0 text-left text-white"
              onClick={() => selectSlide(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={isActive ? "step" : undefined}
            >
              {/* Indicator */}
              <div className="flex items-center justify-between">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/80 text-xs sm:h-8 sm:w-8">
                  {isActive && !isPaused ? "Ⅱ" : "▷"}
                </span>
              </div>

              {/* Progress */}
              <div className="relative mt-3 h-1 w-full overflow-hidden bg-black/20">
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

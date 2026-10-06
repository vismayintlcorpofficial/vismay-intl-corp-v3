"use client";
import Image from "next/image";
import Link from "next/link";

import employees from "../../../public/images/milestones/employees_icon.webp";
import products from "../../../public/images/milestones/product_icon.webp";
import stores from "../../../public/images/milestones/stores_icon.webp";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const milestones = [
  {
    image: employees,
    description: "A diverse workforce",
    title: "900+ Employees",
  },
  {
    image: products,
    description: "A rich history in the Philippines",
    title: "50+ Iconic Product",
  },
  {
    image: stores,
    description: "A diverse store",
    title: "10+ Brand Stores",
  },
];
const Milestones = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    const marquees = document.querySelectorAll(".milestone_marquee");

    if (!window.matchMedia("(prefers-reduced-motion: reduce) ").matches) {
      marquees.forEach((marquee) => {
        marquee.setAttribute("data-animated", "true");
      });
    }
  }, []);
  return (
    <section className="h-125 w-full flex flex-col justify-center bg-[#06529B] text-white">
      <div className="flex gap-12 flex-col ">
        <div className="max-w-screen-xl mx-auto w-full">
          <h3 className="text-3xl text-center md:text-left md:text-4xl md:ml-6 ml-0">
            Vismay in the Philippines
          </h3>
        </div>
        <div className="overflow-hidden milestone_marquee scrollbar-hide">
          <div
            className="gap-16 marquee_inner scrollbar-hide inline-flex"
            style={{
              animationPlayState: isPlaying ? "running" : "paused",
            }}
          >
            {milestones.map((milestone) => {
              return (
                <div
                  key={`orig-${milestone.title}`}
                  className="flex gap-16 items-center shrink-0"
                >
                  <Image
                    className="rounded-xl"
                    width={112}
                    height={114}
                    src={milestone.image}
                    alt={milestone.title}
                    loading="eager"
                  />
                  <div className="flex flex-col gap-4">
                    <span className="font-extralight text-xl">
                      {milestone.description}
                    </span>
                    <h3 className="text-4xl font-extrabold">
                      {milestone.title}
                    </h3>
                  </div>
                </div>
              );
            })}
            {milestones.map((milestone) => {
              return (
                <div
                  key={`dup-${milestone.title}`}
                  className="flex gap-16 items-center shrink-0"
                >
                  <Image
                    className="rounded-xl"
                    width={112}
                    height={114}
                    src={milestone.image}
                    alt={milestone.title}
                    loading="eager"
                  />
                  <div className="flex flex-col gap-4">
                    <span className="font-extralight text-xl">
                      {milestone.description}
                    </span>
                    <h3 className="text-4xl font-extrabold">
                      {milestone.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="max-w-screen-2xl lg:mx-auto w-full flex justify-between px-12">
          <Link href="#" className="py-2 px-8 border border-white rounded-3xl">
            About us
          </Link>
          {/* Control Button */}
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            className=" text-white rounded-md font-medium transition-colors cursor-pointer"
          >
            {isPlaying ? (
              <Pause size={36} color="#D9D9D9" />
            ) : (
              <Play size={36} color="#D9D9D9" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;

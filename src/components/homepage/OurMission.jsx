"use client";
import Image from "next/image";
import { useEffect } from "react";

const images = [
   "/images/ourMission/mission-1.svg",
   "/images/ourMission/mission-4.svg",
   "/images/ourMission/mission-2.svg",
   "/images/ourMission/mission-3.svg",
];

export default function OurMission() {
   useEffect(() => {
      const marquees = document.querySelectorAll(".marquee");

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
         marquees.forEach(marquee => {
            marquee.setAttribute("data-animated", "true");
         });
      }
   }, []);

   return (
      <section className="w-full pb-20 bg-white justify-center items-center flex flex-col">
         <div className="overflow-hidden scrollbar-hide marquee rounded-xl">
            <div className="marquee_inner gap-3 scrollbar-hide">
               {images.map((image, index) => (
                  <Image
                     key={index}
                     src={image}
                     alt={`Mission ${index + 1}`}
                     width={0}
                     height={0}
                     className="w-50 h-50 md:w-70 md:h-70 xl:w-103 xl:h-103"
                  />
               ))}
               {images.map((image, index) => (
                  <Image
                     key={index}
                     src={image}
                     alt={`Mission ${index + 1}`}
                     width={0}
                     height={0}
                     className="w-50 h-50 md:w-70 md:h-70 xl:w-103 xl:h-103"
                  />
               ))}
            </div>
         </div>
      </section>
   );
}

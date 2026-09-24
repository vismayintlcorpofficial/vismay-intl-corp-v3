"use client";
import Image from "next/image";

export default function OurPeople() {
  return (
    <section className="text-white w-full">
      {/* Banner */}
      <div className="relative">
        <Image
          src="/images/ourPeople/ourPeople1.svg"
          alt="OurPoeple"
          width={0}
          height={0}
          className="w-full h-full"
        />
        <p className="absolute sm:left-10 lg:left-50 top-2/3 text-lg sm:text-xl md:text-4xl xl:text-6xl w-full px-10 md:w-3/4 lg:w-1/2 font-bold">
          We are innovators, empowering people and shaping experiences that
          inspire a better tomorrow.
        </p>
      </div>
      {/*  */}
      <div className="py-20 px-10 flex flex-col sm:relative justify-center items-center">
        <div className="md:w-10/20 2xl:w-10/28 w-full md:px-1 bg-white dark:bg-black p-0.5 order-1 rounded-3xl md:absolute -mt-7.5 md:mt-0 md:right-100/220 xl:right-100/215 md:top-1/4">
          <p className="bg-[#06529B] 2xl:text-base/5 xl:text-lg p-5 lg:py-10 xl:px-15 rounded-3xl font-bold">
            We&apos;re entertainment enthusiasts, bringing people together
            through music, technology, and unforgettable experiences.
            <br />
            <br /> We&apos;re innovators, delivering quality entertainment
            solutions that inspire connection, enjoyment, and creativity. <br />
            <br />
            We&apos;re a team of passionate individuals, dedicated to creating
            experiences that make every moment more meaningful and memorable.
            <br />
            <br />
            We&apos;re committed to growing our brands, empowering our people,
            and shaping the future of entertainment.
          </p>
        </div>
        <Image
          className="md:ml-[50%] 2xl:ml-[35%] lg h-auto 2xl:w-140.75 lg:w-100 order-0"
          src="/images/ourPeople/ourPeople2.svg"
          alt="Vismay Employee"
          width={631}
          height={631}
        />
      </div>
    </section>
  );
}

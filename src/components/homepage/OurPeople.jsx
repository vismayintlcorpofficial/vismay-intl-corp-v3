"use client";
import Image from "next/image";

export default function OurPeople() {
  return (
    <section className="text-white w-full">
      {/* Banner */}
      <div className="relative pt-12">
        <Image
          src="/images/ourPeople/ourPeople1.svg"
          alt="OurPoeple"
          width={0}
          height={0}
          className="w-full h-full"
        />
        <p className="absolute md:left-10 lg:left-50 top-2/3 text-lg  md:text-4xl xl:text-6xl w-full px-10 md:w-3/4 lg:w-1/2 font-bold">
          Lorem ipsum dolor sit amet, adipiscing elit. Phasellus con libero mi,
          at tincidunt odio mo
        </p>
      </div>
      {/*  */}
      <div className="w-full flex flex-col justify-center items-center md:py-12 md:px-10 py-12 px-5">
        <div className="max-w-312.5 dark:bg-black w-full flex md:flex-row flex-col md:items-center ">
          {/* absolute left-0 top-1/2 translate-x-0 -translate-y-1/2 */}
          <div className="lg:-mr-3 md:-mr-10 space-y-3 flex flex-col justify-center items-center lg:p-12 md:p-5 p-8 text-base font-bold bg-[#06529B] border-4 border-[#B1D9FF] rounded-2xl z-10 md:order-0 order-1">
            <p>
              We pursue innovation, transforming ideas into solutions with
              purpose.
            </p>
            <p>
              We value quality, delivering products and experiences built to
              make a lasting impact.
            </p>
            <p>
              We build relationships, creating partnerships founded on trust and
              shared success.
            </p>
            <p>
              We embrace the future, continuously evolving to create greater
              possibilities.
            </p>
          </div>
          <div className="relative md:min-h-157.75 xl:min-w-157.75  lg:min-w-120 min-h-90 min-w-90 md:ml-auto ml-0 md:order-1 order-0 ">
            <Image
              className="object-cover rounded-xl  "
              src="/images/ourPeople/ourPeople2.svg"
              alt="Vismay Employee"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

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
            <p className="absolute sm:left-10 lg:left-100 top-2/3 text-lg sm:text-xl md:text-4xl xl:text-6xl w-full px-10 md:w-3/4 lg:w-1/2 font-bold">
               Lorem ipsum dolor sit amet, adipiscing elit. Phasellus con libero
               mi, at tincidunt odio mo
            </p>
         </div>
         {/*  */}
         <div className="py-20 px-10 flex flex-col sm:relative justify-center items-center">
            <div className="md:w-10/20 2xl:w-10/28 w-full md:px-1 bg-white dark:bg-black p-[2px] order-1 rounded-3xl md:absolute mt-[-30px] md:mt-0 md:right-100/220 xl:right-100/240 2xl:right-100/235 md:top-1/4">
               <p className="bg-[#06529B] 2xl:text-xl/7 xl:text-lg p-5 lg:py-10 xl:px-15 rounded-3xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br />
                  <br /> Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis
                  aute irure dolor in reprehenderit in <br />
                  <br />
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. <br />
                  <br />
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
               </p>
            </div>
            <Image
               className="md:ml-[50%] 2xl:ml-[35%] lg h-auto 2xl:w-157.75 lg:w-100 order-0"
               src="/images/ourPeople/ourPeople2.svg"
               alt="Vismay Employee"
               width={631}
               height={631}
            />
         </div>
      </section>
   );
}

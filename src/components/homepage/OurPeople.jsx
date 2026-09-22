"use client";
import Image from "next/image";

export default function OurPeople() {
   return (
      <section>
         {/* Banner */}
         <div className="relative">
            <Image
               src="/images/ourPeople/ourPeople1.svg"
               alt="OurPoeple"
               width={0}
               height={0}
               className="w-full h-full"
            />
            <p className="absolute sm:left-10 lg:left-40 top-2/3 text-lg sm:text-xl md:text-3xl lg:text-5xl w-full px-10 md:w-3/4 font-bold">
               Lorem ipsum dolor sit amet, adipiscing elit. Phasellus con libero
               mi, at tincidunt odio mo
            </p>
         </div>
         {/*  */}
         <div className="py-10 px-10 bg-white flex flex-col sm:relative justify-center items-center">
            <div className="md:w-10/20 2xl:w-10/28 w-full md:px-1 bg-white p-[2px] order-1 rounded-3xl md:absolute mt-[-30px] md:mt-0 md:right-100/220 xl:right-100/240 2xl:right-100/235 md:top-1/4">
               <p className="bg-[#06529B] text-xs lg:text-base/5 p-5 lg:py-10 xl:px-15 rounded-3xl font-bold">
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
               className="md:ml-[50%] 2xl:ml-[40%] lg h-auto w-100 md:w-100 order-0 lg:w-120"
               src="/images/ourPeople/ourPeople2.svg"
               alt="Vismay Employee"
               width={600}
               height={600}
            />
         </div>
      </section>
   );
}

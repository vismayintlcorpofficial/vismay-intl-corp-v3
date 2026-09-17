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
            <p className="absolute left-27.5 md:left-55 top-2/3 text-xl md:text-6xl w-1/2 font-bold">
               Lorem ipsum dolor sit amet, adipiscing elit. Phasellus con libero
               mi, at tincidunt odio mo
            </p>
         </div>
         {/*  */}
         <div className="py-10 bg-white sm:relative justify-center items-center">
            <div className="lg:w-1/3 w-1/2 bg-white p-0.5 rounded-3xl absolute right-100/202 lg:top-1/4">
               <p className="bg-[#06529B] text-xs lg:text-base/5 p-1 md:py-10 md:px-15 rounded-3xl font-bold">
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
               className="ml-[50%] h-auto w-75 md:w-100 lg:w-150"
               src="/images/ourPeople/ourPeople2.svg"
               alt="Vismay Employee"
               width={600}
               height={600}
            />
         </div>
      </section>
   );
}

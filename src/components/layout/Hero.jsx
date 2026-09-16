import Image from "next/image";
import HomeBanner from "../../../public/images/hero/homeBanner.webp";
export default function Hero({ src, alt }) {
   return (
      <section className="h-250 w-full bg-[#06529B]">
         <div className="w-full h-full relative">
            <Image
               className="rounded-br-[150px] "
               src={HomeBanner}
               alt="Home Banner Arca South"
            />
            <div className="absolute top-2/6 left-1/12 ">
               <p className="text-3xl font-bold">
                  VISMAY INTERNATIONAL CORPORATION
               </p>
               <p className="w-5/12">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Asperiores, quia sunt quis et ipsa sapiente porro ipsam nihil
                  id sequi perferendis nostrum mollitia beatae doloremque minus
                  odit? Blanditiis, quam incidunt?{" "}
               </p>
            </div>
         </div>
      </section>
   );
}

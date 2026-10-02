import Image from "next/image";

export default function ImageProduct({
   header,
   paragraph,
   paraImg,
   curvedImg,
}) {
   return (
      <section className="flex flex-col md:flex-row bg-[#e7ecf5] text-black mx-2 md:mx-10 justify-between my-1 rounded-bl-xl">
         <Image
            className="w-full md:w-[50%] order-1 md:order-0"
            src={curvedImg}
            alt="Image"
            width={10}
            height={10}
         />
         <div className="order-0 md:order-1 flex justify-between items-center 2xl:pl-20 lg:pl-15 md:pl-10 pl-5 pr-2 lg:pr-3 2xl:pr-5">
            <div className="mx-5 sm:mx-10 md:mx-0">
               <h3 className="font-bold text-3xl md:text-xl lg:text-3xl 2xl:text-5xl">
                  {header}
               </h3>
               <p className="text-sm lg:text-base">{paragraph}</p>
            </div>
            <Image
               className="md:w-[60%] w-[50%]"
               src={paraImg}
               alt="Image"
               width={100}
               height={50}
            />
         </div>
      </section>
   );
}

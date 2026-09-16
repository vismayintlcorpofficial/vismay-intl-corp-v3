import Image from "next/image";

export default function OurMission() {
   const images = [
      "/images/ourMission/mission-1.svg",
      "/images/ourMission/mission-4.svg",
      "/images/ourMission/mission-2.svg",
      "/images/ourMission/mission-3.svg",
   ];

   return (
      <section className="w-full pb-20 bg-white">
         <div className="overflow-x-auto justify-center flex scrollbar-hide">
            <div className="flex gap-2 w-max px-8">
               {images.map((image, index) => (
                  <div key={index}>
                     <Image
                        src={image}
                        alt={`Mission ${index + 1}`}
                        width={415}
                        height={415}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

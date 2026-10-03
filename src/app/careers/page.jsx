import HeroImage from "@/components/layout/HeroImage";
import Jobs from "@/components/careers/Jobs";

export const metadata = {
   title: "Careers",
};

export default function Careers() {
   return (
      <div>
         <HeroImage src={"/images/careers/careers.svg"} />
         <Jobs />
      </div>
   );
}

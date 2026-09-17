import Hero from "@/components/layout/Hero";
import Image from "next/image";
import OurCompany from "@/components/homepage/OurCompany";
import OurPeople from "@/components/homepage/OurPeople";
import OurBrands from "@/components/homepage/OurBrands";
import News from "@/components/homepage/NewsRoom";
import Milestones from "@/components/homepage/Milestones";
import OurMission from "@/components/homepage/OurMission";

export default function Homepage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center bg-white dark:bg-black sm:items-start">
        <Hero src="next.svg" alt="sample" />
        <OurCompany />
        <OurMission />
        <OurBrands />
        <OurPeople />
        <Milestones />
        <News />
      </main>
    </div>
  );
}

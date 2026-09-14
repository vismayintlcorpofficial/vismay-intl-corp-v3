import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import OurCompany from "./OurCompany";
import OurPeople from "./OurPeople";

export default function Homepage() {
   return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
         <main className="flex flex-1 w-full flex-col items-center px-16 bg-white dark:bg-black sm:items-start">
            <Header />
            <Hero src="next.svg" alt="sample" />
            <OurCompany />
            <OurPeople />
            <Footer />
         </main>
      </div>
   );
}

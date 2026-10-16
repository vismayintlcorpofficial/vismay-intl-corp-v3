import HeroImage from "@/components/layout/HeroImage";
import Jobs from "@/components/careers/Jobs";

export const metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at Vismay International Corporation and join our growing team of talented and motivated professionals.",
};

export default function Careers() {
  return (
    <div>
      <HeroImage
        src={"/images/careers/careers.svg"}
        title="Careers"
        description="Build your career with Vismay and be part of a team driven by  passion for creating meaningful experiences."
      />
      <Jobs />
    </div>
  );
}

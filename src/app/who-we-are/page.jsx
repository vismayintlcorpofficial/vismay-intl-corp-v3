import Milestones from "@/components/homepage/Milestones";
import HeroImage from "@/components/layout/HeroImage";
import AboutUs from "@/components/whoweare/aboutUs";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="bg-white">
      <HeroImage
        src="/images/whoWeAre/whoWeAreBanner.webp"
        alt="Who We Are Banner"
      />
      <AboutUs />
      <Milestones home={false} />
      <Image
        id="our-mission"
        src="/images/whoWeAre/ourMission.webp"
        alt="ads"
        width={0}
        height={0}
        className="w-full"
      />
      <Image
        src="/images/whoWeAre/ourVision.webp"
        alt="ads"
        width={0}
        height={0}
        className="w-full"
      />
    </div>
  );
}

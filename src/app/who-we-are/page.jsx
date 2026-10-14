import Milestones from "@/components/homepage/Milestones";
import HeroImage from "@/components/layout/HeroImage";
import AboutUs from "@/components/whoweare/aboutUs";
import Image from "next/image";

export const metadata = {
  title: "Who We Are",
  description: "Learn about our journey, milestones, mission, and vision.",
};

export default function WhoWeAre() {
  const images = [
    {
      id: "our-mission",
      mobile: "/images/whoWeAre/ourMissionMobile.webp",
      desktop: "/images/whoWeAre/ourMission.webp",
      alt: "Our Mission",
    },
    {
      id: "our-vision",
      mobile: "/images/whoWeAre/ourVisionMobile.webp",
      desktop: "/images/whoWeAre/ourVision.webp",
      alt: "Our Vision",
    },
  ];
  return (
    <div className="bg-white">
      <HeroImage
        src="/images/whoWeAre/whoWeAreBanner.webp"
        alt="Who We Are Banner"
      />
      <AboutUs />
      <Milestones home={false} />
      <div className="lg:hidden">
        {images.map(image => (
          <Image
            key={image.id}
            src={image.mobile}
            alt={image.alt}
            width={0}
            height={0}
            className="w-full"
          />
        ))}
      </div>
      <div className="hidden lg:flex flex-col">
        {images.map(image => (
          <Image
            key={image.id}
            src={image.desktop}
            alt={image.alt}
            width={0}
            height={0}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}

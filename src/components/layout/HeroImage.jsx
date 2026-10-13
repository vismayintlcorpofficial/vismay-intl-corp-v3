import Image from "next/image";

export default function HeroImage({ src }) {
  return (
    <section className=" bg-[#06529B] pb-10 md:pb-20 mt-20 lg:mt-0">
      <div className="w-full h-auto">
        <Image
          src={src}
          alt="Careers Banner"
          width={0}
          height={0}
          className="w-full h-auto md:rounded-br-[150px] rounded-br-[50px]"
        />
      </div>
    </section>
  );
}

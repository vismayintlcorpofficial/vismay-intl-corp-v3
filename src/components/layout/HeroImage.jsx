import Image from "next/image";

export default function HeroImage({ src, title, description }) {
  return (
    <section className=" bg-[#06529B] pb-10 md:pb-15 mt-15 lg:mt-0">
      <div className="w-full h-auto">
        <Image
          src={src}
          alt="Careers Banner"
          width={0}
          height={0}
          className="object-cover h-100 md:h-120 w-auto lg:w-full lg:h-auto md:rounded-br-[150px] rounded-br-[100px] "
        />
        <div className="absolute left-5 right-5 top-12/30 sm:left-10 sm:right-auto sm:w-125 lg:left-[10vw] lg:top-1/2 lg:w-137.5">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
            {title}
          </h1>
          <p className="lg:mt-2 max-w-full text-sm leading-relaxed sm:max-w-120 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

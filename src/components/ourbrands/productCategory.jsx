import Image from "next/image";

export default function ProductCategory({ header, src, alt }) {
  return (
    <div className="w-full  md:w-90 lg:w-60 xl:w-70 bg-[#F1F5FB] pt-10 mx-auto">
      <div className="items-center justify-center flex flex-col w-full px-5">
        <h3 className="text-2xl text-center font-bold">{header}</h3>
        <div className="h-100 md:h-90 lg:h-60 xl:h-70 flex">
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            className="my-auto h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
}

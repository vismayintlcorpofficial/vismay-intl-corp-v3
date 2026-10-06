import Image from "next/image";
import Link from "next/link";

export default function ArticleBlock({ img, header, description, link }) {
  return (
    <article className="rounded-2xl 2xl:min-w-108 xl:min-w-90 lg:min-w-60 md:min-w-80 min-h-126.75 bg-[#06529B] flex xl:items-baseline items-center flex-col rounded-br-[60px]">
      <Image
        className="object-cover object-center min-h-74.25 rounded-t-2xl"
        src={img}
        alt={header}
      />
      <div className="pb-6 px-6 xl:w-96">
        <h2 className="text-xl h-6 font-semibold mt-2">{header}</h2>
        <p className="text-xs font-thin my-8 line-clamp-4 h-15 ">
          {description}
        </p>
        <Link
          href={link}
          className="focus:outline-2 focus:outline-offset-2 focus:outline-[#ECF0F8]"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

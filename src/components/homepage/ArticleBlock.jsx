import Image from "next/image";
import Link from "next/link";

export default function ArticleBlock({ img, header, paragraph, link }) {
   const articleCN = `rounded-2xl min-w-108 min-h-126.75 bg-[#06529B] flex items-center flex-col rounded-br-[60px]`;
   return (
      <article className={`${articleCN}`}>
         <Image
            className="object-cover object-center min-h-74.25 rounded-t-2xl"
            width={434}
            src={img}
            alt=""
         />
         <div className="w-96">
            <h2 className="text-xl h-6 font-semibold mt-2">{header}</h2>
            <p className="text-xs font-thin my-8 line-clamp-4 h-15 ">
               {paragraph}
            </p>
            <Link
               href="#"
               className="focus:outline-2 focus:outline-offset-2 focus:outline-[#ECF0F8]"
            >
               {link}
            </Link>
         </div>
      </article>
   );
}

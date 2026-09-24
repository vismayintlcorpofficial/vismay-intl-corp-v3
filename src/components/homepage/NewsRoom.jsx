import Image from "next/image";

import News1 from "../../../public/images/news/news1.webp";
import News2 from "../../../public/images/news/news2.webp";
import News3 from "../../../public/images/news/news3.webp";
import News4 from "../../../public/images/news/news4.webp";
import Link from "next/link";

export default function NewsRoom() {
  const articleCN = `rounded-2xl min-w-108 min-h-126.75 bg-[#06529B] flex items-center flex-col rounded-br-[60px]`;
  return (
    <section className="min-h-197  mx-auto flex flex-col justify-center items-center gap-16 text-white">
      <div className="flex gap-2 justify-center items-center">
        <article className={`${articleCN}`}>
          <Image
            className="object-cover object-center min-h-74.25 rounded-t-2xl"
            width={434}
            src={News1}
            alt=""
          />
          <div className="w-96">
            <h2 className="text-xl h-6 font-semibold mt-2">
              PLATINUM KARAOKE STORE OPENING
            </h2>
            <p className="text-xs font-thin my-8 line-clamp-4 h-15 ">
              Vismay International Corporation proudly celebrates the opening of
              a new Platinum Karaoke store, bringing premium karaoke
              entertainment closer to music lovers. This special occasion marks
              another milestone in our commitment to delivering quality
              products, innovative entertainment solutions, and unforgettable
              experiences to our customers.
            </p>
            <Link
              href="#"
              className="focus:outline-2 focus:outline-offset-2 focus:outline-[#ECF0F8]"
            >
              Read More
            </Link>
          </div>
        </article>
        <article className={`${articleCN}`}>
          <Image
            className="object-cover object-center min-h-74.25 rounded-t-2xl"
            width={434}
            src={News2}
            alt=""
          />
          <div className="w-96">
            <h2 className="text-xl h-6 font-semibold mt-2">
              PLATINUM KARAOKE SPORT FEST
            </h2>
            <p className="text-xs font-thin my-8 line-clamp-4 h-15  ">
              Teamwork, camaraderie, and sportsmanship take center stage at the
              Platinum Karaoke Sport Fest. Vismay International Corporation
              brings employees and teams together through exciting sporting
              activities, fostering stronger connections, healthy competition,
              and a shared spirit of unity beyond the workplace.
            </p>
            <Link
              href="#"
              className="focus:outline-2 focus:outline-offset-2 focus:outline-[#ECF0F8]"
            >
              Read More
            </Link>
          </div>
        </article>
        <article className={`${articleCN}`}>
          <Image
            className="object-cover object-center min-h-74.25 rounded-t-2xl"
            width={434}
            src={News3}
            alt=""
          />
          <div className="w-96">
            <h2 className="text-xl h-6 font-semibold  mt-2">
              PLATINUM KARAOKE CELEBRATE 25 YEARS
            </h2>
            <p className="text-xs font-thin my-8 line-clamp-4 h-15 ">
              Celebrating 25 years of passion, innovation, and entertainment,
              Platinum Karaoke reflects on a remarkable journey of connecting
              people through music. Vismay International Corporation honors this
              milestone with gratitude to our customers, partners, and dedicated
              team members who have been part of our growth and success.
            </p>
            <Link
              href="#"
              className="focus:outline-2 focus:outline-offset-2 focus:outline-[#ECF0F8]"
            >
              Read More
            </Link>
          </div>
        </article>
        <article className={`${articleCN}`}>
          <Image
            className="object-cover object-center min-h-74.25 rounded-t-2xl"
            width={434}
            src={News4}
            alt=""
          />
          <div className="w-96">
            <h2 className="text-xl h-6 font-semibold  mt-2">
              PLATINUM KARAOKE CONCERT
            </h2>
            <p className="text-xs font-thin my-8 line-clamp-4 h-15 ">
              Experience the energy of music and entertainment at the Platinum
              Karaoke Concert. Vismay International Corporation celebrates the
              joy of live performances and shared musical experiences, bringing
              together music enthusiasts and supporters for an unforgettable
              celebration of sound, talent, and entertainment.
            </p>
            <Link
              href="#"
              className="focus:outline-2 focus:outline-offset-2 focus:outline-[#ECF0F8]"
            >
              Read More
            </Link>
          </div>
        </article>
      </div>
      <div className="w-full">
        <Link href="#" className="px-6 py-4 rounded-xl bg-[#06529B]">
          See all News
        </Link>
      </div>
    </section>
  );
}

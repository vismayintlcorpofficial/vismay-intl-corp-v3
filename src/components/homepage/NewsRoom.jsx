import ArticleBlock from "../newsroom/ArticleBlock";
import News1 from "../../../public/images/news/news1.webp";
import News2 from "../../../public/images/news/news2.webp";
import News3 from "../../../public/images/news/news3.webp";
import News4 from "../../../public/images/news/news4.webp";
import Link from "next/link";

export default function NewsRoom() {
  return (
    <section className="min-h-197 mx-auto flex flex-col my-10 justify-center items-center text-white">
      <div class="grid mx-5 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2  justify-center items-center">
          <ArticleBlock
            img={News1}
            header="PLATINUM KARAOKE STORE OPENING"
            description="Vismay International Corporation proudly celebrates the
                     opening of a new Platinum Karaoke store, bringing premium
                     karaoke entertainment closer to music lovers. This special
                     occasion marks another milestone in our commitment to
                     delivering quality products, innovative entertainment
                     solutions, and unforgettable experiences to our customers."
            link="#"
          />
          <ArticleBlock
            img={News2}
            header="PLATINUM KARAOKE SPORT FEST"
            description="Teamwork, camaraderie, and sportsmanship take center stage
                     at the Platinum Karaoke Sport Fest. Vismay International
                     Corporation brings employees and teams together through
                     exciting sporting activities, fostering stronger
                     connections, healthy competition, and a shared spirit of
                     unity beyond the workplace."
            link="#"
          />
          <ArticleBlock
            img={News3}
            header="PLATINUM KARAOKE CELEBRATE 25 YEARS"
            description="Celebrating 25 years of passion, innovation, and
                     entertainment, Platinum Karaoke reflects on a remarkable
                     journey of connecting people through music. Vismay
                     International Corporation honors this milestone with
                     gratitude to our customers, partners, and dedicated team
                     members who have been part of our growth and success."
            link="#"
          />
          <ArticleBlock
            img={News4}
            header="PLATINUM KARAOKE CONCERT"
            description="Experience the energy of music and entertainment at the
                     Platinum Karaoke Concert. Vismay International Corporation
                     celebrates the joy of live performances and shared musical
                     experiences, bringing together music enthusiasts and
                     supporters for an unforgettable celebration of sound,
                     talent, and entertainment."
            link="#"
          />
        </div>
        <div className="w-full">
          <Link href="#" className="px-6 py-4 rounded-xl bg-[#06529B]">
            See all News
          </Link>
        </div>
      </div>
    </section>
  );
}

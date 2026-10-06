import Image from "next/image";
import PKLogo from "../../../public/images/brands/pk.webp";
import PKAudioLogo from "../../../public/images/brands/pk_audio.webp";
import Link from "next/link";
export default function OurBrands() {
  return (
    <section className="w-full h-134.5 flex flex-col justify-center bg-[#06529B] text-white">
      <div className="flex justify-center flex-col items-center gap-12">
        <h3 className="text-4xl font-bold">Explore our brands</h3>
        <div className="flex justify-center">
          <div className="flex gap-8 items-center h-full">
            <div>
              <div className="bg-white p-4 md:p-6 rounded-full mb-2 relative w-32 h-32 sm:w-40 sm:h-40">
                <Link href="#" className="relative block w-full h-full">
                  <Image
                    className="rounded-3xl object-contain"
                    fill
                    src={PKLogo}
                    sizes="(max-width: 640px) 128px, 160px"
                    alt="Platinum Karaoke Logo"
                    loading="eager"
                  />
                </Link>
              </div>
              <p className="text-center cursor-default">Platinum Karaoke</p>
            </div>
            <div>
              <div className=" bg-white p-4 md:p-6 rounded-full mb-2 relative w-32 h-32 sm:w-40 sm:h-40">
                <Link href="#" className="relative block w-full h-full">
                  <Image
                    className="rounded-3xl object-contain"
                    fill
                    src={PKAudioLogo}
                    sizes="(max-width: 640px) 128px, 160px"
                    alt="Platinum Karaoke Logo"
                    loading="eager"
                  />
                </Link>
              </div>
              <p className="text-center cursor-default">PK Audio</p>
            </div>
          </div>
        </div>
        <Link href="#" className="border border-white py-2 px-8 rounded-3xl">
          View more
        </Link>
      </div>
    </section>
  );
}

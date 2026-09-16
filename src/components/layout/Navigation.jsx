import next from "next";
import Image from "next/image";
import Link from "next/link";
import OurBrands from "../homepage/OurBrands";

export default function Header() {
  return (
    <nav className="w-full">
      <div className="flex justify-end gap-27 bg-[#06529B] pb-1 pt-3 px-35">
        <Link className="text-lg font-semibold text-white" href="OurBrands">
          Our Brands
        </Link>
        <Link className="text-lg font-semibold text-white" href="ContactUs">
          Contact Us
        </Link>
      </div>
      <div className="flex col justify-between bg-white px-35 py-1 pb-2 items-center">
        <Image
          loading="eager"
          src="vismayLogo.svg"
          alt="Vismay Logo"
          width={104}
          height={122}
        />
        <div className="flex col gap-19 items-center">
          <Link href="/">
            <Image
              loading="eager"
              src="homeIcon.svg"
              alt="Vismay Logo"
              width={46}
              height={42}
            />
          </Link>
          <Link href="/who-we-are" className="text-xl font-bold text-[#06529B]">
            WHO WE ARE
          </Link>
          <Link href="/careers" className="text-xl font-bold text-[#06529B]">
            CAREERS
          </Link>
        </div>
      </div>
    </nav>
  );
}

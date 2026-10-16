"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleCollapse = () => {
    setActive(prev => !prev);
  };
  const navDesktopTop = (
    <div className="lg:flex justify-end gap-27 bg-[#06529B] pb-1 pt-3 px-35 hidden ">
      <Link className="text-[14px] font-semibold text-white" href="/ourbrands">
        Our Brands
      </Link>
      <Link className="text-[14px] font-semibold text-white" href="/contact-us">
        Contact Us
      </Link>
    </div>
  );
  const navDesktop = (
    <div className="hidden lg:flex col justify-between bg-white px-35 py-1 pb-2 items-center">
      <Link href="/">
        <Image
          loading="eager"
          src="/vismayLogo.svg"
          alt="Vismay Logo"
          width={47}
          height={55}
        />
      </Link>
      <div className="flex col gap-19 items-center">
        <Link href="/" aria-label="Home Page banner">
          <Image
            loading="eager"
            src="/homeIcon.svg"
            alt="Vismay Logo"
            width={25}
            height={23}
          />
        </Link>
        <Link
          href="/who-we-are"
          className="text-[16px] font-bold text-[#06529B]"
        >
          WHO WE ARE
        </Link>
        <Link href="/careers" className="text-[16px] font-bold text-[#06529B]">
          CAREERS
        </Link>
      </div>
    </div>
  );

  const navMobile = (
    <div
      className={`lg:hidden fixed left-0 top-15.5 w-full h-full bg-[#06529B] z-40 px-4 transition-transform duration-300 ease-in-out ${
        active ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-10 text-white px-4 pt-12">
        <Link
          href="/who-we-are"
          className="text-xl font-bold"
          onClick={handleCollapse}
        >
          Who We Are
        </Link>

        <Link
          href="/careers"
          className="text-xl font-bold"
          onClick={handleCollapse}
        >
          Careers
        </Link>

        <Link
          href="/ourbrands"
          className="text-xl font-bold"
          onClick={handleCollapse}
        >
          Our Brands
        </Link>

        <Link
          href="/contact-us"
          className="text-xl font-bold"
          onClick={handleCollapse}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
  return (
    <nav className="w-full">
      {navDesktopTop}
      {navDesktop}
      <div className="lg:hidden flex justify-between w-full pr-12 bg-[#06529B] items-center  z-50 fixed top-0">
        <div className="bg-white px-8 py-1 ">
          <Link href="/">
            <Image
              loading="eager"
              src="/vismayLogo.svg"
              alt="Vismay Logo"
              width={54}
              height={54}
            />
          </Link>
        </div>

        <button
          type="button"
          onClick={handleCollapse}
          aria-label="Toggle navigation menu"
        >
          {active ? (
            <X size={36} color="#D9D9D9" />
          ) : (
            <Menu size={36} color="#D9D9D9" />
          )}
        </button>
      </div>

      {navMobile}
    </nav>
  );
}

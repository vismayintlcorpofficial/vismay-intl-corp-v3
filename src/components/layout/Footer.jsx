import Image from "next/image";
import FBLogo from "../../../public/icons/fb-logo.png";
import LinkedinLogo from "../../../public/icons/linkedin-logo.png";
import DPOLogo from "../../../public/icons/dpo-dps.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full h-140 bg-[#06529B] pt-16 bg-[url('/images/footer/footerBG.png')] bg-center bg-no-repeat text-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-end gap-4 max-w-screen-xl">
          <Link href="https://www.facebook.com/vismayinternationalcorp" replace>
            <Image src={FBLogo} alt="Facebook Logo" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/vismay-international-corporation/"
            replace
          >
            <Image src={LinkedinLogo} alt="Linkedin Logo" />
          </Link>
        </div>
        <div className="flex justify-between items-center border-y-2 py-8 my-10 pr-16">
          <div className=" flex-3">
            <h3 className="text-2xl tracking-wider">
              Vismay International Corp.
            </h3>
            <p className="text-base w-84.25 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              consequat libero mi, at tincidunt odio mollis quis. Duis diam
              nisi, pellentesque quis imperdiet nec, accumsan.
            </p>
          </div>
          <div className="flex-1 space-y-1.5  text-xl">
            <h3 className="text-[#00C8FF] font-semibold pb-4">About Us</h3>
            <Link href="#">
              <p className="font-light">Newsroom</p>
            </Link>
            <Link href="#">
              <p className="font-light">Lifestyle</p>
            </Link>
            <Link href="#">
              <p className="font-light">Contact Us</p>
            </Link>
          </div>
          <div className="flex-1 space-y-1.5 text-xl">
            <h3 className="text-[#00C8FF] font-semibold pb-4">Careers</h3>
            <Link href="#">
              <p className="font-light">Company Info</p>
            </Link>
            <Link href="#">
              <p className="font-light">Our Mission</p>
            </Link>
            <Link href="#">
              <p className="font-light">Leadership</p>
            </Link>
          </div>
          <div className="flex-1 space-y-1.5 text-xl">
            <h3 className="text-[#00C8FF] font-semibold pb-4">Our Brands</h3>
            <Link href="#">
              <p className="font-light">Privacy Policy</p>
            </Link>
            <Link href="#">
              <p className="font-light">Term of use</p>
            </Link>
            <Link href="#">
              <p className="font-light">Sitemap</p>
            </Link>
          </div>
          <Link href="#">
            <Image src={DPOLogo} alt="DPO/DPS data privacy logo" />
          </Link>
        </div>
        <div className="flex flex-col gap-4 font-bold text-sm">
          <p>© 2026 Vismay International Corporation. All Rights Reserved.</p>
          <p>
            Vismay International Corporation is now DPO/DPS compliant, certified
            by the National Privacy Commission
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

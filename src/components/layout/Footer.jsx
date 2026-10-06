import Image from "next/image";
import FBLogo from "../../../public/icons/fb-logo.png";
import LinkedinLogo from "../../../public/icons/linkedin-logo.png";
import DPOLogo from "../../../public/icons/dpo-dps.png";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#06529B] md:py-16 pb-12 bg-[url('/images/footer/footerBG.png')] bg-center bg-no-repeat text-white">
      <div className="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg xl:mx-auto mx-10 flex flex-col">
        <div className="flex md:justify-end justify-center md:items-start items-center gap-4 max-w-screen-xl md:order-0 order-1 md:border-0 border-b-2 mb-8 md:pb-0 pb-8">
          <Link href="#" className="md:hidden block">
            <Image src={DPOLogo} alt="DPO/DPS data privacy logo" />
          </Link>
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
        <div className="flex lg:flex-row flex-col lg:justify-between md:border-y-2 border-0 py-8 md:my-10 xl:pr-16 lg:pr-0  md:order-1 order-0">
          <div className="md:border-0 border-b-2">
            <div className="xl:flex-3 lg:flex-2 md:mx-0 lg:mr-12 mx-12">
              <h3 className="md:text-2xl text-base md:font-regular font-bold tracking-wider">
                Vismay International Corp.
              </h3>
              <p className="md:text-base text-sm lg:w-84.25 w-full md:pb-0 pb-8 font-light">
                is committed to delivering quality products, innovative
                solutions, and exceptional experiences through our diverse
                portfolio of brands. We strive to build lasting relationships
                with our customers, partners, and communities through excellence
                and integrity.
              </p>
            </div>
          </div>
          <div className="lg:w-auto flex-3 w-full flex md:flex-row flex-col justify-between items-center md:text-xl text-base">
            <div className="w-full md:border-0 border-b-2">
              <div className="flex-1 space-y-1.5 md:py-0 py-6 md:mx-0 mx-12 ">
                <h3 className="text-[#00C8FF] font-semibold pb-4 ">About Us</h3>
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
            </div>
            <div className="w-full md:border-0 border-b-2">
              <div className="flex-1  space-y-1.5 md:py-0 py-6 md:mx-0 mx-12">
                <h3 className="text-[#00C8FF] font-semibold pb-4 ">Careers</h3>
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
            </div>
            <div className="w-full md:border-0 border-b-2">
              <div className="flex-1 space-y-1.5 md:py-0 py-6 md:mx-0 mx-12">
                <h3 className="text-[#00C8FF] font-semibold pb-4 ">
                  Our Brands
                </h3>
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
            </div>
            <div>
              <div className="flex">
                <Link
                  href="#"
                  className="md:py-0 py-6 md:mx-0 mx-12  md:block hidden shrink-0"
                >
                  <Image
                    src={DPOLogo}
                    alt="DPO/DPS data privacy logo"
                    className="w-auto h-auto "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 font-bold md:text-sm text-xs order-2">
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

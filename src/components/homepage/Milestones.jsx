import Image from "next/image";
import Link from "next/link";

import employees from "../../../public/images/milestones/employees_icon.webp";
import products from "../../../public/images/milestones/product_icon.webp";
import stores from "../../../public/images/milestones/stores_icon.webp";

const Milestones = () => {
  return (
    <section className="h-125 w-full flex flex-col justify-center bg-[#06529B]">
      <div className="flex gap-12 flex-col ">
        <div className="max-w-screen-xl mx-auto w-full">
          <h3 className="text-4xl">Vismay in the Philippines</h3>
        </div>
        <div className="flex justify-center gap-16">
          <div className="flex gap-12  ">
            <Image
              className="rounded-xl"
              width={112}
              height={114}
              src={employees}
              alt="900+ Employees"
              loading="eager"
            />
            <div className="flex flex-col gap-4">
              <span className="font-extralight text-xl">
                A diverse workforce
              </span>
              <h3 className="text-4xl font-extrabold">900+ Employees</h3>
            </div>
          </div>
          <div className="flex gap-12">
            <Image
              className="rounded-xl"
              width={112}
              height={114}
              src={products}
              alt="50+ Iconic Product"
              loading="eager"
            />
            <div className="flex flex-col gap-4">
              <span className="font-extralight text-xl">
                A rich history in the Philippines
              </span>
              <h3 className="text-4xl font-extrabold">50+ Iconic Product</h3>
            </div>
          </div>
          <div className="flex gap-12 ">
            <Image
              className="rounded-xl"
              width={112}
              height={114}
              src={stores}
              alt="10+ Brand Stores"
              loading="eager"
            />
            <div className="flex flex-col gap-4">
              <span className="font-extralight text-xl">A diverse store</span>
              <h3 className="text-4xl font-extrabold">10+ Brand Stores</h3>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto w-full">
          <Link href="#" className="py-2 px-8 border border-white rounded-3xl">
            About us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Milestones;

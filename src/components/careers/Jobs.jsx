import Image from "next/image";

export default function Jobs() {
  return (
    <section className="flex flex-col relative text-white">
      {/* Text */}
      <div className="-mt-25 lg:mt-0 px-10 pt-20 lg:pt-0 order-1 lg:order-0 relative z-10 bg-[#06529B] 2xl:h-270 xl:h-250 lg:h-220 lg:w-50/110 rounded-tr-[100px] p-3 md:px-15 2xl:px-30 justify-center flex flex-col">
        <h2 className="2xl:text-6xl text-4xl">Careers with purpose</h2>
        <p className="2xl:text-2xl text-xl">
          <br />
          At Vismay, what you do matters. Whether you’re just starting out or
          ready for a new challenge, your work can shape the world and your own
          future all at once.
          <br />
          <br />
          Currently we have job opportunities below:
          <br />
        </p>
        <ul className="list-disc pl-3 md:pl-5 xl:pl-10 2xl:text-xl text-lg">
          <br />
          <li>Product and Sales Training Officer</li>
          <li>Property Leasing Officer (Airbnb)</li>
          <li>Project and Property Officer</li>
          <li>Warehouse and Logistic Manager </li>
          <li>IT Manager</li>
          <li>FP&A Manager</li>
          <li>Admin Officer </li>
          <li>Livestreamer </li>
          <li>General Manager (Paragon)</li>
          <li>Accounting Supervisor</li>
          <li> Key Accounts_Manager</li>
        </ul>
        <div className="flex lg:mt-10 m-3 xl:m-5 gap-2 xl:gap-5">
          <a
            target="_blank"
            href="https://ph.jobstreet.com/companies/vismay-international-corporation-168552132659638"
            className="px-3 lg:px-8 2xl:px-14 py-1.5 border rounded-4xl"
          >
            Jobstreet
          </a>
          <a
            target="_blank"
            href="https://ph.indeed.com/cmp/Vismay-International-Corporation"
            className="px-3 lg:px-8 2xl:px-14 py-1.5 border rounded-4xl"
          >
            Indeed
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/vismayinternationalcorp/"
            className="px-3 lg:px-8 2xl:px-14 py-1.5 border rounded-4xl"
          >
            Facebook
          </a>
        </div>
      </div>

      <Image
        src="/images/careers/jobs.svg"
        alt=""
        width={100}
        height={100}
        className="z-1 order-0 lg:order-1 lg:absolute top-0 lg:right-0 w-full lg:w-5/8 2xl:h-270 xl:h-250 lg:h-220 object-cover"
      />
    </section>
  );
}

import { desc, title } from "motion/react-client";

export const metadata = {
  title: "Privacy Policy",
  desc: "We collect, use, retain, share, and protect personal information in accordance with the Philippine Data Privacy Act of 2012",
};

export default function PrivacyPolicy() {
  return (
    <div className=" border-t border-[#07549C10]">
      <section className="mx-auto w-full max-w-5xl px-5 py-8 text-base leading-relaxed text-gray-700 md:px-8 mt-30 lg:mt-0 mb-10">
        <h2 className="text-2xl lg:text-4xl pb-10 text-center font-bold text-[#07549C] ">
          DATA PRIVACY STATEMENT
        </h2>

        <p className="mb-5">
          The Company ("we," "us," or "our") respects your privacy and is
          committed to protecting your personal data in compliance with the Data
          Privacy Act of 2012 and its Implementing Rules and Regulations (IRR).
          This privacy statement describes our policies regarding the
          collection, use, storage, sharing, and disposal of personal
          information.
        </p>

        <p className="mb-5">
          As we may collect and process various type of personal information, we
          will ONLY use these information for the following purpose/s:
        </p>

        <ul className="mb-5 list-disc space-y-2 pl-6">
          <li>
            <strong>Service Provision:</strong> to process your orders, provide
            customer service and fulfill your orders
          </li>
          <li>
            <strong>Business Operations:</strong> to evaluate business
            partnerships and manage workforce
          </li>
          <li>
            <strong>Marketing &amp; Promotions:</strong> to keep you in the loop
            with our products, promotions and services
          </li>
          <li>
            <strong>Legal Compliance:</strong> to comply with applicable legal
            requirements
          </li>
        </ul>

        <p className="mb-5">
          We will retain personal information for as long as it is necessary to
          fulfill the purposes outlined in this statement, or as required by
          applicable laws. When no longer needed, we securely dispose of
          personal information to prevent unauthorized access or use.
        </p>

        <p className="mb-5">
          We may share your information to our affiliates and subsidiaries for
          operations and promotions, and to our service providers: third-party
          companies that provide services on our behalf, such as payment
          processing, data storage, and delivery services.
        </p>

        <p className="mb-5">
          Our third-party providers are mandated to implement similar levels of
          protection for your data and adhere to this privacy statement.
        </p>

        <p className="mb-5">
          We commit to implement appropriate organizational, physical, and
          technical security measures to protect your personal information
          against unauthorized access, use, and disclosure. We regularly review
          and update our security practices to ensure the confidentiality,
          integrity, and availability of your data.
        </p>

        <p className="mb-5">
          We may modify this statement from time to time in line with regulatory
          requirements, updates or business practices. Significant changes will
          be communicated to affected individuals in accordance with the Data
          Privacy Act and related regulations.
        </p>

        <p>
          Throughout this Statement, “the COMPANY” refers to either VISMAY
          International Corporation and Xtremeway Corporation, including its
          affiliated companies, branches, and subsidiaries.
        </p>
      </section>
    </div>
  );
}

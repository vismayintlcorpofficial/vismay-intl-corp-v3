import ContactUsForm from "@/components/contactus/ContactUsForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vismay International Corporation for inquiries, partnerships, and business opportunities. We're here to connect with you and provide the support you need.",
};

const ContactUs = () => {
  return (
    <section className="lg:py-16 py-32 bg-white text-black">
      <div>
        <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto">
          <h1 className="text-5xl text-center font-semibold">Inquiry</h1>
          <p className="sm:text-xl text-base text-center mb-8">
            Contact us using the form below. Fields marked with{" "}
            <span className="text-red-600">*</span> are required
          </p>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

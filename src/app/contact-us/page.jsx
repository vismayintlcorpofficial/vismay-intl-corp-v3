"use client";
import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vismay International Corporation for inquiries, partnerships, and business opportunities. We're here to connect with you and provide the support you need.",
};

const ContactUs = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    inquiry: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_wgy8hsq", "template_h7j16tk", form, "xXsOPEA8qL1jao7Rr")
      //   .send("service_bkumtmv", "template_t9adb01", form, "xXsOPEA8qL1jao7Rr")
      .then(
        (result) => {
          console.log("Email Sent", result.text);
          setSent(true);
          setForm({
            fullname: "",
            email: "",
            phone: "",
            company: "",
            website: "",
            inquiry: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setError("Something went wrong. Please try again");
        },
      );

    // setTimeout(() => {
    //   window.location.reload();
    // }, 10000);
  };

  useEffect(() => {
    if (!sent) return;

    if (countdown <= 0) {
      window.location.reload();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [sent, countdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!name || name.trim()) return;

    setForm({ ...form, [name]: value });
    console.log(form);
  };

  return (
    <section className="lg:py-16 py-32">
      <div>
        <div className="xl:max-w-7xl lg:max-w-4xl md:max-w-2xl max-w-sm mx-auto">
          <h1 className="text-5xl text-center font-semibold">Inquiry</h1>
          <p className="sm:text-xl text-base text-center mb-8">
            Contact us using the form below. Fields marked with{" "}
            <span className="text-red-600">*</span> are required
          </p>
          {sent ? (
            <div className="text-center mt-10">
              <p className="text-green-600">Your request has been sent!</p>
              <p>Page will reload after {countdown} seconds...</p>
            </div>
          ) : (
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div id="fullname" className="flex flex-col rounded-sm">
                <label htmlFor="fullname">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="bg-[#E9EEF6] focus:outline-blue-200 p-2"
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="email" className="flex flex-col rounded-sm">
                <label htmlFor="email">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  className="bg-[#E9EEF6] focus:outline-blue-200 p-2"
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="phone" className="flex flex-col rounded-sm">
                <label htmlFor="phone">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  className="bg-[#E9EEF6] focus:outline-blue-200 p-2"
                  type="text"
                  name="phone"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="company" className="flex flex-col rounded-sm">
                <label htmlFor="company">
                  Company <span className="text-red-600">*</span>
                </label>
                <input
                  className="bg-[#E9EEF6] focus:outline-blue-200 p-2"
                  type="text"
                  name="company"
                  id="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="website" className="flex flex-col rounded-sm">
                <label htmlFor="website">
                  Website <span className="text-red-600">*</span>
                </label>
                <input
                  className="bg-[#E9EEF6] focus:outline-blue-200 p-2"
                  type="text"
                  name="website"
                  id="website"
                  value={form.website}
                  onChange={handleChange}
                  required
                />
              </div>
              <div id="inquiry" className="flex flex-col rounded-sm">
                <label htmlFor="inquiry">
                  Inquiry <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="resize-none overflow-y-hidden bg-[#E9EEF6] focus:outline-blue-200 p-2"
                  type="text"
                  name="inquiry"
                  id="inquiry"
                  value={form.inquiry}
                  onChange={handleChange}
                  rows={8}
                  required
                />
              </div>
              <button
                type="submit"
                className="self-start bg-[#E9EEF6] py-4 px-8 rounded-sm cursor-pointer"
              >
                Send
              </button>
              {error && (
                <p className="px-8 pt-2 text-red-500 text-xs">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

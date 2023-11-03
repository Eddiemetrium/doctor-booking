"use client";
import Link from "next/link";
import Footer from "../footer/page";
import Header from "../header/page";
import { useState } from "react";

function Page() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="px-5 lg:px-0">
      <Header />
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 text-center">
          <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 pr-3">
            Hello
            <span className="text-primaryColor pr-3 pl-3">Welcome</span>
            <span className="">Back</span>
          </h3>
          <form className="py-4 md:py-0">
            <div className="mb-5">
              <input
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-headingColor rounded-md cursor-text "
                type="email"
                placeholder="Enter your Email "
                name="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-5">
              <input
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-headingColor rounded-md cursor-text "
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mt-4 ">
              <button className="btn w-full" type="submit">
                Login
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Don&apos;t have an account
            </p>
            <Link className="text-primaryColor font-semibold " href="/Register">Register</Link>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;

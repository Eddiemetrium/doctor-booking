"use client";
import { useState } from "react";
import Image from "next/image";
import signupimg from "../../assets/images/signup.gif";
import avatar from "../../assets/images/doctor-img01.png";
import Link from "next/link";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });
  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 const handleFileInputChange = async (event) => {
   const file = event.target.files[0];
  //  Cloudinary to upload imgs 
   console.log(file);
 };
 const submitHandler = async event => {
  event.preventDefault()
 }
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          {/* Img Box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg ">
            <figure className="rounded-l-lg mt-8">
              <Image
                className="w-full rounded-l-lg"
                src={signupimg}
                alt="signupimg"
              />
            </figure>
          </div>
          {/* Signup Form */}

          <div className="rounded-l-lg lg:pl-16 py-10 text-center">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an<span className="text-primaryColor"> account </span>{" "}
            </h3>
            <form className="py-4 md:py-0" onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-text "
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-text "
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-text "
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  required
                />
              </div>
              <div className="mb-5 flex justify-between items-center">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  You are a:
                  <select
                    name="role"
                    className="text-textColor text-[15px] font-semibold px-4 py-3 focus:outline-none "
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="role"
                    className="text-textColor text-[15px] font-semibold px-4 py-3 focus:outline-none "
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="flex items-center  text-textColor gap-3">
                <figure className="w-[60px]  h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <Image className="rounded-full w-full" src={avatar} alt="" />
                </figure>
                <div className="relative w-[160px] h-[50px] flex items-left justify-center">
                  <input
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                  />
                  <label
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75px] py-[0.375px] text-[15px] leading-6 overflow-hidden text-headingColor bg-[#0066ff46] font-semibold rounded-lg truncate cursor-pointer "
                    htmlFor="customFile"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>
            </form>
            <div className="mt-4">
              <button className="btn w-full" type="submit">
                Signup
              </button>
            </div>
            <div>
              <p className="mt-5 text-textColor text-center">
                Already have an account
                <Link
                  className="text-primaryColor pl-1 font-medium "
                  href="/Login"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

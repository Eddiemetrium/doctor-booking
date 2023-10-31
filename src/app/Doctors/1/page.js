"use client";
import Image from "next/image";
import doctorImg from "../../../assets/images/doctor-img02.png";
import starIcon from "../../../assets/images/Star.png";
import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import { useState } from "react";
import DoctorAbout from "../../../../components/DoctorAbout";
import Feedback from "../../../../src/app/Doctors/Feedback";
import SidePanel from "../SidePanel";
const Page = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
      <Header />
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <Image src={doctorImg} className="w-full" alt="doctorImg" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 font-semibold rounded">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] font-bold leading-9 lg:text-[16px]  ">
                  Muhibur Rahman
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor ">
                    <Image src={starIcon} alt="icon" />
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-700 font-bold text-headingColor">
                    4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-400 font-semibold text-textColor">
                    (272)
                  </span>
                </div>
                <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]  text-textColor">
                  Lorem ipsum dorem guan xi 4chan reddit small talk, big guy 7.
                  Yoel is a friend.
                </p>
              </div>
            </div>
            <div className="mt-[50px] border-b border-solid border-[#0065ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Page;

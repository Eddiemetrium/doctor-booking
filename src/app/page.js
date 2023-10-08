"use client";
import "./app.css";
import Image from "next/image";
import Header from "./header/page";
import Footer from "./footer/page";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import HeroImg1 from "../assets/images/hero-img01.png";
import HeroImg2 from "../assets/images/hero-img02.png";
import HeroImg3 from "../assets/images/hero-img03.png";
import Icon01 from "../assets/images/icon01.png";
import Icon02 from "../assets/images/icon02.png";
import Icon03 from "../assets/images/icon03.png";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/About";

export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Header isTopOfPage={isTopOfPage} />
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para">
                  Times have definitely changed since I was a kid. The young
                  boys coming up now appear to lack a certain drive and
                  assertiveness that is essentially in becoming strong men.
                  What’s your opinion? Subscribe and share this channel.
                </p>
                <button className="btn">Request an appointment</button>
              </div>
              {/* Hero Counter */}
              <div className="mt-[30px] lg:mt-[70] flex flex-col lg:flex-row lg:item-center gap-5 lg:gap[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56-px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56-px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56-px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero Content */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <Image className="w-full" src={HeroImg1} alt="" />
              </div>
              <div className="mt-[30px]">
                <Image className="w-full mb-[30px]" src={HeroImg2} alt="" />
                <Image className="w-full " src={HeroImg3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h3 className="heading text-center">
              Providing the best medical services
            </h3>
            <p className="text_para text-center">
              World class care for everyone. Our health systems offers
              unmatched, expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <Image src={Icon01} alt="icon01" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-700 text-center">
                  Find a doctor.
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone . Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  href="/Doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <Image src={Icon02} alt="icon01" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-700 text-center">
                  Find a Location.
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone . Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  href="/Doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <Image src={Icon03} alt="icon01" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-700 text-center">
                  Book an Appointment.
                </h2>
                <p className=" text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone . Our health System offers
                  unmatched, expert health care. From the lab to the clinic.
                </p>
                <Link
                  href="/Doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      <About />
      {/* Services Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text_para text-center">World-class care for everyone. Our health system offers umatched, expert health care.</p>
          </div>
        </div>
      </section>  
          </section>

      {/* Services Section end */}
      <Footer />
    </>
  );
}

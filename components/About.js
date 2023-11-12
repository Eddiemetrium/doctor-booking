import Image from "next/image";
import React from "react";
import aboutImg from "../src/assets/images/about.png";
import aboutImgCard from "../src/assets/images/about-card.png";
import Link from "next/link";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* About Image */}
          <div
            style={{ position: "relative" }}
            className=" w-2/3 h-[300px] lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1"
          >
            {/* Absolutely positioned image */}
            <div className="absolute-img">
              <Image
                className=" z-40  w-[200px] md:w-[300px] "
                src={aboutImgCard}
                alt="aboutImgCard"
              />
            </div>
            <Image src={aboutImg} alt="aboutImg" />
          </div>
        </div>
        {/* About content  */}
        <div className="w-full lg:w-/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be ond of the nations finest</h2>
          <p className="text_para">
            For 30 yeras in a row, U.S . News & world Report has recognized us
            as one of the best public hospital in the Nation and #1 in Texas.
          </p>
          <p className="text_para mt-[30px]">Our best is something we strive for each day, caring for our patients-not looking back at what we accomplished but towards what we can do tommorow. Providing the best. </p>
          <Link href="/">
          <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

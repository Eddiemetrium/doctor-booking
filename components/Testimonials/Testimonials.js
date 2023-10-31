"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../src/assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="py-[30] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <Image src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p>
              &rdquo; I have taken medical services from them. They treat so
              well and they are providing the best medical services &rdquo;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <Image src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p>
              &rdquo; I have taken medical services from them. They treat so
              well and they are providing the best medical services&rdquo;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <Image src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p>
              &rdquo; I have taken medical services from them. They treat so
              well and they are providing the best medical services &rdquo;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <Image src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p>
              &rdquo; I have taken medical services from them. They treat so
              well and they are providing the best medical services &rdquo;
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <Image src={patientAvatar} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30] font-semibold text-headingColor">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p>
              &rdquo; I have taken medical services from them. They treat so
              well and they are providing the best medical services. &rdquo;
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;

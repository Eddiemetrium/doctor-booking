import Image from "next/image";
import starIcon from "../../assets/images/Star.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatient,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <Image className="w-full" src={photo} alt="" />
      </div>
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-white text-irisBlueColor py-1  flex items-center gap-[6px] text-[14px] leading-4  lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specialization}
        </span>

        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5"></h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
          <span className="bg-white text-irisBlueColor py-1  flex items-center gap-[6px] text-[14px] leading-4  lg:text-[16px] lg:leading-7 font-semibold rounded">
            <Image className="w-full" src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="text-textColor flex items-center gap-[6px] text-[14px] leading-4  lg:text-[14px] lg:leading-7 font-semibold rounded">
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div className="text-[16px] leading lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
          <h3>+{totalPatient} Patients</h3>
          <p className="text-[16px] text-textColor font-[400]">At {hospital}</p>
        </div>
        <Link
          href="/Doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;

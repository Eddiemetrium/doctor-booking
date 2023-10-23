import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const serviseCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="py-[30px] px-3 lg:px-5 ">
      <h2 className="text-[26px] leading-7 font-500 text-black mt-4">{name}</h2>
      <p className="text-[16px] leading-7 font-400 text-textColor mt-4">
        {desc}
      </p>
      <div className="flex items-center justify-between mt-[30px]">
        <Link
          href="/Doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text1-[18px] leading-[30px] font-600"
          style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "20%",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default serviseCard;

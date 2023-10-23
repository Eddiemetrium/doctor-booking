import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-white mb-5 cursor-pointer ">
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h2 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h2>
        <div
          className={`${
            isOpen && "bg-primaryColor text-white border"
          } w-8 h-8 lg:w-9 border border-solid border-black rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
        {isOpen && <div className="mt-4">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-400 text-textColor">
            {item.content}
          </p>
          </div>}
    </div>
  );
};

export default FaqItem;

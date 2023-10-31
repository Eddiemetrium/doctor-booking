import Image from "next/image";
import avatar from "../../assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const FormatDate = (date, config) => {
    const customConfig = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    const options = config ? config : customConfig;
    return new Date(date).toLocaleDateString("en-US", options);
  };
  return (
    <>
      <div>
        <div className="mb-[50px]">
          <h2 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
            All reviews (272)
          </h2>
        </div>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <Image className="w-full" src={avatar} alt="" />
            </figure>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Ali Ahmed
            </h5>
            <p className="text-[14px] leading-6 text-textColor">
              {FormatDate("12-04-2023")}
            </p>
            <p className="text_para mt-3 font-medium text-[15px]">
              Good services highly recommended
            </p>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
        {!showFeedbackForm && (
          <div className="text-center">
            <button className="btn" onClick={() => setShowFeedbackForm(true)}>
              Give Feedback
            </button>
          </div>
        )}
        {showFeedbackForm && <FeedbackForm />}
      </div>
    </>
  );
};

export default Feedback;

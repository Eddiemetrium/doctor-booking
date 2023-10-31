import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

const HandleSubmitReview = async e =>{
  e.preventDefault()
  // api for later...
}

  return (
    <form>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate our overrall experience?
        </h3>
        <div>
          {/* fifith on not selectable */}
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                className={`${
                  index < ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[23px] cursor-pointer`}
                type="button"
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-[30px] ">
        <h3 className="text-headingColor text-[16px] leading-6  mb-4 mt-0">
          Share your Feedback or Suggestions.
        </h3>
        <textarea
          className="border border-solid border-[#0066FF34]  focus:outline outline-primaryColor w-full py-3 px-4 rounded-md"
          rows="5" placeholder="Write your message here..."
          onChange={(e)=>setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" onClick={HandleSubmitReview} className="btn">
Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;

import FaqItem from "./faqItem"; // Corrected import name
import { faqs } from "@/assets/data/faqs";

const FaqList = () => {

  return (
    <>
      <ul className="mt-[38px]">
        {faqs.map((item, index) => (
          <FaqItem item={item} key={index} /> // Corrected component name
        ))}
      </ul>
    </>
  );
};

export default FaqList;

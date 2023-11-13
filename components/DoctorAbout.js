import SidePanel from "@/app/Doctors/SidePanel";

// import { FormatDate } from "./utils/formatDate";
const DoctorAbout = () => {
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
    <div>
      <div className="flex ">
        <div>
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
            About
            <span className="text-irisBlueColor pl-4 font-bold leading-9 text-[24px]">
              Muhibur Rahman
            </span>
          </h3>
          <p className="text_para">
            Driven by a passion for advancing healthcare, Muhibur has dedicated
            years to rigorous academic pursuits and hands-on clinical
            experience. Currently affiliated with the New Apollo Hospital in New
            York, Muhibur contributes to the medical community&apos;s growth and
            patient care. His expertise in surgery reflects a commitment to
            excellence, and his work at the forefront of healthcare innovation
            makes him a valuable asset to the medical field. Dr. Muhibur
            Rahman&apos;s pursuit of knowledge and dedication to surgical
            advancements underscore his role as a respected and influential
            figure in the medical landscape.
          </p>
        </div>
      </div>

      <div className="mt-12 ">
        <h3 className="text-[20px] pt-4 leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-6 mt-3 md:p-5 ">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {FormatDate("12-04-2010")}
                </span>
              </div>
              <div className="flex justify-between">
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  PHD in Surgery
                </p>
                <p className="text-[14px] leading-5 font-medium text-textColor">
                  New Apollo Hospital, New York
                </p>
              </div>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] "></li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;

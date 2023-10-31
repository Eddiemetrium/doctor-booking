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
            Lorem ipsum dorem guan xii 8chan dread tokyolin talk. John is a
            friend.
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
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {FormatDate("12-04-2010")}
              </span>
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
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {FormatDate("12-04-2010")}
              </span>
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
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;

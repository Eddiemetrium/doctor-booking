import Header from "../header/page";
import Footer from "../footer/page";
import { services } from "@/assets/data/services";
import ServiceCard from "../../../components/ServiceCard";

const page = () => {
  return (
    <>
      <section>
        <Header />
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {services.map((item, index) => (
              <ServiceCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default page;

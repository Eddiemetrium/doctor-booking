import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import {
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    href: "https://youtube.com/c/eddiemetrium",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    href: "https://github.com/eddiemetrium",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    href: "https://linkedin.com/",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
  {
    href: "https://instagram.com/eddiemetrium",
    icon: <AiFillInstagram className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  {
    href: "/",
    display: "Home",
  },
  {
    href: "/about-us",
    display: "About Us",
  },
  {
    href: "/services",
    display: "Services",
  },
  {
    href: "/blog",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    href: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    href: "/request-appointment",
    display: "Request an Appointment",
  },
  {
    href: "/find-location",
    display: "Find a Location",
  },
  {
    href: "/get-opinion",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    href: "/donate",
    display: "Donate",
  },
  {
    href: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pd-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30] ">
          <div>
            <Image src={logo} alt="" />
            <p className="text-[16px] font-[400] leading-7 text-textColor mt-4">
              © {year} developed by Edwin Munene all rights reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="w-9 h-9 border border-solid border-black rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>{" "}
          <div>
            <h2 className=" text-[20] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li className="mb-4" href={item.href} key={index} legacyBehavior>
                  <a className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li href={item.href} key={index} legacyBehavior>
                  <a className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li href={item.href} key={index} legacyBehavior>
                  <a className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

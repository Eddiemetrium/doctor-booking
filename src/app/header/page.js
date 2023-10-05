// Header.js
"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import UserImg from "../../assets/images/avatar-icon.png";
import Menu from "../../assets/images/menu-icon.svg";
import Close from "../../assets/images/close-icon.svg";
import SideMenu from "../../../components/sideMenu"; // Adjust the import path

const Header = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Doctors", label: "Find a Doctor" },
    { href: "/Services", label: "Services" },
    { href: "/Contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="header  sticky_header flex items-center pt-3">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <section>
              <Image src={logo} alt="logo" />
            </section>
            {/* Menu */}
            <section className={`navigation ${showMenu ? "show_menu" : ""}`}>
              <ul
                className={`menu flex items-center gap-[1.7rem] px-5 text-[16px] leading-7 font-[600] ${
                  pathname === Link ? "" : ""
                }`}
              >
                {navLinks.map(({ href, label }) => (
                  <li
                    key={href}
                    className={`${
                      pathname === href ? "text-primaryColor" : ""
                    }`}
                  >
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </section>
            {/* Right Nav */}
            <div className="flex items-center gap-4">
              <div>
                <Link href="/">
                  <figure className="w-[35px] h-[35px] rounded-full">
                    <Image
                      className="w-full rounded-full"
                      src={UserImg}
                      alt="userImg"
                    />
                  </figure>
                </Link>
              </div>
              <div>
                <Link href="/Login">
                  <button
                    className="bg-primaryColor py-2 px-6 text-gray-200 font-[600] h-[44px] flex items-center justify-center rounded-[50px]"
                    onClick={null}
                  >
                    Login
                  </button>
                </Link>
              </div>
              <button
                className="bg-gray-400 rounded-full lg:hidden cursor-pointer"
                onClick={toggleMenu}
              >
                <Image
                  className="w-full rounded-full"
                  src={showMenu ? Close : Menu}
                  alt="Menu"
                  priority={true}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
      {showMenu && <SideMenu pathname={pathname} toggleMenu={toggleMenu} />}
    </>
  );
};

export default Header;

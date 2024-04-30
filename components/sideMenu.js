"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Close from "../src/assets/images/close-icon.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const SideMenu = ({ pathname, isMenuToggled, toggleMenu }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Dashboard", label: "Find a Doctor" },
    { href: "/Services", label: "Services" },
    { href: "/Contact", label: "Contact" },
  ];

  // Update the showMenu state based on isMenuToggled
  const [showMenu, setShowMenu] = useState(isMenuToggled);

  // Use effect to keep showMenu updated when isMenuToggled changes
  useEffect(() => {
    setShowMenu(isMenuToggled);
  }, [isMenuToggled]);

  return (
    <nav
      className={`block fixed top-16 w-[12rem] h-full left-0 right-0 bg-gray-500 transition ${
        showMenu ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
    >
      {/* Close Icon */}
      <a href="#" onClick={toggleMenu} className="absolute top-3 right-3">
        <Image src={Close} alt="close" />
      </a>

      {/* Nav Links */}
      <ul className="menu flex flex-col items-center gap-[1.7rem] px-5 text-[16px] leading-7 font-[600]">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={pathname === link.href ? "text-primaryColor" : ""}>
                {link.label}

            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;


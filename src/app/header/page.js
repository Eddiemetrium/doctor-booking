"use client";
import { usePathname,useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";
import Link from "next/link";


const Header = () => {
  const router = useRouter(); // Use useRouter for routing
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Doctors", label: "Find a Doctor" },
    { href: "/Services", label: "Services" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <header className="header flex items-center pt-5">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <section>
            <Image src={logo} alt="logo" />
          </section>
          {/* Menu */}
          <section className="navigation">
            <ul
              className={`menu flex items-center gap-[2.7rem] px-5 text-[16px] leading-7 font-[600] ${
                pathname === Link ? "" : ""
              }`}
            >
            
              {navLinks.map(({ href, label }) => (
                <li
                  key={href}
                  className={`${pathname === href ? "text-primaryColor" : ""}`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;

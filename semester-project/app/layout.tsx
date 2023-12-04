"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
import Button from "./components/button/page";
import { IoMenuSharp } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import { useEffect, useState } from "react";

const pages = {
  Home: "/",
  About: "/about",
  Pets: "/pets",
  Donations: "/donations",
  Community: "/community",
  Blog: "/blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <html lang="en">
      <body>
        <nav className="navbar flex justify-between py-2 text-lg  px-14 text-lb fixed top-0 left-0 right-0 opacity-100 z-10">
          <ul
            className={`lg:flex lg:flex-row lg:bg-transparent  xl:bg-transparent 2xl:bg-transparent  ${
              showMenu ? "flex flex-col mt-12 -ml-4  bg-org" : "hidden"
            } lg:mt-0 lg:-ml-0`}
            style={
              showMenu
                ? {
                    borderRadius: "12px",
                  }
                : {}
            }>
            {Object.entries(pages).map(([name, path]) => (
              <li
                key={name}
                className="dropdown border-b-2 border-white p-1 sm:last-of-type:border-0 lg:last-of-type:border-b-2">
                <Link href={path}>
                  <Button title={name} backgroundColor="#EB8B57" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex lg:hidden">
            <span
              className={`nav-icon text-org text-5xl fixed top-1 left-14
              }`}
              onClick={toggleMenu}>
              <IoMenuSharp />
            </span>
          </div>
          <span className={"icon text-lg text-org"}>
            <VscAccount size={45} />
          </span>
        </nav>

        {children}

        <div className="footer bg-lblue py-8 px-20 text-xl text-lb">
          <div className="  flex justify-between flex-wrap gap-10">
            <div className="col1 flex flex-col gap-2 pt-4">
              <div className="logo-name gap-3 ">
                <div className="w-150 h-150 relative">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    className="w-150 h-150 relative"
                    width={150}
                    height={150}
                  />
                </div>

                <span>TRUE PAW org.</span>
              </div>
              <br />

              <span>Ulica Nade 26A,</span>
              <span>21000 Split,</span>
              <span>Croatia</span>
            </div>
            <div className=" pt-20">
              <div className="flex flex-col gap-2">
                <span>Contact Us:</span>
                <span>truepaw@shelters.com</span>
                <span>+385 01 111 1111 (fax)</span>
                <span>+385 92 111 2222 (phone)</span>
                <span className="flex gap-2">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedin />
                </span>
              </div>
            </div>
            <div className="col3">
              <ul className="flex flex-col gap-2 pt-20">
                {Object.entries(pages).map(([name, path]) => (
                  <li key={name}>
                    <Link href={path}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col4 flex flex-col gap-2 pt-20">
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Documentation</span>
            </div>
          </div>
          <div className="rights border-t-2 border-lb pt-8 mt-20">
            <span>All Rights Reserved 2023</span>
          </div>
        </div>
      </body>
    </html>
  );
}

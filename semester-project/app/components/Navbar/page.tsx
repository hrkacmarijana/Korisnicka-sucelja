"use client";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMenuSharp } from "react-icons/io5";

interface NavbarProps {
  pages: Record<string, `/${string}`>;
  accountIcon: Record<string, `/${string}`>;
}

const Navbar: FC<NavbarProps> = ({ pages, accountIcon }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowAccount(false);
  };

  const [showAccount, setShowAccount] = useState(false);

  const toggleAccount = () => {
    setShowAccount(!showAccount);
    setShowMenu(false);
  };

  return (
    <nav className="navbar flex justify-between py-2 text-lg  px-14 text-lb fixed top-0 left-0 right-0 opacity-100 z-10">
      <div>
        <ul
          className={`lg:flex px-2 lg:flex-row lg:bg-transparent xl:border-none 2xl:border-none  xl:bg-transparent 2xl:bg-transparent  ${
            showMenu
              ? "flex flex-col mt-14 -ml-4 border-2 bg-org border-lb lg:border-0 xl:border-0 2xl:border-0 "
              : "hidden"
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
              className="dropdown border-b-2 border-white p-1 lg:last-of-type:border-b-2 last-of-type:border-0">
              <Link href={path}>
                <button className="bg-org text-white rounded-xl py-2 px-8 text-lg font-bold">
                  {name}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex lg:hidden xl:hidden 2xl:hidden">
          <button
            className={`nav-icon text-org text-5xl fixed top-3 left-14
              }`}
            onClick={toggleMenu}>
            <IoMenuSharp size={55} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          className={"icon text-org fixed top-5 right-14  "}
          onClick={toggleAccount}>
          <VscAccount size={42} />
        </button>

        <ul
          className={`${
            showAccount
              ? "flex flex-col mt-16 py-1 px-5 rounded-xl bg-lb border-2 border-org z-10"
              : "hidden"
          }`}>
          {Object.entries(accountIcon).map(([name, path]) => (
            <li
              key={name}
              className="dropdown border-b-2 border-org p-1 last-of-type:border-none">
              <Link href={path}>
                <button
                  className="bg-lb
                 text-org rounded-xl py-2 px-8 text-lg font-bold">
                  {name}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

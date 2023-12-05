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

  const [color, setColor] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const navEl = document.querySelector("#section-2") as HTMLElement | null;
      if (navEl) {
        const sectionHeight = navEl.clientHeight;
        if (window.scrollY >= sectionHeight) {
          setColor(true);
        } else {
          setColor(false);
        }
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  useEffect(() => {
    const checkResize = () => {
      setShowAccount(false);
      setShowMenu(false);
    };
    window.addEventListener("resize", checkResize);
    window.addEventListener("scroll", checkResize);
    return () => {
      window.removeEventListener("resize", checkResize);
      window.removeEventListener("scroll", checkResize);
    };
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      setShowAccount(false);
      setShowMenu(false);
    };
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <nav
      id="navigation"
      className={` flex justify-between py-10 lg:py-3 xl:py-3 2xl:py-3 text-lg  px-14 text-lb fixed top-0 left-0 right-0 opacity-100 z-10 ${
        color ? "bg-db bg-opacity-96 transition duration-500 ease-in-out" : ""
      }
     `}>
      <div>
        <ul
          className={`lg:flex px-2 lg:flex-row lg:bg-transparent xl:border-none 2xl:border-none  xl:bg-transparent 2xl:bg-transparent 
          ${color && showMenu ? "bg-transparent border-0 mt-8 " : ""}
          ${
            showMenu
              ? " flex flex-col mt-14 -ml-4 border-2 bg-org border-lb lg:border-0 xl:border-0 2xl:border-0  "
              : "hidden"
          } 
          lg:mt-0 lg:-ml-0`}
          style={
            showMenu
              ? {
                  borderRadius: "12px",
                }
              : {}
          }>
          {pages &&
            Object.entries(pages).map(([name, path], index) => (
              <li
                key={name}
                className={`
             
                dropdown border-b-2 border-white p-1 lg:last-of-type:border-b-2 last-of-type:border-0
                ${color && showMenu ? "border-b-2 border-b-orange-300" : ""}
                `}>
                <Link href={path}>
                  <button
                    className={`bg-org text-white rounded-xl py-2 px-8 text-lg font-bold  ${
                      color && showMenu
                        ? "bg-transparent py-2 px-0 text-orange-300"
                        : ""
                    }`}>
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
          className={`pt-3
          ${
            color && showAccount
              ? "bg-transparent border-0 mt-8 px-0  items-right "
              : ""
          }
          ${
            showAccount
              ? "flex flex-col mt-14 py-0 px-4 rounded-xl bg-lb border-2 border-org z-10"
              : "hidden"
          }
          
          
          `}>
          {accountIcon &&
            Object.entries(accountIcon).map(([name, path], index) => (
              <li
                key={name}
                className={`dropdown border-b-2 border-org p-1 last-of-type:border-none 
                  
                ${color && showAccount ? "px-0 " : ""}

                  `}>
                <Link href={path}>
                  <button
                    className={`
                    ${
                      color && showAccount
                        ? "bg-transparent border-0 p-0"
                        : "px-8"
                    }
                    bg-lb
                 text-org rounded-xl py-2  text-xl font-bold
                

                 `}>
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

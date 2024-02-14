"use client";
import Link from "next/link";
import { FC, useState, useEffect } from "react";
import { VscAccount } from "react-icons/vsc";
import Hamburger from "hamburger-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import "./navbar.modules.css";

interface NavbarProps {
  pages: Record<string, `/${string}`>;
  accountIcon: Record<string, `/${string}`>;
}

const Navbar: FC<NavbarProps> = ({ pages, accountIcon }) => {
  const pathname = usePathname();
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
        color
          ? "bg-purple-100 bg-opacity-96 transition duration-500 ease-in-out"
          : ""
      }

      ${color && (showMenu || showAccount) ? "flex-col" : ""}
     `}
    >
      <div
        className={`bg-transparent ${color && showMenu ? "self-center" : ""}`}
      >
        <ul
          className={`lg:flex px-2 lg:flex-row lg:bg-transparent    
          ${
            showMenu ? " flex flex-col mt-14 -ml-4  bg-purple-400  " : "hidden"
          } 
          ${
            showMenu && color
              ? "   bg-transparent  mt-8 flex flex-col items-center text-xxl"
              : ""
          }
          lg:mt-0 lg:-ml-0`}
          style={
            showMenu
              ? {
                  borderRadius: "12px",
                }
              : {}
          }
        >
          {pages &&
            Object.entries(pages).map(([name, path], index) => (
              <li
                key={name}
                className={`p-1  
                
               
                `}
              >
                <Link href={path}>
                  <button
                    className={`
                    bg-purple-400 text-white rounded-xl py-2 px-8 text-lg font-bold
                    ${pathname === path && !showMenu ? " bg-purple-600" : " "}
                     ${pathname === path && showMenu ? " text-black" : ""}

                    ${
                      color && showMenu
                        ? "bg-purple-400 py-3 px-0 text-white "
                        : ""
                    }
                    ${!showMenu ? " hover:bg-purple-600" : "hover:text-black"}
                   
                  `}
                  >
                    {name.toUpperCase()}
                  </button>
                </Link>
              </li>
            ))}
        </ul>

        <div className="flex lg:hidden xl:hidden 2xl:hidden">
          <button
            className={`nav-icon text-purple-400 text-5xl fixed top-3 left-14
              }`}
            onClick={toggleMenu}
          >
            <Hamburger
              rounded
              duration={0.6}
              size={40}
              toggled={showMenu}
              onToggle={toggleMenu}
            />
          </button>
        </div>
      </div>

      <div className="flex ">
        <button
          className={"icon text-purple-400 fixed top-5 right-14  "}
          onClick={toggleAccount}
        >
          <VscAccount size={42} />
        </button>
      </div>
      <div className={`self-end -mr-5`}>
        <ul
          className={`pt-3 bg-purple-400 
          ${
            showAccount
              ? "flex flex-col mt-14 py-0 px-4 rounded-xl bg-lb  z-10"
              : "hidden"
          }
          ${color && showAccount ? "  mt-8  " : ""}
         
          
          
          `}
        >
          {accountIcon &&
            Object.entries(accountIcon).map(([name, path], index) => (
              <li
                key={name}
                className={`dropdown  p-1 
                  
                ${color && showAccount ? "px-7 py-2 " : ""}

                  `}
              >
                <Link href={path}>
                  <button
                    className={`hover:text-black
                    ${color && showAccount ? "bg-transparent p-0" : "px-8"}
                    
                    bg-purple-400
                 text-white rounded-xl py-2  text-xl font-bold
                

                 `}
                  >
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

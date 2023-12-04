import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
import Button from "./components/button/page";
import { IoMenuSharp } from "react-icons/io5";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js lab project",
  description: "Next.js lab project",
};

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between py-2 text-lg  bg-db px-14 text-lb fixed top-0 left-0 right-0 opacity-100 z-10">
          <ul className="navig hidden lg:flex gap-5">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name} className="dropdown">
                <Link href={path}>
                  <Button title={name} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex lg:hidden">
            <span className="nav-icon text-5xl">
              <IoMenuSharp />
            </span>
          </div>
          <span className="icon text-lg ">
            <VscAccount size={45} />
          </span>
        </nav>

        {children}
      </body>
    </html>
  );
}

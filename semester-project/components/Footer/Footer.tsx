import Image from "next/image";
import Link from "next/link";
import "./footer.modules.css";
import { FC } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

interface footerProps {
  pages: Record<string, `/${string}`>;
}

const Footer: FC<footerProps> = ({ pages }) => {
  return (
    <div className="footer bg-purple-700 py-8 px-20 xsm:px-8 text-xl text-lb">
      <div className="  flex justify-stretch flex-wrap gap-20 xxsm:gap-0">
        <div className="flex gap-20 flex-wrap xxsm:gap-0">
        <div className="col1 flex flex-col gap-2 pt-4 w-64">
          <div className="logo-name gap-3 ">
            <div className="w-150 h-150 relative pb-10 pt-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className="w-150 h-150 relative"
                  width={150}
                  height={150}
                />
              </Link>
            </div>

            <span>TRUE PAW org.</span>
          </div>
          <br />

          <span>Ulica Nade 26A,</span>
          <span>21000 Split,</span>
          <span>Croatia</span>
        </div>
        <div className=" pt-20">
          <div className="flex flex-col gap-2 w-64 ">
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
        </div>
        <div className="flex gap-20 xxsm:gap-0 flex-wrap">
        <div className="col3">
          <ul className="flex flex-col gap-2 pt-20 font-bold w-64">
            {pages &&
              Object.entries(pages).map(([name, path], index) => (
                <li key={name}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="col4 w-64 flex flex-col gap-2 pt-20">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Documentation</span>
        </div></div>
      </div>
      <div className="rights border-t-2 border-lb pt-8 mt-20">
        <span>All Rights Reserved 2023</span>
      </div>
    </div>
  );
};

export default Footer;

import { FC } from "react";
import Image from "next/image";
import logo from "public/logo.png";
import "./logo.modules.css";

const Logo: FC = () => <Image className="logo-img" src={logo} alt="Logo" />;

export default Logo;

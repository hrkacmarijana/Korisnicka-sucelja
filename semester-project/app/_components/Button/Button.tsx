"use client";
import { FC } from "react";
import Link from "next/link";
import "./styles.modules.css";

interface ButtonProps {
  textHolder: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ textHolder, href }) => {
  return (
    <div className="button-container">
      <Link href={href} className="button hover:bg-purple-900">
        <button>{textHolder.toUpperCase()}</button>
      </Link>
    </div>
  );
};

export default Button;

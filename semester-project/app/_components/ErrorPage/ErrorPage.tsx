import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";

const ErrorPage: FC = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>We have a problem</h2>
        <button ref="/">Go Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;

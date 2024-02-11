import Image from "next/image";
import "./styles.modules.css";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="">
      <div className="background-container">
        <Image
          className="background-container"
          src="/error-page.png"
          alt="bg-image"
          fill={true}
          priority
        />
        <div className="text">
          <p>404</p>
          <p>Oops! I may have chewed up the power cord.</p>
          <p>Go back to our mainpage to continue your visit.</p>
          <div className="button-container">
            <Link href="\pets" className="button bg-black text-white  ">
              Back to main page
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

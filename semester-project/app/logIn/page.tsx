import React from "react";
import "./styles.modules.css";
import Button from "../_components/Button/Button";
import Image from "next/image";

const LoginPage: React.FC = () => {
  return (
    <div className="page bg-purple-200">
      <div className="login-page ">
        <h2>Login</h2>
        <form className="login-form">
          <div className="container">
            <div className="cnt">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
              </div>
              <div className="button">
                <Button textHolder="Log In" href="/logIn" />
              </div>
            </div>
            <div className="image-container">
              <Image
                className="animal-img animal-main-img"
                src="/logIn.jpg"
                fill={true}
                priority
                alt="login-image"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

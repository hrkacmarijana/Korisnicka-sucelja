import React from "react";
import "./styles.modules.css";
import Button from "../_components/Button/Button";
import Image from "next/image";

const SignUpPage: React.FC = () => {
  return (
    <div className="page bg-purple-200">
      <div className="signup-page ">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <div className="container">
            <div className="cnt">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="name" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Lastname:</label>
                <input type="lastname" id="lastname" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="phone" id="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
              </div>
              <div className="button">
                <Button textHolder="Sign Up" href="/signup" />
              </div>
            </div>
            <div className="image-container">
              <Image
                className="animal-img animal-main-img"
                src="/signUp.jpg"
                fill={true}
                priority
                alt="signup-image"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

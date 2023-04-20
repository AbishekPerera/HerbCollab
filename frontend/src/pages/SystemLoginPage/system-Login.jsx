import React, { useState } from "react";
import "./system-Login.css";
import Header from "../../components/Header/Header";

const SystemLogin = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSigninClick = () => {
    setIsSignUpMode(false);
  };

  const handleSignupClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignupMode = () => {
    setIsSignUpMode(true);
  };

  const handleSigninMode = () => {
    setIsSignUpMode(false);
  };

  return (

    <><Header /><div className={`container-login ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <input type="name" className="input-field" placeholder="UserName" />
            <input type="password" className="input-field" placeholder="Password" />

            <input type="submit" value="Login" id="btnLogin" className="btnLogin solid" />
            <a href="" className="social-text">Fogot Password ? </a>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>

            <input type="name" className="input-field" placeholder="User Name" />

            <input type="name" className="input-field" placeholder="Store Name" />

            <input type="email" className="input-field" placeholder="Email" />

            <input type="number" className="input-field" placeholder="Mobile Number" />

            <input type="address" className="input-field" placeholder="Address" />

            <input type="password" className="input-field" placeholder="Password" />

            <input type="submit" id="btnLogin" value="Sign up" />


          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel" onClick={handleSignupMode}>
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btnLogin transparent" id="sign-up-btnLogin" onClick={handleSigninClick}>
              Sign up
            </button>
          </div>

        </div>
        <div className="panel right-panel" onClick={handleSigninMode}>
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btnLogin transparent" id="sign-in-btnLogin" onClick={handleSignupClick}>
              Sign in
            </button>
          </div>

        </div>
      </div>
    </div></>
  )}

export default SystemLogin;

import React, { useState } from "react";
import "./system-Login.css";

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
    <div className={`container-login ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="name" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" id="btnLogin" className="btnLogin solid" />
            <a href="" className="social-text">Fogot Password ? </a>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="name" placeholder="User Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="name" placeholder="Store Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="number" placeholder="Mobile Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="textfileld" rows="2" colomns="2" placeholder="Address" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
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
</div>
  )}

export default SystemLogin;

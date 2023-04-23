import React from "react";

const SystemLoginForm = () => {
  return (
    <form action="#" className="sign-in-form">
    <h2 className="title">Sign in</h2>
    <input type="name" className="input-field" placeholder="UserName" />
    <input type="password" className="input-field" placeholder="Password" />

    <input type="submit" value="Login" id="btnLogin" className="btnLogin solid" />
    <a href="" className="social-text">Fogot Password ? </a>
  </form>
  );
};

export default SystemLoginForm;

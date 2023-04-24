import React from "react";
import "../../pages/SystemLoginPage/system-Login.css"

const SystemSignupForm = () => {
  return (
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
  );
};

export default SystemSignupForm;
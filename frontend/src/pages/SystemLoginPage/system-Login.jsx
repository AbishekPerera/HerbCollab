import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./system-Login.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const SystemLogin = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [inputs, setInputs] = useState({
    UserName: "",
    StoreName: "",
    Email: "",
    MobileNo: "",
    Address: "",
    Password: "",
  });

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

  //redirect to page
  const history = useNavigate();

  //call function Validate
  const sendData = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputs));
    setIsSubmit(true);
  };

  const sendData2 = (e) => {
    e.preventDefault();
    //setFormErrors(validate(inputs));
    //setIsSubmit(true);
    sendRequest2();
  };

  //insert data
  const sendRequest1 = async () => {
    await axios
      .post("http://localhost:8084/users/signup", {
        UserName: inputs.UserName,
        StoreName: inputs.StoreName,
        Email: inputs.Email,
        MobileNo: inputs.MobileNo,
        Address: inputs.Address,
        Password: inputs.Password,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((error) => {
        alert(error);
        if (error.response.status === 406) {
          alert("User already exists! Login Instead");
        } else {
          alert(error);
        }
      });
  };

  const sendRequest2 = async () => {
    await axios
      .post("http://localhost:8084/users/login", {
        Email: inputs.Email,
        Password: inputs.Password,
      })
      .then((res) => {
        alert("You have successfully Logged.");

        //set response data to local storage
        localStorage.setItem("systemInfo", JSON.stringify(res.data));

        // get data from local storage as a string
        // const systemInfo = localStorage.getItem("systemInfo");
        // set data to local storage as a JSON object
        // const systemInfo1 = JSON.parse(systemInfo);

        // then you can get any data from local storage. in this case i get user id adn log it on console
        // console.log("local store", systemInfo1["user"]["_id"]);

        if (res.data.user.Role === "Seller") {
          history("/system/seller-Profile");
        } else if (res.data.user.Role === "Admin") {
          history("/admin-Profile");
        } else {
          alert("You are not a Seller or admin. Please Login as a Seller");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("User not Found. SignUp Please");
        } else if (error.response.status === 401) {
          alert("Invalid Email/Password");
        } else if (error.response.status === 402) {
          alert("Your account is not activate Yet");
        } else {
          alert(error);
        }
      });
  };

  //call function sendRequest to submit data
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendRequest1();
    }
  }, [formErrors]);

  //Set input value on change
  function handleChange(e) {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  //frontend validation
  const validate = (values) => {
    const errors = {};

    if (!values.UserName) {
      errors.UserName = "UserName is required";
    }

    if (!values.Email) {
      errors.Email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = "Invalid email address";
    }
    if (!values.Password) {
      errors.Password = "Password is required";
    } else if (values.Password.length <= 6) {
      errors.Password = "Password should contain more than 6 chracters.";
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/i.test(values.Password)
    ) {
      errors.Password =
        "Password should contain at least one numeric digit and a special character";
    }

    if (!values.MobileNo) {
      errors.MobileNo = "Mobile Number is required";
    } else if (values.MobileNo.length !== 10) {
      errors.MobileNo = "Invalid MobileNo";
    }
    /*else if(isNaN(values.MobileNo)){
      errors.MobileNo="Invalid MobileNo";
  }*/

    return errors;
  };

  return (
    <>
      <Header />
      <div className={`container-login ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={sendData2} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <input
                type="name"
                className="input-field"
                placeholder="Email"
                name="Email"
                value={inputs.Email}
                onChange={handleChange}
              />
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                name="Password"
                value={inputs.Password}
                onChange={handleChange}
              />

              <input
                type="submit"
                value="Login"
                id="btnLogin"
                className="btnLogin solid"
              />
              <Link className="social-text">Forgot Password ? </Link>
            </form>
            <form onSubmit={sendData} className="sign-up-form">
              <h2 className="title">Sign up</h2>

              <input
                type="name"
                className="input-field"
                name="UserName"
                value={inputs.UserName}
                onChange={handleChange}
                placeholder="User Name"
              />
              <p class="error">{formErrors.UserName}</p>

              <input
                type="name"
                className="input-field"
                name="StoreName"
                value={inputs.StoreName}
                onChange={handleChange}
                placeholder="Store Name"
              />
              <p class="error">{formErrors.StoreName}</p>

              <input
                type="email"
                className="input-field"
                name="Email"
                value={inputs.Email}
                onChange={handleChange}
                placeholder="Email"
              />
              <p class="error">{formErrors.Email}</p>

              <input
                type="number"
                className="input-field"
                name="MobileNo"
                value={inputs.MobileNo}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
              <p class="error">{formErrors.MobileNo}</p>

              <input
                type="address"
                className="input-field"
                name="Address"
                value={inputs.Address}
                onChange={handleChange}
                placeholder="Address"
              />
              <p class="error">{formErrors.Address}</p>

              <input
                type="password"
                className="input-field"
                name="Password"
                value={inputs.Password}
                onChange={handleChange}
                placeholder="Password"
              />
              <p class="error">{formErrors.Password}</p>

              <input type="submit" id="btnLogin" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel" onClick={handleSignupMode}>
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btnLogin transparent"
                id="sign-up-btnLogin"
                onClick={handleSigninClick}
              >
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
              <button
                className="btnLogin transparent"
                id="sign-in-btnLogin"
                onClick={handleSignupClick}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SystemLogin;

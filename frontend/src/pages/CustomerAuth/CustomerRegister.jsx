import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import "./CustomerAuth.css";
import RegisterImg from "../../img/other comp/register1.jpeg";
import axios from "axios";
import swal from "sweetalert";

const CustomerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const history = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, address, phone, password, confirmPassword);

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    const newOb = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      password: password,
    };

    // console.log(newOb);

    axios
      .post("http://localhost:8075/auth/addcustomer", newOb)
      .then((res) => {
        swal({
          title: "Registration Successfull.",
          icon: "success",
          button: "Ok",
        }).then(() => {
          console.log(res.data);
          history("/customerlogin");
          setError(false);
        });
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="login-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-customerloginpage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">Register</h1>
                  <div class="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">
                          <span class="ltn__secondary-color">
                            <i class="bi bi-house-fill"></i>
                          </span>
                          Home
                        </Link>
                      </li>
                      <li>Register</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
      </div>

      {/* -----------Register content-------------- */}
      <div class="container registerbackground">
        <div className="row ">
          <div className="col-lg-6 col-md-3 col-sm-12 text-start registrationsidejpg">
            <br />
            <br />
            <h1 class="text-center">Registration Form</h1>
            <form class="registrationform" onSubmit={submitHandler}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Address
                </label>
                <input
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  class="form-control"
                  id="address"
                  aria-describedby="emailHelp"
                  placeholder="Enter Address"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  class="form-control"
                  id="phone"
                  aria-describedby="emailHelp"
                  placeholder="Enter Phonenumber"
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  id="password"
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">
                  Confirm Password
                </label>
                <input
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  aria-describedby="emailHelp"
                  placeholder="Enter Confirm Password"
                />
                {passwordError && (
                  <span style={{ color: "red" }}>
                    Passwords do not match! Please try again.
                  </span>
                )}
              </div>

              <div class="mb-3 form-check">
                <input
                  required
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I agree to HerbCollab's terms and privacy policy
                </label>
              </div>
              <div className="somethingwentwrong p-2">
                {error && (
                  <span style={{ color: "red" }}>
                    Something went wrong! Please try again.
                  </span>
                )}
              </div>

              <button type="submit" class="registerbtn btn btn-success">
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-3 col-sm-12 text-start registrationsidejpg2">
            <img src={RegisterImg} alt="register" className="registerimg" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerRegister;

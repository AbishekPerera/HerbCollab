import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./CustomerAuth.css";
import { Container } from "react-bootstrap";
import loginsidejpg from "../../img/other comp/loginside.jpg";

const CustomerLogin = () => {
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
                  <h1 class="page-title">Login</h1>
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
                      <li>Login</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}

        {/* -----------Login content-------------- */}

        <Container className="loginform-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-3 col-sm-12 loginsidejpg">
              <img src={loginsidejpg} />
            </div>
            <div className="col-lg-6 col-md-9 col-sm-12 loginformdiv">
              <div className="loginform p-5">
                <div className="row text-center">
                  <h1>Login</h1>
                </div>
                <div className="row">
                  {/* login form  */}
                  <form>
                    <div className="form-group m-2">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group m-2">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group form-check m-2">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <div className="loginsubmit m-2 justify-content-center  d-flex">
                      <button type="submit" className="btn btn-success">
                        Login
                      </button>
                    </div>
                    {/* dont have an account */}
                    <div className="dont-have-account m-2 p-2 text-center">
                      <p>
                        Don't have an account?{" "}
                        <Link to="/customer/register">Register</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default CustomerLogin;

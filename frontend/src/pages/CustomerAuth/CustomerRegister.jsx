import React from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./CustomerAuth.css";
import RegisterImg from "../../img/other comp/register1.jpeg";

const CustomerRegister = () => {
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
              <br/><br/><h1 class="text-center">Registration Form</h1>
              <form class="registrationform ">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder='Enter Name'/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder='Enter Email'/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" aria-describedby="emailHelp" placeholder='Enter Address'/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input type="phone" class="form-control" id="phone" aria-describedby="emailHelp" placeholder='Enter Phonenumber'/>
                    </div>
                    <div class="mb-3">
                        <label for="gender" class="form-label">Gender</label>
                        <select class="form-select" id="gender" name="gender">
                          <option value="" disabled selected>Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                    </div>

                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">I agree to HerbCollab's terms and privacy policy</label>
                    </div>
                    <button type="submit" class="registerbtn btn btn-success">Sign Up</button>
                </form>
          </div>
          <div className="col-lg-6 col-md-3 col-sm-12 text-start registrationsidejpg">
          <img src={RegisterImg} alt="register" className="registerimg"/>
          </div>
        </div>
      </div>

      <Footer />  
    </div>
    
  )
}

export default CustomerRegister
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CusProfileNavbar from "../../components/CusProfileNavbar/CusProfileNavbar";
import { Link } from "react-router-dom";
import "./MyProfile.css";
import CustomerProfilePhoto from "../../img/other comp/CustomerProfilePhoto.jpeg";

const MyProfile = () => {
  if (localStorage.getItem("userInfo") === null) {
    window.location.href = "/";
  }
  return (
    <div>
      <Header />
      <div className="muprofile-page-body">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-myprofilepage text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">My Profile</h1>
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
                      <li>MyProfile</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
      </div>

      {/* Navigation Bar Onwards*/}
      <div class="container-fluid">
        <div class="row">
          {/* Navigation Bar */}

          <CusProfileNavbar />
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-7">
                <div class="container">
                  <h1>My Profile</h1>
                  <br />
                  <br />
                  <form>
                    <div class="form-group">
                      <label for="name" class=" profileformlabelName">
                        <i class="bi bi-person-circle profileicon"></i>Name:
                      </label>
                      <br />
                      <input
                        type="text"
                        class="form-control profileformtextareaName"
                        id="name"
                        name="name"
                        required
                      />
                      <br />
                    </div>
                    <div class="form-group">
                      <label for="address" class=" profileformlabelName">
                        <i class="bi bi-geo-alt profileicon"></i>Address:
                      </label>
                      <br />
                      <input
                        type="text"
                        class="form-control profileformtextareaName"
                        id="address"
                        name="address"
                        required
                      />
                      <br />
                    </div>
                    <div class="form-group">
                      <label for="phone" class="profileformlabel">
                        <i class="bi bi-telephone-fill profileicon"></i>Mobile:
                      </label>
                      <input
                        type="tel"
                        class="form-control profileformtextarea"
                        id="phone"
                        name="phone"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="email" class="profileformlabel">
                        <i class="bi bi-envelope-at-fill profileicon"></i>Email:
                      </label>
                      <input
                        type="email"
                        class="form-control profileformtextarea"
                        id="email"
                        name="email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="profileformlabel">
                        <i class="bi bi-pencil-fill profileicon"></i>Password:
                      </label>
                      <input
                        type="password"
                        class="form-control profileformtextarea"
                        id="password"
                        name="password"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="gender" class="profileformlabel">
                        <i class="bi bi-gender-ambiguous profileicon"></i>
                        Gender:
                      </label>
                      <input
                        type="gender"
                        class="form-control profileformtextarea"
                        id="gender"
                        name="gender"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="bday" class="profileformlabel">
                        <i class="bi bi-calendar profileicon"></i>Birthday:
                      </label>
                      <input
                        type="bday"
                        class="form-control profileformtextarea"
                        id="bday"
                        name="bday"
                        required
                      />
                      <br />
                      <br />
                    </div>
                    {/* <button type="submit" class="btn btn-primary">Edit Profile Info</button> */}
                    <div>
                      <button class="btn editbtn">
                        <i class="bi bi-check-square-fill"></i>Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="container">
                  <br />
                  <br />
                  <br />
                  <div>
                    <img
                      style={{ width: "200px", height: "200px" }}
                      src={CustomerProfilePhoto}
                      alt="register"
                      className="registerimg"
                    />
                  </div>
                  <br />
                  <br />
                  <form
                    class="upload-form"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <label for="photo">Choose Photo:</label>
                      <input
                        type="file"
                        class="form-control"
                        id="photo"
                        name="photo"
                      />
                    </div>
                    <button type="submit" class="btn btn-info">
                      Upload
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyProfile;

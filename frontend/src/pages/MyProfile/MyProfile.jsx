import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./MyProfile.css";

const MyProfile = () => {
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

    {/* Profile Content */}
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          {/* Column1 */}
        </div> 
        <div class="col-md-4">
          {/* Column2 */}
        </div> 
      </div>
    </div>

    <Footer />
    </div>
  );
};

export default MyProfile;

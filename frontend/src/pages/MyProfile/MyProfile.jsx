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
    <div class="container-fluid">
      <div class="row">
          <div class="col-md-2">
            <div class="sidebar sidebar77">
              <ul class="nav flex-column">
                <br/><li class="nav-item nav-item77">
                    <a class="nav-link nav-link77" href="#">
                    <i class="bi bi bi-person-fill me-2"></i>My Profile
                    </a>
                </li>
                <li class="nav-item nav-item77">
                    <Link to="#" class="nav-link nav-link77">
                    <i class="bi bi-cart-fill me-2"></i>My Orders
                    </Link>
                </li>
                <li class="nav-item nav-item77">
                    <Link to="#" class="nav-link nav-link77"> 
                    <i class="bi bi-clock-history me-2"></i>Pre Orders
                    </Link>
                </li>
                <li class="nav-item nav-item77">
                    <Link to="#" class="nav-link nav-link77">   
                    <i class="bi bi-truck me-2"></i>Shipped
                    </Link>
                </li>
                <li class="nav-item nav-item77">
                    <Link to="#" class="nav-link nav-link77">
                    <i class="bi bi-star-fill me-2"></i>Reviews
                    </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <h1>My Profile</h1>
            <p>Lorem ipsum dolor sit amet,    ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc cccccccccccccccccccccccccccccccccccccccccccccccccccc  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv consectetur adipiscing elit. Fusce vel nibh sit amet massa varius accumsan. Praesent ut elit quis tortor viverra consequat. Sed vel tortor vestibulum, elementum augue at, scelerisque sapien. Sed laoreet purus in sagittis vulputate. Nulla viverra arcu vel ligula sollicitudin, non pellentesque lectus pretium. Mauris mollis sed tellus vel malesuada.</p>
            <p>Lorem ipsum dolor sit amet,    ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc cccccccccccccccccccccccccccccccccccccccccccccccccccc  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv consectetur adipiscing elit. Fusce vel nibh sit amet massa varius accumsan. Praesent ut elit quis tortor viverra consequat. Sed vel tortor vestibulum, elementum augue at, scelerisque sapien. Sed laoreet purus in sagittis vulputate. Nulla viverra arcu vel ligula sollicitudin, non pellentesque lectus pretium. Mauris mollis sed tellus vel malesuada.</p>
            <p>Lorem ipsum dolor sit amet,    ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc cccccccccccccccccccccccccccccccccccccccccccccccccccc  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv consectetur adipiscing elit. Fusce vel nibh sit amet massa varius accumsan. Praesent ut elit quis tortor viverra consequat. Sed vel tortor vestibulum, elementum augue at, scelerisque sapien. Sed laoreet purus in sagittis vulputate. Nulla viverra arcu vel ligula sollicitudin, non pellentesque lectus pretium. Mauris mollis sed tellus vel malesuada.</p>
            <p>Lorem ipsum dolor sit amet,    ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssc cccccccccccccccccccccccccccccccccccccccccccccccccccc  vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv consectetur adipiscing elit. Fusce vel nibh sit amet massa varius accumsan. Praesent ut elit quis tortor viverra consequat. Sed vel tortor vestibulum, elementum augue at, scelerisque sapien. Sed laoreet purus in sagittis vulputate. Nulla viverra arcu vel ligula sollicitudin, non pellentesque lectus pretium. Mauris mollis sed tellus vel malesuada.</p>
          </div>
      </div>
    </div>




    <Footer />
    </div>
  );
};

export default MyProfile;

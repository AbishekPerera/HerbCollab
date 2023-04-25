import React from "react";
import { Link } from "react-router-dom";
import "./CusProfileNavbar.css";
// import { Row, Col, Navbar, Container, Nav } from "react-bootstrap";

const CusProfileNavbar = () => {
  return (
    <div class="col-lg-2">
      <div class="sidebar sidebar77">
        <ul class="nav flex-column customer-sidebar-abi">
          <br />
          <li class="nav-item nav-item77">
            <Link class="nav-link nav-link77" to={"/myaccount"}>
              <i class="bi bi bi-person-fill me-2 "></i>My Profile
            </Link>
          </li>
          <li class="nav-item nav-item77">
            <Link class="nav-link nav-link77" to={"/myaccount/myorders"}>
              <i class="bi bi-cart-fill me-2"></i>My Orders
            </Link>
          </li>
          <li class="nav-item nav-item77">
            <Link to="/myaccount/mypreorders" class="nav-link nav-link77">
              <i class="bi bi-clock-history me-2"></i>Pre Orders
            </Link>
          </li>
          <li class="nav-item nav-item77">
            <Link to="/myaccount/myshipped" class="nav-link nav-link77">
              <i class="bi bi-truck me-2"></i>Shipped
            </Link>
          </li>
          <li class="nav-item nav-item77">
            <Link to="/myaccount/myreviews" class="nav-link nav-link77">
              <i class="bi bi-star-fill me-2"></i>Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CusProfileNavbar;

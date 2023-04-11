import React from "react";
import Logo from "../../img/Logo/logo.png";
import "./Header.css";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Row>
        <Col lg={3}>
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="" id="navbar-Logo" />
          </a>
        </Col>
        <Col lg={5}></Col>
        <Col lg={2}>
          <div class="row pt-5">
            <div class="col-1">
              <i class="bi bi-telephone fs-5"></i>
            </div>
            <div class="col-9">
              <h6>Phone</h6>
              <p>
                <a href="tel:0123456789">+0123-456-789</a>
              </p>
            </div>
          </div>
        </Col>
        <Col lg={2}>
          <div class="row pt-5">
            <div class="col-1">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div class="col-9">
              <h6>Address</h6>
              <p>123, Main Street, New York, USA</p>
            </div>
          </div>
        </Col>
      </Row>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            <div className="row">
              <div className="col-8">
                <form class="d-flex header-search-2">
                  <input
                    class="form-control me-sm-2"
                    type="search"
                    placeholder="Search"
                  />
                  <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
              <div className="col-4">
                <div className="cart-acc-section m-sm-2">
                  <a href="#" className="cart-acc fs-5 m-lg-3">
                    <i class="bi bi-cart"></i>
                  </a>
                  <a href="#" className="cart-acc fs-5 m-lg-3">
                    <i class="bi bi-person"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import Logo from "../../img/Logo/logo.png";
import "./Header.css";
import { Row, Col, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollTop = window.pageYOffset;

    console.log(scrollTop);
    if (scrollTop > 100 && !isSticky) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  return (
    <div className="header-nav-bar">
      <Row>
        <Col lg={3}>
          <a class="navbar-brand">
            <Link>
              <img src={Logo} alt="" id="navbar-Logo" />
            </Link>
          </a>
        </Col>
        <Col lg={5}>
          <div className="herbcolab-title">
            <h1>HERBCOLAB</h1>
            <p>"your trusted source for natural healing"</p>
          </div>
        </Col>
        <Col lg={2} className="company-info-nav">
          <div class="row pt-5">
            <div class="col-3">
              <i class="bi bi-telephone"></i>
            </div>
            <div class="col-9">
              <h6>Phone</h6>
              <p>
                <a href="tel:0123456789">+0123-456-789</a>
              </p>
            </div>
          </div>
        </Col>
        <Col lg={2} className="company-info-nav">
          <div class="row pt-5">
            <div class="col-3">
              <i class="bi bi-geo-alt"></i>
            </div>
            <div class="col-9">
              <h6>Address</h6>
              <p>123, Main Street, New York, USA</p>
            </div>
          </div>
        </Col>
      </Row>

      <Navbar bg="primary" variant="dark" className={isSticky ? "sticky" : ""}>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Shop">Shop</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
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
            <div className="col-4 ">
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
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

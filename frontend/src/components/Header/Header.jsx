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
                <Link to="tel:0123456789">+0123-456-789</Link>
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
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link to="/shop">
              <Nav.Link>Shop</Nav.Link>
            </Link>
            <Link to="/news">
              <Nav.Link>News</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link>About</Nav.Link>
            </Link>
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
                <Link to="#" className="cart-acc fs-5 m-lg-3">
                  <i className="bi bi-cart"></i>
                </Link>

                <Link to="#" className="cart-acc fs-5 m-lg-3">
                  <i className="bi bi-person"></i>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

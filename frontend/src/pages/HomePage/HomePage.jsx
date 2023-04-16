import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Accordion, Container, Row, Col, Carousel } from "react-bootstrap";
import image1 from "../../img/carousel/1.jpg";
import image2 from "../../img/carousel/2.jpg";
import image3 from "../../img/carousel/3.jpg";
import trolley from "../../img/svg/8-trolley.svg";
import money from "../../img/svg/9-money.svg";
import creditcard from "../../img/svg/10-credit-card.svg";
import giftcard from "../../img/svg/11-gift-card.svg";
import Card from "../../components/ItemCard/ItemCard";

const HomePage = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      image: "https://via.placeholder.com/150",
      price: "$10.00",
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://via.placeholder.com/150",
      price: "$20.00",
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://via.placeholder.com/150",
      price: "$30.00",
    },
    {
      id: 4,
      title: "Product 4",
      image: "https://via.placeholder.com/150",
      price: "$40.00",
    },
    {
      id: 5,
      title: "Product 4",
      image: "https://via.placeholder.com/150",
      price: "$40.00",
    },
    {
      id: 6,
      title: "Product 4",
      image: "https://via.placeholder.com/150",
      price: "$40.00",
    },
    {
      id: 7,
      title: "Product 4",
      image: "https://via.placeholder.com/150",
      price: "$40.00",
    },
    {
      id: 8,
      title: "Product 4",
      image: "https://via.placeholder.com/150",
      price: "$40.00",
    },
  ];

  return (
    <div className="homepage-body">
      <Row>
        <Col lg={3}>
          <div className="categories-container">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <div class="ltn__category-menu-title">
                    <h2 class="section-bg-1 ltn__secondary-bg text-color-white">
                      <i class="bi bi-list"></i> categories
                    </h2>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <div class="row">
                    <div class="col-lg-12">
                      {/* <!-- CATEGORY-MENU-LIST START --> */}
                      <div class="ltn__category-menu-wrap">
                        <div class="ltn__category-menu-toggle ltn__one-line-active">
                          <ul>
                            {/* <!-- Submenu Column - unlimited --> */}
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                              <a href="shop.html">
                                <i class="bi bi-bag-heart"></i>Health Care{" "}
                              </a>
                              <ul class="ltn__category-submenu ltn__category-column-5">
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Health Care</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">
                                        Clutches Clutches Clutches Clutches{" "}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">First Aid</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Surgical Product</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Diagnostic Product</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Laboratory Product</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            {/* <!-- Submenu Column - 4 --> */}
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                              <a href="shop.html">
                                <i class="bi bi-bandaid"></i>First Aid{" "}
                              </a>
                              <ul class="ltn__category-submenu ltn__category-column-4">
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            {/* <!-- Submenu Column - 3 --> */}
                            <li class="ltn__category-menu-item ltn__category-menu-drop">
                              <a href="shop.html">
                                <i class="bi bi-hospital"></i>Surgical Product
                              </a>
                              <ul class="ltn__category-submenu ltn__category-column-3">
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                                <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                  <a href="#">Handbags</a>
                                  <ul class="ltn__category-submenu-children">
                                    <li>
                                      <a href="#">Clutches</a>
                                    </li>
                                    <li>
                                      <a href="#">Cross Body</a>
                                    </li>
                                    <li>
                                      <a href="#">Satchels</a>
                                    </li>
                                    <li>
                                      <a href="#">Sholuder</a>
                                    </li>
                                    <li>
                                      <a href="#">Toter</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* <!-- END CATEGORY-MENU-LIST --> */}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col lg={9}>
          <Carousel className="carousel-homepage">
            <Carousel.Item>
              <img className="d-block" src={image1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={image2} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block" src={image3} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div class="ltn__feature-area">
        {/* <!-- FEATURE AREA START ( Feature - 3) --> */}
        <Container className="container-features">
          <Row>
            <Col className="svg-features" lg={3}>
              <div class="ltn__feature-item ltn__feature-item-8 d-flex justify-content-center">
                <div class="ltn__feature-icon">
                  <img src={trolley} alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h4>Free shipping</h4>
                  <p>On all orders over $49.00</p>
                </div>
              </div>
            </Col>
            <Col className="svg-features" lg={3}>
              <div class="ltn__feature-item ltn__feature-item-8 d-flex justify-content-center">
                <div class="ltn__feature-icon">
                  <img src={money} alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h4>15 days returns</h4>
                  <p>Moneyback guarantee</p>
                </div>
              </div>
            </Col>
            <Col className="svg-features" lg={3}>
              <div class="ltn__feature-item ltn__feature-item-8 d-flex justify-content-center">
                <div class="ltn__feature-icon">
                  <img src={creditcard} alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h4>Secure checkout</h4>
                  <p>Protected by Paypal</p>
                </div>
              </div>
            </Col>
            <Col className="svg-features" lg={3}>
              <div class="ltn__feature-item ltn__feature-item-8 d-flex justify-content-center">
                <div class="ltn__feature-icon">
                  <img src={giftcard} alt="#" />
                </div>
                <div class="ltn__feature-info">
                  <h4>Offer & gift here</h4>
                  <p>On all orders over</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        {products.map((product) => (
          <Col>
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
      {/* <!-- FEATURE AREA END --> */}
    </div>
  );
};

export default HomePage;

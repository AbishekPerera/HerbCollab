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
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import axios from "axios";

const HomePage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Product 1",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/6114a16bbee4e.jpg",
  //     price: "$10.00",
  //   },
  //   {
  //     id: 2,
  //     title: "Product 2",
  //     image:
  //       "https://mymed.lk/public/storage/dev_images/products_assets/60d530404aa4e.jpg",
  //     price: "$20.00",
  //   },
  //   {
  //     id: 3,
  //     title: "Product 3",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614c12af03c80.png",
  //     price: "$30.00",
  //   },
  //   {
  //     id: 4,
  //     title: "Product 4",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614d827c00aa1.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 5,
  //     title: "Product 5",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614d876228cfd.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 6,
  //     title: "Product 6",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/614d88568ca26.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 7,
  //     title: "Product 7",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/6135ac6edd3d5.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 8,
  //     title: "Product 8",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/612c56d1d51f1.png",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 9,
  //     title: "Product 9",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/61262d0c4911e.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 10,
  //     title: "Product 10",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/61262c58df611.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 11,
  //     title: "Product 11",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/61262d8a3a528.jpg",
  //     price: "$40.00",
  //   },
  //   {
  //     id: 12,
  //     title: "Product 12",
  //     image:
  //       "https://mymed.lk/public/storage/products_assets/6184bdc63310f.jpg",
  //     price: "$40.00",
  //   },
  // ];

  const [products, setproducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  });

  //get all product
  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8071/products/");
    // console.log(response.data);
    setproducts(response.data);
  };

  return (
    <div>
      <Header />

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
                                <a>
                                  <i class="bi bi-bag-heart"></i>Health Care
                                </a>
                                <ul class="ltn__category-submenu ltn__category-column-5">
                                  <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                    <a>Health Care</a>
                                    <ul class="ltn__category-submenu-children">
                                      <li>
                                        <a>
                                          Clutches Clutches Clutches Clutches{" "}
                                        </a>
                                      </li>
                                      <li>
                                        <a>Cross Body</a>
                                      </li>
                                      <li>
                                        <a>Satchels</a>
                                      </li>
                                      <li>
                                        <a>Sholuder</a>
                                      </li>
                                      <li>
                                        <a>Toter</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Submenu Column - 4 --> */}
                              <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <a>
                                  <i class="bi bi-bandaid"></i>First Aid{" "}
                                </a>
                                <ul class="ltn__category-submenu ltn__category-column-4">
                                  <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                    <a>First Aid</a>
                                    <ul class="ltn__category-submenu-children">
                                      <li>
                                        <a>Clutches</a>
                                      </li>
                                      <li>
                                        <a>Cross Body</a>
                                      </li>
                                      <li>
                                        <a>Satchels</a>
                                      </li>
                                      <li>
                                        <a>Sholuder</a>
                                      </li>
                                      <li>
                                        <a>Toter</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              {/* <!-- Submenu Column - 3 --> */}
                              <li class="ltn__category-menu-item ltn__category-menu-drop">
                                <a>
                                  <i class="bi bi-hospital"></i>Surgical Product
                                </a>
                                <ul class="ltn__category-submenu ltn__category-column-3">
                                  <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                    <a>Surgical Product</a>
                                    <ul class="ltn__category-submenu-children">
                                      <li>
                                        <a>Clutches</a>
                                      </li>
                                      <li>
                                        <a>Cross Body</a>
                                      </li>
                                      <li>
                                        <a>Satchels</a>
                                      </li>
                                      <li>
                                        <a>Sholuder</a>
                                      </li>
                                      <li>
                                        <a>Toter</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                    <a>First Aid</a>
                                    <ul class="ltn__category-submenu-children">
                                      <li>
                                        <a>Clutches</a>
                                      </li>
                                      <li>
                                        <a>Cross Body</a>
                                      </li>
                                      <li>
                                        <a>Satchels</a>
                                      </li>
                                      <li>
                                        <a>Sholuder</a>
                                      </li>
                                      <li>
                                        <a>Toter</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li class="ltn__category-submenu-title ltn__category-menu-drop">
                                    <a>Surgical Product</a>
                                    <ul class="ltn__category-submenu-children">
                                      <li>
                                        <a>Clutches</a>
                                      </li>
                                      <li>
                                        <a>Cross Body</a>
                                      </li>
                                      <li>
                                        <a>Satchels</a>
                                      </li>
                                      <li>
                                        <a>Sholuder</a>
                                      </li>
                                      <li>
                                        <a>Toter</a>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
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
          {/* <!-- FEATURE AREA START --> */}
          <Container className="container-features">
            <Row>
              <Col className="svg-features" lg={3}>
                <div class="ltn__feature-item ltn__feature-item-8 d-flex justify-content-center">
                  <div class="ltn__feature-icon">
                    <img src={trolley} alt="#" />
                  </div>
                  <div class="ltn__feature-info">
                    <h4>Free shipping</h4>
                    <p>On all orders over Rs.4999</p>
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
        {/* <!-- FEATURE AREA END --> */}
        <div class="section-title-area ltn__section-title-2--- text-center">
          <h1 class="section-title">Our Products</h1>
          <p>
            Taking care of your health has never been easier with our pharmacy
            products.
          </p>
        </div>

        {/* __________________________________________

        Featured Products

        __________________________________________
        */}

        <div className="ourproductgrid">
          <Row xs={2} md={4} lg={5} className="g-4">
            {/* add grid classes */}
            {products.map((product) => (
              <Col key={product._id}>
                <Card
                  id={product._id}
                  title={product.name}
                  image={product.image}
                  price={product.price}
                />
              </Col>
            ))}
          </Row>
        </div>
        <FooterBanner />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

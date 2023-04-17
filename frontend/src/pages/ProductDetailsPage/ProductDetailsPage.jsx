import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDetailsPage.css";
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import paymentimage from "../../img/other comp/payment-2.png";
import doctorbanner from "../../img/other comp/doctorbanner.jpg";

const ProductDetailsPage = () => {
  //get product id from url
  const { id } = useParams();

  return (
    <div>
      <Header />
      {/* <!-- BREADCRUMB AREA START --> */}
      <div class="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner">
                <h1 class="page-title">Product Details</h1>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <Link>
                        <span class="ltn__secondary-color">
                          <i class="bi bi-house-fill"></i>
                        </span>
                        Home
                      </Link>
                    </li>
                    <li>Product Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- BREADCRUMB AREA END --> */}

      {/* <!-- PRODUCT DETAILS AREA START --> */}
      <div className="productdetailsdetailedview">
        <Row>
          <Col lg={6}>
            <div className="productImageSide">
              <img
                src="https://mymed.lk/public/storage/products_assets/614d827c00aa1.jpg"
                alt=""
                className="productImage"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div class="modal-product-info shop-details-info pl-0">
              <h3>Hand Sanitizer</h3>
              <div class="product-price">
                <span>$49.00</span>
              </div>
              <div class="modal-product-meta ltn__product-details-menu-1">
                <Link>
                  <h6>Seller name</h6>
                </Link>
                <ul>
                  <li>
                    <strong>Categories:</strong>
                    <span>
                      <a>Categories1</a>
                      <a>Categories2</a>
                      <a>Categories3</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="addtocartul">
                  <li>
                    <div class="qty">
                      <span class="minus bg-dark">-</span>
                      <input type="number" class="count" name="qty" value="1" />
                      <span class="plus bg-dark">+</span>
                    </div>
                  </li>
                  <li>
                    <button class="button-37" role="button">
                      Add to Cart
                    </button>
                  </li>
                </ul>
              </div>

              <hr />
              <div class="ltn__social-media">
                <ul>
                  <li>Share:</li>
                  <li>
                    <a title="Facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a title="Whatsapp">
                      <i class="bi bi-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a title="Messenger">
                      <i class="bi bi-messenger"></i>
                    </a>
                  </li>
                  <li>
                    <a title="Instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <div class="ltn__safe-checkout">
                <h5>Guaranteed Safe Checkout</h5>
                <img src={paymentimage} alt="Payment Image" />
              </div>
            </div>
          </Col>
        </Row>
        <div className="rate-description-tabs">
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              <div className="description-tab">
                <h1>Lorem ipsum dolor sit amet elit.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natus error sit voluptatem,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <div className="reviews-tab">
                <h1>Customer Reviews</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum. Sed
                  ut perspiciatis unde omnis iste natus error sit voluptatem,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                <Card className="m-5">
                  <Card.Header as="h5">Review</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className="m-5">
                  <Card.Header as="h5">Review</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      {/* <!-- PRODUCT DETAILS AREA END --> */}

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;

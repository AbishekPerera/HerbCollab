import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./ProductDetailsPage.css";
import { Button, Card, Col, Row, Tab, Tabs } from "react-bootstrap";
import paymentimage from "../../img/other comp/payment-2.png";
import doctorbanner from "../../img/other comp/doctorbanner.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const ProductDetailsPage = () => {
  //get product id from url

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProducts(id);
    getReviews(id);
  }, [id]);

  const getAllProducts = (productId) => {
    axios
      .get(`http://localhost:8071/products/get/${productId}`)
      .then((res) => {
        setProduct(res.data["product"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(product);

  //for pluse and minus button
  const handlePlus = () => {
    const count = document.querySelector(".count");
    count.value = parseInt(count.value) + 1;
  };

  const handleMinus = () => {
    const count = document.querySelector(".count");
    if (count.value > 1) {
      count.value = parseInt(count.value) - 1;
    }
  };

  //add to cart button handler
  const addToCartHandler = (e) => {
    e.preventDefault();
    const count = document.querySelector(".count");
    const quantity = count.value;
    const price = product.price;
    const total = quantity * price;

    //get data prom
    const iserInfo = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(iserInfo);

    const userId = userInfo.user._id;
    const username = userInfo.user.name;
    const productId = product._id;
    const productName = product.name;
    const productImage = product.image;

    const newOb = {
      userId,
      username,
      productId,
      productName,
      productImage,
      quantity,
      price,
      total,
    };

    // console.log(newOb);

    axios.post("http://localhost:8072/carts/addtocart", newOb).then((res) => {
      // console.log(res.data);
      alert("Added to cart");
    });
  };

  //get priduct ratings and reviews
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(4);

  const getReviews = (productId) => {
    axios
      .get(
        `http://localhost:8073/ratereviews/getratereviewbyproductid/${productId}`
      )
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //calculate average rating
  useEffect(() => {
    calculateAverageRating();
  }, [reviews]);

  const calculateAverageRating = () => {
    if (reviews.length > 0) {
      let total = 0;
      reviews.forEach((review) => {
        total += review.productRating;
      });
      const average = total / reviews.length;
      setAverageRating(average);
    }
  };

  return (
    <div className="bg-white">
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
                      <Link to="/">
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
      <div className="productdetailsdetailedview ">
        <Row>
          <Col lg={6}>
            <div className="productImageSide">
              <img
                src={product.image}
                alt=""
                className="productImage"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div class="modal-product-info shop-details-info pl-0">
              <h3>{product.name}</h3>
              <div class="product-price">
                <span>Rs.{product.price}</span>
              </div>
              <div class="modal-product-meta ltn__product-details-menu-1">
                <Link>
                  <h6>Seller name</h6>
                </Link>
                <ReactStars
                  count={5}
                  value={averageRating}
                  size={24}
                  activeColor="#ffd700"
                />
                <ul>
                  <li>
                    <strong>Categories:</strong>
                    <span>
                      <a>{product.category}</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="addtocartul">
                  <li>
                    <div class="qty">
                      <span class="minus bg-dark" onClick={handleMinus}>
                        -
                      </span>
                      <input
                        class="inputx count"
                        type="number"
                        name="qty"
                        value={1}
                        style={{ width: "50px" }}
                      />
                      <span class="plus bg-dark" onClick={handlePlus}>
                        +
                      </span>
                    </div>
                  </li>
                  <li>
                    <button
                      class="button-37"
                      role="button"
                      onClick={addToCartHandler}
                    >
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
                <h1>{product.name}</h1>
                <p>{product.description}</p>
              </div>
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              <div className="reviews-tab">
                <h1>Customer Reviews</h1>

                {reviews.map((review) => (
                  <Card className="m-5 bg-white">
                    <Card.Header as="h5">
                      <Row>
                        <Col>
                          Product Rating
                          <div className="d-flex">
                            <ReactStars
                              count={5}
                              value={review.productRating}
                              size={24}
                              activeColor="#ffd700"
                            />
                            <h6 className="m-1">{review.productRating}</h6>
                          </div>
                        </Col>
                        <Col>
                          Seller Rating
                          <div className="d-flex">
                            <ReactStars
                              count={5}
                              value={review.sellerRating}
                              size={24}
                              activeColor="#ffd700"
                            />
                            <h6 className="m-1">{review.sellerRating}</h6>
                          </div>
                        </Col>
                      </Row>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>by {review.customerName}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text>{review.productReview}</Card.Text>
                        </Col>
                        <Col>
                          <Card.Text>{review.sellerReview}</Card.Text>
                        </Col>
                      </Row>
                      {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>

                    <Card.Footer className="text-muted">
                      {review.date}
                    </Card.Footer>
                  </Card>
                ))}
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

import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import rateusimg from "../../img/carousel/4.jpg";
import "./RateAndReview.css";
import ReactStars from "react-rating-stars-component";
import axios from "axios";

const RateAndReviewUpdate = () => {
  const [productrating, setProductrating] = useState(0);
  const [sellerrating, setSellerrating] = useState(0);

  const { id } = useParams(); // review id

  //users data
  //   const localData = JSON.parse(localStorage.getItem("userInfo"));
  //   const [userId, setUserId] = useState(localData.user._id);
  //   const [customerName, setCustomerName] = useState(localData.user.name);

  //   // product details
  //   const [productName, setProductName] = useState("");
  //   const [productImage, setProductImage] = useState("");
  //   const [sellerId, setSellerId] = useState("");
  //   const [sellerName, setSellerName] = useState("");

  //   //ratings
  //   const [productReview, setProductReview] = useState("");
  //   const [sellerReview, setSellerReview] = useState("");
  //   // const [date, setDate] = useState("");

  //   const history = useNavigate();

  //   const handleSellerChange = (newRating) => {
  //     setSellerrating(newRating);
  //   };

  //   const handleRatingChange = (newRating) => {
  //     setProductrating(newRating);
  //   };

  //   const sendReview = (e) => {
  //     e.preventDefault();
  //     // console.log("send review");
  //     const review = {
  //       userId,
  //       customerName,
  //       productId: id,
  //       productName,
  //       productImage,
  //       sellerId,
  //       sellerName,
  //       sellerRating: sellerrating,
  //       productRating: productrating,
  //       productReview,
  //       sellerReview,
  //       // date,
  //     };

  //     // console.log(review);

  //     axios
  //       .post("http://localhost:8073/ratereviews/addratereview", review)
  //       .then((res) => {
  //         alert("Review added successfully");
  //         history("/myaccount/mypreorders");
  //       })
  //       .catch((err) => {
  //         alert("Error");
  //       });
  //   };

  //   useEffect(() => {
  //     axios.get(`http://localhost:8071/products/get/${id}`).then((res) => {
  //       setProductName(res.data.product.name);
  //       setProductImage(res.data.product.image);
  //       setSellerId(res.data.product.sellerId);
  //       setSellerName(res.data.product.sellerUsername);
  //     });
  //   }, []);

  return (
    <div className="rate-and-review-page bg-white">
      <Header />
      <div className="rateand-review-page">
        {/* <!-- BREADCRUMB AREA START --> */}
        <div class="ltn__breadcrumb-area-shop text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">Rate Product</h1>
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
                      <li>Rate & Reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}

        <div className="rate-andreview-body">
          <Container>
            <div className="rate-andreview-body-content">
              <div
                className="rate-andreview-body-content-title"
                style={{ textAlign: "center" }}
              >
                <h1>Update Rate & Reviews</h1>
                <Form>
                  <Row>
                    <Col lg={6}>
                      <hr />
                      <h4>Product Rating</h4>
                      <Form.Group className="mb-3">
                        <Form.Label>Customer Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter customer name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Product Rating</Form.Label>
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col lg={3}>
                            <Form.Control type="text" disabled />
                          </Col>
                          <Col lg={6}>
                            <ReactStars size={40} />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Product Review</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter product review"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <img style={{ width: "400px" }} />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <img style={{ width: "450px" }} src="" alt="" />
                    </Col>
                    <Col lg={6}>
                      <hr />
                      <h4>Seller Rating</h4>
                      <Form.Group className="mb-3">
                        <Form.Label>Seller Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter seller name"
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Seller Rating</Form.Label>
                        <Row className="d-flex align-items-center justify-content-center">
                          <Col lg={3}>
                            <Form.Control type="text" disabled />
                          </Col>
                          <Col lg={6}>
                            <ReactStars size={40} />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label>Seller Review</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          onChange={(e) => {}}
                          placeholder="Enter seller review"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <hr />
                  <Button variant="primary" type="submit" className="button-36">
                    <i class="bi bi-stars"></i> Send Review
                  </Button>
                </Form>
              </div>
              <div className="rate-andreview-body-content-form"></div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RateAndReviewUpdate;

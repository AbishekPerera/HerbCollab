import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CusProfileNavbar from "../../components/CusProfileNavbar/CusProfileNavbar";
import "./MyProfile.css";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import axios from "axios";
import ReactStars from "react-rating-stars-component";
import DataTable from "react-data-table-component";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedRateId, setSelectedRateId] = useState("");

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    //get data prom
    const iserInfo = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(iserInfo);
    const userId = userInfo.user._id;

    const { data } = await axios.get(
      "http://localhost:8073/ratereviews/getratereviewbyuserid/" + userId
    );
    setReviews(data);
  };

  const columns = [
    {
      name: "Product",
      selector: (row) => (
        <img
          className="cart-product-img"
          src={row.productImage}
          alt={row.productName}
        />
      ),
    },
    {
      name: "Product details",
      selector: (row) => {
        return (
          <div>
            <h6>{row.productName}</h6>
            <p>{row.productId}</p>
            <p>{row.sellerName}</p>
          </div>
        );
      },
      sortFunction: (a, b) => a.sellerName.localeCompare(b.sellerName),
    },

    {
      name: "Seller Rating",
      selector: (row) => {
        return (
          <div>
            <h5>{row.sellerRating}/5</h5>
            <p>{row.sellerReview}</p>
          </div>
        );
      },
      sortable: true,
      sortFunction: (a, b) => b.sellerRating - a.sellerRating,
    },
    {
      name: "Product Rating",
      selector: (row) => {
        return (
          <div>
            <h5>{row.productRating}/5</h5>
            <p>{row.productReview}</p>
          </div>
        );
      },
      sortable: true,
      sortFunction: (a, b) => b.productRating - a.productRating,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="reviewtable-btn d-flex">
          <div
            style={{
              paddingRight: "10px",
            }}
          >
            <button
              className="btn btn-danger"
              onClick={() => deleteReview(row._id)}
            >
              <i class="bi bi-trash"></i>
            </button>
          </div>
          <div
            style={{
              paddingRight: "10px",
            }}
          >
            <button
              className="btn btn-info"
              onClick={() => updateReview(row._id)}
            >
              <i class="bi bi-pencil-square"></i>
            </button>
          </div>
        </div>
      ),
    },
  ];

  const [productrating, setProductrating] = useState(0);
  const [sellerrating, setSellerrating] = useState(0);
  const handleSellerChange = (newRating) => {
    setSellerrating(newRating);
  };

  const handleRatingChange = (newRating) => {
    setProductrating(newRating);
  };

  const updateReview = async (id) => {
    setSelectedRateId(id);
    handleShow();
    // history("/updatereview/" + id);
  };

  //   delete order by id
  const deleteReview = async (id) => {
    await axios
      .delete("http://localhost:8073/ratereviews/deleteratereviewbyid/" + id)
      .then((res) => {
        alert("Review Deleted");
        getReviews();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const [productReview, setProductReview] = useState("");
  const [sellerReview, setSellerReview] = useState("");

  const updateReviewSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(
        "http://localhost:8073/ratereviews/updateratereviewbyid/" +
          selectedRateId,
        {
          productRating: productrating,
          sellerRating: sellerrating,
          productReview: productReview,
          sellerReview: sellerReview,
        }
      )
      .then((res) => {
        alert("Review Updated");
        getReviews();
        handleClose();
      })
      .catch((err) => {
        alert(err);
      });
  };

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

      {/* Navigation Bar Onwards*/}
      <div class="container-fluid">
        <div class="row">
          {/* Navigation Bar */}

          <CusProfileNavbar />

          <div class="col-lg-10">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Update Rate or Review</Modal.Title>
              </Modal.Header>
              <Form onSubmit={updateReviewSubmit}>
                <Modal.Body>
                  <div className="updateRateandReview">
                    <Form.Group className="text-center">
                      <Form.Label className="mx-auto">
                        Product Rating
                      </Form.Label>
                      <Row className="d-flex align-items-center justify-content-center">
                        <Col lg={3}>
                          <Form.Control
                            type="text"
                            disabled
                            value={`${productrating} /5`}
                          />
                        </Col>
                        <Col lg={6}>
                          <ReactStars size={40} onChange={handleRatingChange} />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="productReview">
                      <Form.Label>Product Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => {
                          setProductReview(e.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mt-1 text-center">
                      <Form.Label>Seller Rating</Form.Label>
                      <Row className="d-flex align-items-center justify-content-center">
                        <Col lg={3}>
                          <Form.Control
                            type="text"
                            disabled
                            value={`${sellerrating} /5`}
                          />
                        </Col>
                        <Col lg={6}>
                          <ReactStars size={40} onChange={handleSellerChange} />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group controlId="sellerReview">
                      <Form.Label>Seller Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        onChange={(e) => {
                          setSellerReview(e.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                  </div>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" type="submit">
                    Update
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
            <div className="my-orders-comp-outer">
              <Row>
                <div className="my-order-tab-header">
                  <h3>My Ratings and Reviews</h3>
                  <p>"Your feedback is our motivation to excel!"</p>
                </div>
                <div className="my-order-tab-body">
                  <DataTable
                    columns={columns}
                    data={reviews}
                    pagination={true}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    noDataComponent={
                      <div className="no-data-t-found-outer">
                        <div className="no-data-t-found-inner">
                          <h5>No Past Ratings and Reviews</h5>
                        </div>
                      </div>
                    }
                    customStyles={{
                      rows: {
                        style: {},
                      },
                      headCells: {
                        style: {
                          width: "20px",
                          padding: "0",
                          margin: "0",
                        },
                      },
                      cells: {
                        style: {
                          width: "20px",
                          padding: "5px",
                          margin: "0",
                        },
                      },
                    }}
                  />
                </div>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyReviews;

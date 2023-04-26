import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Header from "../../components/Header/Header";
import { Form, Link } from "react-router-dom";
import CusProfileNavbar from "../../components/CusProfileNavbar/CusProfileNavbar";
import { Button, Modal, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";

const MyPreOrders = () => {
  const [orders, setOrders] = useState([]);

  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedRateId, setSelectedRateId] = useState("");

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    //get data prom
    const iserInfo = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(iserInfo);
    const userId = userInfo.user._id;

    const { data } = await axios.get(
      "http://localhost:8072/orders/getorderbyuserid/" + userId
    );
    setOrders(data);
  };

  const addReview = async (id) => {
    setSelectedRateId(id);
    handleShow();
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
      name: "Name",
      selector: (row) => row.productName,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Total",
      selector: (row) => row.total,
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      sortFunction: (rowA, rowB) => {
        // Define the order in which the status labels should be sorted
        const statusOrder = ["Pending", "Confirmed", "Shipped", "Delivered"];

        // Get the indices of the status labels in the order array
        const indexA = statusOrder.indexOf(rowA.status);
        const indexB = statusOrder.indexOf(rowB.status);

        // Return the comparison result based on the indices
        return indexA - indexB;
      },
      cell: (row) => {
        // Render the status label with the appropriate color class
        let colorClass;
        if (row.status === "Pending") {
          colorClass = "bg-secondary font-size-14";
        } else if (row.status === "Confirmed") {
          colorClass = "bg-success font-size-14";
        } else if (row.status === "Shipped") {
          colorClass = "bg-info font-size-14";
        } else if (row.status === "Delivered") {
          colorClass = "bg-primary font-size-14";
        } else {
          colorClass = "bg-warning font-size-14";
        }
        return <span className={`badge ${colorClass}`}>{row.status}</span>;
      },
    },
    {
      name: "Date",
      selector: (row) => row.date.substring(0, 10),
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <button className="btn btn-primary" onClick={() => addReview(row._id)}>
          <i class="bi bi-chat-heart"></i>
        </button>
      ),
    },
  ];

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
                <Modal.Title>Add Rate and Review</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="addrateandreview">
                  {/* <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form> */}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
            <div className="my-orders-comp-outer">
              <Row>
                <div className="my-order-tab-header">
                  <h3>My Pre Orders</h3>
                  <p>
                    "Order Management: Access your purchase history and
                    pre-order options"
                  </p>
                </div>
                <div className="my-order-tab-body">
                  <DataTable
                    columns={columns}
                    data={orders}
                    pagination={true}
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
                    noDataComponent={
                      <div className="no-data-t-found-outer">
                        <div className="no-data-t-found-inner">
                          <h5>No Data Found</h5>
                        </div>
                      </div>
                    }
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

export default MyPreOrders;

import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import "./PaymentGateway.css";
import axios from "axios";

const PaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle payment submission
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    //get data prom
    const iserInfo = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(iserInfo);

    const userId = userInfo.user._id;
    const { data } = await axios.get(
      "http://localhost:8072/carts/getcartbyuserid/" + userId
    );
    setCartItems(data);
  };

  const cartItemsList = cartItems.map((item) => (
    <tr key={item._id}>
      <td>
        <img
          className="cart-product-img"
          src={item.productImage}
          alt={item.productName}
        />
      </td>
      <td>{item.productName}</td>
      <td>
        <input
          className="cart-item-count-input"
          type="number"
          max={10}
          min={1}
          disabled
          defaultValue={item.quantity}
        />
      </td>
      <td>Rs.{item.price}</td>
      <td>Rs.{item.price * item.quantity}</td>
    </tr>
  ));

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 200;

  const grandTotal = total + shipping;

  return (
    <div>
      <div className="payment-gateway-header mb-5">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Secure pay</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Having Trobble ? <a href="#login">click me</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="payment-gateway-body">
        <Container>
          <Row>
            <Col>
              <div className="paymentgateway-order-details">
                <h3>Order Details</h3>
                <Col>
                  <Table striped bordered hover>
                    <tbody className="text-center">{cartItemsList}</tbody>
                  </Table>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Delivery Details</Accordion.Header>
                      <Accordion.Body>
                        <div className="delivery-details-form">
                          <Form>
                            <h3>Delivery Details</h3>

                            <Form.Group controlId="fullName">
                              <Form.Label>Full Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                // value={fullName}
                                // onChange={handleFullNameChange}
                              />
                            </Form.Group>

                            <Form.Group controlId="email">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                // value={email}
                                // onChange={handleEmailChange}
                              />
                            </Form.Group>

                            <Form.Group controlId="phone">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                                // value={phone}
                                // onChange={handlePhoneChange}
                              />
                            </Form.Group>

                            <Form.Group controlId="address">
                              <Form.Label>Address</Form.Label>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your address"
                                // value={address}
                                // onChange={handleAddressChange}
                              />
                            </Form.Group>
                          </Form>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <Row className="mt-3">
                    <Col>
                      <div className="paymentgateway-order-total">
                        <h6>Total</h6>
                        <h6>Rs. {total}</h6>
                      </div>
                      <div className="paymentgateway-order-shipping">
                        <p>Shipping Rs. {shipping}</p>
                      </div>
                    </Col>
                    <Col>
                      <div className="paymentgateway-order-grand-total">
                        <h5>Grand Total</h5>
                        <h5>Rs. {grandTotal}</h5>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Col>

            <Col>
              <div className="paymentgateway-form">
                <Form onSubmit={handleSubmit} className="payment-form">
                  <h3>Payment Details</h3>
                  <Form.Group controlId="cardNumber">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter card number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="cardHolder">
                    <Form.Label>Card Holder Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter card holder name"
                      value={cardHolder}
                      onChange={handleCardHolderChange}
                    />
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Group controlId="expiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter expiry date"
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter CVV"
                          value={cvv}
                          onChange={handleCvvChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">
                    Submit Payment
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="payment-gateway-footer m-3">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2023 Payment Gateway. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PaymentGateway;

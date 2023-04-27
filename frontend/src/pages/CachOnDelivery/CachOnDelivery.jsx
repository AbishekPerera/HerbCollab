import React, { useEffect, useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  Col,
  Container,
  Form,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import "./CachOnDelivery.css";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const CachOnDelivery = () => {
  const iserInfo = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(iserInfo);
  const userId = userInfo.user._id;
  const userName = userInfo.user.name;

  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryEmail, setDeliveryEmail] = useState("");
  const [deliveryPhone, setDeliveryPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  // const [validDeleverydetails, setValidDeleverydetails] = useState(false);

  const validateDeleveryDetails = (e) => {
    e.preventDefault();

    for (const item of cartItems) {
      // new object
      const order = {
        userId: userId,
        username: userName,
        productId: item.productId,
        productName: item.productName,
        productImage: item.productImage,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
        commission: commission,
        deliveryname: deliveryName,
        deliveryemail: deliveryEmail,
        deliveryphone: deliveryPhone,
        deliveryaddress: deliveryAddress,
        sellerId: item.sellerId,
        sellerName: item.sellerName,
      };

      // console.log(order);

      axios
        .post("http://localhost:8072/orders/addtoorder", order)
        .then((res) => {
          // delete cart item
          axios
            .delete("http://localhost:8072/carts/deletecartitem/" + item._id)
            .then((res) => {})
            .catch((err) => {
              // alert(err);
            });
        })
        .catch((err) => {
          // alert(err);
        });
    }

    // alert("Order placed successfully.");
    swal("Order placed successfully.", "", "success").then(() => {
      const to = deliveryEmail;

      axios
        .post("http://localhost:8079/mail/sendMail", {
          to: to,
        })
        .then((res) => {
          window.location = "/shop";
        })
        .catch((err) => {
          console.log(err);
        });
    });
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

  const commission = 0.01 * total;

  const grandTotal = total + shipping + commission;
  return (
    <div className="paymentgateway-main-body">
      <div className="payment-gateway-header mb-5">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>HerbCollab Securepay Payment portal</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Having Trobble ? <Link>click me</Link>
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

                  <Row className="mt-3">
                    <Col>
                      <div className="paymentgateway-order-total">
                        <h6>Total Rs. {total}</h6>
                      </div>
                      <div className="paymentgateway-order-shipping">
                        Shipping Rs. {shipping}
                      </div>
                      <div className="paymentgateway-order-commission">
                        Commission Rs. {commission}
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
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Delivery Details</Accordion.Header>
                    <Accordion.Body>
                      <div className="delivery-details-form">
                        <Form onSubmit={validateDeleveryDetails}>
                          <h3>Delivery Details</h3>

                          <Form.Group controlId="fullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your full name"
                              onChange={(e) => setDeliveryName(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              required
                              type="email"
                              placeholder="Enter your email"
                              onChange={(e) => setDeliveryEmail(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="phone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              required
                              type="text"
                              placeholder="Enter your phone number"
                              onChange={(e) => setDeliveryPhone(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                              required
                              as="textarea"
                              rows={3}
                              placeholder="Enter your address"
                              onChange={(e) =>
                                setDeliveryAddress(e.target.value)
                              }
                            />
                          </Form.Group>

                          <Button type="submit">Confirm Order</Button>
                        </Form>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="payment-gateway-footer mt-5">
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

export default CachOnDelivery;

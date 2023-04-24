import React from "react";
import { Alert, Button, Col, Modal, Row } from "react-bootstrap";
import "./PaymentGatewayModel.css";
import { Link } from "react-router-dom";

const MyVerticallyCenteredModal = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Select payment method</h5>
          <Row>
            <Col>
              <Link onClick={() => alert("Order placed successfully")}>
                <div className="Cash-on-delivery">
                  <h6>Cash on delivery</h6>
                  <p>
                    Pay with cash upon delivery. Cash on delivery is available
                    for orders up to Rs. 10,000.
                  </p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to={"/payment-gateway"}>
                <div className="Cash-on-delivery">
                  <h6>Pay with card</h6>
                  <p>
                    Pay with your credit or debit card. We accept Visa,
                    Mastercard, Maestro, American and Express.
                  </p>
                </div>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btn btn-secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyVerticallyCenteredModal;

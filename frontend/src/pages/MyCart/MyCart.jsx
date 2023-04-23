import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./MyCart.css";
import { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../components/MyVerticallyCenteredModal/MyVerticallyCenteredModal";
import axios from "axios";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleDeleteItem = (id) => {
    axios
      .delete("http://localhost:8072/carts/deletecartitem/" + id)
      .then((res) => {
        alert("Item deleted successfully.");
        getCartItems();
      })
      .catch((err) => {
        alert(err);
      });
  };

  // ::::::::::::::::::::::::::::::::::::::::::::::::::: update cart items
  const handleItemCountChange = (id, count, price) => {
    // console.log(id, count, price);
    axios
      .put("http://localhost:8072/carts/updatecart/" + id, {
        quantity: count,
        total: count * price,
      })
      .then((res) => {
        // alert("Item updated successfully.");
        getCartItems();
      })
      .catch((err) => {
        alert(err);
      });
  };

  // ::::::::::::::::::::::::::::::::::::::::::::::::::: get cart items
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
          defaultValue={item.quantity}
          onChange={(e) =>
            handleItemCountChange(item._id, e.target.value, item.price)
          }
        />
      </td>
      <td>Rs.{item.price}</td>
      <td>Rs.{item.price * item.quantity}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteItem(item._id)}
        >
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  ));

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 200;

  const grandTotal = total + shipping;

  //for model
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Header />
      <div className="my-cart-body">
        <div class="ltn__breadcrumb-area-cart text-left bg-overlay-white-30 bg-image">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ltn__breadcrumb-inner">
                  <h1 class="page-title">Cart</h1>
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
                      <li>My MyCart</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BREADCRUMB AREA END --> */}
        <div className="cart-products">
          <div className="my-cart-beforeitem">
            <h1>My Selected Items</h1>
          </div>
          <Row>
            <Col lg={8}>
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="text-center">{cartItemsList}</tbody>
              </Table>
            </Col>
            <Col lg={4}>
              <Container>
                {/* <div className="cart-total"> */}
                <Table bordered={false}>
                  <tbody>
                    <tr>
                      <td className="font-weight-bold">Subtotal</td>
                      <td className="text-right">Rs.{total}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Shipping</td>
                      <td className="text-right">Rs. {shipping}</td>
                    </tr>
                    <tr>
                      <td className="font-weight-bold">Total</td>
                      <td className="text-right">Rs.{grandTotal}</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="cart-total-item d-flex justify-content-center">
                  <Link>
                    <button
                      onClick={() => setModalShow(true)}
                      className="btn btn-success"
                    >
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                {/* </div> */}
              </Container>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCart;

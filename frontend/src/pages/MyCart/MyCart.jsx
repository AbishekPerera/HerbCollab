import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./MyCart.css";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../components/MyVerticallyCenteredModal/MyVerticallyCenteredModal";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Item 1",
      image:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.uniquepharmacy.lk/wp-content/uploads/2021/08/NOW-VITAMIN-D-31000IU-300x300.jpg",
      price: 10.99,
      count: 1,
    },
    {
      id: 2,
      name: "Item 2",
      image:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.uniquepharmacy.lk/wp-content/uploads/2021/03/WAGNER-FISH-OIL-1000-300x300.jpg",
      price: 15.99,
      count: 2,
    },
    {
      id: 3,
      name: "Item 3",
      image:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.uniquepharmacy.lk/wp-content/uploads/2020/09/glutanex-tablet_640x-300x300.jpg",
      price: 7.99,
      count: 3,
    },
    {
      id: 4,
      name: "Item 4",
      image:
        "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://www.uniquepharmacy.lk/wp-content/uploads/2020/09/glutanex-tablet_640x-300x300.jpg",
      price: 500,
      count: 3,
    },
  ]);

  const handleDeleteItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleItemCountChange = (id, count) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const cartItemsList = cartItems.map((item) => (
    <tr key={item.id}>
      <td>
        <img className="cart-product-img" src={item.image} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>
        <input
          className="cart-item-count-input"
          type="number"
          value={item.count}
          onChange={(e) => handleItemCountChange(item.id, e.target.value)}
        />
      </td>
      <td>{item.price}</td>
      <td>{item.price * item.count}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteItem(item.id)}
        >
          <i class="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  ));

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

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
                <div className="cart-total">
                  <Table bordered={false}>
                    <tbody>
                      <tr>
                        <td className="font-weight-bold">Subtotal</td>
                        <td className="text-right">${total}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Shipping</td>
                        <td className="text-right">Free</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Total</td>
                        <td className="text-right">${total}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="cart-total-item m-3 d-flex justify-content-center">
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
                </div>
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

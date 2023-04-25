import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CusProfileNavbar from "../../components/CusProfileNavbar/CusProfileNavbar";
import "./MyProfile.css";
import { Table } from "react-bootstrap";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

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

  // const myOrdersItemsList = orders.map((item) => (
  //   <tr key={item._id}>
  //     <td>
  //       <img
  //         className="cart-product-img"
  //         src={item.productImage}
  //         alt={item.productName}
  //       />
  //     </td>
  //     <td>{item.productName}</td>
  //     <td>
  //       <input
  //         className="cart-item-count-input"
  //         type="number"
  //         max={10}
  //         min={1}
  //         defaultValue={item.quantity}
  //       />
  //     </td>
  //     <td>Rs.{item.price}</td>
  //     <td>Rs.{item.price * item.quantity}</td>
  //     <td>
  //       <button className="btn btn-danger">
  //         <i class="bi bi-trash"></i>
  //       </button>
  //     </td>
  //   </tr>
  // ));

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
            <Table></Table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyOrders;

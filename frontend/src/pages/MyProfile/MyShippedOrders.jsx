import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CusProfileNavbar from "../../components/CusProfileNavbar/CusProfileNavbar";
import "./MyProfile.css";
import { Row, Table } from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import swal from "sweetalert";

const MyShippedOrders = () => {
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
      "http://localhost:8072/orders/getorderbyuseridandstatus/" +
        userId +
        "/Dispatched"
    );
    setOrders(data);
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
      name: "Details",
      selector: (row) => {
        return (
          <div
            style={{
              padding: "10px",
            }}
          >
            <p>
              {row.productName} <br />
              qty : {row.quantity} <br />
              MSP : {row.price} <br />
            </p>
            <p>Total : {row.total}</p>
          </div>
        );
      },
    },
    {
      name: "Delivery Name",
      selector: (row) => row.deliveryname,
      sortable: true,
    },
    {
      name: "Delivery Address",
      selector: (row) => row.deliveryaddress,
      sortable: true,
    },
    {
      name: "Delivery Contacts",
      selector: (row) => {
        return (
          <div>
            <p>{row.deliveryphone}</p>
            <p>{row.deliveryemail}</p>
          </div>
        );
      },
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => (
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {row.date.substring(0, 10)}
        </div>
      ),
    },
  ];

  //delete order by id
  const deleteOrder = async (id) => {
    await axios
      .delete("http://localhost:8072/orders/deleteorder/" + id)
      .then((res) => {
        // alert("Order Deleted");
        // getOrders();
        swal({
          title: "Order Deleted",
          text: "Order Deleted Successfully",
          icon: "success",
          button: "Done",
        }).then((value) => {
          getOrders();
        });
      })
      .catch((err) => {
        // alert(err);
        swal({
          title: "Order Not Deleted",
          text: "Order Not Deleted Successfully",
          icon: "error",
          button: "Done",
        });
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
            <div className="my-orders-comp-outer">
              <Row>
                <div className="my-order-tab-header">
                  <h3>My Dispatched Orders</h3>
                  <p>
                    "Dispatched orders: Track the status of your open orders"
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
                          <h5>No Shipped Orders</h5>
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

export default MyShippedOrders;

import React from "react";
import "./styles/Dashboard.css";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import "./styles/PendingOrders.css";

const PendingOrders = () => {
  return (
    <div className="mainContainer">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="contentContainer">
        <div className="systemNavBar">
          <SystemNav />
        </div>
        <div className="content">
          <br />
          <div className="pendingItemDiv">
            <div class="row">
              <div class="col-6 col-md-4">
                <section
                  class="mx-auto my-5"
                  style={{ maxWidth: "23rem", paddingBottom: "0rem" }}
                >
                  <div class="pendingOrdersCard">
                    <div class="card-body d-flex flex-row">
                      {/* <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                    class="rounded-circle me-3"
                    height="50px"
                    width="50px"
                    alt="avatar"
                  /> */}
                      <div>
                        <h4
                          class="card-title font-weight-bold mb-2"
                          style={{ fontFamily: "emoji", color: "black" }}
                        >
                          Organic Hair Oil
                        </h4>
                        <span class="card-text">07/24/2018</span>
                      </div>
                    </div>
                    <div
                      class="bg-image hover-overlay ripple rounded-0"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        class="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0521/9962/0761/products/1_53765edd-b7cf-48f0-b6bd-e5fa95cdcc89_345x345@2x.jpg?v=1626343639"
                        alt="Product"
                        style={{ height: "350px", width: "100%" }}
                      />
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-center">
                        <span
                          style={{ textDecoration: "none" }}
                          class="btn btn-link link-danger p-md-1 my-1"
                          data-mdb-toggle="collapse"
                          role="button"
                        >
                          View Product
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-6 col-md-4">
                <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                  <div class="pendingOrdersCard">
                    <div class="card-body d-flex flex-row">
                      <div>
                        <h4
                          class="card-title font-weight-bold mb-2"
                          style={{ fontFamily: "emoji", color: "black" }}
                        >
                          Organic Hair Oil
                        </h4>
                        <span class="card-text">07/24/2018</span>
                      </div>
                    </div>
                    <div
                      class="bg-image hover-overlay ripple rounded-0"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        class="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0521/9962/0761/products/1_53765edd-b7cf-48f0-b6bd-e5fa95cdcc89_345x345@2x.jpg?v=1626343639"
                        alt="Product"
                        style={{ height: "350px", width: "100%" }}
                      />
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-center">
                        <span
                          style={{ textDecoration: "none" }}
                          class="btn btn-link link-danger p-md-1 my-1"
                          data-mdb-toggle="collapse"
                          role="button"
                        >
                          View Product
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-6 col-md-4">
                <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                  <div class="pendingOrdersCard">
                    <div class="card-body d-flex flex-row">
                      <div>
                        <h4
                          class="card-title font-weight-bold mb-2"
                          style={{ fontFamily: "emoji", color: "black" }}
                        >
                          Organic Hair Oil
                        </h4>
                        <span class="card-text">07/24/2018</span>
                      </div>
                    </div>
                    <div
                      class="bg-image hover-overlay ripple rounded-0"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        class="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0521/9962/0761/products/1_53765edd-b7cf-48f0-b6bd-e5fa95cdcc89_345x345@2x.jpg?v=1626343639"
                        alt="Product"
                        style={{ height: "350px", width: "100%" }}
                      />
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-center">
                        <span
                          style={{ textDecoration: "none" }}
                          class="btn btn-link link-danger p-md-1 my-1"
                          data-mdb-toggle="collapse"
                          role="button"
                        >
                          View Product
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div class="col-6 col-md-4">
                <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                  <div class="pendingOrdersCard">
                    <div class="card-body d-flex flex-row">
                      <div>
                        <h4
                          class="card-title font-weight-bold mb-2"
                          style={{ fontFamily: "emoji", color: "black" }}
                        >
                          Organic Hair Oil
                        </h4>
                        <span class="card-text">07/24/2018</span>
                      </div>
                    </div>
                    <div
                      class="bg-image hover-overlay ripple rounded-0"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        class="img-fluid"
                        src="https://cdn.shopify.com/s/files/1/0521/9962/0761/products/1_53765edd-b7cf-48f0-b6bd-e5fa95cdcc89_345x345@2x.jpg?v=1626343639"
                        alt="Product"
                        style={{ height: "350px", width: "100%" }}
                      />
                    </div>
                    <div class="card-body">
                      <div class="d-flex justify-content-center">
                        <span
                          style={{ textDecoration: "none" }}
                          class="btn btn-link link-danger p-md-1 my-1"
                          data-mdb-toggle="collapse"
                          role="button"
                        >
                          View Product
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default PendingOrders;

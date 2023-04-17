import React from "react";
import "./DashInfoCard.css";

const SellerInfoCard = () => {
  return (
    <div>
      <div class="grey-bg container-fluid">
        <section id="stats-subtitle">
          <div class="row">
            <div class="col-12 mt-3 mb-1">
              <h2 class="cardTopic text-uppercase">Overall Statistics</h2>
              <br />
            </div>
          </div>

          <div class="row">
            <div class="col-xl-5 col-md-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div className="row">
                      <div className="col-8">
                        <div class="media-body px-4">
                          <h4>Total Income</h4>
                        </div>
                        <div class="align-self-center px-4">
                          <h1>8,000</h1>
                        </div>
                      </div>
                      <div className="cardIcon col-4">
                        <i
                          class="bi bi-currency-dollar"
                          style={{ fontSize: "4rem", color: "#84dcc6" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-1 col-md-12"></div>

            <div class="col-xl-5 col-md-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div className="row">
                      <div className="col-8">
                        <div class="media-body px-4">
                          <h4>Total Orders</h4>
                        </div>
                        <div class="align-self-center px-4">
                          <h1>700</h1>
                        </div>
                      </div>
                      <div className="cardIcon col-4">
                        <i
                          class="bi bi-box-seam"
                          style={{ fontSize: "4rem", color: "#ffac81" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* <div class="row">
            <div class="col-xl-5 col-md-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div className="row">
                      <div className="col-8">
                        <div class="media-body px-4">
                          <h4>Total Customers</h4>
                        </div>
                        <div class="align-self-center px-5">
                          <h1>2000</h1>
                        </div>
                      </div>
                      <div className="cardIcon col-4">
                        <i
                          class="bi bi-people-fill"
                          style={{ fontSize: "4rem", color: "#ffafcc" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-1 col-md-12"></div>

            <div class="col-xl-5 col-md-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-body cleartfix">
                    <div className="row">
                      <div className="col-8">
                        <div class="media-body px-4">
                          <h4>Total Sellers</h4>
                        </div>
                        <div class="align-self-center px-5">
                          <h1>200</h1>
                        </div>
                      </div>
                      <div className="cardIcon col-4">
                        <i
                          class="bi bi-person-fill-add"
                          style={{ fontSize: "4rem", color: "#809bce" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default SellerInfoCard;

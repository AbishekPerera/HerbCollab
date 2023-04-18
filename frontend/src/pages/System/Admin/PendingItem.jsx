import React from "react";
import Sidebar from "../../../components/System/Sidebar/Sidebar";
import SystemNav from "../../../components/System/SystemNavBar/SystemNav";
import SystemFooter from "../../../components/System/SystemFooter/SystemFooter";
import "./styles/PendingItem.css";
import { Button } from "react-bootstrap";

const PendingItem = () => {
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
          <div className="pendingItemContainer0">
            <div className="pendingItemContainer1">
              <div className="row">
                <div class="col-4">
                  <div className="pendingItemImageContainer">
                    <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
                      <div class="card-body d-flex flex-row">
                        <img
                          class="img-fluid"
                          src="https://cdn.shopify.com/s/files/1/0521/9962/0761/products/1_53765edd-b7cf-48f0-b6bd-e5fa95cdcc89_345x345@2x.jpg?v=1626343639"
                          alt="Product"
                          style={{ height: "350px", width: "100%" }}
                        />
                      </div>
                    </section>
                  </div>
                </div>
                <div class="col-8">
                  <div className="pendingItemContentContainer">
                    <section class="mx-2 my-2">
                      <div class="card-body d-flex flex-row">
                        <div class="d-flex flex-column">
                          <div class="p-2">
                            <span className="pendingItemTopic">
                              Herbal Hair oil
                            </span>
                          </div>
                          <div class="p-2">
                            <span className="pendingItemPrice">
                              Rs. 1590.00
                            </span>
                          </div>
                          <div class="pendingItemDesc d-flex p-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores similique expedita voluptate quos,
                            placeat facilis impedit, deleniti hic quasi quas
                            vero harum et qui. Veritatis itaque cupiditate
                            voluptas esse consequuntur. Architecto sed et eius
                            expedita ea reiciendis doloribus, illum, laudantium
                            error ullam hic sunt dolores eligendi deserunt
                            blanditiis incidunt natus facilis numquam rem veniam
                            voluptates inventore! Sit deleniti non eaque.
                          </div>
                          <div class="px-2 py-4">
                            <span className="pendingItemQuantity">
                              Quanitity Available : 300
                            </span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div className="buttonRow row">
                <div class="p-1 d-flex justify-content-end">
                  <div class="px-4 py-2">
                    <Button variant="success">Approve</Button>
                  </div>
                  <div class="p-2">
                    <Button variant="danger">Reject</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SystemFooter />
      </div>
    </div>
  );
};

export default PendingItem;

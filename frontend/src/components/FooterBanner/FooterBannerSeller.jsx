import React from "react";
import { Link } from "react-router-dom";

const FooterBannerSeller = () => {
  return (
    <div className="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="call-to-action-inner call-to-action-inner-6 position-relative text-center---"
              style={{
                background: "rgb(8,120,31)",
                background:
                  "linear-gradient(90deg, rgba(8,120,31,1) 0%, rgba(9,121,101,1) 50%, rgba(0,255,94,1) 100%)",
              }}
            >
              <div class="coll-to-info">
                <h1>
                  "Expand your reach and maximize your profits <br /> sell your
                  herbal products with us!"
                </h1>
              </div>

              <Link to={"/system/auth"}>
                <div class="button-6">
                  Seller Login
                  <i class="bi bi-box-arrow-in-right fs-6"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBannerSeller;

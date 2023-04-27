import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../ButtonsCSS/ButtonsCSS.css";

const FooterBanner = () => {
  const [isLogedin, setIsLogedin] = useState(false);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      setIsLogedin(true);
    }
  });

  if (isLogedin) {
    return 0;
  }

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="call-to-action-inner call-to-action-inner-6  position-relative text-center---"
              style={{
                background: "rgb(8,120,31)",
                background:
                  " linear-gradient(90deg, rgba(8,120,31,1) 0%, rgba(0,255,94,1) 100%)",
              }}
            >
              <div class="coll-to-info">
                <h1>
                  Your health is our top priority - <br />
                  shop our quality medical products today!
                </h1>
              </div>

              <Link to={"/customerlogin"}>
                <div class="button-6">
                  Customer Login .<i class="bi bi-box-arrow-in-right fs-6"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div class="call-to-action-inner call-to-action-inner-6 bg-primary position-relative text-center---">
              <div class="coll-to-info">
                <h1>
                  Your health is our top priority - <br />
                  shop our quality medical products today!
                </h1>
              </div>
              <div class="btn-wrapper">
                <Link to={"/customerlogin"}>
                  {" "}
                  <a class="btn btn-effect-3 bg-light">
                    Login as customer .
                    <i class="bi bi-box-arrow-in-right fs-6"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;

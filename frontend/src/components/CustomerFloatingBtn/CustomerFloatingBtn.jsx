import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CustomerFloatingBtn.css";

const CustomerFloatingBtn = () => {
  if (localStorage.getItem("userInfo")) {
    return null;
  }

  return (
    <div className="customer-homepage-floating">
      <Link to={"/customerlogin"} class="floating-btn">
        Buy Now .<i class="bi bi-box-arrow-in-right"></i>
      </Link>
    </div>
  );
};

export default CustomerFloatingBtn;

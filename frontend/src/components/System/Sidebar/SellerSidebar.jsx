import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import $ from "jquery";
import Logo from "../../../img/Logo/logo.png";
import { Link, useLocation } from "react-router-dom";

const SellerSidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // set the active item based on the current URL path
    const path = location.pathname;
    setActiveItem(path);

    // add click event handler to sidebar items
    $(".sidebar ul li").on("click", function () {
      setActiveItem($(this).find("a").attr("href"));
    });
  }, [location]);

  return (
    <div className="main-container">
      <div className="sidebar" id="side-nav">
        <div className="header-box px-3 pt-3 pb-4 d-flex">
          <h1 className="fs-3 px-4">
            <span className="text-white">Herb Collab</span>
          </h1>
          <button className="btn d-md-none d-block close-btn px-2 py-0 text-white">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <div className="logoSideBar">
          <img className="imgLogoSideBar" src={Logo} alt="" />
        </div>

        <div>
          <ul className="list-untyled px-2">
            <li
              className={
                activeItem === "/system/seller-dashboard" ? "active" : ""
              }
            >
              <Link
                to="/system/seller-dashboard"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-house-door"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Dashboard</span>
              </Link>
            </li>
            <li
             className={activeItem === "/system/seller-products" ? "active" : ""
            }
                        >
              <Link  to="/system/seller-products" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-bag-plus"></i>
                <span style={{ paddingLeft: "0.7rem" }}>My Products</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-card-list"></i>
                <span style={{ paddingLeft: "0.7rem" }}>All Orders</span>
              </Link>
            </li>
            {/* <li>
              <Link to="#" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-people"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Users</span>
              </Link>
            </li> */}
            <li>
              <Link to="#" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-person-square"></i>
                <span style={{ paddingLeft: "0.7rem" }}>My Profile</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="h-color mx-2" />
      </div>
    </div>
  );
};

export default SellerSidebar;

import React, { useEffect } from "react";
import "./Sidebar.css";
import $ from "jquery";
import Logo from "../../img/Logo/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  useEffect(() => {
    // add click event handler to sidebar items
    $(".sidebar ul li").on("click", function () {
      $(".sidebar ul li.active").removeClass("active");
      $(this).addClass("active");
    });
  }, []);

  return (
    <div className="main-container h-100">
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
            <li className="active">
              <Link
                to="/system/admin-dashboard"
                className="text-decoration-none px-3 py-2 d-block"
              >
                <i class="bi bi-house-door"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Dashboard</span>
              </Link>
            </li>
            <li className="">
              <Link to="#" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-bag-plus"></i>
                <span style={{ paddingLeft: "0.7rem" }}>New Products</span>
              </Link>
            </li>
            <li className="">
              <Link to="#" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-card-list"></i>
                <span style={{ paddingLeft: "0.7rem" }}>All Products</span>
              </Link>
            </li>
            <li className="">
              <Link to="#" className="text-decoration-none px-3 py-2 d-block">
                <i class="bi bi-people"></i>
                <span style={{ paddingLeft: "0.7rem" }}>Users</span>
              </Link>
            </li>
            <li className="">
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

export default Sidebar;
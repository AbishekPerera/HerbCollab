import React from "react";
import { Link } from "react-router-dom";

const SystemNavBar = () => {
  return (
    <div className="w-100">
      <div className="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light w-100">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse d-flex justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="#" class="nav-link" aria-current="page">
                    <i
                      style={{
                        color: "#359733",
                      }}
                      class="bi bi-person-circle bi-2x"
                    ></i>{" "}
                    <span style={{ fontSize: "14px", color: "black" }}>
                      Profile
                    </span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="#" style={{ color: "#359733" }} class="nav-link">
                    <i class="bi bi-box-arrow-right"></i>{" "}
                    <span style={{ fontSize: "14px", color: "black" }}>
                      Log Out
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SystemNavBar;

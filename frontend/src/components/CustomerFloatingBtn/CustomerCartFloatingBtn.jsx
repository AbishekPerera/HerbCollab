import React from "react";
import "./CustomerFloatingBtn.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const CustomerCartFloatingBtn = () => {
  const logoutCus = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("You have successfully logout!", {
          icon: "success",
        }).then((value) => {
          localStorage.removeItem("userInfo");
          window.location.href = "/";
        });
      } else {
        swal("You have not logout!");
      }
    });
  };
  if (localStorage.getItem("userInfo") === null) {
    return 0;
  }

  return (
    <div id="CustomerCartFloatingBtnId">
      <div id="container-floating">
        <div class="nd4 nds" onClick={logoutCus}>
          <p class="floating-floating-cart">
            <i class="bi bi-box-arrow-right"></i>
          </p>
        </div>

        <Link to={"/myaccount"}>
          <div class="nd3 nds">
            <p class="floating-floating-cart">
              <i class="bi bi-person"></i>
            </p>
          </div>
        </Link>

        <Link to={"/mycart"}>
          <div class="nd1 nds">
            <p class="floating-floating-cart">
              <i class="bi bi-cart3"></i>
            </p>
          </div>
        </Link>

        <div id="floating-button">
          <p class="plus">+</p>
          <img
            class="edit"
            src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/bt_compose2_1x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerCartFloatingBtn;

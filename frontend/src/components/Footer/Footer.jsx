import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div class="footer-clean">
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Legacy</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <a href="#">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#">
                  <i class="bi bi-heart-pulse"></i>
                </a>
                <p class="copyright">Company Name © 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

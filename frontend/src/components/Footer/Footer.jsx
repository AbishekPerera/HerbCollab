import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

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
                    <a>
                      <Link>Order tracking</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Wish List</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Login</Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a>
                      <Link>Company</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Team</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Legacy</Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a>
                      <Link>Job openings</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Employee success</Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link>Benefits</Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 item social">
                <a>
                  <Link></Link>
                  <i class="bi bi-facebook"></i>
                </a>
                <a>
                  <Link></Link>
                  <i class="bi bi-twitter"></i>
                </a>
                <a>
                  <Link></Link>
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a>
                  <Link></Link>
                  <i class="bi bi-heart-pulse"></i>
                </a>
                <p class="copyright">Herbcolab© 2023</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

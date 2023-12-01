import React from "react";
import { Link } from "react-router-dom";
import logonew from "../assets/2 copy.png";

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="footer-widgets">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 col-lg-3">
              <div class="foot-about">
                <h2>
                  <Link to="/">
                    <a class="foot-logo">
                      <img src={logonew} alt="" height={70} />
                    </a>
                  </Link>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Mauris temp us vestib ulum mauris.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris tempus vestib ulum
                  mauris.Lorem ipsum dolo.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <h2>Useful Links</h2>
              <ul>
                <li>
                  <a href="#">Privacy Polticy</a>
                </li>
                <li>
                  <a href="#">Become a Volunteer</a>
                </li>
                <li>
                  <a href="#">Donate</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Causes</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div class="foot-latest-news">
                <h2>Latest News</h2>
                <ul>
                  <li>
                    <h3>
                      <a href="#">A new cause to help</a>
                    </h3>
                    <div class="posted-date">MArch 12, 2018</div>
                  </li>
                  <li>
                    <h3>
                      <a href="#">We love to help people</a>
                    </h3>
                    <div class="posted-date">MArch 12, 2018</div>
                  </li>
                  <li>
                    <h3>
                      <a href="#">The new ideas for helping</a>
                    </h3>
                    <div class="posted-date">MArch 12, 2018</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div class="foot-contact">
                <h2>Contact</h2>
                <ul>
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>+45 677 8993000 223</span>
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <span>office@template.com</span>
                  </li>
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span>
                  </li>
                </ul>
              </div>
              <div class="subscribe-form">
                <form class="d-flex flex-wrap align-items-center">
                  <input
                    type="email"
                    placeholder="Your email"
                    fdprocessedid="qi9icl8"
                  />
                  <input type="submit" value="send" fdprocessedid="awxek" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bar">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="m-0">
                Copyright ©
                <script
                  type="text/javascript"
                  async=""
                  src="https://www.google-analytics.com/analytics.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script>2023
                All rights reserved | This template is made with{" "}
                <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Resiliencesoft
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

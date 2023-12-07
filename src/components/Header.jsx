import React from "react";
import { Link } from "react-router-dom";
import logonew from "../assets/2 copy.png";

const Header = () => {
  return (
    <header className="site-header">
      {/* Header */}
      <div className="top-header-bar">
        <div className="container">
          <div className="row flex-wrap justify-content-center justify-content-lg-between align-items-lg-center">
            <div className="col-12 col-lg-8 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
              <div className="header-bar-email">
                MAIL: <a href="#">contact@ourcharity.com</a>
              </div>
              <div className="header-bar-text">
                <p>
                  PHONE: <span>+24 3772 120 091 / +56452 4567</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
              <div className="donate-btn">
                <a href="#">Donate Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar */}
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <div className="site-branding d-flex align-items-center">
                <Link to="/">
                  <a className="d-block" rel="home">
                    <img
                      className="d-block"
                      src={logonew}
                      alt="logo"
                      height={50}
                    />
                  </a>
                </Link>
              </div>
              <nav className="site-navigation d-flex justify-content-end align-items-center">
                <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <Link to="/">
                    <li>
                      <a>Home</a>
                    </li>
                  </Link>
                  <Link to="/aboutus">
                    <li>
                      <a>About us</a>
                    </li>
                  </Link>
                  <Link to="/causes">
                    <li>
                      <a>Causes</a>
                    </li>
                  </Link>
                  <Link to="/gallery">
                    <li>
                      <a>Gallery</a>
                    </li>
                  </Link>
                  <Link to="/news">
                    <li>
                      <a>News</a>
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li>
                      <a>Contact</a>
                    </li>
                  </Link>
                </ul>
              </nav>
              <div className="hamburger-menu d-lg-none">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

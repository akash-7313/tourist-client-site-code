import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import world from "../../images/footer/world.png";

const Footer = () => {
  const logo = {
    fontFamily: "'Gluten', cursive",
    marginRight: "10px",
    cursor: "pointer",
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
    padding: "7px 5px",
  };

  return (
    <div className="footer-banner">
      <div className="container">
        <footer className="p-5">
          <div className="row">
            <div className="col-md-3 col-12 text-md-start text-center">
              <h5 className="text-primary fw-normal">
                <span style={logo} className="name me-3 fs-3">
                  <b className="text-primary">To</b>
                  <b className="text-warning">u</b>
                  <b className="text-primary">ri</b>
                  <b className="text-success">s</b>
                  <b className="text-warning">t</b>
                  <b className="text-primary">O</b>
                </span>
              </h5>
              <p className="mt-1 text-dark pe-2">
                A travel website is a website that provides travel reviews, trip
                fares, or a combination of both. Over 1.5 billion people book
                travel per year, 70% of which is done online.
              </p>
              <div>
                <h5 className="text-secondary">Contuct info</h5>
                <p>24/7 Chat Suppoet</p>
                <p>contacts@touristo.com</p>
                <p>+15-840-8888-000</p>
              </div>
              <div className="mb-3">
                <a className="me-3" href="/fb">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a className="me-3" href="/tw">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="me-3" href="/ln">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="me-3" href="/in">
                  <i className="fab fa-instagram-square"></i>
                </a>
                <a className="me-3" href="/pn">
                  <i className="fab fa-pinterest-square"></i>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-12 mb-3">
              <h5 className="text-primary fw-normal">Navigation</h5>
              <ul className="nav flex-column">
                <NavLink style={linkStyle} exact to="/blog">
                  Home
                </NavLink>
                <NavLink style={linkStyle} exact to="/mission">
                  Tour Pricing
                </NavLink>
                <NavLink style={linkStyle} exact to="/how">
                  Testimonial
                </NavLink>
                <NavLink style={linkStyle} exact to="/about">
                  Blog
                </NavLink>
              </ul>
            </div>
            <div className="col-md-3 col-12 mb-3">
              <h5 className="text-primary fw-normal">Legal</h5>
              <ul className="nav flex-column">
                <NavLink style={linkStyle} exact to="/blog">
                  Terms & conditions
                </NavLink>
                <NavLink style={linkStyle} exact to="/mission">
                  Privacy policy
                </NavLink>
                <NavLink style={linkStyle} exact to="/how">
                  License Agreement
                </NavLink>
                <NavLink style={linkStyle} exact to="/about">
                  Copyright information
                </NavLink>
              </ul>
            </div>
            <div className="col-md-4 col-12 mb-3 text-primary">
              <h5>Worldwide Tour</h5>
              <img className="p-3 img-fluid footer-bg" src={world} alt="" />
            </div>
          </div>
          <div className="text-center mt-3 pt-3 border-top border-secondary">
            <p className="text-dark">
              &#xA9; 2021 Company, Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

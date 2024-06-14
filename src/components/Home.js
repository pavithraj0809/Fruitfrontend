import React from "react";
import "../components/Home.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Landingpage from "./Landingpage";
// import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="width">
        <div class="row p-2">
          <div class="col-lg-5 col-md-6 col-sm-12">
            <div className="d-flex">
              <span className="icon ms-5">
                <i class="fa-solid fa-apple-whole"></i>
              </span>
              <h1 className="ms-2">
                <b>Fruitzzs</b>
              </h1>
            </div>
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12">
            <div class="row">
              <nav className="navclass p-2">
                <ul className="navlist d-flex list-unstyled">
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <NavLink
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li>
                        <h4>Home</h4>
                      </li>
                    </NavLink>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <NavLink
                      to="/fruit"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li>
                        <h4>Fruits</h4>
                      </li>
                    </NavLink>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <NavLink
                      to="/service"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li className="navlink">
                        <h4>Service</h4>
                      </li>
                    </NavLink>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <NavLink
                      to="/contact"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <li className="navlink">
                        <h4>Contact</h4>
                      </li>
                    </NavLink>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <span className="search">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <button className="btn btn-danger">Get a Quote</button>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <Landingpage /> */}
    </>
  );
}

export default Home;

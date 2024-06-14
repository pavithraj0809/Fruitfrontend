import React from "react";
import "../components/Lp.css";

const Landingpage = () => {
  return (
    <>
    <div className="width">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <h1 className="fruit">
            <b>Welcome to Our Fruitzzs shop</b>
          </h1>
          <p className="contact">
            At FreshFruits.com, we believe in providing you with the freshest
            and highest quality fruits straight to your doorstep. Our commitment
            to freshness ensures that you and your family can enjoy delicious
            and nutritious fruits every day. Explore our wide selection of fresh
            produce and experience the convenience of online shopping with our
            easy-to-use website.
          </p>
          <div className="btns">
            <button className="btn bg-warning text-dark Login">Login</button>
            <button className="btn bg-dark  text-light Contact ms-3">
              Contact Us
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <img src="../images/fruit.jpeg" alt="website" className="image mt-5" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Landingpage;

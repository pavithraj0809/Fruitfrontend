import React from "react";
import "./Fruit.css";

const Fruit = () => {
  return (
    <>
    <div className="Fruitwidth">
      <div class="row mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
          <div className="design p-4">
            <img
              src="../images/download.jpg"
              className="orderimage "
              alt="Apple"
              style={{ width: "220px", height: "200px" }} // Set width and height inline
            />
            <h2 className="text-danger">Apple</h2>
            <h3 className="text-primary">Rs:300</h3>
            <button className="btn btn-warning ">Order Now</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
          <div className="design p-4">
            <img
              src="../images/mongp.jpg"
              className="orderimage"
              alt="mongo"
              style={{ width: "220px", height: "200px" }}
            />
            <h2 className="text-danger">Mongo</h2>
            <h3 className="text-primary">Rs:200</h3>
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <div className="design p-4">
            <img
              src="../images/promogemet.jpg"
              className="orderimage"
              alt="promogenent"
              style={{ width: "220px", height: "200px" }}
            />
            <h2 className="text-danger">promogenent</h2>
            <h3 className="text-primary">Rs:300</h3>
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
          <div className="design p-4">
            <img
              src="../images/fruit.jpeg"
              className="orderimage "
              alt="Fruits"
              style={{ width: "220px", height: "200px" }} // Set width and height inline
            />
            <h2 className="text-danger">Fruits</h2>
            <h3 className="text-primary">Rs:500</h3>
            <button className="btn btn-warning ">Order Now</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center ">
          <div className="design p-4">
            <img
              src="../images/stauberry.jpg"
              className="orderimage"
              alt="sta"
              style={{ width: "220px", height: "200px" }}
            />
            <h2 className="text-danger">Stawberry</h2>
            <h3 className="text-primary">Rs:500</h3>
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <div className="design p-4">
            <img
              src="../images/watermelon.jpg"
              className="orderimage"
              alt="Watermelon"
              style={{ width: "220px", height: "200px" }}
            />
            <h2 className="text-danger">Watermelon</h2>
            <h3 className="text-primary">Rs:30</h3>
            <button className="btn btn-warning">Order Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Fruit;

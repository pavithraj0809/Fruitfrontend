import React from "react";
import "../components/contact.css";
const Contact = () => {
  return (
    <>
      <div class="row width">
        <div className="bg">
          <div className="contactInfo">
            <h1 className="mt-3">Contact Us</h1>
            <h2 className="mt-3">Get In Touch With Us</h2>
            <p className="mt-3">
              Thank you for your interest in reaching out to us. We value your
              feedback, questions, and inquiries. Please feel free to contact us
              using any of the methods below.
            </p>
            <button className="btn bg-warning text-dark contactus">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

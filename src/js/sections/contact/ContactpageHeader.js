import React from "react";
import Navbar from "../../components/Navbar";

function ContactpageHeader() {
  return (
    <div className="contactpage-header">
      <Navbar />
      <header className="layout-container">
        <div className="contactpage-header-wrapper">
          <div className="contactpage-header-title">
            <h1>Get in Touch</h1>
            <h5>The freshest ingredients for you every day</h5>
          </div>
          <div className="opentime">
            <div className="opentime-row">
              <h5>Open Time</h5>
              <p>Sunday - Friday</p>
            </div>
            <div className="opentime-row">
              <p>Brunch<br/>11:00 - 12:00</p>
              <p>Lunch<br/>13:00 - 17:00</p>
              <p>Dinner<br/>18:00 - 20:00</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default ContactpageHeader;

import React from "react";
import Navbar from "../../components/Navbar";

function AboutpageHeader() {
  return (
    <div className="aboutpage-header">
      <Navbar />
      <header className="layout-container">
        <div className="aboutpage-header-title">
          <h1>Who We Are</h1>
          <h5>
            <pre>
              {`The most important thing for us is to give you the
most comfortable dining experience`}
            </pre>
          </h5>
        </div>
      </header>
    </div>
  );
}

export default AboutpageHeader;

import React from "react";
import Navbar from "../../components/Navbar";

function MenupageHeader() {
  return (
    <div className="menupage-header">
      <Navbar />
      <header className="layout-container">
        <div className="menupage-header-title">
          <h1>
            View Our New
            <br />
            Menu
          </h1>
          <h5>The freshest ingredients for you every day</h5>
        </div>
      </header>
    </div>
  );
}

export default MenupageHeader;

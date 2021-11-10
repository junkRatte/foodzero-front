import React from "react";
import Navbar from "../../components/Navbar";

function BlogpageHeader() {
  return (
    <div className="blogpage-header">
      <Navbar />
      <header className="layout-container">
        <div className="blogpage-header-title">
          <h1>Our Blogs</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>
      </header>
    </div>
  );
}

export default BlogpageHeader;

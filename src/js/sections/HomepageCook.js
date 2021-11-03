import React from "react";
import CookImage from "../../images/cook-image.png";
import Leaf from "../../images/Leaf.png";

function HomepageCook() {
  return (
    <section className="homepage-cook">
      <div className="layout-container">
        <div className="homepage-cook-wrapper">
          <div className="homepage-cook-image">
            <img className="leaf-img" src={Leaf} />
            <img className="cook-img" src={CookImage} />
          </div>
          <div className="homepage-cook-text">
            <h2>
              Excellent
              <br />
              cook
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>
            <img className="leaft-img" src={Leaf} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageCook;

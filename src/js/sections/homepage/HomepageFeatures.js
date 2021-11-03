import React from "react";
import FishIcon from "../../../images/Icon_fish.png"
import CarrotIcon from "../../../images/Icon_carrot.png"
import LemonIcon from "../../../images/Icon_lemon.png"

function HomepageFeatures() {
  return (
    <section className="homepage-features">
      <div className="layout-container">
        <div className="features-items">
          <div className="features-items-item">
            <img className="item-icon" src={FishIcon} />
            <h3 className="item-title">
              Premium Quality
            </h3>
            <p className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu.
            </p>
          </div>
          <div className="features-items-item">
            <img className="item-icon" src={CarrotIcon} />
            <h3 className="item-title">
              Seasonal Vegetables
            </h3>
            <p className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu.
            </p>
          </div>
          <div className="features-items-item">
            <img className="item-icon" src={LemonIcon} />
            <h3 className="item-title">
              Fresh fruit
            </h3>
            <p className="item-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              congue arcu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageFeatures;

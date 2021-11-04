import React from "react";
import StartersImg from "../../../images/starters-image.png";
import MainsImg from "../../../images/mains-image.png";
import SoupsImg from "../../../images/soups-image.png";

function HomepageCategories() {
  return (
    <section className="homepage-categories">
      <div className="layout-container">
        <div className="homepage-categories-title">
          <h2>
            Calories Energy
            <br />
            Balance
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="categories-wrapper">
          <div className="categories">
            <img src={StartersImg} />
            <p>
              Starters <i class="fas fa-long-arrow-alt-right"></i>
            </p>
          </div>
          <div className="categories">
            <img src={MainsImg} />
            <p>
              Mains <i class="fas fa-long-arrow-alt-right"></i>
            </p>
          </div>
          <div className="categories">
            <img src={SoupsImg} />
            <p>
              Soups <i class="fas fa-long-arrow-alt-right"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageCategories;

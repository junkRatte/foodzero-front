import React from "react";
import { MenuData } from "../../components/MenuData";
import BackgroundImg from "../../../images/menu-bg-image.png";
import { Link } from "react-router-dom";

function HomepageMenu() {
  return (
    <section className="homepage-menu">
      <img className="bg-image" src={BackgroundImg} />
      <div className="layout-container">
        <div className="homepage-menu-title">
          <h2>Our Menu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="homepage-menu-grid">
          {MenuData.slice(0, 4).map((meal) => (
            <Link className="menu-item" to={`/meal/${meal.name}`}>
              <p className="menu-item-price">${meal.price}</p>
              <h3 className="menu-item-name">{meal.name}</h3>
              <p className="menu-item-summary">{meal.teaser}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomepageMenu;

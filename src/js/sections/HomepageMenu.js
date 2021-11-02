import React from "react";
import { MenuData } from "../components/MenuData";

function HomepageMenu() {
  return (
    <div className="homepage-menu">
      <div className="layout-container">
        <div className="homepage-menu-title">
          <h2>Our Menu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="homepage-menu-grid">
          {MenuData.map(meal => (
            <div className="menu-item">
              <p className="menu-item-price">${meal.price}</p>
              <h3 className="menu-item-name">{meal.name}</h3>
              <p className="menu-item-summary">{meal.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageMenu;

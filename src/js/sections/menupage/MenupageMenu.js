import React from "react";
import BlueberryImage from "../../../images/blueberry-image.svg";
import AvocadoImage from "../../../images/avocado-image.svg";
import MenupageStartersImage from "../../../images/menupage-starters-image.png";
import MenupageMainsImage from "../../../images/menupage-mains-image.png";
import MenupageDrinksImage from "../../../images/menupage-drinks-image.png";
import { MenuData } from "../../components/MenuData";

function MenupageMenu() {
  return (
    <section className="menupage-menu">
      <div className="layout-container">
        <div className="menupage-menu-starters">
          <div className="menupage-menu-title">
            <h2>Starters</h2>
            <p>Check out our starters</p>
            <img className="blueberry-img" src={BlueberryImage} />
          </div>
          <div className="menupage-menu-wrapper">
            <img src={MenupageStartersImage} />
            <div className="menupage-menu-list">
              {MenuData.filter((meal) => meal.type === "Starters")
                .slice(0, 3)
                .map((meal) => (
                  <div className="menu-item">
                    <p className="menu-item-price">${meal.price}</p>
                    <h3 className="menu-item-name">{meal.name}</h3>
                    <p className="menu-item-teaser">{meal.teaser}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="menupage-menu-title">
            <h2>Mains</h2>
            <p>Check out our mains</p>
          </div>
          <div className="menupage-menu-wrapper">
            <div className="menupage-menu-list">
              {MenuData.filter((meal) => meal.type === "Mains")
                .slice(0, 3)
                .map((meal) => (
                  <div className="menu-item">
                    <p className="menu-item-price">${meal.price}</p>
                    <h3 className="menu-item-name">{meal.name}</h3>
                    <p className="menu-item-teaser">{meal.teaser}</p>
                  </div>
                ))}
            </div>
            <img src={MenupageMainsImage} />
          </div>
          <div className="menupage-menu-title">
            <h2>Pastries & Drinks</h2>
            <p>Check out our drinks</p>
            <img className="avocado-img" src={AvocadoImage} />
          </div>
          <div className="menupage-menu-wrapper">
            <img src={MenupageDrinksImage} />
            <div className="menupage-menu-list">
              {MenuData.filter((meal) => meal.type === "Drinks")
                .slice(0, 3)
                .map((meal) => (
                  <div className="menu-item">
                    <p className="menu-item-price">${meal.price}</p>
                    <h3 className="menu-item-name">{meal.name}</h3>
                    <p className="menu-item-teaser">{meal.teaser}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenupageMenu;

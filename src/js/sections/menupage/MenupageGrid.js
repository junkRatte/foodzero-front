import React, { useState } from "react";
import { filterTypesData } from "../../components/FilterTypesData";
import { Link } from "react-router-dom";

function MenupageGrid() {
  const [items, setItems] = useState(filterTypesData);

  const filterItems = (categItem) => {
    const updatedItems = filterTypesData.filter((currentType) => {
      return currentType.type === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <section className="menupage-grid">
      <div className="layout-container">
        <ul className="filter-list">
          <li onClick={() => setItems(filterTypesData)}>All</li>
          <li onClick={() => filterItems("Starter")}>Starter</li>
          <li onClick={() => filterItems("Lunch")}>Lunch</li>
          <li onClick={() => filterItems("Dinner")}>Dinner</li>
          <li onClick={() => filterItems("Drinks")}>Drinks</li>
          <li onClick={() => filterItems("Sweets")}>Sweets</li>
          <li onClick={() => filterItems("Fruits")}>Fruits</li>
        </ul>
        <div className="grid-images">
          <div className="grid-images-row-1">
            {items.slice(0, 2).map((item) => (
              <Link to={`/meal/${item.name}`} className="image">
                <img src={item.image} />
                <div className="image-text">
                  <h4>{item.name}</h4>
                  <p>{item.type}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid-images-row-2">
            {items.slice(2, 4).map((item) => (
              <Link to={`/meal/${item.name}`} className="image">
                <img src={item.image} />
                <div className="image-text">
                  <h4>{item.name}</h4>
                  <p>{item.type}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid-images-row-3">
            {items.slice(4, 6).map((item) => (
              <Link to={`/meal/${item.name}`} className="image">
                <img src={item.image} />
                <div className="image-text">
                  <h4>{item.name}</h4>
                  <p>{item.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenupageGrid;

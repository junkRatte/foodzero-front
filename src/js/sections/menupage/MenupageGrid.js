import React, { useState } from "react";
import { filterTypesData } from "../../components/FilterTypesData";

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
        <ul>
          <li onClick={() => setItems(filterTypesData)}>All</li>
          <li onClick={() => filterItems("Starter")}>Starter</li>
          <li onClick={() => filterItems("Lunch")}>Lunch</li>
          <li onClick={() => filterItems("Dinner")}>Dinner</li>
          <li onClick={() => filterItems("Drinks")}>Drinks</li>
          <li onClick={() => filterItems("Sweets")}>Sweets</li>
          <li onClick={() => filterItems("Fruits")}>Fruits</li>
        </ul>
        <div className="images-grid">
          {/* <div className="images-grid-row-1">
            {items.slice(0, 2).map((type) => (
              <img src={type.image} />
            ))}
          </div>
          <div className="images-grid-row-2">
            {items.slice(2, 4).map((type) => (
              <img src={type.image} />
            ))}
          </div>
          <div className="images-grid-row-3">
            {items.slice(4, 6).map((type) => (
              <img src={type.image} />
            ))}
          </div> */}
          {items.map((item) => (
            <div>
              <img src={item.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenupageGrid;

import React, { Component } from "react";
import WhiteCodFillet from "../../images/whitecodfillet-image.png";
import RosemarySteak from "../../images/rosemarysteak-image.png";
import PumpkinSoup from "../../images/pumpkinsoup-image.png";
import NaturalWine from "../../images/naturalwine-image.png";
import { filterTypesData } from "../components/FilterTypesData";

export default class MenuFilterTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "All",
    };

    this.updateType = this.updateType.bind(this);
  }

  updateType(type) {
    this.setState(() => {
      return {
        selectedType: type,
      };
    });
  }

  render() {
    const filterTypes = [
      "All",
      "Starter",
      "Lunch",
      "Dinner",
      "Drinks",
      "Sweets",
      "Fruits",
    ];

    return (
      <div classNam="menupage-grid-types">
        <ul>
          {filterTypes.map((type) => (
            <li
              className={
                type === this.state.selectedType ? "active-filter" : null
              }
              onClick={this.updateType.bind(null, type)}
            >
              {type}
            </li>
          ))}
        </ul>
        <div className="images-grid">
              {filterTypesData.map((type) => (
                <img src={type.image} />
              ))}
        </div>
      </div>
    );
  }
}

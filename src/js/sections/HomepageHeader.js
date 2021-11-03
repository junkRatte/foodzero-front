import React from "react";
import HomepageImage from "../../images/homepage-image.png";
import SpicesImage from "../../images/spices-image.png";
import DietImage from "../../images/diet-image.png";
import DietSpicesImage from "../../images/diet-spices-image.png";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <section className="homepage-header">
      <Navbar />
      <header className="layout-container">
        <div className="homepage-text">
          <h1>
            Healthy Eating
            <br />
            is an important
            <br />
            part of life
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit. Neque congue arcu.
          </p>
          <h4>Scroll</h4>
        </div>
        <div className="homepage-images">
          <img className="main-image" src={HomepageImage} />
          <img className="spices-image" src={SpicesImage} />
        </div>
      </header>
      <div className="layout-container homepage-diet">
        <div className="homepage-diet-left">
          <img src={DietImage} />
          <h3>
            Start to plan
            <br />
            your diet today
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit. Neque congue arcu.
          </p>
        </div>
        <div className="homepage-diet-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            <br />
            elit. Neque congue arcu.
          </p>
          <img src={DietSpicesImage} />
        </div>
      </div>
    </section>
  );
}

export default Homepage;

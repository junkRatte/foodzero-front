import React from "react";
import TomatoImage from "../../../images/tomato-image.svg";
import KitchenImage from "../../../images/kitchen-image.png";
import ManagerImage from "../../../images/manager-image.png";
import ChefImage from "../../../images/chef-image.png";

function AboutpageStory() {
  return (
    <section className="aboutpage-story">
      <div className="layout-container">
        <div className="our-story">
          <img className="tomato-image" src={TomatoImage} />
          <div className="our-story-title">
            <h2>Our Story</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              <br />
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              <br />
              auctor tincidunt lacus nunc.
            </p>
          </div>
          <div className="our-story-image">
            <img src={KitchenImage} />
          </div>
        </div>
        <div className="management">
          <div className="management-manager">
            <div className="management-manager-image">
              <h3>Restaurant Manager</h3>
              <p>Carson Hugn</p>
              <img src={ManagerImage} />
            </div>
            <div className="management-manager-text">
              <p>
                <pre>{`Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Et in sed in pellentesque ornare
nunc nisl. `}</pre>
              </p>
            </div>
          </div>
          <div className="management-chef">
            <div className="management-chef-image">
              <h3>Executive Chef</h3>
              <p>John Cooper</p>
              <img src={ChefImage} />
            </div>
            <div className="management-chef-text">
              <p>
                <pre>{`Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Et in sed in pellentesque ornare 
nunc nisl. Augue habitant accumsan, ut
parturient orci ac etiam congue mi.`}</pre>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutpageStory;

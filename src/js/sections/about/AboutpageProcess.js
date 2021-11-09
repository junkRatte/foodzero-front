import React from "react";
import RosemaryImage from "../../../images/rosemary-image.svg";
import SliceImage from "../../../images/slice-image.png";
import PickledImage from "../../../images/pickled-image.png";
import BakeImage from "../../../images/bake-image.png";

function AboutpageProcess() {
  return (
    <div className="aboutpage-process">
      <div className="layout-container">
        <img className="rosemary-image" src={RosemaryImage} />
        <h2 className="aboutpage-process-title">Sophisticated Process</h2>
        <div className="aboutpage-process-steps">
          <div className="step-one">
            <img src={SliceImage} />
            <div className="step-one-text">
              <h2>01.Slice</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscin elit Purus
                lorem id penatibus imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc. Convallis pellentesque quis
                fringilla sagittis. Egestas in risus sit nunc nunc, arcu donec
                nam etiam.
              </p>
            </div>
          </div>
          <div className="steps-wrapper">
            <div className="step-two">
              <img src={PickledImage} />
              <div className="step-two-text">
                <h2>02.Pickled</h2>
                <p>
                  Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit Purus lorem<br/>id penatibus imperdiet.
                </p>
              </div>
            </div>
            <div className="step-three">
              <div className="step-three-text">
                <h2>03.Bake</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Purus lorem id penatibus imperdiet.
                </p>
              </div>
              <img src={BakeImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutpageProcess;

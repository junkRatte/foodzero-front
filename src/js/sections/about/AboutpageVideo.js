import React from "react";
import VideoImage from "../../../images/video-image.png";

function AboutpageVideo() {
  return (
    <section className="aboutpage-video">
      <img src={VideoImage} />
      <div className="aboutpage-video-text">
        <h2>It looks delicious</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default AboutpageVideo;

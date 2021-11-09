import React from "react";
import ReservationForm from "../components/ReservationForm";
import AboutpageHeader from "../sections/about/AboutpageHeader";
import AboutpageProcess from "../sections/about/AboutpageProcess";
import AboutpageStory from "../sections/about/AboutpageStory";
import AboutpageVideo from "../sections/about/AboutpageVideo";

function About() {
  return (
    <div className="aboutpage">
      <AboutpageHeader />
      <AboutpageStory />
      <AboutpageVideo />
      <AboutpageProcess />
      <ReservationForm />
    </div>
  );
}

export default About;

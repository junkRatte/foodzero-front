import React from "react";
import ReservationForm from "../components/ReservationForm";
import AboutpageHeader from "../sections/about/AboutpageHeader";
import AboutpageStory from "../sections/about/AboutpageStory";

function About() {
  return (
    <div className="aboutpage">
      <AboutpageHeader />
      <AboutpageStory />
      <ReservationForm />
    </div>
  );
}

export default About;

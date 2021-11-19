import React from "react";
import ReservationForm from "../components/ReservationForm";
import AboutpageHeader from "../sections/about/AboutpageHeader";
import AboutpageProcess from "../sections/about/AboutpageProcess";
import AboutpageStory from "../sections/about/AboutpageStory";
import AboutpageVideo from "../sections/about/AboutpageVideo";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "../components/FramerAnimations";

function About() {
  return (
    <motion.div className="homepage" initial="out" animate="in" exit="out" variants={fadeAnimation} transition={transition}>
      <AboutpageHeader />
      <AboutpageStory />
      <AboutpageVideo />
      <AboutpageProcess />
      <ReservationForm />
    </motion.div>
  );
}

export default About;

import React from "react";
import HomepageHeader from "../sections/homepage/HomepageHeader";
import HomepageMenu from "../sections/homepage/HomepageMenu";
import HomepageCook from "../sections/homepage/HomepageCook";
import HomepageFeatures from "../sections/homepage/HomepageFeatures";
import HomepageBlog from "../sections/homepage/HomepageBlog";
import ReservationForm from "../components/ReservationForm";
import HomepageCategories from "../sections/homepage/HomepageCategories";
import HomepageQuotes from "../sections/homepage/HomepageQuotes";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "../components/FramerAnimations";

function Home() {
  return (
    <motion.div
      className="homepage"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimation}
      transition={transition}
    >
      <HomepageHeader />
      <HomepageMenu />
      <HomepageCook />
      <HomepageFeatures />
      <HomepageBlog />
      <ReservationForm />
      <HomepageCategories />
      <HomepageQuotes />
    </motion.div>
  );
}

export default Home;

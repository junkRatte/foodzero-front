import React from "react";
import ReservationForm from "../components/ReservationForm";
import MenupageGrid from "../sections/menupage/MenupageGrid";
import MenupageHeader from "../sections/menupage/MenupageHeader";
import MenupageMenu from "../sections/menupage/MenupageMenu";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "../components/FramerAnimations";

function Menu() {
  return (
    <motion.div
      className="homepage"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimation}
      transition={transition}
    >
      <MenupageHeader />
      <MenupageMenu />
      <MenupageGrid />
      <ReservationForm />
    </motion.div>
  );
}

export default Menu;

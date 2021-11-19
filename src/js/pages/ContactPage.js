import React from "react";
import ReservationForm from "../components/ReservationForm";
import ContactpageContact from "../sections/contact/ContactpageContact";
import ContactpageHeader from "../sections/contact/ContactpageHeader";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "../components/FramerAnimations";

function Contact() {
  return (
    <motion.div
      className="homepage"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimation}
      transition={transition}
    >
      <ContactpageHeader />
      <ContactpageContact />
      <ReservationForm />
    </motion.div>
  );
}

export default Contact;

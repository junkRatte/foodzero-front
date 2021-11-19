import React from "react";
import BlogpageBlogs from "../sections/blog/BlogpageBlogs";
import BlogpageHeader from "../sections/blog/BlogpageHeader";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "../components/FramerAnimations";

function Blogs() {
  return (
    <motion.div
      className="homepage"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimation}
      transition={transition}
      className="blogpage"
    >
      <BlogpageHeader />
      <BlogpageBlogs />
    </motion.div>
  );
}

export default Blogs;

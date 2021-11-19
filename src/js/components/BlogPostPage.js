import React from "react";
import { BlogData } from "./BlogData";
import BlogPostPageRelated from "./BlogPostPageRelated";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { fadeAnimation, transition } from "../components/FramerAnimations";

function BlogPostPage({ match }) {
  const blogTitle = match.params.title;
  return (
    <motion.div
      className="homepage"
      initial="out"
      animate="in"
      exit="out"
      variants={fadeAnimation}
      transition={transition}
    >
      {BlogData.filter((blog) => blog.title == blogTitle).map((blog) => (
        <div className="blogpost">
          <div
            className="blogpost-header"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              paddingBottom: "20rem",
              boxShadow: "inset 0 0 0 200rem rgba(0, 0, 0, 0.3)",
            }}
          >
            <Navbar />
            <header className="layout-container">
              <div className="blogpost-header-title">
                <h6>{blog.tag}</h6>
                <h1>{blog.title}</h1>
                <div className="blog-author">
                  <img src={blog.author_image} />
                  <p>{blog.author}</p>
                  <p>{blog.created_at}</p>
                  <p>{blog.time}</p>
                </div>
              </div>
            </header>
          </div>
          <section className="blogpost-blog">
            <div className="layout-container">
              <h5>{blog.summary}</h5>
              <div className="blogpost-blog-two-images">
                <img src={blog.image} />
                <img src={blog.image} />
              </div>
              <div className="blogpost-blog-description">
                <p className="layout-container">{blog.description}</p>
              </div>
            </div>
            <div className="blogpost-blog-quote">
              <h5 className="layout-container">"{blog.author_quote}</h5>
            </div>
            <div className="blogpost-blog-thoughts">
              <p className="layout-container">{blog.author_thoughts}</p>
            </div>
            <div className="blogpost-blog-author layout-container">
              <div className="author-wrapper">
                <div className="layout-container">
                  <img src={blog.author_image} />
                  <div className="author-name">
                    <h5>{blog.author}</h5>
                    <p>{blog.author_quote}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <BlogPostPageRelated />
        </div>
      ))}
    </motion.div>
  );
}

export default BlogPostPage;

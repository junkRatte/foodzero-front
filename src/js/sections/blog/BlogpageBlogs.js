import React from "react";
import { Link } from "react-router-dom";
import { BlogData } from "../../components/BlogData";

function BlogpageBlogs() {
  return (
    <section className="blogpage-blogs">
      <div className="layout-container">
        {BlogData.map((blog) => (
          <article className="blog-card">
            <div className="blog-card-image">
              <img src={blog.image} />
              <p className="card-tag">{blog.tag}</p>
            </div>
            <div className="blog-card-author">
              <img src={blog.author_image} />
              <p>{blog.author}</p>
              <span></span>
              <p>{blog.created_at}</p>
              <span></span>
              <p>{blog.time}</p>
            </div>
            <div className="blog-card-text">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-teaser">{blog.teaser}</p>
              <Link to={`/blog/${blog.title}`}>
                Read More <i class="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BlogpageBlogs;

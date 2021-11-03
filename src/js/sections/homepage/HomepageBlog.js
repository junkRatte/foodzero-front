import React from "react";
import { BlogData } from "../../components/BlogData";

function HomepageBlog() {
  return (
    <section className="homepage-blog">
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
              <a href="#">
                Read More<i class="fas fa-long-arrow-alt-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomepageBlog;

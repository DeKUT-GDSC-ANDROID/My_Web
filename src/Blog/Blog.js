// src/components/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <h2>Blog Section</h2>
      <div className="blog-container">
        <div className="blog-content">
          <h3>Born a Crime by Trevor Noah</h3>
          <p>
            Each group will write a blog post discussing the book Born a Crime and its relevance to current social, political, or economic issues. The blog should be engaging, well-researched, and offer a unique perspective.
          </p>
        </div>
        <div className="case-studies">
          <h3>Case Studies Project Review</h3>
          <p>
            Groups will write an article sharing a review of their project, research conducted, research findings, proposed solutions, and reflections on the overall impact of project work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;

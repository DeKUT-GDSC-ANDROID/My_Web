// src/components/LandingPage.js
import React from 'react';
import './Landing.css';

const LandingPage = () => {
  return (
    <section id="home" className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to My Website</h1>
            <p>Explore our content on Videos, Blog Posts, Podcasts, and Resume Portfolios.</p>
            <div className="cta-buttons">
              <a href="#videos" className="cta-button">Watch Videos</a>
              <a href="#blog" className="cta-button">Read Blog</a>
              <a href="#podcast" className="cta-button">Listen to Podcast</a>
            </div>
          </div>
          <div className="additional-content">
            <div className="content-section">
              <h2>Why Choose Us?</h2>
              <p>We provide insightful content across various domains, ensuring you stay informed and entertained.</p>
            </div>
            <div className="content-section">
              <h2>Our Mission</h2>
              <p>To create and share valuable content that enriches the lives of our audience.</p>
            </div>
            <div className="content-section">
              <h2>Join Our Community</h2>
              <p>Be a part of our vibrant community by engaging with our content and providing your valuable feedback.</p>
            </div>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
    </section>
  );
};

export default LandingPage;

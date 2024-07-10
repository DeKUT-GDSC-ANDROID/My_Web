// src/components/Videos.js
import React from 'react';
import './Videos.css';

const Videos = () => {
  return (
    <section id="videos" className="videos-section">
      <h2>Video Section</h2>
      <div className="content-wrapper">
        <div className="video-container">
          <iframe
            className="video-frame"
            src="https://www.youtube.com/embed/your-video-id"
            title="How Things Work: Episode 2 - Product Critique"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-container">
          <p className="video-description">
            Do your research on one of the products listed below and a video recording using Loom conducting a detailed product walkthrough that includes discussing:
          </p>
          <ul className="video-list">
            <li>Who built the product / project / tool and why.</li>
            <li>How it was developed.</li>
            <li>The use case and impact.</li>
            <li>How the product generates revenue.</li>
            <li>Its features.</li>
            <li>Positives and shortcomings.</li>
            <li>User experience.</li>
            <li>Architecture outline.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Videos;

import React from 'react';
import './Podcast.css';

const Podcast = () => {
  return (
    <section id="podcast" className="podcast-section">
      <h2>Podcast Section</h2>
      <div className="podcast-container">
        <div className="podcast-content">
          <h3>Podcast Name</h3>
          <p>
            The podcast will cover various topics including [topics]. Here are a few topics lined up for production:
          </p>
          <ul>
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
          </ul>
        </div>
        <div className="podcast-details">
          <h3>Podcast Details</h3>
          <p>
            Include branding assets relevant to your podcast, details on what the podcast will be about, and more information about the production schedule and team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Podcast;

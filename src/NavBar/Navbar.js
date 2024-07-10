// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Website</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#videos">Videos</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#podcast">Podcast</a></li>
        <li><a href="#resume">Resume Portfolios</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

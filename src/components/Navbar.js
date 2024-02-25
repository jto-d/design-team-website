import React from 'react'

import './Navbar.css'; 
import designLogoImage from '../assets/team_logo_light.svg'; 
import igLogoImage from '../assets/ig_logo.svg'; 

const Navbar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">
        <a href="/">
          <img src={designLogoImage} alt="Design Logo" />
        </a>
      </div>
      <div className="menu">
        <a href="/about">about</a>
        <a href="/work">work</a>
        <a href="/request">request</a>
        <a href="/designximpact">designximpact</a>
      </div>
      <div className="social-media">
        <a href="https://instagram.com/princetondesign" target="_blank" rel="noopener noreferrer">
          <img src={igLogoImage} alt="Instagram" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

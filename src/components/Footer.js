import React from 'react'
import './Footer.css';
import scrollToTop from '../assets/scroll_to_top_2.svg'; 

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-content">
              <a href="/about">about</a> | 
              <a href="/work">work</a> | 
              <a href="/request">request</a> | 
              <a href="/designimpact">designximpact</a>
          </div>
          <div className="footer-social">
              follow us on instagram <a href="https://instagram.com/princetondesign" target="_blank" rel="noopener noreferrer">@princetondesign</a>
          </div>
          <div className="footer-copy">
              © 2024 princeton e-club design
          </div>
          <a href="#top" className="footer-top">
            <img src={scrollToTop} alt="Scroll to top" />
          </a>
      </footer>
  );
};


export default Footer
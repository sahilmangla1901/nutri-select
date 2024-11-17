import React from 'react';
import './footer.css';
import facebook from './facebook.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
import linkedin from './linkedin.png'
import gmail from './gmail.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info Section */}
        <div className="contact-info">
          <p>NutriSelect, Boha,  Punjab, India</p>
          <p className='gmail-part'>
          <img src={gmail}  height="20px" alt='facebook'/>
           <a href='mailto:nutriselect@nmacgroup.in'>nutriselect@nmacgroup.in</a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <ul className="social-icons">
            <li><a href="#"><img src={facebook}  height="30px" alt='facebook'/></a></li>
            <li><a href="#"><img src={twitter}  height="30px" alt='facebook'/></a></li>
            <li><a href="#"><img src={instagram}  height="30px" alt='facebook'/></a></li>
            <li><a href="#"><img src={linkedin}  height="30px" alt='facebook'/></a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 NutriSelect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

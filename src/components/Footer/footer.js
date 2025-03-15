// import React from 'react';
// import './footer.css';
import facebook from './facebook.png'
import twitter from './twitter.png'
import instagram from './instagram.png'
// import linkedin from './linkedin.png'
// import gmail from './gmail.png'

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Contact Info Section */}
//         <div className="contact-info">
//           <p>NutriSelect, Boha,  Punjab, India</p>
//           <p className='gmail-part'>
//           <img src={gmail}  height="30px" alt='facebook'/>
//            <a href='mailto:nutriselect@nmacgroup.in'>nutriselect@nmacgroup.in</a>
//           </p>
//         </div>

//         {/* Social Media Section */}
//         <div className="social-media">
//           <ul className="social-icons">
//             <li><a target='_blank' href="https://www.facebook.com/profile.php?id=61574372752555"><img src={facebook}  height="40px" alt='facebook'/></a></li>
//             <li><a target='_blank' href="https://x.com/nutriselectNMAC"><img src={twitter}  height="40px" alt='facebook'/></a></li>
//             <li><a target='_blank' href="https://www.instagram.com/nutriselect_nmac/"><img src={instagram}  height="40px" alt='facebook'/></a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className="footer-bottom">
//         <p>&copy; 2024 NutriSelect. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import './footer.css'; // Import the CSS file for styling
import Logo from './../Navbar/logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Company Logo" />
        </div>

        {/* Social Media Icons */}
        <div className="footer-social-media">
          <a target='_blank' href="https://www.facebook.com/profile.php?id=61574372752555" rel="noopener noreferrer">
            <img src={facebook} height="40px" alt="Facebook" />
          </a>
          <a href="https://x.com/nutriselectNMAC" target="_blank" rel="noopener noreferrer">
            <img src={twitter}  height="40px" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/nutriselect_nmac/" target="_blank" rel="noopener noreferrer">
            <img src={instagram}  height="40px" alt="Instagram" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <p>New Mangla Atta Chakki, Near Co-operative Bank, Boha-151503, Mansa, Punjab</p>
          <p>Email:  <a href='mailto:nutriselect@nmacgroup.in'>nutriselect@nmacgroup.in</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} NutriSelect. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


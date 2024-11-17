// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.png';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close menu on link click
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img className='logo-img' src={logo} alt='nutriselect'/></Link>
            </div>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                <li><Link to="/about" onClick={handleLinkClick}>About Us</Link></li>
                <li className="dropdown">
                    <Link to="/products" onClick={handleLinkClick}>Products</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/products/1" onClick={handleLinkClick}>Wheat Flour</Link></li>
                        <li><Link to="/products/2" onClick={handleLinkClick}>Mustard Oil</Link></li>
                    </ul>
                </li>
                <li><Link to="/recipes" onClick={handleLinkClick}>Recipes</Link></li>
                <li><Link to="/blog" onClick={handleLinkClick}>Blog</Link></li>
                <li><Link to="/contact" onClick={handleLinkClick}>Partner With Us</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

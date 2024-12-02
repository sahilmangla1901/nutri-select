import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Experience Purity and Quality with NutriSelect</h1>
          <p className="hero-subtitle">Crafted with care, sourced from nature.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="category-section">
        <h2 className="section-title">Explore Our Product Categories</h2>
        <div className="category-cards">
          <div className="card flour-card">
            <div className="card-content">
              <h3>Flours</h3>
              <p>Discover a variety of high-quality flours, including whole wheat, multigrain, and gluten-free options.</p>
              <Link to="/products/1" className="card-link">Explore Flours</Link>
            </div>
          </div>
          <div className="card oil-card">
            <div className="card-content">
              <h3>Oils</h3>
              <p>Cold-pressed, natural oils that bring health and flavor to every dish.</p>
              <Link to="/products/2" className="card-link">Explore Oils</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="parallax-section">
        <div className="parallax-content">
          <h2>Essence of Health, Crafted with Care</h2>
          <p>From farm to table, we ensure the highest quality in every product.</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Join the NutriSelect Family Today!</h2>
        <p>Discover a world of pure, nutritious, and high-quality food products.</p>
        <Link to="/contact" className="btn-primary">Partner with Us</Link>
      </section>
    </div>
  );
};

export default Home;

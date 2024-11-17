// src/components/About.js
import React from 'react';
import './about.css'; // Import your CSS for styling
import missionImage from './mission.png'; // Sample product image
import storyImage from './story.PNG'; // Sample product image
import teamImage from './team.png'; // Sample product image
import visionImage from './vision.png'; // Sample product image

const About = () => {
    return (
        <div className="about-container">
            <div className="about-card">
                <img src={storyImage} alt="Production Process" className="about-image" />
                <div className="about-text">
                    <h2 class="section-heading">Our Story</h2>
                    <p class="section-body">
                        NutriSelect is born out of the belief that health and quality should be at the heart of every meal. Our atta (flour) is made from the finest whole grains, ensuring that every roti is soft, nutritious, and rich in fiber. The oil we offer is carefully extracted from high-quality seeds, preserving natural nutrients for a healthier lifestyle.
                        <br /><br />Whether it's the rich aroma of fresh chapatis or the purity of oil that keeps your meals light and heart-friendly, NutriSelect is committed to bringing wholesome goodness to your kitchen. Our products are crafted for families who value nutrition and taste, without compromising on quality.
                    </p>
                </div>
            </div>

            <div className="about-card">
                <div className='about-text'>
                    <h2 class="section-heading">Our Vision</h2>
                    <div className="section-body">
                        "To be the leading choice for families seeking authentic, high-quality food essentials, by delivering pure, nutritious, and responsibly crafted products that enhance everyday meals and promote healthier lifestyles."
                    </div>
                </div>
                <img src={visionImage} alt="Our Products" className="about-image" />
            </div>

            <div className="about-card">
                <img src={teamImage} alt="Our Team" className="about-image" />
                <div className='about-text'>
                    <h2 class="section-heading">Our Team</h2>
                    <div className="section-body">
                        <b>"Our Team: Passionate, Skilled, and Dedicated to Quality"</b>
                        <br /><br />

                        At NutriSelect, our team is more than just a group of professionals – we’re a family bound by a shared commitment to excellence and a deep passion for quality. Our skilled experts in food science, production, and quality assurance work tirelessly to ensure that every product meets the highest standards of purity and health. From sourcing premium ingredients to implementing rigorous quality checks, each team member plays an essential role in bringing our vision to life.
                        <br />
                        We believe in innovation and continuous improvement, always seeking ways to elevate the products we deliver to your kitchen. With a focus on transparency and integrity, our team is driven by a mission to nourish families and communities, one product at a time. Together, we are proud to craft food essentials that are as wholesome as they are trusted."
                        <br />
                        Let me know if you'd like to customize this further!
                    </div>
                </div>
            </div>
            <div className="about-card">
                <div className='about-text'>
                    <h2 class="section-heading">Our Mission</h2>
                    <div className="section-body">
                        To deliver premium, wholesome, and responsibly crafted food essentials that enhance the health and well-being of our customers, while consistently upholding the highest standards of quality, transparency, and care.
                    </div>
                </div>
                <img src={missionImage} alt="Our Products" className="about-image" />
            </div>
        </div>
    );
};

export default About;



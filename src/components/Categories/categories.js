import React from 'react';
import { useParams } from 'react-router-dom';
import './categories.css';
import comingSoon from './comingsoon.png';
import tick from './tick.png';

const Categories = () => {
  const { categoryId } = useParams();

  const categories = {
    1: {
      name: 'Wheat Flour',
      description:"NutriSelect Wheat Flour is made from the finest, naturally grown wheat grains, carefully selected to bring you a flour that’s rich in nutrients and crafted for authentic taste. Our wheat flour is freshly milled, preserving the wholesome fiber and essential nutrients that make each meal nourishing. Soft and versatile, it’s perfect for rotis, parathas, and baking, bringing consistent quality and flavor to your kitchen.",
      productChoose:"Our wheat flour is more than just an ingredient – it’s a commitment to purity and health. With a dedication to quality at every step, NutriSelect ensures that every batch meets the highest standards for you and your family. It’s the natural choice for those who value wholesome, nutritious meals that don’t compromise on flavor.",
      benefits:[
        "100% Natural and Pure: No additives or preservatives, just pure wheat goodness.",
        "Rich in Fiber: Supports digestion and helps keep you fuller for longer.",
        "Soft Texture: Milled for a consistent texture that’s perfect for light, fluffy rotis.",
        "Versatile: Ideal for traditional Indian dishes, baking, and more."
      ]

    },
    2: {
      name: 'Mustard Oil',
      description:"NutriSelect Mustard Oil is carefully extracted from high-quality mustard seeds, bringing the bold flavor and rich aroma that traditional recipes demand. Known for its distinctive taste and numerous health benefits, our mustard oil is unrefined and pure, ensuring it retains essential nutrients and natural antioxidants. From deep frying to stir-frying, NutriSelect Mustard Oil is a perfect choice for everyday cooking, enhancing flavors while promoting wellness.",
      productChoose:"Our mustard oil is crafted with integrity and quality, offering the authentic essence of mustard seeds without any artificial additives. Rich in Omega-3 fatty acids and essential nutrients, NutriSelect Mustard Oil not only elevates the taste of your dishes but also supports heart health and immunity. It’s a staple for kitchens that prioritize both flavor and health.",
      benefits:[
        "100% Pure and Unrefined: Naturally extracted to retain the full nutritional profile and flavor.",
        "Rich in Omega-3 and Antioxidants: Supports heart health and overall wellness.",
        "Natural Preservative Properties: Known for its antimicrobial qualities, helping to preserve food naturally.",
        "Bold, Authentic Flavor: Adds depth and richness to both traditional and modern recipes.",
        "Ideal for Multiple Cooking Styles: Perfect for sautéing, deep frying, pickling, and more."
      ]
    }
  };

  const category = categories[categoryId];

  return (
    <div className="products-page">
      <img className='coming-soon mb-3' src={comingSoon} alt="coming-soon"/>
      <div className="product-list">
        <h2 className='product-title'>{category.name}</h2>
        <div className='product-desc'>{category.description}</div>
        <h4>Why Choose NutriSelect?</h4>
        <div className='product-choose'>{category.productChoose}</div>
        <h4>Key Benefits</h4>
        <div className='product-benefits'>
        {category.benefits.map(benefit => (
          <div key={category.id} className="product-benefits-card">
            <img src={tick} width="20" height="20" alt="radio" className='tick-image'/>
            <span>{benefit}</span>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import comingSoon from './comingsoon.png';
import comingSoon2 from './comingsoon2.png';
const Product = () => {
  const categories = [
    { id: 1, name: 'Flours', description: 'Explore NutriSelect’s range of premium flours, crafted to bring quality, purity, and nutrition to every meal. From traditional whole wheat flour to special multigrain and gluten-free options, our flours are carefully milled to retain the natural fiber and nutrients essential for a balanced diet. Every batch meets the highest quality standards, ensuring soft, fluffy, and delicious rotis, parathas, and more. Embrace the essence of health and taste in every bite with NutriSelect.' },
    { id: 2, name: 'Oils', description: 'NutriSelect oils are extracted with care to preserve the natural goodness and aroma of high-quality seeds, bringing lightness and flavor to every dish. Specializing in mustard oil and other select varieties, our oils are ideal for daily cooking, keeping meals healthy without compromising on taste. Each drop is packed with essential nutrients, making our oils a choice that enhances both flavor and wellness in your everyday recipes.' },
  ];

  return (
    <div className="categories-page">
      <img className='coming-soon' src={comingSoon} alt="coming-soon"/>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <h2 className='product-heading'>{category.name}</h2>
            <p className='product-description'>{category.description}</p>
            <Link to={`/products/${category.id}`} className="view-products-btn">View Products</Link>
          </div>
        ))}
        <div className="category-item p-0">
        <img src={comingSoon2} alt="coming-soon" class='product-coming-soon'/>
          </div>
      </div>
      
    </div>
  );
};

export default Product;


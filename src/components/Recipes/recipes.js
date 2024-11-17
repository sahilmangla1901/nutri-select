// src/components/Recipes.js
import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../../data/recipesData'; // Import recipe data
import './recipes.css'; // Import your CSS for styling

const Recipes = () => {
    return (
        <div className="recipes-container">
            <div className="recipes-grid">
                {recipesData.map(recipe => (
                    <div key={recipe.id} className="recipe-card">
                        <Link to={`/recipes/${recipe.id}`}>
                            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                            <h2 className='recipes-title'>{recipe.title}</h2>
                            <p>{recipe.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recipes;

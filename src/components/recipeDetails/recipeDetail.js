// src/components/RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../../data/recipesData'; // Import recipe data
import './recipeDetail.css'; // Import your CSS for styling

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = recipesData.find(r => r.id === parseInt(id));

    if (!recipe) {
        return <h2>Recipe not found!</h2>;
    }

    return (
        <div className="recipe-detail-container">
            
            <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
            <div className='recipe-details'>
            <h1>{recipe.title}</h1>
            <br/>
            <h4>Description</h4>
            <p>{recipe.description}</p>
            <h4>Ingredients</h4>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h4>Steps</h4>
            <ol>
                {recipe.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
            </div>
        </div>
    );
};

export default RecipeDetail;

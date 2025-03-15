// // src/components/RecipeDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../../data/recipesData'; // Import recipe data
// import './recipeDetail.css'; // Import your CSS for styling

// const RecipeDetail = () => {
//     const { id } = useParams();
//     const recipe = recipesData.find(r => r.id === parseInt(id));

//     if (!recipe) {
//         return <h2>Recipe not found!</h2>;
//     }

//     return (
//         <div className="recipe-detail-container">
            
//             <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
//             <div className='recipe-details'>
//             <h1>{recipe.title}</h1>
//             <br/>
//             <h4>Description</h4>
//             <p>{recipe.description}</p>
//             <h4>Ingredients</h4>
//             <ul>
//                 {recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//             <h4>Steps</h4>
//             <ol>
//                 {recipe.steps.map((step, index) => (
//                     <li key={index}>{step}</li>
//                 ))}
//             </ol>
//             </div>
//         </div>
//     );
// };

// export default RecipeDetail;
import "./recipeDetail.css";

export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = recipesData.find(r => r.id === parseInt(id));
  return (
    <div className="recipe-container">
      <div className="recipe-hero">
        <h1 className="recipe-title">{recipe.title}</h1>
      </div>
      <div className="recipe-content">
        <div className="recipe-image-container">
          <img src={recipe.image} alt={recipe.title} className="recipe-image-details" />
        </div>
        <div className="recipe-details">
          <p className="recipe-description">{recipe.description}</p>
          <h3 className="ingredients-title">Ingredients</h3>
          <ul className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">{ingredient}</li>
            ))}
          </ul>
          <h3 className="steps-title">Preparation Steps</h3>
          <ol className="steps-list">
            {recipe.steps.map((step, index) => (
              <li key={index} className="step-item">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import logo from '../logo.svg'

const Recipe = ({content}) => {
  
    return (
        <div className="recipe-container">
        <img alt='Meal image' src={content.recipe.image} className='recipe-img'/>
        <h3>{content.recipe.label}</h3>
        <div className="recipe-btns">
          <button className="recipe-ingredient-btn">Ingredient</button>
          <button className="recipe-instruction-btn" onClick={() => window.open(content.recipe.url)}>Instructions</button>
        </div>
      </div>
    );
};


export default Recipe;
import React,{useContext} from "react";
import { AppContext } from "../AppContext";

const Recipe = ({content}) => {
  const {openPopUp} = useContext(AppContext)

  return (
        <div className="recipe-container">
        <img alt='Meal image' src={content.recipe.image} className='recipe-img'/>
        <h3>{content.recipe.label}</h3>
        <div className="recipe-btns">
          <button className="recipe-ingredient-btn" onClick={() => openPopUp(content.recipe)}>Ingredient</button>
          <button className="recipe-instruction-btn" onClick={() => window.open(content.recipe.url)}>Instructions</button>
        </div>
      </div>
    );
};


export default Recipe;
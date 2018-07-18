import React, { Component } from 'react';
import RecipeGenericList from './RecipeGenericList';

export default function Recipe(props) {
    return (
      <div>
        <h2>{props.recipeName}</h2>
        <p className="recipe-content__servings-text">{props.recipeServings}</p>
        <p className="recipe-content__prep-overnight-text">{props.isOvernightPrep ? 'YES' : 'NO'}</p>
        <p className="recipe-content__cook-overnight-text">{props.isOvernightCook ? 'YES' : 'NO'}</p>
        <p className="recipe-content__prep-text">{props.prepTime}</p>
        <p className="recipe-content__cook-text">{props.cookTime}</p>
        
        <RecipeGenericList ingredientsList={props.ingredients} />
        <RecipeGenericList directionsList={props.directions} />
        <button className="recipe-content__edit-recipe-btn">Edit Recipe</button>
        <button className="recipe-content__delete-recipe-btn">Delete Recipe</button>
      </div>
    );
}
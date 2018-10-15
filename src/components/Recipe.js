import React from 'react';

export default function Recipe(props) {
  return (
    <details>
      <summary>{props.name}</summary>
      <p className="recipe-content__servings-text">{props.servings}</p>
      <p className="recipe-content__prep-overnight-text">Prep Overnight: {props.isOvernightPrep ? 'YES' : 'NO'}</p>
      <p className="recipe-content__cook-overnight-text">Cook Overnight: {props.isOvernightCook ? 'YES' : 'NO'}</p>
      <p className="recipe-content__prep-text">{props.prepTime}</p>
      <p className="recipe-content__cook-text">{props.cookTime}</p>
      <ul>
        {props.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <ol>
        {props.directions.map(direction => (
          <li key={direction}>{direction}</li>
        ))}
      </ol>
      <button className="recipe-content__edit-recipe-btn">Edit Recipe</button>
      <button className="recipe-content__delete-recipe-btn">Delete Recipe</button>
    </details>
  );
}
import React, { Component } from 'react';

export default function RecipeList(props) {
  return (
    <select>
      <option key="blank" value="">--Please choose a recipe--</option>
      {props.recipeList.map((recipe) => <option key={recipe} value={recipe}>{recipe.name}</option>)}
    </select>
  );
}

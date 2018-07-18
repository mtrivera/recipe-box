import React, { Component } from "react";

export default function RecipeGenericList(props) {
  if (props.ingredientsList) {
    return (
      <ul>
        {props.ingredientsList.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <ol>
        {props.directionsList.map(direction => (
          <li key={direction}>{direction}</li>
        ))}
      </ol>
    );
  }
}

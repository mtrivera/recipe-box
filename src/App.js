import React, { Component } from 'react';
import Recipe from './components/Recipe';
import setStorage from './storage';
import styled from 'styled-components';

setStorage(window);

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
`;

function RecipeList(props) {
  const recipes = JSON.parse(props.recipes);
  const recipeItems = recipes.map((recipe, index) => {
    return (
      <Recipe key={`${index}${recipe.name}`}
        name={recipe.name}
        servings={recipe.servings}
        isOvernightCook={recipe.isOvernight.cook}
        isOvernightPrep={recipe.isOvernight.prep}
        prepTime={recipe.time.prep}
        cookTime={recipe.time.total}
        directions={recipe.directions}
        ingredients={recipe.ingredients}
      />
    );
  });
  return <div>{recipeItems}</div>;
}

class App extends Component {
  getLocalStorageData = (key) => {
    return localStorage.getItem(key);
  }

  render() {
    const recipes = this.getLocalStorageData('_user_recipes');
  
    return (
        <Container>
          <Title>Recipe Box App</Title>
          <RecipeList recipes={recipes} />
        </Container>
      );
    }
}

export default App;

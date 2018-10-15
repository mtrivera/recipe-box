import React, { Component } from 'react';
import Recipe from './components/Recipe';
import setStorage from './storage';

setStorage(window);

class App extends Component {
  render() {
    const recipes = [
      {
        name: 'Apple Crisp',
        ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
          '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
          '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
          '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'
        ],
        directions: ['Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
          `Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
        well mixed; sprinkle over apples. `, `Bake about 30 minutes or until topping is golden brown and 
        apples are tender when pierced with a fork. Serve warm with cream.`
        ],
        isOvernight: {
          cook: false,
          prep: false
        },
        servings: 6,
        time: {
          prep: '20 minutes',
          total: '50 minutes'
        }
      },
      {
        name: 'Apple Crisp',
        ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
          '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
          '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
          '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'
        ],
        directions: ['Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
          `Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
      well mixed; sprinkle over apples. `, `Bake about 30 minutes or until topping is golden brown and 
      apples are tender when pierced with a fork. Serve warm with cream.`
        ],
        isOvernight: {
          cook: false,
          prep: false
        },
        servings: 6,
        time: {
          prep: '20 minutes',
          total: '50 minutes'
        }
      },
      {
        name: 'Apple Crisp',
        ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
          '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
          '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
          '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'
        ],
        directions: ['Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
          `Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
    well mixed; sprinkle over apples. `, `Bake about 30 minutes or until topping is golden brown and 
    apples are tender when pierced with a fork. Serve warm with cream.`
        ],
        isOvernight: {
          cook: false,
          prep: false
        },
        servings: 6,
        time: {
          prep: '20 minutes',
          total: '50 minutes'
        }
      }
    ];

  function RecipeList(props) {
    const recipes = props.recipes;
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
  
  return (
      <div>
        <h1>Recipe Box App</h1>
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

export default App;

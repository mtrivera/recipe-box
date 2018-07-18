import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../components/Recipe';
import RecipeGenericList  from '../components/RecipeGenericList';

describe('Recipe component', () => {
  const recipe = {
    name: 'Apple Crisp',
    ingredients: ['4 medium tart cooking apples', '3/4 cup packed brown sugar',
      '1/2 cup all-purpose flour', '1/2 cup quick-cooking or old-fashioned oats',
      '1/3 cup butter or margarine, softened', '3/4 teaspoon ground cinnamon',
      '3/4 teaspoon ground nutmeg', 'Cream or ice cream, if desired'
    ],
    directions: ['1. Heat oven to 375ºF. Grease bottom and sides of 8-inch square pan with shortening.',
      `2. Spread apples in pan. In medium bowl, stir remaining ingredients except cream until
   well mixed; sprinkle over apples. `, `3. Bake about 30 minutes or until topping is golden brown and 
   apples are tender when pierced with a fork. Serve warm with cream.`
    ],
    isOvernight: {
      cook: false,
      prep: false
    },
    servings: '6',
    time: {
      cook: '30 minutes',
      prep: '20 minutes'
    },
  };

  it('Display recipe name as h2 element', () => {
    const wrapper = shallow(<Recipe recipeName={recipe.name} />);
    const text = wrapper.find('h2').text();
    expect(text).toBe(recipe.name);
  });

  it('Display recipe prep overnight', () => {
    const wrapper = shallow(<Recipe isOvernightPrep={recipe.isOvernight.prep} />);
    const text = wrapper.find('.recipe-content__prep-overnight-text').text();
    expect(text).toBe('NO');
  });

  it('Display recipe cook overnight', () => {
    const wrapper = shallow(<Recipe isOvernightCook={recipe.isOvernight.cook} />);
    const text = wrapper.find('.recipe-content__cook-overnight-text').text();
    expect(text).toBe('NO');
  });

  it('Display recipe prep time', () => {
    const wrapper = shallow(<Recipe prepTime={recipe.time.prep} />);
    const text = wrapper.find('.recipe-content__prep-text').text();
    expect(text).toBe(recipe.time.prep);
  });

  it('Display recipe cook time', () => {
    const wrapper = shallow(<Recipe cookTime={recipe.time.cook} />);
    const text = wrapper.find('.recipe-content__cook-text').text();
    expect(text).toBe(recipe.time.cook);
  });

  it('Display servings as p element', () => {
    const wrapper = shallow(<Recipe recipeServings={recipe.servings} />);
    const text = wrapper.find('.recipe-content__servings-text').text();
    expect(text).toEqual(recipe.servings);
  });

  it('Display recipe ingredients as ul element', () => {
    const wrapper = shallow(<RecipeGenericList ingredientsList={recipe.ingredients} />);
    expect(wrapper.find('ul').children()).toHaveLength(recipe.ingredients.length);
  });

  it('Display recipe directions as ol element', () => {
    const wrapper = shallow(<RecipeGenericList directionsList={recipe.directions} />);
    expect(wrapper.find('ol').children()).toHaveLength(recipe.directions.length);
  });

  it('Display a Edit Recipe button', () => {
    const wrapper = shallow(<button className="recipe-content__edit-recipe-btn">Edit Recipe</button>);
    const text = wrapper.find('.recipe-content__edit-recipe-btn').text();
    expect(text).toBe('Edit Recipe');
  });

  it('Display a Delete Recipe button', () => {
    const wrapper = shallow(<button className="recipe-content__delete-recipe-btn">Delete Recipe</button>);
    const text = wrapper.find('.recipe-content__delete-recipe-btn').text();
    expect(text).toBe('Delete Recipe');
  });
});
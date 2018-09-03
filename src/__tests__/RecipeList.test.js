import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../components/Recipe';
import RecipeList from '../components/RecipeList';

describe('RecipeList component', () => {
  const recipes = [{
    name: 'Apple Crisp',
  },
  {
    name: 'Chicken Tacos',
  },
  {
    name: 'Baked Tri-tip'
  }];
  // TODO: Test Selecting recipe passes data to props

  it('Display a select element with 3 options plus one blank', () => {
    const wrapper = shallow(<RecipeList recipeList={recipes} />);
    expect(wrapper.children()).toHaveLength(recipes.length + 1);
  });

});
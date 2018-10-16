import React from 'react';
import styled from 'styled-components';

const Summary = styled.summary`
  color: blue;
`;

const Paragraph = styled.p`
  color: magenta;
`;

const UnorderedList = styled.ul`
  color: green;
`;

const OrderedList = styled.ol`
  color: violet;
`;

const Button = styled.button`
  border: 1px solid orange;
  color: blue;
`;

export default function Recipe(props) {
  return (
    <details>
      <Summary>{props.name}</Summary>
      <Paragraph>{props.servings}</Paragraph>
      <Paragraph>Prep Overnight: {props.isOvernightPrep ? 'YES' : 'NO'}</Paragraph>
      <Paragraph>Cook Overnight: {props.isOvernightCook ? 'YES' : 'NO'}</Paragraph>
      <Paragraph>{props.prepTime}</Paragraph>
      <Paragraph>{props.cookTime}</Paragraph>
      <UnorderedList>
        {props.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </UnorderedList>
      <OrderedList>
        {props.directions.map(direction => (
          <li key={direction}>{direction}</li>
        ))}
      </OrderedList>
      <Button>Edit Recipe</Button>
      <Button>Delete Recipe</Button>
    </details>
  );
}
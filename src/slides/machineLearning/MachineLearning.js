import React from 'react';
import { Slide, Appear, Heading, List, ListItem } from 'spectacle';
import styled from 'styled-components';

const NestedList = styled(List)`
  margin: 0px 0px 0px 50px;
`;

const Item = styled(ListItem)`
  list-style-position: outside;
`;

const MachineLearning = props => (
  <Slide {...props} bgColor="rgb(0, 22, 39)" transition={['slide']}>
    <Heading caps color="secondary">Machine Learning</Heading>
    <NestedList color="secondary">
      <Item>ability to learn without being explicitly programmed</Item>
      <Item>trying to study and create algorithms to make predictions</Item>
      <Item>most common approaches are Artificial Neural Networks and Decision Trees</Item>
    </NestedList>
  </Slide>
);

export default MachineLearning;

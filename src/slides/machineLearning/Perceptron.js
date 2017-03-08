import React from 'react';
import { Slide, Heading } from 'spectacle';
import styled from 'styled-components';
import perceptron from '../../assets/perceptron.jpg';

const Sketch = styled.img`
  width: 100%;
  padding: 50px 0px 50px 0px;
`;

const Perceptron = props => (
  <Slide {...props} bgColor="white" transition={['slide']} padding="50px" align="top">
    <Heading caps>The Perceptron</Heading>
    <Sketch src={perceptron} />
  </Slide>
);

export default Perceptron;

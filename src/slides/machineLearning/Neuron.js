import React from 'react';
import { Slide, Heading } from 'spectacle';
import styled from 'styled-components';
import neuron from '../../assets/neuron.svg';

const Sketch = styled.img`
  width: 100%;
  padding: 50px 0px 50px 0px;
`;

const Neuron = props => (
  <Slide {...props} bgColor="white" transition={['slide']} padding="50px" align="top">
    <Heading fit caps>One of 100 billion neurons</Heading>
    <Sketch src={neuron} />
  </Slide>
);

export default Neuron;

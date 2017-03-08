import React from 'react';
import { Slide, Heading } from 'spectacle';
import styled from 'styled-components';
import artificialNeuralNetworks from '../../assets/artificial-neural-networks.png';

const Sketch = styled.img`
  width: 100%;
  padding: 50px 0px 50px 0px;
`;

const ArtificialNeuralNetwork = props => (
  <Slide {...props} bgColor="white" transition={['slide']} padding="50px" align="top">
    <Heading fit caps>Artificial Neural Networks</Heading>
    <Sketch src={artificialNeuralNetworks} />
  </Slide>
);

export default ArtificialNeuralNetwork;

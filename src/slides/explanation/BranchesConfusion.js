import React from 'react';
import { Slide, Heading } from 'spectacle';
import styled from 'styled-components';
import FragmentationOfAI from '../../assets/branches-confusion.svg';

const Sketch = styled.img`
  width: 100%;
  padding: 50px 0px 50px 0px;
`;

const BranchesConfusion = props => (
  <Slide {...props} transition={['slide']} padding="50px" align="top">
    <Heading caps>Branches of AI</Heading>
    <Sketch src={FragmentationOfAI} />
  </Slide>
);

export default BranchesConfusion;

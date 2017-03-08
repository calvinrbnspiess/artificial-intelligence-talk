import React from 'react';
import { Slide, Heading } from 'spectacle';

const Importance = props => (
  <Slide {...props} transition={['slide']}>
    <Heading size={4} caps textColor="secondary">So, why is</Heading>
    <Heading fit caps textColor="tertiary"> Artificial Intelligence</Heading>
    <Heading size={4} caps textColor="secondary">more important than ever?</Heading>
  </Slide>
);

export default Importance;

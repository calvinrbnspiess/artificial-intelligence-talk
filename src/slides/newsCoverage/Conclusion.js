import React from 'react';
import { Slide, Heading } from 'spectacle';

const Conclusion = props => (
  <Slide {...props} transition={['fade']} bgColor="primary">
    <Heading fit caps textColor="secondary">There are much more articles</Heading>
    <Heading fit caps textColor="tertiary">frequently released about</Heading>
    <Heading fit caps textColor="secondary">AI than about pizza.</Heading>
    <Heading fit caps textColor="tertiary">AI seems to be newsworthy!</Heading>
  </Slide>
);

export default Conclusion;

import React from 'react';
import { Slide } from 'spectacle';

const Curtain = props => (
  <Slide {...props} transition={['fade']} bgColor="black" />
);

export default Curtain;

import React from 'react';
import { Slide } from 'spectacle';
import SheduledConsoleFrame from '../components/SheduledConsoleFrame';

const contentLines = [
  { text: 'Thank you for your attention.' },
];

const ThankYou = props => (
  <Slide {...props} transition={['slide']}>
    <SheduledConsoleFrame
      initialLine={0}
      lines={contentLines}
    />
  </Slide>
);

export default ThankYou;

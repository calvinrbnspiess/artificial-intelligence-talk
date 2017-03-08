import React from 'react';
import { Slide } from 'spectacle';
import SheduledConsoleFrame from '../../components/SheduledConsoleFrame';

const list = { indent: 3, delimeter: '*' };

const contentLines = [
  { text: 'But what is "Artificial Intelligence"?' },
  { ...list, text: 'subfield of computer science' },
  { ...list, text: 'imitation of "cognitive" abilities that are typically associated with the human mind' },
  { ...list, text: 'perception of its environment to take actions that maximize success at a general-purpose task' },
  { ...list, text: 'goal to mimic facilities like reasoning, knowledge, planning, learning, natural-language processing, perception, ability to manipulate and move objects, ...' },
  { ...list, text: 'current research focuses mostly on solving specific problems' },
];

const ExplanationAI = props => (
  <Slide {...props} transition={['slide']}>
    <SheduledConsoleFrame
      initialLine={1}
      lines={contentLines}
    />
  </Slide>
);

export default ExplanationAI;

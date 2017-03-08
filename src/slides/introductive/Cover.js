import React from 'react';
import { Appear, Heading, Slide } from 'spectacle';
import images from '../../assets';

const Cover = props => (
  <Slide transition={['fade']} bgColor="black" bgImage={images.neurons} bgDarken={0.75} {...props} >
    <Appear>
      <div>
        <Heading caps textColor="primary">
          Artificial
        </Heading>
        <Heading caps fit textColor="secondary">
          Intelligence
        </Heading>
      </div>
    </Appear>
  </Slide>
);

export default Cover;

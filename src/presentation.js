import React from 'react';
import { Deck, Spectacle } from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';

import 'prismjs';
import 'npm-font-open-sans-condensed/open-sans-condensed.css';
import 'prism-theme-one-dark/prism-onedark.css';
import 'spectacle/lib/themes/default/index.css';

import uniqueKeyGenerator from './helpers/uniquekeyGenerator';
import Introductive from './slides/introductive';
import NewsCoverage from './slides/newsCoverage';
import Explanation from './slides/explanation';
import MachineLearning from './slides/machineLearning';
import Prospects from './slides/prospects';
import ThankYou from './slides/ThankYou';
import Sources from './slides/Sources';


import images from './assets';

/**
 *  Preload images using preloader (!)
 */

preloader(images);

const theme = createTheme({
  primary: '#01579B',
  secondary: '#ffffff',
  tertiary: '#2c3e50',
});

const uniqueKey = uniqueKeyGenerator();

const Presentation = () => (
  <Deck theme={theme} transition={['slide', 'zoom']} transitionDuration={500}>
    { [...Introductive, ...NewsCoverage, ...Explanation, ...MachineLearning, ...Prospects, Sources, ThankYou].map(slide => slide({ key: uniqueKey.next().value })) }
  </Deck>
);

export default Presentation;

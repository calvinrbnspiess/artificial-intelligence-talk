import React from 'react';
import styled from 'styled-components';
import googleTrends from '../../assets/ai-google-trends.png';
import FullWidthSlide from '../../components/FullWidthSlide';

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%
  padding: 100px 100px 0px 100px !important;
  align-self: flex-end;
`;

const Trends = props => (
  <FullWidthSlide {...props} transition={['slide']} margin="0">
    <ResponsiveImage src={googleTrends} />
  </FullWidthSlide>
);

export default Trends;

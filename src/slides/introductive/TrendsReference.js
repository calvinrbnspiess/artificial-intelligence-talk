import React from 'react';
import styled from 'styled-components';
import googleTrendsReference from '../../assets/ai-google-trends-reference.png';
import FullWidthSlide from '../../components/FullWidthSlide';

const ResponsiveImage = styled.img`
  width: 100%;
  height: 100%
  padding: 100px 100px 0px 100px !important;
  align-self: flex-end;
`;

const TrendsReference = props => (
  <FullWidthSlide {...props} transition={['slide']}>
    <ResponsiveImage src={googleTrendsReference} />
  </FullWidthSlide>
);

export default TrendsReference;

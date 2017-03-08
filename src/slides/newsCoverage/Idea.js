import React from 'react';
import styled from 'styled-components';
import { Slide, Heading } from 'spectacle';
import nytLogo from '../../assets/nyt-logo.svg';

const PaperStack = styled.div`
  background-color: white;
  padding: 5px;
  box-shadow: 10px 7.5px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  width: ${({ width }) => width || '100%'};

  &:before {
    content: '';
    width: 100%;
    transform: rotate(2.5deg);
    height: 100%;
    background: rgb(189, 182, 182);
    position: absolute;
    z-index: -1;
    top: 5px;
    box-shadow: -2.5px -1.25px 25px rgba(0,0,0,0.75);
  }

  &:after {
    content: '';
    width: 100%;
    transform: rotate(-2.5deg);
    height: 100%;
    background: rgb(25, 23, 23);
    position: absolute;
    left: 17.5px;
    z-index: -2;
    box-shadow: 17.5px 12.5px 25px rgba(0,0,0,0.75);
  }
`;

const Centered = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
`;

const Idea = props => (
  <Slide {...props} transition={['slide']} bgColor="tertiary">
    <Heading fit caps textColor="primary">News coverage</Heading>
    <Heading fit caps textColor="secondary">interest of newspapers on a subject over time</Heading>
    <Heading fit caps textColor="secondary">tells us importance of a topic</Heading>
    <Heading size={6} caps textColor="primary">measured at</Heading>
    <Centered>
      <PaperStack width="75%">
        <img alt="The New York Times" src={nytLogo} />
      </PaperStack>
    </Centered>
  </Slide>
);

export default Idea;

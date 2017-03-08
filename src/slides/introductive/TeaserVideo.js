import React, { Component } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import FullWidthSlide from '../../components/FullWidthSlide';
import { redirectToNextSlide } from '../../helpers/location';
import video from '../../assets/introduction.mp4';

const TeaserVideo = props => (
  <FullWidthSlide {...props} transition={['fade']} bgColor="black">
    <VideoPlayer src={video} onEnded={redirectToNextSlide} width="100%" height="100%"/>
  </FullWidthSlide>
);

export default TeaserVideo;

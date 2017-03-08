import React, { Component } from 'react';

/* eslint-disable jsx-a11y/no-static-element-interactions */
class VideoPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  componentDidUpdate() {
    if (this.state.playing) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

  render() {
    return (
      <video
        onClick={() => { this.setState({ playing: !this.state.playing }); }}
        ref={(videoElement) => { this.video = videoElement; }}
        {...this.props}
      />
    );
  }
}

export default VideoPlayer;

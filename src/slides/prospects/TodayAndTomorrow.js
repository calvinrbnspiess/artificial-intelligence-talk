import React, { Component } from 'react';
import styled from 'styled-components';
import { Slide, Heading } from 'spectacle';
import BrowserFrame from '../../components/BrowserFrame';
import images from '../../assets';

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  user-select: none;
`;

const TomorrowLayout = styled(Content)`
  background-size: cover;
  background-position: center top;
  background-image: url(${props => props.src});
`;

class Browser extends Component {
  constructor() {
    super();
    this.state = { clicked: 0 };

    this.onInteract = this.onInteract.bind(this);
  }

  onInteract() {
    this.setState({
      clicked: this.state.clicked + 1,
    });
  }

  render() {
    return (
      <BrowserFrame
        url="about://tomorrow"
        onClick={this.onInteract}
      >
        {
          this.state.clicked === 0 ? (
            <Content>
              <Heading fit caps>Today</Heading>
            </Content>
          ) :
          this.state.clicked === 1 ? (
            <Content>
              <Heading caps>And tomorrow?</Heading>
            </Content>
          ) : (
            <TomorrowLayout src={images.terminator}>
              <Heading textColor="secondary" fit caps>unintended</Heading>
              <Heading textColor="primary" fit caps>consequences?</Heading>
            </TomorrowLayout>
          )
        }
      </BrowserFrame>
    );
  }
}

const TodayAndTomorrow = props => (
  <Slide {...props} transition={['slide']}>
    <Browser />
  </Slide>
);

export default TodayAndTomorrow;

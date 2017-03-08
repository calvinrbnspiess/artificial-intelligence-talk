import React, { Component } from 'react';
import styled from 'styled-components';
import { Slide, Heading } from 'spectacle';
import { parse } from 'url';
import BrowserFrame from '../../components/BrowserFrame';
import { articles } from '../../assets';

const RenderedArticle = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
  background-image: url(${props => props.src});
`;

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

const Button = styled.div`
  border: 0;
  background-color: rgba(0,0,0,.1);
  border-radius: 5px;
  text-transform: uppercase;
  padding: 10px;
  font-weight: bold;
  color: rgb(44, 62, 80);
`;

const shrimAdress = url => `http://www.${parse(url).hostname}`;

class ArticleBrowser extends Component {
  constructor() {
    super();
    this.state = { clicked: -1 };

    this.onInteract = this.onInteract.bind(this);
  }

  onInteract() {
    this.setState({
      clicked: Object.keys(articles).length > this.state.clicked + 1 ?
        this.state.clicked + 1 :
        Object.keys(articles).length,
    });
  }

  getAdress() {
    if (this.state.clicked >= Object.keys(articles).length) {
      return 'about://future';
    } else if (this.state.clicked < Object.keys(articles).length && this.state.clicked >= 0) {
      return shrimAdress(Object.keys(articles)[this.state.clicked]);
    }
    return '-';
  }

  getIndicator() {
    if (this.state.clicked < Object.keys(articles).length && this.state.clicked >= 0) {
      return `${this.state.clicked + 1}/${Object.keys(articles).length}`;
    }
    return '';
  }

  render() {
    return (
      <BrowserFrame
        url={this.getAdress()}
        indicator={this.getIndicator()}
        onTitleBarClick={() => { if (typeof Object.keys(articles)[this.state.clicked] === 'string') { window.open(Object.keys(articles)[this.state.clicked]); } }}
        onClick={this.onInteract}
      >
        {
          this.state.clicked < 0 ? (
            <Content>
              <Heading fit caps>Indeed</Heading>
              <Button>click for breaking news</Button>
            </Content>
          ) : this.state.clicked >= Object.keys(articles).length ? (
            <Content>
              <Heading fit caps>Artificial Intelligence</Heading>
              <Heading fit caps textColor="primary">takes major</Heading>
              <Heading fit caps>steps forward</Heading>
            </Content>
          ) : (
            <RenderedArticle src={articles[Object.keys(articles)[this.state.clicked]]} />
          )
        }
      </BrowserFrame>
    );
  }
}

//  <BackgroundImage src={articles[Object.keys(articles)[0]]} />

const Indeed = props => (
  <Slide {...props} transition={['slide']}>
    <ArticleBrowser />
  </Slide>
);

export default Indeed;

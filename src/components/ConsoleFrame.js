import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

import uniqueKeyGenerator from '../helpers/uniquekeyGenerator';

const Frame = styled.div`
  border: 1px solid #000000;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  border-radius: 5px;
  background-color: #000000;
  box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, .1);
`;

const AppBar = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(255, 255, 255, .05);
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  height: 45px;
`;

const Icon = styled.div`
  border-radius: 50%;
  margin: 5px;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
`;

const TitleBar = ({ onClick }) => (
  <AppBar onClick={onClick}>
    <Icon color="#ff5f56" /> <Icon color="#ffbd2e" /> <Icon color="#27c93f" />
  </AppBar>
);

TitleBar.propTypes = {
  onClick: PropTypes.func,
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 50px 50px 50px;
  overflow: scroll;
  overflow-x: hidden;
  font-family: Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;

  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, .25);
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, .05);
  }
`;

const Blink = keyframes`
  0% { opacity: 100; }
  50% { opacity: 0; }
`;

const BlinkingFragment = styled.span`
  animation: ${Blink} 1s step-end infinite;
`;

const BlinkingCursor = styled(BlinkingFragment)`
  display: inline-block;
  &:before {
    content: "_";
  }
`;

const Line = styled.p`
  width: 100%;
  margin: 0px 25px 0px 0px;
  font-size: 100%;
  text-align: left;

  text-indent: -${props => (props.delimeter === undefined ? 0 : props.delimeter.length + 1)}ch;
  padding-left: ${props => (props.indent === undefined ? 0 : props.indent + props.delimeter.length)}ch;

  &:before {
    content: "${props => (props.delimeter === undefined ? '$' : props.delimeter)}";
    margin-right: 1ch;
    white-space: pre;
  }
`;

const uniqueKey = uniqueKeyGenerator();

class ConsoleFrame extends Component {

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.content.scrollTop = this.content.scrollHeight;
  }

  render() {
    return (
      <Frame onClick={this.props.onClick}>
        <TitleBar onClick={this.props.onTitleBarClick} />
        <Content innerRef={(content) => { this.content = content; }}>
          {
            this.props.lines.map(({ indent, delimeter, text }) => (
              <Line key={uniqueKey.next().value} indent={indent} delimeter={delimeter}>{text}</Line>
            ))
          }
          <Line><BlinkingCursor /></Line>
        </Content>
      </Frame>
    );
  }
}

ConsoleFrame.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.shape({
    indent: React.PropTypes.number,
    delimeter: React.PropTypes.string,
    text: React.PropTypes.string,
  })),
  onTitleBarClick: PropTypes.func,
  onClick: PropTypes.func,
};

export default ConsoleFrame;

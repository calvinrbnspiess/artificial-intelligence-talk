import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  border: 1px solid #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 5px 10px 10px 5px rgba(0,0,0,.1);
`;

const AppBar = styled.div`
  width: 100%;
  display: flex;
  background-color: rgba(0,0,0,.05);
  align-items: center;
  justify-content: center;
  padding: 10px 0px 10px 0px;
`;

const TrafficLights = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
  position: absolute;
  padding: 0px 10px 0px 10px;
`;

const Icon = styled.div`
  border-radius: 50%;
  margin: 5px;
  width: 15px;
  height: 15px;
  background-color: ${props => props.color};
`;

const AdressBar = styled.div`
  background-color: rgba(0,0,0,.1);
  border: 0;
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  min-width: 400px;
  padding: 5px 25px 5px 25px;
`;

const Input = styled.span`
  border: 0;
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
`;

const Indicator = styled.span`
  color: rgba(0,0,0,.2);
  border: 0;
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  display: inline-block;
  float: right;
  padding-left: 25px;
`;

const TitleBar = ({ url, indicator, onClick }) => (
  <AppBar onClick={onClick}>
    <TrafficLights>
      <Icon color="#ff5f56" /> <Icon color="#ffbd2e" /> <Icon color="#27c93f" />
    </TrafficLights>
    <AdressBar>
      <Input>{url}</Input>
      <Indicator>{indicator}</Indicator>
    </AdressBar>
  </AppBar>
);

TitleBar.propTypes = {
  url: PropTypes.string,
  indicator: PropTypes.string,
  onClick: PropTypes.func,
};

const BrowserFrame = ({ url, indicator, onTitleBarClick, onClick, children }) => (
  <Frame onClick={onClick}>
    <TitleBar url={url} indicator={indicator} onClick={onTitleBarClick} />
    {children}
  </Frame>
);

BrowserFrame.propTypes = {
  url: PropTypes.string,
  indicator: PropTypes.string,
  onTitleBarClick: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default BrowserFrame;

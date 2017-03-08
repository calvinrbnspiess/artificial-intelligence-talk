import React, { Component, PropTypes } from 'react';
import ConsoleFrame from './ConsoleFrame';

class SheduledConsoleFrame extends Component {

  constructor(props) {
    super(props);
    this.state = { clicked: props.initialLine || 0 };

    this.onInteract = this.onInteract.bind(this);
  }

  onInteract() {
    this.setState({
      clicked: this.state.clicked + 1,
    });
  }

  render() {
    return (
      <ConsoleFrame
        onClick={this.onInteract}
        lines={this.props.lines.slice(0, this.state.clicked)}
      />
    );
  }
}

SheduledConsoleFrame.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.shape({
    indent: PropTypes.number,
    delimeter: PropTypes.string,
    text: PropTypes.string,
  })),
  initialLine: PropTypes.number,
};

export default SheduledConsoleFrame;

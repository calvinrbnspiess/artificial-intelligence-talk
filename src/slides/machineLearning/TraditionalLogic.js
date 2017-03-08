import React, { Component } from 'react';
import { Slide, Heading, CodePane } from 'spectacle';
import styled from 'styled-components';

const traditionalLogicExample =
`function getOutfit({ cold, hot, sunny, rainy }) {
    const outfit = [];

    if (cold) {
      outfit.push('bonnet');
      outfit.push('shawl');
      outfit.push('pair of gloves');
    } else if (hot) {
      outfit.push('swimming trunks');
      outfit.push('flip-flops');
    }

    if (sunny) {
      outfit.push('sunglasses');
    } else if (rainy) {
      outfit.push('umbrella');
    }
    return outfit;
}
`;

const Container = styled.div`
  display: flex;
  background-color: #282c34;
  font-size: 0.75em;
  width: 100%;
`;

const FlatWideInput = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  color: white;
  font-family: "Open Sans Condensed", sans-serif;
  background-color: #282c34;
  padding: 0;
  flex: 1;
`;

const Label = styled.span`
  text-transform: uppercase;
  color: #ABB2BF;
  padding: 0px 25px 0px 25px;
`;

class LiveDemonstrationGetOutfit extends Component {

  constructor() {
    super();

    this.state = {
      parameters: {
        cold: false,
        hot: false,
        sunny: false,
        rainy: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  getOutfit() {
    const { cold, hot, sunny, rainy } = this.state.parameters;
    const outfit = [];

    if (cold) {
      outfit.push('bonnet');
      outfit.push('shawl');
      outfit.push('pair of gloves');
    } else if (hot) {
      outfit.push('swimming trunks');
      outfit.push('flip-flops');
    }

    if (sunny) {
      outfit.push('sunglasses');
    } else if (rainy) {
      outfit.push('umbrella');
    }
    return outfit;
  }

  handleChange(event) {
    try {
      this.setState({
        parameters: JSON.parse(event.target.value),
        error: undefined,
      });
    } catch (exception) {
      this.setState({
        error: exception.message,
      });
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Label>Pass properties</Label>
          <FlatWideInput type="text" placeholder={'{ "cold": true }'} onChange={this.handleChange} />
        </Container>
        <CodePane lang="javascript" style={{ fontSize: '0.75em' }}>
          { `=> ${this.state.error ? this.state.error : JSON.stringify(this.getOutfit(this.state.parameters))}` }
        </CodePane>
      </div>
    );
  }
}

const MachineLearning = props => (
  <Slide {...props} transition={['slide', 'fade']}>
    <Heading caps color="secondary" margin="0 0 15px 0">Traditional logic</Heading>
    <CodePane lang="javascript" source={traditionalLogicExample} />
    <LiveDemonstrationGetOutfit />
  </Slide>
);

export default MachineLearning;

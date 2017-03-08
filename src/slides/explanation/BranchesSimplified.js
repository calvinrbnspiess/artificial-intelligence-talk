import React, { Component, PropTypes } from 'react';
import { Slide, Heading } from 'spectacle';
import styled from 'styled-components';

const HierarchyVisualization = styled.div`
  background-color: rgba(44, 62, 80, 0.7);
  padding: 5px;
  margin-top: 25px;
`;

const Dependent = styled.div`
  padding: 5px ${props => (props.layer ? props.layer * 35 : 35)}px 0px ${props => (props.layer ? props.layer * 35 : 35)}px;
`;

const Label = styled.div`
  font-size: 0.75em;
  line-height: 1.5;
  text-transform: uppercase;
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div`
  padding: 10px 50px 10px 50px;
  margin: 5px;
  align-items: center;
  display: inline-flex;
  flex-direction: column;
  color: #01579B;
  flex: 1 0 ${props => props.baseWidth};
  white-space: nowrap;
  background-color: #ffffff;
  user-select: none;
`;

const ProminentItem = styled(Item)`
  text-transform: uppercase;
  padding: 15px 50px 15px 50px;
  background-color: rgb(0, 22, 39);
  color: white;
`;

const SmallItem = styled(Item)`
  flex: 0;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 0.75em;
  text-align: left;
  color: #1e4566;
`;

class CollapsibleItem extends Component {

  constructor() {
    super();
    this.state = {
      toggled: false,
    };
  }

  render() {
    const ItemVariation = this.props.itemType;
    return (
      <ItemVariation
        baseWidth={this.props.baseWidth}
        onClick={() => this.setState({ toggled: !this.state.toggled })}
      >
        {this.props.header}
        <List>
          {this.state.toggled ? this.props.children : ''}
        </List>
      </ItemVariation>
    );
  }
}

CollapsibleItem.propTypes = {
  header: PropTypes.string,
  itemType: PropTypes.func,
  baseWidth: PropTypes.string,
  children: PropTypes.node,
};

CollapsibleItem.defaultProps = {
  itemType: Item,
  baseWidth: '33.3%',
};

const Subfields = props => (
  <Slide {...props} transition={['fade']} padding="15px" align="top">
    <Heading caps>Branches of AI</Heading>
    <HierarchyVisualization background="rgba(44, 62, 80, 0.7)">
      <Dependent>
        <Label>Applications</Label>
        <Section>
          <CollapsibleItem header="Perception">
            <li>Computer Vision</li>
            <li>Machine Perception</li>
          </CollapsibleItem>
          <CollapsibleItem header="Data mining" baseWidth="60%">
            <li>Pattern recognition</li>
            <li>Anomaly detection</li>
            <li>Clustering</li>
          </CollapsibleItem>
          <CollapsibleItem header="Applied linguistics">
            <li>Natural language processing</li>
            <li>Natural language querying</li>
            <li>Natural language generation</li>
          </CollapsibleItem>
          <CollapsibleItem header="Knowledge representation and reasoning" />
          <CollapsibleItem header="Automated Planning and Scheduling" />
          <CollapsibleItem itemType={SmallItem} header="..." />
        </Section>
      </Dependent>
      <Section style={{ paddingTop: '10px' }}>
        <CollapsibleItem itemType={ProminentItem} header="Traditional logic">
          <li>if-then rules</li>
        </CollapsibleItem>
        <CollapsibleItem itemType={ProminentItem} header="Machine Learning" baseWidth="60%">
          <li>Artificial Neural Networks</li>
          <List>
            <li>Deep Learning</li>
          </List>
        </CollapsibleItem>
        <Label>Technologies</Label>
      </Section>
    </HierarchyVisualization>
  </Slide>
);

export default Subfields;

import React from 'react';
import { Heading, Slide } from 'spectacle';
import styled from 'styled-components';
import { ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Bar } from 'recharts';
import yearly from 'press-coverage-statistics/artificial-intelligence/nyt.yearly.json';
import images from '../../assets';

const sum = yearly.map(({ total }) => total).reduce((a, b) => (a + b));

const TertiarySpan = styled.span`
  color: #2c3e50;
`;

const CoverageAI = props => (
  <Slide transition={['slide']} bgColor="black" bgImage={images.datacenter} bgDarken={0.85} {...props}>
    <Heading caps size={5} textColor="secondary">
      <TertiarySpan>{sum} articles.</TertiarySpan> Artificial Intelligence
    </Heading>
    <ResponsiveContainer width="100%" aspect={21 / 9}>
      <BarChart margin={{ top: 25 }} barCategoryGap={0} barGap={0} data={yearly}>
        <XAxis stroke="#ffffff" dataKey="year" tickLine={false} />
        <YAxis stroke="#ffffff" />
        <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
        <Bar fill="#ffffff" fillOpacity={1} dataKey="total" />
      </BarChart>
    </ResponsiveContainer>
  </Slide>
);

export default CoverageAI;

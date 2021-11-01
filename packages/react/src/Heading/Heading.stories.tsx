import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../';
import { Heading, HeadingProps } from './';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

export const Variants: Story<HeadingProps> = () => (
  <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
    <Heading level="1">Heading 1</Heading>
    <Heading level="2">Heading 2</Heading>
    <Heading level="3">Heading 3</Heading>
    <Heading level="4">Heading 4</Heading>
    <Heading level="5">Heading 5</Heading>
    <Heading level="6">Heading 6</Heading>
  </Box>
);

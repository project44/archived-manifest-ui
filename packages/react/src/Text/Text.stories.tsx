import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../';
import { Text, TextProps } from './';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

export const Variants: Story<TextProps> = () => (
  <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
    <Text>Almost before we knew it, we had left the ground.</Text>
  </Box>
);

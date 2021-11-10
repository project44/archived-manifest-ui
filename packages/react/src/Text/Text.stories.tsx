import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../';
import { Text, TextProps } from './';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

export const Sizes: Story<TextProps> = () => (
  <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
    <Text fontSize="9">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="8">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="7">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="6">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="5">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="4">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="3">Almost before we knew it, we had left the ground.</Text>
    <Text fontSize="2">Almost before we knew it, we had left the ground.</Text>
  </Box>
);

export const Variants: Story<TextProps> = () => (
  <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
    <Text variant="contrast">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="secondary">
      Almost before we knew it, we had left the ground.
    </Text>
  </Box>
);

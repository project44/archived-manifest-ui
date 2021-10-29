import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../../';
import { Text, TextProps } from './';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

export const Variants: Story<TextProps> = () => (
  <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
    <Text variant="h1">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h2">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h3">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h4">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h5">Almost before we knew it, we had left the ground.</Text>
    <Text variant="h6">Almost before we knew it, we had left the ground.</Text>
    <Text variant="body1">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="body2">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="footnote">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="caption1">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="caption2">
      Almost before we knew it, we had left the ground.
    </Text>
  </Box>
);

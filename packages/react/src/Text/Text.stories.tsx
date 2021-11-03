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
    <Text variant="headlineLarge">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="headlineMedium">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="headlineSmall">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="titleLarge">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="titleMedium">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="titleSmall">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="bodyLarge">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="bodyMedium">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text variant="bodySmall">
      Almost before we knew it, we had left the ground.
    </Text>
  </Box>
);

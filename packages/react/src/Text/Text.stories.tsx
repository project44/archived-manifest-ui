import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, Flex } from '../';
import { Text, TextProps } from './';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Almost before we knew it, we had left the ground.',
  isTruncated: false,
  size: '4',
  variant: 'contrast',
};

export const Size: Story<TextProps> = (args) => (
  <Flex direction="column" gap="4">
    <Text {...args} size="9">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="8">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="7">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="6">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="5">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="4">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="3">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="2">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} size="1">
      Almost before we knew it, we had left the ground.
    </Text>
  </Flex>
);

export const Truncated: Story<TextProps> = (args) => (
  <Box
    css={{
      br: '$1',
      border: '1px dashed $gray3',
      width: '300px',
      p: '$1',
      resize: 'horizontal',
      overflow: 'scroll',
    }}
  >
    <Text {...args} isTruncated>
      Almost before we knew it, we had left the ground.
    </Text>
  </Box>
);

export const Variant: Story<TextProps> = (args) => (
  <Flex direction="column" gap="4">
    <Text {...args} variant="contrast">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="gray">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="red">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="orange">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="yellow">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="green">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="teal">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="blue">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="purple">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} variant="pink">
      Almost before we knew it, we had left the ground.
    </Text>
  </Flex>
);

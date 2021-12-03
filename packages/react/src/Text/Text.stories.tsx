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
  fontSize: '4',
  fontWeight: 'normal',
  variant: 'contrast',
};

export const FontSize: Story<TextProps> = (args) => (
  <Flex direction="column" gap="4">
    <Text {...args} fontSize="9">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="8">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="7">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="6">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="5">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="4">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="3">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontSize="2">
      Almost before we knew it, we had left the ground.
    </Text>
  </Flex>
);

export const FontWeight: Story<TextProps> = (args) => (
  <Flex direction="column" gap="4">
    <Text {...args} fontWeight="normal">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontWeight="medium">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontWeight="semibold">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} fontWeight="bold">
      Almost before we knew it, we had left the ground.
    </Text>
  </Flex>
);

export const Status: Story<TextProps> = (args) => (
  <Flex direction="column" gap="4">
    <Text {...args} status="success">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} status="warning">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} status="danger">
      Almost before we knew it, we had left the ground.
    </Text>
    <Text {...args} status="info">
      Almost before we knew it, we had left the ground.
    </Text>
  </Flex>
);

export const Truncated: Story<TextProps> = (args) => (
  <Box
    css={{
      br: '$small',
      border: '1px dashed $neutral3',
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
    <Text {...args} variant="secondary">
      Almost before we knew it, we had left the ground.
    </Text>
  </Flex>
);

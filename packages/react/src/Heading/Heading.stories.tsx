import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box, Flex } from '../';
import { Heading } from './';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

const Template: Story = (args) => <Heading {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Almost before we knew it, we had left the ground.',
  isTruncated: false,
  size: '3',
  variant: 'contrast',
};

export const Size: Story = (args) => (
  <Flex direction="column" gap="4">
    <Heading {...args} size="5">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="4">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="3">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="2">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="1">
      Almost before we knew it, we had left the ground.
    </Heading>
  </Flex>
);

export const Truncated: Story = (args) => (
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
    <Heading {...args} isTruncated>
      Almost before we knew it, we had left the ground.
    </Heading>
  </Box>
);

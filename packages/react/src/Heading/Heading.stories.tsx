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
  size: 'large',
};

export const Size: Story = (args) => (
  <Flex direction="column" gap="4">
    <Heading {...args} size="xxlarge">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="xlarge">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="large">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="medium">
      Almost before we knew it, we had left the ground.
    </Heading>
    <Heading {...args} size="small">
      Almost before we knew it, we had left the ground.
    </Heading>
  </Flex>
);

export const Truncated: Story = (args) => (
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
    <Heading {...args} isTruncated>
      Almost before we knew it, we had left the ground.
    </Heading>
  </Box>
);

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Flex } from '../';
import { Button, ButtonProps } from './';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Button',
  isDisabled: false,
  isFullWidth: false,
  size: '2',
  variant: 'solid',
};

export const Size: Story<ButtonProps> = (args) => (
  <Flex align="center" gap="4">
    <Button {...args} size="1">
      Button
    </Button>
    <Button {...args} size="2">
      Button
    </Button>
    <Button {...args} size="3">
      Button
    </Button>
  </Flex>
);

export const Variant: Story<ButtonProps> = (args) => (
  <Flex align="center" gap="4">
    <Button {...args} variant="solid">
      Button
    </Button>
    <Button {...args} variant="outline">
      Button
    </Button>
    <Button {...args} variant="ghost">
      Button
    </Button>
    <Button {...args} variant="link">
      Button
    </Button>
  </Flex>
);

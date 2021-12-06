import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Flex } from '../';
import { Input, InputProps } from './';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Search',
  size: '2',
};

export const Size: Story<InputProps> = (args) => (
  <Flex direction="column" gap="4">
    <Input {...args} size="1" />
    <Input {...args} size="2" />
  </Flex>
);
Size.args = {
  placeholder: 'Search',
};

export const State: Story<InputProps> = (args) => (
  <Flex direction="column" gap="4">
    <Input {...args} state="valid" />
    <Input {...args} state="invalid" />
  </Flex>
);
State.args = {
  placeholder: 'Search',
};

export const Variant: Story<InputProps> = (args) => (
  <Flex direction="column" gap="4">
    <Input {...args} />
    <Input {...args} variant="ghost" />
  </Flex>
);
Variant.args = {
  placeholder: 'Search',
};

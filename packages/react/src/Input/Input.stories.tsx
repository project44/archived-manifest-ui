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
  size: 'medium',
};

export const Size: Story<InputProps> = (args) => (
  <Flex direction="column" gap="4">
    <Input {...args} size="small" />
    <Input {...args} size="medium" />
  </Flex>
);
Size.args = {
  placeholder: 'Search',
};

export const Status: Story<InputProps> = (args) => (
  <Flex direction="column" gap="4">
    <Input {...args} status="success" />
    <Input {...args} status="warning" />
    <Input {...args} status="danger" />
  </Flex>
);
Status.args = {
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

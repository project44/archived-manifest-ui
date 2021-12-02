import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './';
import type { InputProps } from './';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Search',
};

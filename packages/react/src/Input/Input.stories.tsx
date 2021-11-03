import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Different variants of inputs',
      table: {
        type: {
          summary: 'normal|success|warning|danger',
        },
        defaultValue: { summary: 'normal' },
      },
      control: { type: 'radio' },
      options: ['normal', 'success', 'warning', 'danger'],
    },
    disabled: {
      description: 'Set the button to a disabled state',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Search',
  variant: 'normal',
};

export const Success = Template.bind({});
Success.args = {
  placeholder: 'Search',
  variant: 'success',
};

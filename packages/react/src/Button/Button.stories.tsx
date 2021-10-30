import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './';
import { ButtonProps } from '..';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      description: 'Different types of buttons',
      table: {
        type: {
          summary: 'primary|secondary|tertiary|success|danger',
        },
        defaultValue: { summary: 'primary' },
      },
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'success', 'danger'],
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    rightIcon: {
      description: 'Icon Component on right of text',
      table: {
        type: { summary: 'icon' },
      },
    },
    leftIcon: {
      description: 'Icon Component on left of text',
      table: {
        type: { summary: 'icon' },
      },
    },
    isFullWidth: {
      description: 'Used to give the icon full width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    isDisabled: {
      description: 'if button is disabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary',
  variant: 'tertiary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  variant: 'danger',
};

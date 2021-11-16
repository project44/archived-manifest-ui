import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './';
import type { ButtonProps } from '../';

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
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Different supported button sizes',
      table: {
        type: {
          summary: 'small|medium|large',
        },
        defaultValue: { summary: 'medium' },
      },
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
    isLoading: {
      description:
        'Used to indicate a loading state, which also ensures that the button is disabled',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    isFull: {
      description: 'Used to give the button full container width',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
    isDisabled: {
      description: 'Set the button to a disabled state',
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

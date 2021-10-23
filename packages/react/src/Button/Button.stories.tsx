import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from '../';

export default {
  title: 'Components/Forms/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      name: 'colorScheme',
      type: { name: 'string', required: false },
      description: 'color scheme to use on top of button variant (for Danger)',
      table: {
        type: { summary: 'danger' },
      },
    },
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'solid',
      description: 'different types of buttons',
      table: {
        type: {
          summary: 'solid|outline|ghost|link',
        },
        defaultValue: { summary: 'solid' },
      },
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
    isDisabled: {
      description: 'if button is disabled',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
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
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click Me',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: 'Click Me',
  isLoading: true,
};

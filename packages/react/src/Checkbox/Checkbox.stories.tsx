import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Checkbox, CheckboxProps, FormControl } from '../';

export default {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    isChecked: {
      description: 'if checkbox is checked',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isReadOnly: {
      description: 'if checkbox is read only',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isInvalid: {
      description: 'if checkbox is invalid',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    isIndeterminate: {
      description: 'if checkbox is indeterminate',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    defaultChecked: {
      description: 'if checkbox is default checked',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <FormControl>
    <Checkbox {...args} />
  </FormControl>
);

export const Default = Template.bind({});
Default.args = { children: 'Checkbox' };

export const Checked = Template.bind({});
Checked.args = { children: 'Checkbox', isChecked: true };

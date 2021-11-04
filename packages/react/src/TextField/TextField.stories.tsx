import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchIcon } from '../';
import { TextField, TextFieldProps } from './';

export default {
  title: 'Components/TextField',
  component: TextField,
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
    size: {
      name: 'size',
      type: { name: 'string', required: false },
      description: 'Different sizes of inputs',
      table: {
        type: {
          summary: 'small|medium|large',
        },
        defaultValue: { summary: 'medium' },
      },
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      description: 'Set the input to a disabled state',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  label: 'Label',
  id: 'label',
  helpText: 'Help text (optional)',
  placeholder: 'Input Text',
  variant: 'normal',
};

export const Addons = Template.bind({});
Addons.args = {
  label: 'Cell phone',
  id: 'phone',
  helpText: '',
  type: 'tel',
  placeholder: 'phone number',
  variant: 'normal',
  prefix: '+234',
};

export const Icons = Template.bind({});
Icons.args = {
  label: '',
  id: 'search',
  helpText: '',
  placeholder: 'Search',
  variant: 'normal',
  startIcon: <SearchIcon />,
};

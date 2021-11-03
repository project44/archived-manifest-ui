import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box } from '../Box';
import { StarIcon } from '../Icons';
import {
  Input,
  InputEndAddon,
  InputEndElement,
  InputGroup,
  InputStartAddon,
  InputStartElement,
} from './';
import type { InputProps } from './';

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

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Search',
  variant: 'normal',
  size: 'medium',
};

export const Group: Story<InputProps> = (args) => (
  <InputGroup>
    <InputStartElement>
      <StarIcon />
    </InputStartElement>
    <Input type="tel" placeholder="Phone number" {...args} />
    <InputEndElement>
      <StarIcon />
    </InputEndElement>
  </InputGroup>
);

export const Addon: Story<InputProps> = (args) => (
  <Box css={{ display: 'flex', flexDirection: 'column', gap: '$4' }}>
    <InputGroup>
      <InputStartAddon>+234</InputStartAddon>
      <Input type="tel" placeholder="Phone number" {...args} />
    </InputGroup>
    <InputGroup>
      <InputStartAddon>https://</InputStartAddon>
      <Input placeholder="mysite" {...args} />
      <InputEndAddon>.com</InputEndAddon>
    </InputGroup>
  </Box>
);

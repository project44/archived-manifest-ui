import * as React from 'react';
import { Toggle, ToggleProps } from '../src';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    children: { control: 'text' },
  },
} as Meta;

export const Default = (args: ToggleProps) => <Toggle {...args} />;
Default.args = {
  children: 'Toggle',
};

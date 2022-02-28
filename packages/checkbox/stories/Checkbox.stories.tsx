import * as React from 'react';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: CheckboxProps) => <Checkbox {...args} />;
Default.args = {
  children: 'Checkbox',
};

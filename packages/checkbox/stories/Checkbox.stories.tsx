import * as React from 'react';
import { Checkbox, CheckboxProps } from '../src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Default = (args: CheckboxProps) => <Checkbox {...args} />;

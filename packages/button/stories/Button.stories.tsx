import * as React from 'react';
import { Button, ButtonProps } from '../src';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: ButtonProps) => <Button {...args} />;

Base.args = {
  children: 'Button',
};

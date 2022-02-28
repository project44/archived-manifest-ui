import * as React from 'react';
import { Spinner, SpinnerProps } from '../src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: SpinnerProps) => <Spinner {...args} />;

Default.args = {};

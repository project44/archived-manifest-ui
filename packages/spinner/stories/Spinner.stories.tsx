import * as React from 'react';
import { Spinner, SpinnerProps } from '../src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: SpinnerProps) => <Spinner {...args} />;

Base.args = {};

import * as React from 'react';
import { Overline, OverlineProps } from '../src';

export default {
  title: 'Components/Overline',
  component: Overline,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: OverlineProps) => <Overline {...args} />;

Base.args = {
  children: 'Overline',
};

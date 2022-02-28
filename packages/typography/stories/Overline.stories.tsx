import * as React from 'react';
import { Overline, OverlineProps } from '../src';

export default {
  title: 'Components/Overline',
  component: Overline,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: OverlineProps) => <Overline {...args} />;

Default.args = {
  children: 'Overline',
};

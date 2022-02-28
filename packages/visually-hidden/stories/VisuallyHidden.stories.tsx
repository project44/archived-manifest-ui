import * as React from 'react';
import { VisuallyHidden, VisuallyHiddenProps } from '../src';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: VisuallyHiddenProps) => <VisuallyHidden {...args} />;
Default.args = {
  children: 'Visually Hidden Text',
};

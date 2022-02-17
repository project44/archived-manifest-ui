import * as React from 'react';
import { VisuallyHidden, VisuallyHiddenProps } from '../src';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: VisuallyHiddenProps) => <VisuallyHidden {...args} />;
Base.args = {
  children: 'Visually Hidden Text',
};

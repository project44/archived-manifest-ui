import * as React from 'react';
import { VisuallyHidden, VisuallyHiddenProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './VisuallyHidden.docs.mdx';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: VisuallyHiddenProps) => <VisuallyHidden {...args} />;
Default.args = {
  children: 'Visually Hidden Text',
};

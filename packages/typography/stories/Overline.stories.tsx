import * as React from 'react';
import { Overline, OverlineProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Overline.docs.mdx';

export default {
  title: 'Components/Overline',
  component: Overline,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: OverlineProps) => <Overline {...args} />;

Base.args = {
  children: 'Overline',
};

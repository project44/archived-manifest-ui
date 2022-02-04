import * as React from 'react';
import { Spinner, SpinnerProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Spinner.docs.mdx';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: SpinnerProps) => <Spinner {...args} />;

Default.args = {};

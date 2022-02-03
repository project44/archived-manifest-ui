import * as React from 'react';
import { Heading, HeadingProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Heading.docs.mdx';

export default {
  title: 'Components/Heading',
  component: Heading,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: HeadingProps) => <Heading {...args} />;

Base.args = {
  children: 'Advanced Supply Chain Visibility',
};

import * as React from 'react';
import { Body, BodyProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Body.docs.mdx';

export default {
  title: 'Components/Body',
  component: Body,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: BodyProps) => <Body {...args} />;

Base.args = {
  children: 'Advanced Supply Chain Visibility',
};

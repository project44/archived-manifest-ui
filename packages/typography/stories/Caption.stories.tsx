import * as React from 'react';
import { Caption, CaptionProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Caption.docs.mdx';

export default {
  title: 'Components/Caption',
  component: Caption,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: CaptionProps) => <Caption {...args} />;

Base.args = {
  children: 'Caption',
};

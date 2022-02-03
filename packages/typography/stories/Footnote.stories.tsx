import * as React from 'react';
import { Footnote, FootnoteProps } from '../src';
// @ts-expect-error: TODO support mdx in ts files
import docs from './Footnote.docs.mdx';

export default {
  title: 'Components/Footnote',
  component: Footnote,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: FootnoteProps) => <Footnote {...args} />;

Base.args = {
  children: 'Footnote',
};

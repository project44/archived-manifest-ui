import * as React from 'react';
import { Footnote, FootnoteProps } from '../src';

export default {
  title: 'Components/Footnote',
  component: Footnote,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: FootnoteProps) => <Footnote {...args} />;

Default.args = {
  children: 'Footnote',
};

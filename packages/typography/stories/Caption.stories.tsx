import * as React from 'react';
import { Caption, CaptionProps } from '../src';

export default {
  title: 'Components/Caption',
  component: Caption,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: CaptionProps) => <Caption {...args} />;

Default.args = {
  children: 'Caption',
};

import * as React from 'react';
import { Tag, TagProps } from '../src';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: TagProps) => <Tag {...args} />;
Default.args = {
  children: 'Default',
};

import * as React from 'react';
import { Tag, TagProps } from '../src';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: TagProps) => <Tag {...args} />;
Base.args = {
  children: 'Default',
};

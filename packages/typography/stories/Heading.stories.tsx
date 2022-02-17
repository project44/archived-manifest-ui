import * as React from 'react';
import { Heading, HeadingProps } from '../src';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: HeadingProps) => <Heading {...args} />;

Base.args = {
  children: 'Advanced Supply Chain Visibility',
};

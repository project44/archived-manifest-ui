import * as React from 'react';
import { Heading, HeadingProps } from '../src';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: HeadingProps) => <Heading {...args} />;

Default.args = {
  children: 'Advanced Supply Chain Visibility',
};

import * as React from 'react';
import { Body, BodyProps } from '../src';

export default {
  title: 'Components/Body',
  component: Body,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: BodyProps) => <Body {...args} />;

Base.args = {
  children: 'Advanced Supply Chain Visibility',
};

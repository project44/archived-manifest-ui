import * as React from 'react';
import { Box, BoxProps } from '../src';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: BoxProps) => <Box {...args} />;

Base.args = {
  sx: { backgroundColor: 'primary.500', height: 200, width: 200 },
};

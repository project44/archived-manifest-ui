import * as React from 'react';
import { Box, BoxProps } from '../src';

export default {
  component: Box,
  title: 'Components/Box',
};

export const Default = (args: BoxProps) => <Box {...args} />;

Default.args = {
  css: { backgroundColor: '$brand-primary', height: 200, width: 200 },
};

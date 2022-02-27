import * as React from 'react';
import { Box, Grid, GridProps } from '../src';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Base = (args: GridProps) => <Grid {...args} />;

Base.args = {
  columns: 2,
  children: (
    <>
      <Box sx={{ backgroundColor: 'primary.500', height: 64 }} />
      <Box sx={{ backgroundColor: 'primary.500', height: 64 }} />
      <Box sx={{ backgroundColor: 'primary.500', height: 64 }} />
      <Box sx={{ backgroundColor: 'primary.500', height: 64 }} />
      <Box sx={{ backgroundColor: 'primary.500', height: 64 }} />
    </>
  ),
};

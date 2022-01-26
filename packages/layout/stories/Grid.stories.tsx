import * as React from 'react';
import { Box, Grid, GridProps } from '../src';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = args => (
  <Grid {...args}>
    <Box sx={{ backgroundColor: '#D5D7D9', p: 2 }}>Box</Box>
    <Box sx={{ backgroundColor: '#D5D7D9', p: 2 }}>Box</Box>
    <Box sx={{ backgroundColor: '#D5D7D9', p: 2 }}>Box</Box>
    <Box sx={{ backgroundColor: '#D5D7D9', p: 2 }}>Box</Box>
    <Box sx={{ backgroundColor: '#D5D7D9', p: 2 }}>Box</Box>
  </Grid>
);

export const Columns = Template.bind({});
Columns.args = {
  columns: [1, 1, '2fr 1fr'],
};

export const Width = Template.bind({});
Width.args = {
  columnWidth: [null, 128, null, 192],
};

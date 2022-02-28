import * as React from 'react';
import { Box, Flex, FlexProps } from '../src';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = (args: FlexProps) => <Flex {...args} />;

Default.args = {
  children: (
    <>
      <Box sx={{ backgroundColor: 'primary.500', flex: 1, p: 4 }}>Box</Box>
      <Box sx={{ backgroundColor: 'neutral.500', flex: 1, p: 4 }}>Box</Box>
    </>
  ),
  align: 'center',
  direction: 'row',
};

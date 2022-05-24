import * as React from 'react';
import { Box, Flex, FlexProps } from '../src';

export default {
  component: Flex,
  title: 'Components/Flex',
};

export const Default = (args: FlexProps) => <Flex {...args} />;

Default.args = {
  align: 'center',
  children: (
    <>
      <Box css={{ backgroundColor: '$background-secondary', flex: 1, p: 4 }}>Box</Box>
      <Box css={{ backgroundColor: '$background-tertiary', flex: 1, p: 4 }}>Box</Box>
    </>
  ),
  direction: 'horizontal',
};

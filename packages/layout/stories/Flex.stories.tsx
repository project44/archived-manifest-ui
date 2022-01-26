import * as React from 'react';
import { Box, Flex } from '../src';

export default {
  title: 'Components/Flex',
  component: Flex,
};

export const Basic = () => (
  <Flex align="center" direction="row">
    <Box sx={{ backgroundColor: '#B8BBBF', flex: 1, p: 4 }}>Box</Box>
    <Box sx={{ backgroundColor: '#D5D7D9', flex: 1, p: 4 }}>Box</Box>
  </Flex>
);

import React from 'react';
import { Grid, useColorModeValue } from '@manifest-ui/react';
import type { GridProps } from '@manifest-ui/react';

const Example = (props: GridProps) => (
  <Grid
    gap="4"
    gridTemplateColumns="repeat(5, auto)"
    borderRadius="lg"
    borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
    borderWidth="thin"
    p="3"
    {...props}
  />
);

export default Example;

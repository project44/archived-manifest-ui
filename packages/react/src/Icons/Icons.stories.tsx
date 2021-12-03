import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box, IconProps } from '../';
import * as Icons from './';

export default {
  title: 'Components/Icons',
} as Meta;

export const All: Story<IconProps> = (args) => (
  <Box
    css={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '$5',
      my: '$4',
      mx: 'auto',
      maxWidth: '30rem',
      alignItems: 'center',
    }}
  >
    {
      // Ignoring due to following error:
      // TS2590: Expression produces a union type that is too complex to represent
      //
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Object.entries(Icons).map(([key, Icon]) => (
        <Icon key={key} {...args} />
      ))
    }
  </Box>
);

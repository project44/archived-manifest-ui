import * as React from 'react';
import { Box, Flex } from '@manifest-ui/layout';
import { Popover, PopoverAnchor, PopoverContent, PopoverProps, PopoverTrigger } from '../src';
import { Button } from '@manifest-ui/button';
import { Input } from '@manifest-ui/input';

export default {
  title: 'Components/Popover',
  component: Popover,
};

export const Default = (args: PopoverProps) => (
  <Popover {...args}>
    <PopoverTrigger>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Box sx={{ p: 5 }}>I am a popover!</Box>
    </PopoverContent>
  </Popover>
);
Default.args = {};

export const Anchor = (args: PopoverProps) => (
  <Popover {...args}>
    <Flex sx={{ gap: 2, p: 5 }}>
      <PopoverAnchor>
        <Input placeholder="Popover Anchor" />
      </PopoverAnchor>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
    </Flex>
    <PopoverContent>
      <Box sx={{ p: 5 }}>I am a popover!</Box>
    </PopoverContent>
  </Popover>
);
Anchor.args = {};

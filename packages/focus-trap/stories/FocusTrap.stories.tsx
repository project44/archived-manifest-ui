import * as React from 'react';
import { FocusTrap, FocusTrapProps } from '../src';
import { Button } from '@manifest-ui/button';
import { Flex } from '@manifest-ui/layout';

export default {
  title: 'Components/FocusTrap',
  component: FocusTrap,
};

export const Default = (args: FocusTrapProps) => (
  <FocusTrap {...args}>
    <Flex sx={{ gap: 2 }}>
      <Button>button 1</Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
    </Flex>
  </FocusTrap>
);
Default.args = {};

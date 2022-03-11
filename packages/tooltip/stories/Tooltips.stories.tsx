import * as React from 'react';
import { Tooltip, TooltipProps } from '../src';
import { Button } from '@manifest-ui/button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

export const Default = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
);

Default.args = {
  label: 'Tooltip',
};

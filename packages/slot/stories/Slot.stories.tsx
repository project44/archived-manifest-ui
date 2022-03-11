import * as React from 'react';
import { Slot, SlotProps } from '../src';
import { Button } from '@manifest-ui/button';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Slot',
  component: Slot,
} as Meta;

export const Default = (args: SlotProps) => <Slot {...args} />;

Default.args = {
  isDisabled: true,
  children: <Button>Disabled Button</Button>,
};
